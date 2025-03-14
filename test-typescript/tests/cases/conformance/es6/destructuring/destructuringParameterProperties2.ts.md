destructuringParameterProperties2.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 682,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 391,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 391,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 241,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
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
              "start": 27,
              "end": 241,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 241,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 103,
                    "end": 235,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 195,
                      "end": 235,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 209,
                          "end": 225,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 209,
                            "end": 224,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 209,
                              "end": 215,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 209,
                                "end": 213
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 214,
                                "end": 215,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 218,
                              "end": 224,
                              "operator": "||",
                              "left": {
                                "type": "Identifier",
                                "start": 218,
                                "end": 219,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 223,
                                "end": 224,
                                "decorators": [],
                                "name": "k",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "start": 107,
                      "end": 193,
                      "operator": "||",
                      "left": {
                        "type": "LogicalExpression",
                        "start": 108,
                        "end": 142,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 108,
                          "end": 123,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 109,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 123,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 127,
                          "end": 142,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 128,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 133,
                            "end": 142,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 148,
                        "end": 192,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 148,
                          "end": 168,
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "start": 148,
                            "end": 154,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 148,
                              "end": 152
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 154,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 159,
                            "end": 168,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 172,
                          "end": 192,
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "start": 172,
                            "end": 178,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 172,
                              "end": 176
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 177,
                              "end": 178,
                              "decorators": [],
                              "name": "c",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 192,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        }
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
                  "type": "TSParameterProperty",
                  "start": 28,
                  "end": 45,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 45,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 39,
                        "end": 45
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 47,
                  "end": 91,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 55,
                    "end": 91,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 56,
                        "end": 57,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 59,
                        "end": 60,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 91,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 66,
                        "end": 91,
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 67,
                            "end": 73
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 75,
                            "end": 81
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 83,
                            "end": 90
                          }
                        ]
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 247,
            "end": 290,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 258,
              "decorators": [],
              "name": "getA",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 290,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 261,
                "end": 290,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 271,
                    "end": 284,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 278,
                      "end": 284,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 278,
                        "end": 282
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 284,
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
            "type": "MethodDefinition",
            "start": 296,
            "end": 339,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 307,
              "decorators": [],
              "name": "getB",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 307,
              "end": 339,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 310,
                "end": 339,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 320,
                    "end": 333,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 327,
                      "end": 333,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 327,
                        "end": 331
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 333,
                        "decorators": [],
                        "name": "b",
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
            "type": "MethodDefinition",
            "start": 345,
            "end": 389,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 356,
              "decorators": [],
              "name": "getC",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 356,
              "end": 389,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 359,
                "end": 389,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 369,
                    "end": 383,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 376,
                      "end": 382,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 376,
                        "end": 380
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 382,
                        "decorators": [],
                        "name": "c",
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 393,
      "end": 439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 438,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 398,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 401,
            "end": 438,
            "arguments": [
              {
                "type": "Identifier",
                "start": 408,
                "end": 417,
                "decorators": [],
                "name": "undefined",
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 419,
                "end": 437,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 420,
                    "end": 421,
                    "raw": "0",
                    "value": 0
                  },
                  {
                    "type": "Identifier",
                    "start": 423,
                    "end": 432,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  {
                    "type": "Literal",
                    "start": 434,
                    "end": 436,
                    "raw": "\"\"",
                    "value": ""
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 405,
              "end": 407,
              "decorators": [],
              "name": "C1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 440,
      "end": 493,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 492,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 444,
            "end": 459,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 445,
                "end": 448,
                "decorators": [],
                "name": "x_a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 450,
                "end": 453,
                "decorators": [],
                "name": "x_b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 455,
                "end": 458,
                "decorators": [],
                "name": "x_c",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 462,
            "end": 492,
            "elements": [
              {
                "type": "CallExpression",
                "start": 463,
                "end": 471,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 463,
                  "end": 469,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 464,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 469,
                    "decorators": [],
                    "name": "getA",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 473,
                "end": 481,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 473,
                  "end": 479,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 473,
                    "end": 474,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 479,
                    "decorators": [],
                    "name": "getB",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 483,
                "end": 491,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 483,
                  "end": 489,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 484,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 489,
                    "decorators": [],
                    "name": "getC",
                    "optional": false
                  }
                },
                "optional": false
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
      "start": 495,
      "end": 529,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 499,
          "end": 528,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 500,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 503,
            "end": 528,
            "arguments": [
              {
                "type": "Literal",
                "start": 510,
                "end": 512,
                "raw": "10",
                "value": 10
              },
              {
                "type": "ArrayExpression",
                "start": 514,
                "end": 527,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 515,
                    "end": 516,
                    "raw": "0",
                    "value": 0
                  },
                  {
                    "type": "Literal",
                    "start": 518,
                    "end": 520,
                    "raw": "\"\"",
                    "value": ""
                  },
                  {
                    "type": "Literal",
                    "start": 522,
                    "end": 526,
                    "raw": "true",
                    "value": true
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 507,
              "end": 509,
              "decorators": [],
              "name": "C1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 530,
      "end": 583,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 534,
          "end": 582,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 534,
            "end": 549,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 535,
                "end": 538,
                "decorators": [],
                "name": "y_a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 540,
                "end": 543,
                "decorators": [],
                "name": "y_b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 545,
                "end": 548,
                "decorators": [],
                "name": "y_c",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 552,
            "end": 582,
            "elements": [
              {
                "type": "CallExpression",
                "start": 553,
                "end": 561,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 553,
                  "end": 559,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 554,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 559,
                    "decorators": [],
                    "name": "getA",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 563,
                "end": 571,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 563,
                  "end": 569,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 563,
                    "end": 564,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 569,
                    "decorators": [],
                    "name": "getB",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 573,
                "end": 581,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 573,
                  "end": 579,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 574,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 575,
                    "end": 579,
                    "decorators": [],
                    "name": "getC",
                    "optional": false
                  }
                },
                "optional": false
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
      "start": 585,
      "end": 627,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 589,
          "end": 626,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 589,
            "end": 590,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 593,
            "end": 626,
            "arguments": [
              {
                "type": "Literal",
                "start": 600,
                "end": 602,
                "raw": "10",
                "value": 10
              },
              {
                "type": "ArrayExpression",
                "start": 604,
                "end": 625,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 605,
                    "end": 614,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  {
                    "type": "Literal",
                    "start": 616,
                    "end": 618,
                    "raw": "\"\"",
                    "value": ""
                  },
                  {
                    "type": "Literal",
                    "start": 620,
                    "end": 624,
                    "raw": "null",
                    "value": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 599,
              "decorators": [],
              "name": "C1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 628,
      "end": 681,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 680,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 632,
            "end": 647,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 633,
                "end": 636,
                "decorators": [],
                "name": "z_a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 638,
                "end": 641,
                "decorators": [],
                "name": "z_b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 643,
                "end": 646,
                "decorators": [],
                "name": "z_c",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 650,
            "end": 680,
            "elements": [
              {
                "type": "CallExpression",
                "start": 651,
                "end": 659,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 651,
                  "end": 657,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 651,
                    "end": 652,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 653,
                    "end": 657,
                    "decorators": [],
                    "name": "getA",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 661,
                "end": 669,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 661,
                  "end": 667,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 661,
                    "end": 662,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 667,
                    "decorators": [],
                    "name": "getB",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 671,
                "end": 679,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 671,
                  "end": 677,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 671,
                    "end": 672,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 673,
                    "end": 677,
                    "decorators": [],
                    "name": "getC",
                    "optional": false
                  }
                },
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
