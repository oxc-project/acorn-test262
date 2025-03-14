thisInTupleTypeParameterConstraints.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 58,
        "end": 60,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 57,
        "decorators": [],
        "name": "Boolean",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 61,
      "end": 84,
      "body": {
        "type": "TSInterfaceBody",
        "start": 82,
        "end": 84,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 81,
        "decorators": [],
        "name": "IArguments",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 85,
      "end": 106,
      "body": {
        "type": "TSInterfaceBody",
        "start": 104,
        "end": 106,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 103,
        "decorators": [],
        "name": "Function",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 107,
      "end": 126,
      "body": {
        "type": "TSInterfaceBody",
        "start": 124,
        "end": 126,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 123,
        "decorators": [],
        "name": "Number",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 127,
      "end": 146,
      "body": {
        "type": "TSInterfaceBody",
        "start": 144,
        "end": 146,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 143,
        "decorators": [],
        "name": "RegExp",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 147,
      "end": 166,
      "body": {
        "type": "TSInterfaceBody",
        "start": 164,
        "end": 166,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 163,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 167,
      "end": 186,
      "body": {
        "type": "TSInterfaceBody",
        "start": 184,
        "end": 186,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 183,
        "decorators": [],
        "name": "String",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 188,
      "end": 485,
      "body": {
        "type": "TSInterfaceBody",
        "start": 207,
        "end": 485,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 357,
            "end": 381,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 357,
              "end": 360,
              "decorators": [],
              "name": "map",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 364,
                "end": 373,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 367,
                  "end": 373,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 369,
                    "end": 373
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 360,
              "end": 363,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 361,
                  "end": 362,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 362,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 386,
            "end": 418,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 386,
              "end": 397,
              "decorators": [],
              "name": "reduceRight",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 401,
                "end": 410,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 404,
                  "end": 410,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 406,
                    "end": 410
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 397,
              "end": 400,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 398,
                  "end": 399,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 399,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 423,
            "end": 450,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 429,
              "decorators": [],
              "name": "reduce",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 433,
                "end": 442,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 436,
                  "end": 442,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 438,
                    "end": 442
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 429,
              "end": 432,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 430,
                  "end": 431,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 431,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 455,
            "end": 483,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 455,
              "end": 462,
              "decorators": [],
              "name": "reduce2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 466,
                "end": 475,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 469,
                  "end": 475,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 471,
                    "end": 475
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 462,
              "end": 465,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 463,
                  "end": 464,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 464,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 203,
        "decorators": [],
        "name": "Array",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 203,
        "end": 206,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 204,
            "end": 205,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 487,
      "end": 553,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 505,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 541,
          "end": 545,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 546,
        "end": 552,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 548,
          "end": 552
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 505,
        "end": 540,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 506,
            "end": 539,
            "const": false,
            "constraint": {
              "type": "TSTupleType",
              "start": 516,
              "end": 539,
              "elementTypes": [
                {
                  "type": "TSFunctionType",
                  "start": 517,
                  "end": 538,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 518,
                      "end": 527,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 519,
                        "end": 527,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 521,
                          "end": 527
                        }
                      }
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 584,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 563,
                        "end": 572,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 564,
                          "end": 572,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 566,
                            "end": 572
                          }
                        }
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 586,
      "end": 591,
      "expression": {
        "type": "CallExpression",
        "start": 586,
        "end": 590,
        "arguments": [
          {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 586,
          "end": 587,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
