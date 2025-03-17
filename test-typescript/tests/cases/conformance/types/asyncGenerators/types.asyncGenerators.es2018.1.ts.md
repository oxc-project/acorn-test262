__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3989,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 33,
        "name": "inferReturnType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 39,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 40,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 73,
        "name": "inferReturnType2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 90,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 88,
            "expression": {
              "type": "YieldExpression",
              "start": 82,
              "end": 87,
              "delegate": false,
              "argument": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 91,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 124,
        "name": "inferReturnType3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 143,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 133,
            "end": 141,
            "expression": {
              "type": "YieldExpression",
              "start": 133,
              "end": 140,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 139,
                "end": 140,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 144,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 177,
        "name": "inferReturnType4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 180,
        "end": 213,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 211,
            "expression": {
              "type": "YieldExpression",
              "start": 186,
              "end": 210,
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "start": 192,
                "end": 210,
                "callee": {
                  "type": "MemberExpression",
                  "start": 192,
                  "end": 207,
                  "object": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 199,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 207,
                    "name": "resolve",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 208,
                    "end": 209,
                    "value": 1,
                    "raw": "1"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 214,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 247,
        "name": "inferReturnType5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 250,
        "end": 296,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 256,
            "end": 264,
            "expression": {
              "type": "YieldExpression",
              "start": 256,
              "end": 263,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 262,
                "end": 263,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 269,
            "end": 294,
            "expression": {
              "type": "YieldExpression",
              "start": 269,
              "end": 293,
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "start": 275,
                "end": 293,
                "callee": {
                  "type": "MemberExpression",
                  "start": 275,
                  "end": 290,
                  "object": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 282,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 290,
                    "name": "resolve",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 291,
                    "end": 292,
                    "value": 2,
                    "raw": "2"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 297,
      "end": 355,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 330,
        "name": "inferReturnType6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 333,
        "end": 355,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 339,
            "end": 353,
            "expression": {
              "type": "YieldExpression",
              "start": 339,
              "end": 352,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 346,
                "end": 352,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 347,
                    "end": 348,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 350,
                    "end": 351,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 356,
      "end": 428,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 389,
        "name": "inferReturnType7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 392,
        "end": 428,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 398,
            "end": 426,
            "expression": {
              "type": "YieldExpression",
              "start": 398,
              "end": 425,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 405,
                "end": 425,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 406,
                    "end": 424,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 406,
                      "end": 421,
                      "object": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 413,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 421,
                        "name": "resolve",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 422,
                        "end": 423,
                        "value": 1,
                        "raw": "1"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 429,
      "end": 517,
      "id": {
        "type": "Identifier",
        "start": 446,
        "end": 462,
        "name": "inferReturnType8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 465,
        "end": 517,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 471,
            "end": 515,
            "expression": {
              "type": "YieldExpression",
              "start": 471,
              "end": 514,
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "start": 478,
                "end": 514,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 479,
                  "end": 511,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 499,
                    "end": 511,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 501,
                        "end": 509,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 501,
                          "end": 508,
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "start": 507,
                            "end": 508,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 518,
      "end": 615,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 524,
          "end": 614,
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 575,
            "name": "assignability1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 575,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 540,
                "end": 575,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 543,
                  "end": 575,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 546,
                    "end": 575,
                    "typeName": {
                      "type": "Identifier",
                      "start": 546,
                      "end": 567,
                      "name": "AsyncIterableIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 567,
                      "end": 575,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 568,
                          "end": 574
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 578,
            "end": 614,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 598,
              "end": 614,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 604,
                  "end": 612,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 604,
                    "end": 611,
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "start": 610,
                      "end": 611,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 616,
      "end": 730,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 622,
          "end": 729,
          "id": {
            "type": "Identifier",
            "start": 622,
            "end": 673,
            "name": "assignability2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 636,
              "end": 673,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 638,
                "end": 673,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 641,
                  "end": 673,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 644,
                    "end": 673,
                    "typeName": {
                      "type": "Identifier",
                      "start": 644,
                      "end": 665,
                      "name": "AsyncIterableIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 665,
                      "end": 673,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 666,
                          "end": 672
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 676,
            "end": 729,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 696,
              "end": 729,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 702,
                  "end": 727,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 702,
                    "end": 726,
                    "delegate": false,
                    "argument": {
                      "type": "CallExpression",
                      "start": 708,
                      "end": 726,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 708,
                        "end": 723,
                        "object": {
                          "type": "Identifier",
                          "start": 708,
                          "end": 715,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 716,
                          "end": 723,
                          "name": "resolve",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 724,
                          "end": 725,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 731,
      "end": 834,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 737,
          "end": 833,
          "id": {
            "type": "Identifier",
            "start": 737,
            "end": 788,
            "name": "assignability3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 751,
              "end": 788,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 753,
                "end": 788,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 756,
                  "end": 788,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 759,
                    "end": 788,
                    "typeName": {
                      "type": "Identifier",
                      "start": 759,
                      "end": 780,
                      "name": "AsyncIterableIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 780,
                      "end": 788,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 781,
                          "end": 787
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 791,
            "end": 833,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 811,
              "end": 833,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 817,
                  "end": 831,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 817,
                    "end": 830,
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 824,
                      "end": 830,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 825,
                          "end": 826,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 828,
                          "end": 829,
                          "value": 2,
                          "raw": "2"
                        }
                      ]
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 835,
      "end": 952,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 841,
          "end": 951,
          "id": {
            "type": "Identifier",
            "start": 841,
            "end": 892,
            "name": "assignability4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 855,
              "end": 892,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 857,
                "end": 892,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 860,
                  "end": 892,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 863,
                    "end": 892,
                    "typeName": {
                      "type": "Identifier",
                      "start": 863,
                      "end": 884,
                      "name": "AsyncIterableIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 884,
                      "end": 892,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 885,
                          "end": 891
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 895,
            "end": 951,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 915,
              "end": 951,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 921,
                  "end": 949,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 921,
                    "end": 948,
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 928,
                      "end": 948,
                      "elements": [
                        {
                          "type": "CallExpression",
                          "start": 929,
                          "end": 947,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 929,
                            "end": 944,
                            "object": {
                              "type": "Identifier",
                              "start": 929,
                              "end": 936,
                              "name": "Promise",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 937,
                              "end": 944,
                              "name": "resolve",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 945,
                              "end": 946,
                              "value": 1,
                              "raw": "1"
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 953,
      "end": 1086,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 959,
          "end": 1085,
          "id": {
            "type": "Identifier",
            "start": 959,
            "end": 1010,
            "name": "assignability5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 973,
              "end": 1010,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 975,
                "end": 1010,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 978,
                  "end": 1010,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 981,
                    "end": 1010,
                    "typeName": {
                      "type": "Identifier",
                      "start": 981,
                      "end": 1002,
                      "name": "AsyncIterableIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1002,
                      "end": 1010,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1003,
                          "end": 1009
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1013,
            "end": 1085,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1033,
              "end": 1085,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1039,
                  "end": 1083,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1039,
                    "end": 1082,
                    "delegate": true,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1046,
                      "end": 1082,
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 1047,
                        "end": 1079,
                        "id": null,
                        "expression": false,
                        "generator": true,
                        "async": true,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 1067,
                          "end": 1079,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1069,
                              "end": 1077,
                              "expression": {
                                "type": "YieldExpression",
                                "start": 1069,
                                "end": 1076,
                                "delegate": false,
                                "argument": {
                                  "type": "Literal",
                                  "start": 1075,
                                  "end": 1076,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1087,
      "end": 1176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1093,
          "end": 1175,
          "id": {
            "type": "Identifier",
            "start": 1093,
            "end": 1136,
            "name": "assignability6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1107,
              "end": 1136,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1109,
                "end": 1136,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1112,
                  "end": 1136,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1115,
                    "end": 1136,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1115,
                      "end": 1128,
                      "name": "AsyncIterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1128,
                      "end": 1136,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1129,
                          "end": 1135
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1139,
            "end": 1175,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1159,
              "end": 1175,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1165,
                  "end": 1173,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1165,
                    "end": 1172,
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "start": 1171,
                      "end": 1172,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1177,
      "end": 1283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1183,
          "end": 1282,
          "id": {
            "type": "Identifier",
            "start": 1183,
            "end": 1226,
            "name": "assignability7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1197,
              "end": 1226,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1199,
                "end": 1226,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1202,
                  "end": 1226,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1205,
                    "end": 1226,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1205,
                      "end": 1218,
                      "name": "AsyncIterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1218,
                      "end": 1226,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1219,
                          "end": 1225
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1229,
            "end": 1282,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1249,
              "end": 1282,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1255,
                  "end": 1280,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1255,
                    "end": 1279,
                    "delegate": false,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1261,
                      "end": 1279,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1261,
                        "end": 1276,
                        "object": {
                          "type": "Identifier",
                          "start": 1261,
                          "end": 1268,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1269,
                          "end": 1276,
                          "name": "resolve",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1277,
                          "end": 1278,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1284,
      "end": 1379,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1290,
          "end": 1378,
          "id": {
            "type": "Identifier",
            "start": 1290,
            "end": 1333,
            "name": "assignability8",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1304,
              "end": 1333,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1306,
                "end": 1333,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1309,
                  "end": 1333,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1312,
                    "end": 1333,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1312,
                      "end": 1325,
                      "name": "AsyncIterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1325,
                      "end": 1333,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1326,
                          "end": 1332
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1336,
            "end": 1378,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1356,
              "end": 1378,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1362,
                  "end": 1376,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1362,
                    "end": 1375,
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 1369,
                      "end": 1375,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1370,
                          "end": 1371,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 1373,
                          "end": 1374,
                          "value": 2,
                          "raw": "2"
                        }
                      ]
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1380,
      "end": 1489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1386,
          "end": 1488,
          "id": {
            "type": "Identifier",
            "start": 1386,
            "end": 1429,
            "name": "assignability9",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1400,
              "end": 1429,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1402,
                "end": 1429,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1405,
                  "end": 1429,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1408,
                    "end": 1429,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1408,
                      "end": 1421,
                      "name": "AsyncIterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1421,
                      "end": 1429,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1422,
                          "end": 1428
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1432,
            "end": 1488,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1452,
              "end": 1488,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1458,
                  "end": 1486,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1458,
                    "end": 1485,
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 1465,
                      "end": 1485,
                      "elements": [
                        {
                          "type": "CallExpression",
                          "start": 1466,
                          "end": 1484,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1466,
                            "end": 1481,
                            "object": {
                              "type": "Identifier",
                              "start": 1466,
                              "end": 1473,
                              "name": "Promise",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1474,
                              "end": 1481,
                              "name": "resolve",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 1482,
                              "end": 1483,
                              "value": 1,
                              "raw": "1"
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1490,
      "end": 1616,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1496,
          "end": 1615,
          "id": {
            "type": "Identifier",
            "start": 1496,
            "end": 1540,
            "name": "assignability10",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1511,
              "end": 1540,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1513,
                "end": 1540,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1516,
                  "end": 1540,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1519,
                    "end": 1540,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1519,
                      "end": 1532,
                      "name": "AsyncIterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1532,
                      "end": 1540,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1533,
                          "end": 1539
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1543,
            "end": 1615,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1563,
              "end": 1615,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1569,
                  "end": 1613,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1569,
                    "end": 1612,
                    "delegate": true,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1576,
                      "end": 1612,
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 1577,
                        "end": 1609,
                        "id": null,
                        "expression": false,
                        "generator": true,
                        "async": true,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 1597,
                          "end": 1609,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1599,
                              "end": 1607,
                              "expression": {
                                "type": "YieldExpression",
                                "start": 1599,
                                "end": 1606,
                                "delegate": false,
                                "argument": {
                                  "type": "Literal",
                                  "start": 1605,
                                  "end": 1606,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1617,
      "end": 1707,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1623,
          "end": 1706,
          "id": {
            "type": "Identifier",
            "start": 1623,
            "end": 1667,
            "name": "assignability11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1638,
              "end": 1667,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1640,
                "end": 1667,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1643,
                  "end": 1667,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1646,
                    "end": 1667,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1646,
                      "end": 1659,
                      "name": "AsyncIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1659,
                      "end": 1667,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1660,
                          "end": 1666
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1670,
            "end": 1706,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1690,
              "end": 1706,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1696,
                  "end": 1704,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1696,
                    "end": 1703,
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "start": 1702,
                      "end": 1703,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1708,
      "end": 1815,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1714,
          "end": 1814,
          "id": {
            "type": "Identifier",
            "start": 1714,
            "end": 1758,
            "name": "assignability12",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1729,
              "end": 1758,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1731,
                "end": 1758,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1734,
                  "end": 1758,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1737,
                    "end": 1758,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1737,
                      "end": 1750,
                      "name": "AsyncIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1750,
                      "end": 1758,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1751,
                          "end": 1757
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1761,
            "end": 1814,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1781,
              "end": 1814,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1787,
                  "end": 1812,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1787,
                    "end": 1811,
                    "delegate": false,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1793,
                      "end": 1811,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1793,
                        "end": 1808,
                        "object": {
                          "type": "Identifier",
                          "start": 1793,
                          "end": 1800,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1801,
                          "end": 1808,
                          "name": "resolve",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1809,
                          "end": 1810,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1816,
      "end": 1912,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1822,
          "end": 1911,
          "id": {
            "type": "Identifier",
            "start": 1822,
            "end": 1866,
            "name": "assignability13",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1837,
              "end": 1866,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1839,
                "end": 1866,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1842,
                  "end": 1866,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1845,
                    "end": 1866,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1845,
                      "end": 1858,
                      "name": "AsyncIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1858,
                      "end": 1866,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1859,
                          "end": 1865
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1869,
            "end": 1911,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1889,
              "end": 1911,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1895,
                  "end": 1909,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1895,
                    "end": 1908,
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 1902,
                      "end": 1908,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1903,
                          "end": 1904,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 1906,
                          "end": 1907,
                          "value": 2,
                          "raw": "2"
                        }
                      ]
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1913,
      "end": 2023,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1919,
          "end": 2022,
          "id": {
            "type": "Identifier",
            "start": 1919,
            "end": 1963,
            "name": "assignability14",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1934,
              "end": 1963,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1936,
                "end": 1963,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1939,
                  "end": 1963,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1942,
                    "end": 1963,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1942,
                      "end": 1955,
                      "name": "AsyncIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1955,
                      "end": 1963,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1956,
                          "end": 1962
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1966,
            "end": 2022,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1986,
              "end": 2022,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1992,
                  "end": 2020,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1992,
                    "end": 2019,
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 1999,
                      "end": 2019,
                      "elements": [
                        {
                          "type": "CallExpression",
                          "start": 2000,
                          "end": 2018,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2000,
                            "end": 2015,
                            "object": {
                              "type": "Identifier",
                              "start": 2000,
                              "end": 2007,
                              "name": "Promise",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2008,
                              "end": 2015,
                              "name": "resolve",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 2016,
                              "end": 2017,
                              "value": 1,
                              "raw": "1"
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2024,
      "end": 2150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2030,
          "end": 2149,
          "id": {
            "type": "Identifier",
            "start": 2030,
            "end": 2074,
            "name": "assignability15",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2045,
              "end": 2074,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2047,
                "end": 2074,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2050,
                  "end": 2074,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2053,
                    "end": 2074,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2053,
                      "end": 2066,
                      "name": "AsyncIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2066,
                      "end": 2074,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2067,
                          "end": 2073
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 2077,
            "end": 2149,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 2097,
              "end": 2149,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2103,
                  "end": 2147,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 2103,
                    "end": 2146,
                    "delegate": true,
                    "argument": {
                      "type": "CallExpression",
                      "start": 2110,
                      "end": 2146,
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 2111,
                        "end": 2143,
                        "id": null,
                        "expression": false,
                        "generator": true,
                        "async": true,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 2131,
                          "end": 2143,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 2133,
                              "end": 2141,
                              "expression": {
                                "type": "YieldExpression",
                                "start": 2133,
                                "end": 2140,
                                "delegate": false,
                                "argument": {
                                  "type": "Literal",
                                  "start": 2139,
                                  "end": 2140,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2151,
      "end": 2237,
      "id": {
        "type": "Identifier",
        "start": 2168,
        "end": 2187,
        "name": "explicitReturnType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2221,
        "end": 2237,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2227,
            "end": 2235,
            "expression": {
              "type": "YieldExpression",
              "start": 2227,
              "end": 2234,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 2233,
                "end": 2234,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2189,
        "end": 2220,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2191,
          "end": 2220,
          "typeName": {
            "type": "Identifier",
            "start": 2191,
            "end": 2212,
            "name": "AsyncIterableIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2212,
            "end": 2220,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2213,
                "end": 2219
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2238,
      "end": 2341,
      "id": {
        "type": "Identifier",
        "start": 2255,
        "end": 2274,
        "name": "explicitReturnType2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2308,
        "end": 2341,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2314,
            "end": 2339,
            "expression": {
              "type": "YieldExpression",
              "start": 2314,
              "end": 2338,
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "start": 2320,
                "end": 2338,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2320,
                  "end": 2335,
                  "object": {
                    "type": "Identifier",
                    "start": 2320,
                    "end": 2327,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2328,
                    "end": 2335,
                    "name": "resolve",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 2336,
                    "end": 2337,
                    "value": 1,
                    "raw": "1"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2276,
        "end": 2307,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2278,
          "end": 2307,
          "typeName": {
            "type": "Identifier",
            "start": 2278,
            "end": 2299,
            "name": "AsyncIterableIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2299,
            "end": 2307,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2300,
                "end": 2306
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2342,
      "end": 2434,
      "id": {
        "type": "Identifier",
        "start": 2359,
        "end": 2378,
        "name": "explicitReturnType3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2412,
        "end": 2434,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2418,
            "end": 2432,
            "expression": {
              "type": "YieldExpression",
              "start": 2418,
              "end": 2431,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 2425,
                "end": 2431,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 2426,
                    "end": 2427,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 2429,
                    "end": 2430,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2380,
        "end": 2411,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2382,
          "end": 2411,
          "typeName": {
            "type": "Identifier",
            "start": 2382,
            "end": 2403,
            "name": "AsyncIterableIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2403,
            "end": 2411,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2404,
                "end": 2410
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2435,
      "end": 2541,
      "id": {
        "type": "Identifier",
        "start": 2452,
        "end": 2471,
        "name": "explicitReturnType4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2505,
        "end": 2541,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2511,
            "end": 2539,
            "expression": {
              "type": "YieldExpression",
              "start": 2511,
              "end": 2538,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 2518,
                "end": 2538,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 2519,
                    "end": 2537,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2519,
                      "end": 2534,
                      "object": {
                        "type": "Identifier",
                        "start": 2519,
                        "end": 2526,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2527,
                        "end": 2534,
                        "name": "resolve",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2535,
                        "end": 2536,
                        "value": 1,
                        "raw": "1"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2473,
        "end": 2504,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2475,
          "end": 2504,
          "typeName": {
            "type": "Identifier",
            "start": 2475,
            "end": 2496,
            "name": "AsyncIterableIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2496,
            "end": 2504,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2497,
                "end": 2503
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2542,
      "end": 2664,
      "id": {
        "type": "Identifier",
        "start": 2559,
        "end": 2578,
        "name": "explicitReturnType5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2612,
        "end": 2664,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2618,
            "end": 2662,
            "expression": {
              "type": "YieldExpression",
              "start": 2618,
              "end": 2661,
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "start": 2625,
                "end": 2661,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 2626,
                  "end": 2658,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 2646,
                    "end": 2658,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2648,
                        "end": 2656,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 2648,
                          "end": 2655,
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "start": 2654,
                            "end": 2655,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2580,
        "end": 2611,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2582,
          "end": 2611,
          "typeName": {
            "type": "Identifier",
            "start": 2582,
            "end": 2603,
            "name": "AsyncIterableIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2603,
            "end": 2611,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2604,
                "end": 2610
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2665,
      "end": 2743,
      "id": {
        "type": "Identifier",
        "start": 2682,
        "end": 2701,
        "name": "explicitReturnType6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2727,
        "end": 2743,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2733,
            "end": 2741,
            "expression": {
              "type": "YieldExpression",
              "start": 2733,
              "end": 2740,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 2739,
                "end": 2740,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2703,
        "end": 2726,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2705,
          "end": 2726,
          "typeName": {
            "type": "Identifier",
            "start": 2705,
            "end": 2718,
            "name": "AsyncIterable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2718,
            "end": 2726,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2719,
                "end": 2725
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2744,
      "end": 2839,
      "id": {
        "type": "Identifier",
        "start": 2761,
        "end": 2780,
        "name": "explicitReturnType7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2806,
        "end": 2839,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2812,
            "end": 2837,
            "expression": {
              "type": "YieldExpression",
              "start": 2812,
              "end": 2836,
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "start": 2818,
                "end": 2836,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2818,
                  "end": 2833,
                  "object": {
                    "type": "Identifier",
                    "start": 2818,
                    "end": 2825,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2826,
                    "end": 2833,
                    "name": "resolve",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 2834,
                    "end": 2835,
                    "value": 1,
                    "raw": "1"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2782,
        "end": 2805,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2784,
          "end": 2805,
          "typeName": {
            "type": "Identifier",
            "start": 2784,
            "end": 2797,
            "name": "AsyncIterable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2797,
            "end": 2805,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2798,
                "end": 2804
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2840,
      "end": 2924,
      "id": {
        "type": "Identifier",
        "start": 2857,
        "end": 2876,
        "name": "explicitReturnType8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2902,
        "end": 2924,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2908,
            "end": 2922,
            "expression": {
              "type": "YieldExpression",
              "start": 2908,
              "end": 2921,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 2915,
                "end": 2921,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 2916,
                    "end": 2917,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 2919,
                    "end": 2920,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2878,
        "end": 2901,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2880,
          "end": 2901,
          "typeName": {
            "type": "Identifier",
            "start": 2880,
            "end": 2893,
            "name": "AsyncIterable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2893,
            "end": 2901,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2894,
                "end": 2900
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2925,
      "end": 3023,
      "id": {
        "type": "Identifier",
        "start": 2942,
        "end": 2961,
        "name": "explicitReturnType9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2987,
        "end": 3023,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2993,
            "end": 3021,
            "expression": {
              "type": "YieldExpression",
              "start": 2993,
              "end": 3020,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 3000,
                "end": 3020,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 3001,
                    "end": 3019,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3001,
                      "end": 3016,
                      "object": {
                        "type": "Identifier",
                        "start": 3001,
                        "end": 3008,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3009,
                        "end": 3016,
                        "name": "resolve",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 3017,
                        "end": 3018,
                        "value": 1,
                        "raw": "1"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2963,
        "end": 2986,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2965,
          "end": 2986,
          "typeName": {
            "type": "Identifier",
            "start": 2965,
            "end": 2978,
            "name": "AsyncIterable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2978,
            "end": 2986,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2979,
                "end": 2985
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3024,
      "end": 3139,
      "id": {
        "type": "Identifier",
        "start": 3041,
        "end": 3061,
        "name": "explicitReturnType10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 3087,
        "end": 3139,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3093,
            "end": 3137,
            "expression": {
              "type": "YieldExpression",
              "start": 3093,
              "end": 3136,
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "start": 3100,
                "end": 3136,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 3101,
                  "end": 3133,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 3121,
                    "end": 3133,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 3123,
                        "end": 3131,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 3123,
                          "end": 3130,
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "start": 3129,
                            "end": 3130,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3063,
        "end": 3086,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3065,
          "end": 3086,
          "typeName": {
            "type": "Identifier",
            "start": 3065,
            "end": 3078,
            "name": "AsyncIterable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3078,
            "end": 3086,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3079,
                "end": 3085
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3140,
      "end": 3219,
      "id": {
        "type": "Identifier",
        "start": 3157,
        "end": 3177,
        "name": "explicitReturnType11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 3203,
        "end": 3219,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3209,
            "end": 3217,
            "expression": {
              "type": "YieldExpression",
              "start": 3209,
              "end": 3216,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 3215,
                "end": 3216,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3179,
        "end": 3202,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3181,
          "end": 3202,
          "typeName": {
            "type": "Identifier",
            "start": 3181,
            "end": 3194,
            "name": "AsyncIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3194,
            "end": 3202,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3195,
                "end": 3201
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3220,
      "end": 3316,
      "id": {
        "type": "Identifier",
        "start": 3237,
        "end": 3257,
        "name": "explicitReturnType12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 3283,
        "end": 3316,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3289,
            "end": 3314,
            "expression": {
              "type": "YieldExpression",
              "start": 3289,
              "end": 3313,
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "start": 3295,
                "end": 3313,
                "callee": {
                  "type": "MemberExpression",
                  "start": 3295,
                  "end": 3310,
                  "object": {
                    "type": "Identifier",
                    "start": 3295,
                    "end": 3302,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3303,
                    "end": 3310,
                    "name": "resolve",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 3311,
                    "end": 3312,
                    "value": 1,
                    "raw": "1"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3259,
        "end": 3282,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3261,
          "end": 3282,
          "typeName": {
            "type": "Identifier",
            "start": 3261,
            "end": 3274,
            "name": "AsyncIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3274,
            "end": 3282,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3275,
                "end": 3281
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3317,
      "end": 3402,
      "id": {
        "type": "Identifier",
        "start": 3334,
        "end": 3354,
        "name": "explicitReturnType13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 3380,
        "end": 3402,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3386,
            "end": 3400,
            "expression": {
              "type": "YieldExpression",
              "start": 3386,
              "end": 3399,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 3393,
                "end": 3399,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 3394,
                    "end": 3395,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 3397,
                    "end": 3398,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3356,
        "end": 3379,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3358,
          "end": 3379,
          "typeName": {
            "type": "Identifier",
            "start": 3358,
            "end": 3371,
            "name": "AsyncIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3371,
            "end": 3379,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3372,
                "end": 3378
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3403,
      "end": 3502,
      "id": {
        "type": "Identifier",
        "start": 3420,
        "end": 3440,
        "name": "explicitReturnType14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 3466,
        "end": 3502,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3472,
            "end": 3500,
            "expression": {
              "type": "YieldExpression",
              "start": 3472,
              "end": 3499,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 3479,
                "end": 3499,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 3480,
                    "end": 3498,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3480,
                      "end": 3495,
                      "object": {
                        "type": "Identifier",
                        "start": 3480,
                        "end": 3487,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3488,
                        "end": 3495,
                        "name": "resolve",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 3496,
                        "end": 3497,
                        "value": 1,
                        "raw": "1"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3442,
        "end": 3465,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3444,
          "end": 3465,
          "typeName": {
            "type": "Identifier",
            "start": 3444,
            "end": 3457,
            "name": "AsyncIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3457,
            "end": 3465,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3458,
                "end": 3464
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3503,
      "end": 3618,
      "id": {
        "type": "Identifier",
        "start": 3520,
        "end": 3540,
        "name": "explicitReturnType15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 3566,
        "end": 3618,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3572,
            "end": 3616,
            "expression": {
              "type": "YieldExpression",
              "start": 3572,
              "end": 3615,
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "start": 3579,
                "end": 3615,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 3580,
                  "end": 3612,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 3600,
                    "end": 3612,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 3602,
                        "end": 3610,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 3602,
                          "end": 3609,
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "start": 3608,
                            "end": 3609,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3542,
        "end": 3565,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3544,
          "end": 3565,
          "typeName": {
            "type": "Identifier",
            "start": 3544,
            "end": 3557,
            "name": "AsyncIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3557,
            "end": 3565,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3558,
                "end": 3564
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3619,
      "end": 3679,
      "id": {
        "type": "Identifier",
        "start": 3636,
        "end": 3656,
        "name": "explicitReturnType16",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 3663,
        "end": 3679,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3669,
            "end": 3677,
            "expression": {
              "type": "YieldExpression",
              "start": 3669,
              "end": 3676,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 3675,
                "end": 3676,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3658,
        "end": 3662,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 3660,
          "end": 3662,
          "members": []
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3680,
      "end": 3738,
      "id": {
        "type": "Identifier",
        "start": 3697,
        "end": 3709,
        "name": "awaitedType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 3712,
        "end": 3738,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3718,
            "end": 3736,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3724,
                "end": 3735,
                "id": {
                  "type": "Identifier",
                  "start": 3724,
                  "end": 3725,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 3728,
                  "end": 3735,
                  "argument": {
                    "type": "Literal",
                    "start": 3734,
                    "end": 3735,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3739,
      "end": 3814,
      "id": {
        "type": "Identifier",
        "start": 3756,
        "end": 3768,
        "name": "awaitedType2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 3771,
        "end": 3814,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3777,
            "end": 3812,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3783,
                "end": 3811,
                "id": {
                  "type": "Identifier",
                  "start": 3783,
                  "end": 3784,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 3787,
                  "end": 3811,
                  "argument": {
                    "type": "CallExpression",
                    "start": 3793,
                    "end": 3811,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3793,
                      "end": 3808,
                      "object": {
                        "type": "Identifier",
                        "start": 3793,
                        "end": 3800,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3801,
                        "end": 3808,
                        "name": "resolve",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 3809,
                        "end": 3810,
                        "value": 1,
                        "raw": "1"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3815,
      "end": 3988,
      "id": {
        "type": "Identifier",
        "start": 3832,
        "end": 3841,
        "name": "nextType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 3905,
        "end": 3988,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3911,
            "end": 3927,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3917,
                "end": 3926,
                "id": {
                  "type": "Identifier",
                  "start": 3917,
                  "end": 3918,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 3921,
                  "end": 3926,
                  "delegate": false,
                  "argument": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3843,
        "end": 3904,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 3845,
          "end": 3904,
          "members": [
            {
              "type": "TSMethodSignature",
              "start": 3847,
              "end": 3902,
              "key": {
                "type": "Identifier",
                "start": 3847,
                "end": 3851,
                "name": "next",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 3852,
                  "end": 3896,
                  "argument": {
                    "type": "Identifier",
                    "start": 3855,
                    "end": 3859,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3859,
                    "end": 3896,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 3861,
                      "end": 3896,
                      "types": [
                        {
                          "type": "TSTupleType",
                          "start": 3861,
                          "end": 3863,
                          "elementTypes": []
                        },
                        {
                          "type": "TSTupleType",
                          "start": 3866,
                          "end": 3896,
                          "elementTypes": [
                            {
                              "type": "TSUnionType",
                              "start": 3867,
                              "end": 3895,
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 3867,
                                  "end": 3873
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3876,
                                  "end": 3895,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3876,
                                    "end": 3887,
                                    "name": "PromiseLike",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 3887,
                                    "end": 3895,
                                    "params": [
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 3888,
                                        "end": 3894
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3897,
                "end": 3902,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3899,
                  "end": 3902
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
