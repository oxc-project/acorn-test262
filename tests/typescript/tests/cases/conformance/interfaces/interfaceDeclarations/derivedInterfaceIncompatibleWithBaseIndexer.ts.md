__ESTREE_TEST__:PASS:
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
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 25,
                    "end": 31
                  },
                  "start": 23,
                  "end": 31
                },
                "start": 22,
                "end": 31
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 36,
                      "end": 37
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 39,
                        "end": 45
                      },
                      "start": 37,
                      "end": 45
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 36,
                    "end": 46
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 48
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 50,
                        "end": 56
                      },
                      "start": 48,
                      "end": 56
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 47,
                    "end": 57
                  }
                ],
                "start": 34,
                "end": 59
              },
              "start": 32,
              "end": 59
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 21,
            "end": 60
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  },
                  "start": 67,
                  "end": 75
                },
                "start": 66,
                "end": 75
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 81
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 83,
                        "end": 89
                      },
                      "start": 81,
                      "end": 89
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 80,
                    "end": 90
                  }
                ],
                "start": 78,
                "end": 92
              },
              "start": 76,
              "end": 92
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 65,
            "end": 92
          }
        ],
        "start": 15,
        "end": 94
      },
      "declare": false,
      "start": 0,
      "end": 94
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 113
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
            "start": 122,
            "end": 126
          },
          "typeArguments": null,
          "start": 122,
          "end": 126
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 133,
              "end": 134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 139
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 141,
                        "end": 147
                      },
                      "start": 139,
                      "end": 147
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 138,
                    "end": 147
                  }
                ],
                "start": 136,
                "end": 149
              },
              "start": 134,
              "end": 149
            },
            "accessibility": null,
            "static": false,
            "start": 133,
            "end": 149
          }
        ],
        "start": 127,
        "end": 160
      },
      "declare": false,
      "start": 96,
      "end": 160
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 180
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
            "start": 189,
            "end": 193
          },
          "typeArguments": null,
          "start": 189,
          "end": 193
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 200,
              "end": 203
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 208
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 210,
                        "end": 216
                      },
                      "start": 208,
                      "end": 216
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 207,
                    "end": 216
                  }
                ],
                "start": 205,
                "end": 218
              },
              "start": 203,
              "end": 218
            },
            "accessibility": null,
            "static": false,
            "start": 200,
            "end": 218
          }
        ],
        "start": 194,
        "end": 229
      },
      "declare": false,
      "start": 162,
      "end": 229
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 249
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
            "start": 258,
            "end": 262
          },
          "typeArguments": null,
          "start": 258,
          "end": 262
        }
      ],
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 272
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 276,
                      "end": 277
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 279,
                        "end": 285
                      },
                      "start": 277,
                      "end": 285
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 276,
                    "end": 285
                  }
                ],
                "start": 274,
                "end": 287
              },
              "start": 272,
              "end": 287
            },
            "accessibility": null,
            "static": false,
            "start": 269,
            "end": 287
          }
        ],
        "start": 263,
        "end": 298
      },
      "declare": false,
      "start": 231,
      "end": 298
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 318
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
            "start": 327,
            "end": 331
          },
          "typeArguments": null,
          "start": 327,
          "end": 331
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 341
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 347,
                      "end": 348
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 350,
                        "end": 356
                      },
                      "start": 348,
                      "end": 356
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 347,
                    "end": 356
                  }
                ],
                "start": 345,
                "end": 358
              },
              "start": 343,
              "end": 358
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 338,
            "end": 358
          }
        ],
        "start": 332,
        "end": 369
      },
      "declare": false,
      "start": 300,
      "end": 369
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived5",
        "optional": false,
        "typeAnnotation": null,
        "start": 434,
        "end": 442
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
            "start": 451,
            "end": 455
          },
          "typeArguments": null,
          "start": 451,
          "end": 455
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 462,
              "end": 463
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 468
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 470,
                        "end": 476
                      },
                      "start": 468,
                      "end": 476
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 467,
                    "end": 476
                  }
                ],
                "start": 465,
                "end": 478
              },
              "start": 463,
              "end": 478
            },
            "accessibility": null,
            "static": false,
            "start": 462,
            "end": 478
          }
        ],
        "start": 456,
        "end": 489
      },
      "declare": false,
      "start": 424,
      "end": 489
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived5",
        "optional": false,
        "typeAnnotation": null,
        "start": 501,
        "end": 509
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
            "start": 518,
            "end": 522
          },
          "typeArguments": null,
          "start": 518,
          "end": 522
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 529,
              "end": 532
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 536,
                      "end": 537
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 539,
                        "end": 545
                      },
                      "start": 537,
                      "end": 545
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 536,
                    "end": 545
                  }
                ],
                "start": 534,
                "end": 547
              },
              "start": 532,
              "end": 547
            },
            "accessibility": null,
            "static": false,
            "start": 529,
            "end": 547
          }
        ],
        "start": 523,
        "end": 558
      },
      "declare": false,
      "start": 491,
      "end": 558
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 558
}
```
