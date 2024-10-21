/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AceEditor from "react-ace";
import { useContext, useState } from "react";
import {
  AiOutlineUpload,
  AiOutlineShareAlt,
  AiOutlineCopy,
} from "react-icons/ai";
import Head from "next/head";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/ext-language_tools";

import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/theme-toggle";
import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/utils/util";
import { LANGUAGES } from "@/constant";

const MODES: { [key: string]: string } = {
  "97": "javascript",
  "105": "c_cpp",
  "92": "python",
  "91": "java",
};

interface Params {
  params: { langId: string };
}

const getAnswer = async ({
  url,
  method,
  body,
}: {
  url: string;
  method: string;
  body: any;
}) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return { data, status: response.status };
  } catch (error: any) {
    return error.message || "Something went wrong";
  }
};

const Page = ({ params }: Params) => {
  const { theme } = useContext(ThemeContext);
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const { langId }: { langId: string } = params;

  const currentLanguageData = LANGUAGES.find(
    (lang) => lang.id === parseInt(langId)
  );

  if (!currentLanguageData) {
    return router.push("/compile");
  }

  const handleSubmitCode = async (code: any) => {
    if (!code) {
      return;
    }

    setLoading(true);
    try {
      const { data, status } = await getAnswer({
        url: "/api/submission",
        method: "POST",
        body: {
          source_code: code,
          language_id: langId,
        },
      });

      if (status === 429) {
        toast.error("Too many requests, please try again later");
      }

      setOutput(data.data);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden dark:bg-[#232323]">
      <Head>
        <title>{currentLanguageData!.title}</title>
        <meta name="description" content={currentLanguageData!.title} />
        <meta property="og:title" content={currentLanguageData!.title} />
        <meta property="og:description" content={currentLanguageData!.title} />

        <meta name="twitter:title" content={currentLanguageData!.title} />
        <meta name="twitter:description" content={currentLanguageData!.title} />
      </Head>

      <div className="flex-[0.5] h-screen w-full ">
        <div className="flex items-center justify-between p-6 py-4">
          <span className="text-center text-2xl md:text-xl lg:text-2xl relative z-20 font-normal tracking-tight text-black dark:text-white">
            {currentLanguageData!.title}
          </span>
          <div className="flex gap-2 items-center">
            <Button
              EndIcon={AiOutlineUpload}
              className="bg-white text-black dark:text-white text-sm font-normal dark:bg-[#232323]"
              onClick={() => handleSubmitCode(code)}
              disabled={!code || loading}
            >
              {loading ? "Running..." : "Run"}
            </Button>
            <Button
              className="bg-white text-black dark:text-white text-sm font-normal dark:bg-[#232323]"
              EndIcon={AiOutlineShareAlt}
              onClick={() => {
                try {
                  const origin = new URL(window.location.href).origin;
                  navigator.share({
                    title: "DCompiler",
                    text: "Check out this code",
                    url: origin,
                  });
                } catch (e) {
                  console.error(e);
                }
              }}
            >
              Share
            </Button>
            <ThemeToggle />
          </div>
        </div>
        <AceEditor
          mode={MODES[langId]}
          theme={theme === "dark" ? "github" : "twilight"}
          name="UNIQUE_ID_OF_DIV"
          value={code}
          onChange={(value) => setCode(value)}
          editorProps={{ $blockScrolling: true }}
          enableBasicAutocompletion={true}
          enableLiveAutocompletion={true}
          enableSnippets={true}
          focus={true}
          fontSize={16}
          showGutter={true}
          height="100%"
          width="100%"
          highlightActiveLine={true}
          wrapEnabled={true}
          lineHeight={24}
          placeholder=" // Write your code here..."
          commands={[
            {
              name: "compile",
              bindKey: { win: "Ctrl-Enter", mac: "Command-Enter" },
              exec: async (editor) => {
                await handleSubmitCode(editor.getValue());
              },
            },
            {
              name: "Paste",
              bindKey: { win: "Ctrl-V", mac: "Command-V" },
              exec: async (editor) => {
                navigator.clipboard.readText().then((text) => {
                  editor.insert(text);
                });
              },
            },
            {
              name: "Copy Output",
              bindKey: { win: "Ctrl-O", mac: "Command-O" },
              exec: async () => {
                if (!output?.stdout) {
                  toast.error("No output to copy");
                  return;
                }

                navigator.clipboard.writeText(output?.stdout || "");
                toast.success("Output copied to clipboard");
              },
            },
          ]}
        />
      </div>
      <div className="flex-[0.5] border-l-4">
        <div className="flex items-center justify-between p-6 py-4">
          <div className="text-left text-2xl md:text-xl lg:text-2xl relative z-20 font-normal tracking-tight text-black dark:text-white">
            Output
          </div>
          <div className="flex gap-2 items-center">
            <Button
              className="bg-white text-black dark:text-white text-sm font-normal dark:bg-[#232323]"
              onClick={() => {
                navigator.clipboard.writeText(output?.stdout || "");
                toast.success("Copied to clipboard");
              }}
              EndIcon={AiOutlineCopy}
            >
              Copy
            </Button>
          </div>
        </div>
        <div>
          <div
            className={cn(
              "grid grid-cols-2 gap-4 text-black dark:text-white px-4 py-2",
              {
                hidden: !output,
              }
            )}
          >
            <div>
              <div className="text-sm">Status</div>
              <div>{output?.status?.description}</div>
            </div>
            <div>
              <div className="text-sm">Time</div>
              <div>{output?.time}</div>
            </div>
            <div>
              <div className="text-sm">Memory</div>
              <div>{output?.memory}</div>
            </div>
            <div>
              <div className="text-sm">Wall Time</div>
              <div>{output?.wall_time}</div>
            </div>
          </div>
          <hr />
          <textarea
            className="w-full h-full overflow-scroll p-6 py-4 font-normal text-black dark:text-white dark:bg-[#232323] resize-none text-xl"
            placeholder="Output will be displayed here..."
            value={output?.stdout || output?.stderr || output?.message || ""}
            disabled={true}
            rows={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
