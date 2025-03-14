__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 923,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 38,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 38,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 31,
                "end": 38
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 86,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 86,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 75,
            "end": 84,
            "argument": {
              "type": "Literal",
              "start": 82,
              "end": 83,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 63,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 63,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 57,
              "end": 63
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 64,
        "end": 72,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 66,
          "end": 72
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 281,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 281,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 111,
            "end": 137,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 115,
                "end": 136,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 136,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 118,
                      "end": 136,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 118,
                          "end": 124
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 127,
                          "end": 136
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 142,
            "end": 279,
            "body": {
              "type": "BlockStatement",
              "start": 155,
              "end": 279,
              "body": [
                {
                  "type": "WhileStatement",
                  "start": 165,
                  "end": 258,
                  "body": {
                    "type": "BlockStatement",
                    "start": 178,
                    "end": 258,
                    "body": [
                      {
                        "type": "WhileStatement",
                        "start": 192,
                        "end": 248,
                        "body": {
                          "type": "BlockStatement",
                          "start": 205,
                          "end": 248,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 223,
                              "end": 234,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 223,
                                "end": 233,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 223,
                                  "end": 224,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "start": 227,
                                  "end": 233,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 231,
                                      "end": 232,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 227,
                                    "end": 230,
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false
                                  },
                                  "optional": false
                                }
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "Identifier",
                          "start": 199,
                          "end": 203,
                          "decorators": [],
                          "name": "cond",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 176,
                    "decorators": [],
                    "name": "cond",
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 267,
                  "end": 273,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 267,
                    "end": 272,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 268,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 271,
                      "end": 272,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 149,
              "end": 153,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 102,
        "decorators": [],
        "name": "test1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 304,
      "end": 448,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 321,
        "end": 448,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 327,
            "end": 353,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 331,
                "end": 352,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 352,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 332,
                    "end": 352,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 334,
                      "end": 352,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 334,
                          "end": 340
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 343,
                          "end": 352
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 358,
            "end": 364,
            "expression": {
              "type": "AssignmentExpression",
              "start": 358,
              "end": 363,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 358,
                "end": 359,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 362,
                "end": 363,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 369,
            "end": 446,
            "body": {
              "type": "BlockStatement",
              "start": 382,
              "end": 446,
              "body": [
                {
                  "type": "WhileStatement",
                  "start": 392,
                  "end": 440,
                  "body": {
                    "type": "BlockStatement",
                    "start": 405,
                    "end": 440,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 419,
                        "end": 430,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 419,
                          "end": 429,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 419,
                            "end": 420,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 423,
                            "end": 429,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 427,
                                "end": 428,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 423,
                              "end": 426,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            },
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 403,
                    "decorators": [],
                    "name": "cond",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 376,
              "end": 380,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 313,
        "end": 318,
        "decorators": [],
        "name": "test2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 471,
      "end": 922,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 619,
        "end": 922,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 625,
            "end": 646,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 629,
                "end": 645,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 629,
                  "end": 640,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 635,
                    "end": 640,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 637,
                      "end": 640,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 637,
                        "end": 638,
                        "typeName": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 638,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 643,
                  "end": 645,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 651,
            "end": 901,
            "body": {
              "type": "BlockStatement",
              "start": 720,
              "end": 901,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 730,
                  "end": 756,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 734,
                      "end": 755,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 734,
                        "end": 739,
                        "decorators": [],
                        "name": "value",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 742,
                        "end": 755,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 742,
                          "end": 748,
                          "decorators": [],
                          "name": "values",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 749,
                          "end": 754,
                          "decorators": [],
                          "name": "index",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "IfStatement",
                  "start": 765,
                  "end": 895,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 857,
                    "end": 895,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 871,
                        "end": 885,
                        "argument": {
                          "type": "Identifier",
                          "start": 878,
                          "end": 884,
                          "decorators": [],
                          "name": "result",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 792,
                    "end": 851,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 806,
                        "end": 841,
                        "expression": {
                          "type": "CallExpression",
                          "start": 806,
                          "end": 840,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 818,
                              "end": 839,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 826,
                                  "end": 831,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 833,
                                  "end": 838,
                                  "decorators": [],
                                  "name": "index",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 818,
                                "end": 825,
                                "decorators": [],
                                "name": "mapping",
                                "optional": false
                              },
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 806,
                            "end": 817,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 806,
                              "end": 812,
                              "decorators": [],
                              "name": "result",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 813,
                              "end": 817,
                              "decorators": [],
                              "name": "push",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "CallExpression",
                    "start": 769,
                    "end": 790,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 777,
                        "end": 782,
                        "decorators": [],
                        "name": "value",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 784,
                        "end": 789,
                        "decorators": [],
                        "name": "index",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 769,
                      "end": 776,
                      "decorators": [],
                      "name": "canTake",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 656,
              "end": 693,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 660,
                  "end": 669,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 660,
                    "end": 665,
                    "decorators": [],
                    "name": "index",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 668,
                    "end": 669,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "start": 671,
                  "end": 693,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 671,
                    "end": 677,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 680,
                    "end": 693,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 680,
                      "end": 686,
                      "decorators": [],
                      "name": "values",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 687,
                      "end": 693,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 695,
              "end": 709,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 695,
                "end": 700,
                "decorators": [],
                "name": "index",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 703,
                "end": 709,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 711,
              "end": 718,
              "argument": {
                "type": "Identifier",
                "start": 711,
                "end": 716,
                "decorators": [],
                "name": "index",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 906,
            "end": 920,
            "argument": {
              "type": "Identifier",
              "start": 913,
              "end": 919,
              "decorators": [],
              "name": "result",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 480,
        "end": 492,
        "decorators": [],
        "name": "mapUntilCant",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 504,
          "end": 515,
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 510,
            "end": 515,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 512,
              "end": 515,
              "elementType": {
                "type": "TSTypeReference",
                "start": 512,
                "end": 513,
                "typeName": {
                  "type": "Identifier",
                  "start": 512,
                  "end": 513,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 521,
          "end": 566,
          "decorators": [],
          "name": "canTake",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 528,
            "end": 566,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 530,
              "end": 566,
              "params": [
                {
                  "type": "Identifier",
                  "start": 531,
                  "end": 539,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 536,
                    "end": 539,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 538,
                      "end": 539,
                      "typeName": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 539,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 541,
                  "end": 554,
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 546,
                    "end": 554,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 548,
                      "end": 554
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 556,
                "end": 566,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 559,
                  "end": 566
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 572,
          "end": 611,
          "decorators": [],
          "name": "mapping",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 579,
            "end": 611,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 581,
              "end": 611,
              "params": [
                {
                  "type": "Identifier",
                  "start": 582,
                  "end": 590,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 587,
                    "end": 590,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 589,
                      "end": 590,
                      "typeName": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 590,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 592,
                  "end": 605,
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 597,
                    "end": 605,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 599,
                      "end": 605
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 607,
                "end": 611,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 610,
                  "end": 611,
                  "typeName": {
                    "type": "Identifier",
                    "start": 610,
                    "end": 611,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 613,
        "end": 618,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 615,
          "end": 618,
          "elementType": {
            "type": "TSTypeReference",
            "start": 615,
            "end": 616,
            "typeName": {
              "type": "Identifier",
              "start": 615,
              "end": 616,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 492,
        "end": 498,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 493,
            "end": 494,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 493,
              "end": 494,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 496,
            "end": 497,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 496,
              "end": 497,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
