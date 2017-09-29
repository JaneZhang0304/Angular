import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TreeNode } from './tree-node';

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.html',
    styleUrls: ['./tree-view.css']
})

export class TreeViewComponent<T> implements OnInit {

    static currentNode: any;

    @Input() nodes: TreeNode<T>[];
    @Output() doSomethingEvent = new EventEmitter<TreeNode<T>>();

    get staticCurrentNode() {
        return TreeViewComponent.currentNode;
    }

    doSomething(node: TreeNode<T>): boolean {
        console.log('doSomething:', node.name);
        TreeViewComponent.currentNode = node;
        this.doSomethingEvent.emit(node);
        return false;
    }

    ngOnInit(): void {
        // console.log(this.nodes);
        // console.log(this.nodes.length);
    }

    ngOnChanges(changes: SimpleChanges) {
        // if(changes['nodes']){
        //     console.log(this.nodes);
        // }
    }

    popEventHandler(node: TreeNode<T>): boolean {
        console.log('popEventHandler:', node.name);
        this.doSomethingEvent.emit(node);
        return false;
    }
}