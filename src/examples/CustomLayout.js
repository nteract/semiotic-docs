import NetworkFrame from "semiotic/lib/NetworkFrame"
const theme = [
  "#ac58e5",
  "#E0488B",
  "#9fd0cb",
  "#e0d33a",
  "#7566ff",
  "#533f82",
  "#7a255d",
  "#365350",
  "#a19a11",
  "#3f4482"
]
const frameProps = {
  edges: {
    name: "root",
    height: 38.961038961038966,
    width: 166.66666666666669,
    children: [
      {
        name: "a",
        height: 62.33766233766234,
        width: 66.66666666666667,
        children: [
          {
            name: "b",
            height: 124.67532467532467,
            width: 66.66666666666667,
            children: [
              {
                name: "c",
                height: 62.33766233766234,
                width: 166.66666666666669,
                children: [
                  {
                    name: "d",
                    height: 311.6883116883117,
                    width: 66.66666666666667
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "e",
        height: 62.33766233766234,
        width: 66.66666666666667,
        children: [
          {
            name: "f",
            height: 62.33766233766234,
            width: 66.66666666666667,
            children: [
              {
                name: "g",
                height: 62.33766233766234,
                width: 333.33333333333337,
                children: [
                  { name: "h", height: 93.50649350649351, width: 50 },
                  { name: "h1", height: 124.67532467532467, width: 50 },
                  { name: "h2", height: 62.33766233766234, width: 50 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "i",
        height: 62.33766233766234,
        width: 66.66666666666667,
        children: [
          {
            name: "j",
            height: 62.33766233766234,
            width: 166.66666666666669,
            children: [
              { name: "k", height: 311.6883116883117, width: 66.66666666666667 }
            ]
          }
        ]
      }
    ]
  },
  size: [700, 700],
  margin: 50,
  networkType: {
    zoom: flextreeZoom,
    type: "tree",
    layout: flextree,
    nodeSize: d => [d.data.width, d.data.height],
    spacing: 10
  },
  nodeIDAccessor: "name",
  edgeStyle: d => ({
    fill: theme[d.source.depth],
    stroke: theme[d.source.depth],
    strokeWidth: 5,
    opacity: 0.5
  }),
  customNodeIcon: ({ d }) => {
    return (
      <rect
        x={d.x - d.data.width / 2}
        y={d.y - 10}
        height={d.data.height - 10}
        width={d.data.width}
        fill="orange"
        stroke="gold"
      />
    )
  },
  hoverAnnotation: true
}

export default () => {
  return <NetworkFrame {...frameProps} />
}
