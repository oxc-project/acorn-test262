constructorWithCapturedSuper.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 786,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "oneA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 11,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 10,
                "end": 11,
                "typeName": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
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
      "type": "ClassDeclaration",
      "start": 14,
      "end": 72,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 72,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 70,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 39,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 42,
                "end": 70,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 52,
                    "end": 64,
                    "argument": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 63,
                      "decorators": [],
                      "name": "oneA",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 395,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 395,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 393,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 109,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 393,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 121,
                "end": 393,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 131,
                    "end": 139,
                    "expression": {
                      "type": "CallExpression",
                      "start": 131,
                      "end": 138,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 131,
                        "end": 136
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 148,
                    "end": 192,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 161,
                      "end": 192,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 175,
                          "end": 182,
                          "argument": null
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 152,
                      "end": 159,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 152,
                        "end": 153,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 158,
                        "end": 159,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "WhileStatement",
                    "start": 201,
                    "end": 246,
                    "body": {
                      "type": "BlockStatement",
                      "start": 215,
                      "end": 246,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 229,
                          "end": 236,
                          "argument": null
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 208,
                      "end": 213,
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 209,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 212,
                        "end": 213,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "TryStatement",
                    "start": 255,
                    "end": 387,
                    "block": {
                      "type": "BlockStatement",
                      "start": 259,
                      "end": 289,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 273,
                          "end": 279,
                          "argument": null
                        }
                      ]
                    },
                    "finalizer": {
                      "type": "BlockStatement",
                      "start": 356,
                      "end": 387,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 370,
                          "end": 377,
                          "argument": null
                        }
                      ]
                    },
                    "handler": {
                      "type": "CatchClause",
                      "start": 298,
                      "end": 339,
                      "body": {
                        "type": "BlockStatement",
                        "start": 308,
                        "end": 339,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 322,
                            "end": 329,
                            "argument": null
                          }
                        ]
                      },
                      "param": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 306,
                        "decorators": [],
                        "name": "e",
                        "optional": false
                      }
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
                  "start": 110,
                  "end": 119,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 111,
                    "end": 119,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 113,
                      "end": 119
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 397,
      "end": 610,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 415,
        "end": 610,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 421,
            "end": 608,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 421,
              "end": 432,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 432,
              "end": 608,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 444,
                "end": 608,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 454,
                    "end": 462,
                    "expression": {
                      "type": "CallExpression",
                      "start": 454,
                      "end": 461,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 454,
                        "end": 459
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 471,
                    "end": 602,
                    "body": {
                      "type": "BlockStatement",
                      "start": 500,
                      "end": 602,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 514,
                          "end": 526,
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "start": 514,
                            "end": 525,
                            "async": false,
                            "body": {
                              "type": "BinaryExpression",
                              "start": 520,
                              "end": 525,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 520,
                                "end": 521,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 524,
                                "end": 525,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": []
                          }
                        },
                        {
                          "type": "IfStatement",
                          "start": 539,
                          "end": 591,
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 552,
                            "end": 591,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 570,
                                "end": 577,
                                "argument": null
                              }
                            ]
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 543,
                            "end": 550,
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "start": 543,
                              "end": 544,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 549,
                              "end": 550,
                              "raw": "1",
                              "value": 1
                            }
                          }
                        }
                      ]
                    },
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 476,
                      "end": 485,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 480,
                          "end": 485,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 480,
                            "end": 481,
                            "decorators": [],
                            "name": "i",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 484,
                            "end": 485,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 487,
                      "end": 493,
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "start": 487,
                        "end": 488,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 491,
                        "end": 493,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 495,
                      "end": 498,
                      "argument": {
                        "type": "Identifier",
                        "start": 497,
                        "end": 498,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": true
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
                  "start": 433,
                  "end": 442,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 434,
                    "end": 442,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 436,
                      "end": 442
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 404,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 413,
        "end": 414,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 612,
      "end": 786,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 630,
        "end": 786,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 636,
            "end": 784,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 636,
              "end": 647,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 647,
              "end": 784,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 659,
                "end": 784,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 669,
                    "end": 677,
                    "expression": {
                      "type": "CallExpression",
                      "start": 669,
                      "end": 676,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 669,
                        "end": 674
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 686,
                    "end": 723,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 686,
                      "end": 723,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 692,
                        "end": 723,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 706,
                            "end": 713,
                            "argument": null
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 732,
                    "end": 778,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 747,
                      "end": 778,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 761,
                          "end": 768,
                          "argument": null
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 741,
                      "end": 744,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "params": []
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
                  "start": 648,
                  "end": 657,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 649,
                    "end": 657,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 651,
                      "end": 657
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 619,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 628,
        "end": 629,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
