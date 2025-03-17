__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 4506,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 1,
      "end": 2217,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 18,
        "name": "EmptyTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 2217,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 25,
            "end": 44,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 40,
              "name": "iface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 41,
              "end": 44,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 49,
            "end": 80,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 59,
              "name": "base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 77,
              "end": 80,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 71,
                "end": 76,
                "expression": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 76,
                  "name": "iface",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 85,
            "end": 117,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 96,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 114,
              "end": 117,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 108,
                "end": 113,
                "expression": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 113,
                  "name": "iface",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 122,
            "end": 152,
            "id": {
              "type": "Identifier",
              "start": 128,
              "end": 135,
              "name": "derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 144,
              "end": 148,
              "name": "base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 149,
              "end": 152,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 159,
            "end": 2215,
            "id": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 167,
              "end": 2215,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 177,
                  "end": 227,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 193,
                    "name": "voidIfAny",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 193,
                    "end": 227,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 194,
                        "end": 204,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 195,
                          "end": 204,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 197,
                            "end": 204
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 206,
                        "end": 217,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 208,
                          "end": 217,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 210,
                            "end": 217
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 218,
                      "end": 226,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 220,
                        "end": 226
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 236,
                  "end": 285,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 252,
                    "name": "voidIfAny",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 252,
                    "end": 285,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 253,
                        "end": 262,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 254,
                          "end": 262,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 256,
                            "end": 262
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 264,
                        "end": 275,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 266,
                          "end": 275,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 268,
                            "end": 275
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 276,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 278,
                        "end": 284
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 294,
                  "end": 343,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 310,
                    "name": "voidIfAny",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 310,
                    "end": 343,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 311,
                        "end": 320,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 312,
                          "end": 320,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 314,
                            "end": 320
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 322,
                        "end": 333,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 324,
                          "end": 333,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 326,
                            "end": 333
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 334,
                      "end": 342,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 336,
                        "end": 342
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 352,
                  "end": 409,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 368,
                    "name": "voidIfAny",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 368,
                    "end": 409,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 369,
                        "end": 375,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 370,
                          "end": 375,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 372,
                            "end": 375
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 377,
                        "end": 386,
                        "left": {
                          "type": "Identifier",
                          "start": 377,
                          "end": 378,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 381,
                          "end": 386,
                          "value": false,
                          "raw": "false"
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 393,
                      "end": 409,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 395,
                          "end": 407,
                          "argument": {
                            "type": "Literal",
                            "start": 402,
                            "end": 406,
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 387,
                      "end": 392,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 389,
                        "end": 392
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 419,
                  "end": 2209,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 427,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 427,
                    "end": 2209,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 430,
                      "end": 2209,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 444,
                          "end": 480,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 444,
                            "end": 479,
                            "expression": {
                              "type": "CallExpression",
                              "start": 453,
                              "end": 478,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 453,
                                "end": 467,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 453,
                                  "end": 457
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 458,
                                  "end": 467,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 468,
                                  "end": 477,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 468,
                                    "end": 474,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 469,
                                        "end": 470,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 472,
                                        "end": 473,
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 475,
                                    "end": 476,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 445,
                              "end": 451
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 493,
                          "end": 540,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 493,
                            "end": 539,
                            "expression": {
                              "type": "CallExpression",
                              "start": 502,
                              "end": 538,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 502,
                                "end": 516,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 502,
                                  "end": 506
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 507,
                                  "end": 516,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 517,
                                  "end": 537,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 517,
                                    "end": 534,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 518,
                                        "end": 519,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 521,
                                        "end": 522,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 524,
                                        "end": 533,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 535,
                                    "end": 536,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 494,
                              "end": 500
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 553,
                          "end": 600,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 553,
                            "end": 599,
                            "expression": {
                              "type": "CallExpression",
                              "start": 562,
                              "end": 598,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 562,
                                "end": 576,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 562,
                                  "end": 566
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 567,
                                  "end": 576,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 577,
                                  "end": 597,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 577,
                                    "end": 594,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 578,
                                        "end": 587,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 589,
                                        "end": 590,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 592,
                                        "end": 593,
                                        "value": 4,
                                        "raw": "4"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 595,
                                    "end": 596,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 554,
                              "end": 560
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 613,
                          "end": 655,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 613,
                            "end": 654,
                            "expression": {
                              "type": "CallExpression",
                              "start": 622,
                              "end": 653,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 622,
                                "end": 636,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 622,
                                  "end": 626
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 627,
                                  "end": 636,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 637,
                                  "end": 652,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 637,
                                    "end": 649,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 638,
                                        "end": 642,
                                        "value": null,
                                        "raw": "null"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 644,
                                        "end": 645,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 647,
                                        "end": 648,
                                        "value": 4,
                                        "raw": "4"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 650,
                                    "end": 651,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 614,
                              "end": 620
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 668,
                          "end": 710,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 668,
                            "end": 709,
                            "expression": {
                              "type": "CallExpression",
                              "start": 677,
                              "end": 708,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 677,
                                "end": 691,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 677,
                                  "end": 681
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 682,
                                  "end": 691,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 692,
                                  "end": 707,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 692,
                                    "end": 704,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 693,
                                        "end": 694,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 696,
                                        "end": 697,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 699,
                                        "end": 703,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 705,
                                    "end": 706,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 669,
                              "end": 675
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 723,
                          "end": 773,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 723,
                            "end": 772,
                            "expression": {
                              "type": "CallExpression",
                              "start": 732,
                              "end": 771,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 732,
                                "end": 746,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 732,
                                  "end": 736
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 737,
                                  "end": 746,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 747,
                                  "end": 770,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 747,
                                    "end": 767,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 748,
                                        "end": 757,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 759,
                                        "end": 760,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 762,
                                        "end": 766,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 768,
                                    "end": 769,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 724,
                              "end": 730
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 787,
                          "end": 826,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 787,
                            "end": 825,
                            "expression": {
                              "type": "CallExpression",
                              "start": 796,
                              "end": 824,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 796,
                                "end": 810,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 796,
                                  "end": 800
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 801,
                                  "end": 810,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 811,
                                  "end": 823,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 811,
                                    "end": 820,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 812,
                                        "end": 814,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 816,
                                        "end": 819,
                                        "value": "q",
                                        "raw": "\"q\""
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 821,
                                    "end": 822,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 788,
                              "end": 794
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 839,
                          "end": 889,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 839,
                            "end": 888,
                            "expression": {
                              "type": "CallExpression",
                              "start": 848,
                              "end": 887,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 848,
                                "end": 862,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 848,
                                  "end": 852
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 853,
                                  "end": 862,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 863,
                                  "end": 886,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 863,
                                    "end": 883,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 864,
                                        "end": 866,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 868,
                                        "end": 871,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 873,
                                        "end": 882,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 884,
                                    "end": 885,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 840,
                              "end": 846
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 902,
                          "end": 952,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 902,
                            "end": 951,
                            "expression": {
                              "type": "CallExpression",
                              "start": 911,
                              "end": 950,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 911,
                                "end": 925,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 911,
                                  "end": 915
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 916,
                                  "end": 925,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 926,
                                  "end": 949,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 926,
                                    "end": 946,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 927,
                                        "end": 936,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 938,
                                        "end": 941,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 943,
                                        "end": 945,
                                        "value": "",
                                        "raw": "''"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 947,
                                    "end": 948,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 903,
                              "end": 909
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 965,
                          "end": 1010,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 965,
                            "end": 1009,
                            "expression": {
                              "type": "CallExpression",
                              "start": 974,
                              "end": 1008,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 974,
                                "end": 988,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 974,
                                  "end": 978
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 979,
                                  "end": 988,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 989,
                                  "end": 1007,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 989,
                                    "end": 1004,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 990,
                                        "end": 994,
                                        "value": null,
                                        "raw": "null"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 996,
                                        "end": 999,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1001,
                                        "end": 1003,
                                        "value": "",
                                        "raw": "''"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 1005,
                                    "end": 1006,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 966,
                              "end": 972
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1023,
                          "end": 1068,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 1023,
                            "end": 1067,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1032,
                              "end": 1066,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1032,
                                "end": 1046,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1032,
                                  "end": 1036
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1037,
                                  "end": 1046,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 1047,
                                  "end": 1065,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 1047,
                                    "end": 1062,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 1048,
                                        "end": 1051,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1053,
                                        "end": 1055,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1057,
                                        "end": 1061,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 1063,
                                    "end": 1064,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1024,
                              "end": 1030
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1081,
                          "end": 1132,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 1081,
                            "end": 1131,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1090,
                              "end": 1130,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1090,
                                "end": 1104,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1090,
                                  "end": 1094
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1095,
                                  "end": 1104,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 1105,
                                  "end": 1129,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 1105,
                                    "end": 1126,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 1106,
                                        "end": 1115,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1117,
                                        "end": 1119,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1121,
                                        "end": 1125,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 1127,
                                    "end": 1128,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1082,
                              "end": 1088
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1146,
                          "end": 1195,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 1146,
                            "end": 1194,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1155,
                              "end": 1193,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1155,
                                "end": 1169,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1155,
                                  "end": 1159
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1160,
                                  "end": 1169,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 1170,
                                  "end": 1192,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1170,
                                    "end": 1189,
                                    "object": {
                                      "type": "ArrayExpression",
                                      "start": 1170,
                                      "end": 1186,
                                      "elements": [
                                        {
                                          "type": "ArrayExpression",
                                          "start": 1171,
                                          "end": 1177,
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "start": 1172,
                                              "end": 1173,
                                              "value": 3,
                                              "raw": "3"
                                            },
                                            {
                                              "type": "Literal",
                                              "start": 1175,
                                              "end": 1176,
                                              "value": 4,
                                              "raw": "4"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "ArrayExpression",
                                          "start": 1179,
                                          "end": 1185,
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "start": 1180,
                                              "end": 1184,
                                              "value": null,
                                              "raw": "null"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "start": 1187,
                                      "end": 1188,
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    "computed": true,
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 1190,
                                    "end": 1191,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1147,
                              "end": 1153
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1210,
                          "end": 1300,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1214,
                              "end": 1299,
                              "id": {
                                "type": "Identifier",
                                "start": 1214,
                                "end": 1243,
                                "name": "t1",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1216,
                                  "end": 1243,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1218,
                                    "end": 1243,
                                    "elementType": {
                                      "type": "TSTypeLiteral",
                                      "start": 1218,
                                      "end": 1241,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1220,
                                          "end": 1230,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1220,
                                            "end": 1221,
                                            "name": "x",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1221,
                                            "end": 1229,
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 1223,
                                              "end": 1229
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1231,
                                          "end": 1239,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1231,
                                            "end": 1232,
                                            "name": "y",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1232,
                                            "end": 1238,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 1234,
                                              "end": 1238,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1234,
                                                "end": 1238,
                                                "name": "base",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
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
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1246,
                                "end": 1299,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1247,
                                    "end": 1273,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1249,
                                        "end": 1253,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1249,
                                          "end": 1250,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1252,
                                          "end": 1253,
                                          "value": 7,
                                          "raw": "7"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1255,
                                        "end": 1271,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1255,
                                          "end": 1256,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1258,
                                          "end": 1271,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1262,
                                            "end": 1269,
                                            "name": "derived",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "typeArguments": null
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1275,
                                    "end": 1298,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1277,
                                        "end": 1281,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1277,
                                          "end": 1278,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1280,
                                          "end": 1281,
                                          "value": 5,
                                          "raw": "5"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1283,
                                        "end": 1296,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1283,
                                          "end": 1284,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1286,
                                          "end": 1296,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1290,
                                            "end": 1294,
                                            "name": "base",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "typeArguments": null
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1313,
                          "end": 1411,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1317,
                              "end": 1410,
                              "id": {
                                "type": "Identifier",
                                "start": 1317,
                                "end": 1347,
                                "name": "t2",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1319,
                                  "end": 1347,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1321,
                                    "end": 1347,
                                    "elementType": {
                                      "type": "TSTypeLiteral",
                                      "start": 1321,
                                      "end": 1345,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1323,
                                          "end": 1334,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1323,
                                            "end": 1324,
                                            "name": "x",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1324,
                                            "end": 1333,
                                            "typeAnnotation": {
                                              "type": "TSBooleanKeyword",
                                              "start": 1326,
                                              "end": 1333
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1335,
                                          "end": 1343,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1335,
                                            "end": 1336,
                                            "name": "y",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1336,
                                            "end": 1342,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 1338,
                                              "end": 1342,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1338,
                                                "end": 1342,
                                                "name": "base",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
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
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1350,
                                "end": 1410,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1351,
                                    "end": 1380,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1353,
                                        "end": 1360,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1353,
                                          "end": 1354,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1356,
                                          "end": 1360,
                                          "value": true,
                                          "raw": "true"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1362,
                                        "end": 1378,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1362,
                                          "end": 1363,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1365,
                                          "end": 1378,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1369,
                                            "end": 1376,
                                            "name": "derived",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "typeArguments": null
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1382,
                                    "end": 1409,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1384,
                                        "end": 1392,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1384,
                                          "end": 1385,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1387,
                                          "end": 1392,
                                          "value": false,
                                          "raw": "false"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1394,
                                        "end": 1407,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1394,
                                          "end": 1395,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1397,
                                          "end": 1407,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1401,
                                            "end": 1405,
                                            "name": "base",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "typeArguments": null
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1424,
                          "end": 1523,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1428,
                              "end": 1522,
                              "id": {
                                "type": "Identifier",
                                "start": 1428,
                                "end": 1457,
                                "name": "t3",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1430,
                                  "end": 1457,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1432,
                                    "end": 1457,
                                    "elementType": {
                                      "type": "TSTypeLiteral",
                                      "start": 1432,
                                      "end": 1455,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1434,
                                          "end": 1444,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1434,
                                            "end": 1435,
                                            "name": "x",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1435,
                                            "end": 1443,
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 1437,
                                              "end": 1443
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1445,
                                          "end": 1453,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1445,
                                            "end": 1446,
                                            "name": "y",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1446,
                                            "end": 1452,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 1448,
                                              "end": 1452,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1448,
                                                "end": 1452,
                                                "name": "base",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
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
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1460,
                                "end": 1522,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1461,
                                    "end": 1492,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1463,
                                        "end": 1475,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1463,
                                          "end": 1464,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1466,
                                          "end": 1475,
                                          "name": "undefined",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1477,
                                        "end": 1490,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1477,
                                          "end": 1478,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1480,
                                          "end": 1490,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1484,
                                            "end": 1488,
                                            "name": "base",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "typeArguments": null
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1494,
                                    "end": 1521,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1496,
                                        "end": 1501,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1496,
                                          "end": 1497,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1499,
                                          "end": 1501,
                                          "value": "",
                                          "raw": "''"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1503,
                                        "end": 1519,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1503,
                                          "end": 1504,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1506,
                                          "end": 1519,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1510,
                                            "end": 1517,
                                            "name": "derived",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "typeArguments": null
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1537,
                          "end": 1560,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1541,
                              "end": 1559,
                              "id": {
                                "type": "Identifier",
                                "start": 1541,
                                "end": 1552,
                                "name": "anyObj",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1547,
                                  "end": 1552,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1549,
                                    "end": 1552
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 1555,
                                "end": 1559,
                                "value": null,
                                "raw": "null"
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1632,
                          "end": 1703,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1636,
                              "end": 1702,
                              "id": {
                                "type": "Identifier",
                                "start": 1636,
                                "end": 1638,
                                "name": "a1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1641,
                                "end": 1702,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1642,
                                    "end": 1658,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1644,
                                        "end": 1648,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1644,
                                          "end": 1645,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1647,
                                          "end": 1648,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1650,
                                        "end": 1656,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1650,
                                          "end": 1651,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1653,
                                          "end": 1656,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1660,
                                    "end": 1678,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1662,
                                        "end": 1668,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1662,
                                          "end": 1663,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1665,
                                          "end": 1668,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1670,
                                        "end": 1676,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1670,
                                          "end": 1671,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1673,
                                          "end": 1676,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1680,
                                    "end": 1701,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1682,
                                        "end": 1691,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1682,
                                          "end": 1683,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1685,
                                          "end": 1691,
                                          "name": "anyObj",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1693,
                                        "end": 1699,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1693,
                                          "end": 1694,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1696,
                                          "end": 1699,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1716,
                          "end": 1787,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1720,
                              "end": 1786,
                              "id": {
                                "type": "Identifier",
                                "start": 1720,
                                "end": 1722,
                                "name": "a2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1725,
                                "end": 1786,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1726,
                                    "end": 1747,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1728,
                                        "end": 1737,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1728,
                                          "end": 1729,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1731,
                                          "end": 1737,
                                          "name": "anyObj",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1739,
                                        "end": 1745,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1739,
                                          "end": 1740,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1742,
                                          "end": 1745,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1749,
                                    "end": 1765,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1751,
                                        "end": 1755,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1751,
                                          "end": 1752,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1754,
                                          "end": 1755,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1757,
                                        "end": 1763,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1757,
                                          "end": 1758,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1760,
                                          "end": 1763,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1767,
                                    "end": 1785,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1769,
                                        "end": 1775,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1769,
                                          "end": 1770,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1772,
                                          "end": 1775,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1777,
                                        "end": 1783,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1777,
                                          "end": 1778,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1780,
                                          "end": 1783,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1800,
                          "end": 1871,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1804,
                              "end": 1870,
                              "id": {
                                "type": "Identifier",
                                "start": 1804,
                                "end": 1806,
                                "name": "a3",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1809,
                                "end": 1870,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1810,
                                    "end": 1826,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1812,
                                        "end": 1816,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1812,
                                          "end": 1813,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1815,
                                          "end": 1816,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1818,
                                        "end": 1824,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1818,
                                          "end": 1819,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1821,
                                          "end": 1824,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1828,
                                    "end": 1849,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1830,
                                        "end": 1839,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1830,
                                          "end": 1831,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1833,
                                          "end": 1839,
                                          "name": "anyObj",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1841,
                                        "end": 1847,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1841,
                                          "end": 1842,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1844,
                                          "end": 1847,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1851,
                                    "end": 1869,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1853,
                                        "end": 1859,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1853,
                                          "end": 1854,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1856,
                                          "end": 1859,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1861,
                                        "end": 1867,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1861,
                                          "end": 1862,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1864,
                                          "end": 1867,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1885,
                          "end": 1912,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1889,
                              "end": 1911,
                              "id": {
                                "type": "Identifier",
                                "start": 1889,
                                "end": 1904,
                                "name": "ifaceObj",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1897,
                                  "end": 1904,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1899,
                                    "end": 1904,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1899,
                                      "end": 1904,
                                      "name": "iface",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 1907,
                                "end": 1911,
                                "value": null,
                                "raw": "null"
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1925,
                          "end": 1950,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1929,
                              "end": 1949,
                              "id": {
                                "type": "Identifier",
                                "start": 1929,
                                "end": 1936,
                                "name": "baseObj",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 1939,
                                "end": 1949,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1943,
                                  "end": 1947,
                                  "name": "base",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1963,
                          "end": 1990,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1967,
                              "end": 1989,
                              "id": {
                                "type": "Identifier",
                                "start": 1967,
                                "end": 1975,
                                "name": "base2Obj",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 1978,
                                "end": 1989,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1982,
                                  "end": 1987,
                                  "name": "base2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 2004,
                          "end": 2043,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2008,
                              "end": 2042,
                              "id": {
                                "type": "Identifier",
                                "start": 2008,
                                "end": 2010,
                                "name": "b1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 2013,
                                "end": 2042,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 2014,
                                    "end": 2021,
                                    "name": "baseObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2023,
                                    "end": 2031,
                                    "name": "base2Obj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2033,
                                    "end": 2041,
                                    "name": "ifaceObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 2056,
                          "end": 2095,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2060,
                              "end": 2094,
                              "id": {
                                "type": "Identifier",
                                "start": 2060,
                                "end": 2062,
                                "name": "b2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 2065,
                                "end": 2094,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 2066,
                                    "end": 2074,
                                    "name": "base2Obj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2076,
                                    "end": 2083,
                                    "name": "baseObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2085,
                                    "end": 2093,
                                    "name": "ifaceObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 2108,
                          "end": 2147,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2112,
                              "end": 2146,
                              "id": {
                                "type": "Identifier",
                                "start": 2112,
                                "end": 2114,
                                "name": "b3",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 2117,
                                "end": 2146,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 2118,
                                    "end": 2125,
                                    "name": "baseObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2127,
                                    "end": 2135,
                                    "name": "ifaceObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2137,
                                    "end": 2145,
                                    "name": "base2Obj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 2160,
                          "end": 2199,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2164,
                              "end": 2198,
                              "id": {
                                "type": "Identifier",
                                "start": 2164,
                                "end": 2166,
                                "name": "b4",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 2169,
                                "end": 2198,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 2170,
                                    "end": 2178,
                                    "name": "ifaceObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2180,
                                    "end": 2187,
                                    "name": "baseObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2189,
                                    "end": 2197,
                                    "name": "base2Obj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2219,
      "end": 4504,
      "id": {
        "type": "Identifier",
        "start": 2226,
        "end": 2239,
        "name": "NonEmptyTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2240,
        "end": 4504,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 2246,
            "end": 2276,
            "id": {
              "type": "Identifier",
              "start": 2256,
              "end": 2261,
              "name": "iface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 2262,
              "end": 2276,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2264,
                  "end": 2274,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2264,
                    "end": 2265,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2265,
                    "end": 2273,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2267,
                      "end": 2273
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
            "start": 2281,
            "end": 2334,
            "id": {
              "type": "Identifier",
              "start": 2287,
              "end": 2291,
              "name": "base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 2309,
              "end": 2334,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2311,
                  "end": 2321,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2311,
                    "end": 2312,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2312,
                    "end": 2320,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2314,
                      "end": 2320
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2322,
                  "end": 2332,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2322,
                    "end": 2323,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2323,
                    "end": 2331,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2325,
                      "end": 2331
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 2303,
                "end": 2308,
                "expression": {
                  "type": "Identifier",
                  "start": 2303,
                  "end": 2308,
                  "name": "iface",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 2339,
            "end": 2393,
            "id": {
              "type": "Identifier",
              "start": 2345,
              "end": 2350,
              "name": "base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 2368,
              "end": 2393,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2370,
                  "end": 2380,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2370,
                    "end": 2371,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2371,
                    "end": 2379,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2373,
                      "end": 2379
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2381,
                  "end": 2391,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2381,
                    "end": 2382,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2382,
                    "end": 2390,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2384,
                      "end": 2390
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 2362,
                "end": 2367,
                "expression": {
                  "type": "Identifier",
                  "start": 2362,
                  "end": 2367,
                  "name": "iface",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 2398,
            "end": 2439,
            "id": {
              "type": "Identifier",
              "start": 2404,
              "end": 2411,
              "name": "derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 2420,
              "end": 2424,
              "name": "base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 2425,
              "end": 2439,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2427,
                  "end": 2437,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2427,
                    "end": 2428,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2428,
                    "end": 2436,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2430,
                      "end": 2436
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 2446,
            "end": 4502,
            "id": {
              "type": "Identifier",
              "start": 2452,
              "end": 2453,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 2454,
              "end": 4502,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 2464,
                  "end": 2514,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2471,
                    "end": 2480,
                    "name": "voidIfAny",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2480,
                    "end": 2514,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2481,
                        "end": 2491,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2482,
                          "end": 2491,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2484,
                            "end": 2491
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2493,
                        "end": 2504,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2495,
                          "end": 2504,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2497,
                            "end": 2504
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2505,
                      "end": 2513,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2507,
                        "end": 2513
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2523,
                  "end": 2572,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2530,
                    "end": 2539,
                    "name": "voidIfAny",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2539,
                    "end": 2572,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2540,
                        "end": 2549,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2541,
                          "end": 2549,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2543,
                            "end": 2549
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2551,
                        "end": 2562,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2553,
                          "end": 2562,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2555,
                            "end": 2562
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2563,
                      "end": 2571,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2565,
                        "end": 2571
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2581,
                  "end": 2630,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2588,
                    "end": 2597,
                    "name": "voidIfAny",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2597,
                    "end": 2630,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2598,
                        "end": 2607,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2599,
                          "end": 2607,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2601,
                            "end": 2607
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2609,
                        "end": 2620,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2611,
                          "end": 2620,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2613,
                            "end": 2620
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2621,
                      "end": 2629,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2623,
                        "end": 2629
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2639,
                  "end": 2696,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2646,
                    "end": 2655,
                    "name": "voidIfAny",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2655,
                    "end": 2696,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2656,
                        "end": 2662,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2657,
                          "end": 2662,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2659,
                            "end": 2662
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 2664,
                        "end": 2673,
                        "left": {
                          "type": "Identifier",
                          "start": 2664,
                          "end": 2665,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2668,
                          "end": 2673,
                          "value": false,
                          "raw": "false"
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2680,
                      "end": 2696,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2682,
                          "end": 2694,
                          "argument": {
                            "type": "Literal",
                            "start": 2689,
                            "end": 2693,
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2674,
                      "end": 2679,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2676,
                        "end": 2679
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2706,
                  "end": 4496,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2713,
                    "end": 2714,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2714,
                    "end": 4496,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2717,
                      "end": 4496,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2731,
                          "end": 2767,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2731,
                            "end": 2766,
                            "expression": {
                              "type": "CallExpression",
                              "start": 2740,
                              "end": 2765,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2740,
                                "end": 2754,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2740,
                                  "end": 2744
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2745,
                                  "end": 2754,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2755,
                                  "end": 2764,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2755,
                                    "end": 2761,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 2756,
                                        "end": 2757,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2759,
                                        "end": 2760,
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 2762,
                                    "end": 2763,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2732,
                              "end": 2738
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2780,
                          "end": 2827,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2780,
                            "end": 2826,
                            "expression": {
                              "type": "CallExpression",
                              "start": 2789,
                              "end": 2825,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2789,
                                "end": 2803,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2789,
                                  "end": 2793
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2794,
                                  "end": 2803,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2804,
                                  "end": 2824,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2804,
                                    "end": 2821,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 2805,
                                        "end": 2806,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2808,
                                        "end": 2809,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 2811,
                                        "end": 2820,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 2822,
                                    "end": 2823,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2781,
                              "end": 2787
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2840,
                          "end": 2887,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2840,
                            "end": 2886,
                            "expression": {
                              "type": "CallExpression",
                              "start": 2849,
                              "end": 2885,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2849,
                                "end": 2863,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2849,
                                  "end": 2853
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2854,
                                  "end": 2863,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2864,
                                  "end": 2884,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2864,
                                    "end": 2881,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 2865,
                                        "end": 2874,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2876,
                                        "end": 2877,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2879,
                                        "end": 2880,
                                        "value": 4,
                                        "raw": "4"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 2882,
                                    "end": 2883,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2841,
                              "end": 2847
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2900,
                          "end": 2942,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2900,
                            "end": 2941,
                            "expression": {
                              "type": "CallExpression",
                              "start": 2909,
                              "end": 2940,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2909,
                                "end": 2923,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2909,
                                  "end": 2913
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2914,
                                  "end": 2923,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2924,
                                  "end": 2939,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2924,
                                    "end": 2936,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 2925,
                                        "end": 2929,
                                        "value": null,
                                        "raw": "null"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2931,
                                        "end": 2932,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2934,
                                        "end": 2935,
                                        "value": 4,
                                        "raw": "4"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 2937,
                                    "end": 2938,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2901,
                              "end": 2907
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2955,
                          "end": 2997,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2955,
                            "end": 2996,
                            "expression": {
                              "type": "CallExpression",
                              "start": 2964,
                              "end": 2995,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2964,
                                "end": 2978,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2964,
                                  "end": 2968
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2969,
                                  "end": 2978,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2979,
                                  "end": 2994,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2979,
                                    "end": 2991,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 2980,
                                        "end": 2981,
                                        "value": 2,
                                        "raw": "2"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2983,
                                        "end": 2984,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2986,
                                        "end": 2990,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 2992,
                                    "end": 2993,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2956,
                              "end": 2962
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3010,
                          "end": 3060,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3010,
                            "end": 3059,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3019,
                              "end": 3058,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3019,
                                "end": 3033,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3019,
                                  "end": 3023
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3024,
                                  "end": 3033,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3034,
                                  "end": 3057,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3034,
                                    "end": 3054,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 3035,
                                        "end": 3044,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3046,
                                        "end": 3047,
                                        "value": 4,
                                        "raw": "4"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3049,
                                        "end": 3053,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3055,
                                    "end": 3056,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3011,
                              "end": 3017
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3074,
                          "end": 3113,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3074,
                            "end": 3112,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3083,
                              "end": 3111,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3083,
                                "end": 3097,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3083,
                                  "end": 3087
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3088,
                                  "end": 3097,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3098,
                                  "end": 3110,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3098,
                                    "end": 3107,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 3099,
                                        "end": 3101,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3103,
                                        "end": 3106,
                                        "value": "q",
                                        "raw": "\"q\""
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3108,
                                    "end": 3109,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3075,
                              "end": 3081
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3126,
                          "end": 3176,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3126,
                            "end": 3175,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3135,
                              "end": 3174,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3135,
                                "end": 3149,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3135,
                                  "end": 3139
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3140,
                                  "end": 3149,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3150,
                                  "end": 3173,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3150,
                                    "end": 3170,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 3151,
                                        "end": 3153,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3155,
                                        "end": 3158,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 3160,
                                        "end": 3169,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3171,
                                    "end": 3172,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3127,
                              "end": 3133
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3189,
                          "end": 3239,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3189,
                            "end": 3238,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3198,
                              "end": 3237,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3198,
                                "end": 3212,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3198,
                                  "end": 3202
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3203,
                                  "end": 3212,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3213,
                                  "end": 3236,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3213,
                                    "end": 3233,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 3214,
                                        "end": 3223,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3225,
                                        "end": 3228,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3230,
                                        "end": 3232,
                                        "value": "",
                                        "raw": "''"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3234,
                                    "end": 3235,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3190,
                              "end": 3196
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3252,
                          "end": 3297,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3252,
                            "end": 3296,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3261,
                              "end": 3295,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3261,
                                "end": 3275,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3261,
                                  "end": 3265
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3266,
                                  "end": 3275,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3276,
                                  "end": 3294,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3276,
                                    "end": 3291,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 3277,
                                        "end": 3281,
                                        "value": null,
                                        "raw": "null"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3283,
                                        "end": 3286,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3288,
                                        "end": 3290,
                                        "value": "",
                                        "raw": "''"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3292,
                                    "end": 3293,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3253,
                              "end": 3259
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3310,
                          "end": 3355,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3310,
                            "end": 3354,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3319,
                              "end": 3353,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3319,
                                "end": 3333,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3319,
                                  "end": 3323
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3324,
                                  "end": 3333,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3334,
                                  "end": 3352,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3334,
                                    "end": 3349,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 3335,
                                        "end": 3338,
                                        "value": "q",
                                        "raw": "\"q\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3340,
                                        "end": 3342,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3344,
                                        "end": 3348,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3350,
                                    "end": 3351,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3311,
                              "end": 3317
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3368,
                          "end": 3419,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3368,
                            "end": 3418,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3377,
                              "end": 3417,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3377,
                                "end": 3391,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3377,
                                  "end": 3381
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3382,
                                  "end": 3391,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3392,
                                  "end": 3416,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3392,
                                    "end": 3413,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 3393,
                                        "end": 3402,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3404,
                                        "end": 3406,
                                        "value": "",
                                        "raw": "''"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3408,
                                        "end": 3412,
                                        "value": null,
                                        "raw": "null"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3414,
                                    "end": 3415,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3369,
                              "end": 3375
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3433,
                          "end": 3482,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3433,
                            "end": 3481,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3442,
                              "end": 3480,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3442,
                                "end": 3456,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3442,
                                  "end": 3446
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3447,
                                  "end": 3456,
                                  "name": "voidIfAny",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3457,
                                  "end": 3479,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 3457,
                                    "end": 3476,
                                    "object": {
                                      "type": "ArrayExpression",
                                      "start": 3457,
                                      "end": 3473,
                                      "elements": [
                                        {
                                          "type": "ArrayExpression",
                                          "start": 3458,
                                          "end": 3464,
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "start": 3459,
                                              "end": 3460,
                                              "value": 3,
                                              "raw": "3"
                                            },
                                            {
                                              "type": "Literal",
                                              "start": 3462,
                                              "end": 3463,
                                              "value": 4,
                                              "raw": "4"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "ArrayExpression",
                                          "start": 3466,
                                          "end": 3472,
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "start": 3467,
                                              "end": 3471,
                                              "value": null,
                                              "raw": "null"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "start": 3474,
                                      "end": 3475,
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    "computed": true,
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 3477,
                                    "end": 3478,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3434,
                              "end": 3440
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 3497,
                          "end": 3587,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3501,
                              "end": 3586,
                              "id": {
                                "type": "Identifier",
                                "start": 3501,
                                "end": 3530,
                                "name": "t1",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3503,
                                  "end": 3530,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 3505,
                                    "end": 3530,
                                    "elementType": {
                                      "type": "TSTypeLiteral",
                                      "start": 3505,
                                      "end": 3528,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3507,
                                          "end": 3517,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3507,
                                            "end": 3508,
                                            "name": "x",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3508,
                                            "end": 3516,
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 3510,
                                              "end": 3516
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3518,
                                          "end": 3526,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3518,
                                            "end": 3519,
                                            "name": "y",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3519,
                                            "end": 3525,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 3521,
                                              "end": 3525,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 3521,
                                                "end": 3525,
                                                "name": "base",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
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
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 3533,
                                "end": 3586,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3534,
                                    "end": 3560,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3536,
                                        "end": 3540,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3536,
                                          "end": 3537,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3539,
                                          "end": 3540,
                                          "value": 7,
                                          "raw": "7"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3542,
                                        "end": 3558,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3542,
                                          "end": 3543,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3545,
                                          "end": 3558,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3549,
                                            "end": 3556,
                                            "name": "derived",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "typeArguments": null
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3562,
                                    "end": 3585,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3564,
                                        "end": 3568,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3564,
                                          "end": 3565,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3567,
                                          "end": 3568,
                                          "value": 5,
                                          "raw": "5"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3570,
                                        "end": 3583,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3570,
                                          "end": 3571,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3573,
                                          "end": 3583,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3577,
                                            "end": 3581,
                                            "name": "base",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "typeArguments": null
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 3600,
                          "end": 3698,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3604,
                              "end": 3697,
                              "id": {
                                "type": "Identifier",
                                "start": 3604,
                                "end": 3634,
                                "name": "t2",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3606,
                                  "end": 3634,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 3608,
                                    "end": 3634,
                                    "elementType": {
                                      "type": "TSTypeLiteral",
                                      "start": 3608,
                                      "end": 3632,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3610,
                                          "end": 3621,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3610,
                                            "end": 3611,
                                            "name": "x",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3611,
                                            "end": 3620,
                                            "typeAnnotation": {
                                              "type": "TSBooleanKeyword",
                                              "start": 3613,
                                              "end": 3620
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3622,
                                          "end": 3630,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3622,
                                            "end": 3623,
                                            "name": "y",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3623,
                                            "end": 3629,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 3625,
                                              "end": 3629,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 3625,
                                                "end": 3629,
                                                "name": "base",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
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
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 3637,
                                "end": 3697,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3638,
                                    "end": 3667,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3640,
                                        "end": 3647,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3640,
                                          "end": 3641,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3643,
                                          "end": 3647,
                                          "value": true,
                                          "raw": "true"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3649,
                                        "end": 3665,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3649,
                                          "end": 3650,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3652,
                                          "end": 3665,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3656,
                                            "end": 3663,
                                            "name": "derived",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "typeArguments": null
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3669,
                                    "end": 3696,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3671,
                                        "end": 3679,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3671,
                                          "end": 3672,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3674,
                                          "end": 3679,
                                          "value": false,
                                          "raw": "false"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3681,
                                        "end": 3694,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3681,
                                          "end": 3682,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3684,
                                          "end": 3694,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3688,
                                            "end": 3692,
                                            "name": "base",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "typeArguments": null
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 3711,
                          "end": 3810,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3715,
                              "end": 3809,
                              "id": {
                                "type": "Identifier",
                                "start": 3715,
                                "end": 3744,
                                "name": "t3",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3717,
                                  "end": 3744,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 3719,
                                    "end": 3744,
                                    "elementType": {
                                      "type": "TSTypeLiteral",
                                      "start": 3719,
                                      "end": 3742,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3721,
                                          "end": 3731,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3721,
                                            "end": 3722,
                                            "name": "x",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3722,
                                            "end": 3730,
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 3724,
                                              "end": 3730
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3732,
                                          "end": 3740,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3732,
                                            "end": 3733,
                                            "name": "y",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3733,
                                            "end": 3739,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 3735,
                                              "end": 3739,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 3735,
                                                "end": 3739,
                                                "name": "base",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
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
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 3747,
                                "end": 3809,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3748,
                                    "end": 3779,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3750,
                                        "end": 3762,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3750,
                                          "end": 3751,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 3753,
                                          "end": 3762,
                                          "name": "undefined",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3764,
                                        "end": 3777,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3764,
                                          "end": 3765,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3767,
                                          "end": 3777,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3771,
                                            "end": 3775,
                                            "name": "base",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "typeArguments": null
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3781,
                                    "end": 3808,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3783,
                                        "end": 3788,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3783,
                                          "end": 3784,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3786,
                                          "end": 3788,
                                          "value": "",
                                          "raw": "''"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3790,
                                        "end": 3806,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3790,
                                          "end": 3791,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3793,
                                          "end": 3806,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3797,
                                            "end": 3804,
                                            "name": "derived",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "typeArguments": null
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 3824,
                          "end": 3847,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3828,
                              "end": 3846,
                              "id": {
                                "type": "Identifier",
                                "start": 3828,
                                "end": 3839,
                                "name": "anyObj",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3834,
                                  "end": 3839,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3836,
                                    "end": 3839
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 3842,
                                "end": 3846,
                                "value": null,
                                "raw": "null"
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 3919,
                          "end": 3990,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3923,
                              "end": 3989,
                              "id": {
                                "type": "Identifier",
                                "start": 3923,
                                "end": 3925,
                                "name": "a1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 3928,
                                "end": 3989,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3929,
                                    "end": 3945,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3931,
                                        "end": 3935,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3931,
                                          "end": 3932,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3934,
                                          "end": 3935,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3937,
                                        "end": 3943,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3937,
                                          "end": 3938,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3940,
                                          "end": 3943,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3947,
                                    "end": 3965,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3949,
                                        "end": 3955,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3949,
                                          "end": 3950,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3952,
                                          "end": 3955,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3957,
                                        "end": 3963,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3957,
                                          "end": 3958,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3960,
                                          "end": 3963,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3967,
                                    "end": 3988,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3969,
                                        "end": 3978,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3969,
                                          "end": 3970,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 3972,
                                          "end": 3978,
                                          "name": "anyObj",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3980,
                                        "end": 3986,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3980,
                                          "end": 3981,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 3983,
                                          "end": 3986,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4003,
                          "end": 4074,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4007,
                              "end": 4073,
                              "id": {
                                "type": "Identifier",
                                "start": 4007,
                                "end": 4009,
                                "name": "a2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 4012,
                                "end": 4073,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4013,
                                    "end": 4034,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4015,
                                        "end": 4024,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4015,
                                          "end": 4016,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 4018,
                                          "end": 4024,
                                          "name": "anyObj",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4026,
                                        "end": 4032,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4026,
                                          "end": 4027,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4029,
                                          "end": 4032,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4036,
                                    "end": 4052,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4038,
                                        "end": 4042,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4038,
                                          "end": 4039,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4041,
                                          "end": 4042,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4044,
                                        "end": 4050,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4044,
                                          "end": 4045,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4047,
                                          "end": 4050,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4054,
                                    "end": 4072,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4056,
                                        "end": 4062,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4056,
                                          "end": 4057,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4059,
                                          "end": 4062,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4064,
                                        "end": 4070,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4064,
                                          "end": 4065,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4067,
                                          "end": 4070,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4087,
                          "end": 4158,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4091,
                              "end": 4157,
                              "id": {
                                "type": "Identifier",
                                "start": 4091,
                                "end": 4093,
                                "name": "a3",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 4096,
                                "end": 4157,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4097,
                                    "end": 4113,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4099,
                                        "end": 4103,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4099,
                                          "end": 4100,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4102,
                                          "end": 4103,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4105,
                                        "end": 4111,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4105,
                                          "end": 4106,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4108,
                                          "end": 4111,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4115,
                                    "end": 4136,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4117,
                                        "end": 4126,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4117,
                                          "end": 4118,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 4120,
                                          "end": 4126,
                                          "name": "anyObj",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4128,
                                        "end": 4134,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4128,
                                          "end": 4129,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4131,
                                          "end": 4134,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4138,
                                    "end": 4156,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4140,
                                        "end": 4146,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4140,
                                          "end": 4141,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4143,
                                          "end": 4146,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4148,
                                        "end": 4154,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4148,
                                          "end": 4149,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4151,
                                          "end": 4154,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4172,
                          "end": 4199,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4176,
                              "end": 4198,
                              "id": {
                                "type": "Identifier",
                                "start": 4176,
                                "end": 4191,
                                "name": "ifaceObj",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4184,
                                  "end": 4191,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 4186,
                                    "end": 4191,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 4186,
                                      "end": 4191,
                                      "name": "iface",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 4194,
                                "end": 4198,
                                "value": null,
                                "raw": "null"
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4212,
                          "end": 4237,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4216,
                              "end": 4236,
                              "id": {
                                "type": "Identifier",
                                "start": 4216,
                                "end": 4223,
                                "name": "baseObj",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 4226,
                                "end": 4236,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 4230,
                                  "end": 4234,
                                  "name": "base",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4250,
                          "end": 4277,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4254,
                              "end": 4276,
                              "id": {
                                "type": "Identifier",
                                "start": 4254,
                                "end": 4262,
                                "name": "base2Obj",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 4265,
                                "end": 4276,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 4269,
                                  "end": 4274,
                                  "name": "base2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4291,
                          "end": 4330,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4295,
                              "end": 4329,
                              "id": {
                                "type": "Identifier",
                                "start": 4295,
                                "end": 4297,
                                "name": "b1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 4300,
                                "end": 4329,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 4301,
                                    "end": 4308,
                                    "name": "baseObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4310,
                                    "end": 4318,
                                    "name": "base2Obj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4320,
                                    "end": 4328,
                                    "name": "ifaceObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4343,
                          "end": 4382,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4347,
                              "end": 4381,
                              "id": {
                                "type": "Identifier",
                                "start": 4347,
                                "end": 4349,
                                "name": "b2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 4352,
                                "end": 4381,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 4353,
                                    "end": 4361,
                                    "name": "base2Obj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4363,
                                    "end": 4370,
                                    "name": "baseObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4372,
                                    "end": 4380,
                                    "name": "ifaceObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4395,
                          "end": 4434,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4399,
                              "end": 4433,
                              "id": {
                                "type": "Identifier",
                                "start": 4399,
                                "end": 4401,
                                "name": "b3",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 4404,
                                "end": 4433,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 4405,
                                    "end": 4412,
                                    "name": "baseObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4414,
                                    "end": 4422,
                                    "name": "ifaceObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4424,
                                    "end": 4432,
                                    "name": "base2Obj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4447,
                          "end": 4486,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4451,
                              "end": 4485,
                              "id": {
                                "type": "Identifier",
                                "start": 4451,
                                "end": 4453,
                                "name": "b4",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 4456,
                                "end": 4485,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 4457,
                                    "end": 4465,
                                    "name": "ifaceObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4467,
                                    "end": 4474,
                                    "name": "baseObj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4476,
                                    "end": 4484,
                                    "name": "base2Obj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
