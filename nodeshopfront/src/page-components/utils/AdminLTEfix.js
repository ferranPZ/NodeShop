const $ = window.$; export function loadTree() {
  const trees: any = $('[data-widget="treeview"]');
         trees.Treeview('init');
}