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
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 137
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
              "start": 138,
              "end": 139
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 138,
            "end": 139
          }
        ],
        "start": 137,
        "end": 140
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 146
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
                  "start": 148,
                  "end": 149
                },
                "typeArguments": null,
                "start": 148,
                "end": 149
              },
              "start": 146,
              "end": 149
            },
            "accessibility": null,
            "static": false,
            "start": 145,
            "end": 150
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
              "start": 153,
              "end": 154
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 160
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
                          "name": "arg",
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
                                "start": 167,
                                "end": 168
                              },
                              "typeArguments": null,
                              "start": 167,
                              "end": 168
                            },
                            "start": 165,
                            "end": 168
                          },
                          "start": 162,
                          "end": 168
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 173,
                          "end": 177
                        },
                        "start": 170,
                        "end": 177
                      },
                      "start": 161,
                      "end": 177
                    }
                  ],
                  "start": 160,
                  "end": 178
                },
                "start": 156,
                "end": 178
              },
              "start": 154,
              "end": 178
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 179
          }
        ],
        "start": 141,
        "end": 181
      },
      "declare": false,
      "start": 123,
      "end": 181
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 206
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 207,
                      "end": 213
                    }
                  ],
                  "start": 206,
                  "end": 214
                },
                "start": 202,
                "end": 214
              },
              "start": 200,
              "end": 214
            },
            "start": 197,
            "end": 214
          },
          "init": null,
          "definite": false,
          "start": 197,
          "end": 214
        }
      ],
      "declare": true,
      "start": 183,
      "end": 215
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 231
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 232,
                        "end": 235
                      },
                      "start": 232,
                      "end": 235
                    }
                  ],
                  "start": 231,
                  "end": 236
                },
                "start": 227,
                "end": 236
              },
              "start": 225,
              "end": 236
            },
            "start": 222,
            "end": 236
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 242
          },
          "definite": false,
          "start": 222,
          "end": 242
        }
      ],
      "declare": false,
      "start": 216,
      "end": 243
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 255,
                  "end": 259
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 260,
                      "end": 267
                    }
                  ],
                  "start": 259,
                  "end": 268
                },
                "start": 255,
                "end": 268
              },
              "start": 253,
              "end": 268
            },
            "start": 250,
            "end": 268
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 274
          },
          "definite": false,
          "start": 250,
          "end": 274
        }
      ],
      "declare": false,
      "start": 244,
      "end": 275
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 353
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
              "start": 354,
              "end": 355
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 354,
            "end": 355
          }
        ],
        "start": 353,
        "end": 356
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 362
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
                  "start": 364,
                  "end": 365
                },
                "typeArguments": null,
                "start": 364,
                "end": 365
              },
              "start": 362,
              "end": 365
            },
            "accessibility": null,
            "static": false,
            "start": 361,
            "end": 366
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
              "start": 369,
              "end": 370
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
                      "start": 374,
                      "end": 375
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 383,
                                  "end": 384
                                },
                                "typeArguments": null,
                                "start": 383,
                                "end": 384
                              },
                              "start": 381,
                              "end": 384
                            },
                            "start": 378,
                            "end": 384
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 389,
                            "end": 393
                          },
                          "start": 386,
                          "end": 393
                        },
                        "start": 377,
                        "end": 393
                      },
                      "start": 375,
                      "end": 393
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 374,
                    "end": 394
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
                      "start": 395,
                      "end": 396
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 398,
                          "end": 402
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
                                  "name": "arg",
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
                                        "start": 409,
                                        "end": 410
                                      },
                                      "typeArguments": null,
                                      "start": 409,
                                      "end": 410
                                    },
                                    "start": 407,
                                    "end": 410
                                  },
                                  "start": 404,
                                  "end": 410
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 415,
                                  "end": 419
                                },
                                "start": 412,
                                "end": 419
                              },
                              "start": 403,
                              "end": 419
                            }
                          ],
                          "start": 402,
                          "end": 420
                        },
                        "start": 398,
                        "end": 420
                      },
                      "start": 396,
                      "end": 420
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 395,
                    "end": 421
                  }
                ],
                "start": 372,
                "end": 423
              },
              "start": 370,
              "end": 423
            },
            "accessibility": null,
            "static": false,
            "start": 369,
            "end": 423
          }
        ],
        "start": 357,
        "end": 425
      },
      "declare": false,
      "start": 339,
      "end": 425
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
            "name": "f20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 450
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 451,
                      "end": 457
                    }
                  ],
                  "start": 450,
                  "end": 458
                },
                "start": 446,
                "end": 458
              },
              "start": 444,
              "end": 458
            },
            "start": 441,
            "end": 458
          },
          "init": null,
          "definite": false,
          "start": 441,
          "end": 458
        }
      ],
      "declare": true,
      "start": 427,
      "end": 459
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
            "name": "f21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 475
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 476,
                        "end": 479
                      },
                      "start": 476,
                      "end": 479
                    }
                  ],
                  "start": 475,
                  "end": 480
                },
                "start": 471,
                "end": 480
              },
              "start": 469,
              "end": 480
            },
            "start": 466,
            "end": 480
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f20",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 486
          },
          "definite": false,
          "start": 466,
          "end": 486
        }
      ],
      "declare": false,
      "start": 460,
      "end": 487
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
            "name": "f22",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 503
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 504,
                      "end": 511
                    }
                  ],
                  "start": 503,
                  "end": 512
                },
                "start": 499,
                "end": 512
              },
              "start": 497,
              "end": 512
            },
            "start": 494,
            "end": 512
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f20",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 518
          },
          "definite": false,
          "start": 494,
          "end": 518
        }
      ],
      "declare": false,
      "start": 488,
      "end": 519
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 649,
        "end": 653
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
              "start": 654,
              "end": 655
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 654,
            "end": 655
          }
        ],
        "start": 653,
        "end": 656
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 664
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
                  "start": 666,
                  "end": 667
                },
                "typeArguments": null,
                "start": 666,
                "end": 667
              },
              "start": 664,
              "end": 667
            },
            "accessibility": null,
            "static": false,
            "start": 663,
            "end": 668
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
              "start": 671,
              "end": 672
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 678
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
                          "name": "arg",
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
                                "start": 685,
                                "end": 686
                              },
                              "typeArguments": null,
                              "start": 685,
                              "end": 686
                            },
                            "start": 683,
                            "end": 686
                          },
                          "start": 680,
                          "end": 686
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 691,
                          "end": 695
                        },
                        "start": 688,
                        "end": 695
                      },
                      "start": 679,
                      "end": 695
                    }
                  ],
                  "start": 678,
                  "end": 696
                },
                "start": 674,
                "end": 696
              },
              "start": 672,
              "end": 696
            },
            "accessibility": null,
            "static": false,
            "start": 671,
            "end": 697
          }
        ],
        "start": 659,
        "end": 699
      },
      "declare": false,
      "start": 644,
      "end": 699
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
            "name": "f30",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 724
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 725,
                      "end": 731
                    }
                  ],
                  "start": 724,
                  "end": 732
                },
                "start": 720,
                "end": 732
              },
              "start": 718,
              "end": 732
            },
            "start": 715,
            "end": 732
          },
          "init": null,
          "definite": false,
          "start": 715,
          "end": 732
        }
      ],
      "declare": true,
      "start": 701,
      "end": 733
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
            "name": "f31",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 745,
                  "end": 749
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 750,
                        "end": 753
                      },
                      "start": 750,
                      "end": 753
                    }
                  ],
                  "start": 749,
                  "end": 754
                },
                "start": 745,
                "end": 754
              },
              "start": 743,
              "end": 754
            },
            "start": 740,
            "end": 754
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f30",
            "optional": false,
            "typeAnnotation": null,
            "start": 757,
            "end": 760
          },
          "definite": false,
          "start": 740,
          "end": 760
        }
      ],
      "declare": false,
      "start": 734,
      "end": 761
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
            "name": "f32",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 777
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 778,
                      "end": 785
                    }
                  ],
                  "start": 777,
                  "end": 786
                },
                "start": 773,
                "end": 786
              },
              "start": 771,
              "end": 786
            },
            "start": 768,
            "end": 786
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f30",
            "optional": false,
            "typeAnnotation": null,
            "start": 789,
            "end": 792
          },
          "definite": false,
          "start": 768,
          "end": 792
        }
      ],
      "declare": false,
      "start": 762,
      "end": 793
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 862,
        "end": 866
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
              "start": 867,
              "end": 868
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 867,
            "end": 868
          }
        ],
        "start": 866,
        "end": 869
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 876,
              "end": 877
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
                  "start": 879,
                  "end": 880
                },
                "typeArguments": null,
                "start": 879,
                "end": 880
              },
              "start": 877,
              "end": 880
            },
            "accessibility": null,
            "static": false,
            "start": 876,
            "end": 881
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
              "start": 884,
              "end": 885
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
                      "start": 889,
                      "end": 890
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 898,
                                  "end": 899
                                },
                                "typeArguments": null,
                                "start": 898,
                                "end": 899
                              },
                              "start": 896,
                              "end": 899
                            },
                            "start": 893,
                            "end": 899
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 904,
                            "end": 908
                          },
                          "start": 901,
                          "end": 908
                        },
                        "start": 892,
                        "end": 908
                      },
                      "start": 890,
                      "end": 908
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 889,
                    "end": 909
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
                      "start": 910,
                      "end": 911
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 913,
                          "end": 917
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
                                  "name": "arg",
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
                                        "start": 924,
                                        "end": 925
                                      },
                                      "typeArguments": null,
                                      "start": 924,
                                      "end": 925
                                    },
                                    "start": 922,
                                    "end": 925
                                  },
                                  "start": 919,
                                  "end": 925
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 930,
                                  "end": 934
                                },
                                "start": 927,
                                "end": 934
                              },
                              "start": 918,
                              "end": 934
                            }
                          ],
                          "start": 917,
                          "end": 935
                        },
                        "start": 913,
                        "end": 935
                      },
                      "start": 911,
                      "end": 935
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 910,
                    "end": 936
                  }
                ],
                "start": 887,
                "end": 938
              },
              "start": 885,
              "end": 938
            },
            "accessibility": null,
            "static": false,
            "start": 884,
            "end": 938
          }
        ],
        "start": 872,
        "end": 940
      },
      "declare": false,
      "start": 857,
      "end": 940
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
            "name": "f40",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 961,
                  "end": 965
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 966,
                      "end": 972
                    }
                  ],
                  "start": 965,
                  "end": 973
                },
                "start": 961,
                "end": 973
              },
              "start": 959,
              "end": 973
            },
            "start": 956,
            "end": 973
          },
          "init": null,
          "definite": false,
          "start": 956,
          "end": 973
        }
      ],
      "declare": true,
      "start": 942,
      "end": 974
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
            "name": "f41",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 986,
                  "end": 990
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 991,
                        "end": 994
                      },
                      "start": 991,
                      "end": 994
                    }
                  ],
                  "start": 990,
                  "end": 995
                },
                "start": 986,
                "end": 995
              },
              "start": 984,
              "end": 995
            },
            "start": 981,
            "end": 995
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f40",
            "optional": false,
            "typeAnnotation": null,
            "start": 998,
            "end": 1001
          },
          "definite": false,
          "start": 981,
          "end": 1001
        }
      ],
      "declare": false,
      "start": 975,
      "end": 1002
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
            "name": "f42",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1014,
                  "end": 1018
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1019,
                      "end": 1026
                    }
                  ],
                  "start": 1018,
                  "end": 1027
                },
                "start": 1014,
                "end": 1027
              },
              "start": 1012,
              "end": 1027
            },
            "start": 1009,
            "end": 1027
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f40",
            "optional": false,
            "typeAnnotation": null,
            "start": 1030,
            "end": 1033
          },
          "definite": false,
          "start": 1009,
          "end": 1033
        }
      ],
      "declare": false,
      "start": 1003,
      "end": 1034
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 1067,
        "end": 1069
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
              "start": 1070,
              "end": 1071
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1070,
            "end": 1071
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1074
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1073,
            "end": 1074
          }
        ],
        "start": 1069,
        "end": 1075
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1084,
                      "end": 1085
                    },
                    "typeArguments": null,
                    "start": 1084,
                    "end": 1085
                  },
                  "start": 1082,
                  "end": 1085
                },
                "start": 1081,
                "end": 1085
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
                  "start": 1088,
                  "end": 1089
                },
                "typeArguments": null,
                "start": 1088,
                "end": 1089
              },
              "start": 1086,
              "end": 1089
            },
            "start": 1080,
            "end": 1090
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 1093,
              "end": 1097
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
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1098,
                    "end": 1099
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1098,
                  "end": 1099
                }
              ],
              "start": 1097,
              "end": 1100
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1107,
                      "end": 1109
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
                            "start": 1110,
                            "end": 1111
                          },
                          "typeArguments": null,
                          "start": 1110,
                          "end": 1111
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1113,
                            "end": 1114
                          },
                          "typeArguments": null,
                          "start": 1113,
                          "end": 1114
                        }
                      ],
                      "start": 1109,
                      "end": 1115
                    },
                    "start": 1107,
                    "end": 1115
                  },
                  "start": 1105,
                  "end": 1115
                },
                "start": 1101,
                "end": 1115
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1118,
                  "end": 1120
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
                        "start": 1121,
                        "end": 1122
                      },
                      "typeArguments": null,
                      "start": 1121,
                      "end": 1122
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1124,
                        "end": 1125
                      },
                      "typeArguments": null,
                      "start": 1124,
                      "end": 1125
                    }
                  ],
                  "start": 1120,
                  "end": 1126
                },
                "start": 1118,
                "end": 1126
              },
              "start": 1116,
              "end": 1126
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1093,
            "end": 1127
          }
        ],
        "start": 1076,
        "end": 1129
      },
      "declare": false,
      "start": 1057,
      "end": 1129
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
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1149,
                  "end": 1151
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1152,
                      "end": 1158
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1160,
                      "end": 1166
                    }
                  ],
                  "start": 1151,
                  "end": 1167
                },
                "start": 1149,
                "end": 1167
              },
              "start": 1147,
              "end": 1167
            },
            "start": 1145,
            "end": 1167
          },
          "init": null,
          "definite": false,
          "start": 1145,
          "end": 1167
        }
      ],
      "declare": true,
      "start": 1131,
      "end": 1168
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
            "name": "fn1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1203,
                  "end": 1205
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1206,
                      "end": 1213
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1215,
                      "end": 1221
                    }
                  ],
                  "start": 1205,
                  "end": 1222
                },
                "start": 1203,
                "end": 1222
              },
              "start": 1201,
              "end": 1222
            },
            "start": 1198,
            "end": 1222
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1225,
            "end": 1227
          },
          "definite": false,
          "start": 1198,
          "end": 1227
        }
      ],
      "declare": false,
      "start": 1192,
      "end": 1228
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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1250,
                  "end": 1252
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 1253,
                        "end": 1256
                      },
                      "start": 1253,
                      "end": 1256
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1258,
                      "end": 1264
                    }
                  ],
                  "start": 1252,
                  "end": 1265
                },
                "start": 1250,
                "end": 1265
              },
              "start": 1248,
              "end": 1265
            },
            "start": 1245,
            "end": 1265
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1268,
            "end": 1270
          },
          "definite": false,
          "start": 1245,
          "end": 1270
        }
      ],
      "declare": false,
      "start": 1239,
      "end": 1271
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
            "name": "fn3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1302,
                  "end": 1304
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1305,
                      "end": 1311
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1313,
                      "end": 1320
                    }
                  ],
                  "start": 1304,
                  "end": 1321
                },
                "start": 1302,
                "end": 1321
              },
              "start": 1300,
              "end": 1321
            },
            "start": 1297,
            "end": 1321
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1324,
            "end": 1326
          },
          "definite": false,
          "start": 1297,
          "end": 1326
        }
      ],
      "declare": false,
      "start": 1291,
      "end": 1327
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
            "name": "fn4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1339,
                  "end": 1341
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1342,
                      "end": 1348
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1350,
                        "end": 1351
                      },
                      "start": 1350,
                      "end": 1351
                    }
                  ],
                  "start": 1341,
                  "end": 1352
                },
                "start": 1339,
                "end": 1352
              },
              "start": 1337,
              "end": 1352
            },
            "start": 1334,
            "end": 1352
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1355,
            "end": 1357
          },
          "definite": false,
          "start": 1334,
          "end": 1357
        }
      ],
      "declare": false,
      "start": 1328,
      "end": 1358
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1402,
        "end": 1403
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 1404,
              "end": 1409
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1404,
            "end": 1409
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1411,
              "end": 1412
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1411,
            "end": 1412
          }
        ],
        "start": 1403,
        "end": 1413
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1418,
              "end": 1419
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1421,
                  "end": 1422
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Dummy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1423,
                        "end": 1428
                      },
                      "typeArguments": null,
                      "start": 1423,
                      "end": 1428
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1430,
                        "end": 1431
                      },
                      "typeArguments": null,
                      "start": 1430,
                      "end": 1431
                    }
                  ],
                  "start": 1422,
                  "end": 1432
                },
                "start": 1421,
                "end": 1432
              },
              "start": 1419,
              "end": 1432
            },
            "accessibility": null,
            "static": false,
            "start": 1418,
            "end": 1433
          }
        ],
        "start": 1414,
        "end": 1435
      },
      "declare": false,
      "start": 1392,
      "end": 1435
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
        "start": 1443,
        "end": 1444
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 1445,
              "end": 1450
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1445,
            "end": 1450
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1452,
              "end": 1453
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1452,
            "end": 1453
          }
        ],
        "start": 1444,
        "end": 1454
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sub",
              "optional": false,
              "typeAnnotation": null,
              "start": 1467,
              "end": 1470
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1472,
                  "end": 1473
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Dummy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1474,
                        "end": 1479
                      },
                      "typeArguments": null,
                      "start": 1474,
                      "end": 1479
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1481,
                        "end": 1482
                      },
                      "typeArguments": null,
                      "start": 1481,
                      "end": 1482
                    }
                  ],
                  "start": 1473,
                  "end": 1483
                },
                "start": 1472,
                "end": 1483
              },
              "start": 1470,
              "end": 1483
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1459,
            "end": 1484
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "covariance",
              "optional": false,
              "typeAnnotation": null,
              "start": 1495,
              "end": 1505
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1507,
                  "end": 1508
                },
                "typeArguments": null,
                "start": 1507,
                "end": 1508
              },
              "start": 1505,
              "end": 1508
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1487,
            "end": 1509
          }
        ],
        "start": 1455,
        "end": 1511
      },
      "abstract": false,
      "declare": false,
      "start": 1437,
      "end": 1511
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1523,
                  "end": 1524
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1525,
                      "end": 1532
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 1534,
                      "end": 1540
                    }
                  ],
                  "start": 1524,
                  "end": 1541
                },
                "start": 1523,
                "end": 1541
              },
              "start": 1521,
              "end": 1541
            },
            "start": 1519,
            "end": 1541
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1548,
              "end": 1549
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnknownKeyword",
                  "start": 1550,
                  "end": 1557
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1559,
                  "end": 1565
                }
              ],
              "start": 1549,
              "end": 1566
            },
            "arguments": [],
            "start": 1544,
            "end": 1568
          },
          "definite": false,
          "start": 1519,
          "end": 1568
        }
      ],
      "declare": false,
      "start": 1513,
      "end": 1569
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 123,
  "end": 1579
}
```
