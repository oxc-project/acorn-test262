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
