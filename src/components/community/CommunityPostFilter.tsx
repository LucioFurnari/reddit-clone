import { MaterialSymbolsTableRows } from "../ReactIcons"

function CommunityPostFilter () {
  return (
    <section>
      <ul>
        <li>
          <span>Hot</span>
        </li>
        <li>
          <span>New</span>
        </li>
        <li>
          <span>Top</span>
        </li>
      </ul>
      <button>
        <MaterialSymbolsTableRows />
      </button>
    </section>
  )
}