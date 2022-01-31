const select = [
  {
    src: '',
    name: 'Move',
    shortcut: 'V'
  },
  {
    src: '',
    name: 'Scale',
    shortcut: 'K'
  }
];
const view = [
    {
      src: '',
      name: 'Frame',
      shortcut: 'F'
    },
    {
      src: '',
      name: 'Slice',
      shortcut: 'S'
    }
]
const objdraw = [
  {
    src: '',
    name: 'Rectangle',
    shortcut: 'R'
  },
  {
    src: '',
    name: 'Line',
    shortcut: 'L'
  },
  {
    src: '',
    name: 'Arrow',
    shortcut: 'A'
  },
  {
    src: '',
    name: 'Ellipse',
    shortcut: ''
  },
  {
    src: '',
    name: 'Polygon',
    shortcut: 'O'
  },
  {
    src: '',
    name: 'Star',
    shortcut: ''
  },
  {
    src: '',
    name: 'put image',
    shortcut: ''
  }
];
const pendraw = [
    {
        src: '',
        name: 'Pen',
        shortcut: 'P'
    },
    {
        src: '',
        name: 'Pencil',
        shortcut: 'L'
    }
];
const text = {
  src: '',
  name: 'Text',
  shortcut: 'T'
}
const hand = {
  src: '',
  name: 'Handle',
  shortcut: ''
}
const comment = {
  src: '',
  name: 'Add Comment',
  shortcut: 'C'
};

const file = {
  src: '',
  li: [
    {
      name: 'Back to files'
    },
    {
      name: 'Quick actions'
    },
    {
      name: 'File',
      li: [
        {
          src: '',
          name: 'get file'
        }
      ]
    }

   ]
};

const menus = [
  {
    type: 'list',
    data: file
  },
  {
    type: 'icon',
    data: select
  },
  {
    type: 'icon',
    data: view
  },
  {
    type: 'icon',
    data: objdraw
  },
  {
    type: 'icon',
    data: pendraw
  },
  {
    type: 'onetab',
    data: text
  },
  {
    type: 'onetab',
    data: hand
  },
  {
    type: 'onetab',
    data: comment
  }
]

export default menus;