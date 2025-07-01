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
        "name": "Boolean",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 57
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 58,
        "end": 60
      },
      "declare": false,
      "start": 40,
      "end": 60
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IArguments",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 81
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 82,
        "end": 84
      },
      "declare": false,
      "start": 61,
      "end": 84
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Function",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 103
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 104,
        "end": 106
      },
      "declare": false,
      "start": 85,
      "end": 106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 123
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 124,
        "end": 126
      },
      "declare": false,
      "start": 107,
      "end": 126
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RegExp",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 143
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 144,
        "end": 146
      },
      "declare": false,
      "start": 127,
      "end": 146
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 163
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 164,
        "end": 166
      },
      "declare": false,
      "start": 147,
      "end": 166
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "String",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 183
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 184,
        "end": 186
      },
      "declare": false,
      "start": 167,
      "end": 186
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 203
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
              "start": 204,
              "end": 205
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 204,
            "end": 205
          }
        ],
        "start": 203,
        "end": 206
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
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 360
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 362
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 361,
                  "end": 362
                }
              ],
              "start": 360,
              "end": 363
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 369,
                    "end": 373
                  },
                  "start": 367,
                  "end": 373
                },
                "start": 364,
                "end": 373
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 376,
                "end": 380
              },
              "start": 374,
              "end": 380
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 357,
            "end": 381
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduceRight",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 397
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 399
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 398,
                  "end": 399
                }
              ],
              "start": 397,
              "end": 400
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 406,
                    "end": 410
                  },
                  "start": 404,
                  "end": 410
                },
                "start": 401,
                "end": 410
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 413,
                "end": 417
              },
              "start": 411,
              "end": 417
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 386,
            "end": 418
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduce",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 429
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 430,
                    "end": 431
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 430,
                  "end": 431
                }
              ],
              "start": 429,
              "end": 432
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 438,
                    "end": 442
                  },
                  "start": 436,
                  "end": 442
                },
                "start": 433,
                "end": 442
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 445,
                "end": 449
              },
              "start": 443,
              "end": 449
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 423,
            "end": 450
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduce2",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 462
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 463,
                    "end": 464
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 463,
                  "end": 464
                }
              ],
              "start": 462,
              "end": 465
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 471,
                    "end": 475
                  },
                  "start": 469,
                  "end": 475
                },
                "start": 466,
                "end": 475
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 478,
                "end": 482
              },
              "start": 476,
              "end": 482
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 455,
            "end": 483
          }
        ],
        "start": 207,
        "end": 485
      },
      "declare": false,
      "start": 188,
      "end": 485
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 505
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
              "start": 506,
              "end": 507
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
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
                          "type": "TSNumberKeyword",
                          "start": 521,
                          "end": 527
                        },
                        "start": 519,
                        "end": 527
                      },
                      "start": 518,
                      "end": 527
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 532,
                      "end": 538
                    },
                    "start": 529,
                    "end": 538
                  },
                  "start": 517,
                  "end": 538
                }
              ],
              "start": 516,
              "end": 539
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 506,
            "end": 539
          }
        ],
        "start": 505,
        "end": 540
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 545
              },
              "typeArguments": null,
              "start": 544,
              "end": 545
            },
            "start": 542,
            "end": 545
          },
          "start": 541,
          "end": 545
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 548,
          "end": 552
        },
        "start": 546,
        "end": 552
      },
      "body": null,
      "expression": false,
      "start": 487,
      "end": 553
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
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
                            "type": "TSNumberKeyword",
                            "start": 566,
                            "end": 572
                          },
                          "start": 564,
                          "end": 572
                        },
                        "start": 563,
                        "end": 572
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 577,
                        "end": 583
                      },
                      "start": 574,
                      "end": 583
                    },
                    "start": 562,
                    "end": 583
                  }
                ],
                "start": 561,
                "end": 584
              },
              "start": 559,
              "end": 584
            },
            "start": 558,
            "end": 584
          },
          "init": null,
          "definite": false,
          "start": 558,
          "end": 584
        }
      ],
      "declare": false,
      "start": 554,
      "end": 585
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 586,
          "end": 587
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 588,
            "end": 589
          }
        ],
        "optional": false,
        "start": 586,
        "end": 590
      },
      "directive": null,
      "start": 586,
      "end": 591
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 40,
  "end": 591
}
```
