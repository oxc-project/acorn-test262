__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 18
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
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "typeArguments": null,
          "start": 25,
          "end": 26
        },
        "start": 23,
        "end": 26
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 36
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 39,
            "end": 42
          },
          "definite": false,
          "start": 34,
          "end": 42
        }
      ],
      "declare": false,
      "start": 28,
      "end": 43
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 96
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 96
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 94,
                "end": 96
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 98
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 101,
            "end": 104
          },
          "definite": false,
          "start": 92,
          "end": 104
        }
      ],
      "declare": false,
      "start": 86,
      "end": 105
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 125
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 128,
            "end": 131
          },
          "definite": false,
          "start": 123,
          "end": 131
        }
      ],
      "declare": false,
      "start": 117,
      "end": 132
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e1",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 157
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e2",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 161
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 162
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 166
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 165,
            "end": 168
          },
          "definite": false,
          "start": 154,
          "end": 168
        }
      ],
      "declare": false,
      "start": 148,
      "end": 169
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dispatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 214
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "constraint": null,
            "default": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 225
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 227,
                      "end": 230
                    },
                    "start": 225,
                    "end": 230
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 221,
                  "end": 231
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extraProps",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 245,
                          "end": 251
                        },
                        "start": 243,
                        "end": 251
                      },
                      "start": 233,
                      "end": 251
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 254,
                      "end": 257
                    },
                    "start": 252,
                    "end": 257
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 232,
                  "end": 257
                }
              ],
              "start": 219,
              "end": 259
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 215,
            "end": 259
          }
        ],
        "start": 214,
        "end": 260
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 266,
                    "end": 267
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 276,
                      "end": 277
                    },
                    "typeArguments": null,
                    "start": 276,
                    "end": 277
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 266,
                  "end": 277
                }
              ],
              "start": 265,
              "end": 278
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
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
                      "start": 287,
                      "end": 288
                    },
                    "typeArguments": null,
                    "start": 287,
                    "end": 288
                  },
                  "start": 285,
                  "end": 288
                },
                "start": 279,
                "end": 288
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
                  "start": 291,
                  "end": 292
                },
                "typeArguments": null,
                "start": 291,
                "end": 292
              },
              "start": 289,
              "end": 292
            },
            "start": 265,
            "end": 292
          }
        ],
        "start": 263,
        "end": 294
      },
      "declare": false,
      "start": 201,
      "end": 295
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFuncs",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 307
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 327,
                    "end": 333
                  },
                  "start": 325,
                  "end": 333
                },
                "start": 322,
                "end": 333
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 341
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 343,
                        "end": 346
                      },
                      "start": 341,
                      "end": 346
                    },
                    "value": null,
                    "start": 337,
                    "end": 346
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 351,
                    "end": 355
                  },
                  "start": 348,
                  "end": 355
                },
                "start": 336,
                "end": 355
              },
              "start": 334,
              "end": 355
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 312,
            "end": 355
          }
        ],
        "start": 310,
        "end": 357
      },
      "declare": false,
      "start": 296,
      "end": 358
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDestructuring",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 378
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
              "start": 379,
              "end": 380
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFuncs",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 395
              },
              "typeArguments": null,
              "start": 389,
              "end": 395
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 379,
            "end": 395
          }
        ],
        "start": 378,
        "end": 396
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 411,
          "end": 414
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 425
            },
            "typeArguments": null,
            "start": 424,
            "end": 425
          },
          "start": 418,
          "end": 425
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 434
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 446
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 447,
                            "end": 448
                          },
                          "typeArguments": null,
                          "start": 447,
                          "end": 448
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 449,
                            "end": 452
                          },
                          "typeArguments": null,
                          "start": 449,
                          "end": 452
                        },
                        "start": 447,
                        "end": 453
                      }
                    ],
                    "start": 446,
                    "end": 454
                  },
                  "start": 436,
                  "end": 454
                },
                "start": 434,
                "end": 454
              },
              "value": null,
              "start": 430,
              "end": 454
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 459,
              "end": 463
            },
            "start": 456,
            "end": 463
          },
          "start": 429,
          "end": 463
        },
        "optional": true,
        "readonly": true,
        "start": 399,
        "end": 465
      },
      "declare": false,
      "start": 359,
      "end": 466
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Destructuring",
        "optional": false,
        "typeAnnotation": null,
        "start": 472,
        "end": 485
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
              "start": 486,
              "end": 487
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFuncs",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 502
              },
              "typeArguments": null,
              "start": 496,
              "end": 502
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 486,
            "end": 502
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 505
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDestructuring",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 528
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
                      "start": 529,
                      "end": 530
                    },
                    "typeArguments": null,
                    "start": 529,
                    "end": 530
                  }
                ],
                "start": 528,
                "end": 531
              },
              "start": 514,
              "end": 531
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 504,
            "end": 531
          }
        ],
        "start": 485,
        "end": 532
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "dispatch",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dispatch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 554
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 555,
                      "end": 558
                    }
                  ],
                  "start": 554,
                  "end": 559
                },
                "start": 546,
                "end": 559
              },
              "start": 544,
              "end": 559
            },
            "start": 536,
            "end": 559
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "funcs",
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
                  "start": 568,
                  "end": 569
                },
                "typeArguments": null,
                "start": 568,
                "end": 569
              },
              "start": 566,
              "end": 569
            },
            "start": 561,
            "end": 569
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 575
            },
            "typeArguments": null,
            "start": 574,
            "end": 575
          },
          "start": 571,
          "end": 575
        },
        "start": 535,
        "end": 575
      },
      "declare": false,
      "start": 467,
      "end": 576
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
            "name": "funcs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 589
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funcA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 598,
                  "end": 603
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
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
                          "type": "TSBooleanKeyword",
                          "start": 609,
                          "end": 616
                        },
                        "start": 607,
                        "end": 616
                      },
                      "start": 606,
                      "end": 616
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 619,
                      "end": 623
                    },
                    "start": 617,
                    "end": 623
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 627,
                    "end": 629
                  },
                  "id": null,
                  "generator": false,
                  "start": 605,
                  "end": 629
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 598,
                "end": 629
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funcB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 640
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 646,
                          "end": 652
                        },
                        "start": 644,
                        "end": 652
                      },
                      "start": 643,
                      "end": 652
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 658,
                          "end": 664
                        },
                        "start": 656,
                        "end": 664
                      },
                      "start": 654,
                      "end": 664
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 667,
                      "end": 671
                    },
                    "start": 665,
                    "end": 671
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 675,
                    "end": 677
                  },
                  "id": null,
                  "generator": false,
                  "start": 642,
                  "end": 677
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 635,
                "end": 677
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funcC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 683,
                  "end": 688
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 694,
                          "end": 700
                        },
                        "start": 692,
                        "end": 700
                      },
                      "start": 691,
                      "end": 700
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cc",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 706,
                          "end": 712
                        },
                        "start": 704,
                        "end": 712
                      },
                      "start": 702,
                      "end": 712
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ccc",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 719,
                          "end": 726
                        },
                        "start": 717,
                        "end": 726
                      },
                      "start": 714,
                      "end": 726
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 729,
                      "end": 733
                    },
                    "start": 727,
                    "end": 733
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 737,
                    "end": 739
                  },
                  "id": null,
                  "generator": false,
                  "start": 690,
                  "end": 739
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 683,
                "end": 739
              }
            ],
            "start": 592,
            "end": 742
          },
          "definite": false,
          "start": 583,
          "end": 742
        }
      ],
      "declare": false,
      "start": 577,
      "end": 743
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TFuncs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 749,
        "end": 756
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "funcs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 772
        },
        "typeArguments": null,
        "start": 759,
        "end": 772
      },
      "declare": false,
      "start": 744,
      "end": 773
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useReduxDispatch1",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
        "end": 808
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
              "start": 809,
              "end": 810
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDestructuring",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 833
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TFuncs1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 841
                    },
                    "typeArguments": null,
                    "start": 834,
                    "end": 841
                  }
                ],
                "start": 833,
                "end": 842
              },
              "start": 819,
              "end": 842
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 809,
            "end": 842
          }
        ],
        "start": 808,
        "end": 843
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "destructuring",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Destructuring",
                "optional": false,
                "typeAnnotation": null,
                "start": 859,
                "end": 872
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TFuncs1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 873,
                      "end": 880
                    },
                    "typeArguments": null,
                    "start": 873,
                    "end": 880
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 882,
                      "end": 883
                    },
                    "typeArguments": null,
                    "start": 882,
                    "end": 883
                  }
                ],
                "start": 872,
                "end": 884
              },
              "start": 859,
              "end": 884
            },
            "start": 857,
            "end": 884
          },
          "start": 844,
          "end": 884
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
            "start": 887,
            "end": 888
          },
          "typeArguments": null,
          "start": 887,
          "end": 888
        },
        "start": 885,
        "end": 888
      },
      "body": null,
      "expression": false,
      "start": 774,
      "end": 889
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 896,
            "end": 898
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useReduxDispatch1",
              "optional": false,
              "typeAnnotation": null,
              "start": 901,
              "end": 918
            },
            "typeArguments": null,
            "arguments": [
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
                    "start": 925,
                    "end": 926
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 928,
                    "end": 929
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 945,
                        "end": 950
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 956,
                              "end": 957
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 953,
                            "end": 957
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 962,
                            "end": 963
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 964,
                                  "end": 965
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcA",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 966,
                                  "end": 971
                                },
                                "optional": false,
                                "computed": false,
                                "start": 964,
                                "end": 971
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 975,
                                    "end": 976
                                  },
                                  "start": 972,
                                  "end": 976
                                }
                              ],
                              "optional": false,
                              "start": 964,
                              "end": 977
                            }
                          ],
                          "optional": false,
                          "start": 962,
                          "end": 978
                        },
                        "id": null,
                        "generator": false,
                        "start": 952,
                        "end": 978
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 945,
                      "end": 978
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1014,
                        "end": 1019
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1025,
                              "end": 1026
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 1022,
                            "end": 1026
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1031,
                            "end": 1032
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1033,
                                  "end": 1034
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcB",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1035,
                                  "end": 1040
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1033,
                                "end": 1040
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1044,
                                    "end": 1045
                                  },
                                  "start": 1041,
                                  "end": 1045
                                }
                              ],
                              "optional": false,
                              "start": 1033,
                              "end": 1046
                            }
                          ],
                          "optional": false,
                          "start": 1031,
                          "end": 1047
                        },
                        "id": null,
                        "generator": false,
                        "start": 1021,
                        "end": 1047
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1014,
                      "end": 1047
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1057,
                        "end": 1062
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1068,
                              "end": 1069
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 1065,
                            "end": 1069
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1074,
                            "end": 1075
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1076,
                                  "end": 1077
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcC",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1078,
                                  "end": 1083
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1076,
                                "end": 1083
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1087,
                                    "end": 1088
                                  },
                                  "start": 1084,
                                  "end": 1088
                                }
                              ],
                              "optional": false,
                              "start": 1076,
                              "end": 1089
                            }
                          ],
                          "optional": false,
                          "start": 1074,
                          "end": 1090
                        },
                        "id": null,
                        "generator": false,
                        "start": 1064,
                        "end": 1090
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1057,
                      "end": 1090
                    }
                  ],
                  "start": 935,
                  "end": 1097
                },
                "id": null,
                "generator": false,
                "start": 924,
                "end": 1098
              }
            ],
            "optional": false,
            "start": 901,
            "end": 1100
          },
          "definite": false,
          "start": 896,
          "end": 1100
        }
      ],
      "declare": false,
      "start": 890,
      "end": 1101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1101
}
```
