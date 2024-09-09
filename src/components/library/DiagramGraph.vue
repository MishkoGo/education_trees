<template>
    <div ref="diagramContainer" class="diagram-container"></div>
  </template>
  
  <script>
  import * as joint from 'jointjs';
  
  export default {
    name: 'DiagramComponent',
    mounted() {
      this.graph = new joint.dia.Graph();
  
      this.paper = new joint.dia.Paper({
        el: this.$refs.diagramContainer,
        model: this.graph,
        width: 1000,
        height: 400,
        gridSize: 10,
        drawGrid: true,
      });
  
      const rect1 = new joint.shapes.standard.Rectangle();
      rect1.position(100, 150);
      rect1.resize(180, 40);
      rect1.attr({
        body: {
          fill: 'white', 
        }, 
        label: {
          text: 'Название навыка',
          fill: 'black',
        },
      });
      rect1.addTo(this.graph);
  
      const rect2 = new joint.shapes.standard.Rectangle();
      rect2.position(100, 190);
      rect2.resize(180, 40);
      rect2.attr({
        body: {
          fill: 'white',
        },
        label: {
          text: 'Название уровня навыка',
          fill: 'black',
        },
      });
      rect2.addTo(this.graph);
  
      const elements = [rect1, rect2];
      const startPositions = elements.map(el => el.position());
      let isUpdating = false; 
  
      elements.forEach((element, index) => {
        element.on('change:position', function (el, newPos) {
          if (isUpdating) return; 
  
          isUpdating = true;
          const dx = newPos.x - startPositions[index].x;
          const dy = newPos.y - startPositions[index].y;
  
          elements.forEach((otherEl, otherIndex) => {
            if (otherEl !== el) {
              const pos = startPositions[otherIndex];
              otherEl.position(pos.x + dx, pos.y + dy);
            }
          });
  
          isUpdating = false;
        });
      });
    
      const rect3 = new joint.shapes.standard.Rectangle();
      rect3.position(450, 50);
      rect3.resize(180, 40);
      rect3.attr({
        body: {
          fill: 'white',
        },
        label: {
          text: 'Название навыка',
          fill: 'black',
        },
      });
      rect3.addTo(this.graph);
  
      const rect4 = new joint.shapes.standard.Rectangle();
      rect4.position(450, 90);
      rect4.resize(180, 40);
      rect4.attr({
        body: {
          fill: 'white',
        },
        label: {
          text: 'Название уровня навыка',
          fill: 'black',
        },
      });
      rect4.addTo(this.graph);

      const elements_1 = [rect3, rect4];
      const startPositions_1 = elements_1.map(el => el.position());
      let isUpdating_1 = false; 
  
      elements_1.forEach((element, index) => {
        element.on('change:position', function (el, newPos) {
          if (isUpdating_1) return; 
  
          isUpdating_1 = true;
          const dx = newPos.x - startPositions_1[index].x;
          const dy = newPos.y - startPositions_1[index].y;
   
          elements_1.forEach((otherEl, otherIndex) => {
            if (otherEl !== el) {
              const pos = startPositions_1[otherIndex];
              otherEl.position(pos.x + dx, pos.y + dy);
            }
          });
  
          isUpdating_1 = false;
        });
      });
    
      const link = new joint.shapes.standard.Link();
        link.source(rect1);
        link.target(rect3);
        link.attr({
        line: {
            stroke: 'black', 
            strokeWidth: 2,  
        }
        });
        link.labels([
        {
            attrs: {
            text: {
                text: 'Входной уровень навыка', 
            },
            },
        }
        ]);
        link.addTo(this.graph);
    },
  };
  </script>
  
  <style>
  .diagram-container {
    border: 1px solid #ccc;
  }
  </style>
  