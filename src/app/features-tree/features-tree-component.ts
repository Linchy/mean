import { Component, Input } from '@angular/core';
import { TreeModel, TreeNode, TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';

const actionMapping:IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_SELECTED_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_SELECTED(tree, node, $event)
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};

@Component({
    selector: 'features-tree',
    templateUrl: './features-tree-component.html',
    styleUrls: ['./features-tree-component.scss']
  })
export class FeaturesTreeComponent {
  nodes: any[];
  
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.nodes = []
    }, 1);
  }
      //   {
      //     expanded: true,
      //     name: 'root expanded',
      //     subTitle: 'the root',
      //     children: [
      //       {
      //         name: 'child1',
      //         subTitle: 'a good child',
      //         hasChildren: false
      //       }, {
      //         name: 'child2',
      //         subTitle: 'a bad child',
      //         hasChildren: false
      //       }
      //     ]
      //   },
      //   {
      //     name: 'root2',
      //     subTitle: 'the second root',
      //     children: [
      //       {
      //         name: 'child2.1',
      //         subTitle: 'new and improved',
      //         hasChildren: false
      //       }, {
      //         name: 'child2.2',
      //         subTitle: 'new and improved2',
      //         children: [
      //           {
      //             uuid: 1001,
      //             name: 'subsub',
      //             subTitle: 'subsub',
      //             hasChildren: false
      //           }
      //         ]
      //       }
      //     ]
      //   },
      //   {
      //     name: 'asyncroot',
      //     hasChildren: true
      //   }
      // ];

      // for(let i = 0; i < 100; i++) {
      //   this.nodes.push({
      //     name: `rootDynamic${i}`,
      //     subTitle: `root created dynamically ${i}`,
      //     children: new Array(4).fill(null).map((item, n) => ({
      //       name: `childDynamic${i}.${n}`,
      //       subTitle: `child created dynamically ${i}`,
      //       hasChildren: false
      //     }))
      //   });
      // }

  // asyncChildren = [
  //   {
  //     name: 'child2.1',
  //     subTitle: 'new and improved'
  //   }, {
  //     name: 'child2.2',
  //     subTitle: 'new and improved2'
  //   }
  // ];

  // getChildren(node:any) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(this.asyncChildren.map((c) => {
  //       return Object.assign({}, c, {
  //         hasChildren: node.level < 5
  //       });
  //     })), 1000);
  //   });
  // }

  addNode(tree, newName) {
    this.nodes.push({

      name: newName
    });
    tree.treeModel.update();
  }

  childrenCount(node: TreeNode): string {
    return node && node.children ? `(${node.children.length})` : '';
  }

  filterNodes(text, tree) {
    tree.treeModel.filterNodes(text);
   
  }

  activateSubSub(tree) {
    // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
    tree.treeModel.getNodeById(1001)
      .setActiveAndVisible();
  }

  // customTemplateStringOptions = {
  //   // displayField: 'subTitle',
  //   isExpandedField: 'expanded',
  //   idField: 'uuid',
  //   getChildren: this.getChildren.bind(this),
  //   actionMapping,
  //   nodeHeight: 23,
  //   allowDrag: true,
  //   useVirtualScroll: true
  // }
  onEvent(event: Event) {
    console.log(event);
  }

  go($event: Event) {
    $event.stopPropagation();
    alert('this method is on the app component');
  }

  // activeNodes(treeModel) {
  //   console.log(treeModel.activeNodes);
  // }
}