import { NodeProps, Handle,Position } from "reactflow";

export function Square(props: NodeProps) {
  return (
    <div className="bg-violet-500 rounded w-[150px] h-[100px]">
      <Handle 
        id="right" 
        position={Position.Right} 
        type="source"
        className="-right-4 w-2 h-2 bg-blue-400/80"  
      />
      <Handle 
        id="left" 
        position={Position.Left} 
        type="source"
        className="-left-4 w-2 h-2 bg-blue-400/80" 
      />
      <Handle 
        id="top" 
        position={Position.Top} 
        type="source"
        className="-top-4 w-2 h-2 bg-blue-400/80" 
      />
      <Handle 
        id="bottom" 
        position={Position.Bottom} 
        type="source"
        className="-bottom-4 w-2 h-2 bg-blue-400/80" 
      />
    </div>
  )
}