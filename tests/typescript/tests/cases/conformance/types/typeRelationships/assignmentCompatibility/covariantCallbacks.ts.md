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
        "name": "P",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 69
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
              "start": 70,
              "end": 71
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 70,
            "end": 71
          }
        ],
        "start": 69,
        "end": 72
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 83
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "value",
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
                              "start": 96,
                              "end": 97
                            },
                            "typeArguments": null,
                            "start": 96,
                            "end": 97
                          },
                          "start": 94,
                          "end": 97
                        },
                        "start": 89,
                        "end": 97
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 102,
                        "end": 106
                      },
                      "start": 99,
                      "end": 106
                    },
                    "start": 88,
                    "end": 106
                  },
                  "start": 86,
                  "end": 106
                },
                "start": 84,
                "end": 106
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 109,
                "end": 113
              },
              "start": 107,
              "end": 113
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 79,
            "end": 114
          }
        ],
        "start": 73,
        "end": 116
      },
      "declare": false,
      "start": 58,
      "end": 116
    },
    {
      "type": "EmptyStatement",
      "start": 116,
      "end": 117
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 130
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 136,
                "end": 142
              },
              "start": 134,
              "end": 142
            },
            "accessibility": null,
            "static": false,
            "start": 133,
            "end": 142
          }
        ],
        "start": 131,
        "end": 144
      },
      "declare": false,
      "start": 119,
      "end": 144
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 156
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          },
          "typeArguments": null,
          "start": 165,
          "end": 166
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 172,
                "end": 178
              },
              "start": 170,
              "end": 178
            },
            "accessibility": null,
            "static": false,
            "start": 169,
            "end": 178
          }
        ],
        "start": 167,
        "end": 180
      },
      "declare": false,
      "start": 145,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 193
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 198
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 199,
                      "end": 200
                    },
                    "typeArguments": null,
                    "start": 199,
                    "end": 200
                  }
                ],
                "start": 198,
                "end": 201
              },
              "start": 197,
              "end": 201
            },
            "start": 195,
            "end": 201
          },
          "start": 194,
          "end": 201
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 207
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 209
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 209
                  }
                ],
                "start": 207,
                "end": 210
              },
              "start": 206,
              "end": 210
            },
            "start": 204,
            "end": 210
          },
          "start": 203,
          "end": 210
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 223
              },
              "start": 218,
              "end": 223
            },
            "directive": null,
            "start": 218,
            "end": 224
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 234
              },
              "start": 229,
              "end": 234
            },
            "directive": null,
            "start": 229,
            "end": 235
          }
        ],
        "start": 212,
        "end": 247
      },
      "expression": false,
      "start": 182,
      "end": 247
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 260
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 271
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 273
                    },
                    "typeArguments": null,
                    "start": 272,
                    "end": 273
                  }
                ],
                "start": 271,
                "end": 274
              },
              "start": 264,
              "end": 274
            },
            "start": 262,
            "end": 274
          },
          "start": 261,
          "end": 274
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 286
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 288
                    },
                    "typeArguments": null,
                    "start": 287,
                    "end": 288
                  }
                ],
                "start": 286,
                "end": 289
              },
              "start": 279,
              "end": 289
            },
            "start": 277,
            "end": 289
          },
          "start": 276,
          "end": 289
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 298
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 302
              },
              "start": 297,
              "end": 302
            },
            "directive": null,
            "start": 297,
            "end": 303
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 313
              },
              "start": 308,
              "end": 313
            },
            "directive": null,
            "start": 308,
            "end": 314
          }
        ],
        "start": 291,
        "end": 326
      },
      "expression": false,
      "start": 249,
      "end": 326
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AList1",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 344
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 358
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 370,
                              "end": 371
                            },
                            "typeArguments": null,
                            "start": 370,
                            "end": 371
                          },
                          "start": 368,
                          "end": 371
                        },
                        "start": 364,
                        "end": 371
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 376,
                        "end": 380
                      },
                      "start": 373,
                      "end": 380
                    },
                    "start": 363,
                    "end": 380
                  },
                  "start": 361,
                  "end": 380
                },
                "start": 359,
                "end": 380
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 383,
                "end": 387
              },
              "start": 381,
              "end": 387
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 351,
            "end": 388
          }
        ],
        "start": 345,
        "end": 390
      },
      "declare": false,
      "start": 328,
      "end": 390
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BList1",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 408
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 422
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 434,
                              "end": 435
                            },
                            "typeArguments": null,
                            "start": 434,
                            "end": 435
                          },
                          "start": 432,
                          "end": 435
                        },
                        "start": 428,
                        "end": 435
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 440,
                        "end": 444
                      },
                      "start": 437,
                      "end": 444
                    },
                    "start": 427,
                    "end": 444
                  },
                  "start": 425,
                  "end": 444
                },
                "start": 423,
                "end": 444
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 447,
                "end": 451
              },
              "start": 445,
              "end": 451
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 415,
            "end": 452
          }
        ],
        "start": 409,
        "end": 454
      },
      "declare": false,
      "start": 392,
      "end": 454
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 468
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AList1",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 478
              },
              "typeArguments": null,
              "start": 472,
              "end": 478
            },
            "start": 470,
            "end": 478
          },
          "start": 469,
          "end": 478
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BList1",
                "optional": false,
                "typeAnnotation": null,
                "start": 483,
                "end": 489
              },
              "typeArguments": null,
              "start": 483,
              "end": 489
            },
            "start": 481,
            "end": 489
          },
          "start": 480,
          "end": 489
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 498
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 502
              },
              "start": 497,
              "end": 502
            },
            "directive": null,
            "start": 497,
            "end": 503
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 509
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 513
              },
              "start": 508,
              "end": 513
            },
            "directive": null,
            "start": 508,
            "end": 514
          }
        ],
        "start": 491,
        "end": 526
      },
      "expression": false,
      "start": 456,
      "end": 526
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AList2",
        "optional": false,
        "typeAnnotation": null,
        "start": 538,
        "end": 544
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 558
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 570,
                              "end": 571
                            },
                            "typeArguments": null,
                            "start": 570,
                            "end": 571
                          },
                          "start": 568,
                          "end": 571
                        },
                        "start": 564,
                        "end": 571
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 576,
                        "end": 583
                      },
                      "start": 573,
                      "end": 583
                    },
                    "start": 563,
                    "end": 583
                  },
                  "start": 561,
                  "end": 583
                },
                "start": 559,
                "end": 583
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 586,
                "end": 590
              },
              "start": 584,
              "end": 590
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 551,
            "end": 591
          }
        ],
        "start": 545,
        "end": 593
      },
      "declare": false,
      "start": 528,
      "end": 593
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BList2",
        "optional": false,
        "typeAnnotation": null,
        "start": 605,
        "end": 611
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 625
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 637,
                              "end": 638
                            },
                            "typeArguments": null,
                            "start": 637,
                            "end": 638
                          },
                          "start": 635,
                          "end": 638
                        },
                        "start": 631,
                        "end": 638
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 643,
                        "end": 647
                      },
                      "start": 640,
                      "end": 647
                    },
                    "start": 630,
                    "end": 647
                  },
                  "start": 628,
                  "end": 647
                },
                "start": 626,
                "end": 647
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 650,
                "end": 654
              },
              "start": 648,
              "end": 654
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 618,
            "end": 655
          }
        ],
        "start": 612,
        "end": 657
      },
      "declare": false,
      "start": 595,
      "end": 657
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 668,
        "end": 671
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AList2",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 681
              },
              "typeArguments": null,
              "start": 675,
              "end": 681
            },
            "start": 673,
            "end": 681
          },
          "start": 672,
          "end": 681
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BList2",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 692
              },
              "typeArguments": null,
              "start": 686,
              "end": 692
            },
            "start": 684,
            "end": 692
          },
          "start": 683,
          "end": 692
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 700,
                "end": 701
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 704,
                "end": 705
              },
              "start": 700,
              "end": 705
            },
            "directive": null,
            "start": 700,
            "end": 706
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 711,
                "end": 712
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 716
              },
              "start": 711,
              "end": 716
            },
            "directive": null,
            "start": 711,
            "end": 717
          }
        ],
        "start": 694,
        "end": 729
      },
      "expression": false,
      "start": 659,
      "end": 729
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AList3",
        "optional": false,
        "typeAnnotation": null,
        "start": 741,
        "end": 747
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 761
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 773,
                              "end": 774
                            },
                            "typeArguments": null,
                            "start": 773,
                            "end": 774
                          },
                          "start": 771,
                          "end": 774
                        },
                        "start": 767,
                        "end": 774
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 779,
                        "end": 783
                      },
                      "start": 776,
                      "end": 783
                    },
                    "start": 766,
                    "end": 783
                  },
                  "start": 764,
                  "end": 783
                },
                "start": 762,
                "end": 783
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 786,
                "end": 790
              },
              "start": 784,
              "end": 790
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 754,
            "end": 791
          }
        ],
        "start": 748,
        "end": 793
      },
      "declare": false,
      "start": 731,
      "end": 793
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BList3",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 811
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 825
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 837,
                              "end": 838
                            },
                            "typeArguments": null,
                            "start": 837,
                            "end": 838
                          },
                          "start": 835,
                          "end": 838
                        },
                        "start": 831,
                        "end": 838
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 849,
                            "end": 852
                          },
                          "start": 847,
                          "end": 852
                        },
                        "start": 840,
                        "end": 852
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 857,
                        "end": 861
                      },
                      "start": 854,
                      "end": 861
                    },
                    "start": 830,
                    "end": 861
                  },
                  "start": 828,
                  "end": 861
                },
                "start": 826,
                "end": 861
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 864,
                "end": 868
              },
              "start": 862,
              "end": 868
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 818,
            "end": 869
          }
        ],
        "start": 812,
        "end": 871
      },
      "declare": false,
      "start": 795,
      "end": 871
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 882,
        "end": 885
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AList3",
                "optional": false,
                "typeAnnotation": null,
                "start": 889,
                "end": 895
              },
              "typeArguments": null,
              "start": 889,
              "end": 895
            },
            "start": 887,
            "end": 895
          },
          "start": 886,
          "end": 895
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BList3",
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 906
              },
              "typeArguments": null,
              "start": 900,
              "end": 906
            },
            "start": 898,
            "end": 906
          },
          "start": 897,
          "end": 906
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 914,
                "end": 915
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 918,
                "end": 919
              },
              "start": 914,
              "end": 919
            },
            "directive": null,
            "start": 914,
            "end": 920
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 925,
                "end": 926
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 929,
                "end": 930
              },
              "start": 925,
              "end": 930
            },
            "directive": null,
            "start": 925,
            "end": 931
          }
        ],
        "start": 908,
        "end": 943
      },
      "expression": false,
      "start": 873,
      "end": 943
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AList4",
        "optional": false,
        "typeAnnotation": null,
        "start": 955,
        "end": 961
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 968,
              "end": 975
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 987,
                              "end": 988
                            },
                            "typeArguments": null,
                            "start": 987,
                            "end": 988
                          },
                          "start": 985,
                          "end": 988
                        },
                        "start": 981,
                        "end": 988
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 993,
                          "end": 994
                        },
                        "typeArguments": null,
                        "start": 993,
                        "end": 994
                      },
                      "start": 990,
                      "end": 994
                    },
                    "start": 980,
                    "end": 994
                  },
                  "start": 978,
                  "end": 994
                },
                "start": 976,
                "end": 994
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 997,
                "end": 1001
              },
              "start": 995,
              "end": 1001
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 968,
            "end": 1002
          }
        ],
        "start": 962,
        "end": 1004
      },
      "declare": false,
      "start": 945,
      "end": 1004
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BList4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1016,
        "end": 1022
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 1029,
              "end": 1036
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1048,
                              "end": 1049
                            },
                            "typeArguments": null,
                            "start": 1048,
                            "end": 1049
                          },
                          "start": 1046,
                          "end": 1049
                        },
                        "start": 1042,
                        "end": 1049
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1054,
                          "end": 1055
                        },
                        "typeArguments": null,
                        "start": 1054,
                        "end": 1055
                      },
                      "start": 1051,
                      "end": 1055
                    },
                    "start": 1041,
                    "end": 1055
                  },
                  "start": 1039,
                  "end": 1055
                },
                "start": 1037,
                "end": 1055
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1058,
                "end": 1062
              },
              "start": 1056,
              "end": 1062
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1029,
            "end": 1063
          }
        ],
        "start": 1023,
        "end": 1065
      },
      "declare": false,
      "start": 1006,
      "end": 1065
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1076,
        "end": 1079
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AList4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1083,
                "end": 1089
              },
              "typeArguments": null,
              "start": 1083,
              "end": 1089
            },
            "start": 1081,
            "end": 1089
          },
          "start": 1080,
          "end": 1089
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BList4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1094,
                "end": 1100
              },
              "typeArguments": null,
              "start": 1094,
              "end": 1100
            },
            "start": 1092,
            "end": 1100
          },
          "start": 1091,
          "end": 1100
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1109
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1112,
                "end": 1113
              },
              "start": 1108,
              "end": 1113
            },
            "directive": null,
            "start": 1108,
            "end": 1114
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1119,
                "end": 1120
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1124
              },
              "start": 1119,
              "end": 1124
            },
            "directive": null,
            "start": 1119,
            "end": 1125
          }
        ],
        "start": 1102,
        "end": 1137
      },
      "expression": false,
      "start": 1067,
      "end": 1137
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bivar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1166,
        "end": 1171
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
              "start": 1172,
              "end": 1173
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1172,
            "end": 1173
          }
        ],
        "start": 1171,
        "end": 1174
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1179,
              "end": 1182
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1190,
                      "end": 1191
                    },
                    "typeArguments": null,
                    "start": 1190,
                    "end": 1191
                  },
                  "start": 1188,
                  "end": 1191
                },
                "start": 1183,
                "end": 1191
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1194,
                "end": 1198
              },
              "start": 1192,
              "end": 1198
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1179,
            "end": 1198
          }
        ],
        "start": 1177,
        "end": 1200
      },
      "declare": false,
      "start": 1161,
      "end": 1200
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
            "name": "bu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bivar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1218,
                  "end": 1223
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1224,
                      "end": 1231
                    }
                  ],
                  "start": 1223,
                  "end": 1232
                },
                "start": 1218,
                "end": 1232
              },
              "start": 1216,
              "end": 1232
            },
            "start": 1214,
            "end": 1232
          },
          "init": null,
          "definite": false,
          "start": 1214,
          "end": 1232
        }
      ],
      "declare": true,
      "start": 1202,
      "end": 1233
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
            "name": "bs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bivar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1250,
                  "end": 1255
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1256,
                      "end": 1262
                    }
                  ],
                  "start": 1255,
                  "end": 1263
                },
                "start": 1250,
                "end": 1263
              },
              "start": 1248,
              "end": 1263
            },
            "start": 1246,
            "end": 1263
          },
          "init": null,
          "definite": false,
          "start": 1246,
          "end": 1263
        }
      ],
      "declare": true,
      "start": 1234,
      "end": 1264
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bu",
          "optional": false,
          "typeAnnotation": null,
          "start": 1265,
          "end": 1267
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bs",
          "optional": false,
          "typeAnnotation": null,
          "start": 1270,
          "end": 1272
        },
        "start": 1265,
        "end": 1272
      },
      "directive": null,
      "start": 1265,
      "end": 1273
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bs",
          "optional": false,
          "typeAnnotation": null,
          "start": 1274,
          "end": 1276
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bu",
          "optional": false,
          "typeAnnotation": null,
          "start": 1279,
          "end": 1281
        },
        "start": 1274,
        "end": 1281
      },
      "directive": null,
      "start": 1274,
      "end": 1282
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
            "name": "bfu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bivar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1301,
                  "end": 1306
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                              "type": "TSUnknownKeyword",
                              "start": 1311,
                              "end": 1318
                            },
                            "start": 1309,
                            "end": 1318
                          },
                          "start": 1308,
                          "end": 1318
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1323,
                          "end": 1327
                        },
                        "start": 1320,
                        "end": 1327
                      },
                      "start": 1307,
                      "end": 1327
                    }
                  ],
                  "start": 1306,
                  "end": 1328
                },
                "start": 1301,
                "end": 1328
              },
              "start": 1299,
              "end": 1328
            },
            "start": 1296,
            "end": 1328
          },
          "init": null,
          "definite": false,
          "start": 1296,
          "end": 1328
        }
      ],
      "declare": true,
      "start": 1284,
      "end": 1329
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
            "name": "bfs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bivar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1352
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                              "start": 1357,
                              "end": 1363
                            },
                            "start": 1355,
                            "end": 1363
                          },
                          "start": 1354,
                          "end": 1363
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1368,
                          "end": 1372
                        },
                        "start": 1365,
                        "end": 1372
                      },
                      "start": 1353,
                      "end": 1372
                    }
                  ],
                  "start": 1352,
                  "end": 1373
                },
                "start": 1347,
                "end": 1373
              },
              "start": 1345,
              "end": 1373
            },
            "start": 1342,
            "end": 1373
          },
          "init": null,
          "definite": false,
          "start": 1342,
          "end": 1373
        }
      ],
      "declare": true,
      "start": 1330,
      "end": 1374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bfu",
          "optional": false,
          "typeAnnotation": null,
          "start": 1375,
          "end": 1378
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bfs",
          "optional": false,
          "typeAnnotation": null,
          "start": 1381,
          "end": 1384
        },
        "start": 1375,
        "end": 1384
      },
      "directive": null,
      "start": 1375,
      "end": 1385
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bfs",
          "optional": false,
          "typeAnnotation": null,
          "start": 1386,
          "end": 1389
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bfu",
          "optional": false,
          "typeAnnotation": null,
          "start": 1392,
          "end": 1395
        },
        "start": 1386,
        "end": 1395
      },
      "directive": null,
      "start": 1386,
      "end": 1396
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bivar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1403,
        "end": 1409
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
              "start": 1410,
              "end": 1411
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1410,
            "end": 1411
          }
        ],
        "start": 1409,
        "end": 1412
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1417,
              "end": 1420
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1428,
                      "end": 1429
                    },
                    "typeArguments": null,
                    "start": 1428,
                    "end": 1429
                  },
                  "start": 1426,
                  "end": 1429
                },
                "start": 1421,
                "end": 1429
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1432,
                "end": 1436
              },
              "start": 1430,
              "end": 1436
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1417,
            "end": 1436
          }
        ],
        "start": 1415,
        "end": 1438
      },
      "declare": false,
      "start": 1398,
      "end": 1438
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bivar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1444,
        "end": 1450
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
              "start": 1451,
              "end": 1452
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1451,
            "end": 1452
          }
        ],
        "start": 1450,
        "end": 1453
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1458,
              "end": 1461
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1469,
                      "end": 1470
                    },
                    "typeArguments": null,
                    "start": 1469,
                    "end": 1470
                  },
                  "start": 1467,
                  "end": 1470
                },
                "start": 1462,
                "end": 1470
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1473,
                "end": 1477
              },
              "start": 1471,
              "end": 1477
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1458,
            "end": 1477
          }
        ],
        "start": 1456,
        "end": 1479
      },
      "declare": false,
      "start": 1439,
      "end": 1479
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
            "name": "b1fu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bivar1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1499,
                  "end": 1505
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                              "type": "TSUnknownKeyword",
                              "start": 1510,
                              "end": 1517
                            },
                            "start": 1508,
                            "end": 1517
                          },
                          "start": 1507,
                          "end": 1517
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1522,
                          "end": 1526
                        },
                        "start": 1519,
                        "end": 1526
                      },
                      "start": 1506,
                      "end": 1526
                    }
                  ],
                  "start": 1505,
                  "end": 1527
                },
                "start": 1499,
                "end": 1527
              },
              "start": 1497,
              "end": 1527
            },
            "start": 1493,
            "end": 1527
          },
          "init": null,
          "definite": false,
          "start": 1493,
          "end": 1527
        }
      ],
      "declare": true,
      "start": 1481,
      "end": 1528
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
            "name": "b2fs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bivar2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1553
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                              "start": 1558,
                              "end": 1564
                            },
                            "start": 1556,
                            "end": 1564
                          },
                          "start": 1555,
                          "end": 1564
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1569,
                          "end": 1573
                        },
                        "start": 1566,
                        "end": 1573
                      },
                      "start": 1554,
                      "end": 1573
                    }
                  ],
                  "start": 1553,
                  "end": 1574
                },
                "start": 1547,
                "end": 1574
              },
              "start": 1545,
              "end": 1574
            },
            "start": 1541,
            "end": 1574
          },
          "init": null,
          "definite": false,
          "start": 1541,
          "end": 1574
        }
      ],
      "declare": true,
      "start": 1529,
      "end": 1575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1fu",
          "optional": false,
          "typeAnnotation": null,
          "start": 1576,
          "end": 1580
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 1583,
          "end": 1587
        },
        "start": 1576,
        "end": 1587
      },
      "directive": null,
      "start": 1576,
      "end": 1588
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 1589,
          "end": 1593
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1fu",
          "optional": false,
          "typeAnnotation": null,
          "start": 1596,
          "end": 1600
        },
        "start": 1589,
        "end": 1600
      },
      "directive": null,
      "start": 1589,
      "end": 1601
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetLike",
        "optional": false,
        "typeAnnotation": null,
        "start": 1608,
        "end": 1615
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
              "start": 1616,
              "end": 1617
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1616,
            "end": 1617
          }
        ],
        "start": 1615,
        "end": 1618
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1623,
              "end": 1626
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1634,
                      "end": 1635
                    },
                    "typeArguments": null,
                    "start": 1634,
                    "end": 1635
                  },
                  "start": 1632,
                  "end": 1635
                },
                "start": 1627,
                "end": 1635
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1638,
                "end": 1642
              },
              "start": 1636,
              "end": 1642
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1623,
            "end": 1643
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1644,
              "end": 1647
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1651,
                  "end": 1652
                },
                "typeArguments": null,
                "start": 1651,
                "end": 1652
              },
              "start": 1649,
              "end": 1652
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1644,
            "end": 1652
          }
        ],
        "start": 1621,
        "end": 1654
      },
      "declare": false,
      "start": 1603,
      "end": 1654
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
            "name": "sx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SetLike1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1672,
                  "end": 1680
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                              "type": "TSUnknownKeyword",
                              "start": 1685,
                              "end": 1692
                            },
                            "start": 1683,
                            "end": 1692
                          },
                          "start": 1682,
                          "end": 1692
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1697,
                          "end": 1701
                        },
                        "start": 1694,
                        "end": 1701
                      },
                      "start": 1681,
                      "end": 1701
                    }
                  ],
                  "start": 1680,
                  "end": 1702
                },
                "start": 1672,
                "end": 1702
              },
              "start": 1670,
              "end": 1702
            },
            "start": 1668,
            "end": 1702
          },
          "init": null,
          "definite": false,
          "start": 1668,
          "end": 1702
        }
      ],
      "declare": true,
      "start": 1656,
      "end": 1703
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
            "name": "sy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SetLike1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1720,
                  "end": 1728
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                              "start": 1733,
                              "end": 1739
                            },
                            "start": 1731,
                            "end": 1739
                          },
                          "start": 1730,
                          "end": 1739
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1744,
                          "end": 1748
                        },
                        "start": 1741,
                        "end": 1748
                      },
                      "start": 1729,
                      "end": 1748
                    }
                  ],
                  "start": 1728,
                  "end": 1749
                },
                "start": 1720,
                "end": 1749
              },
              "start": 1718,
              "end": 1749
            },
            "start": 1716,
            "end": 1749
          },
          "init": null,
          "definite": false,
          "start": 1716,
          "end": 1749
        }
      ],
      "declare": true,
      "start": 1704,
      "end": 1750
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sx",
          "optional": false,
          "typeAnnotation": null,
          "start": 1751,
          "end": 1753
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sy",
          "optional": false,
          "typeAnnotation": null,
          "start": 1756,
          "end": 1758
        },
        "start": 1751,
        "end": 1758
      },
      "directive": null,
      "start": 1751,
      "end": 1759
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sy",
          "optional": false,
          "typeAnnotation": null,
          "start": 1770,
          "end": 1772
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sx",
          "optional": false,
          "typeAnnotation": null,
          "start": 1775,
          "end": 1777
        },
        "start": 1770,
        "end": 1777
      },
      "directive": null,
      "start": 1770,
      "end": 1778
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetLike1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1785,
        "end": 1793
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
              "start": 1794,
              "end": 1795
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1794,
            "end": 1795
          }
        ],
        "start": 1793,
        "end": 1796
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1801,
              "end": 1804
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1812,
                      "end": 1813
                    },
                    "typeArguments": null,
                    "start": 1812,
                    "end": 1813
                  },
                  "start": 1810,
                  "end": 1813
                },
                "start": 1805,
                "end": 1813
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1816,
                "end": 1820
              },
              "start": 1814,
              "end": 1820
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1801,
            "end": 1821
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1822,
              "end": 1825
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1829,
                  "end": 1830
                },
                "typeArguments": null,
                "start": 1829,
                "end": 1830
              },
              "start": 1827,
              "end": 1830
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1822,
            "end": 1830
          }
        ],
        "start": 1799,
        "end": 1832
      },
      "declare": false,
      "start": 1780,
      "end": 1832
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetLike2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1838,
        "end": 1846
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
              "start": 1847,
              "end": 1848
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1847,
            "end": 1848
          }
        ],
        "start": 1846,
        "end": 1849
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1854,
              "end": 1857
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1865,
                      "end": 1866
                    },
                    "typeArguments": null,
                    "start": 1865,
                    "end": 1866
                  },
                  "start": 1863,
                  "end": 1866
                },
                "start": 1858,
                "end": 1866
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1869,
                "end": 1873
              },
              "start": 1867,
              "end": 1873
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1854,
            "end": 1874
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1875,
              "end": 1878
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1882,
                  "end": 1883
                },
                "typeArguments": null,
                "start": 1882,
                "end": 1883
              },
              "start": 1880,
              "end": 1883
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1875,
            "end": 1883
          }
        ],
        "start": 1852,
        "end": 1885
      },
      "declare": false,
      "start": 1833,
      "end": 1885
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SetLike1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1903,
                  "end": 1911
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                              "type": "TSUnknownKeyword",
                              "start": 1916,
                              "end": 1923
                            },
                            "start": 1914,
                            "end": 1923
                          },
                          "start": 1913,
                          "end": 1923
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1928,
                          "end": 1932
                        },
                        "start": 1925,
                        "end": 1932
                      },
                      "start": 1912,
                      "end": 1932
                    }
                  ],
                  "start": 1911,
                  "end": 1933
                },
                "start": 1903,
                "end": 1933
              },
              "start": 1901,
              "end": 1933
            },
            "start": 1899,
            "end": 1933
          },
          "init": null,
          "definite": false,
          "start": 1899,
          "end": 1933
        }
      ],
      "declare": true,
      "start": 1887,
      "end": 1934
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SetLike2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1951,
                  "end": 1959
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                              "start": 1964,
                              "end": 1970
                            },
                            "start": 1962,
                            "end": 1970
                          },
                          "start": 1961,
                          "end": 1970
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1975,
                          "end": 1979
                        },
                        "start": 1972,
                        "end": 1979
                      },
                      "start": 1960,
                      "end": 1979
                    }
                  ],
                  "start": 1959,
                  "end": 1980
                },
                "start": 1951,
                "end": 1980
              },
              "start": 1949,
              "end": 1980
            },
            "start": 1947,
            "end": 1980
          },
          "init": null,
          "definite": false,
          "start": 1947,
          "end": 1980
        }
      ],
      "declare": true,
      "start": 1935,
      "end": 1981
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1982,
          "end": 1984
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1987,
          "end": 1989
        },
        "start": 1982,
        "end": 1989
      },
      "directive": null,
      "start": 1982,
      "end": 1990
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2001,
          "end": 2003
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2006,
          "end": 2008
        },
        "start": 2001,
        "end": 2008
      },
      "directive": null,
      "start": 2001,
      "end": 2009
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 58,
  "end": 2009
}
```
