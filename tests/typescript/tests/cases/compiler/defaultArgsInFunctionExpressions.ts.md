__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 864,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 38,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 18,
                "end": 23,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 19,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 22,
                  "end": 23,
                  "value": 3,
                  "raw": "3"
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 25,
              "end": 38,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 27,
                  "end": 36,
                  "argument": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 102,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 94,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 97,
            "end": 101,
            "callee": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "value": 4,
                "raw": "4"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 111,
      "expression": {
        "type": "AssignmentExpression",
        "start": 103,
        "end": 110,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 107,
          "end": 110,
          "callee": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 134,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 125,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 125,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 119,
                "end": 125
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 128,
            "end": 133,
            "callee": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 130,
                "end": 132,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 143,
      "expression": {
        "type": "AssignmentExpression",
        "start": 135,
        "end": 142,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 139,
          "end": 142,
          "callee": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 253,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 252,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 211,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 214,
            "end": 252,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 224,
                "end": 237,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 233,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 225,
                    "end": 233,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 227,
                      "end": 233
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 236,
                  "end": 237,
                  "value": 3,
                  "raw": "3"
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 239,
              "end": 252,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 241,
                  "end": 250,
                  "argument": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 249,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 320,
      "expression": {
        "type": "AssignmentExpression",
        "start": 309,
        "end": 319,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 309,
          "end": 310,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 313,
          "end": 319,
          "callee": {
            "type": "Identifier",
            "start": 313,
            "end": 315,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 316,
              "end": 318,
              "value": "",
              "raw": "''"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 330,
      "expression": {
        "type": "AssignmentExpression",
        "start": 321,
        "end": 329,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 321,
          "end": 322,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 325,
          "end": 329,
          "callee": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 331,
      "end": 340,
      "expression": {
        "type": "AssignmentExpression",
        "start": 331,
        "end": 339,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 331,
          "end": 332,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 335,
          "end": 339,
          "callee": {
            "type": "Identifier",
            "start": 335,
            "end": 337,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 404,
      "end": 469,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 468,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 410,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 413,
            "end": 468,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 423,
                "end": 463,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 444,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 424,
                    "end": 444,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 426,
                      "end": 444,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 427,
                          "end": 436,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 428,
                            "end": 436,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 430,
                              "end": 436
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 438,
                        "end": 444,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 441,
                          "end": 444
                        }
                      }
                    }
                  }
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 447,
                  "end": 463,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 448,
                      "end": 449,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 454,
                    "end": 463,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 455,
                      "end": 461
                    },
                    "expression": {
                      "type": "Identifier",
                      "start": 462,
                      "end": 463,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 465,
              "end": 468,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 522,
      "end": 574,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 526,
          "end": 573,
          "id": {
            "type": "Identifier",
            "start": 526,
            "end": 549,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 528,
              "end": 549,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 530,
                "end": 549,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 531,
                    "end": 540,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 532,
                      "end": 540,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 534,
                        "end": 540
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 542,
                  "end": 549,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 545,
                    "end": 549
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 552,
            "end": 573,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 562,
                "end": 568,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 563,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 566,
                  "end": 568,
                  "value": "",
                  "raw": "\"\""
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 570,
              "end": 573,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 650,
      "end": 726,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 725,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 689,
            "decorators": [],
            "name": "f5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 656,
              "end": 689,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 658,
                "end": 689,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 659,
                    "end": 680,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 660,
                      "end": 680,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 662,
                        "end": 680,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 663,
                            "end": 672,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 664,
                              "end": 672,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 666,
                                "end": 672
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 674,
                          "end": 680,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 677,
                            "end": 680
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 682,
                  "end": 689,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 685,
                    "end": 689
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 692,
            "end": 725,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 702,
                "end": 720,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 703,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 706,
                  "end": 720,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 706,
                      "end": 707,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 711,
                    "end": 720,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 712,
                      "end": 718
                    },
                    "expression": {
                      "type": "Identifier",
                      "start": 719,
                      "end": 720,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 722,
              "end": 725,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 751,
      "end": 763,
      "id": {
        "type": "Identifier",
        "start": 758,
        "end": 759,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 760,
        "end": 763,
        "body": []
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 764,
      "end": 794,
      "id": {
        "type": "Identifier",
        "start": 771,
        "end": 772,
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 773,
        "end": 794,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 779,
            "end": 792,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 786,
              "end": 792,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 790,
                  "end": 791,
                  "id": {
                    "type": "Identifier",
                    "start": 790,
                    "end": 791,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 796,
      "end": 820,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 800,
          "end": 819,
          "id": {
            "type": "Identifier",
            "start": 800,
            "end": 802,
            "decorators": [],
            "name": "f6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 805,
            "end": 819,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 806,
                "end": 811,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 806,
                  "end": 807,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 811,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 816,
              "end": 819,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 821,
      "end": 855,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 825,
          "end": 854,
          "id": {
            "type": "Identifier",
            "start": 825,
            "end": 827,
            "decorators": [],
            "name": "f7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 830,
            "end": 854,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 831,
                "end": 836,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 832,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 841,
              "end": 854,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 843,
                  "end": 852,
                  "argument": {
                    "type": "Identifier",
                    "start": 850,
                    "end": 851,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 857,
      "end": 864,
      "expression": {
        "type": "MemberExpression",
        "start": 857,
        "end": 863,
        "object": {
          "type": "CallExpression",
          "start": 857,
          "end": 861,
          "callee": {
            "type": "Identifier",
            "start": 857,
            "end": 859,
            "decorators": [],
            "name": "f7",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 862,
          "end": 863,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
