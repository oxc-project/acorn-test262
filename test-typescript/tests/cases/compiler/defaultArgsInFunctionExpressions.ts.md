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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 38,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 18,
                "end": 23,
                "left": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 19,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 22,
                  "end": 23,
                  "value": 3,
                  "raw": "3"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 94,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 97,
            "end": 101,
            "callee": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "value": 4,
                "raw": "4"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 107,
          "end": 110,
          "callee": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 125,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 125,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 119,
                "end": 125
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 128,
            "end": 133,
            "callee": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 130,
                "end": 132,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 139,
          "end": 142,
          "callee": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 253,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 252,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 211,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 214,
            "end": 252,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 224,
                "end": 237,
                "left": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 233,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 225,
                    "end": 233,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 227,
                      "end": 233
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 236,
                  "end": 237,
                  "value": 3,
                  "raw": "3"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 313,
          "end": 319,
          "callee": {
            "type": "Identifier",
            "start": 313,
            "end": 315,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 316,
              "end": 318,
              "value": "",
              "raw": "''"
            }
          ],
          "optional": false,
          "typeArguments": null
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
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 325,
          "end": 329,
          "callee": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
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
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 335,
          "end": 339,
          "callee": {
            "type": "Identifier",
            "start": 335,
            "end": 337,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 404,
      "end": 469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 468,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 410,
            "name": "f3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 413,
            "end": 468,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 423,
                "end": 463,
                "left": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 444,
                  "name": "a",
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
                          "name": "s",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 428,
                            "end": 436,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 430,
                              "end": 436
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 447,
                  "end": 463,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 448,
                      "end": 449,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 454,
                    "end": 463,
                    "expression": {
                      "type": "Identifier",
                      "start": 462,
                      "end": 463,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 455,
                      "end": 461
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 465,
              "end": 468,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 522,
      "end": 574,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 526,
          "end": 573,
          "id": {
            "type": "Identifier",
            "start": 526,
            "end": 549,
            "name": "f4",
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
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 532,
                      "end": 540,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 534,
                        "end": 540
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 552,
            "end": 573,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 562,
                "end": 568,
                "left": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 563,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 566,
                  "end": 568,
                  "value": "",
                  "raw": "\"\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 570,
              "end": 573,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 650,
      "end": 726,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 725,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 689,
            "name": "f5",
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
                    "name": "a",
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
                            "name": "s",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 664,
                              "end": 672,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 666,
                                "end": 672
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 692,
            "end": 725,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 702,
                "end": 720,
                "left": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 703,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 706,
                  "end": 720,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 706,
                      "end": 707,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 711,
                    "end": 720,
                    "expression": {
                      "type": "Identifier",
                      "start": 719,
                      "end": 720,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 712,
                      "end": 718
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 722,
              "end": 725,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "U",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 790,
                  "end": 791,
                  "id": {
                    "type": "Identifier",
                    "start": 790,
                    "end": 791,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 800,
          "end": 819,
          "id": {
            "type": "Identifier",
            "start": 800,
            "end": 802,
            "name": "f6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 805,
            "end": 819,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 806,
                "end": 811,
                "left": {
                  "type": "Identifier",
                  "start": 806,
                  "end": 807,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 811,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 816,
              "end": 819,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 821,
      "end": 855,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 825,
          "end": 854,
          "id": {
            "type": "Identifier",
            "start": 825,
            "end": 827,
            "name": "f7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 830,
            "end": 854,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 831,
                "end": 836,
                "left": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 832,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "f7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 862,
          "end": 863,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
