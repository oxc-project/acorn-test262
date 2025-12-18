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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tag",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 43
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 50,
                    "end": 52
                  },
                  "start": 48,
                  "end": 52
                },
                "start": 47,
                "end": 52
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 58,
                  "end": 61
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 57,
                "end": 62
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 64,
                  "end": 67
                },
                "start": 62,
                "end": 68
              },
              "start": 57,
              "end": 68
            },
            "id": null,
            "generator": false,
            "start": 46,
            "end": 68
          },
          "definite": false,
          "start": 40,
          "end": 68
        }
      ],
      "declare": false,
      "start": 34,
      "end": 69
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 85
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 89,
                "end": 92
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 88,
              "end": 95
            },
            "children": [],
            "closingElement": null,
            "start": 88,
            "end": 95
          },
          "definite": false,
          "start": 83,
          "end": 95
        }
      ],
      "declare": false,
      "start": 77,
      "end": 96
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 105
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 109,
                "end": 112
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 108,
              "end": 113
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 115,
                "end": 118
              },
              "start": 113,
              "end": 119
            },
            "start": 108,
            "end": 119
          },
          "definite": false,
          "start": 103,
          "end": 119
        }
      ],
      "declare": false,
      "start": 97,
      "end": 120
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k3",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 158
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 162,
                "end": 165
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 166,
                    "end": 174
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 177,
                          "end": 180
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 176,
                        "end": 181
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 183,
                          "end": 186
                        },
                        "start": 181,
                        "end": 187
                      },
                      "start": 176,
                      "end": 187
                    },
                    "start": 175,
                    "end": 188
                  },
                  "start": 166,
                  "end": 188
                }
              ],
              "selfClosing": true,
              "start": 161,
              "end": 191
            },
            "children": [],
            "closingElement": null,
            "start": 161,
            "end": 191
          },
          "definite": false,
          "start": 156,
          "end": 191
        }
      ],
      "declare": false,
      "start": 150,
      "end": 192
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k4",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 201
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 205,
                "end": 208
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 209,
                    "end": 212
                  },
                  "value": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "\"1\"",
                    "start": 213,
                    "end": 216
                  },
                  "start": 209,
                  "end": 216
                }
              ],
              "selfClosing": false,
              "start": 204,
              "end": 217
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 218,
                    "end": 221
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 217,
                  "end": 222
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 224,
                    "end": 227
                  },
                  "start": 222,
                  "end": 228
                },
                "start": 217,
                "end": 228
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 230,
                "end": 233
              },
              "start": 228,
              "end": 234
            },
            "start": 204,
            "end": 234
          },
          "definite": false,
          "start": 199,
          "end": 234
        }
      ],
      "declare": false,
      "start": 193,
      "end": 235
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k5",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 244
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 248,
                "end": 251
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 252,
                    "end": 255
                  },
                  "value": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "\"1\"",
                    "start": 256,
                    "end": 259
                  },
                  "start": 252,
                  "end": 259
                }
              ],
              "selfClosing": false,
              "start": 247,
              "end": 260
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 261,
                    "end": 264
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 260,
                  "end": 265
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 267,
                    "end": 270
                  },
                  "start": 265,
                  "end": 271
                },
                "start": 260,
                "end": 271
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 272,
                    "end": 275
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 271,
                  "end": 276
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 278,
                    "end": 281
                  },
                  "start": 276,
                  "end": 282
                },
                "start": 271,
                "end": 282
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Tag",
                "start": 284,
                "end": 287
              },
              "start": 282,
              "end": 288
            },
            "start": 247,
            "end": 288
          },
          "definite": false,
          "start": 242,
          "end": 288
        }
      ],
      "declare": false,
      "start": 236,
      "end": 289
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 289
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
    "value": "const",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 54,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 57,
    "end": 58
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 63,
    "end": 64
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 83,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 88,
    "end": 89
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 103,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 114,
    "end": 115
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 150,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 156,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 162,
    "end": 165
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 166,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 176,
    "end": 177
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "/",
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
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 193,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 204,
    "end": 205
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 205,
    "end": 208
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "JSXText",
    "value": "\"1\"",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 217,
    "end": 218
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 223,
    "end": 224
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 224,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 229,
    "end": 230
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 236,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "k5",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 247,
    "end": 248
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 248,
    "end": 251
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "JSXText",
    "value": "\"1\"",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 260,
    "end": 261
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 266,
    "end": 267
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 267,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 271,
    "end": 272
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 272,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 277,
    "end": 278
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 283,
    "end": 284
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  }
]
```
