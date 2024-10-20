"use client";

import AceEditor from "react-ace";
import { useContext } from "react";
import { AiOutlineUpload, AiOutlineShareAlt } from "react-icons/ai";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/ext-language_tools";

import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/theme-toggle";
import { ThemeContext } from "@/context/ThemeContext";

const Page = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-row gap-4 h-screen overflow-hidden">
      <div className="flex-[0.5] h-screen w-full dark:bg-black/60">
        <div className="flex items-center justify-between px-6 py-2">
          <span className="text-center text-2xl md:text-xl lg:text-2xl relative z-20 font-normal tracking-tight text-black dark:text-white">
            JavaScript
          </span>
          <div className="flex gap-2 items-center">
            <Button
              EndIcon={AiOutlineUpload}
              className="bg-white dark:bg-pink-300 text-black dark:text-white text-sm font-semibold"
              onClick={() => {
                console.log("Button Clicked");
              }}
            >
              Run
            </Button>
            <ThemeToggle />
          </div>
        </div>
        <AceEditor
          mode="javascript"
          theme={theme === "light" ? "github" : "terminal"}
          name="UNIQUE_ID_OF_DIV"
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
        <div className="flex items-center justify-between px-6 py-2">
          <div className="text-left text-2xl md:text-xl lg:text-2xl relative z-20 font-normal tracking-tight text-black dark:text-white dark:bg-black/50">
            Output
          </div>
          <div className="flex gap-2 items-center">
            <Button
              EndIcon={AiOutlineShareAlt}
              className="bg-white dark:bg-pink-300 text-black dark:text-white text-sm font-semibold"
              onClick={() => {
                console.log("Button Clicked");
              }}
            >
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
