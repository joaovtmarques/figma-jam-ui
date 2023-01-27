import * as ToolBar from '@radix-ui/react-toolbar'

const onDragStart = (event: any, nodeType: any) => {
  event.stopPropagation();
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
};

export function Sidebar() {

  return (
    <ToolBar.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-[450px] overflow-hidden'>
      <ToolBar.Button>
        <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'square')} draggable>
          Input Node
        </div>
      </ToolBar.Button>
    </ToolBar.Root>
  )
}