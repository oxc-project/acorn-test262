__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          }
        ],
        "start": 20,
        "end": 23
      },
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
              "name": "elems",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 38
                  },
                  "typeArguments": null,
                  "start": 37,
                  "end": 38
                },
                "start": 37,
                "end": 40
              },
              "start": 35,
              "end": 40
            },
            "accessibility": null,
            "static": false,
            "start": 30,
            "end": 41
          }
        ],
        "start": 24,
        "end": 43
      },
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CollectionStatic",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 70
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 83
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 82,
                  "end": 83
                }
              ],
              "start": 81,
              "end": 84
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 98
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 100
                      },
                      "typeArguments": null,
                      "start": 99,
                      "end": 100
                    }
                  ],
                  "start": 98,
                  "end": 101
                },
                "start": 88,
                "end": 101
              },
              "start": 86,
              "end": 101
            },
            "start": 77,
            "end": 102
          }
        ],
        "start": 71,
        "end": 104
      },
      "declare": false,
      "start": 44,
      "end": 104
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
            "name": "Collection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CollectionStatic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 147
                },
                "typeArguments": null,
                "start": 131,
                "end": 147
              },
              "start": 129,
              "end": 147
            },
            "start": 119,
            "end": 147
          },
          "init": null,
          "definite": false,
          "start": 119,
          "end": 147
        }
      ],
      "declare": true,
      "start": 105,
      "end": 148
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
            "name": "ALL",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 159
          },
          "init": {
            "type": "Literal",
            "value": "all",
            "raw": "\"all\"",
            "start": 162,
            "end": 167
          },
          "definite": false,
          "start": 156,
          "end": 167
        }
      ],
      "declare": false,
      "start": 150,
      "end": 168
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "All",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 177
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ALL",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 190
        },
        "typeArguments": null,
        "start": 180,
        "end": 190
      },
      "declare": false,
      "start": 169,
      "end": 191
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 217
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "All",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 221
                      },
                      "typeArguments": null,
                      "start": 218,
                      "end": 221
                    }
                  ],
                  "start": 217,
                  "end": 222
                },
                "start": 207,
                "end": 222
              },
              "start": 205,
              "end": 222
            },
            "start": 199,
            "end": 222
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 239
            },
            "typeArguments": null,
            "arguments": [],
            "start": 225,
            "end": 241
          },
          "definite": false,
          "start": 199,
          "end": 241
        }
      ],
      "declare": false,
      "start": 193,
      "end": 242
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
            "name": "ANOTHER",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 257
          },
          "init": {
            "type": "Literal",
            "value": "another",
            "raw": "\"another\"",
            "start": 260,
            "end": 269
          },
          "definite": false,
          "start": 250,
          "end": 269
        }
      ],
      "declare": false,
      "start": 244,
      "end": 270
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Another",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 283
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANOTHER",
          "optional": false,
          "typeAnnotation": null,
          "start": 293,
          "end": 300
        },
        "typeArguments": null,
        "start": 286,
        "end": 300
      },
      "declare": false,
      "start": 271,
      "end": 301
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 312
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Another",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 322
            },
            "typeArguments": null,
            "start": 315,
            "end": 322
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "All",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 328
            },
            "typeArguments": null,
            "start": 325,
            "end": 328
          }
        ],
        "start": 315,
        "end": 328
      },
      "declare": false,
      "start": 303,
      "end": 329
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 356
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Both",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 361
                      },
                      "typeArguments": null,
                      "start": 357,
                      "end": 361
                    }
                  ],
                  "start": 356,
                  "end": 362
                },
                "start": 346,
                "end": 362
              },
              "start": 344,
              "end": 362
            },
            "start": 337,
            "end": 362
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 379
            },
            "typeArguments": null,
            "arguments": [],
            "start": 365,
            "end": 381
          },
          "definite": false,
          "start": 337,
          "end": 381
        }
      ],
      "declare": false,
      "start": 331,
      "end": 382
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 382
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 10,
    "end": 20,
    "range": [
      10,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "{",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "elems",
    "start": 30,
    "end": 35,
    "range": [
      30,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 44,
    "end": 53,
    "range": [
      44,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "CollectionStatic",
    "start": 54,
    "end": 70,
    "range": [
      54,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 77,
    "end": 80,
    "range": [
      77,
      80
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
    "type": "Identifier",
    "value": "T",
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
    "value": "(",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 88,
    "end": 98,
    "range": [
      88,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 105,
    "end": 112,
    "range": [
      105,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 113,
    "end": 118,
    "range": [
      113,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 119,
    "end": 129,
    "range": [
      119,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "CollectionStatic",
    "start": 131,
    "end": 147,
    "range": [
      131,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 150,
    "end": 155,
    "range": [
      150,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "ALL",
    "start": 156,
    "end": 159,
    "range": [
      156,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "String",
    "value": "\"all\"",
    "start": 162,
    "end": 167,
    "range": [
      162,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 169,
    "end": 173,
    "range": [
      169,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "All",
    "start": 174,
    "end": 177,
    "range": [
      174,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 180,
    "end": 186,
    "range": [
      180,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "ALL",
    "start": 187,
    "end": 190,
    "range": [
      187,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 193,
    "end": 198,
    "range": [
      193,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 199,
    "end": 205,
    "range": [
      199,
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
    "type": "Identifier",
    "value": "Collection",
    "start": 207,
    "end": 217,
    "range": [
      207,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "All",
    "start": 218,
    "end": 221,
    "range": [
      218,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 225,
    "end": 228,
    "range": [
      225,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 229,
    "end": 239,
    "range": [
      229,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 244,
    "end": 249,
    "range": [
      244,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "ANOTHER",
    "start": 250,
    "end": 257,
    "range": [
      250,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "String",
    "value": "\"another\"",
    "start": 260,
    "end": 269,
    "range": [
      260,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 271,
    "end": 275,
    "range": [
      271,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "Another",
    "start": 276,
    "end": 283,
    "range": [
      276,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 286,
    "end": 292,
    "range": [
      286,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "ANOTHER",
    "start": 293,
    "end": 300,
    "range": [
      293,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 303,
    "end": 307,
    "range": [
      303,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "Both",
    "start": 308,
    "end": 312,
    "range": [
      308,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "Another",
    "start": 315,
    "end": 322,
    "range": [
      315,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "All",
    "start": 325,
    "end": 328,
    "range": [
      325,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 331,
    "end": 336,
    "range": [
      331,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 337,
    "end": 344,
    "range": [
      337,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 346,
    "end": 356,
    "range": [
      346,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "Both",
    "start": 357,
    "end": 361,
    "range": [
      357,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 365,
    "end": 368,
    "range": [
      365,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 369,
    "end": 379,
    "range": [
      369,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  }
]
```
