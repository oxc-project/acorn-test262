__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 87
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 98
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 100,
                "end": 106
              },
              "start": 98,
              "end": 106
            },
            "accessibility": null,
            "static": false,
            "start": 94,
            "end": 107
          }
        ],
        "start": 88,
        "end": 109
      },
      "declare": false,
      "start": 72,
      "end": 109
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BackButton",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 130
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 144
              },
              "typeArguments": null,
              "start": 139,
              "end": 144
            },
            "start": 137,
            "end": 144
          },
          "start": 131,
          "end": 144
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 160,
                  "end": 163
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 159,
                "end": 166
              },
              "children": [],
              "closingElement": null,
              "start": 159,
              "end": 166
            },
            "start": 152,
            "end": 166
          }
        ],
        "start": 146,
        "end": 168
      },
      "expression": false,
      "start": 111,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "BackButton",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 179
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 192
          },
          "optional": false,
          "computed": false,
          "start": 169,
          "end": 192
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "text",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 205
              },
              "value": {
                "type": "Literal",
                "value": "Go Back",
                "raw": "'Go Back'",
                "start": 207,
                "end": 216
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 201,
              "end": 216
            }
          ],
          "start": 195,
          "end": 219
        },
        "start": 169,
        "end": 219
      },
      "directive": null,
      "start": 169,
      "end": 220
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 226
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BackButton",
                "start": 230,
                "end": 240
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 229,
              "end": 243
            },
            "children": [],
            "closingElement": null,
            "start": 229,
            "end": 243
          },
          "definite": false,
          "start": 225,
          "end": 243
        }
      ],
      "declare": false,
      "start": 221,
      "end": 243
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 243
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 52,
    "end": 57,
    "range": [
      52,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 58,
    "end": 62,
    "range": [
      58,
      62
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 63,
    "end": 70,
    "range": [
      63,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 72,
    "end": 81,
    "range": [
      72,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 94,
    "end": 98,
    "range": [
      94,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 100,
    "end": 106,
    "range": [
      100,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 111,
    "end": 119,
    "range": [
      111,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "BackButton",
    "start": 120,
    "end": 130,
    "range": [
      120,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "_props",
    "start": 131,
    "end": 137,
    "range": [
      131,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 139,
    "end": 144,
    "range": [
      139,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 152,
    "end": 158,
    "range": [
      152,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 160,
    "end": 163,
    "range": [
      160,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "BackButton",
    "start": 169,
    "end": 179,
    "range": [
      169,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 180,
    "end": 192,
    "range": [
      180,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 201,
    "end": 205,
    "range": [
      201,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "String",
    "value": "'Go Back'",
    "start": 207,
    "end": 216,
    "range": [
      207,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 221,
    "end": 224,
    "range": [
      221,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "BackButton",
    "start": 230,
    "end": 240,
    "range": [
      230,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  }
]
```
