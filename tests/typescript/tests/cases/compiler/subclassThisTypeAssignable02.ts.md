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
        "name": "Lifecycle",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 25
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 32
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Lifecycle",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 50
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 56
                    },
                    "typeArguments": null,
                    "start": 51,
                    "end": 56
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 63
                    },
                    "typeArguments": null,
                    "start": 58,
                    "end": 63
                  }
                ],
                "start": 50,
                "end": 64
              },
              "start": 41,
              "end": 64
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 64
          }
        ],
        "start": 19,
        "end": 65
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
              "name": "oninit",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 75
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 89
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Attrs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 90,
                            "end": 95
                          },
                          "typeArguments": null,
                          "start": 90,
                          "end": 95
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 97,
                            "end": 102
                          },
                          "typeArguments": null,
                          "start": 97,
                          "end": 102
                        }
                      ],
                      "start": 89,
                      "end": 103
                    },
                    "start": 84,
                    "end": 103
                  },
                  "start": 82,
                  "end": 103
                },
                "start": 77,
                "end": 103
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 106,
                "end": 112
              },
              "start": 104,
              "end": 112
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 69,
            "end": 113
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 119,
                    "end": 125
                  },
                  "start": 117,
                  "end": 125
                },
                "start": 116,
                "end": 125
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 128,
                "end": 131
              },
              "start": 126,
              "end": 131
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 115,
            "end": 132
          }
        ],
        "start": 66,
        "end": 134
      },
      "declare": false,
      "start": 0,
      "end": 134
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Vnode",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 151
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 157
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 152,
            "end": 157
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 164
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Lifecycle",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 182
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 183,
                      "end": 188
                    },
                    "typeArguments": null,
                    "start": 183,
                    "end": 188
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 195
                    },
                    "typeArguments": null,
                    "start": 190,
                    "end": 195
                  }
                ],
                "start": 182,
                "end": 196
              },
              "start": 173,
              "end": 196
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 159,
            "end": 196
          }
        ],
        "start": 151,
        "end": 197
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
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 204
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 215
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Attrs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 216,
                        "end": 221
                      },
                      "typeArguments": null,
                      "start": 216,
                      "end": 221
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 223,
                        "end": 228
                      },
                      "typeArguments": null,
                      "start": 223,
                      "end": 228
                    }
                  ],
                  "start": 215,
                  "end": 229
                },
                "start": 206,
                "end": 229
              },
              "start": 204,
              "end": 229
            },
            "accessibility": null,
            "static": false,
            "start": 201,
            "end": 230
          }
        ],
        "start": 198,
        "end": 232
      },
      "declare": false,
      "start": 136,
      "end": 232
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 253
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 259
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 254,
            "end": 259
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 266
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Lifecycle",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 284
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 290
                    },
                    "typeArguments": null,
                    "start": 285,
                    "end": 290
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 297
                    },
                    "typeArguments": null,
                    "start": 292,
                    "end": 297
                  }
                ],
                "start": 284,
                "end": 298
              },
              "start": 275,
              "end": 298
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 261,
            "end": 298
          }
        ],
        "start": 253,
        "end": 299
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
              "name": "view",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 307
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 314,
                      "end": 319
                    },
                    "typeArguments": null,
                    "start": 314,
                    "end": 319
                  },
                  "start": 312,
                  "end": 319
                },
                "start": 308,
                "end": 319
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 328,
                      "end": 333
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Attrs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 334,
                            "end": 339
                          },
                          "typeArguments": null,
                          "start": 334,
                          "end": 339
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 341,
                            "end": 346
                          },
                          "typeArguments": null,
                          "start": 341,
                          "end": 346
                        }
                      ],
                      "start": 333,
                      "end": 347
                    },
                    "start": 328,
                    "end": 347
                  },
                  "start": 326,
                  "end": 347
                },
                "start": 321,
                "end": 347
              }
            ],
            "returnType": {
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
            "readonly": false,
            "static": false,
            "start": 303,
            "end": 357
          }
        ],
        "start": 300,
        "end": 359
      },
      "declare": false,
      "start": 234,
      "end": 359
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 385
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
              "start": 386,
              "end": 387
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 386,
            "end": 387
          }
        ],
        "start": 385,
        "end": 388
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Lifecycle",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 406
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
                  "start": 407,
                  "end": 408
                },
                "typeArguments": null,
                "start": 407,
                "end": 408
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClassComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 424
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
                        "start": 425,
                        "end": 426
                      },
                      "typeArguments": null,
                      "start": 425,
                      "end": 426
                    }
                  ],
                  "start": 424,
                  "end": 427
                },
                "start": 410,
                "end": 427
              }
            ],
            "start": 406,
            "end": 428
          },
          "start": 397,
          "end": 428
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
              "name": "oninit",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 438
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 452
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
                            "start": 453,
                            "end": 454
                          },
                          "typeArguments": null,
                          "start": 453,
                          "end": 454
                        },
                        {
                          "type": "TSThisType",
                          "start": 456,
                          "end": 460
                        }
                      ],
                      "start": 452,
                      "end": 461
                    },
                    "start": 447,
                    "end": 461
                  },
                  "start": 445,
                  "end": 461
                },
                "start": 440,
                "end": 461
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 464,
                "end": 470
              },
              "start": 462,
              "end": 470
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 432,
            "end": 471
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "view",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 477
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 485,
                      "end": 490
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
                            "start": 491,
                            "end": 492
                          },
                          "typeArguments": null,
                          "start": 491,
                          "end": 492
                        },
                        {
                          "type": "TSThisType",
                          "start": 494,
                          "end": 498
                        }
                      ],
                      "start": 490,
                      "end": 499
                    },
                    "start": 485,
                    "end": 499
                  },
                  "start": 483,
                  "end": 499
                },
                "start": 478,
                "end": 499
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 502,
                "end": 508
              },
              "start": 500,
              "end": 508
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 473,
            "end": 509
          }
        ],
        "start": 429,
        "end": 511
      },
      "declare": false,
      "start": 361,
      "end": 511
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyAttrs",
        "optional": false,
        "typeAnnotation": null,
        "start": 523,
        "end": 530
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 535
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 537,
                "end": 543
              },
              "start": 535,
              "end": 543
            },
            "accessibility": null,
            "static": false,
            "start": 533,
            "end": 543
          }
        ],
        "start": 531,
        "end": 545
      },
      "declare": false,
      "start": 513,
      "end": 545
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 552,
        "end": 553
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 579
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyAttrs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 580,
                  "end": 587
                },
                "typeArguments": null,
                "start": 580,
                "end": 587
              }
            ],
            "start": 579,
            "end": 588
          },
          "start": 565,
          "end": 588
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "view",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 596
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vnode",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 600,
                        "end": 605
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyAttrs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 606,
                              "end": 613
                            },
                            "typeArguments": null,
                            "start": 606,
                            "end": 613
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 615,
                              "end": 616
                            },
                            "typeArguments": null,
                            "start": 615,
                            "end": 616
                          }
                        ],
                        "start": 605,
                        "end": 617
                      },
                      "start": 600,
                      "end": 617
                    },
                    "start": 598,
                    "end": 617
                  },
                  "start": 597,
                  "end": 617
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 628,
                      "end": 629
                    },
                    "start": 621,
                    "end": 630
                  }
                ],
                "start": 619,
                "end": 632
              },
              "expression": false,
              "start": 596,
              "end": 632
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 592,
            "end": 632
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 746,
                    "end": 752
                  },
                  "start": 744,
                  "end": 752
                },
                "start": 743,
                "end": 752
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 755,
                "end": 762
              },
              "start": 753,
              "end": 762
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 742,
            "end": 763
          }
        ],
        "start": 589,
        "end": 765
      },
      "abstract": false,
      "declare": false,
      "start": 546,
      "end": 765
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
            "name": "test8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClassComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 780,
                  "end": 794
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 795,
                      "end": 798
                    }
                  ],
                  "start": 794,
                  "end": 799
                },
                "start": 780,
                "end": 799
              },
              "start": 778,
              "end": 799
            },
            "start": 773,
            "end": 799
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 807
            },
            "typeArguments": null,
            "arguments": [],
            "start": 802,
            "end": 809
          },
          "definite": false,
          "start": 773,
          "end": 809
        }
      ],
      "declare": false,
      "start": 767,
      "end": 810
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 810
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
    "value": "Lifecycle",
    "start": 10,
    "end": 19,
    "range": [
      10,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 20,
    "end": 25,
    "range": [
      20,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 27,
    "end": 32,
    "range": [
      27,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 33,
    "end": 40,
    "range": [
      33,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "Lifecycle",
    "start": 41,
    "end": 50,
    "range": [
      41,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 51,
    "end": 56,
    "range": [
      51,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 58,
    "end": 63,
    "range": [
      58,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "oninit",
    "start": 69,
    "end": 75,
    "range": [
      69,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 75,
    "end": 76,
    "range": [
      75,
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
    "type": "Identifier",
    "value": "vnode",
    "start": 77,
    "end": 82,
    "range": [
      77,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "Vnode",
    "start": 84,
    "end": 89,
    "range": [
      84,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 90,
    "end": 95,
    "range": [
      90,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 97,
    "end": 102,
    "range": [
      97,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 106,
    "end": 112,
    "range": [
      106,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 119,
    "end": 125,
    "range": [
      119,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 128,
    "end": 131,
    "range": [
      128,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 136,
    "end": 145,
    "range": [
      136,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "Vnode",
    "start": 146,
    "end": 151,
    "range": [
      146,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 152,
    "end": 157,
    "range": [
      152,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 159,
    "end": 164,
    "range": [
      159,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 165,
    "end": 172,
    "range": [
      165,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "Lifecycle",
    "start": 173,
    "end": 182,
    "range": [
      173,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 183,
    "end": 188,
    "range": [
      183,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 190,
    "end": 195,
    "range": [
      190,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 201,
    "end": 204,
    "range": [
      201,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 206,
    "end": 215,
    "range": [
      206,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 216,
    "end": 221,
    "range": [
      216,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 223,
    "end": 228,
    "range": [
      223,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 234,
    "end": 243,
    "range": [
      234,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 244,
    "end": 253,
    "range": [
      244,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 254,
    "end": 259,
    "range": [
      254,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 261,
    "end": 266,
    "range": [
      261,
      266
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 267,
    "end": 274,
    "range": [
      267,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "Lifecycle",
    "start": 275,
    "end": 284,
    "range": [
      275,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 285,
    "end": 290,
    "range": [
      285,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 292,
    "end": 297,
    "range": [
      292,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "view",
    "start": 303,
    "end": 307,
    "range": [
      303,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 308,
    "end": 312,
    "range": [
      308,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 314,
    "end": 319,
    "range": [
      314,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "vnode",
    "start": 321,
    "end": 326,
    "range": [
      321,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "Vnode",
    "start": 328,
    "end": 333,
    "range": [
      328,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 334,
    "end": 339,
    "range": [
      334,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 341,
    "end": 346,
    "range": [
      341,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 350,
    "end": 356,
    "range": [
      350,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 361,
    "end": 370,
    "range": [
      361,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassComponent",
    "start": 371,
    "end": 385,
    "range": [
      371,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 389,
    "end": 396,
    "range": [
      389,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "Lifecycle",
    "start": 397,
    "end": 406,
    "range": [
      397,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassComponent",
    "start": 410,
    "end": 424,
    "range": [
      410,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "oninit",
    "start": 432,
    "end": 438,
    "range": [
      432,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "vnode",
    "start": 440,
    "end": 445,
    "range": [
      440,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "Vnode",
    "start": 447,
    "end": 452,
    "range": [
      447,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 456,
    "end": 460,
    "range": [
      456,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 464,
    "end": 470,
    "range": [
      464,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "view",
    "start": 473,
    "end": 477,
    "range": [
      473,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "vnode",
    "start": 478,
    "end": 483,
    "range": [
      478,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "Vnode",
    "start": 485,
    "end": 490,
    "range": [
      485,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 494,
    "end": 498,
    "range": [
      494,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 502,
    "end": 508,
    "range": [
      502,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 513,
    "end": 522,
    "range": [
      513,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "MyAttrs",
    "start": 523,
    "end": 530,
    "range": [
      523,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 533,
    "end": 535,
    "range": [
      533,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 537,
    "end": 543,
    "range": [
      537,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 546,
    "end": 551,
    "range": [
      546,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 554,
    "end": 564,
    "range": [
      554,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassComponent",
    "start": 565,
    "end": 579,
    "range": [
      565,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "MyAttrs",
    "start": 580,
    "end": 587,
    "range": [
      580,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "view",
    "start": 592,
    "end": 596,
    "range": [
      592,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Identifier",
    "value": "Vnode",
    "start": 600,
    "end": 605,
    "range": [
      600,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "MyAttrs",
    "start": 606,
    "end": 613,
    "range": [
      606,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 621,
    "end": 627,
    "range": [
      621,
      627
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 746,
    "end": 752,
    "range": [
      746,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 755,
    "end": 762,
    "range": [
      755,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 767,
    "end": 772,
    "range": [
      767,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "test8",
    "start": 773,
    "end": 778,
    "range": [
      773,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassComponent",
    "start": 780,
    "end": 794,
    "range": [
      780,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 795,
    "end": 798,
    "range": [
      795,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 802,
    "end": 805,
    "range": [
      802,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
            "name": "test9",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 46
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "typeArguments": null,
            "arguments": [],
            "start": 49,
            "end": 56
          },
          "definite": false,
          "start": 41,
          "end": 56
        }
      ],
      "declare": false,
      "start": 35,
      "end": 57
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 57
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 35,
    "end": 40,
    "range": [
      35,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "test9",
    "start": 41,
    "end": 46,
    "range": [
      41,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 49,
    "end": 52,
    "range": [
      49,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  }
]
```
