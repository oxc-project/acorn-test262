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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              },
              "start": 13,
              "end": 18
            },
            "start": 12,
            "end": 18
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 18
        }
      ],
      "declare": true,
      "start": 0,
      "end": 19
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 21,
          "end": 23
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 23,
          "end": 26
        },
        "start": 21,
        "end": 26
      },
      "directive": null,
      "start": 21,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 28,
          "end": 30
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 31,
                "end": 35
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 30,
              "end": 36
            },
            "children": [
              {
                "type": "JSXText",
                "value": "1",
                "raw": "1",
                "start": 36,
                "end": 37
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 39,
                "end": 43
              },
              "start": 37,
              "end": 44
            },
            "start": 30,
            "end": 44
          },
          {
            "type": "JSXFragment",
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 44,
              "end": 46
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 47,
                    "end": 51
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 46,
                  "end": 52
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "2.1",
                    "raw": "2.1",
                    "start": 52,
                    "end": 55
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 57,
                    "end": 61
                  },
                  "start": 55,
                  "end": 62
                },
                "start": 46,
                "end": 62
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 63,
                    "end": 67
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 62,
                  "end": 68
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "2.2",
                    "raw": "2.2",
                    "start": 68,
                    "end": 71
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 73,
                    "end": 77
                  },
                  "start": 71,
                  "end": 78
                },
                "start": 62,
                "end": 78
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 78,
              "end": 81
            },
            "start": 44,
            "end": 81
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 81,
          "end": 84
        },
        "start": 28,
        "end": 84
      },
      "directive": null,
      "start": 28,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
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
    "value": "h",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 15,
    "end": 18,
    "range": [
      15,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 31,
    "end": 35,
    "range": [
      31,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "JSXText",
    "value": "1",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 39,
    "end": 43,
    "range": [
      39,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46,
    "range": [
      45,
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
    "type": "JSXIdentifier",
    "value": "span",
    "start": 47,
    "end": 51,
    "range": [
      47,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "JSXText",
    "value": "2.1",
    "start": 52,
    "end": 55,
    "range": [
      52,
      55
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
    "type": "Punctuator",
    "value": "/",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 57,
    "end": 61,
    "range": [
      57,
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
    "type": "JSXIdentifier",
    "value": "span",
    "start": 63,
    "end": 67,
    "range": [
      63,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "JSXText",
    "value": "2.2",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72,
    "range": [
      71,
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
    "type": "JSXIdentifier",
    "value": "span",
    "start": 73,
    "end": 77,
    "range": [
      73,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  }
]
```
