"use client";
import { Download } from "lucide-react"; 

export default function ResumeDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/begzod_resume.pdf";
    link.download = "resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="w-[38px] h-[38px] md:w-[45px] md:h-[45px] border-2 rounded-full flex items-center justify-center"
      onClick={handleDownload}
    >
      <Download />
    </div>
  );
}
