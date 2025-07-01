__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 17
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "iface",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 43
            },
            "declare": false,
            "start": 24,
            "end": 43
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 58
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
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 75
                },
                "typeArguments": null,
                "start": 70,
                "end": 75
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 76,
              "end": 79
            },
            "abstract": false,
            "declare": false,
            "start": 48,
            "end": 79
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 95
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
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 112
                },
                "typeArguments": null,
                "start": 107,
                "end": 112
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 113,
              "end": 116
            },
            "abstract": false,
            "declare": false,
            "start": 84,
            "end": 116
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 134
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 147
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 148,
              "end": 151
            },
            "abstract": false,
            "declare": false,
            "start": 121,
            "end": 151
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
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
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 192
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
                            "type": "TSBooleanKeyword",
                            "start": 196,
                            "end": 203
                          },
                          "start": 194,
                          "end": 203
                        },
                        "start": 193,
                        "end": 203
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 209,
                            "end": 216
                          },
                          "start": 207,
                          "end": 216
                        },
                        "start": 205,
                        "end": 216
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 219,
                        "end": 225
                      },
                      "start": 217,
                      "end": 225
                    },
                    "body": null,
                    "expression": false,
                    "start": 192,
                    "end": 226
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 176,
                  "end": 226
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 251
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
                            "type": "TSStringKeyword",
                            "start": 255,
                            "end": 261
                          },
                          "start": 253,
                          "end": 261
                        },
                        "start": 252,
                        "end": 261
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 267,
                            "end": 274
                          },
                          "start": 265,
                          "end": 274
                        },
                        "start": 263,
                        "end": 274
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 277,
                        "end": 283
                      },
                      "start": 275,
                      "end": 283
                    },
                    "body": null,
                    "expression": false,
                    "start": 251,
                    "end": 284
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 235,
                  "end": 284
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 309
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
                            "start": 313,
                            "end": 319
                          },
                          "start": 311,
                          "end": 319
                        },
                        "start": 310,
                        "end": 319
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 325,
                            "end": 332
                          },
                          "start": 323,
                          "end": 332
                        },
                        "start": 321,
                        "end": 332
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 335,
                        "end": 341
                      },
                      "start": 333,
                      "end": 341
                    },
                    "body": null,
                    "expression": false,
                    "start": 309,
                    "end": 342
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 293,
                  "end": 342
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 367
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 371,
                            "end": 374
                          },
                          "start": 369,
                          "end": 374
                        },
                        "start": 368,
                        "end": 374
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 376,
                          "end": 377
                        },
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 380,
                          "end": 385
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 376,
                        "end": 385
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 388,
                        "end": 391
                      },
                      "start": 386,
                      "end": 391
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 401,
                            "end": 405
                          },
                          "start": 394,
                          "end": 406
                        }
                      ],
                      "start": 392,
                      "end": 408
                    },
                    "expression": false,
                    "start": 367,
                    "end": 408
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 351,
                  "end": 408
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 426
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
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 444,
                              "end": 450
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 452,
                                  "end": 456
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 457,
                                  "end": 466
                                },
                                "optional": false,
                                "computed": false,
                                "start": 452,
                                "end": 466
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 468,
                                        "end": 469
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 471,
                                        "end": 472
                                      }
                                    ],
                                    "start": 467,
                                    "end": 473
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 474,
                                    "end": 475
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 467,
                                  "end": 476
                                }
                              ],
                              "optional": false,
                              "start": 452,
                              "end": 477
                            },
                            "start": 443,
                            "end": 478
                          },
                          "directive": null,
                          "start": 443,
                          "end": 479
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 493,
                              "end": 499
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 501,
                                  "end": 505
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 506,
                                  "end": 515
                                },
                                "optional": false,
                                "computed": false,
                                "start": 501,
                                "end": 515
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 517,
                                        "end": 518
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 520,
                                        "end": 521
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 523,
                                        "end": 532
                                      }
                                    ],
                                    "start": 516,
                                    "end": 533
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 534,
                                    "end": 535
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 516,
                                  "end": 536
                                }
                              ],
                              "optional": false,
                              "start": 501,
                              "end": 537
                            },
                            "start": 492,
                            "end": 538
                          },
                          "directive": null,
                          "start": 492,
                          "end": 539
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 553,
                              "end": 559
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 561,
                                  "end": 565
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 566,
                                  "end": 575
                                },
                                "optional": false,
                                "computed": false,
                                "start": 561,
                                "end": 575
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 577,
                                        "end": 586
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 588,
                                        "end": 589
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 591,
                                        "end": 592
                                      }
                                    ],
                                    "start": 576,
                                    "end": 593
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 594,
                                    "end": 595
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 576,
                                  "end": 596
                                }
                              ],
                              "optional": false,
                              "start": 561,
                              "end": 597
                            },
                            "start": 552,
                            "end": 598
                          },
                          "directive": null,
                          "start": 552,
                          "end": 599
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 613,
                              "end": 619
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 621,
                                  "end": 625
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 626,
                                  "end": 635
                                },
                                "optional": false,
                                "computed": false,
                                "start": 621,
                                "end": 635
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 637,
                                        "end": 641
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 643,
                                        "end": 644
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 646,
                                        "end": 647
                                      }
                                    ],
                                    "start": 636,
                                    "end": 648
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 649,
                                    "end": 650
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 636,
                                  "end": 651
                                }
                              ],
                              "optional": false,
                              "start": 621,
                              "end": 652
                            },
                            "start": 612,
                            "end": 653
                          },
                          "directive": null,
                          "start": 612,
                          "end": 654
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 668,
                              "end": 674
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 676,
                                  "end": 680
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 681,
                                  "end": 690
                                },
                                "optional": false,
                                "computed": false,
                                "start": 676,
                                "end": 690
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 692,
                                        "end": 693
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 695,
                                        "end": 696
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 698,
                                        "end": 702
                                      }
                                    ],
                                    "start": 691,
                                    "end": 703
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 704,
                                    "end": 705
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 691,
                                  "end": 706
                                }
                              ],
                              "optional": false,
                              "start": 676,
                              "end": 707
                            },
                            "start": 667,
                            "end": 708
                          },
                          "directive": null,
                          "start": 667,
                          "end": 709
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 723,
                              "end": 729
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 731,
                                  "end": 735
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 736,
                                  "end": 745
                                },
                                "optional": false,
                                "computed": false,
                                "start": 731,
                                "end": 745
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 747,
                                        "end": 756
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 758,
                                        "end": 759
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 761,
                                        "end": 765
                                      }
                                    ],
                                    "start": 746,
                                    "end": 766
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 767,
                                    "end": 768
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 746,
                                  "end": 769
                                }
                              ],
                              "optional": false,
                              "start": 731,
                              "end": 770
                            },
                            "start": 722,
                            "end": 771
                          },
                          "directive": null,
                          "start": 722,
                          "end": 772
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 787,
                              "end": 793
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 795,
                                  "end": 799
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 800,
                                  "end": 809
                                },
                                "optional": false,
                                "computed": false,
                                "start": 795,
                                "end": 809
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 811,
                                        "end": 813
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 815,
                                        "end": 818
                                      }
                                    ],
                                    "start": 810,
                                    "end": 819
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 820,
                                    "end": 821
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 810,
                                  "end": 822
                                }
                              ],
                              "optional": false,
                              "start": 795,
                              "end": 823
                            },
                            "start": 786,
                            "end": 824
                          },
                          "directive": null,
                          "start": 786,
                          "end": 825
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 839,
                              "end": 845
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 847,
                                  "end": 851
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 852,
                                  "end": 861
                                },
                                "optional": false,
                                "computed": false,
                                "start": 847,
                                "end": 861
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 863,
                                        "end": 865
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 867,
                                        "end": 870
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 872,
                                        "end": 881
                                      }
                                    ],
                                    "start": 862,
                                    "end": 882
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 883,
                                    "end": 884
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 862,
                                  "end": 885
                                }
                              ],
                              "optional": false,
                              "start": 847,
                              "end": 886
                            },
                            "start": 838,
                            "end": 887
                          },
                          "directive": null,
                          "start": 838,
                          "end": 888
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 902,
                              "end": 908
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 910,
                                  "end": 914
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 915,
                                  "end": 924
                                },
                                "optional": false,
                                "computed": false,
                                "start": 910,
                                "end": 924
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 926,
                                        "end": 935
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 937,
                                        "end": 940
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 942,
                                        "end": 944
                                      }
                                    ],
                                    "start": 925,
                                    "end": 945
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 946,
                                    "end": 947
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 925,
                                  "end": 948
                                }
                              ],
                              "optional": false,
                              "start": 910,
                              "end": 949
                            },
                            "start": 901,
                            "end": 950
                          },
                          "directive": null,
                          "start": 901,
                          "end": 951
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 965,
                              "end": 971
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 973,
                                  "end": 977
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 978,
                                  "end": 987
                                },
                                "optional": false,
                                "computed": false,
                                "start": 973,
                                "end": 987
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 989,
                                        "end": 993
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 995,
                                        "end": 998
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 1000,
                                        "end": 1002
                                      }
                                    ],
                                    "start": 988,
                                    "end": 1003
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1004,
                                    "end": 1005
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 988,
                                  "end": 1006
                                }
                              ],
                              "optional": false,
                              "start": 973,
                              "end": 1007
                            },
                            "start": 964,
                            "end": 1008
                          },
                          "directive": null,
                          "start": 964,
                          "end": 1009
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1023,
                              "end": 1029
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1031,
                                  "end": 1035
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1036,
                                  "end": 1045
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1031,
                                "end": 1045
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 1047,
                                        "end": 1050
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 1052,
                                        "end": 1054
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 1056,
                                        "end": 1060
                                      }
                                    ],
                                    "start": 1046,
                                    "end": 1061
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1062,
                                    "end": 1063
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1046,
                                  "end": 1064
                                }
                              ],
                              "optional": false,
                              "start": 1031,
                              "end": 1065
                            },
                            "start": 1022,
                            "end": 1066
                          },
                          "directive": null,
                          "start": 1022,
                          "end": 1067
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1081,
                              "end": 1087
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1089,
                                  "end": 1093
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1094,
                                  "end": 1103
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1089,
                                "end": 1103
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1105,
                                        "end": 1114
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 1116,
                                        "end": 1118
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 1120,
                                        "end": 1124
                                      }
                                    ],
                                    "start": 1104,
                                    "end": 1125
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1126,
                                    "end": 1127
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1104,
                                  "end": 1128
                                }
                              ],
                              "optional": false,
                              "start": 1089,
                              "end": 1129
                            },
                            "start": 1080,
                            "end": 1130
                          },
                          "directive": null,
                          "start": 1080,
                          "end": 1131
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1146,
                              "end": 1152
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1154,
                                  "end": 1158
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1159,
                                  "end": 1168
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1154,
                                "end": 1168
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": 3,
                                              "raw": "3",
                                              "start": 1171,
                                              "end": 1172
                                            },
                                            {
                                              "type": "Literal",
                                              "value": 4,
                                              "raw": "4",
                                              "start": 1174,
                                              "end": 1175
                                            }
                                          ],
                                          "start": 1170,
                                          "end": 1176
                                        },
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null",
                                              "start": 1179,
                                              "end": 1183
                                            }
                                          ],
                                          "start": 1178,
                                          "end": 1184
                                        }
                                      ],
                                      "start": 1169,
                                      "end": 1185
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 1186,
                                      "end": 1187
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 1169,
                                    "end": 1188
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1189,
                                    "end": 1190
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1169,
                                  "end": 1191
                                }
                              ],
                              "optional": false,
                              "start": 1154,
                              "end": 1192
                            },
                            "start": 1145,
                            "end": 1193
                          },
                          "directive": null,
                          "start": 1145,
                          "end": 1194
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
                                "name": "t1",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "start": 1219,
                                            "end": 1220
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 1222,
                                              "end": 1228
                                            },
                                            "start": 1220,
                                            "end": 1228
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1219,
                                          "end": 1229
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
                                            "start": 1230,
                                            "end": 1231
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1233,
                                                "end": 1237
                                              },
                                              "typeArguments": null,
                                              "start": 1233,
                                              "end": 1237
                                            },
                                            "start": 1231,
                                            "end": 1237
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1230,
                                          "end": 1238
                                        }
                                      ],
                                      "start": 1217,
                                      "end": 1240
                                    },
                                    "start": 1217,
                                    "end": 1242
                                  },
                                  "start": 1215,
                                  "end": 1242
                                },
                                "start": 1213,
                                "end": 1242
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                          "start": 1248,
                                          "end": 1249
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 7,
                                          "raw": "7",
                                          "start": 1251,
                                          "end": 1252
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1248,
                                        "end": 1252
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
                                          "start": 1254,
                                          "end": 1255
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1261,
                                            "end": 1268
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1257,
                                          "end": 1270
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1254,
                                        "end": 1270
                                      }
                                    ],
                                    "start": 1246,
                                    "end": 1272
                                  },
                                  {
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
                                          "start": 1276,
                                          "end": 1277
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 5,
                                          "raw": "5",
                                          "start": 1279,
                                          "end": 1280
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1276,
                                        "end": 1280
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
                                          "start": 1282,
                                          "end": 1283
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1289,
                                            "end": 1293
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1285,
                                          "end": 1295
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1282,
                                        "end": 1295
                                      }
                                    ],
                                    "start": 1274,
                                    "end": 1297
                                  }
                                ],
                                "start": 1245,
                                "end": 1298
                              },
                              "definite": false,
                              "start": 1213,
                              "end": 1298
                            }
                          ],
                          "declare": false,
                          "start": 1209,
                          "end": 1299
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
                                "name": "t2",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "start": 1322,
                                            "end": 1323
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSBooleanKeyword",
                                              "start": 1325,
                                              "end": 1332
                                            },
                                            "start": 1323,
                                            "end": 1332
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1322,
                                          "end": 1333
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
                                            "start": 1334,
                                            "end": 1335
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1337,
                                                "end": 1341
                                              },
                                              "typeArguments": null,
                                              "start": 1337,
                                              "end": 1341
                                            },
                                            "start": 1335,
                                            "end": 1341
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1334,
                                          "end": 1342
                                        }
                                      ],
                                      "start": 1320,
                                      "end": 1344
                                    },
                                    "start": 1320,
                                    "end": 1346
                                  },
                                  "start": 1318,
                                  "end": 1346
                                },
                                "start": 1316,
                                "end": 1346
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                          "start": 1352,
                                          "end": 1353
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": true,
                                          "raw": "true",
                                          "start": 1355,
                                          "end": 1359
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1352,
                                        "end": 1359
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
                                          "start": 1361,
                                          "end": 1362
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1368,
                                            "end": 1375
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1364,
                                          "end": 1377
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1361,
                                        "end": 1377
                                      }
                                    ],
                                    "start": 1350,
                                    "end": 1379
                                  },
                                  {
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
                                          "start": 1383,
                                          "end": 1384
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": false,
                                          "raw": "false",
                                          "start": 1386,
                                          "end": 1391
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1383,
                                        "end": 1391
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
                                          "start": 1393,
                                          "end": 1394
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1400,
                                            "end": 1404
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1396,
                                          "end": 1406
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1393,
                                        "end": 1406
                                      }
                                    ],
                                    "start": 1381,
                                    "end": 1408
                                  }
                                ],
                                "start": 1349,
                                "end": 1409
                              },
                              "definite": false,
                              "start": 1316,
                              "end": 1409
                            }
                          ],
                          "declare": false,
                          "start": 1312,
                          "end": 1410
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
                                "name": "t3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "start": 1433,
                                            "end": 1434
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 1436,
                                              "end": 1442
                                            },
                                            "start": 1434,
                                            "end": 1442
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1433,
                                          "end": 1443
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
                                            "start": 1444,
                                            "end": 1445
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1447,
                                                "end": 1451
                                              },
                                              "typeArguments": null,
                                              "start": 1447,
                                              "end": 1451
                                            },
                                            "start": 1445,
                                            "end": 1451
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1444,
                                          "end": 1452
                                        }
                                      ],
                                      "start": 1431,
                                      "end": 1454
                                    },
                                    "start": 1431,
                                    "end": 1456
                                  },
                                  "start": 1429,
                                  "end": 1456
                                },
                                "start": 1427,
                                "end": 1456
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                          "start": 1462,
                                          "end": 1463
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1465,
                                          "end": 1474
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1462,
                                        "end": 1474
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
                                          "start": 1476,
                                          "end": 1477
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1483,
                                            "end": 1487
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1479,
                                          "end": 1489
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1476,
                                        "end": 1489
                                      }
                                    ],
                                    "start": 1460,
                                    "end": 1491
                                  },
                                  {
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
                                          "start": 1495,
                                          "end": 1496
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "",
                                          "raw": "''",
                                          "start": 1498,
                                          "end": 1500
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1495,
                                        "end": 1500
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
                                          "start": 1502,
                                          "end": 1503
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1509,
                                            "end": 1516
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1505,
                                          "end": 1518
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1502,
                                        "end": 1518
                                      }
                                    ],
                                    "start": 1493,
                                    "end": 1520
                                  }
                                ],
                                "start": 1459,
                                "end": 1521
                              },
                              "definite": false,
                              "start": 1427,
                              "end": 1521
                            }
                          ],
                          "declare": false,
                          "start": 1423,
                          "end": 1522
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
                                "name": "anyObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1548,
                                    "end": 1551
                                  },
                                  "start": 1546,
                                  "end": 1551
                                },
                                "start": 1540,
                                "end": 1551
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1554,
                                "end": 1558
                              },
                              "definite": false,
                              "start": 1540,
                              "end": 1558
                            }
                          ],
                          "declare": false,
                          "start": 1536,
                          "end": 1559
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
                                "name": "a1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1635,
                                "end": 1637
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                          "start": 1643,
                                          "end": 1644
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1646,
                                          "end": 1647
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1643,
                                        "end": 1647
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
                                          "start": 1649,
                                          "end": 1650
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1652,
                                          "end": 1655
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1649,
                                        "end": 1655
                                      }
                                    ],
                                    "start": 1641,
                                    "end": 1657
                                  },
                                  {
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
                                          "start": 1661,
                                          "end": 1662
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1664,
                                          "end": 1667
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1661,
                                        "end": 1667
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
                                          "start": 1669,
                                          "end": 1670
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1672,
                                          "end": 1675
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1669,
                                        "end": 1675
                                      }
                                    ],
                                    "start": 1659,
                                    "end": 1677
                                  },
                                  {
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
                                          "start": 1681,
                                          "end": 1682
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1684,
                                          "end": 1690
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1681,
                                        "end": 1690
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
                                          "start": 1692,
                                          "end": 1693
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1695,
                                          "end": 1698
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1692,
                                        "end": 1698
                                      }
                                    ],
                                    "start": 1679,
                                    "end": 1700
                                  }
                                ],
                                "start": 1640,
                                "end": 1701
                              },
                              "definite": false,
                              "start": 1635,
                              "end": 1701
                            }
                          ],
                          "declare": false,
                          "start": 1631,
                          "end": 1702
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
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1719,
                                "end": 1721
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                          "start": 1727,
                                          "end": 1728
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1730,
                                          "end": 1736
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1727,
                                        "end": 1736
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
                                          "start": 1738,
                                          "end": 1739
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1741,
                                          "end": 1744
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1738,
                                        "end": 1744
                                      }
                                    ],
                                    "start": 1725,
                                    "end": 1746
                                  },
                                  {
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
                                          "start": 1750,
                                          "end": 1751
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1753,
                                          "end": 1754
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1750,
                                        "end": 1754
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
                                          "start": 1756,
                                          "end": 1757
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1759,
                                          "end": 1762
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1756,
                                        "end": 1762
                                      }
                                    ],
                                    "start": 1748,
                                    "end": 1764
                                  },
                                  {
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
                                          "start": 1768,
                                          "end": 1769
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1771,
                                          "end": 1774
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1768,
                                        "end": 1774
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
                                          "start": 1776,
                                          "end": 1777
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1779,
                                          "end": 1782
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1776,
                                        "end": 1782
                                      }
                                    ],
                                    "start": 1766,
                                    "end": 1784
                                  }
                                ],
                                "start": 1724,
                                "end": 1785
                              },
                              "definite": false,
                              "start": 1719,
                              "end": 1785
                            }
                          ],
                          "declare": false,
                          "start": 1715,
                          "end": 1786
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
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1803,
                                "end": 1805
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                          "start": 1811,
                                          "end": 1812
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1814,
                                          "end": 1815
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1811,
                                        "end": 1815
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
                                          "start": 1817,
                                          "end": 1818
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1820,
                                          "end": 1823
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1817,
                                        "end": 1823
                                      }
                                    ],
                                    "start": 1809,
                                    "end": 1825
                                  },
                                  {
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
                                          "start": 1829,
                                          "end": 1830
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1832,
                                          "end": 1838
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1829,
                                        "end": 1838
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
                                          "start": 1840,
                                          "end": 1841
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1843,
                                          "end": 1846
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1840,
                                        "end": 1846
                                      }
                                    ],
                                    "start": 1827,
                                    "end": 1848
                                  },
                                  {
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
                                          "start": 1852,
                                          "end": 1853
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1855,
                                          "end": 1858
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1852,
                                        "end": 1858
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
                                          "start": 1860,
                                          "end": 1861
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1863,
                                          "end": 1866
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1860,
                                        "end": 1866
                                      }
                                    ],
                                    "start": 1850,
                                    "end": 1868
                                  }
                                ],
                                "start": 1808,
                                "end": 1869
                              },
                              "definite": false,
                              "start": 1803,
                              "end": 1869
                            }
                          ],
                          "declare": false,
                          "start": 1799,
                          "end": 1870
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
                                "name": "ifaceObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "iface",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1898,
                                      "end": 1903
                                    },
                                    "typeArguments": null,
                                    "start": 1898,
                                    "end": 1903
                                  },
                                  "start": 1896,
                                  "end": 1903
                                },
                                "start": 1888,
                                "end": 1903
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1906,
                                "end": 1910
                              },
                              "definite": false,
                              "start": 1888,
                              "end": 1910
                            }
                          ],
                          "declare": false,
                          "start": 1884,
                          "end": 1911
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
                                "name": "baseObj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1928,
                                "end": 1935
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1942,
                                  "end": 1946
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1938,
                                "end": 1948
                              },
                              "definite": false,
                              "start": 1928,
                              "end": 1948
                            }
                          ],
                          "declare": false,
                          "start": 1924,
                          "end": 1949
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
                                "name": "base2Obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1966,
                                "end": 1974
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1981,
                                  "end": 1986
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1977,
                                "end": 1988
                              },
                              "definite": false,
                              "start": 1966,
                              "end": 1988
                            }
                          ],
                          "declare": false,
                          "start": 1962,
                          "end": 1989
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
                                "name": "b1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2007,
                                "end": 2009
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2013,
                                    "end": 2020
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2022,
                                    "end": 2030
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2032,
                                    "end": 2040
                                  }
                                ],
                                "start": 2012,
                                "end": 2041
                              },
                              "definite": false,
                              "start": 2007,
                              "end": 2041
                            }
                          ],
                          "declare": false,
                          "start": 2003,
                          "end": 2042
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
                                "name": "b2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2059,
                                "end": 2061
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2065,
                                    "end": 2073
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2075,
                                    "end": 2082
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2084,
                                    "end": 2092
                                  }
                                ],
                                "start": 2064,
                                "end": 2093
                              },
                              "definite": false,
                              "start": 2059,
                              "end": 2093
                            }
                          ],
                          "declare": false,
                          "start": 2055,
                          "end": 2094
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
                                "name": "b3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2111,
                                "end": 2113
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2117,
                                    "end": 2124
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2126,
                                    "end": 2134
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2136,
                                    "end": 2144
                                  }
                                ],
                                "start": 2116,
                                "end": 2145
                              },
                              "definite": false,
                              "start": 2111,
                              "end": 2145
                            }
                          ],
                          "declare": false,
                          "start": 2107,
                          "end": 2146
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
                                "name": "b4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2163,
                                "end": 2165
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2169,
                                    "end": 2177
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2179,
                                    "end": 2186
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2188,
                                    "end": 2196
                                  }
                                ],
                                "start": 2168,
                                "end": 2197
                              },
                              "definite": false,
                              "start": 2163,
                              "end": 2197
                            }
                          ],
                          "declare": false,
                          "start": 2159,
                          "end": 2198
                        }
                      ],
                      "start": 429,
                      "end": 2208
                    },
                    "expression": false,
                    "start": 426,
                    "end": 2208
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 418,
                  "end": 2208
                }
              ],
              "start": 166,
              "end": 2214
            },
            "abstract": false,
            "declare": false,
            "start": 158,
            "end": 2214
          }
        ],
        "start": 18,
        "end": 2216
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 2216
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonEmptyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2225,
        "end": 2238
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "iface",
              "optional": false,
              "typeAnnotation": null,
              "start": 2255,
              "end": 2260
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
                    "start": 2263,
                    "end": 2264
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2266,
                      "end": 2272
                    },
                    "start": 2264,
                    "end": 2272
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2263,
                  "end": 2273
                }
              ],
              "start": 2261,
              "end": 2275
            },
            "declare": false,
            "start": 2245,
            "end": 2275
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 2286,
              "end": 2290
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
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2302,
                  "end": 2307
                },
                "typeArguments": null,
                "start": 2302,
                "end": 2307
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2310,
                    "end": 2311
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2313,
                      "end": 2319
                    },
                    "start": 2311,
                    "end": 2319
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
                  "start": 2310,
                  "end": 2320
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
                    "start": 2321,
                    "end": 2322
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2324,
                      "end": 2330
                    },
                    "start": 2322,
                    "end": 2330
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
                  "start": 2321,
                  "end": 2331
                }
              ],
              "start": 2308,
              "end": 2333
            },
            "abstract": false,
            "declare": false,
            "start": 2280,
            "end": 2333
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2344,
              "end": 2349
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
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2361,
                  "end": 2366
                },
                "typeArguments": null,
                "start": 2361,
                "end": 2366
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2369,
                    "end": 2370
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2372,
                      "end": 2378
                    },
                    "start": 2370,
                    "end": 2378
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
                  "start": 2369,
                  "end": 2379
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2380,
                    "end": 2381
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2383,
                      "end": 2389
                    },
                    "start": 2381,
                    "end": 2389
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
                  "start": 2380,
                  "end": 2390
                }
              ],
              "start": 2367,
              "end": 2392
            },
            "abstract": false,
            "declare": false,
            "start": 2338,
            "end": 2392
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 2403,
              "end": 2410
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 2419,
              "end": 2423
            },
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2426,
                    "end": 2427
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2429,
                      "end": 2435
                    },
                    "start": 2427,
                    "end": 2435
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
                  "start": 2426,
                  "end": 2436
                }
              ],
              "start": 2424,
              "end": 2438
            },
            "abstract": false,
            "declare": false,
            "start": 2397,
            "end": 2438
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 2451,
              "end": 2452
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
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2470,
                    "end": 2479
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
                            "type": "TSBooleanKeyword",
                            "start": 2483,
                            "end": 2490
                          },
                          "start": 2481,
                          "end": 2490
                        },
                        "start": 2480,
                        "end": 2490
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2496,
                            "end": 2503
                          },
                          "start": 2494,
                          "end": 2503
                        },
                        "start": 2492,
                        "end": 2503
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2506,
                        "end": 2512
                      },
                      "start": 2504,
                      "end": 2512
                    },
                    "body": null,
                    "expression": false,
                    "start": 2479,
                    "end": 2513
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2463,
                  "end": 2513
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2529,
                    "end": 2538
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
                            "type": "TSStringKeyword",
                            "start": 2542,
                            "end": 2548
                          },
                          "start": 2540,
                          "end": 2548
                        },
                        "start": 2539,
                        "end": 2548
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2554,
                            "end": 2561
                          },
                          "start": 2552,
                          "end": 2561
                        },
                        "start": 2550,
                        "end": 2561
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2564,
                        "end": 2570
                      },
                      "start": 2562,
                      "end": 2570
                    },
                    "body": null,
                    "expression": false,
                    "start": 2538,
                    "end": 2571
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2522,
                  "end": 2571
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2587,
                    "end": 2596
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
                            "start": 2600,
                            "end": 2606
                          },
                          "start": 2598,
                          "end": 2606
                        },
                        "start": 2597,
                        "end": 2606
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2612,
                            "end": 2619
                          },
                          "start": 2610,
                          "end": 2619
                        },
                        "start": 2608,
                        "end": 2619
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2622,
                        "end": 2628
                      },
                      "start": 2620,
                      "end": 2628
                    },
                    "body": null,
                    "expression": false,
                    "start": 2596,
                    "end": 2629
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2580,
                  "end": 2629
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2645,
                    "end": 2654
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2658,
                            "end": 2661
                          },
                          "start": 2656,
                          "end": 2661
                        },
                        "start": 2655,
                        "end": 2661
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2663,
                          "end": 2664
                        },
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 2667,
                          "end": 2672
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2663,
                        "end": 2672
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2675,
                        "end": 2678
                      },
                      "start": 2673,
                      "end": 2678
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 2688,
                            "end": 2692
                          },
                          "start": 2681,
                          "end": 2693
                        }
                      ],
                      "start": 2679,
                      "end": 2695
                    },
                    "expression": false,
                    "start": 2654,
                    "end": 2695
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2638,
                  "end": 2695
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2712,
                    "end": 2713
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
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2731,
                              "end": 2737
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2739,
                                  "end": 2743
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2744,
                                  "end": 2753
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2739,
                                "end": 2753
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2755,
                                        "end": 2756
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2758,
                                        "end": 2759
                                      }
                                    ],
                                    "start": 2754,
                                    "end": 2760
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2761,
                                    "end": 2762
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2754,
                                  "end": 2763
                                }
                              ],
                              "optional": false,
                              "start": 2739,
                              "end": 2764
                            },
                            "start": 2730,
                            "end": 2765
                          },
                          "directive": null,
                          "start": 2730,
                          "end": 2766
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2780,
                              "end": 2786
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2788,
                                  "end": 2792
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2793,
                                  "end": 2802
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2788,
                                "end": 2802
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2804,
                                        "end": 2805
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2807,
                                        "end": 2808
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2810,
                                        "end": 2819
                                      }
                                    ],
                                    "start": 2803,
                                    "end": 2820
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2821,
                                    "end": 2822
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2803,
                                  "end": 2823
                                }
                              ],
                              "optional": false,
                              "start": 2788,
                              "end": 2824
                            },
                            "start": 2779,
                            "end": 2825
                          },
                          "directive": null,
                          "start": 2779,
                          "end": 2826
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2840,
                              "end": 2846
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2848,
                                  "end": 2852
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2853,
                                  "end": 2862
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2848,
                                "end": 2862
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2864,
                                        "end": 2873
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2875,
                                        "end": 2876
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2878,
                                        "end": 2879
                                      }
                                    ],
                                    "start": 2863,
                                    "end": 2880
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2881,
                                    "end": 2882
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2863,
                                  "end": 2883
                                }
                              ],
                              "optional": false,
                              "start": 2848,
                              "end": 2884
                            },
                            "start": 2839,
                            "end": 2885
                          },
                          "directive": null,
                          "start": 2839,
                          "end": 2886
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2900,
                              "end": 2906
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2908,
                                  "end": 2912
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2913,
                                  "end": 2922
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2908,
                                "end": 2922
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 2924,
                                        "end": 2928
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2930,
                                        "end": 2931
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2933,
                                        "end": 2934
                                      }
                                    ],
                                    "start": 2923,
                                    "end": 2935
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2936,
                                    "end": 2937
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2923,
                                  "end": 2938
                                }
                              ],
                              "optional": false,
                              "start": 2908,
                              "end": 2939
                            },
                            "start": 2899,
                            "end": 2940
                          },
                          "directive": null,
                          "start": 2899,
                          "end": 2941
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2955,
                              "end": 2961
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2963,
                                  "end": 2967
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2968,
                                  "end": 2977
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2963,
                                "end": 2977
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2979,
                                        "end": 2980
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2982,
                                        "end": 2983
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 2985,
                                        "end": 2989
                                      }
                                    ],
                                    "start": 2978,
                                    "end": 2990
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2991,
                                    "end": 2992
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2978,
                                  "end": 2993
                                }
                              ],
                              "optional": false,
                              "start": 2963,
                              "end": 2994
                            },
                            "start": 2954,
                            "end": 2995
                          },
                          "directive": null,
                          "start": 2954,
                          "end": 2996
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3010,
                              "end": 3016
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3018,
                                  "end": 3022
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3023,
                                  "end": 3032
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3018,
                                "end": 3032
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3034,
                                        "end": 3043
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 3045,
                                        "end": 3046
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 3048,
                                        "end": 3052
                                      }
                                    ],
                                    "start": 3033,
                                    "end": 3053
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3054,
                                    "end": 3055
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3033,
                                  "end": 3056
                                }
                              ],
                              "optional": false,
                              "start": 3018,
                              "end": 3057
                            },
                            "start": 3009,
                            "end": 3058
                          },
                          "directive": null,
                          "start": 3009,
                          "end": 3059
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3074,
                              "end": 3080
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3082,
                                  "end": 3086
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3087,
                                  "end": 3096
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3082,
                                "end": 3096
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3098,
                                        "end": 3100
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3102,
                                        "end": 3105
                                      }
                                    ],
                                    "start": 3097,
                                    "end": 3106
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3107,
                                    "end": 3108
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3097,
                                  "end": 3109
                                }
                              ],
                              "optional": false,
                              "start": 3082,
                              "end": 3110
                            },
                            "start": 3073,
                            "end": 3111
                          },
                          "directive": null,
                          "start": 3073,
                          "end": 3112
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3126,
                              "end": 3132
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3134,
                                  "end": 3138
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3139,
                                  "end": 3148
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3134,
                                "end": 3148
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3150,
                                        "end": 3152
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3154,
                                        "end": 3157
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3159,
                                        "end": 3168
                                      }
                                    ],
                                    "start": 3149,
                                    "end": 3169
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3170,
                                    "end": 3171
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3149,
                                  "end": 3172
                                }
                              ],
                              "optional": false,
                              "start": 3134,
                              "end": 3173
                            },
                            "start": 3125,
                            "end": 3174
                          },
                          "directive": null,
                          "start": 3125,
                          "end": 3175
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3189,
                              "end": 3195
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3197,
                                  "end": 3201
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3202,
                                  "end": 3211
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3197,
                                "end": 3211
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3213,
                                        "end": 3222
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3224,
                                        "end": 3227
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3229,
                                        "end": 3231
                                      }
                                    ],
                                    "start": 3212,
                                    "end": 3232
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3233,
                                    "end": 3234
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3212,
                                  "end": 3235
                                }
                              ],
                              "optional": false,
                              "start": 3197,
                              "end": 3236
                            },
                            "start": 3188,
                            "end": 3237
                          },
                          "directive": null,
                          "start": 3188,
                          "end": 3238
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3252,
                              "end": 3258
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3260,
                                  "end": 3264
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3265,
                                  "end": 3274
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3260,
                                "end": 3274
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 3276,
                                        "end": 3280
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3282,
                                        "end": 3285
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3287,
                                        "end": 3289
                                      }
                                    ],
                                    "start": 3275,
                                    "end": 3290
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3291,
                                    "end": 3292
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3275,
                                  "end": 3293
                                }
                              ],
                              "optional": false,
                              "start": 3260,
                              "end": 3294
                            },
                            "start": 3251,
                            "end": 3295
                          },
                          "directive": null,
                          "start": 3251,
                          "end": 3296
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3310,
                              "end": 3316
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3318,
                                  "end": 3322
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3323,
                                  "end": 3332
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3318,
                                "end": 3332
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3334,
                                        "end": 3337
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3339,
                                        "end": 3341
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 3343,
                                        "end": 3347
                                      }
                                    ],
                                    "start": 3333,
                                    "end": 3348
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3349,
                                    "end": 3350
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3333,
                                  "end": 3351
                                }
                              ],
                              "optional": false,
                              "start": 3318,
                              "end": 3352
                            },
                            "start": 3309,
                            "end": 3353
                          },
                          "directive": null,
                          "start": 3309,
                          "end": 3354
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3368,
                              "end": 3374
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3376,
                                  "end": 3380
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3381,
                                  "end": 3390
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3376,
                                "end": 3390
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3392,
                                        "end": 3401
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3403,
                                        "end": 3405
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 3407,
                                        "end": 3411
                                      }
                                    ],
                                    "start": 3391,
                                    "end": 3412
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3413,
                                    "end": 3414
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3391,
                                  "end": 3415
                                }
                              ],
                              "optional": false,
                              "start": 3376,
                              "end": 3416
                            },
                            "start": 3367,
                            "end": 3417
                          },
                          "directive": null,
                          "start": 3367,
                          "end": 3418
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3433,
                              "end": 3439
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3441,
                                  "end": 3445
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3446,
                                  "end": 3455
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3441,
                                "end": 3455
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": 3,
                                              "raw": "3",
                                              "start": 3458,
                                              "end": 3459
                                            },
                                            {
                                              "type": "Literal",
                                              "value": 4,
                                              "raw": "4",
                                              "start": 3461,
                                              "end": 3462
                                            }
                                          ],
                                          "start": 3457,
                                          "end": 3463
                                        },
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null",
                                              "start": 3466,
                                              "end": 3470
                                            }
                                          ],
                                          "start": 3465,
                                          "end": 3471
                                        }
                                      ],
                                      "start": 3456,
                                      "end": 3472
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 3473,
                                      "end": 3474
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 3456,
                                    "end": 3475
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3476,
                                    "end": 3477
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3456,
                                  "end": 3478
                                }
                              ],
                              "optional": false,
                              "start": 3441,
                              "end": 3479
                            },
                            "start": 3432,
                            "end": 3480
                          },
                          "directive": null,
                          "start": 3432,
                          "end": 3481
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
                                "name": "t1",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "start": 3506,
                                            "end": 3507
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 3509,
                                              "end": 3515
                                            },
                                            "start": 3507,
                                            "end": 3515
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3506,
                                          "end": 3516
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
                                            "start": 3517,
                                            "end": 3518
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3520,
                                                "end": 3524
                                              },
                                              "typeArguments": null,
                                              "start": 3520,
                                              "end": 3524
                                            },
                                            "start": 3518,
                                            "end": 3524
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3517,
                                          "end": 3525
                                        }
                                      ],
                                      "start": 3504,
                                      "end": 3527
                                    },
                                    "start": 3504,
                                    "end": 3529
                                  },
                                  "start": 3502,
                                  "end": 3529
                                },
                                "start": 3500,
                                "end": 3529
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                          "start": 3535,
                                          "end": 3536
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 7,
                                          "raw": "7",
                                          "start": 3538,
                                          "end": 3539
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3535,
                                        "end": 3539
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
                                          "start": 3541,
                                          "end": 3542
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3548,
                                            "end": 3555
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3544,
                                          "end": 3557
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3541,
                                        "end": 3557
                                      }
                                    ],
                                    "start": 3533,
                                    "end": 3559
                                  },
                                  {
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
                                          "start": 3563,
                                          "end": 3564
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 5,
                                          "raw": "5",
                                          "start": 3566,
                                          "end": 3567
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3563,
                                        "end": 3567
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
                                          "start": 3569,
                                          "end": 3570
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3576,
                                            "end": 3580
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3572,
                                          "end": 3582
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3569,
                                        "end": 3582
                                      }
                                    ],
                                    "start": 3561,
                                    "end": 3584
                                  }
                                ],
                                "start": 3532,
                                "end": 3585
                              },
                              "definite": false,
                              "start": 3500,
                              "end": 3585
                            }
                          ],
                          "declare": false,
                          "start": 3496,
                          "end": 3586
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
                                "name": "t2",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "start": 3609,
                                            "end": 3610
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSBooleanKeyword",
                                              "start": 3612,
                                              "end": 3619
                                            },
                                            "start": 3610,
                                            "end": 3619
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3609,
                                          "end": 3620
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
                                            "start": 3621,
                                            "end": 3622
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3624,
                                                "end": 3628
                                              },
                                              "typeArguments": null,
                                              "start": 3624,
                                              "end": 3628
                                            },
                                            "start": 3622,
                                            "end": 3628
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3621,
                                          "end": 3629
                                        }
                                      ],
                                      "start": 3607,
                                      "end": 3631
                                    },
                                    "start": 3607,
                                    "end": 3633
                                  },
                                  "start": 3605,
                                  "end": 3633
                                },
                                "start": 3603,
                                "end": 3633
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                          "start": 3639,
                                          "end": 3640
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": true,
                                          "raw": "true",
                                          "start": 3642,
                                          "end": 3646
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3639,
                                        "end": 3646
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
                                          "start": 3648,
                                          "end": 3649
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3655,
                                            "end": 3662
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3651,
                                          "end": 3664
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3648,
                                        "end": 3664
                                      }
                                    ],
                                    "start": 3637,
                                    "end": 3666
                                  },
                                  {
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
                                          "start": 3670,
                                          "end": 3671
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": false,
                                          "raw": "false",
                                          "start": 3673,
                                          "end": 3678
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3670,
                                        "end": 3678
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
                                          "start": 3680,
                                          "end": 3681
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3687,
                                            "end": 3691
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3683,
                                          "end": 3693
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3680,
                                        "end": 3693
                                      }
                                    ],
                                    "start": 3668,
                                    "end": 3695
                                  }
                                ],
                                "start": 3636,
                                "end": 3696
                              },
                              "definite": false,
                              "start": 3603,
                              "end": 3696
                            }
                          ],
                          "declare": false,
                          "start": 3599,
                          "end": 3697
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
                                "name": "t3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "start": 3720,
                                            "end": 3721
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 3723,
                                              "end": 3729
                                            },
                                            "start": 3721,
                                            "end": 3729
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3720,
                                          "end": 3730
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
                                            "start": 3731,
                                            "end": 3732
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3734,
                                                "end": 3738
                                              },
                                              "typeArguments": null,
                                              "start": 3734,
                                              "end": 3738
                                            },
                                            "start": 3732,
                                            "end": 3738
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3731,
                                          "end": 3739
                                        }
                                      ],
                                      "start": 3718,
                                      "end": 3741
                                    },
                                    "start": 3718,
                                    "end": 3743
                                  },
                                  "start": 3716,
                                  "end": 3743
                                },
                                "start": 3714,
                                "end": 3743
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                          "start": 3749,
                                          "end": 3750
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3752,
                                          "end": 3761
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3749,
                                        "end": 3761
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
                                          "start": 3763,
                                          "end": 3764
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3770,
                                            "end": 3774
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3766,
                                          "end": 3776
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3763,
                                        "end": 3776
                                      }
                                    ],
                                    "start": 3747,
                                    "end": 3778
                                  },
                                  {
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
                                          "start": 3782,
                                          "end": 3783
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "",
                                          "raw": "''",
                                          "start": 3785,
                                          "end": 3787
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3782,
                                        "end": 3787
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
                                          "start": 3789,
                                          "end": 3790
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3796,
                                            "end": 3803
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3792,
                                          "end": 3805
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3789,
                                        "end": 3805
                                      }
                                    ],
                                    "start": 3780,
                                    "end": 3807
                                  }
                                ],
                                "start": 3746,
                                "end": 3808
                              },
                              "definite": false,
                              "start": 3714,
                              "end": 3808
                            }
                          ],
                          "declare": false,
                          "start": 3710,
                          "end": 3809
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
                                "name": "anyObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3835,
                                    "end": 3838
                                  },
                                  "start": 3833,
                                  "end": 3838
                                },
                                "start": 3827,
                                "end": 3838
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3841,
                                "end": 3845
                              },
                              "definite": false,
                              "start": 3827,
                              "end": 3845
                            }
                          ],
                          "declare": false,
                          "start": 3823,
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
                                "name": "a1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3922,
                                "end": 3924
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                          "start": 3930,
                                          "end": 3931
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 3933,
                                          "end": 3934
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3930,
                                        "end": 3934
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
                                          "start": 3936,
                                          "end": 3937
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 3939,
                                          "end": 3942
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3936,
                                        "end": 3942
                                      }
                                    ],
                                    "start": 3928,
                                    "end": 3944
                                  },
                                  {
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
                                          "start": 3948,
                                          "end": 3949
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 3951,
                                          "end": 3954
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3948,
                                        "end": 3954
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
                                          "start": 3956,
                                          "end": 3957
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 3959,
                                          "end": 3962
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3956,
                                        "end": 3962
                                      }
                                    ],
                                    "start": 3946,
                                    "end": 3964
                                  },
                                  {
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
                                          "start": 3968,
                                          "end": 3969
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3971,
                                          "end": 3977
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3968,
                                        "end": 3977
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
                                          "start": 3979,
                                          "end": 3980
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 3982,
                                          "end": 3985
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3979,
                                        "end": 3985
                                      }
                                    ],
                                    "start": 3966,
                                    "end": 3987
                                  }
                                ],
                                "start": 3927,
                                "end": 3988
                              },
                              "definite": false,
                              "start": 3922,
                              "end": 3988
                            }
                          ],
                          "declare": false,
                          "start": 3918,
                          "end": 3989
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
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4006,
                                "end": 4008
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                          "start": 4014,
                                          "end": 4015
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4017,
                                          "end": 4023
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4014,
                                        "end": 4023
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
                                          "start": 4025,
                                          "end": 4026
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4028,
                                          "end": 4031
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4025,
                                        "end": 4031
                                      }
                                    ],
                                    "start": 4012,
                                    "end": 4033
                                  },
                                  {
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
                                          "start": 4037,
                                          "end": 4038
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 4040,
                                          "end": 4041
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4037,
                                        "end": 4041
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
                                          "start": 4043,
                                          "end": 4044
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4046,
                                          "end": 4049
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4043,
                                        "end": 4049
                                      }
                                    ],
                                    "start": 4035,
                                    "end": 4051
                                  },
                                  {
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
                                          "start": 4055,
                                          "end": 4056
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4058,
                                          "end": 4061
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4055,
                                        "end": 4061
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
                                          "start": 4063,
                                          "end": 4064
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4066,
                                          "end": 4069
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4063,
                                        "end": 4069
                                      }
                                    ],
                                    "start": 4053,
                                    "end": 4071
                                  }
                                ],
                                "start": 4011,
                                "end": 4072
                              },
                              "definite": false,
                              "start": 4006,
                              "end": 4072
                            }
                          ],
                          "declare": false,
                          "start": 4002,
                          "end": 4073
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
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4090,
                                "end": 4092
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
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
                                          "start": 4098,
                                          "end": 4099
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 4101,
                                          "end": 4102
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4098,
                                        "end": 4102
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
                                          "start": 4104,
                                          "end": 4105
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4107,
                                          "end": 4110
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4104,
                                        "end": 4110
                                      }
                                    ],
                                    "start": 4096,
                                    "end": 4112
                                  },
                                  {
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
                                          "start": 4116,
                                          "end": 4117
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4119,
                                          "end": 4125
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4116,
                                        "end": 4125
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
                                          "start": 4127,
                                          "end": 4128
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4130,
                                          "end": 4133
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4127,
                                        "end": 4133
                                      }
                                    ],
                                    "start": 4114,
                                    "end": 4135
                                  },
                                  {
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
                                          "start": 4139,
                                          "end": 4140
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4142,
                                          "end": 4145
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4139,
                                        "end": 4145
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
                                          "start": 4147,
                                          "end": 4148
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4150,
                                          "end": 4153
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4147,
                                        "end": 4153
                                      }
                                    ],
                                    "start": 4137,
                                    "end": 4155
                                  }
                                ],
                                "start": 4095,
                                "end": 4156
                              },
                              "definite": false,
                              "start": 4090,
                              "end": 4156
                            }
                          ],
                          "declare": false,
                          "start": 4086,
                          "end": 4157
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
                                "name": "ifaceObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "iface",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4185,
                                      "end": 4190
                                    },
                                    "typeArguments": null,
                                    "start": 4185,
                                    "end": 4190
                                  },
                                  "start": 4183,
                                  "end": 4190
                                },
                                "start": 4175,
                                "end": 4190
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 4193,
                                "end": 4197
                              },
                              "definite": false,
                              "start": 4175,
                              "end": 4197
                            }
                          ],
                          "declare": false,
                          "start": 4171,
                          "end": 4198
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
                                "name": "baseObj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4215,
                                "end": 4222
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4229,
                                  "end": 4233
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 4225,
                                "end": 4235
                              },
                              "definite": false,
                              "start": 4215,
                              "end": 4235
                            }
                          ],
                          "declare": false,
                          "start": 4211,
                          "end": 4236
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
                                "name": "base2Obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4253,
                                "end": 4261
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4268,
                                  "end": 4273
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 4264,
                                "end": 4275
                              },
                              "definite": false,
                              "start": 4253,
                              "end": 4275
                            }
                          ],
                          "declare": false,
                          "start": 4249,
                          "end": 4276
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
                                "name": "b1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4294,
                                "end": 4296
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4300,
                                    "end": 4307
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4309,
                                    "end": 4317
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4319,
                                    "end": 4327
                                  }
                                ],
                                "start": 4299,
                                "end": 4328
                              },
                              "definite": false,
                              "start": 4294,
                              "end": 4328
                            }
                          ],
                          "declare": false,
                          "start": 4290,
                          "end": 4329
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
                                "name": "b2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4346,
                                "end": 4348
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4352,
                                    "end": 4360
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4362,
                                    "end": 4369
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4371,
                                    "end": 4379
                                  }
                                ],
                                "start": 4351,
                                "end": 4380
                              },
                              "definite": false,
                              "start": 4346,
                              "end": 4380
                            }
                          ],
                          "declare": false,
                          "start": 4342,
                          "end": 4381
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
                                "name": "b3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4398,
                                "end": 4400
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4404,
                                    "end": 4411
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4413,
                                    "end": 4421
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4423,
                                    "end": 4431
                                  }
                                ],
                                "start": 4403,
                                "end": 4432
                              },
                              "definite": false,
                              "start": 4398,
                              "end": 4432
                            }
                          ],
                          "declare": false,
                          "start": 4394,
                          "end": 4433
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
                                "name": "b4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4450,
                                "end": 4452
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4456,
                                    "end": 4464
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4466,
                                    "end": 4473
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4475,
                                    "end": 4483
                                  }
                                ],
                                "start": 4455,
                                "end": 4484
                              },
                              "definite": false,
                              "start": 4450,
                              "end": 4484
                            }
                          ],
                          "declare": false,
                          "start": 4446,
                          "end": 4485
                        }
                      ],
                      "start": 2716,
                      "end": 4495
                    },
                    "expression": false,
                    "start": 2713,
                    "end": 4495
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2705,
                  "end": 4495
                }
              ],
              "start": 2453,
              "end": 4501
            },
            "abstract": false,
            "declare": false,
            "start": 2445,
            "end": 4501
          }
        ],
        "start": 2239,
        "end": 4503
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 2218,
      "end": 4503
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4504
}
```
