__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1232,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 1171,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 1171,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 25,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 24,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 30,
            "end": 40,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 34,
                "end": 39,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 38,
                  "end": 39,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 45,
            "end": 113,
            "init": {
              "type": "VariableDeclaration",
              "start": 50,
              "end": 59,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 54,
                  "end": 59,
                  "id": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 58,
                    "end": 59,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 61,
              "end": 67,
              "left": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 65,
                "end": 67,
                "value": 10,
                "raw": "10"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 69,
              "end": 72,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 74,
              "end": 113,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 84,
                  "end": 91,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 84,
                    "end": 90,
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 100,
                  "end": 107,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 100,
                    "end": 106,
                    "operator": "*=",
                    "left": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 101,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 105,
                      "end": 106,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 118,
            "end": 196,
            "test": {
              "type": "BinaryExpression",
              "start": 122,
              "end": 128,
              "left": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 126,
                "end": 128,
                "value": 17,
                "raw": "17"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 130,
              "end": 153,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 140,
                  "end": 147,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 140,
                    "end": 146,
                    "operator": "/=",
                    "left": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 145,
                      "end": 146,
                      "value": 9,
                      "raw": "9"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 159,
              "end": 196,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 169,
                  "end": 177,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 169,
                    "end": 176,
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 174,
                      "end": 176,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 186,
                  "end": 190,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 186,
                    "end": 189,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 187,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 201,
            "end": 249,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 205,
                "end": 248,
                "id": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 206,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 209,
                  "end": 248,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 219,
                      "end": 220,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 230,
                      "end": 231,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 241,
                      "end": 242,
                      "value": 3,
                      "raw": "3"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 254,
            "end": 305,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 258,
                "end": 304,
                "id": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 261,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 264,
                  "end": 304,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 274,
                      "end": 278,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 275,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 277,
                        "end": 278,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 288,
                      "end": 298,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 291,
                        "end": 298,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForInStatement",
            "start": 310,
            "end": 376,
            "left": {
              "type": "VariableDeclaration",
              "start": 315,
              "end": 320,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 319,
                  "end": 320,
                  "id": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 320,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 327,
              "end": 376,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 337,
                  "end": 350,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 337,
                    "end": 349,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 337,
                      "end": 342,
                      "object": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 340,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 342,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 345,
                      "end": 349,
                      "object": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 346,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 348,
                        "decorators": [],
                        "name": "j",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": true
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 359,
                  "end": 370,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 363,
                      "end": 369,
                      "id": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 364,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 367,
                        "end": 369,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          },
          {
            "type": "TryStatement",
            "start": 381,
            "end": 538,
            "block": {
              "type": "BlockStatement",
              "start": 385,
              "end": 416,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 395,
                  "end": 410,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 395,
                    "end": 409,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 395,
                      "end": 400,
                      "object": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 398,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 400,
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 403,
                      "end": 409,
                      "value": "ohhh",
                      "raw": "\"ohhh\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 417,
              "end": 538,
              "param": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 427,
                "end": 538,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 437,
                    "end": 532,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 441,
                      "end": 451,
                      "left": {
                        "type": "MemberExpression",
                        "start": 441,
                        "end": 446,
                        "object": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 444,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 446,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 449,
                        "end": 451,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 453,
                      "end": 488,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 467,
                          "end": 478,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 467,
                            "end": 477,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 467,
                              "end": 472,
                              "object": {
                                "type": "Identifier",
                                "start": 467,
                                "end": 470,
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 471,
                                "end": 472,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 475,
                              "end": 477,
                              "value": 12,
                              "raw": "12"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 494,
                      "end": 532,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 508,
                          "end": 522,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 508,
                            "end": 521,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 508,
                              "end": 513,
                              "object": {
                                "type": "Identifier",
                                "start": 508,
                                "end": 511,
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 512,
                                "end": 513,
                                "decorators": [],
                                "name": "q",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 516,
                              "end": 521,
                              "value": "hmm",
                              "raw": "\"hmm\""
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 543,
            "end": 652,
            "block": {
              "type": "BlockStatement",
              "start": 547,
              "end": 581,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 557,
                  "end": 575,
                  "argument": {
                    "type": "NewExpression",
                    "start": 563,
                    "end": 574,
                    "callee": {
                      "type": "Identifier",
                      "start": 567,
                      "end": 572,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 582,
              "end": 620,
              "param": {
                "type": "Identifier",
                "start": 589,
                "end": 591,
                "decorators": [],
                "name": "e1",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 593,
                "end": 620,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 603,
                    "end": 614,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 607,
                        "end": 613,
                        "id": {
                          "type": "Identifier",
                          "start": 607,
                          "end": 608,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 611,
                          "end": 613,
                          "decorators": [],
                          "name": "e1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 629,
              "end": 652,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 639,
                  "end": 646,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 639,
                    "end": 645,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 639,
                      "end": 640,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 643,
                      "end": 645,
                      "value": 70,
                      "raw": "70"
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "WithStatement",
            "start": 657,
            "end": 706,
            "object": {
              "type": "Identifier",
              "start": 663,
              "end": 666,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 668,
              "end": 706,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 678,
                  "end": 684,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 678,
                    "end": 683,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 678,
                      "end": 679,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 682,
                      "end": 683,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 693,
                  "end": 700,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 693,
                    "end": 699,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 693,
                      "end": 694,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 697,
                      "end": 699,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "SwitchStatement",
            "start": 711,
            "end": 952,
            "discriminant": {
              "type": "MemberExpression",
              "start": 719,
              "end": 724,
              "object": {
                "type": "Identifier",
                "start": 719,
                "end": 722,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 723,
                "end": 724,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 736,
                "end": 792,
                "test": {
                  "type": "Literal",
                  "start": 741,
                  "end": 742,
                  "value": 0,
                  "raw": "0"
                },
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "start": 744,
                    "end": 792,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 758,
                        "end": 762,
                        "expression": {
                          "type": "UpdateExpression",
                          "start": 758,
                          "end": 761,
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 758,
                            "end": 759,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "BreakStatement",
                        "start": 775,
                        "end": 781,
                        "label": null
                      }
                    ]
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 801,
                "end": 857,
                "test": {
                  "type": "Literal",
                  "start": 806,
                  "end": 807,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "start": 809,
                    "end": 857,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 823,
                        "end": 827,
                        "expression": {
                          "type": "UpdateExpression",
                          "start": 823,
                          "end": 826,
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 823,
                            "end": 824,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "BreakStatement",
                        "start": 840,
                        "end": 846,
                        "label": null
                      }
                    ]
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 866,
                "end": 946,
                "test": null,
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "start": 875,
                    "end": 946,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 889,
                        "end": 896,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 889,
                          "end": 895,
                          "operator": "*=",
                          "left": {
                            "type": "Identifier",
                            "start": 889,
                            "end": 890,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 894,
                            "end": 895,
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 909,
                        "end": 916,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 909,
                          "end": 915,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 909,
                            "end": 910,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 913,
                            "end": 915,
                            "value": 50,
                            "raw": "50"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "BreakStatement",
                        "start": 929,
                        "end": 935,
                        "label": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "WhileStatement",
            "start": 957,
            "end": 992,
            "test": {
              "type": "BinaryExpression",
              "start": 964,
              "end": 970,
              "left": {
                "type": "Identifier",
                "start": 964,
                "end": 965,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 968,
                "end": 970,
                "value": 10,
                "raw": "10"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 972,
              "end": 992,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 982,
                  "end": 986,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 982,
                    "end": 985,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 982,
                      "end": 983,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "DoWhileStatement",
            "start": 997,
            "end": 1034,
            "body": {
              "type": "BlockStatement",
              "start": 1000,
              "end": 1020,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1010,
                  "end": 1014,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 1010,
                    "end": 1013,
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 1010,
                      "end": 1011,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1028,
              "end": 1033,
              "left": {
                "type": "Identifier",
                "start": 1028,
                "end": 1029,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 1032,
                "end": 1033,
                "value": 4,
                "raw": "4"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1039,
            "end": 1045,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1039,
              "end": 1044,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1039,
                "end": 1040,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1043,
                "end": 1044,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1050,
            "end": 1083,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1054,
                "end": 1082,
                "id": {
                  "type": "Identifier",
                  "start": 1054,
                  "end": 1055,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1058,
                  "end": 1082,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1059,
                    "end": 1065,
                    "left": {
                      "type": "Identifier",
                      "start": 1059,
                      "end": 1060,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 1064,
                      "end": 1065,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BinaryExpression",
                    "start": 1069,
                    "end": 1074,
                    "left": {
                      "type": "Identifier",
                      "start": 1069,
                      "end": 1070,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 1073,
                      "end": 1074,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "alternate": {
                    "type": "BinaryExpression",
                    "start": 1077,
                    "end": 1082,
                    "left": {
                      "type": "Identifier",
                      "start": 1077,
                      "end": 1078,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "-",
                    "right": {
                      "type": "Literal",
                      "start": 1081,
                      "end": 1082,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1088,
            "end": 1113,
            "expression": {
              "type": "ConditionalExpression",
              "start": 1088,
              "end": 1112,
              "test": {
                "type": "BinaryExpression",
                "start": 1089,
                "end": 1095,
                "left": {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1090,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "start": 1094,
                  "end": 1095,
                  "value": 1,
                  "raw": "1"
                }
              },
              "consequent": {
                "type": "BinaryExpression",
                "start": 1099,
                "end": 1104,
                "left": {
                  "type": "Identifier",
                  "start": 1099,
                  "end": 1100,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 1103,
                  "end": 1104,
                  "value": 1,
                  "raw": "1"
                }
              },
              "alternate": {
                "type": "BinaryExpression",
                "start": 1107,
                "end": 1112,
                "left": {
                  "type": "Identifier",
                  "start": 1107,
                  "end": 1108,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "-",
                "right": {
                  "type": "Literal",
                  "start": 1111,
                  "end": 1112,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1118,
            "end": 1126,
            "expression": {
              "type": "BinaryExpression",
              "start": 1118,
              "end": 1125,
              "left": {
                "type": "Identifier",
                "start": 1118,
                "end": 1119,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1124,
                "end": 1125,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1131,
            "end": 1142,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1131,
              "end": 1141,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1131,
                "end": 1132,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "AssignmentExpression",
                "start": 1135,
                "end": 1141,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 1135,
                  "end": 1136,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 1139,
                  "end": 1141,
                  "value": 40,
                  "raw": "40"
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1147,
            "end": 1157,
            "expression": {
              "type": "CallExpression",
              "start": 1147,
              "end": 1156,
              "callee": {
                "type": "Identifier",
                "start": 1147,
                "end": 1151,
                "decorators": [],
                "name": "eval",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1152,
                  "end": 1155,
                  "value": "y",
                  "raw": "\"y\""
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 1162,
            "end": 1169,
            "argument": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1172,
      "end": 1227,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1176,
          "end": 1226,
          "id": {
            "type": "Identifier",
            "start": 1176,
            "end": 1177,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1180,
            "end": 1226,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1192,
              "end": 1226,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1198,
                  "end": 1209,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1202,
                      "end": 1208,
                      "id": {
                        "type": "Identifier",
                        "start": 1202,
                        "end": 1203,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 1206,
                        "end": 1208,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1214,
                  "end": 1224,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1214,
                    "end": 1223,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1214,
                      "end": 1215,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 1218,
                      "end": 1223,
                      "left": {
                        "type": "Identifier",
                        "start": 1218,
                        "end": 1219,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 1222,
                        "end": 1223,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "directive": null
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
      "start": 1228,
      "end": 1232,
      "expression": {
        "type": "CallExpression",
        "start": 1228,
        "end": 1231,
        "callee": {
          "type": "Identifier",
          "start": 1228,
          "end": 1229,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
