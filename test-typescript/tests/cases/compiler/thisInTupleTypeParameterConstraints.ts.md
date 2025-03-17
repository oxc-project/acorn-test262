__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 40,
  "end": 592,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 57,
        "name": "Boolean",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 58,
        "end": 60,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 61,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 81,
        "name": "IArguments",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 82,
        "end": 84,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 85,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 103,
        "name": "Function",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 104,
        "end": 106,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 107,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 123,
        "name": "Number",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 124,
        "end": 126,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 127,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 143,
        "name": "RegExp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 144,
        "end": 146,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 147,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 163,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 164,
        "end": 166,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 167,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 183,
        "name": "String",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 184,
        "end": 186,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 188,
      "end": 485,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 203,
        "name": "Array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 203,
        "end": 206,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 204,
            "end": 205,
            "name": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 207,
        "end": 485,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 357,
            "end": 381,
            "key": {
              "type": "Identifier",
              "start": 357,
              "end": 360,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 360,
              "end": 363,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 361,
                  "end": 362,
                  "name": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 362,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 364,
                "end": 373,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 367,
                  "end": 373,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 369,
                    "end": 373
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 374,
              "end": 380,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 376,
                "end": 380
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 386,
            "end": 418,
            "key": {
              "type": "Identifier",
              "start": 386,
              "end": 397,
              "name": "reduceRight",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 397,
              "end": 400,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 398,
                  "end": 399,
                  "name": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 399,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 401,
                "end": 410,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 404,
                  "end": 410,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 406,
                    "end": 410
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 411,
              "end": 417,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 413,
                "end": 417
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 423,
            "end": 450,
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 429,
              "name": "reduce",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 429,
              "end": 432,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 430,
                  "end": 431,
                  "name": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 431,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 433,
                "end": 442,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 436,
                  "end": 442,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 438,
                    "end": 442
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 443,
              "end": 449,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 445,
                "end": 449
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 455,
            "end": 483,
            "key": {
              "type": "Identifier",
              "start": 455,
              "end": 462,
              "name": "reduce2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 462,
              "end": 465,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 463,
                  "end": 464,
                  "name": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 464,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 466,
                "end": 475,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 469,
                  "end": 475,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 471,
                    "end": 475
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 476,
              "end": 482,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 478,
                "end": 482
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 487,
      "end": 553,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 505,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 541,
          "end": 545,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 542,
            "end": 545,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 544,
              "end": 545,
              "typeName": {
                "type": "Identifier",
                "start": 544,
                "end": 545,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 505,
        "end": 540,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 506,
            "end": 539,
            "name": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTupleType",
              "start": 516,
              "end": 539,
              "elementTypes": [
                {
                  "type": "TSFunctionType",
                  "start": 517,
                  "end": 538,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 518,
                      "end": 527,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 519,
                        "end": 527,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 521,
                          "end": 527
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 529,
                    "end": 538,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 532,
                      "end": 538
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 546,
        "end": 552,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 548,
          "end": 552
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 554,
      "end": 585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 584,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 559,
              "end": 584,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 561,
                "end": 584,
                "elementTypes": [
                  {
                    "type": "TSFunctionType",
                    "start": 562,
                    "end": 583,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 563,
                        "end": 572,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 564,
                          "end": 572,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 566,
                            "end": 572
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 574,
                      "end": 583,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 577,
                        "end": 583
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 586,
      "end": 591,
      "expression": {
        "type": "CallExpression",
        "start": 586,
        "end": 590,
        "callee": {
          "type": "Identifier",
          "start": 586,
          "end": 587,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
