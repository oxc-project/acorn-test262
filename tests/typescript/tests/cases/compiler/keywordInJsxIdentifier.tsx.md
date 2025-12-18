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
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              },
              "start": 17,
              "end": 22
            },
            "start": 12,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 22
        }
      ],
      "declare": true,
      "start": 0,
      "end": 23
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "foo",
            "start": 25,
            "end": 28
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class-id",
                "start": 29,
                "end": 37
              },
              "value": null,
              "start": 29,
              "end": 37
            }
          ],
          "selfClosing": true,
          "start": 24,
          "end": 39
        },
        "children": [],
        "closingElement": null,
        "start": 24,
        "end": 39
      },
      "directive": null,
      "start": 24,
      "end": 40
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "foo",
            "start": 42,
            "end": 45
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "start": 46,
                "end": 51
              },
              "value": null,
              "start": 46,
              "end": 51
            }
          ],
          "selfClosing": true,
          "start": 41,
          "end": 53
        },
        "children": [],
        "closingElement": null,
        "start": 41,
        "end": 53
      },
      "directive": null,
      "start": 41,
      "end": 54
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "foo",
            "start": 56,
            "end": 59
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class-id",
                "start": 60,
                "end": 68
              },
              "value": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 69,
                "end": 72
              },
              "start": 60,
              "end": 72
            }
          ],
          "selfClosing": true,
          "start": 55,
          "end": 74
        },
        "children": [],
        "closingElement": null,
        "start": 55,
        "end": 74
      },
      "directive": null,
      "start": 55,
      "end": 75
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "foo",
            "start": 77,
            "end": 80
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "start": 81,
                "end": 86
              },
              "value": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 87,
                "end": 90
              },
              "start": 81,
              "end": 90
            }
          ],
          "selfClosing": true,
          "start": 76,
          "end": 92
        },
        "children": [],
        "closingElement": null,
        "start": 76,
        "end": 92
      },
      "directive": null,
      "start": 76,
      "end": 93
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 93
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11,
    "range": [
      8,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 12,
    "end": 17,
    "range": [
      12,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 19,
    "end": 22,
    "range": [
      19,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 25,
    "end": 28,
    "range": [
      25,
      28
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "class-id",
    "start": 29,
    "end": 37,
    "range": [
      29,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 42,
    "end": 45,
    "range": [
      42,
      45
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 46,
    "end": 51,
    "range": [
      46,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "class-id",
    "start": 60,
    "end": 68,
    "range": [
      60,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "JSXText",
    "value": "\"1\"",
    "start": 69,
    "end": 72,
    "range": [
      69,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
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
    "value": "foo",
    "start": 77,
    "end": 80,
    "range": [
      77,
      80
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 81,
    "end": 86,
    "range": [
      81,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "JSXText",
    "value": "\"1\"",
    "start": 87,
    "end": 90,
    "range": [
      87,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  }
]
```
