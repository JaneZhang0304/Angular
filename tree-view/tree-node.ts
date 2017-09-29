export class TreeNode<T>{
    name:string;
    node:T;
    parent:TreeNode<T>;
    childLeaves:TreeNode<T>[]; // 叶子节点
    childNodes:TreeNode<T>[]; // 子节点中依然包含子节点

    expanded:boolean = false;

    constructor(){
        this.childLeaves = [];
        this.childNodes = [];
    }

    toggle(){
        this.expanded = !this.expanded;
    }
}