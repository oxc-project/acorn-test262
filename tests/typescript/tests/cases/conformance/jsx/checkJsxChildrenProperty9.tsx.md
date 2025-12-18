__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 46
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 50,
                "end": 53
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 49,
              "end": 54
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 54,
                "end": 55
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 56,
                    "end": 58
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 55,
                  "end": 59
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " Hello ",
                    "raw": " Hello ",
                    "start": 59,
                    "end": 66
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 68,
                    "end": 70
                  },
                  "start": 66,
                  "end": 71
                },
                "start": 55,
                "end": 71
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 71,
                "end": 72
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h1",
                    "start": 73,
                    "end": 75
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 72,
                  "end": 76
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " world ",
                    "raw": " world ",
                    "start": 76,
                    "end": 83
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h1",
                    "start": 85,
                    "end": 87
                  },
                  "start": 83,
                  "end": 88
                },
                "start": 72,
                "end": 88
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 90,
                "end": 93
              },
              "start": 88,
              "end": 94
            },
            "start": 49,
            "end": 94
          },
          "definite": false,
          "start": 44,
          "end": 94
        }
      ],
      "declare": false,
      "start": 40,
      "end": 95
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 102
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 106,
                "end": 109
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 105,
              "end": 110
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 110,
                "end": 111
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 112,
                    "end": 114
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 111,
                  "end": 115
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " Hello ",
                    "raw": " Hello ",
                    "start": 115,
                    "end": 122
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 124,
                    "end": 126
                  },
                  "start": 122,
                  "end": 127
                },
                "start": 111,
                "end": 127
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 127,
                "end": 128
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "user",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 136,
                          "end": 139
                        },
                        "start": 134,
                        "end": 139
                      },
                      "start": 130,
                      "end": 139
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "h2",
                        "start": 145,
                        "end": 147
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 144,
                      "end": 148
                    },
                    "children": [
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "user",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 149,
                            "end": 153
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 154,
                            "end": 158
                          },
                          "optional": false,
                          "computed": false,
                          "start": 149,
                          "end": 158
                        },
                        "start": 148,
                        "end": 159
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "h2",
                        "start": 161,
                        "end": 163
                      },
                      "start": 159,
                      "end": 164
                    },
                    "start": 144,
                    "end": 164
                  },
                  "id": null,
                  "generator": false,
                  "start": 129,
                  "end": 164
                },
                "start": 128,
                "end": 165
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 167,
                "end": 170
              },
              "start": 165,
              "end": 171
            },
            "start": 105,
            "end": 171
          },
          "definite": false,
          "start": 100,
          "end": 171
        }
      ],
      "declare": false,
      "start": 96,
      "end": 172
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
            "name": "k3",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 179
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 183,
                "end": 186
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 182,
              "end": 187
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 187,
                "end": 188
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 189,
                  "end": 190
                },
                "start": 188,
                "end": 191
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 191,
                "end": 192
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "That is a number",
                  "raw": "\"That is a number\"",
                  "start": 193,
                  "end": 211
                },
                "start": 192,
                "end": 212
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 212,
                "end": 213
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 215,
                "end": 218
              },
              "start": 213,
              "end": 219
            },
            "start": 182,
            "end": 219
          },
          "definite": false,
          "start": 177,
          "end": 219
        }
      ],
      "declare": false,
      "start": 173,
      "end": 220
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 220
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 40,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 44,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 49,
    "end": 50
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 53,
    "end": 54
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56
  },
  {
    "type": "JSXIdentifier",
    "value": "h2",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 58,
    "end": 59
  },
  {
    "type": "JSXText",
    "value": " Hello ",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 67,
    "end": 68
  },
  {
    "type": "JSXIdentifier",
    "value": "h2",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 70,
    "end": 71
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 75,
    "end": 76
  },
  {
    "type": "JSXText",
    "value": " world ",
    "start": 76,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 84,
    "end": 85
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 89,
    "end": 90
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 96,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 105,
    "end": 106
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 109,
    "end": 110
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 111,
    "end": 112
  },
  {
    "type": "JSXIdentifier",
    "value": "h2",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "JSXText",
    "value": " Hello ",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 123,
    "end": 124
  },
  {
    "type": "JSXIdentifier",
    "value": "h2",
    "start": 124,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "JSXIdentifier",
    "value": "h2",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "JSXIdentifier",
    "value": "user",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "JSXIdentifier",
    "value": "name",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 160,
    "end": 161
  },
  {
    "type": "JSXIdentifier",
    "value": "h2",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 166,
    "end": 167
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 173,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 177,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 186,
    "end": 187
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "String",
    "value": "\"That is a number\"",
    "start": 193,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 214,
    "end": 215
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  }
]
```
