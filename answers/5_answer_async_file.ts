import fs from 'fs';

interface IChild {
  id: number;
  name: string;
  parent_id: number;
}

interface IParent {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  children: IChild[];
}

function isParent(parent: any): parent is IParent {
  if (
    !('id' in parent) ||
    !('first_name' in parent) ||
    !('last_name' in parent) ||
    !('gender' in parent)
  ) return false;
  if (
    typeof parent.id !== 'number' ||
    typeof parent.first_name !== 'string' ||
    typeof parent.last_name !== 'string' ||
    typeof parent.gender !== 'string'
  ) return false;
  return true;
}

function isChild(child: any): child is IChild {
  if (
    !('id' in child) ||
    !('name' in child) ||
    !('parent_id' in child)
  ) return false;
  if (
    typeof child.id !== 'number' ||
    typeof child.name !== 'string' ||
    typeof child.parent_id !== 'number'
  ) return false;
  return true;
}

fs.readFile('./parents.json', 'utf8', (error, data) => {
  if (error) console.log(error);
  const parents: IParent[] = JSON.parse(data);
  for (let i = 0; i < parents.length; i++) {
    if (!isParent(parents[i])) return console.log('fail to parse parents');
  }
  fs.readFile('./children.json', 'utf8', (error, data) => {
    const children: IChild[] = JSON.parse(data);
    for (let i = 0; i < children.length; i++) {
      if (!isChild(children[i])) return console.log('fail to parse child');
    }
    const parentsWithChildren = parents.map((parent) => {
      children.forEach((child) => {
        if (!parent.children) parent.children = [];
        if (child.parent_id === parent.id) parent.children.push(child);
      });
      return parent;
    });
    console.log(JSON.stringify(parentsWithChildren, null, 2));
  });
});

