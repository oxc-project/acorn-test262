__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regex1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/ asdf /",
            "regex": {
              "pattern": " asdf ",
              "flags": ""
            },
            "start": 13,
            "end": 21
          },
          "definite": false,
          "start": 4,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regex2",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 33
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/ asdf /",
            "regex": {
              "pattern": " asdf ",
              "flags": ""
            },
            "start": 40,
            "end": 48
          },
          "definite": false,
          "start": 27,
          "end": 48
        }
      ],
      "declare": false,
      "start": 23,
      "end": 49
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regex3",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 60
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 114,
            "end": 115
          },
          "definite": false,
          "start": 54,
          "end": 115
        }
      ],
      "declare": false,
      "start": 50,
      "end": 116
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regex4",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 127
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "/ /",
              "regex": {
                "pattern": " ",
                "flags": ""
              },
              "start": 134,
              "end": 137
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "/asdf /",
              "regex": {
                "pattern": "asdf ",
                "flags": ""
              },
              "start": 139,
              "end": 146
            },
            "start": 134,
            "end": 146
          },
          "definite": false,
          "start": 121,
          "end": 146
        }
      ],
      "declare": false,
      "start": 117,
      "end": 147
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regex5",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 158
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "/ asdf/",
              "regex": {
                "pattern": " asdf",
                "flags": ""
              },
              "start": 165,
              "end": 172
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "/ /",
              "regex": {
                "pattern": " ",
                "flags": ""
              },
              "start": 174,
              "end": 177
            },
            "start": 165,
            "end": 177
          },
          "definite": false,
          "start": 152,
          "end": 177
        }
      ],
      "declare": false,
      "start": 148,
      "end": 178
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 178
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "regex1",
    "start": 4,
    "end": 10,
    "range": [
      4,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/ asdf /",
    "regex": {
      "flags": "",
      "pattern": " asdf "
    },
    "start": 13,
    "end": 21,
    "range": [
      13,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 23,
    "end": 26,
    "range": [
      23,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "regex2",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/ asdf /",
    "regex": {
      "flags": "",
      "pattern": " asdf "
    },
    "start": 40,
    "end": 48,
    "range": [
      40,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 50,
    "end": 53,
    "range": [
      50,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "regex3",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 117,
    "end": 120,
    "range": [
      117,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "regex4",
    "start": 121,
    "end": 127,
    "range": [
      121,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/ /",
    "regex": {
      "flags": "",
      "pattern": " "
    },
    "start": 134,
    "end": 137,
    "range": [
      134,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 137,
    "end": 139,
    "range": [
      137,
      139
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/asdf /",
    "regex": {
      "flags": "",
      "pattern": "asdf "
    },
    "start": 139,
    "end": 146,
    "range": [
      139,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 148,
    "end": 151,
    "range": [
      148,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "regex5",
    "start": 152,
    "end": 158,
    "range": [
      152,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/ asdf/",
    "regex": {
      "flags": "",
      "pattern": " asdf"
    },
    "start": 165,
    "end": 172,
    "range": [
      165,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 172,
    "end": 174,
    "range": [
      172,
      174
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/ /",
    "regex": {
      "flags": "",
      "pattern": " "
    },
    "start": 174,
    "end": 177,
    "range": [
      174,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  }
]
```
