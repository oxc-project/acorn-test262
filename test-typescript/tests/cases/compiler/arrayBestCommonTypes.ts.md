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
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 2217,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 25,
            "end": 44,
            "body": {
              "type": "TSInterfaceBody",
              "start": 41,
              "end": 44,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 40,
              "decorators": [],
              "name": "iface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 49,
            "end": 80,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 77,
              "end": 80,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 59,
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 71,
                "end": 76,
                "expression": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 76,
                  "decorators": [],
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 85,
            "end": 117,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 114,
              "end": 117,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 96,
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 108,
                "end": 113,
                "expression": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 113,
                  "decorators": [],
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 122,
            "end": 152,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 149,
              "end": 152,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 128,
              "end": 135,
              "decorators": [],
              "name": "derived",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 144,
              "end": 148,
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 159,
            "end": 2215,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 167,
              "end": 2215,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 177,
                  "end": 227,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 193,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 193,
                    "end": 227,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 194,
                        "end": 204,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 195,
                          "end": 204,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 197,
                            "end": 204
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 206,
                        "end": 217,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 208,
                          "end": 217,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 210,
                            "end": 217
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 218,
                      "end": 226,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 220,
                        "end": 226
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 236,
                  "end": 285,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 252,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 252,
                    "end": 285,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 253,
                        "end": 262,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 254,
                          "end": 262,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 256,
                            "end": 262
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 264,
                        "end": 275,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 266,
                          "end": 275,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 268,
                            "end": 275
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 276,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 278,
                        "end": 284
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 294,
                  "end": 343,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 310,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 310,
                    "end": 343,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 311,
                        "end": 320,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 312,
                          "end": 320,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 314,
                            "end": 320
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 322,
                        "end": 333,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 324,
                          "end": 333,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 326,
                            "end": 333
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 334,
                      "end": 342,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 336,
                        "end": 342
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 352,
                  "end": 409,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 368,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 368,
                    "end": 409,
                    "async": false,
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
                            "raw": "null",
                            "value": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 369,
                        "end": 375,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 370,
                          "end": 375,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 372,
                            "end": 375
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 377,
                        "end": 386,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 377,
                          "end": 378,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 381,
                          "end": 386,
                          "raw": "false",
                          "value": false
                        },
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 387,
                      "end": 392,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 389,
                        "end": 392
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 419,
                  "end": 2209,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 427,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 427,
                    "end": 2209,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 430,
                      "end": 2209,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 444,
                          "end": 480,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 444,
                            "end": 479,
                            "expression": {
                              "type": "CallExpression",
                              "start": 453,
                              "end": 478,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 468,
                                  "end": 477,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 468,
                                    "end": 474,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 469,
                                        "end": 470,
                                        "raw": "4",
                                        "value": 4
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 472,
                                        "end": 473,
                                        "raw": "2",
                                        "value": 2
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 475,
                                    "end": 476,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 453,
                                "end": 467,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 453,
                                  "end": 457
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 458,
                                  "end": 467,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 445,
                              "end": 451
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 493,
                          "end": 540,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 493,
                            "end": 539,
                            "expression": {
                              "type": "CallExpression",
                              "start": 502,
                              "end": 538,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 517,
                                  "end": 537,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 517,
                                    "end": 534,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 518,
                                        "end": 519,
                                        "raw": "4",
                                        "value": 4
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 521,
                                        "end": 522,
                                        "raw": "2",
                                        "value": 2
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 524,
                                        "end": 533,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 535,
                                    "end": 536,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 502,
                                "end": 516,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 502,
                                  "end": 506
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 507,
                                  "end": 516,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 494,
                              "end": 500
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 553,
                          "end": 600,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 553,
                            "end": 599,
                            "expression": {
                              "type": "CallExpression",
                              "start": 562,
                              "end": 598,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 577,
                                  "end": 597,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 577,
                                    "end": 594,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 578,
                                        "end": 587,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 589,
                                        "end": 590,
                                        "raw": "2",
                                        "value": 2
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 592,
                                        "end": 593,
                                        "raw": "4",
                                        "value": 4
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 595,
                                    "end": 596,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 562,
                                "end": 576,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 562,
                                  "end": 566
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 567,
                                  "end": 576,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 554,
                              "end": 560
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 613,
                          "end": 655,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 613,
                            "end": 654,
                            "expression": {
                              "type": "CallExpression",
                              "start": 622,
                              "end": 653,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 637,
                                  "end": 652,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 637,
                                    "end": 649,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 638,
                                        "end": 642,
                                        "raw": "null",
                                        "value": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 644,
                                        "end": 645,
                                        "raw": "2",
                                        "value": 2
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 647,
                                        "end": 648,
                                        "raw": "4",
                                        "value": 4
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 650,
                                    "end": 651,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 622,
                                "end": 636,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 622,
                                  "end": 626
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 627,
                                  "end": 636,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 614,
                              "end": 620
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 668,
                          "end": 710,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 668,
                            "end": 709,
                            "expression": {
                              "type": "CallExpression",
                              "start": 677,
                              "end": 708,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 692,
                                  "end": 707,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 692,
                                    "end": 704,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 693,
                                        "end": 694,
                                        "raw": "2",
                                        "value": 2
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 696,
                                        "end": 697,
                                        "raw": "4",
                                        "value": 4
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 699,
                                        "end": 703,
                                        "raw": "null",
                                        "value": null
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 705,
                                    "end": 706,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 677,
                                "end": 691,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 677,
                                  "end": 681
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 682,
                                  "end": 691,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 669,
                              "end": 675
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 723,
                          "end": 773,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 723,
                            "end": 772,
                            "expression": {
                              "type": "CallExpression",
                              "start": 732,
                              "end": 771,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 747,
                                  "end": 770,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 747,
                                    "end": 767,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 748,
                                        "end": 757,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 759,
                                        "end": 760,
                                        "raw": "4",
                                        "value": 4
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 762,
                                        "end": 766,
                                        "raw": "null",
                                        "value": null
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 768,
                                    "end": 769,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 732,
                                "end": 746,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 732,
                                  "end": 736
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 737,
                                  "end": 746,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 724,
                              "end": 730
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 787,
                          "end": 826,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 787,
                            "end": 825,
                            "expression": {
                              "type": "CallExpression",
                              "start": 796,
                              "end": 824,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 811,
                                  "end": 823,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 811,
                                    "end": 820,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 812,
                                        "end": 814,
                                        "raw": "''",
                                        "value": ""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 816,
                                        "end": 819,
                                        "raw": "\"q\"",
                                        "value": "q"
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 821,
                                    "end": 822,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 796,
                                "end": 810,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 796,
                                  "end": 800
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 801,
                                  "end": 810,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 788,
                              "end": 794
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 839,
                          "end": 889,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 839,
                            "end": 888,
                            "expression": {
                              "type": "CallExpression",
                              "start": 848,
                              "end": 887,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 863,
                                  "end": 886,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 863,
                                    "end": 883,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 864,
                                        "end": 866,
                                        "raw": "''",
                                        "value": ""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 868,
                                        "end": 871,
                                        "raw": "\"q\"",
                                        "value": "q"
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 873,
                                        "end": 882,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 884,
                                    "end": 885,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 848,
                                "end": 862,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 848,
                                  "end": 852
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 853,
                                  "end": 862,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 840,
                              "end": 846
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 902,
                          "end": 952,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 902,
                            "end": 951,
                            "expression": {
                              "type": "CallExpression",
                              "start": 911,
                              "end": 950,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 926,
                                  "end": 949,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 926,
                                    "end": 946,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 927,
                                        "end": 936,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 938,
                                        "end": 941,
                                        "raw": "\"q\"",
                                        "value": "q"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 943,
                                        "end": 945,
                                        "raw": "''",
                                        "value": ""
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 947,
                                    "end": 948,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 911,
                                "end": 925,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 911,
                                  "end": 915
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 916,
                                  "end": 925,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 903,
                              "end": 909
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 965,
                          "end": 1010,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 965,
                            "end": 1009,
                            "expression": {
                              "type": "CallExpression",
                              "start": 974,
                              "end": 1008,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 989,
                                  "end": 1007,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 989,
                                    "end": 1004,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 990,
                                        "end": 994,
                                        "raw": "null",
                                        "value": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 996,
                                        "end": 999,
                                        "raw": "\"q\"",
                                        "value": "q"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1001,
                                        "end": 1003,
                                        "raw": "''",
                                        "value": ""
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 1005,
                                    "end": 1006,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 974,
                                "end": 988,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 974,
                                  "end": 978
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 979,
                                  "end": 988,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 966,
                              "end": 972
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1023,
                          "end": 1068,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 1023,
                            "end": 1067,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1032,
                              "end": 1066,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 1047,
                                  "end": 1065,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 1047,
                                    "end": 1062,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 1048,
                                        "end": 1051,
                                        "raw": "\"q\"",
                                        "value": "q"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1053,
                                        "end": 1055,
                                        "raw": "''",
                                        "value": ""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1057,
                                        "end": 1061,
                                        "raw": "null",
                                        "value": null
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 1063,
                                    "end": 1064,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1032,
                                "end": 1046,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1032,
                                  "end": 1036
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1037,
                                  "end": 1046,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1024,
                              "end": 1030
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1081,
                          "end": 1132,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 1081,
                            "end": 1131,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1090,
                              "end": 1130,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 1105,
                                  "end": 1129,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 1105,
                                    "end": 1126,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 1106,
                                        "end": 1115,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1117,
                                        "end": 1119,
                                        "raw": "''",
                                        "value": ""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1121,
                                        "end": 1125,
                                        "raw": "null",
                                        "value": null
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 1127,
                                    "end": 1128,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1090,
                                "end": 1104,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1090,
                                  "end": 1094
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1095,
                                  "end": 1104,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1082,
                              "end": 1088
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1146,
                          "end": 1195,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 1146,
                            "end": 1194,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1155,
                              "end": 1193,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 1170,
                                  "end": 1192,
                                  "computed": true,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1170,
                                    "end": 1189,
                                    "computed": true,
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
                                              "raw": "3",
                                              "value": 3
                                            },
                                            {
                                              "type": "Literal",
                                              "start": 1175,
                                              "end": 1176,
                                              "raw": "4",
                                              "value": 4
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
                                              "raw": "null",
                                              "value": null
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Literal",
                                      "start": 1187,
                                      "end": 1188,
                                      "raw": "0",
                                      "value": 0
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 1190,
                                    "end": 1191,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1155,
                                "end": 1169,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1155,
                                  "end": 1159
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1160,
                                  "end": 1169,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1147,
                              "end": 1153
                            }
                          }
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1214,
                                "end": 1243,
                                "decorators": [],
                                "name": "t1",
                                "optional": false,
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
                                          "accessibility": null,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1220,
                                            "end": 1221,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1221,
                                            "end": 1229,
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 1223,
                                              "end": 1229
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1231,
                                          "end": 1239,
                                          "accessibility": null,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1231,
                                            "end": 1232,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1232,
                                            "end": 1238,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 1234,
                                              "end": 1238,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1234,
                                                "end": 1238,
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1249,
                                          "end": 1250,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1252,
                                          "end": 1253,
                                          "raw": "7",
                                          "value": 7
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1255,
                                        "end": 1271,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1255,
                                          "end": 1256,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1258,
                                          "end": 1271,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1262,
                                            "end": 1269,
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1277,
                                          "end": 1278,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1280,
                                          "end": 1281,
                                          "raw": "5",
                                          "value": 5
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1283,
                                        "end": 1296,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1283,
                                          "end": 1284,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1286,
                                          "end": 1296,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1290,
                                            "end": 1294,
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1317,
                                "end": 1347,
                                "decorators": [],
                                "name": "t2",
                                "optional": false,
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
                                          "accessibility": null,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1323,
                                            "end": 1324,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1324,
                                            "end": 1333,
                                            "typeAnnotation": {
                                              "type": "TSBooleanKeyword",
                                              "start": 1326,
                                              "end": 1333
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1335,
                                          "end": 1343,
                                          "accessibility": null,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1335,
                                            "end": 1336,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1336,
                                            "end": 1342,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 1338,
                                              "end": 1342,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1338,
                                                "end": 1342,
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1353,
                                          "end": 1354,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1356,
                                          "end": 1360,
                                          "raw": "true",
                                          "value": true
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1362,
                                        "end": 1378,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1362,
                                          "end": 1363,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1365,
                                          "end": 1378,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1369,
                                            "end": 1376,
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1384,
                                          "end": 1385,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1387,
                                          "end": 1392,
                                          "raw": "false",
                                          "value": false
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1394,
                                        "end": 1407,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1394,
                                          "end": 1395,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1397,
                                          "end": 1407,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1401,
                                            "end": 1405,
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1428,
                                "end": 1457,
                                "decorators": [],
                                "name": "t3",
                                "optional": false,
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
                                          "accessibility": null,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1434,
                                            "end": 1435,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1435,
                                            "end": 1443,
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 1437,
                                              "end": 1443
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 1445,
                                          "end": 1453,
                                          "accessibility": null,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1445,
                                            "end": 1446,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1446,
                                            "end": 1452,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 1448,
                                              "end": 1452,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1448,
                                                "end": 1452,
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1463,
                                          "end": 1464,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1466,
                                          "end": 1475,
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1477,
                                        "end": 1490,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1477,
                                          "end": 1478,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1480,
                                          "end": 1490,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1484,
                                            "end": 1488,
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1496,
                                          "end": 1497,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1499,
                                          "end": 1501,
                                          "raw": "''",
                                          "value": ""
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1503,
                                        "end": 1519,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1503,
                                          "end": 1504,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 1506,
                                          "end": 1519,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1510,
                                            "end": 1517,
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1541,
                                "end": 1552,
                                "decorators": [],
                                "name": "anyObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1547,
                                  "end": 1552,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1549,
                                    "end": 1552
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "start": 1555,
                                "end": 1559,
                                "raw": "null",
                                "value": null
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1636,
                                "end": 1638,
                                "decorators": [],
                                "name": "a1",
                                "optional": false,
                                "typeAnnotation": null
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1644,
                                          "end": 1645,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1647,
                                          "end": 1648,
                                          "raw": "0",
                                          "value": 0
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1650,
                                        "end": 1656,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1650,
                                          "end": 1651,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1653,
                                          "end": 1656,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1662,
                                          "end": 1663,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1665,
                                          "end": 1668,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1670,
                                        "end": 1676,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1670,
                                          "end": 1671,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1673,
                                          "end": 1676,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1682,
                                          "end": 1683,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1685,
                                          "end": 1691,
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1693,
                                        "end": 1699,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1693,
                                          "end": 1694,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1696,
                                          "end": 1699,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1720,
                                "end": 1722,
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1728,
                                          "end": 1729,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1731,
                                          "end": 1737,
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1739,
                                        "end": 1745,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1739,
                                          "end": 1740,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1742,
                                          "end": 1745,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1751,
                                          "end": 1752,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1754,
                                          "end": 1755,
                                          "raw": "0",
                                          "value": 0
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1757,
                                        "end": 1763,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1757,
                                          "end": 1758,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1760,
                                          "end": 1763,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1769,
                                          "end": 1770,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1772,
                                          "end": 1775,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1777,
                                        "end": 1783,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1777,
                                          "end": 1778,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1780,
                                          "end": 1783,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1804,
                                "end": 1806,
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1812,
                                          "end": 1813,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1815,
                                          "end": 1816,
                                          "raw": "0",
                                          "value": 0
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1818,
                                        "end": 1824,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1818,
                                          "end": 1819,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1821,
                                          "end": 1824,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1830,
                                          "end": 1831,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1833,
                                          "end": 1839,
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1841,
                                        "end": 1847,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1841,
                                          "end": 1842,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1844,
                                          "end": 1847,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1853,
                                          "end": 1854,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1856,
                                          "end": 1859,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1861,
                                        "end": 1867,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1861,
                                          "end": 1862,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1864,
                                          "end": 1867,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1889,
                                "end": 1904,
                                "decorators": [],
                                "name": "ifaceObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1897,
                                  "end": 1904,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1899,
                                    "end": 1904,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1899,
                                      "end": 1904,
                                      "decorators": [],
                                      "name": "iface",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "start": 1907,
                                "end": 1911,
                                "raw": "null",
                                "value": null
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1929,
                                "end": 1936,
                                "decorators": [],
                                "name": "baseObj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 1939,
                                "end": 1949,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1943,
                                  "end": 1947,
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1967,
                                "end": 1975,
                                "decorators": [],
                                "name": "base2Obj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 1978,
                                "end": 1989,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1982,
                                  "end": 1987,
                                  "decorators": [],
                                  "name": "base2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 2008,
                                "end": 2010,
                                "decorators": [],
                                "name": "b1",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2023,
                                    "end": 2031,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2033,
                                    "end": 2041,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 2060,
                                "end": 2062,
                                "decorators": [],
                                "name": "b2",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2076,
                                    "end": 2083,
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2085,
                                    "end": 2093,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 2112,
                                "end": 2114,
                                "decorators": [],
                                "name": "b3",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2127,
                                    "end": 2135,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2137,
                                    "end": 2145,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 2164,
                                "end": 2166,
                                "decorators": [],
                                "name": "b4",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2180,
                                    "end": 2187,
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2189,
                                    "end": 2197,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 18,
        "decorators": [],
        "name": "EmptyTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2219,
      "end": 4504,
      "body": {
        "type": "TSModuleBlock",
        "start": 2240,
        "end": 4504,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 2246,
            "end": 2276,
            "body": {
              "type": "TSInterfaceBody",
              "start": 2262,
              "end": 2276,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2264,
                  "end": 2274,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2264,
                    "end": 2265,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2265,
                    "end": 2273,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2267,
                      "end": 2273
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 2256,
              "end": 2261,
              "decorators": [],
              "name": "iface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 2281,
            "end": 2334,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2309,
              "end": 2334,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2311,
                  "end": 2321,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2311,
                    "end": 2312,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2322,
                  "end": 2332,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2322,
                    "end": 2323,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2287,
              "end": 2291,
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 2303,
                "end": 2308,
                "expression": {
                  "type": "Identifier",
                  "start": 2303,
                  "end": 2308,
                  "decorators": [],
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 2339,
            "end": 2393,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2368,
              "end": 2393,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2370,
                  "end": 2380,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2370,
                    "end": 2371,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2381,
                  "end": 2391,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2381,
                    "end": 2382,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2345,
              "end": 2350,
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 2362,
                "end": 2367,
                "expression": {
                  "type": "Identifier",
                  "start": 2362,
                  "end": 2367,
                  "decorators": [],
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 2398,
            "end": 2439,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2425,
              "end": 2439,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2427,
                  "end": 2437,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2427,
                    "end": 2428,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2404,
              "end": 2411,
              "decorators": [],
              "name": "derived",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 2420,
              "end": 2424,
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 2446,
            "end": 4502,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2454,
              "end": 4502,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 2464,
                  "end": 2514,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2471,
                    "end": 2480,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2480,
                    "end": 2514,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2481,
                        "end": 2491,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2482,
                          "end": 2491,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2484,
                            "end": 2491
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2493,
                        "end": 2504,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2495,
                          "end": 2504,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2497,
                            "end": 2504
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2505,
                      "end": 2513,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2507,
                        "end": 2513
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2523,
                  "end": 2572,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2530,
                    "end": 2539,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2539,
                    "end": 2572,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2540,
                        "end": 2549,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2541,
                          "end": 2549,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2543,
                            "end": 2549
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2551,
                        "end": 2562,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2553,
                          "end": 2562,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2555,
                            "end": 2562
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2563,
                      "end": 2571,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2565,
                        "end": 2571
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2581,
                  "end": 2630,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2588,
                    "end": 2597,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 2597,
                    "end": 2630,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2598,
                        "end": 2607,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2599,
                          "end": 2607,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2601,
                            "end": 2607
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2609,
                        "end": 2620,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2611,
                          "end": 2620,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2613,
                            "end": 2620
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2621,
                      "end": 2629,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2623,
                        "end": 2629
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2639,
                  "end": 2696,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2646,
                    "end": 2655,
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2655,
                    "end": 2696,
                    "async": false,
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
                            "raw": "null",
                            "value": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2656,
                        "end": 2662,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2657,
                          "end": 2662,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2659,
                            "end": 2662
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 2664,
                        "end": 2673,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2664,
                          "end": 2665,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2668,
                          "end": 2673,
                          "raw": "false",
                          "value": false
                        },
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2674,
                      "end": 2679,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2676,
                        "end": 2679
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2706,
                  "end": 4496,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2713,
                    "end": 2714,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2714,
                    "end": 4496,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2717,
                      "end": 4496,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2731,
                          "end": 2767,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2731,
                            "end": 2766,
                            "expression": {
                              "type": "CallExpression",
                              "start": 2740,
                              "end": 2765,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2755,
                                  "end": 2764,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2755,
                                    "end": 2761,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 2756,
                                        "end": 2757,
                                        "raw": "4",
                                        "value": 4
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2759,
                                        "end": 2760,
                                        "raw": "2",
                                        "value": 2
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 2762,
                                    "end": 2763,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2740,
                                "end": 2754,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2740,
                                  "end": 2744
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2745,
                                  "end": 2754,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2732,
                              "end": 2738
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2780,
                          "end": 2827,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2780,
                            "end": 2826,
                            "expression": {
                              "type": "CallExpression",
                              "start": 2789,
                              "end": 2825,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2804,
                                  "end": 2824,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2804,
                                    "end": 2821,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 2805,
                                        "end": 2806,
                                        "raw": "4",
                                        "value": 4
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2808,
                                        "end": 2809,
                                        "raw": "2",
                                        "value": 2
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 2811,
                                        "end": 2820,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 2822,
                                    "end": 2823,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2789,
                                "end": 2803,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2789,
                                  "end": 2793
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2794,
                                  "end": 2803,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2781,
                              "end": 2787
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2840,
                          "end": 2887,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2840,
                            "end": 2886,
                            "expression": {
                              "type": "CallExpression",
                              "start": 2849,
                              "end": 2885,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2864,
                                  "end": 2884,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2864,
                                    "end": 2881,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 2865,
                                        "end": 2874,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2876,
                                        "end": 2877,
                                        "raw": "2",
                                        "value": 2
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2879,
                                        "end": 2880,
                                        "raw": "4",
                                        "value": 4
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 2882,
                                    "end": 2883,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2849,
                                "end": 2863,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2849,
                                  "end": 2853
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2854,
                                  "end": 2863,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2841,
                              "end": 2847
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2900,
                          "end": 2942,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2900,
                            "end": 2941,
                            "expression": {
                              "type": "CallExpression",
                              "start": 2909,
                              "end": 2940,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2924,
                                  "end": 2939,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2924,
                                    "end": 2936,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 2925,
                                        "end": 2929,
                                        "raw": "null",
                                        "value": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2931,
                                        "end": 2932,
                                        "raw": "2",
                                        "value": 2
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2934,
                                        "end": 2935,
                                        "raw": "4",
                                        "value": 4
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 2937,
                                    "end": 2938,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2909,
                                "end": 2923,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2909,
                                  "end": 2913
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2914,
                                  "end": 2923,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2901,
                              "end": 2907
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2955,
                          "end": 2997,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 2955,
                            "end": 2996,
                            "expression": {
                              "type": "CallExpression",
                              "start": 2964,
                              "end": 2995,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2979,
                                  "end": 2994,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 2979,
                                    "end": 2991,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 2980,
                                        "end": 2981,
                                        "raw": "2",
                                        "value": 2
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2983,
                                        "end": 2984,
                                        "raw": "4",
                                        "value": 4
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 2986,
                                        "end": 2990,
                                        "raw": "null",
                                        "value": null
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 2992,
                                    "end": 2993,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2964,
                                "end": 2978,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2964,
                                  "end": 2968
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2969,
                                  "end": 2978,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2956,
                              "end": 2962
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3010,
                          "end": 3060,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3010,
                            "end": 3059,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3019,
                              "end": 3058,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3034,
                                  "end": 3057,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3034,
                                    "end": 3054,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 3035,
                                        "end": 3044,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3046,
                                        "end": 3047,
                                        "raw": "4",
                                        "value": 4
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3049,
                                        "end": 3053,
                                        "raw": "null",
                                        "value": null
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 3055,
                                    "end": 3056,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3019,
                                "end": 3033,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3019,
                                  "end": 3023
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3024,
                                  "end": 3033,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3011,
                              "end": 3017
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3074,
                          "end": 3113,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3074,
                            "end": 3112,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3083,
                              "end": 3111,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3098,
                                  "end": 3110,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3098,
                                    "end": 3107,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 3099,
                                        "end": 3101,
                                        "raw": "''",
                                        "value": ""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3103,
                                        "end": 3106,
                                        "raw": "\"q\"",
                                        "value": "q"
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 3108,
                                    "end": 3109,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3083,
                                "end": 3097,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3083,
                                  "end": 3087
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3088,
                                  "end": 3097,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3075,
                              "end": 3081
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3126,
                          "end": 3176,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3126,
                            "end": 3175,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3135,
                              "end": 3174,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3150,
                                  "end": 3173,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3150,
                                    "end": 3170,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 3151,
                                        "end": 3153,
                                        "raw": "''",
                                        "value": ""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3155,
                                        "end": 3158,
                                        "raw": "\"q\"",
                                        "value": "q"
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 3160,
                                        "end": 3169,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 3171,
                                    "end": 3172,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3135,
                                "end": 3149,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3135,
                                  "end": 3139
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3140,
                                  "end": 3149,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3127,
                              "end": 3133
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3189,
                          "end": 3239,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3189,
                            "end": 3238,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3198,
                              "end": 3237,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3213,
                                  "end": 3236,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3213,
                                    "end": 3233,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 3214,
                                        "end": 3223,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3225,
                                        "end": 3228,
                                        "raw": "\"q\"",
                                        "value": "q"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3230,
                                        "end": 3232,
                                        "raw": "''",
                                        "value": ""
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 3234,
                                    "end": 3235,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3198,
                                "end": 3212,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3198,
                                  "end": 3202
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3203,
                                  "end": 3212,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3190,
                              "end": 3196
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3252,
                          "end": 3297,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3252,
                            "end": 3296,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3261,
                              "end": 3295,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3276,
                                  "end": 3294,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3276,
                                    "end": 3291,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 3277,
                                        "end": 3281,
                                        "raw": "null",
                                        "value": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3283,
                                        "end": 3286,
                                        "raw": "\"q\"",
                                        "value": "q"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3288,
                                        "end": 3290,
                                        "raw": "''",
                                        "value": ""
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 3292,
                                    "end": 3293,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3261,
                                "end": 3275,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3261,
                                  "end": 3265
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3266,
                                  "end": 3275,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3253,
                              "end": 3259
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3310,
                          "end": 3355,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3310,
                            "end": 3354,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3319,
                              "end": 3353,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3334,
                                  "end": 3352,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3334,
                                    "end": 3349,
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "start": 3335,
                                        "end": 3338,
                                        "raw": "\"q\"",
                                        "value": "q"
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3340,
                                        "end": 3342,
                                        "raw": "''",
                                        "value": ""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3344,
                                        "end": 3348,
                                        "raw": "null",
                                        "value": null
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 3350,
                                    "end": 3351,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3319,
                                "end": 3333,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3319,
                                  "end": 3323
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3324,
                                  "end": 3333,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3311,
                              "end": 3317
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3368,
                          "end": 3419,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3368,
                            "end": 3418,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3377,
                              "end": 3417,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3392,
                                  "end": 3416,
                                  "computed": true,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "start": 3392,
                                    "end": 3413,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 3393,
                                        "end": 3402,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3404,
                                        "end": 3406,
                                        "raw": "''",
                                        "value": ""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3408,
                                        "end": 3412,
                                        "raw": "null",
                                        "value": null
                                      }
                                    ]
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 3414,
                                    "end": 3415,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3377,
                                "end": 3391,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3377,
                                  "end": 3381
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3382,
                                  "end": 3391,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3369,
                              "end": 3375
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3433,
                          "end": 3482,
                          "directive": null,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 3433,
                            "end": 3481,
                            "expression": {
                              "type": "CallExpression",
                              "start": 3442,
                              "end": 3480,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3457,
                                  "end": 3479,
                                  "computed": true,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 3457,
                                    "end": 3476,
                                    "computed": true,
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
                                              "raw": "3",
                                              "value": 3
                                            },
                                            {
                                              "type": "Literal",
                                              "start": 3462,
                                              "end": 3463,
                                              "raw": "4",
                                              "value": 4
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
                                              "raw": "null",
                                              "value": null
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Literal",
                                      "start": 3474,
                                      "end": 3475,
                                      "raw": "0",
                                      "value": 0
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Literal",
                                    "start": 3477,
                                    "end": 3478,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3442,
                                "end": 3456,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3442,
                                  "end": 3446
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3447,
                                  "end": 3456,
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3434,
                              "end": 3440
                            }
                          }
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 3501,
                                "end": 3530,
                                "decorators": [],
                                "name": "t1",
                                "optional": false,
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
                                          "accessibility": null,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3507,
                                            "end": 3508,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3508,
                                            "end": 3516,
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 3510,
                                              "end": 3516
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3518,
                                          "end": 3526,
                                          "accessibility": null,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3518,
                                            "end": 3519,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3519,
                                            "end": 3525,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 3521,
                                              "end": 3525,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 3521,
                                                "end": 3525,
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3536,
                                          "end": 3537,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 3539,
                                          "end": 3540,
                                          "raw": "7",
                                          "value": 7
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3542,
                                        "end": 3558,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3542,
                                          "end": 3543,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3545,
                                          "end": 3558,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3549,
                                            "end": 3556,
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3564,
                                          "end": 3565,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 3567,
                                          "end": 3568,
                                          "raw": "5",
                                          "value": 5
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3570,
                                        "end": 3583,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3570,
                                          "end": 3571,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3573,
                                          "end": 3583,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3577,
                                            "end": 3581,
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 3604,
                                "end": 3634,
                                "decorators": [],
                                "name": "t2",
                                "optional": false,
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
                                          "accessibility": null,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3610,
                                            "end": 3611,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3611,
                                            "end": 3620,
                                            "typeAnnotation": {
                                              "type": "TSBooleanKeyword",
                                              "start": 3613,
                                              "end": 3620
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3622,
                                          "end": 3630,
                                          "accessibility": null,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3622,
                                            "end": 3623,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3623,
                                            "end": 3629,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 3625,
                                              "end": 3629,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 3625,
                                                "end": 3629,
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3640,
                                          "end": 3641,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 3643,
                                          "end": 3647,
                                          "raw": "true",
                                          "value": true
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3649,
                                        "end": 3665,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3649,
                                          "end": 3650,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3652,
                                          "end": 3665,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3656,
                                            "end": 3663,
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3671,
                                          "end": 3672,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 3674,
                                          "end": 3679,
                                          "raw": "false",
                                          "value": false
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3681,
                                        "end": 3694,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3681,
                                          "end": 3682,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3684,
                                          "end": 3694,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3688,
                                            "end": 3692,
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 3715,
                                "end": 3744,
                                "decorators": [],
                                "name": "t3",
                                "optional": false,
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
                                          "accessibility": null,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3721,
                                            "end": 3722,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3722,
                                            "end": 3730,
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 3724,
                                              "end": 3730
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3732,
                                          "end": 3740,
                                          "accessibility": null,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3732,
                                            "end": 3733,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3733,
                                            "end": 3739,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 3735,
                                              "end": 3739,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 3735,
                                                "end": 3739,
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3750,
                                          "end": 3751,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Identifier",
                                          "start": 3753,
                                          "end": 3762,
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3764,
                                        "end": 3777,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3764,
                                          "end": 3765,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3767,
                                          "end": 3777,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3771,
                                            "end": 3775,
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3783,
                                          "end": 3784,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 3786,
                                          "end": 3788,
                                          "raw": "''",
                                          "value": ""
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3790,
                                        "end": 3806,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3790,
                                          "end": 3791,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "NewExpression",
                                          "start": 3793,
                                          "end": 3806,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 3797,
                                            "end": 3804,
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 3828,
                                "end": 3839,
                                "decorators": [],
                                "name": "anyObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3834,
                                  "end": 3839,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3836,
                                    "end": 3839
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "start": 3842,
                                "end": 3846,
                                "raw": "null",
                                "value": null
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 3923,
                                "end": 3925,
                                "decorators": [],
                                "name": "a1",
                                "optional": false,
                                "typeAnnotation": null
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3931,
                                          "end": 3932,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 3934,
                                          "end": 3935,
                                          "raw": "0",
                                          "value": 0
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3937,
                                        "end": 3943,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3937,
                                          "end": 3938,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 3940,
                                          "end": 3943,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3949,
                                          "end": 3950,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 3952,
                                          "end": 3955,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3957,
                                        "end": 3963,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3957,
                                          "end": 3958,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 3960,
                                          "end": 3963,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3969,
                                          "end": 3970,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Identifier",
                                          "start": 3972,
                                          "end": 3978,
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 3980,
                                        "end": 3986,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3980,
                                          "end": 3981,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 3983,
                                          "end": 3986,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 4007,
                                "end": 4009,
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4015,
                                          "end": 4016,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Identifier",
                                          "start": 4018,
                                          "end": 4024,
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4026,
                                        "end": 4032,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4026,
                                          "end": 4027,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 4029,
                                          "end": 4032,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4038,
                                          "end": 4039,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 4041,
                                          "end": 4042,
                                          "raw": "0",
                                          "value": 0
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4044,
                                        "end": 4050,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4044,
                                          "end": 4045,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 4047,
                                          "end": 4050,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4056,
                                          "end": 4057,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 4059,
                                          "end": 4062,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4064,
                                        "end": 4070,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4064,
                                          "end": 4065,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 4067,
                                          "end": 4070,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 4091,
                                "end": 4093,
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4099,
                                          "end": 4100,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 4102,
                                          "end": 4103,
                                          "raw": "0",
                                          "value": 0
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4105,
                                        "end": 4111,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4105,
                                          "end": 4106,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 4108,
                                          "end": 4111,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4117,
                                          "end": 4118,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Identifier",
                                          "start": 4120,
                                          "end": 4126,
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4128,
                                        "end": 4134,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4128,
                                          "end": 4129,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 4131,
                                          "end": 4134,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
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
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4140,
                                          "end": 4141,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 4143,
                                          "end": 4146,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 4148,
                                        "end": 4154,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4148,
                                          "end": 4149,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 4151,
                                          "end": 4154,
                                          "raw": "'a'",
                                          "value": "a"
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 4176,
                                "end": 4191,
                                "decorators": [],
                                "name": "ifaceObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4184,
                                  "end": 4191,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 4186,
                                    "end": 4191,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 4186,
                                      "end": 4191,
                                      "decorators": [],
                                      "name": "iface",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "start": 4194,
                                "end": 4198,
                                "raw": "null",
                                "value": null
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 4216,
                                "end": 4223,
                                "decorators": [],
                                "name": "baseObj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 4226,
                                "end": 4236,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 4230,
                                  "end": 4234,
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 4254,
                                "end": 4262,
                                "decorators": [],
                                "name": "base2Obj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "NewExpression",
                                "start": 4265,
                                "end": 4276,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 4269,
                                  "end": 4274,
                                  "decorators": [],
                                  "name": "base2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 4295,
                                "end": 4297,
                                "decorators": [],
                                "name": "b1",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4310,
                                    "end": 4318,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4320,
                                    "end": 4328,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 4347,
                                "end": 4349,
                                "decorators": [],
                                "name": "b2",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4363,
                                    "end": 4370,
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4372,
                                    "end": 4380,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 4399,
                                "end": 4401,
                                "decorators": [],
                                "name": "b3",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4414,
                                    "end": 4422,
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4424,
                                    "end": 4432,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 4451,
                                "end": 4453,
                                "decorators": [],
                                "name": "b4",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4467,
                                    "end": 4474,
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4476,
                                    "end": 4484,
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2452,
              "end": 2453,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 2226,
        "end": 2239,
        "decorators": [],
        "name": "NonEmptyTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
