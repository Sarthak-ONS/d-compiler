"use client";

import AceEditor from "react-ace";
import { useContext, useState } from "react";
import {
  AiOutlineUpload,
  AiOutlineShareAlt,
  AiOutlineLoading,
} from "react-icons/ai";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/ext-language_tools";

import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/theme-toggle";
import { ThemeContext } from "@/context/ThemeContext";
import { ApiError } from "@/utils/util";

const Page = () => {
  const { theme } = useContext(ThemeContext);
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitCode = async () => {
    if (!code) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/submission", {
        method: "POST",
        body: JSON.stringify({ code }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setOutput(data.data);
    } catch (error) {
      if (error instanceof ApiError) {
        console.error(error.message);
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden dark:bg-[#232323]">
      <div className="flex-[0.5] h-screen w-full ">
        <div className="flex items-center justify-between p-6 py-4">
          <span className="text-center text-2xl md:text-xl lg:text-2xl relative z-20 font-normal tracking-tight text-black dark:text-white">
            JavaScript
          </span>
          <div className="flex gap-2 items-center">
            <Button
              EndIcon={loading ? AiOutlineLoading : AiOutlineUpload}
              className="bg-white text-black dark:text-white text-sm font-normal dark:bg-[#232323]"
              onClick={handleSubmitCode}
              disabled={!code || loading}
            >
              {loading ? "Running..." : "Run"}
            </Button>
            <Button
              className="bg-white text-black dark:text-white text-sm font-normal dark:bg-[#232323]"
              EndIcon={AiOutlineShareAlt}
            >
              Share
            </Button>
            <ThemeToggle />
          </div>
        </div>
        <AceEditor
          mode="javascript"
          theme={theme === "light" ? "github" : "twilight"}
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
              exec: () => {
                console.log("Compile");
              },
            },
            {
              name: "run",
              bindKey: { win: "Ctrl-Shift-Enter", mac: "Command-Shift-Enter" },
              exec: () => {
                console.log("Run");
              },
            },
            {
              name: "Format",
              bindKey: { win: "Alt-Shift-F", mac: "Command-Shift-F" },
              exec: () => {
                console.log("Format");
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
              onClick={() =>
                navigator.clipboard.writeText(output?.stdout || "")
              }
            >
              copy
            </Button>
            <Button
              className="bg-white text-black dark:text-white text-sm font-normal dark:bg-[#232323]"
              onClick={() =>
                setOutput((prev: any) => ({ ...prev, stdout: "" }))
              }
            >
              Clear
            </Button>
          </div>
        </div>
        <div>
          <textarea
            className="w-full h-full p-6 py-4 font-normal text-black dark:text-white dark:bg-[#232323] resize-none text-xl"
            placeholder="Output will be displayed here..."
            value={output?.stdout}
            disabled={true}
            rows={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
