capturedLetConstInLoop2_ES6.ts
```json
{
  "type": "Program",
  "start": 15,
  "end": 3394,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 15,
      "end": 161,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 161,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 38,
            "end": 159,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 56,
              "end": 159,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 66,
                  "end": 91,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 70,
                      "end": 90,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 71,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 74,
                        "end": 90,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 74,
                          "end": 83,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 84,
                          "end": 90,
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
                {
                  "type": "ExpressionStatement",
                  "start": 100,
                  "end": 130,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 101,
                    "end": 128,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 112,
                      "end": 128,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 114,
                          "end": 126,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 121,
                            "end": 126,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 121,
                              "end": 122,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 125,
                              "end": 126,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 139,
                  "end": 153,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 140,
                    "end": 151,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 146,
                      "end": 151,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 147,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 151,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 43,
              "end": 48,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 47,
                  "end": 48,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 52,
              "end": 54,
              "elements": []
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 28,
        "decorators": [],
        "name": "foo0",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 29,
          "end": 30,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 163,
      "end": 311,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 311,
        "body": [
          {
            "type": "ForInStatement",
            "start": 188,
            "end": 309,
            "body": {
              "type": "BlockStatement",
              "start": 206,
              "end": 309,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 216,
                  "end": 241,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 220,
                      "end": 240,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 221,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 224,
                        "end": 240,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 224,
                          "end": 233,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 240,
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
                {
                  "type": "ExpressionStatement",
                  "start": 250,
                  "end": 280,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 251,
                    "end": 278,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 262,
                      "end": 278,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 264,
                          "end": 276,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 271,
                            "end": 276,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 271,
                              "end": 272,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 275,
                              "end": 276,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 289,
                  "end": 303,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 290,
                    "end": 301,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 296,
                      "end": 301,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 297,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 301,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 193,
              "end": 198,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 197,
                  "end": 198,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 202,
              "end": 204,
              "elements": []
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 178,
        "decorators": [],
        "name": "foo0_1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 179,
          "end": 180,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 313,
      "end": 469,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 330,
        "end": 469,
        "body": [
          {
            "type": "ForStatement",
            "start": 336,
            "end": 467,
            "body": {
              "type": "BlockStatement",
              "start": 364,
              "end": 467,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 374,
                  "end": 399,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 378,
                      "end": 398,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 378,
                        "end": 379,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 382,
                        "end": 398,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 382,
                          "end": 391,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 398,
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
                {
                  "type": "ExpressionStatement",
                  "start": 408,
                  "end": 438,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 409,
                    "end": 436,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 420,
                      "end": 436,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 422,
                          "end": 434,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 429,
                            "end": 434,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 429,
                              "end": 430,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 433,
                              "end": 434,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 447,
                  "end": 461,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 448,
                    "end": 459,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 454,
                      "end": 459,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 454,
                        "end": 455,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 458,
                        "end": 459,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 341,
              "end": 350,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 345,
                  "end": 350,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 346,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 349,
                    "end": 350,
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
              "start": 352,
              "end": 357,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 352,
                "end": 353,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 356,
                "end": 357,
                "raw": "1",
                "value": 1
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 359,
              "end": 362,
              "argument": {
                "type": "Identifier",
                "start": 361,
                "end": 362,
                "decorators": [],
                "name": "x",
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
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 326,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 327,
          "end": 328,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 471,
      "end": 615,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 488,
        "end": 615,
        "body": [
          {
            "type": "WhileStatement",
            "start": 494,
            "end": 613,
            "body": {
              "type": "BlockStatement",
              "start": 510,
              "end": 613,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 520,
                  "end": 545,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 524,
                      "end": 544,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 524,
                        "end": 525,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 528,
                        "end": 544,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 528,
                          "end": 537,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 538,
                          "end": 544,
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
                {
                  "type": "ExpressionStatement",
                  "start": 554,
                  "end": 584,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 555,
                    "end": 582,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 566,
                      "end": 582,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 568,
                          "end": 580,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 575,
                            "end": 580,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 575,
                              "end": 576,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 579,
                              "end": 580,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 593,
                  "end": 607,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 594,
                    "end": 605,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 600,
                      "end": 605,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 600,
                        "end": 601,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 604,
                        "end": 605,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 501,
              "end": 508,
              "operator": "===",
              "left": {
                "type": "Literal",
                "start": 501,
                "end": 502,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 507,
                "end": 508,
                "raw": "1",
                "value": 1
              }
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
        "end": 484,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 485,
          "end": 486,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 617,
      "end": 779,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 634,
        "end": 779,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 640,
            "end": 777,
            "body": {
              "type": "BlockStatement",
              "start": 643,
              "end": 761,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 653,
                  "end": 659,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 657,
                      "end": 658,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 657,
                        "end": 658,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 668,
                  "end": 693,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 672,
                      "end": 692,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 672,
                        "end": 673,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 676,
                        "end": 692,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 685,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 686,
                          "end": 692,
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
                {
                  "type": "ExpressionStatement",
                  "start": 702,
                  "end": 732,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 703,
                    "end": 730,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 714,
                      "end": 730,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 716,
                          "end": 728,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 723,
                            "end": 728,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 723,
                              "end": 724,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 727,
                              "end": 728,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 741,
                  "end": 755,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 742,
                    "end": 753,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 748,
                      "end": 753,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 748,
                        "end": 749,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 752,
                        "end": 753,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 769,
              "end": 776,
              "operator": "===",
              "left": {
                "type": "Literal",
                "start": 769,
                "end": 770,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 775,
                "end": 776,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 626,
        "end": 630,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 631,
          "end": 632,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 781,
      "end": 956,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 798,
        "end": 956,
        "body": [
          {
            "type": "ForStatement",
            "start": 804,
            "end": 954,
            "body": {
              "type": "BlockStatement",
              "start": 832,
              "end": 954,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 842,
                  "end": 867,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 846,
                      "end": 866,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 846,
                        "end": 847,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 850,
                        "end": 866,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 850,
                          "end": 859,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 860,
                          "end": 866,
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
                {
                  "type": "VariableDeclaration",
                  "start": 876,
                  "end": 886,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 880,
                      "end": 885,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 880,
                        "end": 881,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 884,
                        "end": 885,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 895,
                  "end": 925,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 896,
                    "end": 923,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 907,
                      "end": 923,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 909,
                          "end": 921,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 916,
                            "end": 921,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 916,
                              "end": 917,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 920,
                              "end": 921,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 934,
                  "end": 948,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 935,
                    "end": 946,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 941,
                      "end": 946,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 941,
                        "end": 942,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 945,
                        "end": 946,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 809,
              "end": 818,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 813,
                  "end": 818,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 813,
                    "end": 814,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 817,
                    "end": 818,
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
              "start": 820,
              "end": 825,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 820,
                "end": 821,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 824,
                "end": 825,
                "raw": "1",
                "value": 1
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 827,
              "end": 830,
              "argument": {
                "type": "Identifier",
                "start": 829,
                "end": 830,
                "decorators": [],
                "name": "y",
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
      "id": {
        "type": "Identifier",
        "start": 790,
        "end": 794,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 795,
          "end": 796,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 958,
      "end": 1129,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 975,
        "end": 1129,
        "body": [
          {
            "type": "ForStatement",
            "start": 981,
            "end": 1127,
            "body": {
              "type": "BlockStatement",
              "start": 1016,
              "end": 1127,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1026,
                  "end": 1051,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1030,
                      "end": 1050,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1030,
                        "end": 1031,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1034,
                        "end": 1050,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1034,
                          "end": 1043,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1044,
                          "end": 1050,
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
                {
                  "type": "ExpressionStatement",
                  "start": 1060,
                  "end": 1094,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1061,
                    "end": 1092,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1072,
                      "end": 1092,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1074,
                          "end": 1090,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1081,
                            "end": 1090,
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1081,
                              "end": 1086,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 1081,
                                "end": 1082,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1085,
                                "end": 1086,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1089,
                              "end": 1090,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1103,
                  "end": 1121,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1104,
                    "end": 1119,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1110,
                      "end": 1119,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1110,
                        "end": 1115,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 1110,
                          "end": 1111,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1114,
                          "end": 1115,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1118,
                        "end": 1119,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 986,
              "end": 1002,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 990,
                  "end": 995,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 990,
                    "end": 991,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 994,
                    "end": 995,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "start": 997,
                  "end": 1002,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 997,
                    "end": 998,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1001,
                    "end": 1002,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1004,
              "end": 1009,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 1004,
                "end": 1005,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1008,
                "end": 1009,
                "raw": "1",
                "value": 1
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 1011,
              "end": 1014,
              "argument": {
                "type": "Identifier",
                "start": 1013,
                "end": 1014,
                "decorators": [],
                "name": "x",
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
      "id": {
        "type": "Identifier",
        "start": 967,
        "end": 971,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 972,
          "end": 973,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1132,
      "end": 1302,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1149,
        "end": 1302,
        "body": [
          {
            "type": "WhileStatement",
            "start": 1155,
            "end": 1300,
            "body": {
              "type": "BlockStatement",
              "start": 1171,
              "end": 1300,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1181,
                  "end": 1190,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1185,
                      "end": 1186,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1185,
                        "end": 1186,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 1188,
                      "end": 1189,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1188,
                        "end": 1189,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1199,
                  "end": 1224,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1203,
                      "end": 1223,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1203,
                        "end": 1204,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1207,
                        "end": 1223,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1207,
                          "end": 1216,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1217,
                          "end": 1223,
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
                {
                  "type": "ExpressionStatement",
                  "start": 1233,
                  "end": 1267,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1234,
                    "end": 1265,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1245,
                      "end": 1265,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1247,
                          "end": 1263,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1254,
                            "end": 1263,
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1254,
                              "end": 1259,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 1254,
                                "end": 1255,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1258,
                                "end": 1259,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1262,
                              "end": 1263,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1276,
                  "end": 1294,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1277,
                    "end": 1292,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1283,
                      "end": 1292,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1283,
                        "end": 1288,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 1283,
                          "end": 1284,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1287,
                          "end": 1288,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1291,
                        "end": 1292,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1162,
              "end": 1169,
              "operator": "===",
              "left": {
                "type": "Literal",
                "start": 1162,
                "end": 1163,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 1168,
                "end": 1169,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1141,
        "end": 1145,
        "decorators": [],
        "name": "foo6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1146,
          "end": 1147,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1304,
      "end": 1477,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1321,
        "end": 1477,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 1327,
            "end": 1475,
            "body": {
              "type": "BlockStatement",
              "start": 1330,
              "end": 1459,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1340,
                  "end": 1349,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1344,
                      "end": 1345,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1344,
                        "end": 1345,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": null
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 1347,
                      "end": 1348,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1347,
                        "end": 1348,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1358,
                  "end": 1383,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1362,
                      "end": 1382,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1362,
                        "end": 1363,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1366,
                        "end": 1382,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1366,
                          "end": 1375,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1376,
                          "end": 1382,
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
                {
                  "type": "ExpressionStatement",
                  "start": 1392,
                  "end": 1426,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1393,
                    "end": 1424,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1404,
                      "end": 1424,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1406,
                          "end": 1422,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1413,
                            "end": 1422,
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1413,
                              "end": 1418,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 1413,
                                "end": 1414,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1417,
                                "end": 1418,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1421,
                              "end": 1422,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1435,
                  "end": 1453,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1436,
                    "end": 1451,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1442,
                      "end": 1451,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1442,
                        "end": 1447,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 1442,
                          "end": 1443,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1446,
                          "end": 1447,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1450,
                        "end": 1451,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1467,
              "end": 1474,
              "operator": "===",
              "left": {
                "type": "Literal",
                "start": 1467,
                "end": 1468,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 1473,
                "end": 1474,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1313,
        "end": 1317,
        "decorators": [],
        "name": "foo7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1318,
          "end": 1319,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1480,
      "end": 1663,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1497,
        "end": 1663,
        "body": [
          {
            "type": "ForStatement",
            "start": 1503,
            "end": 1661,
            "body": {
              "type": "BlockStatement",
              "start": 1531,
              "end": 1661,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1541,
                  "end": 1551,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1545,
                      "end": 1550,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1545,
                        "end": 1546,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 1549,
                        "end": 1550,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1560,
                  "end": 1585,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1564,
                      "end": 1584,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1564,
                        "end": 1565,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1568,
                        "end": 1584,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1568,
                          "end": 1577,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1578,
                          "end": 1584,
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
                {
                  "type": "ExpressionStatement",
                  "start": 1594,
                  "end": 1628,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1595,
                    "end": 1626,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1606,
                      "end": 1626,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1608,
                          "end": 1624,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1615,
                            "end": 1624,
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1615,
                              "end": 1620,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 1615,
                                "end": 1616,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1619,
                                "end": 1620,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1623,
                              "end": 1624,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1637,
                  "end": 1655,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1638,
                    "end": 1653,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1644,
                      "end": 1653,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1644,
                        "end": 1649,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 1644,
                          "end": 1645,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1648,
                          "end": 1649,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1652,
                        "end": 1653,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 1508,
              "end": 1517,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1512,
                  "end": 1517,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1512,
                    "end": 1513,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1516,
                    "end": 1517,
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
              "start": 1519,
              "end": 1524,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 1519,
                "end": 1520,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1523,
                "end": 1524,
                "raw": "1",
                "value": 1
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 1526,
              "end": 1529,
              "argument": {
                "type": "Identifier",
                "start": 1528,
                "end": 1529,
                "decorators": [],
                "name": "y",
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
      "id": {
        "type": "Identifier",
        "start": 1489,
        "end": 1493,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1494,
          "end": 1495,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1680,
      "end": 1832,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1699,
        "end": 1832,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 1705,
            "end": 1830,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 1725,
              "end": 1830,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1735,
                  "end": 1762,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1741,
                      "end": 1761,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1741,
                        "end": 1742,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1745,
                        "end": 1761,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1745,
                          "end": 1754,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1755,
                          "end": 1761,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1771,
                  "end": 1801,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1772,
                    "end": 1799,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1783,
                      "end": 1799,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1785,
                          "end": 1797,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1792,
                            "end": 1797,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 1792,
                              "end": 1793,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1796,
                              "end": 1797,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1810,
                  "end": 1824,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1811,
                    "end": 1822,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1817,
                      "end": 1822,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1817,
                        "end": 1818,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1821,
                        "end": 1822,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 1710,
              "end": 1717,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1716,
                  "end": 1717,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1716,
                    "end": 1717,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 1721,
              "end": 1723,
              "elements": []
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1689,
        "end": 1695,
        "decorators": [],
        "name": "foo0_c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1696,
          "end": 1697,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1834,
      "end": 1988,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1855,
        "end": 1988,
        "body": [
          {
            "type": "ForInStatement",
            "start": 1861,
            "end": 1986,
            "body": {
              "type": "BlockStatement",
              "start": 1881,
              "end": 1986,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1891,
                  "end": 1918,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1897,
                      "end": 1917,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1897,
                        "end": 1898,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1901,
                        "end": 1917,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1901,
                          "end": 1910,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1911,
                          "end": 1917,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1927,
                  "end": 1957,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1928,
                    "end": 1955,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1939,
                      "end": 1955,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1941,
                          "end": 1953,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1948,
                            "end": 1953,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 1948,
                              "end": 1949,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1952,
                              "end": 1953,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1966,
                  "end": 1980,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1967,
                    "end": 1978,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1973,
                      "end": 1978,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1973,
                        "end": 1974,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1977,
                        "end": 1978,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 1866,
              "end": 1873,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1872,
                  "end": 1873,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1872,
                    "end": 1873,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 1877,
              "end": 1879,
              "elements": []
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1843,
        "end": 1851,
        "decorators": [],
        "name": "foo0_1_c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1852,
          "end": 1853,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1990,
      "end": 2148,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2009,
        "end": 2148,
        "body": [
          {
            "type": "ForStatement",
            "start": 2015,
            "end": 2146,
            "body": {
              "type": "BlockStatement",
              "start": 2041,
              "end": 2146,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2051,
                  "end": 2078,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2057,
                      "end": 2077,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2057,
                        "end": 2058,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2061,
                        "end": 2077,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2061,
                          "end": 2070,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2071,
                          "end": 2077,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2087,
                  "end": 2117,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2088,
                    "end": 2115,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2099,
                      "end": 2115,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2101,
                          "end": 2113,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2108,
                            "end": 2113,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 2108,
                              "end": 2109,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2112,
                              "end": 2113,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2126,
                  "end": 2140,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2127,
                    "end": 2138,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2133,
                      "end": 2138,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 2133,
                        "end": 2134,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2137,
                        "end": 2138,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 2020,
              "end": 2031,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2026,
                  "end": 2031,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2026,
                    "end": 2027,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2030,
                    "end": 2031,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2033,
              "end": 2038,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 2033,
                "end": 2034,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 2037,
                "end": 2038,
                "raw": "1",
                "value": 1
              }
            },
            "update": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1999,
        "end": 2005,
        "decorators": [],
        "name": "foo1_c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2006,
          "end": 2007,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2150,
      "end": 2298,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2169,
        "end": 2298,
        "body": [
          {
            "type": "WhileStatement",
            "start": 2175,
            "end": 2296,
            "body": {
              "type": "BlockStatement",
              "start": 2191,
              "end": 2296,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2201,
                  "end": 2228,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2207,
                      "end": 2227,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2207,
                        "end": 2208,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2211,
                        "end": 2227,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2211,
                          "end": 2220,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2221,
                          "end": 2227,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2237,
                  "end": 2267,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2238,
                    "end": 2265,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2249,
                      "end": 2265,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2251,
                          "end": 2263,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2258,
                            "end": 2263,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 2258,
                              "end": 2259,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2262,
                              "end": 2263,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2276,
                  "end": 2290,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2277,
                    "end": 2288,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2283,
                      "end": 2288,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 2283,
                        "end": 2284,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2287,
                        "end": 2288,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2182,
              "end": 2189,
              "operator": "===",
              "left": {
                "type": "Literal",
                "start": 2182,
                "end": 2183,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 2188,
                "end": 2189,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2159,
        "end": 2165,
        "decorators": [],
        "name": "foo2_c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2166,
          "end": 2167,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2300,
      "end": 2472,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2319,
        "end": 2472,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 2325,
            "end": 2470,
            "body": {
              "type": "BlockStatement",
              "start": 2328,
              "end": 2454,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2338,
                  "end": 2350,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2344,
                      "end": 2349,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2344,
                        "end": 2345,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 2348,
                        "end": 2349,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2359,
                  "end": 2386,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2365,
                      "end": 2385,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2365,
                        "end": 2366,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2369,
                        "end": 2385,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2369,
                          "end": 2378,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2379,
                          "end": 2385,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2395,
                  "end": 2425,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2396,
                    "end": 2423,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2407,
                      "end": 2423,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2409,
                          "end": 2421,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2416,
                            "end": 2421,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 2416,
                              "end": 2417,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2420,
                              "end": 2421,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2434,
                  "end": 2448,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2435,
                    "end": 2446,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2441,
                      "end": 2446,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 2441,
                        "end": 2442,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2445,
                        "end": 2446,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2462,
              "end": 2469,
              "operator": "===",
              "left": {
                "type": "Literal",
                "start": 2462,
                "end": 2463,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 2468,
                "end": 2469,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2309,
        "end": 2315,
        "decorators": [],
        "name": "foo3_c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2316,
          "end": 2317,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2474,
      "end": 2653,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2493,
        "end": 2653,
        "body": [
          {
            "type": "ForStatement",
            "start": 2499,
            "end": 2651,
            "body": {
              "type": "BlockStatement",
              "start": 2525,
              "end": 2651,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2535,
                  "end": 2562,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2541,
                      "end": 2561,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2541,
                        "end": 2542,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2545,
                        "end": 2561,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2545,
                          "end": 2554,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2555,
                          "end": 2561,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2571,
                  "end": 2583,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2577,
                      "end": 2582,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2577,
                        "end": 2578,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 2581,
                        "end": 2582,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2592,
                  "end": 2622,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2593,
                    "end": 2620,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2604,
                      "end": 2620,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2606,
                          "end": 2618,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2613,
                            "end": 2618,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 2613,
                              "end": 2614,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2617,
                              "end": 2618,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2631,
                  "end": 2645,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2632,
                    "end": 2643,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2638,
                      "end": 2643,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 2638,
                        "end": 2639,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2642,
                        "end": 2643,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 2504,
              "end": 2515,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2510,
                  "end": 2515,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2510,
                    "end": 2511,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2514,
                    "end": 2515,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2517,
              "end": 2522,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 2517,
                "end": 2518,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 2521,
                "end": 2522,
                "raw": "1",
                "value": 1
              }
            },
            "update": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2483,
        "end": 2489,
        "decorators": [],
        "name": "foo4_c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2490,
          "end": 2491,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2655,
      "end": 2828,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2674,
        "end": 2828,
        "body": [
          {
            "type": "ForStatement",
            "start": 2680,
            "end": 2826,
            "body": {
              "type": "BlockStatement",
              "start": 2713,
              "end": 2826,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2723,
                  "end": 2750,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2729,
                      "end": 2749,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2729,
                        "end": 2730,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2733,
                        "end": 2749,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2733,
                          "end": 2742,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2743,
                          "end": 2749,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2759,
                  "end": 2793,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2760,
                    "end": 2791,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2771,
                      "end": 2791,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2773,
                          "end": 2789,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2780,
                            "end": 2789,
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 2780,
                              "end": 2785,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 2780,
                                "end": 2781,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2784,
                                "end": 2785,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2788,
                              "end": 2789,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2802,
                  "end": 2820,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2803,
                    "end": 2818,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2809,
                      "end": 2818,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 2809,
                        "end": 2814,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 2809,
                          "end": 2810,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2813,
                          "end": 2814,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2817,
                        "end": 2818,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 2685,
              "end": 2703,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2691,
                  "end": 2696,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2691,
                    "end": 2692,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2695,
                    "end": 2696,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "start": 2698,
                  "end": 2703,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2698,
                    "end": 2699,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2702,
                    "end": 2703,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2705,
              "end": 2710,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 2705,
                "end": 2706,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 2709,
                "end": 2710,
                "raw": "1",
                "value": 1
              }
            },
            "update": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2664,
        "end": 2670,
        "decorators": [],
        "name": "foo5_c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2671,
          "end": 2672,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2831,
      "end": 3015,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2850,
        "end": 3015,
        "body": [
          {
            "type": "WhileStatement",
            "start": 2856,
            "end": 3013,
            "body": {
              "type": "BlockStatement",
              "start": 2872,
              "end": 3013,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2882,
                  "end": 2901,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2888,
                      "end": 2893,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2888,
                        "end": 2889,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 2892,
                        "end": 2893,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 2895,
                      "end": 2899,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2895,
                        "end": 2896,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 2898,
                        "end": 2899,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2910,
                  "end": 2937,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2916,
                      "end": 2936,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2916,
                        "end": 2917,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2920,
                        "end": 2936,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2920,
                          "end": 2929,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2930,
                          "end": 2936,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2946,
                  "end": 2980,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2947,
                    "end": 2978,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2958,
                      "end": 2978,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2960,
                          "end": 2976,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2967,
                            "end": 2976,
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 2967,
                              "end": 2972,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 2967,
                                "end": 2968,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2971,
                                "end": 2972,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2975,
                              "end": 2976,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2989,
                  "end": 3007,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2990,
                    "end": 3005,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2996,
                      "end": 3005,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 2996,
                        "end": 3001,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 2996,
                          "end": 2997,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3000,
                          "end": 3001,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 3004,
                        "end": 3005,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2863,
              "end": 2870,
              "operator": "===",
              "left": {
                "type": "Literal",
                "start": 2863,
                "end": 2864,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 2869,
                "end": 2870,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2840,
        "end": 2846,
        "decorators": [],
        "name": "foo6_c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2847,
          "end": 2848,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 3017,
      "end": 3204,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3036,
        "end": 3204,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 3042,
            "end": 3202,
            "body": {
              "type": "BlockStatement",
              "start": 3045,
              "end": 3186,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3055,
                  "end": 3074,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3061,
                      "end": 3066,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 3061,
                        "end": 3062,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 3065,
                        "end": 3066,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 3068,
                      "end": 3073,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 3068,
                        "end": 3069,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 3072,
                        "end": 3073,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3083,
                  "end": 3110,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3089,
                      "end": 3109,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 3089,
                        "end": 3090,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 3093,
                        "end": 3109,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3093,
                          "end": 3102,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3103,
                          "end": 3109,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3119,
                  "end": 3153,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 3120,
                    "end": 3151,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3131,
                      "end": 3151,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3133,
                          "end": 3149,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 3140,
                            "end": 3149,
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 3140,
                              "end": 3145,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 3140,
                                "end": 3141,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3144,
                                "end": 3145,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3148,
                              "end": 3149,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3162,
                  "end": 3180,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 3163,
                    "end": 3178,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 3169,
                      "end": 3178,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 3169,
                        "end": 3174,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 3169,
                          "end": 3170,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3173,
                          "end": 3174,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 3177,
                        "end": 3178,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3194,
              "end": 3201,
              "operator": "===",
              "left": {
                "type": "Literal",
                "start": 3194,
                "end": 3195,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 3200,
                "end": 3201,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3026,
        "end": 3032,
        "decorators": [],
        "name": "foo7_c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3033,
          "end": 3034,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 3207,
      "end": 3394,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3226,
        "end": 3394,
        "body": [
          {
            "type": "ForStatement",
            "start": 3232,
            "end": 3392,
            "body": {
              "type": "BlockStatement",
              "start": 3258,
              "end": 3392,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3268,
                  "end": 3280,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3274,
                      "end": 3279,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 3274,
                        "end": 3275,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 3278,
                        "end": 3279,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3289,
                  "end": 3316,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3295,
                      "end": 3315,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 3295,
                        "end": 3296,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 3299,
                        "end": 3315,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3299,
                          "end": 3308,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3309,
                          "end": 3315,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3325,
                  "end": 3359,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 3326,
                    "end": 3357,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3337,
                      "end": 3357,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3339,
                          "end": 3355,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 3346,
                            "end": 3355,
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 3346,
                              "end": 3351,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 3346,
                                "end": 3347,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3350,
                                "end": 3351,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3354,
                              "end": 3355,
                              "decorators": [],
                              "name": "a",
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
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3368,
                  "end": 3386,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 3369,
                    "end": 3384,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 3375,
                      "end": 3384,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 3375,
                        "end": 3380,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 3375,
                          "end": 3376,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3379,
                          "end": 3380,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 3383,
                        "end": 3384,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 3237,
              "end": 3248,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3243,
                  "end": 3248,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 3243,
                    "end": 3244,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 3247,
                    "end": 3248,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3250,
              "end": 3255,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 3250,
                "end": 3251,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 3254,
                "end": 3255,
                "raw": "1",
                "value": 1
              }
            },
            "update": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3216,
        "end": 3222,
        "decorators": [],
        "name": "foo8_c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3223,
          "end": 3224,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
