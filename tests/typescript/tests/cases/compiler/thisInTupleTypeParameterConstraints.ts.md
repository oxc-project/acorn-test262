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
        "start": 10,
        "end": 17
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 18,
        "end": 20
      },
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IArguments",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 41
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 42,
        "end": 44
      },
      "declare": false,
      "start": 21,
      "end": 44
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Function",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 63
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 64,
        "end": 66
      },
      "declare": false,
      "start": 45,
      "end": 66
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 83
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 84,
        "end": 86
      },
      "declare": false,
      "start": 67,
      "end": 86
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RegExp",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
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
      "start": 87,
      "end": 106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
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
        "name": "String",
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
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 163
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
              "start": 164,
              "end": 165
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 164,
            "end": 165
          }
        ],
        "start": 163,
        "end": 166
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
              "start": 317,
              "end": 320
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
                    "start": 321,
                    "end": 322
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 321,
                  "end": 322
                }
              ],
              "start": 320,
              "end": 323
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
                    "start": 329,
                    "end": 333
                  },
                  "start": 327,
                  "end": 333
                },
                "start": 324,
                "end": 333
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 336,
                "end": 340
              },
              "start": 334,
              "end": 340
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 317,
            "end": 341
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduceRight",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 357
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
                    "start": 358,
                    "end": 359
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 358,
                  "end": 359
                }
              ],
              "start": 357,
              "end": 360
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
                    "start": 366,
                    "end": 370
                  },
                  "start": 364,
                  "end": 370
                },
                "start": 361,
                "end": 370
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 373,
                "end": 377
              },
              "start": 371,
              "end": 377
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 346,
            "end": 378
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduce",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 389
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
                    "start": 390,
                    "end": 391
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 390,
                  "end": 391
                }
              ],
              "start": 389,
              "end": 392
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
                    "start": 398,
                    "end": 402
                  },
                  "start": 396,
                  "end": 402
                },
                "start": 393,
                "end": 402
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 405,
                "end": 409
              },
              "start": 403,
              "end": 409
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 383,
            "end": 410
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduce2",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 422
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
                    "start": 423,
                    "end": 424
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 423,
                  "end": 424
                }
              ],
              "start": 422,
              "end": 425
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
                    "start": 431,
                    "end": 435
                  },
                  "start": 429,
                  "end": 435
                },
                "start": 426,
                "end": 435
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 438,
                "end": 442
              },
              "start": 436,
              "end": 442
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 415,
            "end": 443
          }
        ],
        "start": 167,
        "end": 445
      },
      "declare": false,
      "start": 148,
      "end": 445
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 465
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
              "start": 466,
              "end": 467
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
                          "start": 481,
                          "end": 487
                        },
                        "start": 479,
                        "end": 487
                      },
                      "start": 478,
                      "end": 487
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 492,
                      "end": 498
                    },
                    "start": 489,
                    "end": 498
                  },
                  "start": 477,
                  "end": 498
                }
              ],
              "start": 476,
              "end": 499
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 466,
            "end": 499
          }
        ],
        "start": 465,
        "end": 500
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
                "start": 504,
                "end": 505
              },
              "typeArguments": null,
              "start": 504,
              "end": 505
            },
            "start": 502,
            "end": 505
          },
          "start": 501,
          "end": 505
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 508,
          "end": 512
        },
        "start": 506,
        "end": 512
      },
      "body": null,
      "expression": false,
      "start": 447,
      "end": 513
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
                            "start": 526,
                            "end": 532
                          },
                          "start": 524,
                          "end": 532
                        },
                        "start": 523,
                        "end": 532
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 537,
                        "end": 543
                      },
                      "start": 534,
                      "end": 543
                    },
                    "start": 522,
                    "end": 543
                  }
                ],
                "start": 521,
                "end": 544
              },
              "start": 519,
              "end": 544
            },
            "start": 518,
            "end": 544
          },
          "init": null,
          "definite": false,
          "start": 518,
          "end": 544
        }
      ],
      "declare": false,
      "start": 514,
      "end": 545
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
          "start": 546,
          "end": 547
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 548,
            "end": 549
          }
        ],
        "optional": false,
        "start": 546,
        "end": 550
      },
      "directive": null,
      "start": 546,
      "end": 551
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 551
}
```
