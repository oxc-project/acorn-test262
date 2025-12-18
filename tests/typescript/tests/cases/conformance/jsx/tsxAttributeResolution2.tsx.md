__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
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
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Attribs1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 95
                      },
                      "typeArguments": null,
                      "start": 87,
                      "end": 95
                    },
                    "start": 85,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 96
                }
              ],
              "start": 76,
              "end": 99
            },
            "declare": false,
            "start": 48,
            "end": 99
          }
        ],
        "start": 22,
        "end": 101
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 120
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSStringKeyword",
                        "start": 133,
                        "end": 139
                      },
                      "start": 131,
                      "end": 139
                    },
                    "start": 130,
                    "end": 139
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 144,
                    "end": 148
                  },
                  "start": 141,
                  "end": 148
                },
                "start": 129,
                "end": 148
              },
              "start": 127,
              "end": 148
            },
            "accessibility": null,
            "static": false,
            "start": 124,
            "end": 149
          }
        ],
        "start": 121,
        "end": 151
      },
      "declare": false,
      "start": 102,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 160,
            "end": 165
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "c1",
                "start": 166,
                "end": 168
              },
              "value": {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 172
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 177,
                      "end": 178
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 185
                    },
                    "optional": false,
                    "computed": false,
                    "start": 177,
                    "end": 185
                  },
                  "id": null,
                  "generator": false,
                  "start": 170,
                  "end": 185
                },
                "start": 169,
                "end": 186
              },
              "start": 166,
              "end": 186
            }
          ],
          "selfClosing": true,
          "start": 159,
          "end": 189
        },
        "children": [],
        "closingElement": null,
        "start": 159,
        "end": 189
      },
      "directive": null,
      "start": 159,
      "end": 190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 198,
            "end": 203
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-c1",
                "start": 204,
                "end": 211
              },
              "value": {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 215
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 220,
                      "end": 221
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "leng",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 226
                    },
                    "optional": false,
                    "computed": false,
                    "start": 220,
                    "end": 226
                  },
                  "id": null,
                  "generator": false,
                  "start": 213,
                  "end": 226
                },
                "start": 212,
                "end": 227
              },
              "start": 204,
              "end": 227
            }
          ],
          "selfClosing": true,
          "start": 197,
          "end": 230
        },
        "children": [],
        "closingElement": null,
        "start": 197,
        "end": 230
      },
      "directive": null,
      "start": 197,
      "end": 231
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 251,
            "end": 256
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "c1",
                "start": 257,
                "end": 259
              },
              "value": {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 263
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 269
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "leng",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 274
                    },
                    "optional": false,
                    "computed": false,
                    "start": 268,
                    "end": 274
                  },
                  "id": null,
                  "generator": false,
                  "start": 261,
                  "end": 274
                },
                "start": 260,
                "end": 275
              },
              "start": 257,
              "end": 275
            }
          ],
          "selfClosing": true,
          "start": 250,
          "end": 278
        },
        "children": [],
        "closingElement": null,
        "start": 250,
        "end": 278
      },
      "directive": null,
      "start": 250,
      "end": 279
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 309
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
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17,
    "range": [
      8,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 18,
    "end": 21,
    "range": [
      18,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 25,
    "end": 34,
    "range": [
      25,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 35,
    "end": 42,
    "range": [
      35,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 48,
    "end": 57,
    "range": [
      48,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 58,
    "end": 75,
    "range": [
      58,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 80,
    "end": 85,
    "range": [
      80,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "Attribs1",
    "start": 87,
    "end": 95,
    "range": [
      87,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 102,
    "end": 111,
    "range": [
      102,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "Attribs1",
    "start": 112,
    "end": 120,
    "range": [
      112,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 124,
    "end": 126,
    "range": [
      124,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 133,
    "end": 139,
    "range": [
      133,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 141,
    "end": 143,
    "range": [
      141,
      143
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 144,
    "end": 148,
    "range": [
      144,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
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
    "value": "test1",
    "start": 160,
    "end": 165,
    "range": [
      160,
      165
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "c1",
    "start": 166,
    "end": 168,
    "range": [
      166,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 174,
    "end": 176,
    "range": [
      174,
      176
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "length",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 198,
    "end": 203,
    "range": [
      198,
      203
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "data-c1",
    "start": 204,
    "end": 211,
    "range": [
      204,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 217,
    "end": 219,
    "range": [
      217,
      219
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "leng",
    "start": 222,
    "end": 226,
    "range": [
      222,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 251,
    "end": 256,
    "range": [
      251,
      256
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "c1",
    "start": 257,
    "end": 259,
    "range": [
      257,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 265,
    "end": 267,
    "range": [
      265,
      267
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "leng",
    "start": 270,
    "end": 274,
    "range": [
      270,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  }
]
```
