__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 68,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 76
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
            "name": "Radio",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 107,
                        "end": 109
                      },
                      "start": 105,
                      "end": 109
                    },
                    "start": 100,
                    "end": 109
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 114,
                        "end": 119
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 120,
                        "end": 132
                      },
                      "start": 114,
                      "end": 132
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 133,
                          "end": 135
                        }
                      ],
                      "start": 132,
                      "end": 136
                    },
                    "start": 114,
                    "end": 136
                  },
                  "start": 111,
                  "end": 136
                },
                "start": 99,
                "end": 136
              },
              "start": 97,
              "end": 136
            },
            "start": 92,
            "end": 136
          },
          "init": null,
          "definite": false,
          "start": 92,
          "end": 136
        }
      ],
      "declare": true,
      "start": 78,
      "end": 137
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
            "name": "OtherRadio",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 175
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 188
                      },
                      "start": 170,
                      "end": 188
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 189,
                          "end": 191
                        }
                      ],
                      "start": 188,
                      "end": 192
                    },
                    "start": 170,
                    "end": 192
                  },
                  "start": 167,
                  "end": 192
                },
                "start": 164,
                "end": 192
              },
              "start": 162,
              "end": 192
            },
            "start": 152,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 152,
          "end": 192
        }
      ],
      "declare": true,
      "start": 138,
      "end": 193
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
            "name": "Checkbox",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 223
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SFC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 227
                  },
                  "start": 218,
                  "end": 227
                },
                "typeArguments": null,
                "start": 218,
                "end": 227
              },
              "start": 216,
              "end": 227
            },
            "start": 208,
            "end": 227
          },
          "init": null,
          "definite": false,
          "start": 208,
          "end": 227
        }
      ],
      "declare": true,
      "start": 194,
      "end": 228
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
            "name": "condition1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 256,
                "end": 263
              },
              "start": 254,
              "end": 263
            },
            "start": 244,
            "end": 263
          },
          "init": null,
          "definite": false,
          "start": 244,
          "end": 263
        }
      ],
      "declare": true,
      "start": 230,
      "end": 264
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
            "name": "condition2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 291,
                "end": 298
              },
              "start": 289,
              "end": 298
            },
            "start": 279,
            "end": 298
          },
          "init": null,
          "definite": false,
          "start": 279,
          "end": 298
        }
      ],
      "declare": true,
      "start": 265,
      "end": 299
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
            "name": "condition3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 326,
                "end": 333
              },
              "start": 324,
              "end": 333
            },
            "start": 314,
            "end": 333
          },
          "init": null,
          "definite": false,
          "start": 314,
          "end": 333
        }
      ],
      "declare": true,
      "start": 300,
      "end": 334
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
            "name": "RandomComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 364
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SFC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 368
                  },
                  "start": 359,
                  "end": 368
                },
                "typeArguments": null,
                "start": 359,
                "end": 368
              },
              "start": 357,
              "end": 368
            },
            "start": 342,
            "end": 368
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 396
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "condition1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 403,
                          "end": 413
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Radio",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 422,
                          "end": 427
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Checkbox",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 436,
                          "end": 444
                        },
                        "start": 403,
                        "end": 444
                      },
                      "definite": false,
                      "start": 387,
                      "end": 444
                    }
                  ],
                  "declare": false,
                  "start": 381,
                  "end": 445
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
                        "name": "OtherComponent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 455,
                        "end": 469
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "condition2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 476,
                          "end": 486
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "OtherRadio",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 495,
                          "end": 505
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Checkbox",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 514,
                          "end": 522
                        },
                        "start": 476,
                        "end": 522
                      },
                      "definite": false,
                      "start": 455,
                      "end": 522
                    }
                  ],
                  "declare": false,
                  "start": 449,
                  "end": 523
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "condition1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 533,
                      "end": 543
                    },
                    "consequent": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "Component",
                          "start": 547,
                          "end": 556
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": true,
                        "start": 546,
                        "end": 559
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 546,
                      "end": 559
                    },
                    "alternate": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "OtherComponent",
                          "start": 563,
                          "end": 577
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": true,
                        "start": 562,
                        "end": 580
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 562,
                      "end": 580
                    },
                    "start": 533,
                    "end": 580
                  },
                  "start": 526,
                  "end": 581
                }
              ],
              "start": 377,
              "end": 583
            },
            "id": null,
            "generator": false,
            "start": 371,
            "end": 583
          },
          "definite": false,
          "start": 342,
          "end": 583
        }
      ],
      "declare": false,
      "start": 336,
      "end": 584
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 584
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
    "type": "Punctuator",
    "value": "*",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 54,
    "end": 56,
    "range": [
      54,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 57,
    "end": 62,
    "range": [
      57,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 63,
    "end": 67,
    "range": [
      63,
      67
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 68,
    "end": 75,
    "range": [
      68,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 78,
    "end": 85,
    "range": [
      78,
      85
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 86,
    "end": 91,
    "range": [
      86,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "Radio",
    "start": 92,
    "end": 97,
    "range": [
      92,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 100,
    "end": 105,
    "range": [
      100,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
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
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 111,
    "end": 113,
    "range": [
      111,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 114,
    "end": 119,
    "range": [
      114,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 120,
    "end": 132,
    "range": [
      120,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 138,
    "end": 145,
    "range": [
      138,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 146,
    "end": 151,
    "range": [
      146,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "OtherRadio",
    "start": 152,
    "end": 162,
    "range": [
      152,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 167,
    "end": 169,
    "range": [
      167,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 170,
    "end": 175,
    "range": [
      170,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 176,
    "end": 188,
    "range": [
      176,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 194,
    "end": 201,
    "range": [
      194,
      201
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 202,
    "end": 207,
    "range": [
      202,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "Checkbox",
    "start": 208,
    "end": 216,
    "range": [
      208,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 218,
    "end": 223,
    "range": [
      218,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "SFC",
    "start": 224,
    "end": 227,
    "range": [
      224,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 230,
    "end": 237,
    "range": [
      230,
      237
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 238,
    "end": 243,
    "range": [
      238,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "condition1",
    "start": 244,
    "end": 254,
    "range": [
      244,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 256,
    "end": 263,
    "range": [
      256,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 265,
    "end": 272,
    "range": [
      265,
      272
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 273,
    "end": 278,
    "range": [
      273,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "condition2",
    "start": 279,
    "end": 289,
    "range": [
      279,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 291,
    "end": 298,
    "range": [
      291,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 300,
    "end": 307,
    "range": [
      300,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 308,
    "end": 313,
    "range": [
      308,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "condition3",
    "start": 314,
    "end": 324,
    "range": [
      314,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 326,
    "end": 333,
    "range": [
      326,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 336,
    "end": 341,
    "range": [
      336,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "RandomComponent",
    "start": 342,
    "end": 357,
    "range": [
      342,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 359,
    "end": 364,
    "range": [
      359,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "SFC",
    "start": 365,
    "end": 368,
    "range": [
      365,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 374,
    "end": 376,
    "range": [
      374,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 381,
    "end": 386,
    "range": [
      381,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 387,
    "end": 396,
    "range": [
      387,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "condition1",
    "start": 403,
    "end": 413,
    "range": [
      403,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "Radio",
    "start": 422,
    "end": 427,
    "range": [
      422,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "Checkbox",
    "start": 436,
    "end": 444,
    "range": [
      436,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 449,
    "end": 454,
    "range": [
      449,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "OtherComponent",
    "start": 455,
    "end": 469,
    "range": [
      455,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "condition2",
    "start": 476,
    "end": 486,
    "range": [
      476,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "OtherRadio",
    "start": 495,
    "end": 505,
    "range": [
      495,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "Checkbox",
    "start": 514,
    "end": 522,
    "range": [
      514,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 526,
    "end": 532,
    "range": [
      526,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "condition1",
    "start": 533,
    "end": 543,
    "range": [
      533,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 547,
    "end": 556,
    "range": [
      547,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "OtherComponent",
    "start": 563,
    "end": 577,
    "range": [
      563,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  }
]
```
