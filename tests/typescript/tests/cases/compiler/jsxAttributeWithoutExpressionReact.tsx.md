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
            "name": "View",
            "start": 25,
            "end": 29
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 24,
          "end": 30
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 30,
            "end": 35
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ListView",
                "start": 36,
                "end": 44
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "refreshControl",
                    "start": 45,
                    "end": 59
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "RefreshControl",
                          "start": 71,
                          "end": 85
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "onRefresh",
                              "start": 86,
                              "end": 95
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "JSXEmptyExpression",
                                "start": 97,
                                "end": 97
                              },
                              "start": 96,
                              "end": 98
                            },
                            "start": 86,
                            "end": 98
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "refreshing",
                              "start": 99,
                              "end": 109
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "JSXEmptyExpression",
                                "start": 111,
                                "end": 111
                              },
                              "start": 110,
                              "end": 112
                            },
                            "start": 99,
                            "end": 112
                          }
                        ],
                        "selfClosing": true,
                        "start": 70,
                        "end": 115
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 70,
                      "end": 115
                    },
                    "start": 60,
                    "end": 121
                  },
                  "start": 45,
                  "end": 121
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "dataSource",
                    "start": 122,
                    "end": 132
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 134,
                          "end": 138
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 144
                        },
                        "optional": false,
                        "computed": false,
                        "start": 134,
                        "end": 144
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ds",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 147
                      },
                      "optional": false,
                      "computed": false,
                      "start": 134,
                      "end": 147
                    },
                    "start": 133,
                    "end": 148
                  },
                  "start": 122,
                  "end": 148
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "renderRow",
                    "start": 149,
                    "end": 158
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "JSXEmptyExpression",
                      "start": 160,
                      "end": 160
                    },
                    "start": 159,
                    "end": 161
                  },
                  "start": 149,
                  "end": 161
                }
              ],
              "selfClosing": false,
              "start": 35,
              "end": 162
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 162,
                "end": 167
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ListView",
                "start": 169,
                "end": 177
              },
              "start": 167,
              "end": 178
            },
            "start": 35,
            "end": 178
          },
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 178,
            "end": 179
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "View",
            "start": 181,
            "end": 185
          },
          "start": 179,
          "end": 186
        },
        "start": 24,
        "end": 186
      },
      "directive": null,
      "start": 24,
      "end": 186
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 186
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
    "value": "View",
    "start": 25,
    "end": 29,
    "range": [
      25,
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
    "type": "JSXText",
    "value": "\n    ",
    "start": 30,
    "end": 35,
    "range": [
      30,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "ListView",
    "start": 36,
    "end": 44,
    "range": [
      36,
      44
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "refreshControl",
    "start": 45,
    "end": 59,
    "range": [
      45,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "RefreshControl",
    "start": 71,
    "end": 85,
    "range": [
      71,
      85
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "onRefresh",
    "start": 86,
    "end": 95,
    "range": [
      86,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "refreshing",
    "start": 99,
    "end": 109,
    "range": [
      99,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "dataSource",
    "start": 122,
    "end": 132,
    "range": [
      122,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 134,
    "end": 138,
    "range": [
      134,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "state",
    "start": 139,
    "end": 144,
    "range": [
      139,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "ds",
    "start": 145,
    "end": 147,
    "range": [
      145,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "renderRow",
    "start": 149,
    "end": 158,
    "range": [
      149,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 162,
    "end": 167,
    "range": [
      162,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "ListView",
    "start": 169,
    "end": 177,
    "range": [
      169,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "View",
    "start": 181,
    "end": 185,
    "range": [
      181,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  }
]
```
