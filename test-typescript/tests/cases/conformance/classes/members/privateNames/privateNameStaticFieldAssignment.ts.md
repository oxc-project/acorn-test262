privateNameStaticFieldAssignment.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 866,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 865,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 865,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 27,
              "name": "field"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 815,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 48,
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
              "start": 48,
              "end": 815,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 815,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 61,
                    "end": 74,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 61,
                      "end": 73,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 61,
                        "end": 69,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 63,
                          "end": 69,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 72,
                        "end": 73,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 83,
                    "end": 97,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 83,
                      "end": 96,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 83,
                        "end": 91,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 85,
                          "end": 91,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 95,
                        "end": 96,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 106,
                    "end": 120,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 106,
                      "end": 119,
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 106,
                        "end": 114,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 107,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 108,
                          "end": 114,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 118,
                        "end": 119,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 129,
                    "end": 143,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 129,
                      "end": 142,
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 129,
                        "end": 137,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 131,
                          "end": 137,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 141,
                        "end": 142,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 152,
                    "end": 166,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 152,
                      "end": 165,
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 152,
                        "end": 160,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 153,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 154,
                          "end": 160,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 164,
                        "end": 165,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 175,
                    "end": 190,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 175,
                      "end": 189,
                      "operator": "**=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 175,
                        "end": 183,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 176,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 177,
                          "end": 183,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 188,
                        "end": 189,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 199,
                    "end": 213,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 199,
                      "end": 212,
                      "operator": "%=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 199,
                        "end": 207,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 199,
                          "end": 200,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 201,
                          "end": 207,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 211,
                        "end": 212,
                        "raw": "7",
                        "value": 7
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 222,
                    "end": 237,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 222,
                      "end": 236,
                      "operator": "<<=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 222,
                        "end": 230,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 223,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 224,
                          "end": 230,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 235,
                        "end": 236,
                        "raw": "8",
                        "value": 8
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 246,
                    "end": 261,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 246,
                      "end": 260,
                      "operator": ">>=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 246,
                        "end": 254,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 248,
                          "end": 254,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 259,
                        "end": 260,
                        "raw": "9",
                        "value": 9
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 270,
                    "end": 287,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 270,
                      "end": 286,
                      "operator": ">>>=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 270,
                        "end": 278,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 271,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 272,
                          "end": 278,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 284,
                        "end": 286,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 296,
                    "end": 311,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 296,
                      "end": 310,
                      "operator": "&=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 296,
                        "end": 304,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 296,
                          "end": 297,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 298,
                          "end": 304,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 308,
                        "end": 310,
                        "raw": "11",
                        "value": 11
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 320,
                    "end": 335,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 320,
                      "end": 334,
                      "operator": "|=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 320,
                        "end": 328,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 321,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 322,
                          "end": 328,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 332,
                        "end": 334,
                        "raw": "12",
                        "value": 12
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 344,
                    "end": 359,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 344,
                      "end": 358,
                      "operator": "^=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 344,
                        "end": 352,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 344,
                          "end": 345,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 346,
                          "end": 352,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 356,
                        "end": 358,
                        "raw": "13",
                        "value": 13
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 368,
                    "end": 392,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 368,
                      "end": 391,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 368,
                        "end": 387,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 368,
                          "end": 380,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 368,
                            "end": 378,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 368,
                              "end": 369,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 370,
                              "end": 378,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 381,
                          "end": 387,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 390,
                        "end": 391,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 401,
                    "end": 426,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 401,
                      "end": 425,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 401,
                        "end": 420,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 401,
                          "end": 413,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 401,
                            "end": 411,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 401,
                              "end": 402,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 403,
                              "end": 411,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 414,
                          "end": 420,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 424,
                        "end": 425,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 435,
                    "end": 460,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 435,
                      "end": 459,
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 435,
                        "end": 454,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 435,
                          "end": 447,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 435,
                            "end": 445,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 435,
                              "end": 436,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 437,
                              "end": 445,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 448,
                          "end": 454,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 458,
                        "end": 459,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 469,
                    "end": 494,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 469,
                      "end": 493,
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 469,
                        "end": 488,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 469,
                          "end": 481,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 469,
                            "end": 479,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 469,
                              "end": 470,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 471,
                              "end": 479,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 482,
                          "end": 488,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 492,
                        "end": 493,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 503,
                    "end": 528,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 503,
                      "end": 527,
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 503,
                        "end": 522,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 503,
                          "end": 515,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 503,
                            "end": 513,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 503,
                              "end": 504,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 505,
                              "end": 513,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 516,
                          "end": 522,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 526,
                        "end": 527,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 537,
                    "end": 563,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 537,
                      "end": 562,
                      "operator": "**=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 537,
                        "end": 556,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 537,
                          "end": 549,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 537,
                            "end": 547,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 537,
                              "end": 538,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 539,
                              "end": 547,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 550,
                          "end": 556,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 561,
                        "end": 562,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 572,
                    "end": 597,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 572,
                      "end": 596,
                      "operator": "%=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 572,
                        "end": 591,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 572,
                          "end": 584,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 572,
                            "end": 582,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 572,
                              "end": 573,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 574,
                              "end": 582,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 585,
                          "end": 591,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 595,
                        "end": 596,
                        "raw": "7",
                        "value": 7
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 606,
                    "end": 632,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 606,
                      "end": 631,
                      "operator": "<<=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 606,
                        "end": 625,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 606,
                          "end": 618,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 606,
                            "end": 616,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 606,
                              "end": 607,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 608,
                              "end": 616,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 619,
                          "end": 625,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 630,
                        "end": 631,
                        "raw": "8",
                        "value": 8
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 641,
                    "end": 667,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 641,
                      "end": 666,
                      "operator": ">>=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 641,
                        "end": 660,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 641,
                          "end": 653,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 641,
                            "end": 651,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 641,
                              "end": 642,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 643,
                              "end": 651,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 654,
                          "end": 660,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 665,
                        "end": 666,
                        "raw": "9",
                        "value": 9
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 676,
                    "end": 704,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 676,
                      "end": 703,
                      "operator": ">>>=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 676,
                        "end": 695,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 676,
                          "end": 688,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 676,
                            "end": 686,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 676,
                              "end": 677,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 678,
                              "end": 686,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 689,
                          "end": 695,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 701,
                        "end": 703,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 713,
                    "end": 739,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 713,
                      "end": 738,
                      "operator": "&=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 713,
                        "end": 732,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 713,
                          "end": 725,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 713,
                            "end": 723,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 713,
                              "end": 714,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 715,
                              "end": 723,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 726,
                          "end": 732,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 736,
                        "end": 738,
                        "raw": "11",
                        "value": 11
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 748,
                    "end": 774,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 748,
                      "end": 773,
                      "operator": "|=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 748,
                        "end": 767,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 748,
                          "end": 760,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 748,
                            "end": 758,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 748,
                              "end": 749,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 750,
                              "end": 758,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 761,
                          "end": 767,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 771,
                        "end": 773,
                        "raw": "12",
                        "value": 12
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 783,
                    "end": 809,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 783,
                      "end": 808,
                      "operator": "^=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 783,
                        "end": 802,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 783,
                          "end": 795,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 783,
                            "end": 793,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 783,
                              "end": 784,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 785,
                              "end": 793,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 796,
                          "end": 802,
                          "name": "field"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 806,
                        "end": 808,
                        "raw": "13",
                        "value": 13
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
            "start": 820,
            "end": 863,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 827,
              "end": 835,
              "decorators": [],
              "name": "getClass",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 835,
              "end": 863,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 838,
                "end": 863,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 848,
                    "end": 857,
                    "argument": {
                      "type": "Identifier",
                      "start": 855,
                      "end": 856,
                      "decorators": [],
                      "name": "A",
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
