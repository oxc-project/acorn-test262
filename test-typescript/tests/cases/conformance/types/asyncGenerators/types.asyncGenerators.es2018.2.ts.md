__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2352,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 54,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 54,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 42,
            "end": 52,
            "expression": {
              "type": "YieldExpression",
              "start": 42,
              "end": 51,
              "argument": {
                "type": "ObjectExpression",
                "start": 49,
                "end": 51,
                "properties": []
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
        "start": 17,
        "end": 33,
        "decorators": [],
        "name": "inferReturnType1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 125,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 125,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 97,
            "end": 123,
            "expression": {
              "type": "YieldExpression",
              "start": 97,
              "end": 122,
              "argument": {
                "type": "CallExpression",
                "start": 104,
                "end": 122,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 120,
                  "decorators": [],
                  "name": "inferReturnType2",
                  "optional": false
                },
                "optional": false
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
        "start": 72,
        "end": 88,
        "decorators": [],
        "name": "inferReturnType2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 201,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 162,
        "end": 201,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 168,
            "end": 199,
            "expression": {
              "type": "YieldExpression",
              "start": 168,
              "end": 198,
              "argument": {
                "type": "CallExpression",
                "start": 175,
                "end": 198,
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "start": 191,
                    "end": 197,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 192,
                        "end": 193,
                        "raw": "1",
                        "value": 1
                      },
                      {
                        "type": "Literal",
                        "start": 195,
                        "end": 196,
                        "raw": "2",
                        "value": 2
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 175,
                  "end": 190,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 182,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 190,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false
                  }
                },
                "optional": false
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
        "start": 143,
        "end": 159,
        "decorators": [],
        "name": "inferReturnType3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 300,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 259,
            "decorators": [],
            "name": "assignability1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 259,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 224,
                "end": 259,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 227,
                  "end": 259,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 230,
                    "end": 259,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 251,
                      "end": 259,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 252,
                          "end": 258
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 251,
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 262,
            "end": 300,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 282,
              "end": 300,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 288,
                  "end": 298,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 288,
                    "end": 297,
                    "argument": {
                      "type": "Literal",
                      "start": 294,
                      "end": 297,
                      "raw": "\"a\"",
                      "value": "a"
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
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 408,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 359,
            "decorators": [],
            "name": "assignability2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 322,
              "end": 359,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 324,
                "end": 359,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 327,
                  "end": 359,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 330,
                    "end": 359,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 351,
                      "end": 359,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 352,
                          "end": 358
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 351,
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 362,
            "end": 408,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 382,
              "end": 408,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 388,
                  "end": 406,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 388,
                    "end": 405,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 395,
                      "end": 405,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 396,
                          "end": 399,
                          "raw": "\"a\"",
                          "value": "a"
                        },
                        {
                          "type": "Literal",
                          "start": 401,
                          "end": 404,
                          "raw": "\"b\"",
                          "value": "b"
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
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 410,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 416,
          "end": 544,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 467,
            "decorators": [],
            "name": "assignability3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 430,
              "end": 467,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 432,
                "end": 467,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 435,
                  "end": 467,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 438,
                    "end": 467,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 459,
                      "end": 467,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 460,
                          "end": 466
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 459,
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 470,
            "end": 544,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 490,
              "end": 544,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 496,
                  "end": 542,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 496,
                    "end": 541,
                    "argument": {
                      "type": "CallExpression",
                      "start": 503,
                      "end": 541,
                      "arguments": [],
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 504,
                        "end": 538,
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "start": 524,
                          "end": 538,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 526,
                              "end": 536,
                              "expression": {
                                "type": "YieldExpression",
                                "start": 526,
                                "end": 535,
                                "argument": {
                                  "type": "Literal",
                                  "start": 532,
                                  "end": 535,
                                  "raw": "\"a\"",
                                  "value": "a"
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
                        "params": []
                      },
                      "optional": false
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
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 546,
      "end": 637,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 552,
          "end": 636,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 552,
            "end": 595,
            "decorators": [],
            "name": "assignability4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 566,
              "end": 595,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 568,
                "end": 595,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 571,
                  "end": 595,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 574,
                    "end": 595,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 587,
                      "end": 595,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 588,
                          "end": 594
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 574,
                      "end": 587,
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 598,
            "end": 636,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 618,
              "end": 636,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 624,
                  "end": 634,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 624,
                    "end": 633,
                    "argument": {
                      "type": "Literal",
                      "start": 630,
                      "end": 633,
                      "raw": "\"a\"",
                      "value": "a"
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
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 638,
      "end": 737,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 644,
          "end": 736,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 644,
            "end": 687,
            "decorators": [],
            "name": "assignability5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 658,
              "end": 687,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 660,
                "end": 687,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 663,
                  "end": 687,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 666,
                    "end": 687,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 679,
                      "end": 687,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 680,
                          "end": 686
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 666,
                      "end": 679,
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 690,
            "end": 736,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 710,
              "end": 736,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 716,
                  "end": 734,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 716,
                    "end": 733,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 723,
                      "end": 733,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 724,
                          "end": 727,
                          "raw": "\"a\"",
                          "value": "a"
                        },
                        {
                          "type": "Literal",
                          "start": 729,
                          "end": 732,
                          "raw": "\"b\"",
                          "value": "b"
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
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 738,
      "end": 865,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 744,
          "end": 864,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 744,
            "end": 787,
            "decorators": [],
            "name": "assignability6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 758,
              "end": 787,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 760,
                "end": 787,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 763,
                  "end": 787,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 766,
                    "end": 787,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 779,
                      "end": 787,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 780,
                          "end": 786
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 766,
                      "end": 779,
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 790,
            "end": 864,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 810,
              "end": 864,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 816,
                  "end": 862,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 816,
                    "end": 861,
                    "argument": {
                      "type": "CallExpression",
                      "start": 823,
                      "end": 861,
                      "arguments": [],
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 824,
                        "end": 858,
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "start": 844,
                          "end": 858,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 846,
                              "end": 856,
                              "expression": {
                                "type": "YieldExpression",
                                "start": 846,
                                "end": 855,
                                "argument": {
                                  "type": "Literal",
                                  "start": 852,
                                  "end": 855,
                                  "raw": "\"a\"",
                                  "value": "a"
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
                        "params": []
                      },
                      "optional": false
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
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 866,
      "end": 957,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 872,
          "end": 956,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 872,
            "end": 915,
            "decorators": [],
            "name": "assignability7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 886,
              "end": 915,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 888,
                "end": 915,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 891,
                  "end": 915,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 894,
                    "end": 915,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 907,
                      "end": 915,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 908,
                          "end": 914
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 894,
                      "end": 907,
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 918,
            "end": 956,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 938,
              "end": 956,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 944,
                  "end": 954,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 944,
                    "end": 953,
                    "argument": {
                      "type": "Literal",
                      "start": 950,
                      "end": 953,
                      "raw": "\"a\"",
                      "value": "a"
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
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 958,
      "end": 1057,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 964,
          "end": 1056,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 964,
            "end": 1007,
            "decorators": [],
            "name": "assignability8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 978,
              "end": 1007,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 980,
                "end": 1007,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 983,
                  "end": 1007,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 986,
                    "end": 1007,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 999,
                      "end": 1007,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1000,
                          "end": 1006
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 986,
                      "end": 999,
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1010,
            "end": 1056,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1030,
              "end": 1056,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1036,
                  "end": 1054,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1036,
                    "end": 1053,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 1043,
                      "end": 1053,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1044,
                          "end": 1047,
                          "raw": "\"a\"",
                          "value": "a"
                        },
                        {
                          "type": "Literal",
                          "start": 1049,
                          "end": 1052,
                          "raw": "\"b\"",
                          "value": "b"
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
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1058,
      "end": 1185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1064,
          "end": 1184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1064,
            "end": 1107,
            "decorators": [],
            "name": "assignability9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1078,
              "end": 1107,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1080,
                "end": 1107,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1083,
                  "end": 1107,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1086,
                    "end": 1107,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1099,
                      "end": 1107,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1100,
                          "end": 1106
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1086,
                      "end": 1099,
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1110,
            "end": 1184,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1130,
              "end": 1184,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1136,
                  "end": 1182,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 1136,
                    "end": 1181,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1143,
                      "end": 1181,
                      "arguments": [],
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 1144,
                        "end": 1178,
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1164,
                          "end": 1178,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1166,
                              "end": 1176,
                              "expression": {
                                "type": "YieldExpression",
                                "start": 1166,
                                "end": 1175,
                                "argument": {
                                  "type": "Literal",
                                  "start": 1172,
                                  "end": 1175,
                                  "raw": "\"a\"",
                                  "value": "a"
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
                        "params": []
                      },
                      "optional": false
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
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1186,
      "end": 1274,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1256,
        "end": 1274,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1262,
            "end": 1272,
            "expression": {
              "type": "YieldExpression",
              "start": 1262,
              "end": 1271,
              "argument": {
                "type": "Literal",
                "start": 1268,
                "end": 1271,
                "raw": "\"a\"",
                "value": "a"
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
        "start": 1203,
        "end": 1222,
        "decorators": [],
        "name": "explicitReturnType1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1224,
        "end": 1255,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1226,
          "end": 1255,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1247,
            "end": 1255,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1248,
                "end": 1254
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1226,
            "end": 1247,
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1275,
      "end": 1371,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1345,
        "end": 1371,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1351,
            "end": 1369,
            "expression": {
              "type": "YieldExpression",
              "start": 1351,
              "end": 1368,
              "argument": {
                "type": "ArrayExpression",
                "start": 1358,
                "end": 1368,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1359,
                    "end": 1362,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 1364,
                    "end": 1367,
                    "raw": "\"b\"",
                    "value": "b"
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
        "start": 1292,
        "end": 1311,
        "decorators": [],
        "name": "explicitReturnType2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1313,
        "end": 1344,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1315,
          "end": 1344,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1336,
            "end": 1344,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1337,
                "end": 1343
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1315,
            "end": 1336,
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1372,
      "end": 1496,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1442,
        "end": 1496,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1448,
            "end": 1494,
            "expression": {
              "type": "YieldExpression",
              "start": 1448,
              "end": 1493,
              "argument": {
                "type": "CallExpression",
                "start": 1455,
                "end": 1493,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 1456,
                  "end": 1490,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1476,
                    "end": 1490,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1478,
                        "end": 1488,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 1478,
                          "end": 1487,
                          "argument": {
                            "type": "Literal",
                            "start": 1484,
                            "end": 1487,
                            "raw": "\"a\"",
                            "value": "a"
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
                  "params": []
                },
                "optional": false
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
        "start": 1389,
        "end": 1408,
        "decorators": [],
        "name": "explicitReturnType3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1410,
        "end": 1441,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1412,
          "end": 1441,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1433,
            "end": 1441,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1434,
                "end": 1440
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1412,
            "end": 1433,
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1497,
      "end": 1577,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1559,
        "end": 1577,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1565,
            "end": 1575,
            "expression": {
              "type": "YieldExpression",
              "start": 1565,
              "end": 1574,
              "argument": {
                "type": "Literal",
                "start": 1571,
                "end": 1574,
                "raw": "\"a\"",
                "value": "a"
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
        "start": 1514,
        "end": 1533,
        "decorators": [],
        "name": "explicitReturnType4",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1535,
        "end": 1558,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1537,
          "end": 1558,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1550,
            "end": 1558,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1551,
                "end": 1557
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1537,
            "end": 1550,
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1578,
      "end": 1666,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1640,
        "end": 1666,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1646,
            "end": 1664,
            "expression": {
              "type": "YieldExpression",
              "start": 1646,
              "end": 1663,
              "argument": {
                "type": "ArrayExpression",
                "start": 1653,
                "end": 1663,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1654,
                    "end": 1657,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 1659,
                    "end": 1662,
                    "raw": "\"b\"",
                    "value": "b"
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
        "start": 1595,
        "end": 1614,
        "decorators": [],
        "name": "explicitReturnType5",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1616,
        "end": 1639,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1618,
          "end": 1639,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1631,
            "end": 1639,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1632,
                "end": 1638
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1618,
            "end": 1631,
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1667,
      "end": 1783,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1729,
        "end": 1783,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1735,
            "end": 1781,
            "expression": {
              "type": "YieldExpression",
              "start": 1735,
              "end": 1780,
              "argument": {
                "type": "CallExpression",
                "start": 1742,
                "end": 1780,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 1743,
                  "end": 1777,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1763,
                    "end": 1777,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1765,
                        "end": 1775,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 1765,
                          "end": 1774,
                          "argument": {
                            "type": "Literal",
                            "start": 1771,
                            "end": 1774,
                            "raw": "\"a\"",
                            "value": "a"
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
                  "params": []
                },
                "optional": false
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
        "start": 1684,
        "end": 1703,
        "decorators": [],
        "name": "explicitReturnType6",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1705,
        "end": 1728,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1707,
          "end": 1728,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1720,
            "end": 1728,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1721,
                "end": 1727
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1707,
            "end": 1720,
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1784,
      "end": 1864,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1846,
        "end": 1864,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1852,
            "end": 1862,
            "expression": {
              "type": "YieldExpression",
              "start": 1852,
              "end": 1861,
              "argument": {
                "type": "Literal",
                "start": 1858,
                "end": 1861,
                "raw": "\"a\"",
                "value": "a"
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
        "start": 1801,
        "end": 1820,
        "decorators": [],
        "name": "explicitReturnType7",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1822,
        "end": 1845,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1824,
          "end": 1845,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1837,
            "end": 1845,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1838,
                "end": 1844
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1824,
            "end": 1837,
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1865,
      "end": 1953,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1927,
        "end": 1953,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1933,
            "end": 1951,
            "expression": {
              "type": "YieldExpression",
              "start": 1933,
              "end": 1950,
              "argument": {
                "type": "ArrayExpression",
                "start": 1940,
                "end": 1950,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1941,
                    "end": 1944,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 1946,
                    "end": 1949,
                    "raw": "\"b\"",
                    "value": "b"
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
        "start": 1882,
        "end": 1901,
        "decorators": [],
        "name": "explicitReturnType8",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1903,
        "end": 1926,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1905,
          "end": 1926,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1918,
            "end": 1926,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1919,
                "end": 1925
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1905,
            "end": 1918,
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1954,
      "end": 2070,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2016,
        "end": 2070,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2022,
            "end": 2068,
            "expression": {
              "type": "YieldExpression",
              "start": 2022,
              "end": 2067,
              "argument": {
                "type": "CallExpression",
                "start": 2029,
                "end": 2067,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 2030,
                  "end": 2064,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2050,
                    "end": 2064,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2052,
                        "end": 2062,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 2052,
                          "end": 2061,
                          "argument": {
                            "type": "Literal",
                            "start": 2058,
                            "end": 2061,
                            "raw": "\"a\"",
                            "value": "a"
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
                  "params": []
                },
                "optional": false
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
        "start": 1971,
        "end": 1990,
        "decorators": [],
        "name": "explicitReturnType9",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1992,
        "end": 2015,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1994,
          "end": 2015,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2007,
            "end": 2015,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2008,
                "end": 2014
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1994,
            "end": 2007,
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2071,
      "end": 2153,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2137,
        "end": 2153,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2143,
            "end": 2151,
            "expression": {
              "type": "YieldExpression",
              "start": 2143,
              "end": 2150,
              "argument": {
                "type": "Literal",
                "start": 2149,
                "end": 2150,
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
        "start": 2088,
        "end": 2108,
        "decorators": [],
        "name": "explicitReturnType10",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2110,
        "end": 2136,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2112,
          "end": 2136,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2128,
            "end": 2136,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2129,
                "end": 2135
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2112,
            "end": 2128,
            "decorators": [],
            "name": "IterableIterator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2154,
      "end": 2228,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2212,
        "end": 2228,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2218,
            "end": 2226,
            "expression": {
              "type": "YieldExpression",
              "start": 2218,
              "end": 2225,
              "argument": {
                "type": "Literal",
                "start": 2224,
                "end": 2225,
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
        "start": 2171,
        "end": 2191,
        "decorators": [],
        "name": "explicitReturnType11",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2193,
        "end": 2211,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2195,
          "end": 2211,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2203,
            "end": 2211,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2204,
                "end": 2210
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2195,
            "end": 2203,
            "decorators": [],
            "name": "Iterable",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2229,
      "end": 2303,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2287,
        "end": 2303,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2293,
            "end": 2301,
            "expression": {
              "type": "YieldExpression",
              "start": 2293,
              "end": 2300,
              "argument": {
                "type": "Literal",
                "start": 2299,
                "end": 2300,
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
        "start": 2246,
        "end": 2266,
        "decorators": [],
        "name": "explicitReturnType12",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2268,
        "end": 2286,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2270,
          "end": 2286,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2278,
            "end": 2286,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2279,
                "end": 2285
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2270,
            "end": 2278,
            "decorators": [],
            "name": "Iterator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2304,
      "end": 2351,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2333,
        "end": 2351,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2339,
            "end": 2349,
            "expression": {
              "type": "YieldExpression",
              "start": 2339,
              "end": 2348,
              "argument": {
                "type": "ObjectExpression",
                "start": 2346,
                "end": 2348,
                "properties": []
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
        "start": 2321,
        "end": 2330,
        "decorators": [],
        "name": "yieldStar",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
