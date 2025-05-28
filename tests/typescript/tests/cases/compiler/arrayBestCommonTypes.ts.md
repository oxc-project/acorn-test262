__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4504,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 2216,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "decorators": [],
        "name": "EmptyTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 2216,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 24,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 39,
              "decorators": [],
              "name": "iface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 48,
            "end": 79,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 70,
                "end": 75,
                "expression": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 75,
                  "decorators": [],
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 76,
              "end": 79,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 84,
            "end": 116,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 95,
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 107,
                "end": 112,
                "expression": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 112,
                  "decorators": [],
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 113,
              "end": 116,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 121,
            "end": 151,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 127,
              "end": 134,
              "decorators": [],
              "name": "derived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 143,
              "end": 147,
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 148,
              "end": 151,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 158,
            "end": 2214,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 166,
              "end": 2214,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 176,
                  "end": 226,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 192,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 192,
                    "end": 226,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 193,
                        "end": 203,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 194,
                          "end": 203,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 196,
                            "end": 203
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 205,
                        "end": 216,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 207,
                          "end": 216,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 209,
                            "end": 216
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 217,
                      "end": 225,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 219,
                        "end": 225
                      }
                    },
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 235,
                  "end": 284,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 251,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 251,
                    "end": 284,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 252,
                        "end": 261,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 253,
                          "end": 261,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 255,
                            "end": 261
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 263,
                        "end": 274,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 265,
                          "end": 274,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 267,
                            "end": 274
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 275,
                      "end": 283,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 277,
                        "end": 283
                      }
                    },
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 293,
                  "end": 342,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 300,
                    "end": 309,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 309,
                    "end": 342,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 310,
                        "end": 319,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 311,
                          "end": 319,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 313,
                            "end": 319
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 321,
                        "end": 332,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 323,
                          "end": 332,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 325,
                            "end": 332
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 333,
                      "end": 341,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 335,
                        "end": 341
                      }
                    },
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 351,
                  "end": 408,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 367,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 367,
                    "end": 408,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 368,
                        "end": 374,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 369,
                          "end": 374,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 371,
                            "end": 374
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 376,
                        "end": 385,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 376,
                          "end": 377,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 380,
                          "end": 385,
                          "value": false,
                          "raw": "false"
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 386,
                      "end": 391,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 388,
                        "end": 391
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 392,
                      "end": 408,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 394,
                          "end": 406,
                          "argument": {
                            "type": "Literal",
                            "start": 401,
                            "end": 405,
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 418,
                  "end": 2208,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 426,
                    "end": 2208,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 429,
                      "end": 2208,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 443,
                          "end": 479,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 443,
                            "end": 478,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 444,
                              "end": 450
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 452,
                              "end": 477,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 452,
                                "end": 466,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 452,
                                  "end": 456
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 457,
                                  "end": 466,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 467,
                                  "end": 476,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 467,
                                    "end": 473,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 468,
                                        "end": 469,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 471,
                                        "end": 472,
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 474,
                                    "end": 475,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 492,
                          "end": 539,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 492,
                            "end": 538,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 493,
                              "end": 499
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 501,
                              "end": 537,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 501,
                                "end": 515,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 501,
                                  "end": 505
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 506,
                                  "end": 515,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 516,
                                  "end": 536,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 516,
                                    "end": 533,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 517,
                                        "end": 518,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 520,
                                        "end": 521,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 523,
                                        "end": 532,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 534,
                                    "end": 535,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 552,
                          "end": 599,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 552,
                            "end": 598,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 553,
                              "end": 559
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 561,
                              "end": 597,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 561,
                                "end": 575,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 561,
                                  "end": 565
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 566,
                                  "end": 575,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 576,
                                  "end": 596,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 576,
                                    "end": 593,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 577,
                                        "end": 586,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 588,
                                        "end": 589,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 591,
                                        "end": 592,
                                        "value": 4,
                                        "raw": "4"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 594,
                                    "end": 595,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 612,
                          "end": 654,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 612,
                            "end": 653,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 613,
                              "end": 619
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 621,
                              "end": 652,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 621,
                                "end": 635,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 621,
                                  "end": 625
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 626,
                                  "end": 635,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 636,
                                  "end": 651,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 636,
                                    "end": 648,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 637,
                                        "end": 641,
                                        "value": null,
                                        "raw": "null"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 643,
                                        "end": 644,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 646,
                                        "end": 647,
                                        "value": 4,
                                        "raw": "4"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 649,
                                    "end": 650,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 667,
                          "end": 709,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 667,
                            "end": 708,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 668,
                              "end": 674
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 676,
                              "end": 707,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 676,
                                "end": 690,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 676,
                                  "end": 680
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 681,
                                  "end": 690,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 691,
                                  "end": 706,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 691,
                                    "end": 703,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 692,
                                        "end": 693,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 695,
                                        "end": 696,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 698,
                                        "end": 702,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 704,
                                    "end": 705,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 722,
                          "end": 772,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 722,
                            "end": 771,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 723,
                              "end": 729
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 731,
                              "end": 770,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 731,
                                "end": 745,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 731,
                                  "end": 735
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 736,
                                  "end": 745,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 746,
                                  "end": 769,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 746,
                                    "end": 766,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 747,
                                        "end": 756,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 758,
                                        "end": 759,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 761,
                                        "end": 765,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 767,
                                    "end": 768,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 786,
                          "end": 825,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 786,
                            "end": 824,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 787,
                              "end": 793
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 795,
                              "end": 823,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 795,
                                "end": 809,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 795,
                                  "end": 799
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 800,
                                  "end": 809,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 810,
                                  "end": 822,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 810,
                                    "end": 819,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 811,
                                        "end": 813,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 815,
                                        "end": 818,
                                        "value": "q",
                                        "raw": "\"q\""
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 820,
                                    "end": 821,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 838,
                          "end": 888,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 838,
                            "end": 887,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 839,
                              "end": 845
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 847,
                              "end": 886,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 847,
                                "end": 861,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 847,
                                  "end": 851
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 852,
                                  "end": 861,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 862,
                                  "end": 885,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 862,
                                    "end": 882,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 863,
                                        "end": 865,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 867,
                                        "end": 870,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 872,
                                        "end": 881,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 883,
                                    "end": 884,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 901,
                          "end": 951,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 901,
                            "end": 950,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 902,
                              "end": 908
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 910,
                              "end": 949,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 910,
                                "end": 924,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 910,
                                  "end": 914
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 915,
                                  "end": 924,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 925,
                                  "end": 948,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 925,
                                    "end": 945,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 926,
                                        "end": 935,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 937,
                                        "end": 940,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 942,
                                        "end": 944,
                                        "value": "",
                                        "raw": "''"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 946,
                                    "end": 947,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 964,
                          "end": 1009,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 964,
                            "end": 1008,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 965,
                              "end": 971
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 973,
                              "end": 1007,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 973,
                                "end": 987,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 973,
                                  "end": 977
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 978,
                                  "end": 987,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 988,
                                  "end": 1006,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 988,
                                    "end": 1003,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 989,
                                        "end": 993,
                                        "value": null,
                                        "raw": "null"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 995,
                                        "end": 998,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1000,
                                        "end": 1002,
                                        "value": "",
                                        "raw": "''"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 1004,
                                    "end": 1005,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1022,
                          "end": 1067,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 1022,
                            "end": 1066,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1023,
                              "end": 1029
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 1031,
                              "end": 1065,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1031,
                                "end": 1045,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1031,
                                  "end": 1035
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1036,
                                  "end": 1045,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 1046,
                                  "end": 1064,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 1046,
                                    "end": 1061,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 1047,
                                        "end": 1050,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1052,
                                        "end": 1054,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1056,
                                        "end": 1060,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 1062,
                                    "end": 1063,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1080,
                          "end": 1131,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 1080,
                            "end": 1130,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1081,
                              "end": 1087
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 1089,
                              "end": 1129,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1089,
                                "end": 1103,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1089,
                                  "end": 1093
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1094,
                                  "end": 1103,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 1104,
                                  "end": 1128,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 1104,
                                    "end": 1125,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 1105,
                                        "end": 1114,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1116,
                                        "end": 1118,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1120,
                                        "end": 1124,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 1126,
                                    "end": 1127,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1145,
                          "end": 1194,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 1145,
                            "end": 1193,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1146,
                              "end": 1152
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 1154,
                              "end": 1192,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1154,
                                "end": 1168,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1154,
                                  "end": 1158
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1159,
                                  "end": 1168,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 1169,
                                  "end": 1191,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1169,
                                    "end": 1188,
                                    "object": {
                                      "type": "ArrayExpression",
                                      "start": 1169,
                                      "end": 1185,
                                      "elements": [
                                        {
                                          "type": "ArrayExpression",
                                          "start": 1170,
                                          "end": 1176,
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "start": 1171,
                                              "end": 1172,
                                              "value": 3,
                                              "raw": "3"
                                            },
                                            {
                                              "type": "Literal",
                                              "start": 1174,
                                              "end": 1175,
                                              "value": 4,
                                              "raw": "4"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "ArrayExpression",
                                          "start": 1178,
                                          "end": 1184,
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "start": 1179,
                                              "end": 1183,
                                              "value": null,
                                              "raw": "null"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "start": 1186,
                                      "end": 1187,
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    "optional": false,
                                    "computed": true
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 1189,
                                    "end": 1190,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1209,
                          "end": 1299,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1213,
                              "end": 1298,
                              "id": {
                                "type": "Identifier",
                                "start": 1213,
                                "end": 1242,
                                "decorators": [],
                                "name": "t1",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1215,
                                  "end": 1242,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1217,
                                    "end": 1242,
                                    "elementType": {
                                      "type": "TSTypeLiteral",
                                      "start": 1217,
                                      "end": 1240,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1219,
                                          "end": 1229,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1219,
                                            "end": 1220,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1220,
                                            "end": 1228,
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 1222,
                                              "end": 1228
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1230,
                                          "end": 1238,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1230,
                                            "end": 1231,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1231,
                                            "end": 1237,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 1233,
                                              "end": 1237,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1233,
                                                "end": 1237,
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        }
                                      ]
                                    }
                                  }
                                }
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1245,
                                "end": 1298,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1246,
                                    "end": 1272,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1248,
                                        "end": 1252,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1248,
                                          "end": 1249,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1251,
                                          "end": 1252,
                                          "value": 7,
                                          "raw": "7"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1254,
                                        "end": 1270,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1254,
                                          "end": 1255,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1257,
                                          "end": 1270,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1261,
                                            "end": 1268,
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": []
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1274,
                                    "end": 1297,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1276,
                                        "end": 1280,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1276,
                                          "end": 1277,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1279,
                                          "end": 1280,
                                          "value": 5,
                                          "raw": "5"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1282,
                                        "end": 1295,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1282,
                                          "end": 1283,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1285,
                                          "end": 1295,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1289,
                                            "end": 1293,
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": []
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1312,
                          "end": 1410,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1316,
                              "end": 1409,
                              "id": {
                                "type": "Identifier",
                                "start": 1316,
                                "end": 1346,
                                "decorators": [],
                                "name": "t2",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1318,
                                  "end": 1346,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1320,
                                    "end": 1346,
                                    "elementType": {
                                      "type": "TSTypeLiteral",
                                      "start": 1320,
                                      "end": 1344,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1322,
                                          "end": 1333,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1322,
                                            "end": 1323,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1323,
                                            "end": 1332,
                                            "typeAnnotation": {
                                              "type": "TSBooleanKeyword",
                                              "start": 1325,
                                              "end": 1332
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1334,
                                          "end": 1342,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1334,
                                            "end": 1335,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1335,
                                            "end": 1341,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 1337,
                                              "end": 1341,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1337,
                                                "end": 1341,
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        }
                                      ]
                                    }
                                  }
                                }
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1349,
                                "end": 1409,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1350,
                                    "end": 1379,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1352,
                                        "end": 1359,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1352,
                                          "end": 1353,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1355,
                                          "end": 1359,
                                          "value": true,
                                          "raw": "true"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1361,
                                        "end": 1377,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1361,
                                          "end": 1362,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1364,
                                          "end": 1377,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1368,
                                            "end": 1375,
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": []
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1381,
                                    "end": 1408,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1383,
                                        "end": 1391,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1383,
                                          "end": 1384,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1386,
                                          "end": 1391,
                                          "value": false,
                                          "raw": "false"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1393,
                                        "end": 1406,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1393,
                                          "end": 1394,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1396,
                                          "end": 1406,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1400,
                                            "end": 1404,
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": []
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1423,
                          "end": 1522,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1427,
                              "end": 1521,
                              "id": {
                                "type": "Identifier",
                                "start": 1427,
                                "end": 1456,
                                "decorators": [],
                                "name": "t3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1429,
                                  "end": 1456,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1431,
                                    "end": 1456,
                                    "elementType": {
                                      "type": "TSTypeLiteral",
                                      "start": 1431,
                                      "end": 1454,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1433,
                                          "end": 1443,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1433,
                                            "end": 1434,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1434,
                                            "end": 1442,
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 1436,
                                              "end": 1442
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1444,
                                          "end": 1452,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1444,
                                            "end": 1445,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1445,
                                            "end": 1451,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 1447,
                                              "end": 1451,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1447,
                                                "end": 1451,
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        }
                                      ]
                                    }
                                  }
                                }
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1459,
                                "end": 1521,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1460,
                                    "end": 1491,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1462,
                                        "end": 1474,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1462,
                                          "end": 1463,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1465,
                                          "end": 1474,
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1476,
                                        "end": 1489,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1476,
                                          "end": 1477,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1479,
                                          "end": 1489,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1483,
                                            "end": 1487,
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": []
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1493,
                                    "end": 1520,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1495,
                                        "end": 1500,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1495,
                                          "end": 1496,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1498,
                                          "end": 1500,
                                          "value": "",
                                          "raw": "''"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1502,
                                        "end": 1518,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1502,
                                          "end": 1503,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1505,
                                          "end": 1518,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1509,
                                            "end": 1516,
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": []
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1536,
                          "end": 1559,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1540,
                              "end": 1558,
                              "id": {
                                "type": "Identifier",
                                "start": 1540,
                                "end": 1551,
                                "decorators": [],
                                "name": "anyObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1546,
                                  "end": 1551,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1548,
                                    "end": 1551
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "start": 1554,
                                "end": 1558,
                                "value": null,
                                "raw": "null"
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1631,
                          "end": 1702,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1635,
                              "end": 1701,
                              "id": {
                                "type": "Identifier",
                                "start": 1635,
                                "end": 1637,
                                "decorators": [],
                                "name": "a1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1640,
                                "end": 1701,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1641,
                                    "end": 1657,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1643,
                                        "end": 1647,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1643,
                                          "end": 1644,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1646,
                                          "end": 1647,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1649,
                                        "end": 1655,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1649,
                                          "end": 1650,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1652,
                                          "end": 1655,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1659,
                                    "end": 1677,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1661,
                                        "end": 1667,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1661,
                                          "end": 1662,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1664,
                                          "end": 1667,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1669,
                                        "end": 1675,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1669,
                                          "end": 1670,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1672,
                                          "end": 1675,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1679,
                                    "end": 1700,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1681,
                                        "end": 1690,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1681,
                                          "end": 1682,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1684,
                                          "end": 1690,
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1692,
                                        "end": 1698,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1692,
                                          "end": 1693,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1695,
                                          "end": 1698,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1715,
                          "end": 1786,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1719,
                              "end": 1785,
                              "id": {
                                "type": "Identifier",
                                "start": 1719,
                                "end": 1721,
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1724,
                                "end": 1785,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1725,
                                    "end": 1746,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1727,
                                        "end": 1736,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1727,
                                          "end": 1728,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1730,
                                          "end": 1736,
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1738,
                                        "end": 1744,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1738,
                                          "end": 1739,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1741,
                                          "end": 1744,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1748,
                                    "end": 1764,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1750,
                                        "end": 1754,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1750,
                                          "end": 1751,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1753,
                                          "end": 1754,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1756,
                                        "end": 1762,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1756,
                                          "end": 1757,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1759,
                                          "end": 1762,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1766,
                                    "end": 1784,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1768,
                                        "end": 1774,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1768,
                                          "end": 1769,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1771,
                                          "end": 1774,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1776,
                                        "end": 1782,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1776,
                                          "end": 1777,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1779,
                                          "end": 1782,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1799,
                          "end": 1870,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1803,
                              "end": 1869,
                              "id": {
                                "type": "Identifier",
                                "start": 1803,
                                "end": 1805,
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1808,
                                "end": 1869,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1809,
                                    "end": 1825,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1811,
                                        "end": 1815,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1811,
                                          "end": 1812,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1814,
                                          "end": 1815,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1817,
                                        "end": 1823,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1817,
                                          "end": 1818,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1820,
                                          "end": 1823,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1827,
                                    "end": 1848,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1829,
                                        "end": 1838,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1829,
                                          "end": 1830,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1832,
                                          "end": 1838,
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1840,
                                        "end": 1846,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1840,
                                          "end": 1841,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1843,
                                          "end": 1846,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1850,
                                    "end": 1868,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1852,
                                        "end": 1858,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1852,
                                          "end": 1853,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1855,
                                          "end": 1858,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1860,
                                        "end": 1866,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1860,
                                          "end": 1861,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1863,
                                          "end": 1866,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1884,
                          "end": 1911,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1888,
                              "end": 1910,
                              "id": {
                                "type": "Identifier",
                                "start": 1888,
                                "end": 1903,
                                "decorators": [],
                                "name": "ifaceObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1896,
                                  "end": 1903,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1898,
                                    "end": 1903,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1898,
                                      "end": 1903,
                                      "decorators": [],
                                      "name": "iface",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "start": 1906,
                                "end": 1910,
                                "value": null,
                                "raw": "null"
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1924,
                          "end": 1949,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1928,
                              "end": 1948,
                              "id": {
                                "type": "Identifier",
                                "start": 1928,
                                "end": 1935,
                                "decorators": [],
                                "name": "baseObj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 1938,
                                "end": 1948,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1942,
                                  "end": 1946,
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": []
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1962,
                          "end": 1989,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1966,
                              "end": 1988,
                              "id": {
                                "type": "Identifier",
                                "start": 1966,
                                "end": 1974,
                                "decorators": [],
                                "name": "base2Obj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 1977,
                                "end": 1988,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1981,
                                  "end": 1986,
                                  "decorators": [],
                                  "name": "base2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": []
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 2003,
                          "end": 2042,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2007,
                              "end": 2041,
                              "id": {
                                "type": "Identifier",
                                "start": 2007,
                                "end": 2009,
                                "decorators": [],
                                "name": "b1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 2012,
                                "end": 2041,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 2013,
                                    "end": 2020,
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2022,
                                    "end": 2030,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2032,
                                    "end": 2040,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 2055,
                          "end": 2094,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2059,
                              "end": 2093,
                              "id": {
                                "type": "Identifier",
                                "start": 2059,
                                "end": 2061,
                                "decorators": [],
                                "name": "b2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 2064,
                                "end": 2093,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 2065,
                                    "end": 2073,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2075,
                                    "end": 2082,
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2084,
                                    "end": 2092,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 2107,
                          "end": 2146,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2111,
                              "end": 2145,
                              "id": {
                                "type": "Identifier",
                                "start": 2111,
                                "end": 2113,
                                "decorators": [],
                                "name": "b3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 2116,
                                "end": 2145,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 2117,
                                    "end": 2124,
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2126,
                                    "end": 2134,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2136,
                                    "end": 2144,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 2159,
                          "end": 2198,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2163,
                              "end": 2197,
                              "id": {
                                "type": "Identifier",
                                "start": 2163,
                                "end": 2165,
                                "decorators": [],
                                "name": "b4",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 2168,
                                "end": 2197,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 2169,
                                    "end": 2177,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2179,
                                    "end": 2186,
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2188,
                                    "end": 2196,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2218,
      "end": 4503,
      "id": {
        "type": "Identifier",
        "start": 2225,
        "end": 2238,
        "decorators": [],
        "name": "NonEmptyTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2239,
        "end": 4503,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 2245,
            "end": 2275,
            "id": {
              "type": "Identifier",
              "start": 2255,
              "end": 2260,
              "decorators": [],
              "name": "iface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 2261,
              "end": 2275,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2263,
                  "end": 2273,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2263,
                    "end": 2264,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2264,
                    "end": 2272,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2266,
                      "end": 2272
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 2280,
            "end": 2333,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2286,
              "end": 2290,
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 2302,
                "end": 2307,
                "expression": {
                  "type": "Identifier",
                  "start": 2302,
                  "end": 2307,
                  "decorators": [],
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 2308,
              "end": 2333,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2310,
                  "end": 2320,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2310,
                    "end": 2311,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2311,
                    "end": 2319,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2313,
                      "end": 2319
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2321,
                  "end": 2331,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2321,
                    "end": 2322,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2322,
                    "end": 2330,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2324,
                      "end": 2330
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 2338,
            "end": 2392,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2344,
              "end": 2349,
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 2361,
                "end": 2366,
                "expression": {
                  "type": "Identifier",
                  "start": 2361,
                  "end": 2366,
                  "decorators": [],
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 2367,
              "end": 2392,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2369,
                  "end": 2379,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2369,
                    "end": 2370,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2370,
                    "end": 2378,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2372,
                      "end": 2378
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2380,
                  "end": 2390,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2380,
                    "end": 2381,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2381,
                    "end": 2389,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2383,
                      "end": 2389
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 2397,
            "end": 2438,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2403,
              "end": 2410,
              "decorators": [],
              "name": "derived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 2419,
              "end": 2423,
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 2424,
              "end": 2438,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2426,
                  "end": 2436,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2426,
                    "end": 2427,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2427,
                    "end": 2435,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2429,
                      "end": 2435
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 2445,
            "end": 4501,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2451,
              "end": 2452,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 2453,
              "end": 4501,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 2463,
                  "end": 2513,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2470,
                    "end": 2479,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2479,
                    "end": 2513,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2480,
                        "end": 2490,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2481,
                          "end": 2490,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2483,
                            "end": 2490
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2492,
                        "end": 2503,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2494,
                          "end": 2503,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2496,
                            "end": 2503
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2504,
                      "end": 2512,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2506,
                        "end": 2512
                      }
                    },
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2522,
                  "end": 2571,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2529,
                    "end": 2538,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2538,
                    "end": 2571,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2539,
                        "end": 2548,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2540,
                          "end": 2548,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2542,
                            "end": 2548
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2550,
                        "end": 2561,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2552,
                          "end": 2561,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2554,
                            "end": 2561
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2562,
                      "end": 2570,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2564,
                        "end": 2570
                      }
                    },
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2580,
                  "end": 2629,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2587,
                    "end": 2596,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2596,
                    "end": 2629,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2597,
                        "end": 2606,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2598,
                          "end": 2606,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2600,
                            "end": 2606
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2608,
                        "end": 2619,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2610,
                          "end": 2619,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2612,
                            "end": 2619
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2620,
                      "end": 2628,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2622,
                        "end": 2628
                      }
                    },
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2638,
                  "end": 2695,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2645,
                    "end": 2654,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2654,
                    "end": 2695,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2655,
                        "end": 2661,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2656,
                          "end": 2661,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2658,
                            "end": 2661
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 2663,
                        "end": 2672,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2663,
                          "end": 2664,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2667,
                          "end": 2672,
                          "value": false,
                          "raw": "false"
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2673,
                      "end": 2678,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2675,
                        "end": 2678
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 2679,
                      "end": 2695,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2681,
                          "end": 2693,
                          "argument": {
                            "type": "Literal",
                            "start": 2688,
                            "end": 2692,
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2705,
                  "end": 4495,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2712,
                    "end": 2713,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2713,
                    "end": 4495,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2716,
                      "end": 4495,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2730,
                          "end": 2766,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2730,
                            "end": 2765,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2731,
                              "end": 2737
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 2739,
                              "end": 2764,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2739,
                                "end": 2753,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2739,
                                  "end": 2743
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2744,
                                  "end": 2753,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2754,
                                  "end": 2763,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2754,
                                    "end": 2760,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 2755,
                                        "end": 2756,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2758,
                                        "end": 2759,
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 2761,
                                    "end": 2762,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2779,
                          "end": 2826,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2779,
                            "end": 2825,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2780,
                              "end": 2786
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 2788,
                              "end": 2824,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2788,
                                "end": 2802,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2788,
                                  "end": 2792
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2793,
                                  "end": 2802,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2803,
                                  "end": 2823,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2803,
                                    "end": 2820,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 2804,
                                        "end": 2805,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2807,
                                        "end": 2808,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 2810,
                                        "end": 2819,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 2821,
                                    "end": 2822,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2839,
                          "end": 2886,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2839,
                            "end": 2885,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2840,
                              "end": 2846
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 2848,
                              "end": 2884,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2848,
                                "end": 2862,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2848,
                                  "end": 2852
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2853,
                                  "end": 2862,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2863,
                                  "end": 2883,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2863,
                                    "end": 2880,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 2864,
                                        "end": 2873,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2875,
                                        "end": 2876,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2878,
                                        "end": 2879,
                                        "value": 4,
                                        "raw": "4"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 2881,
                                    "end": 2882,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2899,
                          "end": 2941,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2899,
                            "end": 2940,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2900,
                              "end": 2906
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 2908,
                              "end": 2939,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2908,
                                "end": 2922,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2908,
                                  "end": 2912
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2913,
                                  "end": 2922,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2923,
                                  "end": 2938,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2923,
                                    "end": 2935,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 2924,
                                        "end": 2928,
                                        "value": null,
                                        "raw": "null"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2930,
                                        "end": 2931,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2933,
                                        "end": 2934,
                                        "value": 4,
                                        "raw": "4"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 2936,
                                    "end": 2937,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2954,
                          "end": 2996,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2954,
                            "end": 2995,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2955,
                              "end": 2961
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 2963,
                              "end": 2994,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2963,
                                "end": 2977,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2963,
                                  "end": 2967
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2968,
                                  "end": 2977,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2978,
                                  "end": 2993,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2978,
                                    "end": 2990,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 2979,
                                        "end": 2980,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2982,
                                        "end": 2983,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2985,
                                        "end": 2989,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 2991,
                                    "end": 2992,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3009,
                          "end": 3059,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3009,
                            "end": 3058,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3010,
                              "end": 3016
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 3018,
                              "end": 3057,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3018,
                                "end": 3032,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3018,
                                  "end": 3022
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3023,
                                  "end": 3032,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3033,
                                  "end": 3056,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3033,
                                    "end": 3053,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 3034,
                                        "end": 3043,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3045,
                                        "end": 3046,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3048,
                                        "end": 3052,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3054,
                                    "end": 3055,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3073,
                          "end": 3112,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3073,
                            "end": 3111,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3074,
                              "end": 3080
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 3082,
                              "end": 3110,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3082,
                                "end": 3096,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3082,
                                  "end": 3086
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3087,
                                  "end": 3096,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3097,
                                  "end": 3109,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3097,
                                    "end": 3106,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 3098,
                                        "end": 3100,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3102,
                                        "end": 3105,
                                        "value": "q",
                                        "raw": "\"q\""
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3107,
                                    "end": 3108,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3125,
                          "end": 3175,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3125,
                            "end": 3174,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3126,
                              "end": 3132
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 3134,
                              "end": 3173,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3134,
                                "end": 3148,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3134,
                                  "end": 3138
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3139,
                                  "end": 3148,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3149,
                                  "end": 3172,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3149,
                                    "end": 3169,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 3150,
                                        "end": 3152,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3154,
                                        "end": 3157,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 3159,
                                        "end": 3168,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3170,
                                    "end": 3171,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3188,
                          "end": 3238,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3188,
                            "end": 3237,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3189,
                              "end": 3195
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 3197,
                              "end": 3236,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3197,
                                "end": 3211,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3197,
                                  "end": 3201
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3202,
                                  "end": 3211,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3212,
                                  "end": 3235,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3212,
                                    "end": 3232,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 3213,
                                        "end": 3222,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3224,
                                        "end": 3227,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3229,
                                        "end": 3231,
                                        "value": "",
                                        "raw": "''"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3233,
                                    "end": 3234,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3251,
                          "end": 3296,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3251,
                            "end": 3295,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3252,
                              "end": 3258
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 3260,
                              "end": 3294,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3260,
                                "end": 3274,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3260,
                                  "end": 3264
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3265,
                                  "end": 3274,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3275,
                                  "end": 3293,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3275,
                                    "end": 3290,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 3276,
                                        "end": 3280,
                                        "value": null,
                                        "raw": "null"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3282,
                                        "end": 3285,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3287,
                                        "end": 3289,
                                        "value": "",
                                        "raw": "''"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3291,
                                    "end": 3292,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3309,
                          "end": 3354,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3309,
                            "end": 3353,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3310,
                              "end": 3316
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 3318,
                              "end": 3352,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3318,
                                "end": 3332,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3318,
                                  "end": 3322
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3323,
                                  "end": 3332,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3333,
                                  "end": 3351,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3333,
                                    "end": 3348,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 3334,
                                        "end": 3337,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3339,
                                        "end": 3341,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3343,
                                        "end": 3347,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3349,
                                    "end": 3350,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3367,
                          "end": 3418,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3367,
                            "end": 3417,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3368,
                              "end": 3374
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 3376,
                              "end": 3416,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3376,
                                "end": 3390,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3376,
                                  "end": 3380
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3381,
                                  "end": 3390,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3391,
                                  "end": 3415,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3391,
                                    "end": 3412,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 3392,
                                        "end": 3401,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3403,
                                        "end": 3405,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3407,
                                        "end": 3411,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3413,
                                    "end": 3414,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3432,
                          "end": 3481,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3432,
                            "end": 3480,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3433,
                              "end": 3439
                            },
                            "expression": {
                              "type": "CallExpression",
                              "start": 3441,
                              "end": 3479,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3441,
                                "end": 3455,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3441,
                                  "end": 3445
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3446,
                                  "end": 3455,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3456,
                                  "end": 3478,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 3456,
                                    "end": 3475,
                                    "object": {
                                      "type": "ArrayExpression",
                                      "start": 3456,
                                      "end": 3472,
                                      "elements": [
                                        {
                                          "type": "ArrayExpression",
                                          "start": 3457,
                                          "end": 3463,
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "start": 3458,
                                              "end": 3459,
                                              "value": 3,
                                              "raw": "3"
                                            },
                                            {
                                              "type": "Literal",
                                              "start": 3461,
                                              "end": 3462,
                                              "value": 4,
                                              "raw": "4"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "ArrayExpression",
                                          "start": 3465,
                                          "end": 3471,
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "start": 3466,
                                              "end": 3470,
                                              "value": null,
                                              "raw": "null"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "start": 3473,
                                      "end": 3474,
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    "optional": false,
                                    "computed": true
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3476,
                                    "end": 3477,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 3496,
                          "end": 3586,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3500,
                              "end": 3585,
                              "id": {
                                "type": "Identifier",
                                "start": 3500,
                                "end": 3529,
                                "decorators": [],
                                "name": "t1",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3502,
                                  "end": 3529,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 3504,
                                    "end": 3529,
                                    "elementType": {
                                      "type": "TSTypeLiteral",
                                      "start": 3504,
                                      "end": 3527,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3506,
                                          "end": 3516,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3506,
                                            "end": 3507,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3507,
                                            "end": 3515,
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 3509,
                                              "end": 3515
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3517,
                                          "end": 3525,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3517,
                                            "end": 3518,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3518,
                                            "end": 3524,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 3520,
                                              "end": 3524,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 3520,
                                                "end": 3524,
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        }
                                      ]
                                    }
                                  }
                                }
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 3532,
                                "end": 3585,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3533,
                                    "end": 3559,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3535,
                                        "end": 3539,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3535,
                                          "end": 3536,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3538,
                                          "end": 3539,
                                          "value": 7,
                                          "raw": "7"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3541,
                                        "end": 3557,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3541,
                                          "end": 3542,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3544,
                                          "end": 3557,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3548,
                                            "end": 3555,
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": []
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3561,
                                    "end": 3584,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3563,
                                        "end": 3567,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3563,
                                          "end": 3564,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3566,
                                          "end": 3567,
                                          "value": 5,
                                          "raw": "5"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3569,
                                        "end": 3582,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3569,
                                          "end": 3570,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3572,
                                          "end": 3582,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3576,
                                            "end": 3580,
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": []
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 3599,
                          "end": 3697,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3603,
                              "end": 3696,
                              "id": {
                                "type": "Identifier",
                                "start": 3603,
                                "end": 3633,
                                "decorators": [],
                                "name": "t2",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3605,
                                  "end": 3633,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 3607,
                                    "end": 3633,
                                    "elementType": {
                                      "type": "TSTypeLiteral",
                                      "start": 3607,
                                      "end": 3631,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3609,
                                          "end": 3620,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3609,
                                            "end": 3610,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3610,
                                            "end": 3619,
                                            "typeAnnotation": {
                                              "type": "TSBooleanKeyword",
                                              "start": 3612,
                                              "end": 3619
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3621,
                                          "end": 3629,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3621,
                                            "end": 3622,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3622,
                                            "end": 3628,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 3624,
                                              "end": 3628,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 3624,
                                                "end": 3628,
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        }
                                      ]
                                    }
                                  }
                                }
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 3636,
                                "end": 3696,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3637,
                                    "end": 3666,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3639,
                                        "end": 3646,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3639,
                                          "end": 3640,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3642,
                                          "end": 3646,
                                          "value": true,
                                          "raw": "true"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3648,
                                        "end": 3664,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3648,
                                          "end": 3649,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3651,
                                          "end": 3664,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3655,
                                            "end": 3662,
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": []
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3668,
                                    "end": 3695,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3670,
                                        "end": 3678,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3670,
                                          "end": 3671,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3673,
                                          "end": 3678,
                                          "value": false,
                                          "raw": "false"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3680,
                                        "end": 3693,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3680,
                                          "end": 3681,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3683,
                                          "end": 3693,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3687,
                                            "end": 3691,
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": []
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 3710,
                          "end": 3809,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3714,
                              "end": 3808,
                              "id": {
                                "type": "Identifier",
                                "start": 3714,
                                "end": 3743,
                                "decorators": [],
                                "name": "t3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3716,
                                  "end": 3743,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 3718,
                                    "end": 3743,
                                    "elementType": {
                                      "type": "TSTypeLiteral",
                                      "start": 3718,
                                      "end": 3741,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3720,
                                          "end": 3730,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3720,
                                            "end": 3721,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3721,
                                            "end": 3729,
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 3723,
                                              "end": 3729
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3731,
                                          "end": 3739,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3731,
                                            "end": 3732,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3732,
                                            "end": 3738,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 3734,
                                              "end": 3738,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 3734,
                                                "end": 3738,
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        }
                                      ]
                                    }
                                  }
                                }
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 3746,
                                "end": 3808,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3747,
                                    "end": 3778,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3749,
                                        "end": 3761,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3749,
                                          "end": 3750,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 3752,
                                          "end": 3761,
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3763,
                                        "end": 3776,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3763,
                                          "end": 3764,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3766,
                                          "end": 3776,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3770,
                                            "end": 3774,
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": []
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3780,
                                    "end": 3807,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3782,
                                        "end": 3787,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3782,
                                          "end": 3783,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3785,
                                          "end": 3787,
                                          "value": "",
                                          "raw": "''"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3789,
                                        "end": 3805,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3789,
                                          "end": 3790,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3792,
                                          "end": 3805,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3796,
                                            "end": 3803,
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": []
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 3823,
                          "end": 3846,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3827,
                              "end": 3845,
                              "id": {
                                "type": "Identifier",
                                "start": 3827,
                                "end": 3838,
                                "decorators": [],
                                "name": "anyObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3833,
                                  "end": 3838,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3835,
                                    "end": 3838
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "start": 3841,
                                "end": 3845,
                                "value": null,
                                "raw": "null"
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 3918,
                          "end": 3989,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3922,
                              "end": 3988,
                              "id": {
                                "type": "Identifier",
                                "start": 3922,
                                "end": 3924,
                                "decorators": [],
                                "name": "a1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 3927,
                                "end": 3988,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3928,
                                    "end": 3944,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3930,
                                        "end": 3934,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3930,
                                          "end": 3931,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3933,
                                          "end": 3934,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3936,
                                        "end": 3942,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3936,
                                          "end": 3937,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3939,
                                          "end": 3942,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3946,
                                    "end": 3964,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3948,
                                        "end": 3954,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3948,
                                          "end": 3949,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3951,
                                          "end": 3954,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3956,
                                        "end": 3962,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3956,
                                          "end": 3957,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3959,
                                          "end": 3962,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3966,
                                    "end": 3987,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3968,
                                        "end": 3977,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3968,
                                          "end": 3969,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 3971,
                                          "end": 3977,
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3979,
                                        "end": 3985,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3979,
                                          "end": 3980,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3982,
                                          "end": 3985,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4002,
                          "end": 4073,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4006,
                              "end": 4072,
                              "id": {
                                "type": "Identifier",
                                "start": 4006,
                                "end": 4008,
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 4011,
                                "end": 4072,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4012,
                                    "end": 4033,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4014,
                                        "end": 4023,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4014,
                                          "end": 4015,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 4017,
                                          "end": 4023,
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4025,
                                        "end": 4031,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4025,
                                          "end": 4026,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4028,
                                          "end": 4031,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4035,
                                    "end": 4051,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4037,
                                        "end": 4041,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4037,
                                          "end": 4038,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4040,
                                          "end": 4041,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4043,
                                        "end": 4049,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4043,
                                          "end": 4044,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4046,
                                          "end": 4049,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4053,
                                    "end": 4071,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4055,
                                        "end": 4061,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4055,
                                          "end": 4056,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4058,
                                          "end": 4061,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4063,
                                        "end": 4069,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4063,
                                          "end": 4064,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4066,
                                          "end": 4069,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4086,
                          "end": 4157,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4090,
                              "end": 4156,
                              "id": {
                                "type": "Identifier",
                                "start": 4090,
                                "end": 4092,
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 4095,
                                "end": 4156,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4096,
                                    "end": 4112,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4098,
                                        "end": 4102,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4098,
                                          "end": 4099,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4101,
                                          "end": 4102,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4104,
                                        "end": 4110,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4104,
                                          "end": 4105,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4107,
                                          "end": 4110,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4114,
                                    "end": 4135,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4116,
                                        "end": 4125,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4116,
                                          "end": 4117,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 4119,
                                          "end": 4125,
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4127,
                                        "end": 4133,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4127,
                                          "end": 4128,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4130,
                                          "end": 4133,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4137,
                                    "end": 4155,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4139,
                                        "end": 4145,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4139,
                                          "end": 4140,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4142,
                                          "end": 4145,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4147,
                                        "end": 4153,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4147,
                                          "end": 4148,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4150,
                                          "end": 4153,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4171,
                          "end": 4198,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4175,
                              "end": 4197,
                              "id": {
                                "type": "Identifier",
                                "start": 4175,
                                "end": 4190,
                                "decorators": [],
                                "name": "ifaceObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4183,
                                  "end": 4190,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 4185,
                                    "end": 4190,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 4185,
                                      "end": 4190,
                                      "decorators": [],
                                      "name": "iface",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "start": 4193,
                                "end": 4197,
                                "value": null,
                                "raw": "null"
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4211,
                          "end": 4236,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4215,
                              "end": 4235,
                              "id": {
                                "type": "Identifier",
                                "start": 4215,
                                "end": 4222,
                                "decorators": [],
                                "name": "baseObj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 4225,
                                "end": 4235,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 4229,
                                  "end": 4233,
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": []
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4249,
                          "end": 4276,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4253,
                              "end": 4275,
                              "id": {
                                "type": "Identifier",
                                "start": 4253,
                                "end": 4261,
                                "decorators": [],
                                "name": "base2Obj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 4264,
                                "end": 4275,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 4268,
                                  "end": 4273,
                                  "decorators": [],
                                  "name": "base2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": []
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4290,
                          "end": 4329,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4294,
                              "end": 4328,
                              "id": {
                                "type": "Identifier",
                                "start": 4294,
                                "end": 4296,
                                "decorators": [],
                                "name": "b1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 4299,
                                "end": 4328,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 4300,
                                    "end": 4307,
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4309,
                                    "end": 4317,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4319,
                                    "end": 4327,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4342,
                          "end": 4381,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4346,
                              "end": 4380,
                              "id": {
                                "type": "Identifier",
                                "start": 4346,
                                "end": 4348,
                                "decorators": [],
                                "name": "b2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 4351,
                                "end": 4380,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 4352,
                                    "end": 4360,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4362,
                                    "end": 4369,
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4371,
                                    "end": 4379,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4394,
                          "end": 4433,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4398,
                              "end": 4432,
                              "id": {
                                "type": "Identifier",
                                "start": 4398,
                                "end": 4400,
                                "decorators": [],
                                "name": "b3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 4403,
                                "end": 4432,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 4404,
                                    "end": 4411,
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4413,
                                    "end": 4421,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4423,
                                    "end": 4431,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4446,
                          "end": 4485,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4450,
                              "end": 4484,
                              "id": {
                                "type": "Identifier",
                                "start": 4450,
                                "end": 4452,
                                "decorators": [],
                                "name": "b4",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 4455,
                                "end": 4484,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 4456,
                                    "end": 4464,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4466,
                                    "end": 4473,
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4475,
                                    "end": 4483,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
