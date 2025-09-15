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
        "start": 10,
        "end": 20
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
              "start": 37,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 27,
            "end": 46
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
              "start": 57,
              "end": 61
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
                  "start": 73,
                  "end": 78
                },
                "typeArguments": null,
                "start": 73,
                "end": 78
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 79,
              "end": 82
            },
            "abstract": false,
            "declare": false,
            "start": 51,
            "end": 82
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
              "start": 93,
              "end": 98
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
                  "start": 110,
                  "end": 115
                },
                "typeArguments": null,
                "start": 110,
                "end": 115
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 116,
              "end": 119
            },
            "abstract": false,
            "declare": false,
            "start": 87,
            "end": 119
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
              "start": 130,
              "end": 137
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 150
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 151,
              "end": 154
            },
            "abstract": false,
            "declare": false,
            "start": 124,
            "end": 154
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
              "start": 167,
              "end": 168
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
                    "start": 186,
                    "end": 195
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
                            "start": 199,
                            "end": 206
                          },
                          "start": 197,
                          "end": 206
                        },
                        "start": 196,
                        "end": 206
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
                            "start": 212,
                            "end": 219
                          },
                          "start": 210,
                          "end": 219
                        },
                        "start": 208,
                        "end": 219
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 222,
                        "end": 228
                      },
                      "start": 220,
                      "end": 228
                    },
                    "body": null,
                    "expression": false,
                    "start": 195,
                    "end": 229
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 179,
                  "end": 229
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
                    "start": 245,
                    "end": 254
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
                            "start": 258,
                            "end": 264
                          },
                          "start": 256,
                          "end": 264
                        },
                        "start": 255,
                        "end": 264
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
                            "start": 270,
                            "end": 277
                          },
                          "start": 268,
                          "end": 277
                        },
                        "start": 266,
                        "end": 277
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 280,
                        "end": 286
                      },
                      "start": 278,
                      "end": 286
                    },
                    "body": null,
                    "expression": false,
                    "start": 254,
                    "end": 287
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 238,
                  "end": 287
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
                    "start": 303,
                    "end": 312
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
                            "start": 316,
                            "end": 322
                          },
                          "start": 314,
                          "end": 322
                        },
                        "start": 313,
                        "end": 322
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
                            "start": 328,
                            "end": 335
                          },
                          "start": 326,
                          "end": 335
                        },
                        "start": 324,
                        "end": 335
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 338,
                        "end": 344
                      },
                      "start": 336,
                      "end": 344
                    },
                    "body": null,
                    "expression": false,
                    "start": 312,
                    "end": 345
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 296,
                  "end": 345
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
                    "start": 361,
                    "end": 370
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
                            "start": 374,
                            "end": 377
                          },
                          "start": 372,
                          "end": 377
                        },
                        "start": 371,
                        "end": 377
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
                          "start": 379,
                          "end": 380
                        },
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 383,
                          "end": 388
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 388
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 391,
                        "end": 394
                      },
                      "start": 389,
                      "end": 394
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
                            "start": 404,
                            "end": 408
                          },
                          "start": 397,
                          "end": 409
                        }
                      ],
                      "start": 395,
                      "end": 411
                    },
                    "expression": false,
                    "start": 370,
                    "end": 411
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 354,
                  "end": 411
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
                    "start": 428,
                    "end": 429
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
                              "start": 447,
                              "end": 453
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 455,
                                  "end": 459
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 460,
                                  "end": 469
                                },
                                "optional": false,
                                "computed": false,
                                "start": 455,
                                "end": 469
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
                                        "start": 471,
                                        "end": 472
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 474,
                                        "end": 475
                                      }
                                    ],
                                    "start": 470,
                                    "end": 476
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 477,
                                    "end": 478
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 470,
                                  "end": 479
                                }
                              ],
                              "optional": false,
                              "start": 455,
                              "end": 480
                            },
                            "start": 446,
                            "end": 481
                          },
                          "directive": null,
                          "start": 446,
                          "end": 482
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 496,
                              "end": 502
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 504,
                                  "end": 508
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 509,
                                  "end": 518
                                },
                                "optional": false,
                                "computed": false,
                                "start": 504,
                                "end": 518
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
                                        "start": 520,
                                        "end": 521
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 523,
                                        "end": 524
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 526,
                                        "end": 535
                                      }
                                    ],
                                    "start": 519,
                                    "end": 536
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 537,
                                    "end": 538
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 519,
                                  "end": 539
                                }
                              ],
                              "optional": false,
                              "start": 504,
                              "end": 540
                            },
                            "start": 495,
                            "end": 541
                          },
                          "directive": null,
                          "start": 495,
                          "end": 542
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 556,
                              "end": 562
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 564,
                                  "end": 568
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 569,
                                  "end": 578
                                },
                                "optional": false,
                                "computed": false,
                                "start": 564,
                                "end": 578
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
                                        "start": 580,
                                        "end": 589
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 591,
                                        "end": 592
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 594,
                                        "end": 595
                                      }
                                    ],
                                    "start": 579,
                                    "end": 596
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 597,
                                    "end": 598
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 579,
                                  "end": 599
                                }
                              ],
                              "optional": false,
                              "start": 564,
                              "end": 600
                            },
                            "start": 555,
                            "end": 601
                          },
                          "directive": null,
                          "start": 555,
                          "end": 602
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 616,
                              "end": 622
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 624,
                                  "end": 628
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 629,
                                  "end": 638
                                },
                                "optional": false,
                                "computed": false,
                                "start": 624,
                                "end": 638
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
                                        "start": 640,
                                        "end": 644
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 646,
                                        "end": 647
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 649,
                                        "end": 650
                                      }
                                    ],
                                    "start": 639,
                                    "end": 651
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 652,
                                    "end": 653
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 639,
                                  "end": 654
                                }
                              ],
                              "optional": false,
                              "start": 624,
                              "end": 655
                            },
                            "start": 615,
                            "end": 656
                          },
                          "directive": null,
                          "start": 615,
                          "end": 657
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 671,
                              "end": 677
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 679,
                                  "end": 683
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 684,
                                  "end": 693
                                },
                                "optional": false,
                                "computed": false,
                                "start": 679,
                                "end": 693
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
                                        "start": 695,
                                        "end": 696
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 698,
                                        "end": 699
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 701,
                                        "end": 705
                                      }
                                    ],
                                    "start": 694,
                                    "end": 706
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 707,
                                    "end": 708
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 694,
                                  "end": 709
                                }
                              ],
                              "optional": false,
                              "start": 679,
                              "end": 710
                            },
                            "start": 670,
                            "end": 711
                          },
                          "directive": null,
                          "start": 670,
                          "end": 712
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 726,
                              "end": 732
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 734,
                                  "end": 738
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 739,
                                  "end": 748
                                },
                                "optional": false,
                                "computed": false,
                                "start": 734,
                                "end": 748
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
                                        "start": 750,
                                        "end": 759
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 761,
                                        "end": 762
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 764,
                                        "end": 768
                                      }
                                    ],
                                    "start": 749,
                                    "end": 769
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 770,
                                    "end": 771
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 749,
                                  "end": 772
                                }
                              ],
                              "optional": false,
                              "start": 734,
                              "end": 773
                            },
                            "start": 725,
                            "end": 774
                          },
                          "directive": null,
                          "start": 725,
                          "end": 775
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 790,
                              "end": 796
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 798,
                                  "end": 802
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 803,
                                  "end": 812
                                },
                                "optional": false,
                                "computed": false,
                                "start": 798,
                                "end": 812
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
                                        "start": 814,
                                        "end": 816
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 818,
                                        "end": 821
                                      }
                                    ],
                                    "start": 813,
                                    "end": 822
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 823,
                                    "end": 824
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 813,
                                  "end": 825
                                }
                              ],
                              "optional": false,
                              "start": 798,
                              "end": 826
                            },
                            "start": 789,
                            "end": 827
                          },
                          "directive": null,
                          "start": 789,
                          "end": 828
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 842,
                              "end": 848
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 850,
                                  "end": 854
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 855,
                                  "end": 864
                                },
                                "optional": false,
                                "computed": false,
                                "start": 850,
                                "end": 864
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
                                        "start": 866,
                                        "end": 868
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 870,
                                        "end": 873
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 875,
                                        "end": 884
                                      }
                                    ],
                                    "start": 865,
                                    "end": 885
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 886,
                                    "end": 887
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 865,
                                  "end": 888
                                }
                              ],
                              "optional": false,
                              "start": 850,
                              "end": 889
                            },
                            "start": 841,
                            "end": 890
                          },
                          "directive": null,
                          "start": 841,
                          "end": 891
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 905,
                              "end": 911
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 913,
                                  "end": 917
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 918,
                                  "end": 927
                                },
                                "optional": false,
                                "computed": false,
                                "start": 913,
                                "end": 927
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
                                        "start": 929,
                                        "end": 938
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 940,
                                        "end": 943
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 945,
                                        "end": 947
                                      }
                                    ],
                                    "start": 928,
                                    "end": 948
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 949,
                                    "end": 950
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 928,
                                  "end": 951
                                }
                              ],
                              "optional": false,
                              "start": 913,
                              "end": 952
                            },
                            "start": 904,
                            "end": 953
                          },
                          "directive": null,
                          "start": 904,
                          "end": 954
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 968,
                              "end": 974
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 976,
                                  "end": 980
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 981,
                                  "end": 990
                                },
                                "optional": false,
                                "computed": false,
                                "start": 976,
                                "end": 990
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
                                        "start": 992,
                                        "end": 996
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 998,
                                        "end": 1001
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 1003,
                                        "end": 1005
                                      }
                                    ],
                                    "start": 991,
                                    "end": 1006
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1007,
                                    "end": 1008
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 991,
                                  "end": 1009
                                }
                              ],
                              "optional": false,
                              "start": 976,
                              "end": 1010
                            },
                            "start": 967,
                            "end": 1011
                          },
                          "directive": null,
                          "start": 967,
                          "end": 1012
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1026,
                              "end": 1032
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1034,
                                  "end": 1038
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1039,
                                  "end": 1048
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1034,
                                "end": 1048
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
                                        "start": 1050,
                                        "end": 1053
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 1055,
                                        "end": 1057
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 1059,
                                        "end": 1063
                                      }
                                    ],
                                    "start": 1049,
                                    "end": 1064
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1065,
                                    "end": 1066
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1049,
                                  "end": 1067
                                }
                              ],
                              "optional": false,
                              "start": 1034,
                              "end": 1068
                            },
                            "start": 1025,
                            "end": 1069
                          },
                          "directive": null,
                          "start": 1025,
                          "end": 1070
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1084,
                              "end": 1090
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1092,
                                  "end": 1096
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1097,
                                  "end": 1106
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1092,
                                "end": 1106
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
                                        "start": 1108,
                                        "end": 1117
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 1119,
                                        "end": 1121
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 1123,
                                        "end": 1127
                                      }
                                    ],
                                    "start": 1107,
                                    "end": 1128
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1129,
                                    "end": 1130
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1107,
                                  "end": 1131
                                }
                              ],
                              "optional": false,
                              "start": 1092,
                              "end": 1132
                            },
                            "start": 1083,
                            "end": 1133
                          },
                          "directive": null,
                          "start": 1083,
                          "end": 1134
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1149,
                              "end": 1155
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1157,
                                  "end": 1161
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1162,
                                  "end": 1171
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1157,
                                "end": 1171
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
                                              "start": 1174,
                                              "end": 1175
                                            },
                                            {
                                              "type": "Literal",
                                              "value": 4,
                                              "raw": "4",
                                              "start": 1177,
                                              "end": 1178
                                            }
                                          ],
                                          "start": 1173,
                                          "end": 1179
                                        },
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null",
                                              "start": 1182,
                                              "end": 1186
                                            }
                                          ],
                                          "start": 1181,
                                          "end": 1187
                                        }
                                      ],
                                      "start": 1172,
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
                                    "start": 1172,
                                    "end": 1191
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1192,
                                    "end": 1193
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1172,
                                  "end": 1194
                                }
                              ],
                              "optional": false,
                              "start": 1157,
                              "end": 1195
                            },
                            "start": 1148,
                            "end": 1196
                          },
                          "directive": null,
                          "start": 1148,
                          "end": 1197
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
                                            "start": 1222,
                                            "end": 1223
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 1225,
                                              "end": 1231
                                            },
                                            "start": 1223,
                                            "end": 1231
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1222,
                                          "end": 1232
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
                                            "start": 1233,
                                            "end": 1234
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
                                                "start": 1236,
                                                "end": 1240
                                              },
                                              "typeArguments": null,
                                              "start": 1236,
                                              "end": 1240
                                            },
                                            "start": 1234,
                                            "end": 1240
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1233,
                                          "end": 1241
                                        }
                                      ],
                                      "start": 1220,
                                      "end": 1243
                                    },
                                    "start": 1220,
                                    "end": 1245
                                  },
                                  "start": 1218,
                                  "end": 1245
                                },
                                "start": 1216,
                                "end": 1245
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
                                          "start": 1251,
                                          "end": 1252
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 7,
                                          "raw": "7",
                                          "start": 1254,
                                          "end": 1255
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1251,
                                        "end": 1255
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
                                          "start": 1257,
                                          "end": 1258
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1264,
                                            "end": 1271
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1260,
                                          "end": 1273
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1257,
                                        "end": 1273
                                      }
                                    ],
                                    "start": 1249,
                                    "end": 1275
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
                                          "start": 1279,
                                          "end": 1280
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 5,
                                          "raw": "5",
                                          "start": 1282,
                                          "end": 1283
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1279,
                                        "end": 1283
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
                                          "start": 1285,
                                          "end": 1286
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1292,
                                            "end": 1296
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1288,
                                          "end": 1298
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1285,
                                        "end": 1298
                                      }
                                    ],
                                    "start": 1277,
                                    "end": 1300
                                  }
                                ],
                                "start": 1248,
                                "end": 1301
                              },
                              "definite": false,
                              "start": 1216,
                              "end": 1301
                            }
                          ],
                          "declare": false,
                          "start": 1212,
                          "end": 1302
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
                                            "start": 1325,
                                            "end": 1326
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSBooleanKeyword",
                                              "start": 1328,
                                              "end": 1335
                                            },
                                            "start": 1326,
                                            "end": 1335
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1325,
                                          "end": 1336
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
                                            "start": 1337,
                                            "end": 1338
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
                                                "start": 1340,
                                                "end": 1344
                                              },
                                              "typeArguments": null,
                                              "start": 1340,
                                              "end": 1344
                                            },
                                            "start": 1338,
                                            "end": 1344
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1337,
                                          "end": 1345
                                        }
                                      ],
                                      "start": 1323,
                                      "end": 1347
                                    },
                                    "start": 1323,
                                    "end": 1349
                                  },
                                  "start": 1321,
                                  "end": 1349
                                },
                                "start": 1319,
                                "end": 1349
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
                                          "start": 1355,
                                          "end": 1356
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": true,
                                          "raw": "true",
                                          "start": 1358,
                                          "end": 1362
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1355,
                                        "end": 1362
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
                                          "start": 1364,
                                          "end": 1365
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1371,
                                            "end": 1378
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1367,
                                          "end": 1380
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1364,
                                        "end": 1380
                                      }
                                    ],
                                    "start": 1353,
                                    "end": 1382
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
                                          "start": 1386,
                                          "end": 1387
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": false,
                                          "raw": "false",
                                          "start": 1389,
                                          "end": 1394
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1386,
                                        "end": 1394
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
                                          "start": 1396,
                                          "end": 1397
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1403,
                                            "end": 1407
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1399,
                                          "end": 1409
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1396,
                                        "end": 1409
                                      }
                                    ],
                                    "start": 1384,
                                    "end": 1411
                                  }
                                ],
                                "start": 1352,
                                "end": 1412
                              },
                              "definite": false,
                              "start": 1319,
                              "end": 1412
                            }
                          ],
                          "declare": false,
                          "start": 1315,
                          "end": 1413
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
                                            "start": 1436,
                                            "end": 1437
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 1439,
                                              "end": 1445
                                            },
                                            "start": 1437,
                                            "end": 1445
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1436,
                                          "end": 1446
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
                                            "start": 1447,
                                            "end": 1448
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
                                                "start": 1450,
                                                "end": 1454
                                              },
                                              "typeArguments": null,
                                              "start": 1450,
                                              "end": 1454
                                            },
                                            "start": 1448,
                                            "end": 1454
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1447,
                                          "end": 1455
                                        }
                                      ],
                                      "start": 1434,
                                      "end": 1457
                                    },
                                    "start": 1434,
                                    "end": 1459
                                  },
                                  "start": 1432,
                                  "end": 1459
                                },
                                "start": 1430,
                                "end": 1459
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
                                          "start": 1465,
                                          "end": 1466
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1468,
                                          "end": 1477
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1465,
                                        "end": 1477
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
                                          "start": 1479,
                                          "end": 1480
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1486,
                                            "end": 1490
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1482,
                                          "end": 1492
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1479,
                                        "end": 1492
                                      }
                                    ],
                                    "start": 1463,
                                    "end": 1494
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
                                          "start": 1498,
                                          "end": 1499
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "",
                                          "raw": "''",
                                          "start": 1501,
                                          "end": 1503
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1498,
                                        "end": 1503
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
                                          "start": 1505,
                                          "end": 1506
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1512,
                                            "end": 1519
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1508,
                                          "end": 1521
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1505,
                                        "end": 1521
                                      }
                                    ],
                                    "start": 1496,
                                    "end": 1523
                                  }
                                ],
                                "start": 1462,
                                "end": 1524
                              },
                              "definite": false,
                              "start": 1430,
                              "end": 1524
                            }
                          ],
                          "declare": false,
                          "start": 1426,
                          "end": 1525
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
                                    "start": 1551,
                                    "end": 1554
                                  },
                                  "start": 1549,
                                  "end": 1554
                                },
                                "start": 1543,
                                "end": 1554
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1557,
                                "end": 1561
                              },
                              "definite": false,
                              "start": 1543,
                              "end": 1561
                            }
                          ],
                          "declare": false,
                          "start": 1539,
                          "end": 1562
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
                                "start": 1638,
                                "end": 1640
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
                                          "start": 1646,
                                          "end": 1647
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1649,
                                          "end": 1650
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1646,
                                        "end": 1650
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
                                          "start": 1652,
                                          "end": 1653
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1655,
                                          "end": 1658
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1652,
                                        "end": 1658
                                      }
                                    ],
                                    "start": 1644,
                                    "end": 1660
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
                                          "start": 1664,
                                          "end": 1665
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1667,
                                          "end": 1670
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1664,
                                        "end": 1670
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
                                          "start": 1672,
                                          "end": 1673
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1675,
                                          "end": 1678
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1672,
                                        "end": 1678
                                      }
                                    ],
                                    "start": 1662,
                                    "end": 1680
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
                                          "start": 1684,
                                          "end": 1685
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1687,
                                          "end": 1693
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1684,
                                        "end": 1693
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
                                          "start": 1695,
                                          "end": 1696
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1698,
                                          "end": 1701
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1695,
                                        "end": 1701
                                      }
                                    ],
                                    "start": 1682,
                                    "end": 1703
                                  }
                                ],
                                "start": 1643,
                                "end": 1704
                              },
                              "definite": false,
                              "start": 1638,
                              "end": 1704
                            }
                          ],
                          "declare": false,
                          "start": 1634,
                          "end": 1705
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
                                "start": 1722,
                                "end": 1724
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
                                          "start": 1730,
                                          "end": 1731
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1733,
                                          "end": 1739
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1730,
                                        "end": 1739
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
                                          "start": 1741,
                                          "end": 1742
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1744,
                                          "end": 1747
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1741,
                                        "end": 1747
                                      }
                                    ],
                                    "start": 1728,
                                    "end": 1749
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
                                          "start": 1753,
                                          "end": 1754
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1756,
                                          "end": 1757
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1753,
                                        "end": 1757
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
                                          "start": 1759,
                                          "end": 1760
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1762,
                                          "end": 1765
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1759,
                                        "end": 1765
                                      }
                                    ],
                                    "start": 1751,
                                    "end": 1767
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
                                          "start": 1771,
                                          "end": 1772
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1774,
                                          "end": 1777
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1771,
                                        "end": 1777
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
                                          "start": 1779,
                                          "end": 1780
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1782,
                                          "end": 1785
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1779,
                                        "end": 1785
                                      }
                                    ],
                                    "start": 1769,
                                    "end": 1787
                                  }
                                ],
                                "start": 1727,
                                "end": 1788
                              },
                              "definite": false,
                              "start": 1722,
                              "end": 1788
                            }
                          ],
                          "declare": false,
                          "start": 1718,
                          "end": 1789
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
                                "start": 1806,
                                "end": 1808
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
                                          "start": 1814,
                                          "end": 1815
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1817,
                                          "end": 1818
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1814,
                                        "end": 1818
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
                                          "start": 1820,
                                          "end": 1821
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1823,
                                          "end": 1826
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1820,
                                        "end": 1826
                                      }
                                    ],
                                    "start": 1812,
                                    "end": 1828
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
                                          "start": 1832,
                                          "end": 1833
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1835,
                                          "end": 1841
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1832,
                                        "end": 1841
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
                                          "start": 1843,
                                          "end": 1844
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1846,
                                          "end": 1849
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1843,
                                        "end": 1849
                                      }
                                    ],
                                    "start": 1830,
                                    "end": 1851
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
                                          "start": 1855,
                                          "end": 1856
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1858,
                                          "end": 1861
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1855,
                                        "end": 1861
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
                                          "start": 1863,
                                          "end": 1864
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1866,
                                          "end": 1869
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1863,
                                        "end": 1869
                                      }
                                    ],
                                    "start": 1853,
                                    "end": 1871
                                  }
                                ],
                                "start": 1811,
                                "end": 1872
                              },
                              "definite": false,
                              "start": 1806,
                              "end": 1872
                            }
                          ],
                          "declare": false,
                          "start": 1802,
                          "end": 1873
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
                                      "start": 1901,
                                      "end": 1906
                                    },
                                    "typeArguments": null,
                                    "start": 1901,
                                    "end": 1906
                                  },
                                  "start": 1899,
                                  "end": 1906
                                },
                                "start": 1891,
                                "end": 1906
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1909,
                                "end": 1913
                              },
                              "definite": false,
                              "start": 1891,
                              "end": 1913
                            }
                          ],
                          "declare": false,
                          "start": 1887,
                          "end": 1914
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
                                "start": 1931,
                                "end": 1938
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1945,
                                  "end": 1949
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1941,
                                "end": 1951
                              },
                              "definite": false,
                              "start": 1931,
                              "end": 1951
                            }
                          ],
                          "declare": false,
                          "start": 1927,
                          "end": 1952
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
                                "start": 1969,
                                "end": 1977
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1984,
                                  "end": 1989
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1980,
                                "end": 1991
                              },
                              "definite": false,
                              "start": 1969,
                              "end": 1991
                            }
                          ],
                          "declare": false,
                          "start": 1965,
                          "end": 1992
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
                                "start": 2010,
                                "end": 2012
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
                                    "start": 2016,
                                    "end": 2023
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2025,
                                    "end": 2033
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2035,
                                    "end": 2043
                                  }
                                ],
                                "start": 2015,
                                "end": 2044
                              },
                              "definite": false,
                              "start": 2010,
                              "end": 2044
                            }
                          ],
                          "declare": false,
                          "start": 2006,
                          "end": 2045
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
                                "start": 2062,
                                "end": 2064
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
                                    "start": 2068,
                                    "end": 2076
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2078,
                                    "end": 2085
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2087,
                                    "end": 2095
                                  }
                                ],
                                "start": 2067,
                                "end": 2096
                              },
                              "definite": false,
                              "start": 2062,
                              "end": 2096
                            }
                          ],
                          "declare": false,
                          "start": 2058,
                          "end": 2097
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
                                "start": 2114,
                                "end": 2116
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
                                    "start": 2120,
                                    "end": 2127
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2129,
                                    "end": 2137
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2139,
                                    "end": 2147
                                  }
                                ],
                                "start": 2119,
                                "end": 2148
                              },
                              "definite": false,
                              "start": 2114,
                              "end": 2148
                            }
                          ],
                          "declare": false,
                          "start": 2110,
                          "end": 2149
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
                                "start": 2166,
                                "end": 2168
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
                                    "start": 2172,
                                    "end": 2180
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2182,
                                    "end": 2189
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2191,
                                    "end": 2199
                                  }
                                ],
                                "start": 2171,
                                "end": 2200
                              },
                              "definite": false,
                              "start": 2166,
                              "end": 2200
                            }
                          ],
                          "declare": false,
                          "start": 2162,
                          "end": 2201
                        }
                      ],
                      "start": 432,
                      "end": 2211
                    },
                    "expression": false,
                    "start": 429,
                    "end": 2211
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 421,
                  "end": 2211
                }
              ],
              "start": 169,
              "end": 2217
            },
            "abstract": false,
            "declare": false,
            "start": 161,
            "end": 2217
          }
        ],
        "start": 21,
        "end": 2219
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 2219
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonEmptyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2231,
        "end": 2244
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
              "start": 2261,
              "end": 2266
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
                    "start": 2269,
                    "end": 2270
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2272,
                      "end": 2278
                    },
                    "start": 2270,
                    "end": 2278
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2269,
                  "end": 2279
                }
              ],
              "start": 2267,
              "end": 2281
            },
            "declare": false,
            "start": 2251,
            "end": 2281
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
              "start": 2292,
              "end": 2296
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
                  "start": 2308,
                  "end": 2313
                },
                "typeArguments": null,
                "start": 2308,
                "end": 2313
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
                    "start": 2316,
                    "end": 2317
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2319,
                      "end": 2325
                    },
                    "start": 2317,
                    "end": 2325
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
                  "start": 2316,
                  "end": 2326
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
                    "start": 2327,
                    "end": 2328
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2330,
                      "end": 2336
                    },
                    "start": 2328,
                    "end": 2336
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
                  "start": 2327,
                  "end": 2337
                }
              ],
              "start": 2314,
              "end": 2339
            },
            "abstract": false,
            "declare": false,
            "start": 2286,
            "end": 2339
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
              "start": 2350,
              "end": 2355
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
                  "start": 2367,
                  "end": 2372
                },
                "typeArguments": null,
                "start": 2367,
                "end": 2372
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
                    "start": 2375,
                    "end": 2376
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2378,
                      "end": 2384
                    },
                    "start": 2376,
                    "end": 2384
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
                  "start": 2375,
                  "end": 2385
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
                    "start": 2386,
                    "end": 2387
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2389,
                      "end": 2395
                    },
                    "start": 2387,
                    "end": 2395
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
                  "start": 2386,
                  "end": 2396
                }
              ],
              "start": 2373,
              "end": 2398
            },
            "abstract": false,
            "declare": false,
            "start": 2344,
            "end": 2398
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
              "start": 2409,
              "end": 2416
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 2425,
              "end": 2429
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
                    "start": 2432,
                    "end": 2433
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2435,
                      "end": 2441
                    },
                    "start": 2433,
                    "end": 2441
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
                  "start": 2432,
                  "end": 2442
                }
              ],
              "start": 2430,
              "end": 2444
            },
            "abstract": false,
            "declare": false,
            "start": 2403,
            "end": 2444
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
              "start": 2457,
              "end": 2458
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
                    "start": 2476,
                    "end": 2485
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
                            "start": 2489,
                            "end": 2496
                          },
                          "start": 2487,
                          "end": 2496
                        },
                        "start": 2486,
                        "end": 2496
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
                            "start": 2502,
                            "end": 2509
                          },
                          "start": 2500,
                          "end": 2509
                        },
                        "start": 2498,
                        "end": 2509
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2512,
                        "end": 2518
                      },
                      "start": 2510,
                      "end": 2518
                    },
                    "body": null,
                    "expression": false,
                    "start": 2485,
                    "end": 2519
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2469,
                  "end": 2519
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
                    "start": 2535,
                    "end": 2544
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
                            "start": 2548,
                            "end": 2554
                          },
                          "start": 2546,
                          "end": 2554
                        },
                        "start": 2545,
                        "end": 2554
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
                            "start": 2560,
                            "end": 2567
                          },
                          "start": 2558,
                          "end": 2567
                        },
                        "start": 2556,
                        "end": 2567
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2570,
                        "end": 2576
                      },
                      "start": 2568,
                      "end": 2576
                    },
                    "body": null,
                    "expression": false,
                    "start": 2544,
                    "end": 2577
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2528,
                  "end": 2577
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
                    "start": 2593,
                    "end": 2602
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
                            "start": 2606,
                            "end": 2612
                          },
                          "start": 2604,
                          "end": 2612
                        },
                        "start": 2603,
                        "end": 2612
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
                            "start": 2618,
                            "end": 2625
                          },
                          "start": 2616,
                          "end": 2625
                        },
                        "start": 2614,
                        "end": 2625
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2628,
                        "end": 2634
                      },
                      "start": 2626,
                      "end": 2634
                    },
                    "body": null,
                    "expression": false,
                    "start": 2602,
                    "end": 2635
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2586,
                  "end": 2635
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
                    "start": 2651,
                    "end": 2660
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
                            "start": 2664,
                            "end": 2667
                          },
                          "start": 2662,
                          "end": 2667
                        },
                        "start": 2661,
                        "end": 2667
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
                          "start": 2669,
                          "end": 2670
                        },
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 2673,
                          "end": 2678
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2669,
                        "end": 2678
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2681,
                        "end": 2684
                      },
                      "start": 2679,
                      "end": 2684
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
                            "start": 2694,
                            "end": 2698
                          },
                          "start": 2687,
                          "end": 2699
                        }
                      ],
                      "start": 2685,
                      "end": 2701
                    },
                    "expression": false,
                    "start": 2660,
                    "end": 2701
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2644,
                  "end": 2701
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
                    "start": 2718,
                    "end": 2719
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
                              "start": 2737,
                              "end": 2743
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2745,
                                  "end": 2749
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2750,
                                  "end": 2759
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2745,
                                "end": 2759
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
                                        "start": 2761,
                                        "end": 2762
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2764,
                                        "end": 2765
                                      }
                                    ],
                                    "start": 2760,
                                    "end": 2766
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2767,
                                    "end": 2768
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2760,
                                  "end": 2769
                                }
                              ],
                              "optional": false,
                              "start": 2745,
                              "end": 2770
                            },
                            "start": 2736,
                            "end": 2771
                          },
                          "directive": null,
                          "start": 2736,
                          "end": 2772
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2786,
                              "end": 2792
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2794,
                                  "end": 2798
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2799,
                                  "end": 2808
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2794,
                                "end": 2808
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
                                        "start": 2810,
                                        "end": 2811
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2813,
                                        "end": 2814
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2816,
                                        "end": 2825
                                      }
                                    ],
                                    "start": 2809,
                                    "end": 2826
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2827,
                                    "end": 2828
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2809,
                                  "end": 2829
                                }
                              ],
                              "optional": false,
                              "start": 2794,
                              "end": 2830
                            },
                            "start": 2785,
                            "end": 2831
                          },
                          "directive": null,
                          "start": 2785,
                          "end": 2832
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2846,
                              "end": 2852
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2854,
                                  "end": 2858
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2859,
                                  "end": 2868
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2854,
                                "end": 2868
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
                                        "start": 2870,
                                        "end": 2879
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2881,
                                        "end": 2882
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2884,
                                        "end": 2885
                                      }
                                    ],
                                    "start": 2869,
                                    "end": 2886
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2887,
                                    "end": 2888
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2869,
                                  "end": 2889
                                }
                              ],
                              "optional": false,
                              "start": 2854,
                              "end": 2890
                            },
                            "start": 2845,
                            "end": 2891
                          },
                          "directive": null,
                          "start": 2845,
                          "end": 2892
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2906,
                              "end": 2912
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2914,
                                  "end": 2918
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2919,
                                  "end": 2928
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2914,
                                "end": 2928
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
                                        "start": 2930,
                                        "end": 2934
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2936,
                                        "end": 2937
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2939,
                                        "end": 2940
                                      }
                                    ],
                                    "start": 2929,
                                    "end": 2941
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2942,
                                    "end": 2943
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2929,
                                  "end": 2944
                                }
                              ],
                              "optional": false,
                              "start": 2914,
                              "end": 2945
                            },
                            "start": 2905,
                            "end": 2946
                          },
                          "directive": null,
                          "start": 2905,
                          "end": 2947
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2961,
                              "end": 2967
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2969,
                                  "end": 2973
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2974,
                                  "end": 2983
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2969,
                                "end": 2983
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
                                        "start": 2985,
                                        "end": 2986
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2988,
                                        "end": 2989
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 2991,
                                        "end": 2995
                                      }
                                    ],
                                    "start": 2984,
                                    "end": 2996
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2997,
                                    "end": 2998
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2984,
                                  "end": 2999
                                }
                              ],
                              "optional": false,
                              "start": 2969,
                              "end": 3000
                            },
                            "start": 2960,
                            "end": 3001
                          },
                          "directive": null,
                          "start": 2960,
                          "end": 3002
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3016,
                              "end": 3022
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3024,
                                  "end": 3028
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3029,
                                  "end": 3038
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3024,
                                "end": 3038
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
                                        "start": 3040,
                                        "end": 3049
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 3051,
                                        "end": 3052
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 3054,
                                        "end": 3058
                                      }
                                    ],
                                    "start": 3039,
                                    "end": 3059
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3060,
                                    "end": 3061
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3039,
                                  "end": 3062
                                }
                              ],
                              "optional": false,
                              "start": 3024,
                              "end": 3063
                            },
                            "start": 3015,
                            "end": 3064
                          },
                          "directive": null,
                          "start": 3015,
                          "end": 3065
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3080,
                              "end": 3086
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3088,
                                  "end": 3092
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3093,
                                  "end": 3102
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3088,
                                "end": 3102
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
                                        "start": 3104,
                                        "end": 3106
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3108,
                                        "end": 3111
                                      }
                                    ],
                                    "start": 3103,
                                    "end": 3112
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3113,
                                    "end": 3114
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3103,
                                  "end": 3115
                                }
                              ],
                              "optional": false,
                              "start": 3088,
                              "end": 3116
                            },
                            "start": 3079,
                            "end": 3117
                          },
                          "directive": null,
                          "start": 3079,
                          "end": 3118
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3132,
                              "end": 3138
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3140,
                                  "end": 3144
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3145,
                                  "end": 3154
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3140,
                                "end": 3154
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
                                        "start": 3156,
                                        "end": 3158
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3160,
                                        "end": 3163
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3165,
                                        "end": 3174
                                      }
                                    ],
                                    "start": 3155,
                                    "end": 3175
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3176,
                                    "end": 3177
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3155,
                                  "end": 3178
                                }
                              ],
                              "optional": false,
                              "start": 3140,
                              "end": 3179
                            },
                            "start": 3131,
                            "end": 3180
                          },
                          "directive": null,
                          "start": 3131,
                          "end": 3181
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3195,
                              "end": 3201
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3203,
                                  "end": 3207
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3208,
                                  "end": 3217
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3203,
                                "end": 3217
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
                                        "start": 3219,
                                        "end": 3228
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3230,
                                        "end": 3233
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3235,
                                        "end": 3237
                                      }
                                    ],
                                    "start": 3218,
                                    "end": 3238
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3239,
                                    "end": 3240
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3218,
                                  "end": 3241
                                }
                              ],
                              "optional": false,
                              "start": 3203,
                              "end": 3242
                            },
                            "start": 3194,
                            "end": 3243
                          },
                          "directive": null,
                          "start": 3194,
                          "end": 3244
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3258,
                              "end": 3264
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3266,
                                  "end": 3270
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3271,
                                  "end": 3280
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3266,
                                "end": 3280
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
                                        "start": 3282,
                                        "end": 3286
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3288,
                                        "end": 3291
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3293,
                                        "end": 3295
                                      }
                                    ],
                                    "start": 3281,
                                    "end": 3296
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3297,
                                    "end": 3298
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3281,
                                  "end": 3299
                                }
                              ],
                              "optional": false,
                              "start": 3266,
                              "end": 3300
                            },
                            "start": 3257,
                            "end": 3301
                          },
                          "directive": null,
                          "start": 3257,
                          "end": 3302
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3316,
                              "end": 3322
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3324,
                                  "end": 3328
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3329,
                                  "end": 3338
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3324,
                                "end": 3338
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
                                        "start": 3340,
                                        "end": 3343
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3345,
                                        "end": 3347
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 3349,
                                        "end": 3353
                                      }
                                    ],
                                    "start": 3339,
                                    "end": 3354
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3355,
                                    "end": 3356
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3339,
                                  "end": 3357
                                }
                              ],
                              "optional": false,
                              "start": 3324,
                              "end": 3358
                            },
                            "start": 3315,
                            "end": 3359
                          },
                          "directive": null,
                          "start": 3315,
                          "end": 3360
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3374,
                              "end": 3380
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3382,
                                  "end": 3386
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3387,
                                  "end": 3396
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3382,
                                "end": 3396
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
                                        "start": 3398,
                                        "end": 3407
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3409,
                                        "end": 3411
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 3413,
                                        "end": 3417
                                      }
                                    ],
                                    "start": 3397,
                                    "end": 3418
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3419,
                                    "end": 3420
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3397,
                                  "end": 3421
                                }
                              ],
                              "optional": false,
                              "start": 3382,
                              "end": 3422
                            },
                            "start": 3373,
                            "end": 3423
                          },
                          "directive": null,
                          "start": 3373,
                          "end": 3424
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3439,
                              "end": 3445
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3447,
                                  "end": 3451
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3452,
                                  "end": 3461
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3447,
                                "end": 3461
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
                                              "start": 3464,
                                              "end": 3465
                                            },
                                            {
                                              "type": "Literal",
                                              "value": 4,
                                              "raw": "4",
                                              "start": 3467,
                                              "end": 3468
                                            }
                                          ],
                                          "start": 3463,
                                          "end": 3469
                                        },
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null",
                                              "start": 3472,
                                              "end": 3476
                                            }
                                          ],
                                          "start": 3471,
                                          "end": 3477
                                        }
                                      ],
                                      "start": 3462,
                                      "end": 3478
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 3479,
                                      "end": 3480
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 3462,
                                    "end": 3481
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3482,
                                    "end": 3483
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3462,
                                  "end": 3484
                                }
                              ],
                              "optional": false,
                              "start": 3447,
                              "end": 3485
                            },
                            "start": 3438,
                            "end": 3486
                          },
                          "directive": null,
                          "start": 3438,
                          "end": 3487
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
                                            "start": 3512,
                                            "end": 3513
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 3515,
                                              "end": 3521
                                            },
                                            "start": 3513,
                                            "end": 3521
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3512,
                                          "end": 3522
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
                                            "start": 3523,
                                            "end": 3524
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
                                                "start": 3526,
                                                "end": 3530
                                              },
                                              "typeArguments": null,
                                              "start": 3526,
                                              "end": 3530
                                            },
                                            "start": 3524,
                                            "end": 3530
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3523,
                                          "end": 3531
                                        }
                                      ],
                                      "start": 3510,
                                      "end": 3533
                                    },
                                    "start": 3510,
                                    "end": 3535
                                  },
                                  "start": 3508,
                                  "end": 3535
                                },
                                "start": 3506,
                                "end": 3535
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
                                          "start": 3541,
                                          "end": 3542
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 7,
                                          "raw": "7",
                                          "start": 3544,
                                          "end": 3545
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3541,
                                        "end": 3545
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
                                          "start": 3547,
                                          "end": 3548
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3554,
                                            "end": 3561
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3550,
                                          "end": 3563
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3547,
                                        "end": 3563
                                      }
                                    ],
                                    "start": 3539,
                                    "end": 3565
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
                                          "start": 3569,
                                          "end": 3570
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 5,
                                          "raw": "5",
                                          "start": 3572,
                                          "end": 3573
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3569,
                                        "end": 3573
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
                                          "start": 3575,
                                          "end": 3576
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3582,
                                            "end": 3586
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3578,
                                          "end": 3588
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3575,
                                        "end": 3588
                                      }
                                    ],
                                    "start": 3567,
                                    "end": 3590
                                  }
                                ],
                                "start": 3538,
                                "end": 3591
                              },
                              "definite": false,
                              "start": 3506,
                              "end": 3591
                            }
                          ],
                          "declare": false,
                          "start": 3502,
                          "end": 3592
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
                                            "start": 3615,
                                            "end": 3616
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSBooleanKeyword",
                                              "start": 3618,
                                              "end": 3625
                                            },
                                            "start": 3616,
                                            "end": 3625
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3615,
                                          "end": 3626
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
                                            "start": 3627,
                                            "end": 3628
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
                                                "start": 3630,
                                                "end": 3634
                                              },
                                              "typeArguments": null,
                                              "start": 3630,
                                              "end": 3634
                                            },
                                            "start": 3628,
                                            "end": 3634
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3627,
                                          "end": 3635
                                        }
                                      ],
                                      "start": 3613,
                                      "end": 3637
                                    },
                                    "start": 3613,
                                    "end": 3639
                                  },
                                  "start": 3611,
                                  "end": 3639
                                },
                                "start": 3609,
                                "end": 3639
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
                                          "start": 3645,
                                          "end": 3646
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": true,
                                          "raw": "true",
                                          "start": 3648,
                                          "end": 3652
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3645,
                                        "end": 3652
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
                                          "start": 3654,
                                          "end": 3655
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3661,
                                            "end": 3668
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3657,
                                          "end": 3670
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3654,
                                        "end": 3670
                                      }
                                    ],
                                    "start": 3643,
                                    "end": 3672
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
                                          "start": 3676,
                                          "end": 3677
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": false,
                                          "raw": "false",
                                          "start": 3679,
                                          "end": 3684
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3676,
                                        "end": 3684
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
                                          "start": 3686,
                                          "end": 3687
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3693,
                                            "end": 3697
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3689,
                                          "end": 3699
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3686,
                                        "end": 3699
                                      }
                                    ],
                                    "start": 3674,
                                    "end": 3701
                                  }
                                ],
                                "start": 3642,
                                "end": 3702
                              },
                              "definite": false,
                              "start": 3609,
                              "end": 3702
                            }
                          ],
                          "declare": false,
                          "start": 3605,
                          "end": 3703
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
                                            "start": 3726,
                                            "end": 3727
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 3729,
                                              "end": 3735
                                            },
                                            "start": 3727,
                                            "end": 3735
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3726,
                                          "end": 3736
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
                                            "start": 3737,
                                            "end": 3738
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
                                                "start": 3740,
                                                "end": 3744
                                              },
                                              "typeArguments": null,
                                              "start": 3740,
                                              "end": 3744
                                            },
                                            "start": 3738,
                                            "end": 3744
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3737,
                                          "end": 3745
                                        }
                                      ],
                                      "start": 3724,
                                      "end": 3747
                                    },
                                    "start": 3724,
                                    "end": 3749
                                  },
                                  "start": 3722,
                                  "end": 3749
                                },
                                "start": 3720,
                                "end": 3749
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
                                          "start": 3755,
                                          "end": 3756
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3758,
                                          "end": 3767
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3755,
                                        "end": 3767
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
                                          "start": 3769,
                                          "end": 3770
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3776,
                                            "end": 3780
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3772,
                                          "end": 3782
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3769,
                                        "end": 3782
                                      }
                                    ],
                                    "start": 3753,
                                    "end": 3784
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
                                          "start": 3788,
                                          "end": 3789
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "",
                                          "raw": "''",
                                          "start": 3791,
                                          "end": 3793
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3788,
                                        "end": 3793
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
                                          "start": 3795,
                                          "end": 3796
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3802,
                                            "end": 3809
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3798,
                                          "end": 3811
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3795,
                                        "end": 3811
                                      }
                                    ],
                                    "start": 3786,
                                    "end": 3813
                                  }
                                ],
                                "start": 3752,
                                "end": 3814
                              },
                              "definite": false,
                              "start": 3720,
                              "end": 3814
                            }
                          ],
                          "declare": false,
                          "start": 3716,
                          "end": 3815
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
                                    "start": 3841,
                                    "end": 3844
                                  },
                                  "start": 3839,
                                  "end": 3844
                                },
                                "start": 3833,
                                "end": 3844
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3847,
                                "end": 3851
                              },
                              "definite": false,
                              "start": 3833,
                              "end": 3851
                            }
                          ],
                          "declare": false,
                          "start": 3829,
                          "end": 3852
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
                                "start": 3928,
                                "end": 3930
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
                                          "start": 3936,
                                          "end": 3937
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 3939,
                                          "end": 3940
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3936,
                                        "end": 3940
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
                                          "start": 3942,
                                          "end": 3943
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 3945,
                                          "end": 3948
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3942,
                                        "end": 3948
                                      }
                                    ],
                                    "start": 3934,
                                    "end": 3950
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
                                          "start": 3954,
                                          "end": 3955
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 3957,
                                          "end": 3960
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3954,
                                        "end": 3960
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
                                          "start": 3962,
                                          "end": 3963
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 3965,
                                          "end": 3968
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3962,
                                        "end": 3968
                                      }
                                    ],
                                    "start": 3952,
                                    "end": 3970
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
                                          "start": 3974,
                                          "end": 3975
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3977,
                                          "end": 3983
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3974,
                                        "end": 3983
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
                                          "start": 3985,
                                          "end": 3986
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 3988,
                                          "end": 3991
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3985,
                                        "end": 3991
                                      }
                                    ],
                                    "start": 3972,
                                    "end": 3993
                                  }
                                ],
                                "start": 3933,
                                "end": 3994
                              },
                              "definite": false,
                              "start": 3928,
                              "end": 3994
                            }
                          ],
                          "declare": false,
                          "start": 3924,
                          "end": 3995
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
                                "start": 4012,
                                "end": 4014
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
                                          "start": 4020,
                                          "end": 4021
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4023,
                                          "end": 4029
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4020,
                                        "end": 4029
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
                                          "start": 4031,
                                          "end": 4032
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4034,
                                          "end": 4037
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4031,
                                        "end": 4037
                                      }
                                    ],
                                    "start": 4018,
                                    "end": 4039
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
                                          "start": 4043,
                                          "end": 4044
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 4046,
                                          "end": 4047
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4043,
                                        "end": 4047
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
                                          "start": 4049,
                                          "end": 4050
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4052,
                                          "end": 4055
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4049,
                                        "end": 4055
                                      }
                                    ],
                                    "start": 4041,
                                    "end": 4057
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
                                          "start": 4061,
                                          "end": 4062
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4064,
                                          "end": 4067
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4061,
                                        "end": 4067
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
                                          "start": 4069,
                                          "end": 4070
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4072,
                                          "end": 4075
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4069,
                                        "end": 4075
                                      }
                                    ],
                                    "start": 4059,
                                    "end": 4077
                                  }
                                ],
                                "start": 4017,
                                "end": 4078
                              },
                              "definite": false,
                              "start": 4012,
                              "end": 4078
                            }
                          ],
                          "declare": false,
                          "start": 4008,
                          "end": 4079
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
                                "start": 4096,
                                "end": 4098
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
                                          "start": 4104,
                                          "end": 4105
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 4107,
                                          "end": 4108
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4104,
                                        "end": 4108
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
                                          "start": 4110,
                                          "end": 4111
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4113,
                                          "end": 4116
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4110,
                                        "end": 4116
                                      }
                                    ],
                                    "start": 4102,
                                    "end": 4118
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
                                          "start": 4122,
                                          "end": 4123
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4125,
                                          "end": 4131
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4122,
                                        "end": 4131
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
                                          "start": 4133,
                                          "end": 4134
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4136,
                                          "end": 4139
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4133,
                                        "end": 4139
                                      }
                                    ],
                                    "start": 4120,
                                    "end": 4141
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
                                          "start": 4145,
                                          "end": 4146
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4148,
                                          "end": 4151
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4145,
                                        "end": 4151
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
                                          "start": 4153,
                                          "end": 4154
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4156,
                                          "end": 4159
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4153,
                                        "end": 4159
                                      }
                                    ],
                                    "start": 4143,
                                    "end": 4161
                                  }
                                ],
                                "start": 4101,
                                "end": 4162
                              },
                              "definite": false,
                              "start": 4096,
                              "end": 4162
                            }
                          ],
                          "declare": false,
                          "start": 4092,
                          "end": 4163
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
                                      "start": 4191,
                                      "end": 4196
                                    },
                                    "typeArguments": null,
                                    "start": 4191,
                                    "end": 4196
                                  },
                                  "start": 4189,
                                  "end": 4196
                                },
                                "start": 4181,
                                "end": 4196
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 4199,
                                "end": 4203
                              },
                              "definite": false,
                              "start": 4181,
                              "end": 4203
                            }
                          ],
                          "declare": false,
                          "start": 4177,
                          "end": 4204
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
                                "start": 4221,
                                "end": 4228
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4235,
                                  "end": 4239
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 4231,
                                "end": 4241
                              },
                              "definite": false,
                              "start": 4221,
                              "end": 4241
                            }
                          ],
                          "declare": false,
                          "start": 4217,
                          "end": 4242
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
                                "start": 4259,
                                "end": 4267
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4274,
                                  "end": 4279
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 4270,
                                "end": 4281
                              },
                              "definite": false,
                              "start": 4259,
                              "end": 4281
                            }
                          ],
                          "declare": false,
                          "start": 4255,
                          "end": 4282
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
                                "start": 4300,
                                "end": 4302
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
                                    "start": 4306,
                                    "end": 4313
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4315,
                                    "end": 4323
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4325,
                                    "end": 4333
                                  }
                                ],
                                "start": 4305,
                                "end": 4334
                              },
                              "definite": false,
                              "start": 4300,
                              "end": 4334
                            }
                          ],
                          "declare": false,
                          "start": 4296,
                          "end": 4335
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
                                "start": 4352,
                                "end": 4354
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
                                    "start": 4358,
                                    "end": 4366
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4368,
                                    "end": 4375
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4377,
                                    "end": 4385
                                  }
                                ],
                                "start": 4357,
                                "end": 4386
                              },
                              "definite": false,
                              "start": 4352,
                              "end": 4386
                            }
                          ],
                          "declare": false,
                          "start": 4348,
                          "end": 4387
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
                                "start": 4404,
                                "end": 4406
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
                                    "start": 4410,
                                    "end": 4417
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4419,
                                    "end": 4427
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4429,
                                    "end": 4437
                                  }
                                ],
                                "start": 4409,
                                "end": 4438
                              },
                              "definite": false,
                              "start": 4404,
                              "end": 4438
                            }
                          ],
                          "declare": false,
                          "start": 4400,
                          "end": 4439
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
                                "start": 4456,
                                "end": 4458
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
                                    "start": 4462,
                                    "end": 4470
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4472,
                                    "end": 4479
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4481,
                                    "end": 4489
                                  }
                                ],
                                "start": 4461,
                                "end": 4490
                              },
                              "definite": false,
                              "start": 4456,
                              "end": 4490
                            }
                          ],
                          "declare": false,
                          "start": 4452,
                          "end": 4491
                        }
                      ],
                      "start": 2722,
                      "end": 4501
                    },
                    "expression": false,
                    "start": 2719,
                    "end": 4501
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2711,
                  "end": 4501
                }
              ],
              "start": 2459,
              "end": 4507
            },
            "abstract": false,
            "declare": false,
            "start": 2451,
            "end": 4507
          }
        ],
        "start": 2245,
        "end": 4509
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2221,
      "end": 4509
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4510
}
```
