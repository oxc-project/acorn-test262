__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 51
          },
          "init": {
            "type": "JSXFragment",
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 54,
              "end": 56
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 56,
                "end": 59
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "p",
                    "start": 60,
                    "end": 61
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 59,
                  "end": 62
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "p",
                    "start": 64,
                    "end": 65
                  },
                  "start": 62,
                  "end": 66
                },
                "start": 59,
                "end": 66
              },
              {
                "type": "JSXText",
                "value": "\n  text\n  ",
                "raw": "\n  text\n  ",
                "start": 66,
                "end": 76
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 77,
                    "end": 80
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "className",
                        "start": 81,
                        "end": 90
                      },
                      "value": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 91,
                        "end": 96
                      },
                      "start": 81,
                      "end": 96
                    }
                  ],
                  "selfClosing": false,
                  "start": 76,
                  "end": 97
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 99,
                    "end": 102
                  },
                  "start": 97,
                  "end": 103
                },
                "start": 76,
                "end": 103
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 103,
                "end": 104
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 104,
              "end": 107
            },
            "start": 54,
            "end": 107
          },
          "definite": false,
          "start": 50,
          "end": 107
        }
      ],
      "declare": false,
      "start": 44,
      "end": 107
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 109,
      "end": 119
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 119
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 44,
    "end": 49,
    "range": [
      44,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "JSXText",
    "value": "\n  text\n  ",
    "start": 66,
    "end": 76,
    "range": [
      66,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 77,
    "end": 80,
    "range": [
      77,
      80
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 81,
    "end": 90,
    "range": [
      81,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "JSXText",
    "value": "\"foo\"",
    "start": 91,
    "end": 96,
    "range": [
      91,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 99,
    "end": 102,
    "range": [
      99,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  }
]
```
