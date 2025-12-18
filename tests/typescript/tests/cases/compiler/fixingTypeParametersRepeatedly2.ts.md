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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "name": "baseProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 29
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 30
          }
        ],
        "start": 15,
        "end": 32
      },
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 50
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 63
          },
          "typeArguments": null,
          "start": 59,
          "end": 63
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 76
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 84
                },
                "typeArguments": null,
                "start": 80,
                "end": 84
              },
              "start": 78,
              "end": 84
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 70,
            "end": 85
          }
        ],
        "start": 64,
        "end": 87
      },
      "declare": false,
      "start": 33,
      "end": 87
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "derived",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 109
                },
                "typeArguments": null,
                "start": 102,
                "end": 109
              },
              "start": 100,
              "end": 109
            },
            "start": 93,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 93,
          "end": 109
        }
      ],
      "declare": false,
      "start": 89,
      "end": 110
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 132
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 133,
              "end": 134
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 133,
            "end": 134
          }
        ],
        "start": 132,
        "end": 135
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "typeArguments": null,
              "start": 139,
              "end": 140
            },
            "start": 137,
            "end": 140
          },
          "start": 136,
          "end": 140
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 152,
                        "end": 153
                      },
                      "typeArguments": null,
                      "start": 152,
                      "end": 153
                    },
                    "start": 150,
                    "end": 153
                  },
                  "start": 149,
                  "end": 153
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 159
                  },
                  "typeArguments": null,
                  "start": 158,
                  "end": 159
                },
                "start": 155,
                "end": 159
              },
              "start": 148,
              "end": 159
            },
            "start": 146,
            "end": 159
          },
          "start": 142,
          "end": 159
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 163
          },
          "typeArguments": null,
          "start": 162,
          "end": 163
        },
        "start": 160,
        "end": 163
      },
      "body": null,
      "expression": false,
      "start": 112,
      "end": 164
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 175
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 181
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 189
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 197
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toBase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 204
                    },
                    "optional": false,
                    "computed": false,
                    "start": 196,
                    "end": 204
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 196,
                  "end": 206
                },
                "id": null,
                "generator": false,
                "start": 191,
                "end": 206
              }
            ],
            "optional": false,
            "start": 178,
            "end": 207
          },
          "definite": false,
          "start": 169,
          "end": 207
        }
      ],
      "declare": false,
      "start": 165,
      "end": 208
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 322
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 323,
              "end": 324
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 323,
            "end": 324
          }
        ],
        "start": 322,
        "end": 325
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 330
              },
              "typeArguments": null,
              "start": 329,
              "end": 330
            },
            "start": 327,
            "end": 330
          },
          "start": 326,
          "end": 330
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 342,
                        "end": 343
                      },
                      "typeArguments": null,
                      "start": 342,
                      "end": 343
                    },
                    "start": 340,
                    "end": 343
                  },
                  "start": 339,
                  "end": 343
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 349
                  },
                  "typeArguments": null,
                  "start": 348,
                  "end": 349
                },
                "start": 345,
                "end": 349
              },
              "start": 338,
              "end": 349
            },
            "start": 336,
            "end": 349
          },
          "start": 332,
          "end": 349
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 353
          },
          "typeArguments": null,
          "start": 352,
          "end": 353
        },
        "start": 350,
        "end": 353
      },
      "body": null,
      "expression": false,
      "start": 302,
      "end": 354
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 372,
        "end": 375
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 376,
              "end": 377
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 376,
            "end": 377
          }
        ],
        "start": 375,
        "end": 378
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 383
              },
              "typeArguments": null,
              "start": 382,
              "end": 383
            },
            "start": 380,
            "end": 383
          },
          "start": 379,
          "end": 383
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 395,
                        "end": 396
                      },
                      "typeArguments": null,
                      "start": 395,
                      "end": 396
                    },
                    "start": 393,
                    "end": 396
                  },
                  "start": 392,
                  "end": 396
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 401,
                    "end": 402
                  },
                  "typeArguments": null,
                  "start": 401,
                  "end": 402
                },
                "start": 398,
                "end": 402
              },
              "start": 391,
              "end": 402
            },
            "start": 389,
            "end": 402
          },
          "start": 385,
          "end": 402
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 406
          },
          "typeArguments": null,
          "start": 405,
          "end": 406
        },
        "start": 403,
        "end": 406
      },
      "body": null,
      "expression": false,
      "start": 355,
      "end": 407
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 418
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 424
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 432
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 434,
                    "end": 435
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 439,
                      "end": 440
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toBase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 447
                    },
                    "optional": false,
                    "computed": false,
                    "start": 439,
                    "end": 447
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 439,
                  "end": 449
                },
                "id": null,
                "generator": false,
                "start": 434,
                "end": 449
              }
            ],
            "optional": false,
            "start": 421,
            "end": 450
          },
          "definite": false,
          "start": 412,
          "end": 450
        }
      ],
      "declare": false,
      "start": 408,
      "end": 451
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 451
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
    "value": "Base",
    "start": 10,
    "end": 14,
    "range": [
      10,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "baseProp",
    "start": 21,
    "end": 29,
    "range": [
      21,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 33,
    "end": 42,
    "range": [
      33,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 43,
    "end": 50,
    "range": [
      43,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 51,
    "end": 58,
    "range": [
      51,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 59,
    "end": 63,
    "range": [
      59,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "toBase",
    "start": 70,
    "end": 76,
    "range": [
      70,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 80,
    "end": 84,
    "range": [
      80,
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
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 89,
    "end": 92,
    "range": [
      89,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 93,
    "end": 100,
    "range": [
      93,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 102,
    "end": 109,
    "range": [
      102,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 112,
    "end": 119,
    "range": [
      112,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 120,
    "end": 128,
    "range": [
      120,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 129,
    "end": 132,
    "range": [
      129,
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
    "type": "Identifier",
    "value": "T",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137,
    "range": [
      136,
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
    "value": "T",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 142,
    "end": 146,
    "range": [
      142,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 155,
    "end": 157,
    "range": [
      155,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 165,
    "end": 168,
    "range": [
      165,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 169,
    "end": 175,
    "range": [
      169,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 178,
    "end": 181,
    "range": [
      178,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 182,
    "end": 189,
    "range": [
      182,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 193,
    "end": 195,
    "range": [
      193,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "toBase",
    "start": 198,
    "end": 204,
    "range": [
      198,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 302,
    "end": 309,
    "range": [
      302,
      309
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 310,
    "end": 318,
    "range": [
      310,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 319,
    "end": 322,
    "range": [
      319,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 332,
    "end": 336,
    "range": [
      332,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 345,
    "end": 347,
    "range": [
      345,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 355,
    "end": 362,
    "range": [
      355,
      362
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 363,
    "end": 371,
    "range": [
      363,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 372,
    "end": 375,
    "range": [
      372,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 385,
    "end": 389,
    "range": [
      385,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 398,
    "end": 400,
    "range": [
      398,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 408,
    "end": 411,
    "range": [
      408,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 412,
    "end": 418,
    "range": [
      412,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 421,
    "end": 424,
    "range": [
      421,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 425,
    "end": 432,
    "range": [
      425,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 436,
    "end": 438,
    "range": [
      436,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "toBase",
    "start": 441,
    "end": 447,
    "range": [
      441,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  }
]
```
