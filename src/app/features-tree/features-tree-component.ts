import { Component, Input, OnInit } from '@angular/core';
import { TreeModel, TreeNode, TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';

const actionMapping: IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) {
        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      }
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_SELECTED_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_SELECTED(tree, node, $event);
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
export class FeaturesTreeComponent implements OnInit {
  private nodes: any[];

  public ngOnInit() {
    setTimeout(() => {
      this.nodes = [];
    }, 1);
  }
  public addNode(tree, newName) {
    this.nodes.push({

      name: newName
    });
    tree.treeModel.update();
  }

  public childrenCount(node: TreeNode): string {
    return node && node.children ? `(${node.children.length})` : '';
  }

  public filterNodes(text, tree) {
    tree.treeModel.filterNodes(text);

  }

  public activateSubSub(tree) {
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
  public onEvent(event: Event) {
    console.log(event);
  }

  public go($event: Event) {
    $event.stopPropagation();
    alert('this method is on the app component');
  }

  // activeNodes(treeModel) {
  //   console.log(treeModel.activeNodes);
  // }
}
