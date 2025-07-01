__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "fA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 19,
                        "end": 20
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 19,
                      "end": 20
                    }
                  ],
                  "start": 18,
                  "end": 21
                },
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
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 29,
                          "end": 30
                        },
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
                              "start": 32,
                              "end": 33
                            },
                            "typeArguments": null,
                            "start": 32,
                            "end": 33
                          },
                          "start": 30,
                          "end": 33
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 29,
                        "end": 33
                      }
                    ],
                    "start": 27,
                    "end": 35
                  },
                  "start": 24,
                  "end": 35
                },
                "start": 18,
                "end": 35
              },
              "start": 16,
              "end": 35
            },
            "start": 14,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 36
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
            "name": "fB",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 45
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 49,
                    "end": 50
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 49,
                  "end": 50
                }
              ],
              "start": 48,
              "end": 51
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 72,
                          "end": 73
                        },
                        "value": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 75,
                              "end": 77
                            },
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 81,
                              "end": 84
                            },
                            "start": 75,
                            "end": 84
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 88,
                              "end": 89
                            },
                            "typeArguments": null,
                            "start": 88,
                            "end": 89
                          },
                          "start": 75,
                          "end": 89
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 72,
                        "end": 89
                      }
                    ],
                    "start": 70,
                    "end": 91
                  },
                  "start": 63,
                  "end": 92
                }
              ],
              "start": 57,
              "end": 94
            },
            "id": null,
            "generator": false,
            "start": 48,
            "end": 94
          },
          "definite": false,
          "start": 43,
          "end": 94
        }
      ],
      "declare": false,
      "start": 37,
      "end": 95
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
            "name": "fC",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 104
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 108,
                    "end": 109
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 108,
                  "end": 109
                }
              ],
              "start": 107,
              "end": 110
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 129,
                        "end": 131
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 135,
                        "end": 138
                      },
                      "start": 129,
                      "end": 138
                    },
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
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 145
                          },
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
                                "start": 147,
                                "end": 148
                              },
                              "typeArguments": null,
                              "start": 147,
                              "end": 148
                            },
                            "start": 145,
                            "end": 148
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 144,
                          "end": 148
                        }
                      ],
                      "start": 142,
                      "end": 150
                    },
                    "start": 129,
                    "end": 150
                  },
                  "start": 122,
                  "end": 151
                }
              ],
              "start": 116,
              "end": 153
            },
            "id": null,
            "generator": false,
            "start": 107,
            "end": 153
          },
          "definite": false,
          "start": 102,
          "end": 153
        }
      ],
      "declare": false,
      "start": 96,
      "end": 154
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TA",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "fA",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 221
        },
        "typeArguments": null,
        "start": 212,
        "end": 221
      },
      "declare": false,
      "start": 202,
      "end": 222
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TB",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 230
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "fB",
          "optional": false,
          "typeAnnotation": null,
          "start": 240,
          "end": 242
        },
        "typeArguments": null,
        "start": 233,
        "end": 242
      },
      "declare": false,
      "start": 223,
      "end": 243
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 251
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "fC",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 263
        },
        "typeArguments": null,
        "start": 254,
        "end": 263
      },
      "declare": false,
      "start": 244,
      "end": 264
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 272
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "start": 276,
                "end": 277
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 276,
              "end": 277
            }
          ],
          "start": 275,
          "end": 278
        },
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 287
                },
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
                      "start": 289,
                      "end": 290
                    },
                    "typeArguments": null,
                    "start": 289,
                    "end": 290
                  },
                  "start": 287,
                  "end": 290
                },
                "accessibility": null,
                "static": false,
                "start": 286,
                "end": 290
              }
            ],
            "start": 284,
            "end": 292
          },
          "start": 281,
          "end": 292
        },
        "start": 275,
        "end": 292
      },
      "declare": false,
      "start": 265,
      "end": 293
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accA",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 317
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TA",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 323
              },
              "typeArguments": null,
              "start": 321,
              "end": 323
            },
            "start": 319,
            "end": 323
          },
          "start": 318,
          "end": 323
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 326,
          "end": 330
        },
        "start": 324,
        "end": 330
      },
      "body": null,
      "expression": false,
      "start": 296,
      "end": 331
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accB",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 353
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TB",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 359
              },
              "typeArguments": null,
              "start": 357,
              "end": 359
            },
            "start": 355,
            "end": 359
          },
          "start": 354,
          "end": 359
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 362,
          "end": 366
        },
        "start": 360,
        "end": 366
      },
      "body": null,
      "expression": false,
      "start": 332,
      "end": 367
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accC",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 389
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TC",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 395
              },
              "typeArguments": null,
              "start": 393,
              "end": 395
            },
            "start": 391,
            "end": 395
          },
          "start": 390,
          "end": 395
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 398,
          "end": 402
        },
        "start": 396,
        "end": 402
      },
      "body": null,
      "expression": false,
      "start": 368,
      "end": 403
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accL",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 425
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TL",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 431
              },
              "typeArguments": null,
              "start": 429,
              "end": 431
            },
            "start": 427,
            "end": 431
          },
          "start": 426,
          "end": 431
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 434,
          "end": 438
        },
        "start": 432,
        "end": 438
      },
      "body": null,
      "expression": false,
      "start": 404,
      "end": 439
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accA",
          "optional": false,
          "typeAnnotation": null,
          "start": 492,
          "end": 496
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fA",
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 499
          }
        ],
        "optional": false,
        "start": 492,
        "end": 500
      },
      "directive": null,
      "start": 492,
      "end": 501
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accA",
          "optional": false,
          "typeAnnotation": null,
          "start": 502,
          "end": 506
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fB",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 509
          }
        ],
        "optional": false,
        "start": 502,
        "end": 510
      },
      "directive": null,
      "start": 502,
      "end": 511
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accA",
          "optional": false,
          "typeAnnotation": null,
          "start": 512,
          "end": 516
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fC",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 519
          }
        ],
        "optional": false,
        "start": 512,
        "end": 520
      },
      "directive": null,
      "start": 512,
      "end": 521
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accB",
          "optional": false,
          "typeAnnotation": null,
          "start": 560,
          "end": 564
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fA",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 567
          }
        ],
        "optional": false,
        "start": 560,
        "end": 568
      },
      "directive": null,
      "start": 560,
      "end": 569
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accB",
          "optional": false,
          "typeAnnotation": null,
          "start": 570,
          "end": 574
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fB",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 577
          }
        ],
        "optional": false,
        "start": 570,
        "end": 578
      },
      "directive": null,
      "start": 570,
      "end": 579
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accB",
          "optional": false,
          "typeAnnotation": null,
          "start": 580,
          "end": 584
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fC",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 587
          }
        ],
        "optional": false,
        "start": 580,
        "end": 588
      },
      "directive": null,
      "start": 580,
      "end": 589
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accC",
          "optional": false,
          "typeAnnotation": null,
          "start": 608,
          "end": 612
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fA",
            "optional": false,
            "typeAnnotation": null,
            "start": 613,
            "end": 615
          }
        ],
        "optional": false,
        "start": 608,
        "end": 616
      },
      "directive": null,
      "start": 608,
      "end": 617
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accC",
          "optional": false,
          "typeAnnotation": null,
          "start": 618,
          "end": 622
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fB",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 625
          }
        ],
        "optional": false,
        "start": 618,
        "end": 626
      },
      "directive": null,
      "start": 618,
      "end": 627
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accC",
          "optional": false,
          "typeAnnotation": null,
          "start": 628,
          "end": 632
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fC",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 635
          }
        ],
        "optional": false,
        "start": 628,
        "end": 636
      },
      "directive": null,
      "start": 628,
      "end": 637
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accL",
          "optional": false,
          "typeAnnotation": null,
          "start": 676,
          "end": 680
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fA",
            "optional": false,
            "typeAnnotation": null,
            "start": 681,
            "end": 683
          }
        ],
        "optional": false,
        "start": 676,
        "end": 684
      },
      "directive": null,
      "start": 676,
      "end": 685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accL",
          "optional": false,
          "typeAnnotation": null,
          "start": 686,
          "end": 690
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fB",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 693
          }
        ],
        "optional": false,
        "start": 686,
        "end": 694
      },
      "directive": null,
      "start": 686,
      "end": 695
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accL",
          "optional": false,
          "typeAnnotation": null,
          "start": 696,
          "end": 700
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fC",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 703
          }
        ],
        "optional": false,
        "start": 696,
        "end": 704
      },
      "directive": null,
      "start": 696,
      "end": 705
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 743
}
```
