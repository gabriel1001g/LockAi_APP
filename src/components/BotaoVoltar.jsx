import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";


export default function BotaoVoltar(){
    return(
        <div className="p-4 flex items-center">
        <button className="bg-blue-600 p-2 rounded-full">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        </div>
    )
};