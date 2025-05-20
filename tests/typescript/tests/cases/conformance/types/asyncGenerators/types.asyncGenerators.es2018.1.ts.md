__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3988,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 39,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 33,
        "decorators": [],
        "name": "inferReturnType1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 40,
      "end": 90,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 90,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 88,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 82,
              "end": 87,
              "argument": null,
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 73,
        "decorators": [],
        "name": "inferReturnType2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 91,
      "end": 143,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 143,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 133,
            "end": 141,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 133,
              "end": 140,
              "argument": {
                "type": "Literal",
                "start": 139,
                "end": 140,
                "raw": "1",
                "value": 1
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 124,
        "decorators": [],
        "name": "inferReturnType3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 144,
      "end": 213,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 180,
        "end": 213,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 211,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 186,
              "end": 210,
              "argument": {
                "type": "CallExpression",
                "start": 192,
                "end": 210,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 208,
                    "end": 209,
                    "raw": "1",
                    "value": 1
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 192,
                  "end": 207,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 199,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 207,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 177,
        "decorators": [],
        "name": "inferReturnType4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 214,
      "end": 296,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 250,
        "end": 296,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 256,
            "end": 264,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 256,
              "end": 263,
              "argument": {
                "type": "Literal",
                "start": 262,
                "end": 263,
                "raw": "1",
                "value": 1
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 269,
            "end": 294,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 269,
              "end": 293,
              "argument": {
                "type": "CallExpression",
                "start": 275,
                "end": 293,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 291,
                    "end": 292,
                    "raw": "2",
                    "value": 2
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 275,
                  "end": 290,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 282,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 290,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 247,
        "decorators": [],
        "name": "inferReturnType5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 297,
      "end": 355,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 333,
        "end": 355,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 339,
            "end": 353,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 339,
              "end": 352,
              "argument": {
                "type": "ArrayExpression",
                "start": 346,
                "end": 352,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 347,
                    "end": 348,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 350,
                    "end": 351,
                    "raw": "2",
                    "value": 2
                  }
                ]
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 330,
        "decorators": [],
        "name": "inferReturnType6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 356,
      "end": 428,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 392,
        "end": 428,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 398,
            "end": 426,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 398,
              "end": 425,
              "argument": {
                "type": "ArrayExpression",
                "start": 405,
                "end": 425,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 406,
                    "end": 424,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 422,
                        "end": 423,
                        "raw": "1",
                        "value": 1
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 406,
                      "end": 421,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 413,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 421,
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                ]
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 389,
        "decorators": [],
        "name": "inferReturnType7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 429,
      "end": 517,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 465,
        "end": 517,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 471,
            "end": 515,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 471,
              "end": 514,
              "argument": {
                "type": "CallExpression",
                "start": 478,
                "end": 514,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 479,
                  "end": 511,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 499,
                    "end": 511,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 501,
                        "end": 509,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 501,
                          "end": 508,
                          "argument": {
                            "type": "Literal",
                            "start": 507,
                            "end": 508,
                            "raw": "1",
                            "value": 1
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                },
                "optional": false,
                "typeArguments": null
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 446,
        "end": 462,
        "decorators": [],
        "name": "inferReturnType8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 575,
            "decorators": [],
            "name": "assignability1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 575,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 540,
                "end": 575,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 543,
                  "end": 575,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 546,
                    "end": 575,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 546,
                      "end": 567,
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 578,
            "end": 614,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 598,
              "end": 614,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 604,
                  "end": 612,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 604,
                    "end": 611,
                    "argument": {
                      "type": "Literal",
                      "start": 610,
                      "end": 611,
                      "raw": "1",
                      "value": 1
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 622,
            "end": 673,
            "decorators": [],
            "name": "assignability2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 636,
              "end": 673,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 638,
                "end": 673,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 641,
                  "end": 673,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 644,
                    "end": 673,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 644,
                      "end": 665,
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 676,
            "end": 729,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 696,
              "end": 729,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 702,
                  "end": 727,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 702,
                    "end": 726,
                    "argument": {
                      "type": "CallExpression",
                      "start": 708,
                      "end": 726,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 724,
                          "end": 725,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 708,
                        "end": 723,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 708,
                          "end": 715,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 716,
                          "end": 723,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 737,
            "end": 788,
            "decorators": [],
            "name": "assignability3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 751,
              "end": 788,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 753,
                "end": 788,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 756,
                  "end": 788,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 759,
                    "end": 788,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 759,
                      "end": 780,
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 791,
            "end": 833,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 811,
              "end": 833,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 817,
                  "end": 831,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 817,
                    "end": 830,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 824,
                      "end": 830,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 825,
                          "end": 826,
                          "raw": "1",
                          "value": 1
                        },
                        {
                          "type": "Literal",
                          "start": 828,
                          "end": 829,
                          "raw": "2",
                          "value": 2
                        }
                      ]
                    },
                    "delegate": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 841,
            "end": 892,
            "decorators": [],
            "name": "assignability4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 855,
              "end": 892,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 857,
                "end": 892,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 860,
                  "end": 892,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 863,
                    "end": 892,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 863,
                      "end": 884,
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 895,
            "end": 951,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 915,
              "end": 951,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 921,
                  "end": 949,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 921,
                    "end": 948,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 928,
                      "end": 948,
                      "elements": [
                        {
                          "type": "CallExpression",
                          "start": 929,
                          "end": 947,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 945,
                              "end": 946,
                              "raw": "1",
                              "value": 1
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 929,
                            "end": 944,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 929,
                              "end": 936,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 937,
                              "end": 944,
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      ]
                    },
                    "delegate": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 959,
            "end": 1010,
            "decorators": [],
            "name": "assignability5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 973,
              "end": 1010,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 975,
                "end": 1010,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 978,
                  "end": 1010,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 981,
                    "end": 1010,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 981,
                      "end": 1002,
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1013,
            "end": 1085,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1033,
              "end": 1085,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1039,
                  "end": 1083,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1039,
                    "end": 1082,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1046,
                      "end": 1082,
                      "arguments": [],
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 1047,
                        "end": 1079,
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1067,
                          "end": 1079,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1069,
                              "end": 1077,
                              "directive": null,
                              "expression": {
                                "type": "YieldExpression",
                                "start": 1069,
                                "end": 1076,
                                "argument": {
                                  "type": "Literal",
                                  "start": 1075,
                                  "end": 1076,
                                  "raw": "1",
                                  "value": 1
                                },
                                "delegate": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": true,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "delegate": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1093,
            "end": 1136,
            "decorators": [],
            "name": "assignability6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1107,
              "end": 1136,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1109,
                "end": 1136,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1112,
                  "end": 1136,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1115,
                    "end": 1136,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1115,
                      "end": 1128,
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1139,
            "end": 1175,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1159,
              "end": 1175,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1165,
                  "end": 1173,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1165,
                    "end": 1172,
                    "argument": {
                      "type": "Literal",
                      "start": 1171,
                      "end": 1172,
                      "raw": "1",
                      "value": 1
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1183,
            "end": 1226,
            "decorators": [],
            "name": "assignability7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1197,
              "end": 1226,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1199,
                "end": 1226,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1202,
                  "end": 1226,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1205,
                    "end": 1226,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1205,
                      "end": 1218,
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1229,
            "end": 1282,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1249,
              "end": 1282,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1255,
                  "end": 1280,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1255,
                    "end": 1279,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1261,
                      "end": 1279,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1277,
                          "end": 1278,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1261,
                        "end": 1276,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1261,
                          "end": 1268,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1269,
                          "end": 1276,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1290,
            "end": 1333,
            "decorators": [],
            "name": "assignability8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1304,
              "end": 1333,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1306,
                "end": 1333,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1309,
                  "end": 1333,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1312,
                    "end": 1333,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1312,
                      "end": 1325,
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1336,
            "end": 1378,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1356,
              "end": 1378,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1362,
                  "end": 1376,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1362,
                    "end": 1375,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 1369,
                      "end": 1375,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1370,
                          "end": 1371,
                          "raw": "1",
                          "value": 1
                        },
                        {
                          "type": "Literal",
                          "start": 1373,
                          "end": 1374,
                          "raw": "2",
                          "value": 2
                        }
                      ]
                    },
                    "delegate": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1386,
            "end": 1429,
            "decorators": [],
            "name": "assignability9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1400,
              "end": 1429,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1402,
                "end": 1429,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1405,
                  "end": 1429,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1408,
                    "end": 1429,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1408,
                      "end": 1421,
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1432,
            "end": 1488,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1452,
              "end": 1488,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1458,
                  "end": 1486,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1458,
                    "end": 1485,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 1465,
                      "end": 1485,
                      "elements": [
                        {
                          "type": "CallExpression",
                          "start": 1466,
                          "end": 1484,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 1482,
                              "end": 1483,
                              "raw": "1",
                              "value": 1
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1466,
                            "end": 1481,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1466,
                              "end": 1473,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1474,
                              "end": 1481,
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      ]
                    },
                    "delegate": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1496,
            "end": 1540,
            "decorators": [],
            "name": "assignability10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1511,
              "end": 1540,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1513,
                "end": 1540,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1516,
                  "end": 1540,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1519,
                    "end": 1540,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1519,
                      "end": 1532,
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1543,
            "end": 1615,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1563,
              "end": 1615,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1569,
                  "end": 1613,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1569,
                    "end": 1612,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1576,
                      "end": 1612,
                      "arguments": [],
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 1577,
                        "end": 1609,
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1597,
                          "end": 1609,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1599,
                              "end": 1607,
                              "directive": null,
                              "expression": {
                                "type": "YieldExpression",
                                "start": 1599,
                                "end": 1606,
                                "argument": {
                                  "type": "Literal",
                                  "start": 1605,
                                  "end": 1606,
                                  "raw": "1",
                                  "value": 1
                                },
                                "delegate": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": true,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "delegate": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1623,
            "end": 1667,
            "decorators": [],
            "name": "assignability11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1638,
              "end": 1667,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1640,
                "end": 1667,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1643,
                  "end": 1667,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1646,
                    "end": 1667,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1646,
                      "end": 1659,
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1670,
            "end": 1706,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1690,
              "end": 1706,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1696,
                  "end": 1704,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1696,
                    "end": 1703,
                    "argument": {
                      "type": "Literal",
                      "start": 1702,
                      "end": 1703,
                      "raw": "1",
                      "value": 1
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1714,
            "end": 1758,
            "decorators": [],
            "name": "assignability12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1729,
              "end": 1758,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1731,
                "end": 1758,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1734,
                  "end": 1758,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1737,
                    "end": 1758,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1737,
                      "end": 1750,
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1761,
            "end": 1814,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1781,
              "end": 1814,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1787,
                  "end": 1812,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1787,
                    "end": 1811,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1793,
                      "end": 1811,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1809,
                          "end": 1810,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1793,
                        "end": 1808,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1793,
                          "end": 1800,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1801,
                          "end": 1808,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1822,
            "end": 1866,
            "decorators": [],
            "name": "assignability13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1837,
              "end": 1866,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1839,
                "end": 1866,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1842,
                  "end": 1866,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1845,
                    "end": 1866,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1845,
                      "end": 1858,
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1869,
            "end": 1911,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1889,
              "end": 1911,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1895,
                  "end": 1909,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1895,
                    "end": 1908,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 1902,
                      "end": 1908,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1903,
                          "end": 1904,
                          "raw": "1",
                          "value": 1
                        },
                        {
                          "type": "Literal",
                          "start": 1906,
                          "end": 1907,
                          "raw": "2",
                          "value": 2
                        }
                      ]
                    },
                    "delegate": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1919,
            "end": 1963,
            "decorators": [],
            "name": "assignability14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1934,
              "end": 1963,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1936,
                "end": 1963,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1939,
                  "end": 1963,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1942,
                    "end": 1963,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1942,
                      "end": 1955,
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1966,
            "end": 2022,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1986,
              "end": 2022,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1992,
                  "end": 2020,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1992,
                    "end": 2019,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 1999,
                      "end": 2019,
                      "elements": [
                        {
                          "type": "CallExpression",
                          "start": 2000,
                          "end": 2018,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 2016,
                              "end": 2017,
                              "raw": "1",
                              "value": 1
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2000,
                            "end": 2015,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 2000,
                              "end": 2007,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 2008,
                              "end": 2015,
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      ]
                    },
                    "delegate": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2030,
            "end": 2074,
            "decorators": [],
            "name": "assignability15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2045,
              "end": 2074,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2047,
                "end": 2074,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2050,
                  "end": 2074,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2053,
                    "end": 2074,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2053,
                      "end": 2066,
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 2077,
            "end": 2149,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 2097,
              "end": 2149,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2103,
                  "end": 2147,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 2103,
                    "end": 2146,
                    "argument": {
                      "type": "CallExpression",
                      "start": 2110,
                      "end": 2146,
                      "arguments": [],
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 2111,
                        "end": 2143,
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "start": 2131,
                          "end": 2143,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 2133,
                              "end": 2141,
                              "directive": null,
                              "expression": {
                                "type": "YieldExpression",
                                "start": 2133,
                                "end": 2140,
                                "argument": {
                                  "type": "Literal",
                                  "start": 2139,
                                  "end": 2140,
                                  "raw": "1",
                                  "value": 1
                                },
                                "delegate": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": true,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "delegate": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 2151,
      "end": 2237,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2221,
        "end": 2237,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2227,
            "end": 2235,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 2227,
              "end": 2234,
              "argument": {
                "type": "Literal",
                "start": 2233,
                "end": 2234,
                "raw": "1",
                "value": 1
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2168,
        "end": 2187,
        "decorators": [],
        "name": "explicitReturnType1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2189,
        "end": 2220,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2191,
          "end": 2220,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 2191,
            "end": 2212,
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2238,
      "end": 2341,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2308,
        "end": 2341,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2314,
            "end": 2339,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 2314,
              "end": 2338,
              "argument": {
                "type": "CallExpression",
                "start": 2320,
                "end": 2338,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 2336,
                    "end": 2337,
                    "raw": "1",
                    "value": 1
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 2320,
                  "end": 2335,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2320,
                    "end": 2327,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2328,
                    "end": 2335,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2255,
        "end": 2274,
        "decorators": [],
        "name": "explicitReturnType2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2276,
        "end": 2307,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2278,
          "end": 2307,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 2278,
            "end": 2299,
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2342,
      "end": 2434,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2412,
        "end": 2434,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2418,
            "end": 2432,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 2418,
              "end": 2431,
              "argument": {
                "type": "ArrayExpression",
                "start": 2425,
                "end": 2431,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 2426,
                    "end": 2427,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 2429,
                    "end": 2430,
                    "raw": "2",
                    "value": 2
                  }
                ]
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2359,
        "end": 2378,
        "decorators": [],
        "name": "explicitReturnType3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2380,
        "end": 2411,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2382,
          "end": 2411,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 2382,
            "end": 2403,
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2435,
      "end": 2541,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2505,
        "end": 2541,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2511,
            "end": 2539,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 2511,
              "end": 2538,
              "argument": {
                "type": "ArrayExpression",
                "start": 2518,
                "end": 2538,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 2519,
                    "end": 2537,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2535,
                        "end": 2536,
                        "raw": "1",
                        "value": 1
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2519,
                      "end": 2534,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2519,
                        "end": 2526,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2527,
                        "end": 2534,
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                ]
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2452,
        "end": 2471,
        "decorators": [],
        "name": "explicitReturnType4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2473,
        "end": 2504,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2475,
          "end": 2504,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 2475,
            "end": 2496,
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2542,
      "end": 2664,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2612,
        "end": 2664,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2618,
            "end": 2662,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 2618,
              "end": 2661,
              "argument": {
                "type": "CallExpression",
                "start": 2625,
                "end": 2661,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 2626,
                  "end": 2658,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2646,
                    "end": 2658,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2648,
                        "end": 2656,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 2648,
                          "end": 2655,
                          "argument": {
                            "type": "Literal",
                            "start": 2654,
                            "end": 2655,
                            "raw": "1",
                            "value": 1
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                },
                "optional": false,
                "typeArguments": null
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2559,
        "end": 2578,
        "decorators": [],
        "name": "explicitReturnType5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2580,
        "end": 2611,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2582,
          "end": 2611,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 2582,
            "end": 2603,
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2665,
      "end": 2743,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2727,
        "end": 2743,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2733,
            "end": 2741,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 2733,
              "end": 2740,
              "argument": {
                "type": "Literal",
                "start": 2739,
                "end": 2740,
                "raw": "1",
                "value": 1
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2682,
        "end": 2701,
        "decorators": [],
        "name": "explicitReturnType6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2703,
        "end": 2726,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2705,
          "end": 2726,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 2705,
            "end": 2718,
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2744,
      "end": 2839,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2806,
        "end": 2839,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2812,
            "end": 2837,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 2812,
              "end": 2836,
              "argument": {
                "type": "CallExpression",
                "start": 2818,
                "end": 2836,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 2834,
                    "end": 2835,
                    "raw": "1",
                    "value": 1
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 2818,
                  "end": 2833,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2818,
                    "end": 2825,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2826,
                    "end": 2833,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2761,
        "end": 2780,
        "decorators": [],
        "name": "explicitReturnType7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2782,
        "end": 2805,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2784,
          "end": 2805,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 2784,
            "end": 2797,
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2840,
      "end": 2924,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2902,
        "end": 2924,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2908,
            "end": 2922,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 2908,
              "end": 2921,
              "argument": {
                "type": "ArrayExpression",
                "start": 2915,
                "end": 2921,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 2916,
                    "end": 2917,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 2919,
                    "end": 2920,
                    "raw": "2",
                    "value": 2
                  }
                ]
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2857,
        "end": 2876,
        "decorators": [],
        "name": "explicitReturnType8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2878,
        "end": 2901,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2880,
          "end": 2901,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 2880,
            "end": 2893,
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2925,
      "end": 3023,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2987,
        "end": 3023,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2993,
            "end": 3021,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 2993,
              "end": 3020,
              "argument": {
                "type": "ArrayExpression",
                "start": 3000,
                "end": 3020,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 3001,
                    "end": 3019,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 3017,
                        "end": 3018,
                        "raw": "1",
                        "value": 1
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3001,
                      "end": 3016,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3001,
                        "end": 3008,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3009,
                        "end": 3016,
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                ]
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2942,
        "end": 2961,
        "decorators": [],
        "name": "explicitReturnType9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2963,
        "end": 2986,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2965,
          "end": 2986,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 2965,
            "end": 2978,
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3024,
      "end": 3139,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 3087,
        "end": 3139,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3093,
            "end": 3137,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 3093,
              "end": 3136,
              "argument": {
                "type": "CallExpression",
                "start": 3100,
                "end": 3136,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 3101,
                  "end": 3133,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 3121,
                    "end": 3133,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 3123,
                        "end": 3131,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 3123,
                          "end": 3130,
                          "argument": {
                            "type": "Literal",
                            "start": 3129,
                            "end": 3130,
                            "raw": "1",
                            "value": 1
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                },
                "optional": false,
                "typeArguments": null
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 3041,
        "end": 3061,
        "decorators": [],
        "name": "explicitReturnType10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3063,
        "end": 3086,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3065,
          "end": 3086,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 3065,
            "end": 3078,
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3140,
      "end": 3219,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 3203,
        "end": 3219,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3209,
            "end": 3217,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 3209,
              "end": 3216,
              "argument": {
                "type": "Literal",
                "start": 3215,
                "end": 3216,
                "raw": "1",
                "value": 1
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 3157,
        "end": 3177,
        "decorators": [],
        "name": "explicitReturnType11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3179,
        "end": 3202,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3181,
          "end": 3202,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 3181,
            "end": 3194,
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3220,
      "end": 3316,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 3283,
        "end": 3316,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3289,
            "end": 3314,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 3289,
              "end": 3313,
              "argument": {
                "type": "CallExpression",
                "start": 3295,
                "end": 3313,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 3311,
                    "end": 3312,
                    "raw": "1",
                    "value": 1
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 3295,
                  "end": 3310,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3295,
                    "end": 3302,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 3303,
                    "end": 3310,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 3237,
        "end": 3257,
        "decorators": [],
        "name": "explicitReturnType12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3259,
        "end": 3282,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3261,
          "end": 3282,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 3261,
            "end": 3274,
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3317,
      "end": 3402,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 3380,
        "end": 3402,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3386,
            "end": 3400,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 3386,
              "end": 3399,
              "argument": {
                "type": "ArrayExpression",
                "start": 3393,
                "end": 3399,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 3394,
                    "end": 3395,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 3397,
                    "end": 3398,
                    "raw": "2",
                    "value": 2
                  }
                ]
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 3334,
        "end": 3354,
        "decorators": [],
        "name": "explicitReturnType13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3356,
        "end": 3379,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3358,
          "end": 3379,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 3358,
            "end": 3371,
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3403,
      "end": 3502,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 3466,
        "end": 3502,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3472,
            "end": 3500,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 3472,
              "end": 3499,
              "argument": {
                "type": "ArrayExpression",
                "start": 3479,
                "end": 3499,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 3480,
                    "end": 3498,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 3496,
                        "end": 3497,
                        "raw": "1",
                        "value": 1
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3480,
                      "end": 3495,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3480,
                        "end": 3487,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3488,
                        "end": 3495,
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                ]
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 3420,
        "end": 3440,
        "decorators": [],
        "name": "explicitReturnType14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3442,
        "end": 3465,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3444,
          "end": 3465,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 3444,
            "end": 3457,
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3503,
      "end": 3618,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 3566,
        "end": 3618,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3572,
            "end": 3616,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 3572,
              "end": 3615,
              "argument": {
                "type": "CallExpression",
                "start": 3579,
                "end": 3615,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 3580,
                  "end": 3612,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 3600,
                    "end": 3612,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 3602,
                        "end": 3610,
                        "directive": null,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 3602,
                          "end": 3609,
                          "argument": {
                            "type": "Literal",
                            "start": 3608,
                            "end": 3609,
                            "raw": "1",
                            "value": 1
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                },
                "optional": false,
                "typeArguments": null
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 3520,
        "end": 3540,
        "decorators": [],
        "name": "explicitReturnType15",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3542,
        "end": 3565,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3544,
          "end": 3565,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 3544,
            "end": 3557,
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3619,
      "end": 3679,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 3663,
        "end": 3679,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3669,
            "end": 3677,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 3669,
              "end": 3676,
              "argument": {
                "type": "Literal",
                "start": 3675,
                "end": 3676,
                "raw": "1",
                "value": 1
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 3636,
        "end": 3656,
        "decorators": [],
        "name": "explicitReturnType16",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
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
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3680,
      "end": 3738,
      "async": true,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3724,
                  "end": 3725,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 3728,
                  "end": 3735,
                  "argument": {
                    "type": "Literal",
                    "start": 3734,
                    "end": 3735,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 3697,
        "end": 3709,
        "decorators": [],
        "name": "awaitedType1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3739,
      "end": 3814,
      "async": true,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3783,
                  "end": 3784,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 3787,
                  "end": 3811,
                  "argument": {
                    "type": "CallExpression",
                    "start": 3793,
                    "end": 3811,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 3809,
                        "end": 3810,
                        "raw": "1",
                        "value": 1
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3793,
                      "end": 3808,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3793,
                        "end": 3800,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3801,
                        "end": 3808,
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 3756,
        "end": 3768,
        "decorators": [],
        "name": "awaitedType2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3815,
      "end": 3988,
      "async": true,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3917,
                  "end": 3918,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 3921,
                  "end": 3926,
                  "argument": null,
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 3832,
        "end": 3841,
        "decorators": [],
        "name": "nextType1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
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
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3847,
                "end": 3851,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 3852,
                  "end": 3896,
                  "argument": {
                    "type": "Identifier",
                    "start": 3855,
                    "end": 3859,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
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
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3876,
                                    "end": 3887,
                                    "decorators": [],
                                    "name": "PromiseLike",
                                    "optional": false,
                                    "typeAnnotation": null
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
              "readonly": false,
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
              "static": false,
              "typeParameters": null
            }
          ]
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
