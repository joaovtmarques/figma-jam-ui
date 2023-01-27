import { NodeProps, Handle,Position } from "reactflow";

export function Square(props: NodeProps) {
  return (
    <div className="bg-violet-500 rounded w-[250px] h-[150px]">
      <Handle 
        id="right" 
        position={Position.Right} 
        type="source"
        className="-right-5 w-3 h-3 bg-blue-400/80"  
      />
      <Handle 
        id="left" 
        position={Position.Left} 
        type="source"
        className="-left-5 w-3 h-3 bg-blue-400/80" 
      />
      <Handle 
        id="top" 
        position={Position.Top} 
        type="source"
        className="-top-5 w-3 h-3 bg-blue-400/80" 
      />
      <Handle 
        id="bottom" 
        position={Position.Bottom} 
        type="source"
        className="-bottom-5 w-3 h-3 bg-blue-400/80" 
      />
    </div>
  )
}