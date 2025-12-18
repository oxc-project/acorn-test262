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
            "name": "CustomTag",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "Literal",
            "value": "h1",
            "raw": "\"h1\"",
            "start": 16,
            "end": 20
          },
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "CustomTag",
            "start": 23,
            "end": 32
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 22,
          "end": 33
        },
        "children": [
          {
            "type": "JSXText",
            "value": " Hello World ",
            "raw": " Hello World ",
            "start": 33,
            "end": 46
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "CustomTag",
            "start": 48,
            "end": 57
          },
          "start": 46,
          "end": 58
        },
        "start": 22,
        "end": 58
      },
      "directive": null,
      "start": 22,
      "end": 58
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 71
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
    "value": "CustomTag",
    "start": 4,
    "end": 13,
    "range": [
      4,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "String",
    "value": "\"h1\"",
    "start": 16,
    "end": 20,
    "range": [
      16,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "CustomTag",
    "start": 23,
    "end": 32,
    "range": [
      23,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "JSXText",
    "value": " Hello World ",
    "start": 33,
    "end": 46,
    "range": [
      33,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "CustomTag",
    "start": 48,
    "end": 57,
    "range": [
      48,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  }
]
```
