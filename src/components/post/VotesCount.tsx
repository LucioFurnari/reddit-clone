import { MdiArrowDownBoldOutline, MdiArrowUpBoldOutline } from "../ReactIcons"

export function VotesCount (props: { votes: number }) {
  return (
    <div className="px-2 pt-2 bg-[#151516] rounded-l-md">
      <button className="p-1 block hover:bg-[#272729] group">
        <MdiArrowUpBoldOutline />
      </button>
      <span className=" block text-center text-sm">{props.votes}</span>
      <button className="p-1 block hover:bg-[#272729] group">
        <MdiArrowDownBoldOutline />
      </button>
    </div>
  )
}

export default VotesCount;