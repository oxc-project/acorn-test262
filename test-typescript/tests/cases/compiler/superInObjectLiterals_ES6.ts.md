superInObjectLiterals_ES6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1042,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 385,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 385,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 63,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 25,
                  "decorators": [],
                  "name": "__proto__",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 27,
                  "end": 63,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 37,
                      "end": 57,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 43,
                        "decorators": [],
                        "name": "method",
                        "optional": false
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 43,
                        "end": 57,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 46,
                          "end": 57,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 69,
                "end": 109,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 75,
                  "decorators": [],
                  "name": "method",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 75,
                  "end": 109,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 78,
                    "end": 109,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 88,
                        "end": 103,
                        "expression": {
                          "type": "CallExpression",
                          "start": 88,
                          "end": 102,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 88,
                            "end": 100,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 88,
                              "end": 93
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 94,
                              "end": 100,
                              "decorators": [],
                              "name": "method",
                              "optional": false
                            }
                          },
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
              },
              {
                "type": "Property",
                "start": 115,
                "end": 176,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 123,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 123,
                  "end": 176,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 126,
                    "end": 176,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 136,
                        "end": 151,
                        "expression": {
                          "type": "CallExpression",
                          "start": 136,
                          "end": 150,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 136,
                            "end": 148,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 136,
                              "end": 141
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 148,
                              "decorators": [],
                              "name": "method",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 160,
                        "end": 170,
                        "argument": {
                          "type": "Literal",
                          "start": 167,
                          "end": 169,
                          "raw": "10",
                          "value": 10
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
                "type": "Property",
                "start": 182,
                "end": 229,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 190,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 190,
                  "end": 229,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 198,
                    "end": 229,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 208,
                        "end": 223,
                        "expression": {
                          "type": "CallExpression",
                          "start": 208,
                          "end": 222,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 208,
                            "end": 220,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 208,
                              "end": 213
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 214,
                              "end": 220,
                              "decorators": [],
                              "name": "method",
                              "optional": false
                            }
                          },
                          "optional": false
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
                      "start": 191,
                      "end": 196,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 235,
                "end": 282,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 237,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 239,
                  "end": 282,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 251,
                    "end": 282,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 261,
                        "end": 276,
                        "expression": {
                          "type": "CallExpression",
                          "start": 261,
                          "end": 275,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 261,
                            "end": 273,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 261,
                              "end": 266
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 267,
                              "end": 273,
                              "decorators": [],
                              "name": "method",
                              "optional": false
                            }
                          },
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
              },
              {
                "type": "Property",
                "start": 288,
                "end": 336,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 290,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 292,
                  "end": 336,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 305,
                    "end": 336,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 315,
                        "end": 330,
                        "expression": {
                          "type": "CallExpression",
                          "start": 315,
                          "end": 329,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 315,
                            "end": 327,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 315,
                              "end": 320
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 321,
                              "end": 327,
                              "decorators": [],
                              "name": "method",
                              "optional": false
                            }
                          },
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
                    "start": 301,
                    "end": 302,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 342,
                "end": 383,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 344,
                  "decorators": [],
                  "name": "p3",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 346,
                  "end": 383,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 352,
                    "end": 383,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 362,
                        "end": 377,
                        "expression": {
                          "type": "CallExpression",
                          "start": 362,
                          "end": 376,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 362,
                            "end": 374,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 362,
                              "end": 367
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 368,
                              "end": 374,
                              "decorators": [],
                              "name": "method",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 388,
      "end": 416,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 396,
        "end": 416,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 402,
            "end": 414,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 402,
              "end": 408,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 408,
              "end": 414,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 411,
                "end": 414,
                "body": []
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
        "start": 394,
        "end": 395,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 418,
      "end": 1042,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 436,
        "end": 1042,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 442,
            "end": 1040,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 443,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 443,
              "end": 1040,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 446,
                "end": 1040,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 456,
                    "end": 1034,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 460,
                        "end": 1033,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 460,
                          "end": 463,
                          "decorators": [],
                          "name": "obj",
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 466,
                          "end": 1033,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 480,
                              "end": 551,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 480,
                                "end": 489,
                                "decorators": [],
                                "name": "__proto__",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ObjectExpression",
                                "start": 491,
                                "end": 551,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 509,
                                    "end": 537,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 509,
                                      "end": 515,
                                      "decorators": [],
                                      "name": "method",
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "method": true,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "start": 515,
                                      "end": 537,
                                      "async": false,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 518,
                                        "end": 537,
                                        "body": []
                                      },
                                      "declare": false,
                                      "expression": false,
                                      "generator": false,
                                      "id": null,
                                      "params": []
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "Property",
                              "start": 565,
                              "end": 621,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 565,
                                "end": 571,
                                "decorators": [],
                                "name": "method",
                                "optional": false
                              },
                              "kind": "init",
                              "method": true,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 571,
                                "end": 621,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 574,
                                  "end": 621,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 592,
                                      "end": 607,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 592,
                                        "end": 606,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 592,
                                          "end": 604,
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "start": 592,
                                            "end": 597
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 598,
                                            "end": 604,
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false
                                          }
                                        },
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
                            },
                            {
                              "type": "Property",
                              "start": 635,
                              "end": 720,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 639,
                                "end": 643,
                                "decorators": [],
                                "name": "prop",
                                "optional": false
                              },
                              "kind": "get",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 643,
                                "end": 720,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 646,
                                  "end": 720,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 664,
                                      "end": 679,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 664,
                                        "end": 678,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 664,
                                          "end": 676,
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "start": 664,
                                            "end": 669
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 670,
                                            "end": 676,
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false
                                          }
                                        },
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 696,
                                      "end": 706,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 703,
                                        "end": 705,
                                        "raw": "10",
                                        "value": 10
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
                              "type": "Property",
                              "start": 734,
                              "end": 797,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 738,
                                "end": 742,
                                "decorators": [],
                                "name": "prop",
                                "optional": false
                              },
                              "kind": "set",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 742,
                                "end": 797,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 750,
                                  "end": 797,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 768,
                                      "end": 783,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 768,
                                        "end": 782,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 768,
                                          "end": 780,
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "start": 768,
                                            "end": 773
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 774,
                                            "end": 780,
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false
                                          }
                                        },
                                        "optional": false
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
                                    "start": 743,
                                    "end": 748,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false
                                  }
                                ]
                              }
                            },
                            {
                              "type": "Property",
                              "start": 811,
                              "end": 874,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 811,
                                "end": 813,
                                "decorators": [],
                                "name": "p1",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 815,
                                "end": 874,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 827,
                                  "end": 874,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 845,
                                      "end": 860,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 845,
                                        "end": 859,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 845,
                                          "end": 857,
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "start": 845,
                                            "end": 850
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 851,
                                            "end": 857,
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false
                                          }
                                        },
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
                            },
                            {
                              "type": "Property",
                              "start": 888,
                              "end": 952,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 888,
                                "end": 890,
                                "decorators": [],
                                "name": "p2",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 892,
                                "end": 952,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 905,
                                  "end": 952,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 923,
                                      "end": 938,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 923,
                                        "end": 937,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 923,
                                          "end": 935,
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "start": 923,
                                            "end": 928
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 929,
                                            "end": 935,
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false
                                          }
                                        },
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
                                  "start": 901,
                                  "end": 902,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false
                                },
                                "params": []
                              }
                            },
                            {
                              "type": "Property",
                              "start": 966,
                              "end": 1023,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 966,
                                "end": 968,
                                "decorators": [],
                                "name": "p3",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 970,
                                "end": 1023,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 976,
                                  "end": 1023,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 994,
                                      "end": 1009,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 994,
                                        "end": 1008,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 994,
                                          "end": 1006,
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "start": 994,
                                            "end": 999
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1000,
                                            "end": 1006,
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false
                                          }
                                        },
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": []
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
        "start": 424,
        "end": 425,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 434,
        "end": 435,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
