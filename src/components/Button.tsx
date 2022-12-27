import type { JSXInternal } from "preact/src/jsx";

interface IButton {
  content: string;
  onClick?: JSXInternal.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({ content = "Click Me !", onClick }: IButton) {
  return (
    <button
      class="w-[100%] py-[10px] px-[16px] rounded-xl border border-[#802f6e] text-[#802f6e] font-bold transition duration-[200ms] hover:bg-[#802f6e] hover:text-white"
      onClick={onClick}
    >
      {content}
    </button>
  );
}
