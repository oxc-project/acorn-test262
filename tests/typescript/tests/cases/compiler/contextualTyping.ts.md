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
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 36
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              },
              "start": 44,
              "end": 52
            },
            "accessibility": null,
            "static": false,
            "start": 43,
            "end": 53
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 61,
                "end": 67
              },
              "start": 59,
              "end": 67
            },
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 68
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 78,
                    "end": 84
                  },
                  "start": 76,
                  "end": 84
                },
                "start": 75,
                "end": 84
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  },
                  "start": 87,
                  "end": 95
                },
                "start": 86,
                "end": 95
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              },
              "start": 96,
              "end": 104
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 73,
            "end": 105
          },
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
              "start": 110,
              "end": 111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 113,
                  "end": 119
                },
                "start": 113,
                "end": 121
              },
              "start": 111,
              "end": 121
            },
            "accessibility": null,
            "static": false,
            "start": 110,
            "end": 122
          }
        ],
        "start": 37,
        "end": 124
      },
      "declare": false,
      "start": 22,
      "end": 124
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 140
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 150
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 156
                },
                "typeArguments": null,
                "start": 152,
                "end": 156
              },
              "start": 150,
              "end": 156
            },
            "accessibility": null,
            "static": false,
            "start": 147,
            "end": 157
          }
        ],
        "start": 141,
        "end": 159
      },
      "declare": false,
      "start": 126,
      "end": 159
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 210
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 220
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
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 226,
                        "end": 232
                      },
                      "start": 224,
                      "end": 232
                    },
                    "start": 223,
                    "end": 232
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 237,
                        "end": 243
                      },
                      "start": 235,
                      "end": 243
                    },
                    "start": 234,
                    "end": 243
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 248,
                    "end": 254
                  },
                  "start": 245,
                  "end": 254
                },
                "start": 222,
                "end": 254
              },
              "start": 220,
              "end": 254
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 267
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 286,
                      "end": 287
                    },
                    "start": 279,
                    "end": 288
                  }
                ],
                "start": 269,
                "end": 294
              },
              "expression": false,
              "start": 257,
              "end": 294
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 217,
            "end": 294
          }
        ],
        "start": 211,
        "end": 296
      },
      "abstract": false,
      "declare": false,
      "start": 200,
      "end": 296
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 348,
        "end": 352
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
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
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 379,
                                "end": 385
                              },
                              "start": 377,
                              "end": 385
                            },
                            "start": 376,
                            "end": 385
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 390,
                                "end": 396
                              },
                              "start": 388,
                              "end": 396
                            },
                            "start": 387,
                            "end": 396
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 401,
                            "end": 407
                          },
                          "start": 398,
                          "end": 407
                        },
                        "start": 375,
                        "end": 407
                      },
                      "start": 373,
                      "end": 407
                    },
                    "start": 370,
                    "end": 407
                  },
                  "init": {
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
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 419,
                        "end": 420
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 439,
                            "end": 440
                          },
                          "start": 432,
                          "end": 441
                        }
                      ],
                      "start": 422,
                      "end": 447
                    },
                    "expression": false,
                    "start": 410,
                    "end": 447
                  },
                  "definite": false,
                  "start": 370,
                  "end": 447
                }
              ],
              "declare": false,
              "start": 366,
              "end": 447
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 359,
            "end": 447
          }
        ],
        "start": 353,
        "end": 449
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 338,
      "end": 449
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t1",
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 498,
                        "end": 504
                      },
                      "start": 496,
                      "end": 504
                    },
                    "start": 495,
                    "end": 504
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 509,
                    "end": 515
                  },
                  "start": 506,
                  "end": 515
                },
                "start": 494,
                "end": 515
              },
              "start": 492,
              "end": 515
            },
            "start": 488,
            "end": 515
          },
          "init": {
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 529
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 540,
                    "end": 541
                  },
                  "start": 533,
                  "end": 541
                }
              ],
              "start": 531,
              "end": 543
            },
            "expression": false,
            "start": 519,
            "end": 543
          },
          "definite": false,
          "start": 488,
          "end": 544
        }
      ],
      "declare": false,
      "start": 484,
      "end": 545
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 550,
            "end": 554
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 562
              },
              "typeArguments": null,
              "start": 558,
              "end": 562
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 571
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 573,
                    "end": 574
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 570,
                  "end": 574
                }
              ],
              "start": 564,
              "end": 576
            },
            "start": 557,
            "end": 577
          },
          "definite": false,
          "start": 550,
          "end": 577
        }
      ],
      "declare": false,
      "start": 546,
      "end": 577
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 588,
                  "end": 594
                },
                "start": 588,
                "end": 596
              },
              "start": 586,
              "end": 596
            },
            "start": 582,
            "end": 596
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 599,
            "end": 601
          },
          "definite": false,
          "start": 582,
          "end": 601
        }
      ],
      "declare": false,
      "start": 578,
      "end": 602
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 619,
                      "end": 623
                    },
                    "typeArguments": null,
                    "start": 619,
                    "end": 623
                  },
                  "start": 616,
                  "end": 623
                },
                "start": 613,
                "end": 623
              },
              "start": 611,
              "end": 623
            },
            "start": 607,
            "end": 623
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 647,
                        "end": 651
                      },
                      "typeArguments": null,
                      "start": 647,
                      "end": 651
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 653,
                      "end": 655
                    },
                    "start": 646,
                    "end": 656
                  },
                  "start": 639,
                  "end": 656
                }
              ],
              "start": 637,
              "end": 658
            },
            "expression": false,
            "start": 626,
            "end": 658
          },
          "definite": false,
          "start": 607,
          "end": 658
        }
      ],
      "declare": false,
      "start": 603,
      "end": 659
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t5",
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 674,
                        "end": 680
                      },
                      "start": 672,
                      "end": 680
                    },
                    "start": 671,
                    "end": 680
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 685,
                      "end": 689
                    },
                    "typeArguments": null,
                    "start": 685,
                    "end": 689
                  },
                  "start": 682,
                  "end": 689
                },
                "start": 670,
                "end": 689
              },
              "start": 668,
              "end": 689
            },
            "start": 664,
            "end": 689
          },
          "init": {
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
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 702
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 718
                      },
                      "typeArguments": null,
                      "start": 714,
                      "end": 718
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 720,
                      "end": 722
                    },
                    "start": 713,
                    "end": 723
                  },
                  "start": 706,
                  "end": 723
                }
              ],
              "start": 704,
              "end": 725
            },
            "expression": false,
            "start": 692,
            "end": 725
          },
          "definite": false,
          "start": 664,
          "end": 725
        }
      ],
      "declare": false,
      "start": 660,
      "end": 726
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t6",
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 741,
                        "end": 747
                      },
                      "start": 739,
                      "end": 747
                    },
                    "start": 738,
                    "end": 747
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 752,
                        "end": 758
                      },
                      "start": 750,
                      "end": 758
                    },
                    "start": 749,
                    "end": 758
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 763,
                      "end": 767
                    },
                    "typeArguments": null,
                    "start": 763,
                    "end": 767
                  },
                  "start": 760,
                  "end": 767
                },
                "start": 737,
                "end": 767
              },
              "start": 735,
              "end": 767
            },
            "start": 731,
            "end": 767
          },
          "init": {
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
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 780
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 783
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 795,
                        "end": 799
                      },
                      "typeArguments": null,
                      "start": 795,
                      "end": 799
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 801,
                      "end": 803
                    },
                    "start": 794,
                    "end": 804
                  },
                  "start": 787,
                  "end": 804
                }
              ],
              "start": 785,
              "end": 806
            },
            "expression": false,
            "start": 770,
            "end": 806
          },
          "definite": false,
          "start": 731,
          "end": 806
        }
      ],
      "declare": false,
      "start": 727,
      "end": 807
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 828,
                            "end": 834
                          },
                          "start": 826,
                          "end": 834
                        },
                        "start": 825,
                        "end": 834
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 837,
                        "end": 843
                      },
                      "start": 835,
                      "end": 843
                    },
                    "start": 824,
                    "end": 844
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 858,
                            "end": 864
                          },
                          "start": 856,
                          "end": 864
                        },
                        "start": 854,
                        "end": 864
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 867,
                        "end": 873
                      },
                      "start": 865,
                      "end": 873
                    },
                    "start": 853,
                    "end": 874
                  }
                ],
                "start": 818,
                "end": 876
              },
              "start": 816,
              "end": 876
            },
            "start": 812,
            "end": 876
          },
          "init": {
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
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 888,
                "end": 889
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 900,
                    "end": 901
                  },
                  "start": 893,
                  "end": 902
                }
              ],
              "start": 891,
              "end": 904
            },
            "expression": false,
            "start": 879,
            "end": 904
          },
          "definite": false,
          "start": 812,
          "end": 904
        }
      ],
      "declare": false,
      "start": 808,
      "end": 905
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t8",
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 921,
                        "end": 927
                      },
                      "start": 919,
                      "end": 927
                    },
                    "start": 918,
                    "end": 927
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 932,
                        "end": 938
                      },
                      "start": 930,
                      "end": 938
                    },
                    "start": 929,
                    "end": 938
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 943,
                    "end": 949
                  },
                  "start": 940,
                  "end": 949
                },
                "start": 917,
                "end": 949
              },
              "start": 915,
              "end": 949
            },
            "start": 911,
            "end": 949
          },
          "init": {
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
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 961,
                "end": 962
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 974
                  },
                  "start": 966,
                  "end": 975
                }
              ],
              "start": 964,
              "end": 977
            },
            "expression": false,
            "start": 952,
            "end": 977
          },
          "definite": false,
          "start": 911,
          "end": 977
        }
      ],
      "declare": false,
      "start": 907,
      "end": 978
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 989,
                    "end": 995
                  },
                  "start": 989,
                  "end": 997
                },
                "start": 989,
                "end": 999
              },
              "start": 987,
              "end": 999
            },
            "start": 983,
            "end": 999
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1003,
                "end": 1005
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1006,
                "end": 1008
              }
            ],
            "start": 1002,
            "end": 1009
          },
          "definite": false,
          "start": 983,
          "end": 1009
        }
      ],
      "declare": false,
      "start": 979,
      "end": 1010
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1022,
                    "end": 1026
                  },
                  "typeArguments": null,
                  "start": 1022,
                  "end": 1026
                },
                "start": 1022,
                "end": 1028
              },
              "start": 1020,
              "end": 1028
            },
            "start": 1015,
            "end": 1028
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1033,
                    "end": 1037
                  },
                  "typeArguments": null,
                  "start": 1033,
                  "end": 1037
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1039,
                  "end": 1041
                },
                "start": 1032,
                "end": 1042
              },
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1048
                  },
                  "typeArguments": null,
                  "start": 1044,
                  "end": 1048
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1050,
                  "end": 1052
                },
                "start": 1043,
                "end": 1053
              }
            ],
            "start": 1031,
            "end": 1054
          },
          "definite": false,
          "start": 1015,
          "end": 1054
        }
      ],
      "declare": false,
      "start": 1011,
      "end": 1055
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1072,
                              "end": 1078
                            },
                            "start": 1070,
                            "end": 1078
                          },
                          "start": 1069,
                          "end": 1078
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1083,
                              "end": 1089
                            },
                            "start": 1081,
                            "end": 1089
                          },
                          "start": 1080,
                          "end": 1089
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1092,
                          "end": 1098
                        },
                        "start": 1090,
                        "end": 1098
                      },
                      "start": 1068,
                      "end": 1099
                    }
                  ],
                  "start": 1067,
                  "end": 1100
                },
                "start": 1067,
                "end": 1102
              },
              "start": 1065,
              "end": 1102
            },
            "start": 1060,
            "end": 1102
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1115,
                    "end": 1116
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1118,
                    "end": 1119
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1130,
                        "end": 1131
                      },
                      "start": 1123,
                      "end": 1132
                    }
                  ],
                  "start": 1121,
                  "end": 1134
                },
                "expression": false,
                "start": 1106,
                "end": 1134
              }
            ],
            "start": 1105,
            "end": 1135
          },
          "definite": false,
          "start": 1060,
          "end": 1135
        }
      ],
      "declare": false,
      "start": 1056,
      "end": 1136
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1148,
                  "end": 1152
                },
                "typeArguments": null,
                "start": 1148,
                "end": 1152
              },
              "start": 1146,
              "end": 1152
            },
            "start": 1141,
            "end": 1152
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1161,
                  "end": 1164
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1167,
                      "end": 1171
                    },
                    "typeArguments": null,
                    "start": 1167,
                    "end": 1171
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 1173,
                    "end": 1175
                  },
                  "start": 1166,
                  "end": 1176
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1161,
                "end": 1176
              }
            ],
            "start": 1155,
            "end": 1178
          },
          "definite": false,
          "start": 1141,
          "end": 1178
        }
      ],
      "declare": false,
      "start": 1137,
      "end": 1178
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1183,
            "end": 1188
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1192,
                "end": 1196
              },
              "typeArguments": null,
              "start": 1192,
              "end": 1196
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1204,
                    "end": 1205
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
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1216,
                        "end": 1217
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1219,
                        "end": 1220
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1231,
                            "end": 1232
                          },
                          "start": 1224,
                          "end": 1233
                        }
                      ],
                      "start": 1222,
                      "end": 1235
                    },
                    "expression": false,
                    "start": 1207,
                    "end": 1235
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1204,
                  "end": 1235
                }
              ],
              "start": 1198,
              "end": 1237
            },
            "start": 1191,
            "end": 1238
          },
          "definite": false,
          "start": 1183,
          "end": 1238
        }
      ],
      "declare": false,
      "start": 1179,
      "end": 1238
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1243,
            "end": 1248
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1252,
                "end": 1256
              },
              "typeArguments": null,
              "start": 1252,
              "end": 1256
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1264,
                    "end": 1265
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 1267,
                    "end": 1269
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1264,
                  "end": 1269
                }
              ],
              "start": 1258,
              "end": 1271
            },
            "start": 1251,
            "end": 1272
          },
          "definite": false,
          "start": 1243,
          "end": 1272
        }
      ],
      "declare": false,
      "start": 1239,
      "end": 1272
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1318,
        "end": 1322
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1329,
              "end": 1332
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
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1338,
                        "end": 1344
                      },
                      "start": 1336,
                      "end": 1344
                    },
                    "start": 1335,
                    "end": 1344
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1349,
                        "end": 1355
                      },
                      "start": 1347,
                      "end": 1355
                    },
                    "start": 1346,
                    "end": 1355
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1360,
                    "end": 1366
                  },
                  "start": 1357,
                  "end": 1366
                },
                "start": 1334,
                "end": 1366
              },
              "start": 1332,
              "end": 1366
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1329,
            "end": 1367
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1372,
              "end": 1383
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1396,
                          "end": 1400
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1401,
                          "end": 1404
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1396,
                        "end": 1404
                      },
                      "right": {
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
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1416,
                            "end": 1417
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1419,
                            "end": 1420
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1443,
                                "end": 1444
                              },
                              "start": 1436,
                              "end": 1445
                            }
                          ],
                          "start": 1422,
                          "end": 1455
                        },
                        "expression": false,
                        "start": 1407,
                        "end": 1455
                      },
                      "start": 1396,
                      "end": 1455
                    },
                    "directive": null,
                    "start": 1396,
                    "end": 1455
                  }
                ],
                "start": 1386,
                "end": 1461
              },
              "expression": false,
              "start": 1383,
              "end": 1461
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1372,
            "end": 1461
          }
        ],
        "start": 1323,
        "end": 1463
      },
      "abstract": false,
      "declare": false,
      "start": 1312,
      "end": 1463
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1514,
        "end": 1518
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
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
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1545,
                                "end": 1551
                              },
                              "start": 1543,
                              "end": 1551
                            },
                            "start": 1542,
                            "end": 1551
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1556,
                                "end": 1562
                              },
                              "start": 1554,
                              "end": 1562
                            },
                            "start": 1553,
                            "end": 1562
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1567,
                            "end": 1573
                          },
                          "start": 1564,
                          "end": 1573
                        },
                        "start": 1541,
                        "end": 1573
                      },
                      "start": 1539,
                      "end": 1573
                    },
                    "start": 1536,
                    "end": 1573
                  },
                  "init": null,
                  "definite": false,
                  "start": 1536,
                  "end": 1573
                }
              ],
              "declare": false,
              "start": 1532,
              "end": 1574
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1525,
            "end": 1574
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1579,
                "end": 1582
              },
              "right": {
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
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1594,
                    "end": 1595
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1597,
                    "end": 1598
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1617,
                        "end": 1618
                      },
                      "start": 1610,
                      "end": 1619
                    }
                  ],
                  "start": 1600,
                  "end": 1625
                },
                "expression": false,
                "start": 1585,
                "end": 1625
              },
              "start": 1579,
              "end": 1625
            },
            "directive": null,
            "start": 1579,
            "end": 1625
          }
        ],
        "start": 1519,
        "end": 1627
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1504,
      "end": 1627
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c6t5",
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1675,
                        "end": 1681
                      },
                      "start": 1673,
                      "end": 1681
                    },
                    "start": 1672,
                    "end": 1681
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1686,
                      "end": 1690
                    },
                    "typeArguments": null,
                    "start": 1686,
                    "end": 1690
                  },
                  "start": 1683,
                  "end": 1690
                },
                "start": 1671,
                "end": 1690
              },
              "start": 1669,
              "end": 1690
            },
            "start": 1665,
            "end": 1690
          },
          "init": null,
          "definite": false,
          "start": 1665,
          "end": 1690
        }
      ],
      "declare": false,
      "start": 1661,
      "end": 1691
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c6t5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1692,
          "end": 1696
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1704,
                    "end": 1710
                  },
                  "start": 1702,
                  "end": 1710
                },
                "start": 1701,
                "end": 1710
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1715,
                  "end": 1719
                },
                "typeArguments": null,
                "start": 1715,
                "end": 1719
              },
              "start": 1712,
              "end": 1719
            },
            "start": 1700,
            "end": 1719
          },
          "expression": {
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
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1729,
                "end": 1730
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1742,
                        "end": 1746
                      },
                      "typeArguments": null,
                      "start": 1742,
                      "end": 1746
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 1748,
                      "end": 1750
                    },
                    "start": 1741,
                    "end": 1751
                  },
                  "start": 1734,
                  "end": 1751
                }
              ],
              "start": 1732,
              "end": 1753
            },
            "expression": false,
            "start": 1720,
            "end": 1753
          },
          "start": 1699,
          "end": 1753
        },
        "start": 1692,
        "end": 1753
      },
      "directive": null,
      "start": 1692,
      "end": 1754
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c7t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1801,
                    "end": 1805
                  },
                  "typeArguments": null,
                  "start": 1801,
                  "end": 1805
                },
                "start": 1801,
                "end": 1807
              },
              "start": 1799,
              "end": 1807
            },
            "start": 1795,
            "end": 1807
          },
          "init": null,
          "definite": false,
          "start": 1795,
          "end": 1807
        }
      ],
      "declare": false,
      "start": 1791,
      "end": 1808
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c7t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1809,
            "end": 1813
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1814,
            "end": 1815
          },
          "optional": false,
          "computed": true,
          "start": 1809,
          "end": 1816
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1820,
              "end": 1824
            },
            "typeArguments": null,
            "start": 1820,
            "end": 1824
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1827,
                  "end": 1828
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1830,
                  "end": 1831
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1827,
                "end": 1831
              }
            ],
            "start": 1826,
            "end": 1832
          },
          "start": 1819,
          "end": 1833
        },
        "start": 1809,
        "end": 1833
      },
      "directive": null,
      "start": 1809,
      "end": 1834
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPlaceHolder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1885,
        "end": 1897
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
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1904,
              "end": 1906
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1912,
                        "end": 1918
                      },
                      "start": 1910,
                      "end": 1918
                    },
                    "start": 1909,
                    "end": 1918
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1923,
                    "end": 1929
                  },
                  "start": 1920,
                  "end": 1929
                },
                "start": 1908,
                "end": 1929
              },
              "start": 1906,
              "end": 1929
            },
            "accessibility": null,
            "static": false,
            "start": 1904,
            "end": 1930
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1935,
              "end": 1937
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1939,
                  "end": 1943
                },
                "typeArguments": null,
                "start": 1939,
                "end": 1943
              },
              "start": 1937,
              "end": 1943
            },
            "accessibility": null,
            "static": false,
            "start": 1935,
            "end": 1944
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1949,
              "end": 1951
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1953,
                  "end": 1959
                },
                "start": 1953,
                "end": 1961
              },
              "start": 1951,
              "end": 1961
            },
            "accessibility": null,
            "static": false,
            "start": 1949,
            "end": 1962
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1967,
              "end": 1969
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1977,
                      "end": 1981
                    },
                    "typeArguments": null,
                    "start": 1977,
                    "end": 1981
                  },
                  "start": 1974,
                  "end": 1981
                },
                "start": 1971,
                "end": 1981
              },
              "start": 1969,
              "end": 1981
            },
            "accessibility": null,
            "static": false,
            "start": 1967,
            "end": 1982
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1987,
              "end": 1989
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1995,
                        "end": 2001
                      },
                      "start": 1993,
                      "end": 2001
                    },
                    "start": 1992,
                    "end": 2001
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2006,
                      "end": 2010
                    },
                    "typeArguments": null,
                    "start": 2006,
                    "end": 2010
                  },
                  "start": 2003,
                  "end": 2010
                },
                "start": 1991,
                "end": 2010
              },
              "start": 1989,
              "end": 2010
            },
            "accessibility": null,
            "static": false,
            "start": 1987,
            "end": 2011
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2016,
              "end": 2018
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2024,
                        "end": 2030
                      },
                      "start": 2022,
                      "end": 2030
                    },
                    "start": 2021,
                    "end": 2030
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2035,
                        "end": 2041
                      },
                      "start": 2033,
                      "end": 2041
                    },
                    "start": 2032,
                    "end": 2041
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2046,
                      "end": 2050
                    },
                    "typeArguments": null,
                    "start": 2046,
                    "end": 2050
                  },
                  "start": 2043,
                  "end": 2050
                },
                "start": 2020,
                "end": 2050
              },
              "start": 2018,
              "end": 2050
            },
            "accessibility": null,
            "static": false,
            "start": 2016,
            "end": 2051
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null,
              "start": 2056,
              "end": 2058
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2078,
                            "end": 2084
                          },
                          "start": 2076,
                          "end": 2084
                        },
                        "start": 2075,
                        "end": 2084
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2089,
                            "end": 2095
                          },
                          "start": 2087,
                          "end": 2095
                        },
                        "start": 2086,
                        "end": 2095
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2098,
                        "end": 2104
                      },
                      "start": 2096,
                      "end": 2104
                    },
                    "start": 2074,
                    "end": 2105
                  }
                ],
                "start": 2060,
                "end": 2167
              },
              "start": 2058,
              "end": 2167
            },
            "accessibility": null,
            "static": false,
            "start": 2056,
            "end": 2168
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t8",
              "optional": false,
              "typeAnnotation": null,
              "start": 2173,
              "end": 2175
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2181,
                        "end": 2187
                      },
                      "start": 2179,
                      "end": 2187
                    },
                    "start": 2178,
                    "end": 2187
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2192,
                        "end": 2198
                      },
                      "start": 2190,
                      "end": 2198
                    },
                    "start": 2189,
                    "end": 2198
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2203,
                    "end": 2209
                  },
                  "start": 2200,
                  "end": 2209
                },
                "start": 2177,
                "end": 2209
              },
              "start": 2175,
              "end": 2209
            },
            "accessibility": null,
            "static": false,
            "start": 2173,
            "end": 2210
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t9",
              "optional": false,
              "typeAnnotation": null,
              "start": 2215,
              "end": 2217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 2219,
                    "end": 2225
                  },
                  "start": 2219,
                  "end": 2227
                },
                "start": 2219,
                "end": 2229
              },
              "start": 2217,
              "end": 2229
            },
            "accessibility": null,
            "static": false,
            "start": 2215,
            "end": 2230
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t10",
              "optional": false,
              "typeAnnotation": null,
              "start": 2235,
              "end": 2238
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2240,
                    "end": 2244
                  },
                  "typeArguments": null,
                  "start": 2240,
                  "end": 2244
                },
                "start": 2240,
                "end": 2246
              },
              "start": 2238,
              "end": 2246
            },
            "accessibility": null,
            "static": false,
            "start": 2235,
            "end": 2247
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2252,
              "end": 2255
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2262,
                              "end": 2268
                            },
                            "start": 2260,
                            "end": 2268
                          },
                          "start": 2259,
                          "end": 2268
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2273,
                              "end": 2279
                            },
                            "start": 2271,
                            "end": 2279
                          },
                          "start": 2270,
                          "end": 2279
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2282,
                          "end": 2288
                        },
                        "start": 2280,
                        "end": 2288
                      },
                      "start": 2258,
                      "end": 2289
                    }
                  ],
                  "start": 2257,
                  "end": 2290
                },
                "start": 2257,
                "end": 2292
              },
              "start": 2255,
              "end": 2292
            },
            "accessibility": null,
            "static": false,
            "start": 2252,
            "end": 2293
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t12",
              "optional": false,
              "typeAnnotation": null,
              "start": 2298,
              "end": 2301
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2303,
                  "end": 2307
                },
                "typeArguments": null,
                "start": 2303,
                "end": 2307
              },
              "start": 2301,
              "end": 2307
            },
            "accessibility": null,
            "static": false,
            "start": 2298,
            "end": 2308
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t13",
              "optional": false,
              "typeAnnotation": null,
              "start": 2313,
              "end": 2316
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2318,
                  "end": 2322
                },
                "typeArguments": null,
                "start": 2318,
                "end": 2322
              },
              "start": 2316,
              "end": 2322
            },
            "accessibility": null,
            "static": false,
            "start": 2313,
            "end": 2323
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t14",
              "optional": false,
              "typeAnnotation": null,
              "start": 2328,
              "end": 2331
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2333,
                  "end": 2337
                },
                "typeArguments": null,
                "start": 2333,
                "end": 2337
              },
              "start": 2331,
              "end": 2337
            },
            "accessibility": null,
            "static": false,
            "start": 2328,
            "end": 2338
          }
        ],
        "start": 1898,
        "end": 2344
      },
      "declare": false,
      "start": 1875,
      "end": 2344
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
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
                      "name": "t1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2363,
                      "end": 2365
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2371,
                                "end": 2377
                              },
                              "start": 2369,
                              "end": 2377
                            },
                            "start": 2368,
                            "end": 2377
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2382,
                            "end": 2388
                          },
                          "start": 2379,
                          "end": 2388
                        },
                        "start": 2367,
                        "end": 2388
                      },
                      "start": 2365,
                      "end": 2388
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2363,
                    "end": 2389
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2394,
                      "end": 2396
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2398,
                          "end": 2402
                        },
                        "typeArguments": null,
                        "start": 2398,
                        "end": 2402
                      },
                      "start": 2396,
                      "end": 2402
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2394,
                    "end": 2403
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2408,
                      "end": 2410
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 2412,
                          "end": 2418
                        },
                        "start": 2412,
                        "end": 2420
                      },
                      "start": 2410,
                      "end": 2420
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2408,
                    "end": 2421
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2426,
                      "end": 2428
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2436,
                              "end": 2440
                            },
                            "typeArguments": null,
                            "start": 2436,
                            "end": 2440
                          },
                          "start": 2433,
                          "end": 2440
                        },
                        "start": 2430,
                        "end": 2440
                      },
                      "start": 2428,
                      "end": 2440
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2426,
                    "end": 2441
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2446,
                      "end": 2448
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
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2454,
                                "end": 2460
                              },
                              "start": 2452,
                              "end": 2460
                            },
                            "start": 2451,
                            "end": 2460
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2465,
                              "end": 2469
                            },
                            "typeArguments": null,
                            "start": 2465,
                            "end": 2469
                          },
                          "start": 2462,
                          "end": 2469
                        },
                        "start": 2450,
                        "end": 2469
                      },
                      "start": 2448,
                      "end": 2469
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2446,
                    "end": 2470
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2475,
                      "end": 2477
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
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2483,
                                "end": 2489
                              },
                              "start": 2481,
                              "end": 2489
                            },
                            "start": 2480,
                            "end": 2489
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2494,
                                "end": 2500
                              },
                              "start": 2492,
                              "end": 2500
                            },
                            "start": 2491,
                            "end": 2500
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2505,
                              "end": 2509
                            },
                            "typeArguments": null,
                            "start": 2505,
                            "end": 2509
                          },
                          "start": 2502,
                          "end": 2509
                        },
                        "start": 2479,
                        "end": 2509
                      },
                      "start": 2477,
                      "end": 2509
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2475,
                    "end": 2510
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2515,
                      "end": 2517
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2537,
                                    "end": 2543
                                  },
                                  "start": 2535,
                                  "end": 2543
                                },
                                "start": 2534,
                                "end": 2543
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2548,
                                    "end": 2554
                                  },
                                  "start": 2546,
                                  "end": 2554
                                },
                                "start": 2545,
                                "end": 2554
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2557,
                                "end": 2563
                              },
                              "start": 2555,
                              "end": 2563
                            },
                            "start": 2533,
                            "end": 2564
                          }
                        ],
                        "start": 2519,
                        "end": 2626
                      },
                      "start": 2517,
                      "end": 2626
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2515,
                    "end": 2627
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2632,
                      "end": 2634
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
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2640,
                                "end": 2646
                              },
                              "start": 2638,
                              "end": 2646
                            },
                            "start": 2637,
                            "end": 2646
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2651,
                                "end": 2657
                              },
                              "start": 2649,
                              "end": 2657
                            },
                            "start": 2648,
                            "end": 2657
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2662,
                            "end": 2668
                          },
                          "start": 2659,
                          "end": 2668
                        },
                        "start": 2636,
                        "end": 2668
                      },
                      "start": 2634,
                      "end": 2668
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2632,
                    "end": 2669
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t9",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2674,
                      "end": 2676
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 2678,
                            "end": 2684
                          },
                          "start": 2678,
                          "end": 2686
                        },
                        "start": 2678,
                        "end": 2688
                      },
                      "start": 2676,
                      "end": 2688
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2674,
                    "end": 2689
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2694,
                      "end": 2697
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IFoo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2699,
                            "end": 2703
                          },
                          "typeArguments": null,
                          "start": 2699,
                          "end": 2703
                        },
                        "start": 2699,
                        "end": 2705
                      },
                      "start": 2697,
                      "end": 2705
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2694,
                    "end": 2706
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2711,
                      "end": 2714
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSCallSignatureDeclaration",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "n",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 2721,
                                      "end": 2727
                                    },
                                    "start": 2719,
                                    "end": 2727
                                  },
                                  "start": 2718,
                                  "end": 2727
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 2732,
                                      "end": 2738
                                    },
                                    "start": 2730,
                                    "end": 2738
                                  },
                                  "start": 2729,
                                  "end": 2738
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2741,
                                  "end": 2747
                                },
                                "start": 2739,
                                "end": 2747
                              },
                              "start": 2717,
                              "end": 2748
                            }
                          ],
                          "start": 2716,
                          "end": 2749
                        },
                        "start": 2716,
                        "end": 2751
                      },
                      "start": 2714,
                      "end": 2751
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2711,
                    "end": 2752
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2757,
                      "end": 2760
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IBar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2762,
                          "end": 2766
                        },
                        "typeArguments": null,
                        "start": 2762,
                        "end": 2766
                      },
                      "start": 2760,
                      "end": 2766
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2757,
                    "end": 2767
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t13",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2772,
                      "end": 2775
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2777,
                          "end": 2781
                        },
                        "typeArguments": null,
                        "start": 2777,
                        "end": 2781
                      },
                      "start": 2775,
                      "end": 2781
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2772,
                    "end": 2782
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t14",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2787,
                      "end": 2790
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2792,
                          "end": 2796
                        },
                        "typeArguments": null,
                        "start": 2792,
                        "end": 2796
                      },
                      "start": 2790,
                      "end": 2796
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2787,
                    "end": 2797
                  }
                ],
                "start": 2357,
                "end": 2799
              },
              "start": 2355,
              "end": 2799
            },
            "start": 2350,
            "end": 2799
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IPlaceHolder",
                "optional": false,
                "typeAnnotation": null,
                "start": 2803,
                "end": 2815
              },
              "typeArguments": null,
              "start": 2803,
              "end": 2815
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 2817,
              "end": 2819
            },
            "start": 2802,
            "end": 2820
          },
          "definite": false,
          "start": 2350,
          "end": 2820
        }
      ],
      "declare": false,
      "start": 2346,
      "end": 2821
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2823,
            "end": 2828
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2829,
            "end": 2831
          },
          "optional": false,
          "computed": false,
          "start": 2823,
          "end": 2831
        },
        "right": {
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
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 2844,
              "end": 2845
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2856,
                  "end": 2857
                },
                "start": 2849,
                "end": 2857
              }
            ],
            "start": 2847,
            "end": 2859
          },
          "expression": false,
          "start": 2835,
          "end": 2859
        },
        "start": 2823,
        "end": 2860
      },
      "directive": null,
      "start": 2823,
      "end": 2861
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2862,
            "end": 2867
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2868,
            "end": 2870
          },
          "optional": false,
          "computed": false,
          "start": 2862,
          "end": 2870
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2874,
              "end": 2878
            },
            "typeArguments": null,
            "start": 2874,
            "end": 2878
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2886,
                  "end": 2887
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2889,
                  "end": 2890
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2886,
                "end": 2890
              }
            ],
            "start": 2880,
            "end": 2892
          },
          "start": 2873,
          "end": 2893
        },
        "start": 2862,
        "end": 2893
      },
      "directive": null,
      "start": 2862,
      "end": 2894
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2895,
            "end": 2900
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2901,
            "end": 2903
          },
          "optional": false,
          "computed": false,
          "start": 2895,
          "end": 2903
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 2906,
          "end": 2908
        },
        "start": 2895,
        "end": 2908
      },
      "directive": null,
      "start": 2895,
      "end": 2909
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2910,
            "end": 2915
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2916,
            "end": 2918
          },
          "optional": false,
          "computed": false,
          "start": 2910,
          "end": 2918
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2942,
                      "end": 2946
                    },
                    "typeArguments": null,
                    "start": 2942,
                    "end": 2946
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 2948,
                    "end": 2950
                  },
                  "start": 2941,
                  "end": 2951
                },
                "start": 2934,
                "end": 2951
              }
            ],
            "start": 2932,
            "end": 2953
          },
          "expression": false,
          "start": 2921,
          "end": 2953
        },
        "start": 2910,
        "end": 2953
      },
      "directive": null,
      "start": 2910,
      "end": 2954
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2955,
            "end": 2960
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2961,
            "end": 2963
          },
          "optional": false,
          "computed": false,
          "start": 2955,
          "end": 2963
        },
        "right": {
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2975,
              "end": 2976
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2988,
                      "end": 2992
                    },
                    "typeArguments": null,
                    "start": 2988,
                    "end": 2992
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 2994,
                    "end": 2996
                  },
                  "start": 2987,
                  "end": 2997
                },
                "start": 2980,
                "end": 2997
              }
            ],
            "start": 2978,
            "end": 2999
          },
          "expression": false,
          "start": 2966,
          "end": 2999
        },
        "start": 2955,
        "end": 2999
      },
      "directive": null,
      "start": 2955,
      "end": 3000
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3001,
            "end": 3006
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": null,
            "start": 3007,
            "end": 3009
          },
          "optional": false,
          "computed": false,
          "start": 3001,
          "end": 3009
        },
        "right": {
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3021,
              "end": 3022
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 3024,
              "end": 3025
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3037,
                      "end": 3041
                    },
                    "typeArguments": null,
                    "start": 3037,
                    "end": 3041
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3043,
                    "end": 3045
                  },
                  "start": 3036,
                  "end": 3046
                },
                "start": 3029,
                "end": 3046
              }
            ],
            "start": 3027,
            "end": 3048
          },
          "expression": false,
          "start": 3012,
          "end": 3048
        },
        "start": 3001,
        "end": 3048
      },
      "directive": null,
      "start": 3001,
      "end": 3049
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3050,
            "end": 3055
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 3056,
            "end": 3058
          },
          "optional": false,
          "computed": false,
          "start": 3050,
          "end": 3058
        },
        "right": {
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
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3073,
                  "end": 3079
                },
                "start": 3071,
                "end": 3079
              },
              "start": 3070,
              "end": 3079
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3090,
                  "end": 3091
                },
                "start": 3083,
                "end": 3091
              }
            ],
            "start": 3081,
            "end": 3093
          },
          "expression": false,
          "start": 3061,
          "end": 3093
        },
        "start": 3050,
        "end": 3093
      },
      "directive": null,
      "start": 3050,
      "end": 3094
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3096,
            "end": 3101
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3102,
            "end": 3104
          },
          "optional": false,
          "computed": false,
          "start": 3096,
          "end": 3104
        },
        "right": {
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3116,
              "end": 3117
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3128,
                  "end": 3129
                },
                "start": 3121,
                "end": 3130
              }
            ],
            "start": 3119,
            "end": 3132
          },
          "expression": false,
          "start": 3107,
          "end": 3132
        },
        "start": 3096,
        "end": 3132
      },
      "directive": null,
      "start": 3096,
      "end": 3133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3134,
            "end": 3139
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 3140,
            "end": 3142
          },
          "optional": false,
          "computed": false,
          "start": 3134,
          "end": 3142
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ArrayExpression",
              "elements": [],
              "start": 3146,
              "end": 3148
            },
            {
              "type": "ArrayExpression",
              "elements": [],
              "start": 3149,
              "end": 3151
            }
          ],
          "start": 3145,
          "end": 3152
        },
        "start": 3134,
        "end": 3152
      },
      "directive": null,
      "start": 3134,
      "end": 3153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3154,
            "end": 3159
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t10",
            "optional": false,
            "typeAnnotation": null,
            "start": 3160,
            "end": 3163
          },
          "optional": false,
          "computed": false,
          "start": 3154,
          "end": 3163
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3168,
                  "end": 3172
                },
                "typeArguments": null,
                "start": 3168,
                "end": 3172
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 3174,
                "end": 3176
              },
              "start": 3167,
              "end": 3177
            },
            {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3179,
                  "end": 3183
                },
                "typeArguments": null,
                "start": 3179,
                "end": 3183
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 3185,
                "end": 3187
              },
              "start": 3178,
              "end": 3188
            }
          ],
          "start": 3166,
          "end": 3189
        },
        "start": 3154,
        "end": 3189
      },
      "directive": null,
      "start": 3154,
      "end": 3190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3191,
            "end": 3196
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t11",
            "optional": false,
            "typeAnnotation": null,
            "start": 3197,
            "end": 3200
          },
          "optional": false,
          "computed": false,
          "start": 3191,
          "end": 3200
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3213,
                  "end": 3214
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3216,
                  "end": 3217
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3228,
                      "end": 3229
                    },
                    "start": 3221,
                    "end": 3230
                  }
                ],
                "start": 3219,
                "end": 3232
              },
              "expression": false,
              "start": 3204,
              "end": 3232
            }
          ],
          "start": 3203,
          "end": 3233
        },
        "start": 3191,
        "end": 3233
      },
      "directive": null,
      "start": 3191,
      "end": 3234
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3235,
            "end": 3240
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t12",
            "optional": false,
            "typeAnnotation": null,
            "start": 3241,
            "end": 3244
          },
          "optional": false,
          "computed": false,
          "start": 3235,
          "end": 3244
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3253,
                "end": 3256
              },
              "value": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3259,
                    "end": 3263
                  },
                  "typeArguments": null,
                  "start": 3259,
                  "end": 3263
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 3265,
                  "end": 3267
                },
                "start": 3258,
                "end": 3268
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3253,
              "end": 3268
            }
          ],
          "start": 3247,
          "end": 3270
        },
        "start": 3235,
        "end": 3270
      },
      "directive": null,
      "start": 3235,
      "end": 3270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3271,
            "end": 3276
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t13",
            "optional": false,
            "typeAnnotation": null,
            "start": 3277,
            "end": 3280
          },
          "optional": false,
          "computed": false,
          "start": 3271,
          "end": 3280
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3284,
              "end": 3288
            },
            "typeArguments": null,
            "start": 3284,
            "end": 3288
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3296,
                  "end": 3297
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
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3308,
                      "end": 3309
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3311,
                      "end": 3312
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3323,
                          "end": 3324
                        },
                        "start": 3316,
                        "end": 3325
                      }
                    ],
                    "start": 3314,
                    "end": 3327
                  },
                  "expression": false,
                  "start": 3299,
                  "end": 3327
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3296,
                "end": 3327
              }
            ],
            "start": 3290,
            "end": 3329
          },
          "start": 3283,
          "end": 3330
        },
        "start": 3271,
        "end": 3330
      },
      "directive": null,
      "start": 3271,
      "end": 3330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3331,
            "end": 3336
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t14",
            "optional": false,
            "typeAnnotation": null,
            "start": 3337,
            "end": 3340
          },
          "optional": false,
          "computed": false,
          "start": 3331,
          "end": 3340
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3344,
              "end": 3348
            },
            "typeArguments": null,
            "start": 3344,
            "end": 3348
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3356,
                  "end": 3357
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 3359,
                  "end": 3361
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3356,
                "end": 3361
              }
            ],
            "start": 3350,
            "end": 3363
          },
          "start": 3343,
          "end": 3364
        },
        "start": 3331,
        "end": 3364
      },
      "directive": null,
      "start": 3331,
      "end": 3364
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c9t5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3400,
        "end": 3404
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3412,
                      "end": 3418
                    },
                    "start": 3410,
                    "end": 3418
                  },
                  "start": 3409,
                  "end": 3418
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3423,
                    "end": 3427
                  },
                  "typeArguments": null,
                  "start": 3423,
                  "end": 3427
                },
                "start": 3420,
                "end": 3427
              },
              "start": 3408,
              "end": 3427
            },
            "start": 3406,
            "end": 3427
          },
          "start": 3405,
          "end": 3427
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3429,
        "end": 3431
      },
      "expression": false,
      "start": 3391,
      "end": 3431
    },
    {
      "type": "EmptyStatement",
      "start": 3431,
      "end": 3432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c9t5",
          "optional": false,
          "typeAnnotation": null,
          "start": 3433,
          "end": 3437
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3447,
                "end": 3448
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3464,
                        "end": 3468
                      },
                      "typeArguments": null,
                      "start": 3464,
                      "end": 3468
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 3470,
                      "end": 3472
                    },
                    "start": 3463,
                    "end": 3473
                  },
                  "start": 3456,
                  "end": 3474
                }
              ],
              "start": 3450,
              "end": 3476
            },
            "expression": false,
            "start": 3438,
            "end": 3476
          }
        ],
        "optional": false,
        "start": 3433,
        "end": 3477
      },
      "directive": null,
      "start": 3433,
      "end": 3478
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c10t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3530,
                            "end": 3536
                          },
                          "start": 3528,
                          "end": 3536
                        },
                        "start": 3527,
                        "end": 3536
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3541,
                          "end": 3545
                        },
                        "typeArguments": null,
                        "start": 3541,
                        "end": 3545
                      },
                      "start": 3538,
                      "end": 3545
                    },
                    "start": 3526,
                    "end": 3545
                  },
                  "start": 3523,
                  "end": 3545
                },
                "start": 3520,
                "end": 3545
              },
              "start": 3518,
              "end": 3545
            },
            "start": 3513,
            "end": 3545
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3577,
                        "end": 3578
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IFoo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3590,
                                "end": 3594
                              },
                              "typeArguments": null,
                              "start": 3590,
                              "end": 3594
                            },
                            "expression": {
                              "type": "ObjectExpression",
                              "properties": [],
                              "start": 3596,
                              "end": 3598
                            },
                            "start": 3589,
                            "end": 3599
                          },
                          "start": 3582,
                          "end": 3599
                        }
                      ],
                      "start": 3580,
                      "end": 3601
                    },
                    "expression": false,
                    "start": 3568,
                    "end": 3601
                  },
                  "start": 3561,
                  "end": 3601
                }
              ],
              "start": 3559,
              "end": 3603
            },
            "expression": false,
            "start": 3548,
            "end": 3603
          },
          "definite": false,
          "start": 3513,
          "end": 3603
        }
      ],
      "declare": false,
      "start": 3509,
      "end": 3604
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C11t5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3639,
        "end": 3644
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3647,
              "end": 3658
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
                  "name": "f",
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
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3666,
                              "end": 3672
                            },
                            "start": 3664,
                            "end": 3672
                          },
                          "start": 3663,
                          "end": 3672
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IFoo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3677,
                            "end": 3681
                          },
                          "typeArguments": null,
                          "start": 3677,
                          "end": 3681
                        },
                        "start": 3674,
                        "end": 3681
                      },
                      "start": 3662,
                      "end": 3681
                    },
                    "start": 3660,
                    "end": 3681
                  },
                  "start": 3659,
                  "end": 3681
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3683,
                "end": 3686
              },
              "expression": false,
              "start": 3658,
              "end": 3686
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3647,
            "end": 3686
          }
        ],
        "start": 3645,
        "end": 3688
      },
      "abstract": false,
      "declare": false,
      "start": 3633,
      "end": 3688
    },
    {
      "type": "EmptyStatement",
      "start": 3688,
      "end": 3689
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 3694,
            "end": 3695
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C11t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3702,
              "end": 3707
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3717,
                    "end": 3718
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IFoo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3730,
                            "end": 3734
                          },
                          "typeArguments": null,
                          "start": 3730,
                          "end": 3734
                        },
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 3736,
                          "end": 3738
                        },
                        "start": 3729,
                        "end": 3739
                      },
                      "start": 3722,
                      "end": 3739
                    }
                  ],
                  "start": 3720,
                  "end": 3741
                },
                "expression": false,
                "start": 3708,
                "end": 3741
              }
            ],
            "start": 3698,
            "end": 3742
          },
          "definite": false,
          "start": 3694,
          "end": 3742
        }
      ],
      "declare": false,
      "start": 3690,
      "end": 3743
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3787,
            "end": 3792
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3800,
                      "end": 3806
                    },
                    "start": 3798,
                    "end": 3806
                  },
                  "start": 3797,
                  "end": 3806
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3811,
                  "end": 3817
                },
                "start": 3808,
                "end": 3817
              },
              "start": 3796,
              "end": 3817
            },
            "expression": {
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3829,
                  "end": 3830
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3841,
                      "end": 3842
                    },
                    "start": 3834,
                    "end": 3842
                  }
                ],
                "start": 3832,
                "end": 3844
              },
              "expression": false,
              "start": 3820,
              "end": 3844
            },
            "start": 3795,
            "end": 3845
          },
          "definite": false,
          "start": 3787,
          "end": 3845
        }
      ],
      "declare": false,
      "start": 3783,
      "end": 3846
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3851,
            "end": 3856
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3860,
                "end": 3864
              },
              "typeArguments": null,
              "start": 3860,
              "end": 3864
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3873,
                    "end": 3874
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3876,
                    "end": 3877
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3873,
                  "end": 3877
                }
              ],
              "start": 3867,
              "end": 3879
            },
            "start": 3859,
            "end": 3880
          },
          "definite": false,
          "start": 3851,
          "end": 3880
        }
      ],
      "declare": false,
      "start": 3847,
      "end": 3881
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3886,
            "end": 3891
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 3895,
                "end": 3901
              },
              "start": 3895,
              "end": 3903
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 3905,
              "end": 3907
            },
            "start": 3894,
            "end": 3907
          },
          "definite": false,
          "start": 3886,
          "end": 3907
        }
      ],
      "declare": false,
      "start": 3882,
      "end": 3908
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3913,
            "end": 3918
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3928,
                    "end": 3932
                  },
                  "typeArguments": null,
                  "start": 3928,
                  "end": 3932
                },
                "start": 3925,
                "end": 3932
              },
              "start": 3922,
              "end": 3932
            },
            "expression": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3955,
                          "end": 3959
                        },
                        "typeArguments": null,
                        "start": 3955,
                        "end": 3959
                      },
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 3961,
                        "end": 3963
                      },
                      "start": 3954,
                      "end": 3964
                    },
                    "start": 3947,
                    "end": 3964
                  }
                ],
                "start": 3945,
                "end": 3966
              },
              "expression": false,
              "start": 3934,
              "end": 3966
            },
            "start": 3921,
            "end": 3966
          },
          "definite": false,
          "start": 3913,
          "end": 3966
        }
      ],
      "declare": false,
      "start": 3909,
      "end": 3967
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 3972,
            "end": 3977
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3985,
                      "end": 3991
                    },
                    "start": 3983,
                    "end": 3991
                  },
                  "start": 3982,
                  "end": 3991
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3996,
                    "end": 4000
                  },
                  "typeArguments": null,
                  "start": 3996,
                  "end": 4000
                },
                "start": 3993,
                "end": 4000
              },
              "start": 3981,
              "end": 4000
            },
            "expression": {
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4011,
                  "end": 4012
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4024,
                          "end": 4028
                        },
                        "typeArguments": null,
                        "start": 4024,
                        "end": 4028
                      },
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 4030,
                        "end": 4032
                      },
                      "start": 4023,
                      "end": 4033
                    },
                    "start": 4016,
                    "end": 4033
                  }
                ],
                "start": 4014,
                "end": 4035
              },
              "expression": false,
              "start": 4002,
              "end": 4035
            },
            "start": 3980,
            "end": 4035
          },
          "definite": false,
          "start": 3972,
          "end": 4035
        }
      ],
      "declare": false,
      "start": 3968,
      "end": 4036
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t6",
            "optional": false,
            "typeAnnotation": null,
            "start": 4041,
            "end": 4046
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4054,
                      "end": 4060
                    },
                    "start": 4052,
                    "end": 4060
                  },
                  "start": 4051,
                  "end": 4060
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4065,
                      "end": 4071
                    },
                    "start": 4063,
                    "end": 4071
                  },
                  "start": 4062,
                  "end": 4071
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4076,
                    "end": 4080
                  },
                  "typeArguments": null,
                  "start": 4076,
                  "end": 4080
                },
                "start": 4073,
                "end": 4080
              },
              "start": 4050,
              "end": 4080
            },
            "expression": {
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4091,
                  "end": 4092
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4094,
                  "end": 4095
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4107,
                          "end": 4111
                        },
                        "typeArguments": null,
                        "start": 4107,
                        "end": 4111
                      },
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 4113,
                        "end": 4115
                      },
                      "start": 4106,
                      "end": 4116
                    },
                    "start": 4099,
                    "end": 4116
                  }
                ],
                "start": 4097,
                "end": 4118
              },
              "expression": false,
              "start": 4082,
              "end": 4118
            },
            "start": 4049,
            "end": 4118
          },
          "definite": false,
          "start": 4041,
          "end": 4118
        }
      ],
      "declare": false,
      "start": 4037,
      "end": 4119
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 4124,
            "end": 4129
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4143,
                          "end": 4149
                        },
                        "start": 4141,
                        "end": 4149
                      },
                      "start": 4140,
                      "end": 4149
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4154,
                          "end": 4160
                        },
                        "start": 4152,
                        "end": 4160
                      },
                      "start": 4151,
                      "end": 4160
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4163,
                      "end": 4169
                    },
                    "start": 4161,
                    "end": 4169
                  },
                  "start": 4139,
                  "end": 4170
                }
              ],
              "start": 4133,
              "end": 4216
            },
            "expression": {
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4229,
                      "end": 4235
                    },
                    "start": 4228,
                    "end": 4235
                  },
                  "start": 4227,
                  "end": 4235
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4246,
                      "end": 4247
                    },
                    "start": 4239,
                    "end": 4247
                  }
                ],
                "start": 4237,
                "end": 4249
              },
              "expression": false,
              "start": 4218,
              "end": 4249
            },
            "start": 4132,
            "end": 4249
          },
          "definite": false,
          "start": 4124,
          "end": 4249
        }
      ],
      "declare": false,
      "start": 4120,
      "end": 4250
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t8",
            "optional": false,
            "typeAnnotation": null,
            "start": 4256,
            "end": 4261
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4269,
                      "end": 4275
                    },
                    "start": 4267,
                    "end": 4275
                  },
                  "start": 4266,
                  "end": 4275
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4280,
                      "end": 4286
                    },
                    "start": 4278,
                    "end": 4286
                  },
                  "start": 4277,
                  "end": 4286
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4291,
                  "end": 4297
                },
                "start": 4288,
                "end": 4297
              },
              "start": 4265,
              "end": 4297
            },
            "expression": {
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4308,
                  "end": 4309
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4320,
                      "end": 4321
                    },
                    "start": 4313,
                    "end": 4322
                  }
                ],
                "start": 4311,
                "end": 4324
              },
              "expression": false,
              "start": 4299,
              "end": 4324
            },
            "start": 4264,
            "end": 4324
          },
          "definite": false,
          "start": 4256,
          "end": 4324
        }
      ],
      "declare": false,
      "start": 4252,
      "end": 4325
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 4330,
            "end": 4335
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 4339,
                  "end": 4345
                },
                "start": 4339,
                "end": 4347
              },
              "start": 4339,
              "end": 4349
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 4352,
                  "end": 4354
                },
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 4355,
                  "end": 4357
                }
              ],
              "start": 4351,
              "end": 4358
            },
            "start": 4338,
            "end": 4358
          },
          "definite": false,
          "start": 4330,
          "end": 4358
        }
      ],
      "declare": false,
      "start": 4326,
      "end": 4359
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t10",
            "optional": false,
            "typeAnnotation": null,
            "start": 4364,
            "end": 4370
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4374,
                  "end": 4378
                },
                "typeArguments": null,
                "start": 4374,
                "end": 4378
              },
              "start": 4374,
              "end": 4380
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4384,
                      "end": 4388
                    },
                    "typeArguments": null,
                    "start": 4384,
                    "end": 4388
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 4390,
                    "end": 4392
                  },
                  "start": 4383,
                  "end": 4393
                },
                {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4395,
                      "end": 4399
                    },
                    "typeArguments": null,
                    "start": 4395,
                    "end": 4399
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 4401,
                    "end": 4403
                  },
                  "start": 4394,
                  "end": 4404
                }
              ],
              "start": 4382,
              "end": 4405
            },
            "start": 4373,
            "end": 4405
          },
          "definite": false,
          "start": 4364,
          "end": 4405
        }
      ],
      "declare": false,
      "start": 4360,
      "end": 4406
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t11",
            "optional": false,
            "typeAnnotation": null,
            "start": 4411,
            "end": 4417
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 4426,
                            "end": 4432
                          },
                          "start": 4424,
                          "end": 4432
                        },
                        "start": 4423,
                        "end": 4432
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4437,
                            "end": 4443
                          },
                          "start": 4435,
                          "end": 4443
                        },
                        "start": 4434,
                        "end": 4443
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4446,
                        "end": 4452
                      },
                      "start": 4444,
                      "end": 4452
                    },
                    "start": 4422,
                    "end": 4453
                  }
                ],
                "start": 4421,
                "end": 4454
              },
              "start": 4421,
              "end": 4456
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4468,
                      "end": 4469
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4471,
                      "end": 4472
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4483,
                          "end": 4484
                        },
                        "start": 4476,
                        "end": 4485
                      }
                    ],
                    "start": 4474,
                    "end": 4487
                  },
                  "expression": false,
                  "start": 4459,
                  "end": 4487
                }
              ],
              "start": 4458,
              "end": 4488
            },
            "start": 4420,
            "end": 4488
          },
          "definite": false,
          "start": 4411,
          "end": 4488
        }
      ],
      "declare": false,
      "start": 4407,
      "end": 4489
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t12",
            "optional": false,
            "typeAnnotation": null,
            "start": 4494,
            "end": 4500
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 4504,
                "end": 4508
              },
              "typeArguments": null,
              "start": 4504,
              "end": 4508
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4516,
                    "end": 4519
                  },
                  "value": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4522,
                        "end": 4526
                      },
                      "typeArguments": null,
                      "start": 4522,
                      "end": 4526
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 4528,
                      "end": 4530
                    },
                    "start": 4521,
                    "end": 4531
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4516,
                  "end": 4531
                }
              ],
              "start": 4510,
              "end": 4533
            },
            "start": 4503,
            "end": 4533
          },
          "definite": false,
          "start": 4494,
          "end": 4533
        }
      ],
      "declare": false,
      "start": 4490,
      "end": 4533
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t13",
            "optional": false,
            "typeAnnotation": null,
            "start": 4538,
            "end": 4544
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4548,
                "end": 4552
              },
              "typeArguments": null,
              "start": 4548,
              "end": 4552
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4561,
                    "end": 4562
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
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4573,
                        "end": 4574
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4576,
                        "end": 4577
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4588,
                            "end": 4589
                          },
                          "start": 4581,
                          "end": 4590
                        }
                      ],
                      "start": 4579,
                      "end": 4592
                    },
                    "expression": false,
                    "start": 4564,
                    "end": 4592
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4561,
                  "end": 4592
                }
              ],
              "start": 4555,
              "end": 4594
            },
            "start": 4547,
            "end": 4595
          },
          "definite": false,
          "start": 4538,
          "end": 4595
        }
      ],
      "declare": false,
      "start": 4534,
      "end": 4595
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t14",
            "optional": false,
            "typeAnnotation": null,
            "start": 4600,
            "end": 4606
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4610,
                "end": 4614
              },
              "typeArguments": null,
              "start": 4610,
              "end": 4614
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4623,
                    "end": 4624
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 4626,
                    "end": 4628
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4623,
                  "end": 4628
                }
              ],
              "start": 4617,
              "end": 4630
            },
            "start": 4609,
            "end": 4631
          },
          "definite": false,
          "start": 4600,
          "end": 4631
        }
      ],
      "declare": false,
      "start": 4596,
      "end": 4631
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EF1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4739,
        "end": 4742
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 4745,
              "end": 4751
            },
            "start": 4744,
            "end": 4751
          },
          "start": 4743,
          "end": 4751
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4755,
              "end": 4761
            },
            "start": 4754,
            "end": 4761
          },
          "start": 4753,
          "end": 4761
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 4763,
          "end": 4769
        },
        "start": 4762,
        "end": 4769
      },
      "body": null,
      "expression": false,
      "start": 4722,
      "end": 4770
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EF1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4781,
        "end": 4784
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
          "typeAnnotation": null,
          "start": 4785,
          "end": 4786
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 4787,
          "end": 4788
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 4799,
                "end": 4800
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 4801,
                "end": 4802
              },
              "start": 4799,
              "end": 4802
            },
            "start": 4792,
            "end": 4803
          }
        ],
        "start": 4790,
        "end": 4805
      },
      "expression": false,
      "start": 4772,
      "end": 4805
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "efv",
            "optional": false,
            "typeAnnotation": null,
            "start": 4811,
            "end": 4814
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "EF1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4817,
              "end": 4820
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4821,
                "end": 4822
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 4823,
                "end": 4824
              }
            ],
            "optional": false,
            "start": 4817,
            "end": 4825
          },
          "definite": false,
          "start": 4811,
          "end": 4825
        }
      ],
      "declare": false,
      "start": 4807,
      "end": 4826
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 4898,
        "end": 4903
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 4912,
              "end": 4923
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 4927,
                      "end": 4933
                    },
                    "start": 4925,
                    "end": 4933
                  },
                  "start": 4924,
                  "end": 4933
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4938,
                      "end": 4944
                    },
                    "start": 4936,
                    "end": 4944
                  },
                  "start": 4935,
                  "end": 4944
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 4923,
              "end": 4946
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4912,
            "end": 4946
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4953,
              "end": 4954
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4956,
                "end": 4962
              },
              "start": 4954,
              "end": 4962
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4953,
            "end": 4963
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4970,
              "end": 4971
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4973,
                "end": 4979
              },
              "start": 4971,
              "end": 4979
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4970,
            "end": 4980
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 4987,
              "end": 4990
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4995,
                      "end": 5001
                    },
                    "start": 4993,
                    "end": 5001
                  },
                  "start": 4991,
                  "end": 5001
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dy",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5007,
                      "end": 5013
                    },
                    "start": 5005,
                    "end": 5013
                  },
                  "start": 5003,
                  "end": 5013
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5016,
                    "end": 5021
                  },
                  "typeArguments": null,
                  "start": 5016,
                  "end": 5021
                },
                "start": 5014,
                "end": 5021
              },
              "body": null,
              "expression": false,
              "start": 4990,
              "end": 5022
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4987,
            "end": 5022
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 5036,
              "end": 5042
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5044,
                  "end": 5049
                },
                "typeArguments": null,
                "start": 5044,
                "end": 5049
              },
              "start": 5042,
              "end": 5049
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5029,
            "end": 5050
          }
        ],
        "start": 4904,
        "end": 5053
      },
      "abstract": false,
      "declare": true,
      "start": 4884,
      "end": 5053
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 5055,
            "end": 5060
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "origin",
            "optional": false,
            "typeAnnotation": null,
            "start": 5061,
            "end": 5067
          },
          "optional": false,
          "computed": false,
          "start": 5055,
          "end": 5067
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 5074,
            "end": 5079
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 5080,
              "end": 5081
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 5083,
              "end": 5084
            }
          ],
          "start": 5070,
          "end": 5085
        },
        "start": 5055,
        "end": 5085
      },
      "directive": null,
      "start": 5055,
      "end": 5086
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 5088,
              "end": 5093
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 5094,
              "end": 5103
            },
            "optional": false,
            "computed": false,
            "start": 5088,
            "end": 5103
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 5104,
            "end": 5107
          },
          "optional": false,
          "computed": false,
          "start": 5088,
          "end": 5107
        },
        "right": {
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
              "name": "dx",
              "optional": false,
              "typeAnnotation": null,
              "start": 5119,
              "end": 5121
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "dy",
              "optional": false,
              "typeAnnotation": null,
              "start": 5123,
              "end": 5125
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5144,
                    "end": 5149
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 5150,
                          "end": 5154
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5155,
                          "end": 5156
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5150,
                        "end": 5156
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dx",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5159,
                        "end": 5161
                      },
                      "start": 5150,
                      "end": 5161
                    },
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 5163,
                          "end": 5167
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5168,
                          "end": 5169
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5163,
                        "end": 5169
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5172,
                        "end": 5174
                      },
                      "start": 5163,
                      "end": 5174
                    }
                  ],
                  "start": 5140,
                  "end": 5175
                },
                "start": 5133,
                "end": 5176
              }
            ],
            "start": 5127,
            "end": 5178
          },
          "expression": false,
          "start": 5110,
          "end": 5178
        },
        "start": 5088,
        "end": 5178
      },
      "directive": null,
      "start": 5088,
      "end": 5179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 5181,
            "end": 5186
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 5187,
            "end": 5196
          },
          "optional": false,
          "computed": false,
          "start": 5181,
          "end": 5196
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5205,
                "end": 5206
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 5208,
                "end": 5209
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 5205,
              "end": 5209
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 5215,
                "end": 5216
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 5218,
                "end": 5219
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 5215,
              "end": 5219
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null,
                "start": 5225,
                "end": 5228
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
                    "name": "dx",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5239,
                    "end": 5241
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5243,
                    "end": 5245
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5268,
                          "end": 5273
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 5274,
                                "end": 5278
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5279,
                                "end": 5280
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5274,
                              "end": 5280
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dx",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5283,
                              "end": 5285
                            },
                            "start": 5274,
                            "end": 5285
                          },
                          {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 5287,
                                "end": 5291
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5292,
                                "end": 5293
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5287,
                              "end": 5293
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dy",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5296,
                              "end": 5298
                            },
                            "start": 5287,
                            "end": 5298
                          }
                        ],
                        "start": 5264,
                        "end": 5299
                      },
                      "start": 5257,
                      "end": 5300
                    }
                  ],
                  "start": 5247,
                  "end": 5306
                },
                "expression": false,
                "start": 5230,
                "end": 5306
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 5225,
              "end": 5306
            }
          ],
          "start": 5199,
          "end": 5308
        },
        "start": 5181,
        "end": 5308
      },
      "directive": null,
      "start": 5181,
      "end": 5309
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5321,
        "end": 5322
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 5325,
              "end": 5326
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5328,
                "end": 5334
              },
              "start": 5326,
              "end": 5334
            },
            "accessibility": null,
            "static": false,
            "start": 5325,
            "end": 5335
          }
        ],
        "start": 5323,
        "end": 5337
      },
      "declare": false,
      "start": 5311,
      "end": 5337
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 5348,
        "end": 5349
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
            "start": 5358,
            "end": 5359
          },
          "typeArguments": null,
          "start": 5358,
          "end": 5359
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 5360,
        "end": 5363
      },
      "declare": false,
      "start": 5338,
      "end": 5363
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5371,
                  "end": 5372
                },
                "typeArguments": null,
                "start": 5371,
                "end": 5372
              },
              "start": 5369,
              "end": 5372
            },
            "start": 5368,
            "end": 5372
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 5375,
            "end": 5378
          },
          "definite": false,
          "start": 5368,
          "end": 5378
        }
      ],
      "declare": false,
      "start": 5364,
      "end": 5379
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 5379
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 126,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "IBar",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 200,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "C1T5",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 245,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 257,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 279,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 338,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "C2T5",
    "start": 348,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 359,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 370,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 379,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 390,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 398,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 410,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 432,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "c3t1",
    "start": 488,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 506,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 509,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 519,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 533,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 546,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "c3t2",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 558,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 578,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "c3t3",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 588,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 603,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "c3t4",
    "start": 607,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 616,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 626,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 639,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 647,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 660,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "c3t5",
    "start": 664,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 674,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 682,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 685,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 692,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 706,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 714,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 727,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "c3t6",
    "start": 731,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 741,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 752,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 760,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 770,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 787,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 808,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "c3t7",
    "start": 812,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 828,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 837,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 854,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 858,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 867,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 879,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 893,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 907,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "c3t8",
    "start": 911,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 921,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 932,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 940,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 943,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 950,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 952,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 966,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 979,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "c3t9",
    "start": 983,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 989,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "c3t10",
    "start": 1015,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1022,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1033,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1044,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1056,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "c3t11",
    "start": 1060,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1072,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1092,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1106,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1123,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1137,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "c3t12",
    "start": 1141,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "IBar",
    "start": 1148,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1167,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1179,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "c3t13",
    "start": 1183,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1192,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1207,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1224,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1239,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "c3t14",
    "start": 1243,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1252,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1312,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "C4T5",
    "start": 1318,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1338,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1349,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1357,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1360,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1372,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1396,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1401,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1407,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1436,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1504,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "C5T5",
    "start": 1514,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1525,
    "end": 1531
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1532,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1536,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1545,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1556,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1564,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1567,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1579,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1585,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1610,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1661,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "c6t5",
    "start": 1665,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1675,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1683,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1686,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "c6t5",
    "start": 1692,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1704,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1712,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1715,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1720,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1734,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1742,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1791,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "c7t2",
    "start": 1795,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1801,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "c7t2",
    "start": 1809,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1820,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1875,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "IPlaceHolder",
    "start": 1885,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1904,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1912,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1920,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1923,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1935,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1939,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1949,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1953,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1967,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1974,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1977,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 1987,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1995,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2003,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2006,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 2016,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2024,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2035,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2043,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2046,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 2056,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2078,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2089,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2098,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 2173,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2181,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2192,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2200,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2203,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 2215,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2219,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 2235,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2240,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "t11",
    "start": 2252,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2262,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2273,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2282,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 2298,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "IBar",
    "start": 2303,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "t13",
    "start": 2313,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2318,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "t14",
    "start": 2328,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2333,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2346,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 2350,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2363,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2371,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2379,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2382,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2394,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2398,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 2408,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2412,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 2426,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2433,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2436,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 2446,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2454,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2462,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2465,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 2475,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2483,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2494,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2502,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2505,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 2515,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2537,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2548,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2557,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 2632,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2640,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2651,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2659,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2662,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 2674,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2678,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 2694,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2699,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Identifier",
    "value": "t11",
    "start": 2711,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2721,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2732,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2741,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 2757,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "IBar",
    "start": 2762,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "t13",
    "start": 2772,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2777,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Identifier",
    "value": "t14",
    "start": 2787,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2792,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "IPlaceHolder",
    "start": 2803,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 2823,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2829,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2835,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2849,
    "end": 2855
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 2862,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2868,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2874,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 2895,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 2901,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 2910,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 2916,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2921,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2934,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2942,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 2955,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 2961,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2966,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2980,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2988,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3001,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 3007,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3012,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3029,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3037,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3050,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 3056,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3061,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3073,
    "end": 3079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3083,
    "end": 3089
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3096,
    "end": 3101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 3102,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3107,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3115,
    "end": 3116
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3121,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3134,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 3140,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3154,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 3160,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3168,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3179,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3191,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Identifier",
    "value": "t11",
    "start": 3197,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3204,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3221,
    "end": 3227
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3235,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 3241,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3253,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3259,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3271,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Identifier",
    "value": "t13",
    "start": 3277,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3284,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3299,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3316,
    "end": 3322
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3331,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Identifier",
    "value": "t14",
    "start": 3337,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3344,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3360,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3391,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "c9t5",
    "start": 3400,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3410,
    "end": 3411
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3412,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3420,
    "end": 3422
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3423,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Identifier",
    "value": "c9t5",
    "start": 3433,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3438,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3456,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3464,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3509,
    "end": 3512
  },
  {
    "type": "Identifier",
    "value": "c10t5",
    "start": 3513,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3523,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3530,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3538,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3541,
    "end": 3545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3548,
    "end": 3556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3561,
    "end": 3567
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3568,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3582,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3590,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3633,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "C11t5",
    "start": 3639,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3647,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3666,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3674,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3677,
    "end": 3681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3690,
    "end": 3693
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3694,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3696,
    "end": 3697
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3698,
    "end": 3701
  },
  {
    "type": "Identifier",
    "value": "C11t5",
    "start": 3702,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3708,
    "end": 3716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3716,
    "end": 3717
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3720,
    "end": 3721
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3722,
    "end": 3728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3729,
    "end": 3730
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3730,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3741,
    "end": 3742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3783,
    "end": 3786
  },
  {
    "type": "Identifier",
    "value": "c12t1",
    "start": 3787,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3798,
    "end": 3799
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3800,
    "end": 3806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3806,
    "end": 3807
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3808,
    "end": 3810
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3811,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3819,
    "end": 3820
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3820,
    "end": 3828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3830,
    "end": 3831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3832,
    "end": 3833
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3834,
    "end": 3840
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3847,
    "end": 3850
  },
  {
    "type": "Identifier",
    "value": "c12t2",
    "start": 3851,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3857,
    "end": 3858
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3860,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3866,
    "end": 3867
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3867,
    "end": 3868
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3878,
    "end": 3879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3879,
    "end": 3880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3880,
    "end": 3881
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3882,
    "end": 3885
  },
  {
    "type": "Identifier",
    "value": "c12t3",
    "start": 3886,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3892,
    "end": 3893
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3895,
    "end": 3901
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3902,
    "end": 3903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3906,
    "end": 3907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3907,
    "end": 3908
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3909,
    "end": 3912
  },
  {
    "type": "Identifier",
    "value": "c12t4",
    "start": 3913,
    "end": 3918
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3919,
    "end": 3920
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3925,
    "end": 3927
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3928,
    "end": 3932
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3932,
    "end": 3933
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3934,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3947,
    "end": 3953
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3955,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3961,
    "end": 3962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3962,
    "end": 3963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3963,
    "end": 3964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3966,
    "end": 3967
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3968,
    "end": 3971
  },
  {
    "type": "Identifier",
    "value": "c12t5",
    "start": 3972,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3985,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3993,
    "end": 3995
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3996,
    "end": 4000
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4000,
    "end": 4001
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4002,
    "end": 4010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4012,
    "end": 4013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4016,
    "end": 4022
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4024,
    "end": 4028
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4037,
    "end": 4040
  },
  {
    "type": "Identifier",
    "value": "c12t6",
    "start": 4041,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4054,
    "end": 4060
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4065,
    "end": 4071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4073,
    "end": 4075
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4076,
    "end": 4080
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4080,
    "end": 4081
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4082,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4092,
    "end": 4093
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4094,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4097,
    "end": 4098
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4099,
    "end": 4105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4106,
    "end": 4107
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4107,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4120,
    "end": 4123
  },
  {
    "type": "Identifier",
    "value": "c12t7",
    "start": 4124,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4130,
    "end": 4131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4132,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4143,
    "end": 4149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4149,
    "end": 4150
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4151,
    "end": 4152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4154,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4163,
    "end": 4169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4215,
    "end": 4216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4218,
    "end": 4226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4226,
    "end": 4227
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4227,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4229,
    "end": 4235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4235,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4237,
    "end": 4238
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4239,
    "end": 4245
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4249,
    "end": 4250
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4252,
    "end": 4255
  },
  {
    "type": "Identifier",
    "value": "c12t8",
    "start": 4256,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4264,
    "end": 4265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4265,
    "end": 4266
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4266,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4267,
    "end": 4268
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4269,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4278,
    "end": 4279
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4280,
    "end": 4286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4286,
    "end": 4287
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4288,
    "end": 4290
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4291,
    "end": 4297
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4299,
    "end": 4307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4308,
    "end": 4309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4309,
    "end": 4310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4311,
    "end": 4312
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4313,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4320,
    "end": 4321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4321,
    "end": 4322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4323,
    "end": 4324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4326,
    "end": 4329
  },
  {
    "type": "Identifier",
    "value": "c12t9",
    "start": 4330,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4339,
    "end": 4345
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4345,
    "end": 4346
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4346,
    "end": 4347
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4347,
    "end": 4348
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4348,
    "end": 4349
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4349,
    "end": 4350
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4351,
    "end": 4352
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4352,
    "end": 4353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4354,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4356,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4358,
    "end": 4359
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4360,
    "end": 4363
  },
  {
    "type": "Identifier",
    "value": "c12t10",
    "start": 4364,
    "end": 4370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4373,
    "end": 4374
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4374,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4382,
    "end": 4383
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4383,
    "end": 4384
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4384,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4389,
    "end": 4390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4394,
    "end": 4395
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4395,
    "end": 4399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4400,
    "end": 4401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4405,
    "end": 4406
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4407,
    "end": 4410
  },
  {
    "type": "Identifier",
    "value": "c12t11",
    "start": 4411,
    "end": 4417
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4418,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4422,
    "end": 4423
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4423,
    "end": 4424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4424,
    "end": 4425
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4426,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4437,
    "end": 4443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4443,
    "end": 4444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4444,
    "end": 4445
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4446,
    "end": 4452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4452,
    "end": 4453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4453,
    "end": 4454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4454,
    "end": 4455
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4455,
    "end": 4456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4456,
    "end": 4457
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4458,
    "end": 4459
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4459,
    "end": 4467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4467,
    "end": 4468
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4471,
    "end": 4472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4472,
    "end": 4473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4476,
    "end": 4482
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4483,
    "end": 4484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4486,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4488,
    "end": 4489
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4490,
    "end": 4493
  },
  {
    "type": "Identifier",
    "value": "c12t12",
    "start": 4494,
    "end": 4500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4501,
    "end": 4502
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4503,
    "end": 4504
  },
  {
    "type": "Identifier",
    "value": "IBar",
    "start": 4504,
    "end": 4508
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4508,
    "end": 4509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4510,
    "end": 4511
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4516,
    "end": 4519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4522,
    "end": 4526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4527,
    "end": 4528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4529,
    "end": 4530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4530,
    "end": 4531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4532,
    "end": 4533
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4534,
    "end": 4537
  },
  {
    "type": "Identifier",
    "value": "c12t13",
    "start": 4538,
    "end": 4544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4545,
    "end": 4546
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4547,
    "end": 4548
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4548,
    "end": 4552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4554,
    "end": 4555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4561,
    "end": 4562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4562,
    "end": 4563
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4564,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4573,
    "end": 4574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4574,
    "end": 4575
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4576,
    "end": 4577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4577,
    "end": 4578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4579,
    "end": 4580
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4581,
    "end": 4587
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4588,
    "end": 4589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4589,
    "end": 4590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4591,
    "end": 4592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4593,
    "end": 4594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4594,
    "end": 4595
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4596,
    "end": 4599
  },
  {
    "type": "Identifier",
    "value": "c12t14",
    "start": 4600,
    "end": 4606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4609,
    "end": 4610
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4610,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4616,
    "end": 4617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4617,
    "end": 4618
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4623,
    "end": 4624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4626,
    "end": 4627
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4627,
    "end": 4628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4629,
    "end": 4630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4630,
    "end": 4631
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4722,
    "end": 4729
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4730,
    "end": 4738
  },
  {
    "type": "Identifier",
    "value": "EF1",
    "start": 4739,
    "end": 4742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4742,
    "end": 4743
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4743,
    "end": 4744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4744,
    "end": 4745
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4745,
    "end": 4751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4751,
    "end": 4752
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4753,
    "end": 4754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4755,
    "end": 4761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4761,
    "end": 4762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4762,
    "end": 4763
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4763,
    "end": 4769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4769,
    "end": 4770
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4772,
    "end": 4780
  },
  {
    "type": "Identifier",
    "value": "EF1",
    "start": 4781,
    "end": 4784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4784,
    "end": 4785
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4785,
    "end": 4786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4786,
    "end": 4787
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4787,
    "end": 4788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4788,
    "end": 4789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4790,
    "end": 4791
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4792,
    "end": 4798
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4799,
    "end": 4800
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4801,
    "end": 4802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4802,
    "end": 4803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4804,
    "end": 4805
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4807,
    "end": 4810
  },
  {
    "type": "Identifier",
    "value": "efv",
    "start": 4811,
    "end": 4814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4815,
    "end": 4816
  },
  {
    "type": "Identifier",
    "value": "EF1",
    "start": 4817,
    "end": 4820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4820,
    "end": 4821
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4822,
    "end": 4823
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4823,
    "end": 4824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4824,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4825,
    "end": 4826
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4884,
    "end": 4891
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4892,
    "end": 4897
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 4898,
    "end": 4903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4912,
    "end": 4923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4923,
    "end": 4924
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4924,
    "end": 4925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4925,
    "end": 4926
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4927,
    "end": 4933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4933,
    "end": 4934
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4935,
    "end": 4936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4936,
    "end": 4937
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4938,
    "end": 4944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4944,
    "end": 4945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4945,
    "end": 4946
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4953,
    "end": 4954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4954,
    "end": 4955
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4956,
    "end": 4962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4962,
    "end": 4963
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4970,
    "end": 4971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4971,
    "end": 4972
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4973,
    "end": 4979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4979,
    "end": 4980
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 4987,
    "end": 4990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 4991,
    "end": 4993
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4993,
    "end": 4994
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4995,
    "end": 5001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5001,
    "end": 5002
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 5003,
    "end": 5005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5005,
    "end": 5006
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5007,
    "end": 5013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5013,
    "end": 5014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5014,
    "end": 5015
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5016,
    "end": 5021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5021,
    "end": 5022
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5029,
    "end": 5035
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 5036,
    "end": 5042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5042,
    "end": 5043
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5044,
    "end": 5049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5049,
    "end": 5050
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5052,
    "end": 5053
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5055,
    "end": 5060
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5060,
    "end": 5061
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 5061,
    "end": 5067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5068,
    "end": 5069
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5070,
    "end": 5073
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5074,
    "end": 5079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5079,
    "end": 5080
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5080,
    "end": 5081
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5081,
    "end": 5082
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5083,
    "end": 5084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5084,
    "end": 5085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5085,
    "end": 5086
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5088,
    "end": 5093
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5093,
    "end": 5094
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 5094,
    "end": 5103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5103,
    "end": 5104
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 5104,
    "end": 5107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5108,
    "end": 5109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5110,
    "end": 5118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5118,
    "end": 5119
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 5119,
    "end": 5121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5121,
    "end": 5122
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 5123,
    "end": 5125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5125,
    "end": 5126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5127,
    "end": 5128
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5133,
    "end": 5139
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5140,
    "end": 5143
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5144,
    "end": 5149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5149,
    "end": 5150
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5150,
    "end": 5154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5154,
    "end": 5155
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5155,
    "end": 5156
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5157,
    "end": 5158
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 5159,
    "end": 5161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5161,
    "end": 5162
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5163,
    "end": 5167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5167,
    "end": 5168
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5168,
    "end": 5169
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5170,
    "end": 5171
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 5172,
    "end": 5174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5174,
    "end": 5175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5175,
    "end": 5176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5177,
    "end": 5178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5178,
    "end": 5179
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5181,
    "end": 5186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5186,
    "end": 5187
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 5187,
    "end": 5196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5197,
    "end": 5198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5199,
    "end": 5200
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5205,
    "end": 5206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5206,
    "end": 5207
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5208,
    "end": 5209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5209,
    "end": 5210
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5215,
    "end": 5216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5216,
    "end": 5217
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5218,
    "end": 5219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5219,
    "end": 5220
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 5225,
    "end": 5228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5228,
    "end": 5229
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5230,
    "end": 5238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5238,
    "end": 5239
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 5239,
    "end": 5241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5241,
    "end": 5242
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 5243,
    "end": 5245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5245,
    "end": 5246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5247,
    "end": 5248
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5257,
    "end": 5263
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5264,
    "end": 5267
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5268,
    "end": 5273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5273,
    "end": 5274
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5274,
    "end": 5278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5278,
    "end": 5279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5279,
    "end": 5280
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5281,
    "end": 5282
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 5283,
    "end": 5285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5285,
    "end": 5286
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5287,
    "end": 5291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5291,
    "end": 5292
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5294,
    "end": 5295
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 5296,
    "end": 5298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5298,
    "end": 5299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5299,
    "end": 5300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5305,
    "end": 5306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5307,
    "end": 5308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5308,
    "end": 5309
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5311,
    "end": 5320
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5321,
    "end": 5322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5323,
    "end": 5324
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5325,
    "end": 5326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5326,
    "end": 5327
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5328,
    "end": 5334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5334,
    "end": 5335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5336,
    "end": 5337
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5338,
    "end": 5347
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5348,
    "end": 5349
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5350,
    "end": 5357
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5358,
    "end": 5359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5360,
    "end": 5361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5362,
    "end": 5363
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5364,
    "end": 5367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5368,
    "end": 5369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5369,
    "end": 5370
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5373,
    "end": 5374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5375,
    "end": 5376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5377,
    "end": 5378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5378,
    "end": 5379
  }
]
```
