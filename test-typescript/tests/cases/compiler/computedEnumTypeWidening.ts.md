__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1565,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 45,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "decorators": [],
        "name": "computed",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 26,
          "end": 35,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 35,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 29,
              "end": 35
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 36,
        "end": 44,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 38,
          "end": 44
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 47,
      "end": 141,
      "body": {
        "type": "TSEnumBody",
        "start": 54,
        "end": 141,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 60,
            "end": 75,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 64,
              "end": 75,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 73,
                  "end": 74,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 64,
                "end": 72,
                "decorators": [],
                "name": "computed",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 81,
            "end": 96,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 85,
              "end": 96,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 94,
                  "end": 95,
                  "raw": "1",
                  "value": 1
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 85,
                "end": 93,
                "decorators": [],
                "name": "computed",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 102,
            "end": 117,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 106,
              "end": 117,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 115,
                  "end": 116,
                  "raw": "2",
                  "value": 2
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 106,
                "end": 114,
                "decorators": [],
                "name": "computed",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 123,
            "end": 138,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 127,
              "end": 138,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 136,
                  "end": 137,
                  "raw": "3",
                  "value": 3
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 127,
                "end": 135,
                "decorators": [],
                "name": "computed",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 143,
      "end": 388,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 157,
        "end": 388,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 163,
            "end": 178,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 169,
                "end": 177,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 171,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 174,
                  "end": 177,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "decorators": [],
                    "name": "B",
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
            "start": 197,
            "end": 209,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 208,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 203,
                  "decorators": [],
                  "name": "v1",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 208,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 220,
            "end": 234,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 226,
                "end": 233,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 228,
                  "decorators": [],
                  "name": "c2",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 233,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 253,
            "end": 265,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 257,
                "end": 264,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 259,
                  "decorators": [],
                  "name": "v2",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 264,
                  "decorators": [],
                  "name": "c2",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 276,
            "end": 296,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 282,
                "end": 295,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 289,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 284,
                    "end": 289,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 286,
                      "end": 289,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 286,
                        "end": 289,
                        "left": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 287,
                          "decorators": [],
                          "name": "E",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 289,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 292,
                  "end": 295,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 293,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 295,
                    "decorators": [],
                    "name": "B",
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
            "start": 309,
            "end": 321,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 313,
                "end": 320,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 315,
                  "decorators": [],
                  "name": "v3",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 320,
                  "decorators": [],
                  "name": "c3",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 334,
            "end": 353,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 340,
                "end": 352,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 347,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 342,
                    "end": 347,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 344,
                      "end": 347,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 344,
                        "end": 347,
                        "left": {
                          "type": "Identifier",
                          "start": 344,
                          "end": 345,
                          "decorators": [],
                          "name": "E",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 347,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 352,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 366,
            "end": 378,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 370,
                "end": 377,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 372,
                  "decorators": [],
                  "name": "v4",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 377,
                  "decorators": [],
                  "name": "c4",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 154,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 826,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 417,
        "end": 826,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 423,
            "end": 451,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 429,
                "end": 450,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 431,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 434,
                  "end": 450,
                  "alternate": {
                    "type": "MemberExpression",
                    "start": 447,
                    "end": 450,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 448,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 450,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "start": 441,
                    "end": 444,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 442,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 443,
                      "end": 444,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 434,
                    "end": 438,
                    "decorators": [],
                    "name": "cond",
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
            "start": 482,
            "end": 507,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 488,
                "end": 506,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 501,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 490,
                    "end": 501,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 492,
                      "end": 501,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 492,
                          "end": 495,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 492,
                            "end": 495,
                            "left": {
                              "type": "Identifier",
                              "start": 492,
                              "end": 493,
                              "decorators": [],
                              "name": "E",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 494,
                              "end": 495,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 498,
                          "end": 501,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 498,
                            "end": 501,
                            "left": {
                              "type": "Identifier",
                              "start": 498,
                              "end": 499,
                              "decorators": [],
                              "name": "E",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 500,
                              "end": 501,
                              "decorators": [],
                              "name": "B",
                              "optional": false
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 506,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 526,
            "end": 552,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 532,
                "end": 551,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 534,
                  "decorators": [],
                  "name": "c3",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 537,
                  "end": 551,
                  "alternate": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 551,
                    "decorators": [],
                    "name": "c2",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 544,
                    "end": 546,
                    "decorators": [],
                    "name": "c1",
                    "optional": false
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 541,
                    "decorators": [],
                    "name": "cond",
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
            "start": 571,
            "end": 598,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 577,
                "end": 597,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 579,
                  "decorators": [],
                  "name": "c4",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 582,
                  "end": 597,
                  "alternate": {
                    "type": "MemberExpression",
                    "start": 594,
                    "end": 597,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 594,
                      "end": 595,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 596,
                      "end": 597,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 589,
                    "end": 591,
                    "decorators": [],
                    "name": "c3",
                    "optional": false
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 582,
                    "end": 586,
                    "decorators": [],
                    "name": "cond",
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
            "start": 629,
            "end": 660,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 635,
                "end": 659,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 654,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 637,
                    "end": 654,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 639,
                      "end": 654,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 639,
                          "end": 642,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 639,
                            "end": 642,
                            "left": {
                              "type": "Identifier",
                              "start": 639,
                              "end": 640,
                              "decorators": [],
                              "name": "E",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 641,
                              "end": 642,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 645,
                          "end": 648,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 645,
                            "end": 648,
                            "left": {
                              "type": "Identifier",
                              "start": 645,
                              "end": 646,
                              "decorators": [],
                              "name": "E",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 647,
                              "end": 648,
                              "decorators": [],
                              "name": "B",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 651,
                          "end": 654,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 651,
                            "end": 654,
                            "left": {
                              "type": "Identifier",
                              "start": 651,
                              "end": 652,
                              "decorators": [],
                              "name": "E",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 653,
                              "end": 654,
                              "decorators": [],
                              "name": "C",
                              "optional": false
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 659,
                  "decorators": [],
                  "name": "c4",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 684,
            "end": 696,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 688,
                "end": 695,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 688,
                  "end": 690,
                  "decorators": [],
                  "name": "v1",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 695,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 707,
            "end": 719,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 711,
                "end": 718,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 711,
                  "end": 713,
                  "decorators": [],
                  "name": "v2",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 716,
                  "end": 718,
                  "decorators": [],
                  "name": "c2",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 738,
            "end": 750,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 742,
                "end": 749,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 742,
                  "end": 744,
                  "decorators": [],
                  "name": "v3",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 747,
                  "end": 749,
                  "decorators": [],
                  "name": "c3",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 769,
            "end": 781,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 773,
                "end": 780,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 773,
                  "end": 775,
                  "decorators": [],
                  "name": "v4",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 778,
                  "end": 780,
                  "decorators": [],
                  "name": "c4",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 792,
            "end": 804,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 796,
                "end": 803,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 796,
                  "end": 798,
                  "decorators": [],
                  "name": "v5",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 801,
                  "end": 803,
                  "decorators": [],
                  "name": "c5",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 401,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 402,
          "end": 415,
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 406,
            "end": 415,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 408,
              "end": 415
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 828,
      "end": 1094,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 842,
        "end": 1094,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 848,
            "end": 863,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 854,
                "end": 862,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 854,
                  "end": 856,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 859,
                  "end": 862,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 859,
                    "end": 860,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 861,
                    "end": 862,
                    "decorators": [],
                    "name": "B",
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
            "start": 868,
            "end": 880,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 872,
                "end": 879,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 872,
                  "end": 874,
                  "decorators": [],
                  "name": "v1",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 877,
                  "end": 879,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 891,
            "end": 911,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 897,
                "end": 910,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 897,
                  "end": 904,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 899,
                    "end": 904,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 901,
                      "end": 904,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 901,
                        "end": 904,
                        "left": {
                          "type": "Identifier",
                          "start": 901,
                          "end": 902,
                          "decorators": [],
                          "name": "E",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 903,
                          "end": 904,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 907,
                  "end": 910,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 907,
                    "end": 908,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 909,
                    "end": 910,
                    "decorators": [],
                    "name": "B",
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
            "start": 916,
            "end": 928,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 920,
                "end": 927,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 920,
                  "end": 922,
                  "decorators": [],
                  "name": "v2",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 925,
                  "end": 927,
                  "decorators": [],
                  "name": "c2",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 941,
            "end": 963,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 947,
                "end": 962,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 947,
                  "end": 949,
                  "decorators": [],
                  "name": "c3",
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 952,
                  "end": 962,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 952,
                    "end": 955,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 952,
                      "end": 953,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 954,
                      "end": 955,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 959,
                    "end": 962,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 959,
                      "end": 962,
                      "left": {
                        "type": "Identifier",
                        "start": 959,
                        "end": 960,
                        "decorators": [],
                        "name": "E",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 961,
                        "end": 962,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 968,
            "end": 980,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 972,
                "end": 979,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 972,
                  "end": 974,
                  "decorators": [],
                  "name": "v3",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 979,
                  "decorators": [],
                  "name": "c3",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 993,
            "end": 1013,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 999,
                "end": 1012,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 999,
                  "end": 1001,
                  "decorators": [],
                  "name": "c4",
                  "optional": false
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 1004,
                  "end": 1012,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1009,
                    "end": 1012,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1009,
                      "end": 1010,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1011,
                      "end": 1012,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1005,
                    "end": 1008,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1005,
                      "end": 1008,
                      "left": {
                        "type": "Identifier",
                        "start": 1005,
                        "end": 1006,
                        "decorators": [],
                        "name": "E",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1007,
                        "end": 1008,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1018,
            "end": 1030,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1022,
                "end": 1029,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1024,
                  "decorators": [],
                  "name": "v4",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1027,
                  "end": 1029,
                  "decorators": [],
                  "name": "c4",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1043,
            "end": 1067,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1049,
                "end": 1066,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1049,
                  "end": 1051,
                  "decorators": [],
                  "name": "c5",
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 1054,
                  "end": 1066,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1054,
                    "end": 1057,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1054,
                      "end": 1055,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1056,
                      "end": 1057,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1061,
                    "end": 1066,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1061,
                      "end": 1066,
                      "decorators": [],
                      "name": "const",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1072,
            "end": 1084,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1076,
                "end": 1083,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1076,
                  "end": 1078,
                  "decorators": [],
                  "name": "v5",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1081,
                  "end": 1083,
                  "decorators": [],
                  "name": "c5",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 837,
        "end": 839,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1096,
      "end": 1126,
      "body": {
        "type": "TSEnumBody",
        "start": 1112,
        "end": 1126,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1114,
            "end": 1115,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1114,
              "end": 1115,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1117,
            "end": 1118,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1117,
              "end": 1118,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1120,
            "end": 1121,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1120,
              "end": 1121,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1123,
            "end": 1124,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1123,
              "end": 1124,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 1109,
        "end": 1111,
        "decorators": [],
        "name": "E2",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1128,
      "end": 1206,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1142,
        "end": 1206,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1148,
            "end": 1164,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1154,
                "end": 1163,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1154,
                  "end": 1156,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1159,
                  "end": 1163,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1159,
                    "end": 1161,
                    "decorators": [],
                    "name": "E2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1162,
                    "end": 1163,
                    "decorators": [],
                    "name": "B",
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
            "start": 1184,
            "end": 1197,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1188,
                "end": 1196,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1188,
                  "end": 1190,
                  "decorators": [],
                  "name": "v1",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1193,
                  "end": 1196,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1193,
                    "end": 1194,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1195,
                    "end": 1196,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1137,
        "end": 1139,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 1208,
      "end": 1223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1214,
          "end": 1222,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1214,
            "end": 1216,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1219,
            "end": 1222,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1219,
              "end": 1220,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1221,
              "end": 1222,
              "decorators": [],
              "name": "B",
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
      "start": 1224,
      "end": 1248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1230,
          "end": 1247,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1230,
            "end": 1232,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1235,
            "end": 1247,
            "expression": {
              "type": "MemberExpression",
              "start": 1235,
              "end": 1238,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1235,
                "end": 1236,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1237,
                "end": 1238,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1242,
              "end": 1247,
              "typeName": {
                "type": "Identifier",
                "start": 1242,
                "end": 1247,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1249,
      "end": 1262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1253,
          "end": 1261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1253,
            "end": 1255,
            "decorators": [],
            "name": "v1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1258,
            "end": 1261,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1258,
              "end": 1259,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1260,
              "end": 1261,
              "decorators": [],
              "name": "B",
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
      "start": 1263,
      "end": 1285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1267,
          "end": 1284,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1267,
            "end": 1269,
            "decorators": [],
            "name": "v2",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1272,
            "end": 1284,
            "expression": {
              "type": "MemberExpression",
              "start": 1272,
              "end": 1275,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1272,
                "end": 1273,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1274,
                "end": 1275,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1279,
              "end": 1284,
              "typeName": {
                "type": "Identifier",
                "start": 1279,
                "end": 1284,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 1287,
      "end": 1382,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1295,
        "end": 1382,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1299,
            "end": 1308,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1299,
              "end": 1301,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 1304,
              "end": 1307,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1304,
                "end": 1305,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1306,
                "end": 1307,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1311,
            "end": 1329,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1311,
              "end": 1313,
              "decorators": [],
              "name": "p2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "TSAsExpression",
              "start": 1316,
              "end": 1328,
              "expression": {
                "type": "MemberExpression",
                "start": 1316,
                "end": 1319,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1317,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1318,
                  "end": 1319,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1323,
                "end": 1328,
                "typeName": {
                  "type": "Identifier",
                  "start": 1323,
                  "end": 1328,
                  "decorators": [],
                  "name": "const",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1332,
            "end": 1350,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1341,
              "end": 1343,
              "decorators": [],
              "name": "p3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 1346,
              "end": 1349,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1346,
                "end": 1347,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1348,
                "end": 1349,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1353,
            "end": 1380,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1362,
              "end": 1364,
              "decorators": [],
              "name": "p4",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "TSAsExpression",
              "start": 1367,
              "end": 1379,
              "expression": {
                "type": "MemberExpression",
                "start": 1367,
                "end": 1370,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1367,
                  "end": 1368,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1369,
                  "end": 1370,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1374,
                "end": 1379,
                "typeName": {
                  "type": "Identifier",
                  "start": 1374,
                  "end": 1379,
                  "decorators": [],
                  "name": "const",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1293,
        "end": 1294,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1406,
      "end": 1429,
      "body": {
        "type": "TSEnumBody",
        "start": 1418,
        "end": 1429,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1420,
            "end": 1421,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1420,
              "end": 1421,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1423,
            "end": 1424,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1423,
              "end": 1424,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1426,
            "end": 1427,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1426,
              "end": 1427,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1411,
        "end": 1417,
        "decorators": [],
        "name": "MyEnum",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1431,
      "end": 1451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1435,
          "end": 1450,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1435,
            "end": 1439,
            "decorators": [],
            "name": "val1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1442,
            "end": 1450,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1442,
              "end": 1448,
              "decorators": [],
              "name": "MyEnum",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1449,
              "end": 1450,
              "decorators": [],
              "name": "A",
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
      "start": 1452,
      "end": 1468,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1452,
        "end": 1467,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1452,
          "end": 1456,
          "decorators": [],
          "name": "val1",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1459,
          "end": 1467,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1459,
            "end": 1465,
            "decorators": [],
            "name": "MyEnum",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1466,
            "end": 1467,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1470,
      "end": 1509,
      "body": {
        "type": "TSEnumBody",
        "start": 1498,
        "end": 1509,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1500,
            "end": 1501,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1500,
              "end": 1501,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1503,
            "end": 1504,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1503,
              "end": 1504,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1506,
            "end": 1507,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1506,
              "end": 1507,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 1483,
        "end": 1497,
        "decorators": [],
        "name": "MyDeclaredEnum",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1511,
      "end": 1539,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1515,
          "end": 1538,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1515,
            "end": 1519,
            "decorators": [],
            "name": "val2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1522,
            "end": 1538,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1522,
              "end": 1536,
              "decorators": [],
              "name": "MyDeclaredEnum",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1537,
              "end": 1538,
              "decorators": [],
              "name": "A",
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
      "start": 1540,
      "end": 1564,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1540,
        "end": 1563,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1540,
          "end": 1544,
          "decorators": [],
          "name": "val2",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1547,
          "end": 1563,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1547,
            "end": 1561,
            "decorators": [],
            "name": "MyDeclaredEnum",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1562,
            "end": 1563,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
