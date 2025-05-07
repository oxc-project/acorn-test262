__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1267,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 452,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 4,
          "end": 35,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 10,
              "end": 35,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 10,
                "end": 14,
                "decorators": [],
                "name": "perf",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "MemberExpression",
                "start": 17,
                "end": 35,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 23,
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 35,
                  "decorators": [],
                  "name": "performance",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "IfStatement",
          "start": 55,
          "end": 220,
          "alternate": null,
          "consequent": {
            "type": "BlockStatement",
            "start": 142,
            "end": 220,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 148,
                "end": 165,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 148,
                  "end": 164,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 161,
                      "end": 163,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 148,
                    "end": 160,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 152,
                      "decorators": [],
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 160,
                      "decorators": [],
                      "name": "measure",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 170,
                "end": 189,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 170,
                  "end": 189,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 186,
                      "end": 188,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 170,
                    "end": 185,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 174,
                      "decorators": [],
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 185,
                      "decorators": [],
                      "name": "clearMarks",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 194,
                "end": 216,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 194,
                  "end": 216,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 213,
                      "end": 215,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 194,
                    "end": 212,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 198,
                      "decorators": [],
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 212,
                      "decorators": [],
                      "name": "clearMeasures",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          },
          "test": {
            "type": "LogicalExpression",
            "start": 64,
            "end": 137,
            "operator": "&&",
            "left": {
              "type": "LogicalExpression",
              "start": 64,
              "end": 111,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 64,
                "end": 88,
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 68,
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 76,
                  "end": 88,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 80,
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 88,
                    "decorators": [],
                    "name": "measure",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 96,
                "end": 111,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 100,
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 111,
                  "decorators": [],
                  "name": "clearMarks",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 119,
              "end": 137,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 119,
                "end": 123,
                "decorators": [],
                "name": "perf",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 124,
                "end": 137,
                "decorators": [],
                "name": "clearMeasures",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "IfStatement",
          "start": 237,
          "end": 326,
          "alternate": null,
          "consequent": {
            "type": "BlockStatement",
            "start": 302,
            "end": 326,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 308,
                "end": 322,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 308,
                  "end": 321,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 318,
                      "end": 320,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 308,
                    "end": 317,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 312,
                      "decorators": [],
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 317,
                      "decorators": [],
                      "name": "mark",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          },
          "test": {
            "type": "LogicalExpression",
            "start": 246,
            "end": 297,
            "operator": "||",
            "left": {
              "type": "LogicalExpression",
              "start": 246,
              "end": 287,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 246,
                "end": 267,
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 250,
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 258,
                  "end": 267,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 262,
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 267,
                    "decorators": [],
                    "name": "mark",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 275,
                "end": 287,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 279,
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 287,
                  "decorators": [],
                  "name": "measure",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "UnaryExpression",
              "start": 291,
              "end": 297,
              "argument": {
                "type": "UnaryExpression",
                "start": 292,
                "end": 297,
                "argument": {
                  "type": "Literal",
                  "start": 293,
                  "end": 297,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          }
        },
        {
          "type": "IfStatement",
          "start": 343,
          "end": 450,
          "alternate": null,
          "consequent": {
            "type": "BlockStatement",
            "start": 426,
            "end": 450,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 432,
                "end": 446,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 432,
                  "end": 445,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 442,
                      "end": 444,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 432,
                    "end": 441,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 432,
                      "end": 436,
                      "decorators": [],
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 437,
                      "end": 441,
                      "decorators": [],
                      "name": "mark",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          },
          "test": {
            "type": "LogicalExpression",
            "start": 352,
            "end": 421,
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "start": 360,
              "end": 405,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 360,
                "end": 383,
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 364,
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 374,
                  "end": 383,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 378,
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 383,
                    "decorators": [],
                    "name": "mark",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 393,
                "end": 405,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 397,
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 405,
                  "decorators": [],
                  "name": "measure",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "UnaryExpression",
              "start": 415,
              "end": 421,
              "argument": {
                "type": "UnaryExpression",
                "start": 416,
                "end": 421,
                "argument": {
                  "type": "Literal",
                  "start": 417,
                  "end": 421,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          }
        }
      ]
    },
    {
      "type": "EmptyStatement",
      "start": 452,
      "end": 453
    },
    {
      "type": "VariableDeclaration",
      "start": 474,
      "end": 505,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 504,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 504,
            "decorators": [],
            "name": "inBrowser",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 495,
              "end": 504,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 497,
                "end": 504
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "BlockStatement",
      "start": 506,
      "end": 946,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 510,
          "end": 519,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 514,
              "end": 518,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 514,
                "end": 518,
                "decorators": [],
                "name": "mark",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "let"
        },
        {
          "type": "VariableDeclaration",
          "start": 522,
          "end": 534,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 526,
              "end": 533,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 526,
                "end": 533,
                "decorators": [],
                "name": "measure",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "let"
        },
        {
          "type": "VariableDeclaration",
          "start": 537,
          "end": 581,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 543,
              "end": 581,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 543,
                "end": 547,
                "decorators": [],
                "name": "perf",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "LogicalExpression",
                "start": 550,
                "end": 581,
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "start": 550,
                  "end": 559,
                  "decorators": [],
                  "name": "inBrowser",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 563,
                  "end": 581,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 563,
                    "end": 569,
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 581,
                    "decorators": [],
                    "name": "performance",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "IfStatement",
          "start": 611,
          "end": 944,
          "alternate": null,
          "consequent": {
            "type": "BlockStatement",
            "start": 715,
            "end": 944,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 721,
                "end": 751,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 721,
                  "end": 751,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 721,
                    "end": 725,
                    "decorators": [],
                    "name": "mark",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 728,
                    "end": 751,
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "start": 737,
                      "end": 751,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 747,
                          "end": 750,
                          "decorators": [],
                          "name": "tag",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 737,
                        "end": 746,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 737,
                          "end": 741,
                          "decorators": [],
                          "name": "perf",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 742,
                          "end": 746,
                          "decorators": [],
                          "name": "mark",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 729,
                        "end": 732,
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 756,
                "end": 940,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 756,
                  "end": 940,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 756,
                    "end": 763,
                    "decorators": [],
                    "name": "measure",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 766,
                    "end": 940,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 794,
                      "end": 940,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 802,
                          "end": 838,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 802,
                            "end": 838,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 815,
                                "end": 819,
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 821,
                                "end": 829,
                                "decorators": [],
                                "name": "startTag",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 831,
                                "end": 837,
                                "decorators": [],
                                "name": "endTag",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 802,
                              "end": 814,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 802,
                                "end": 806,
                                "decorators": [],
                                "name": "perf",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 807,
                                "end": 814,
                                "decorators": [],
                                "name": "measure",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 845,
                          "end": 870,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 845,
                            "end": 870,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 861,
                                "end": 869,
                                "decorators": [],
                                "name": "startTag",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 845,
                              "end": 860,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 845,
                                "end": 849,
                                "decorators": [],
                                "name": "perf",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 850,
                                "end": 860,
                                "decorators": [],
                                "name": "clearMarks",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 877,
                          "end": 900,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 877,
                            "end": 900,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 893,
                                "end": 899,
                                "decorators": [],
                                "name": "endTag",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 877,
                              "end": 892,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 877,
                                "end": 881,
                                "decorators": [],
                                "name": "perf",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 882,
                                "end": 892,
                                "decorators": [],
                                "name": "clearMarks",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 767,
                        "end": 771,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 773,
                        "end": 781,
                        "decorators": [],
                        "name": "startTag",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 783,
                        "end": 789,
                        "decorators": [],
                        "name": "endTag",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              }
            ]
          },
          "test": {
            "type": "LogicalExpression",
            "start": 620,
            "end": 710,
            "operator": "&&",
            "left": {
              "type": "LogicalExpression",
              "start": 620,
              "end": 684,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 620,
                "end": 661,
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "start": 620,
                  "end": 641,
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "start": 620,
                    "end": 624,
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 632,
                    "end": 641,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 632,
                      "end": 636,
                      "decorators": [],
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 637,
                      "end": 641,
                      "decorators": [],
                      "name": "mark",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 649,
                  "end": 661,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 649,
                    "end": 653,
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 654,
                    "end": 661,
                    "decorators": [],
                    "name": "measure",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 669,
                "end": 684,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 673,
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 674,
                  "end": 684,
                  "decorators": [],
                  "name": "clearMarks",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 692,
              "end": 710,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 692,
                "end": 696,
                "decorators": [],
                "name": "perf",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 697,
                "end": 710,
                "decorators": [],
                "name": "clearMeasures",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ]
    },
    {
      "type": "EmptyStatement",
      "start": 946,
      "end": 947
    },
    {
      "type": "VariableDeclaration",
      "start": 949,
      "end": 972,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 953,
          "end": 971,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 953,
            "end": 971,
            "decorators": [],
            "name": "_isMobile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 962,
              "end": 971,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 964,
                "end": 971
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
      "start": 973,
      "end": 1267,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 993,
        "end": 1267,
        "body": [
          {
            "type": "IfStatement",
            "start": 997,
            "end": 1245,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1026,
              "end": 1245,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1032,
                  "end": 1185,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1038,
                      "end": 1184,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1038,
                        "end": 1051,
                        "decorators": [],
                        "name": "isMobileMatch",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "LogicalExpression",
                        "start": 1060,
                        "end": 1184,
                        "operator": "&&",
                        "left": {
                          "type": "LogicalExpression",
                          "start": 1060,
                          "end": 1116,
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 1060,
                            "end": 1089,
                            "operator": "!==",
                            "left": {
                              "type": "UnaryExpression",
                              "start": 1060,
                              "end": 1073,
                              "argument": {
                                "type": "Identifier",
                                "start": 1067,
                                "end": 1073,
                                "decorators": [],
                                "name": "window",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "typeof",
                              "prefix": true
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1078,
                              "end": 1089,
                              "raw": "'undefined'",
                              "value": "undefined",
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "start": 1099,
                            "end": 1116,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1099,
                              "end": 1105,
                              "decorators": [],
                              "name": "window",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1106,
                              "end": 1116,
                              "decorators": [],
                              "name": "matchMedia",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 1138,
                          "end": 1184,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 1156,
                              "end": 1183,
                              "raw": "'(max-device-width: 680px)'",
                              "value": "(max-device-width: 680px)",
                              "regex": null,
                              "bigint": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1138,
                            "end": 1155,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1138,
                              "end": 1144,
                              "decorators": [],
                              "name": "window",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1145,
                              "end": 1155,
                              "decorators": [],
                              "name": "matchMedia",
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
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1190,
                  "end": 1241,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1190,
                    "end": 1240,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1190,
                      "end": 1199,
                      "decorators": [],
                      "name": "_isMobile",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "start": 1202,
                      "end": 1240,
                      "operator": "&&",
                      "left": {
                        "type": "Identifier",
                        "start": 1202,
                        "end": 1215,
                        "decorators": [],
                        "name": "isMobileMatch",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 1219,
                        "end": 1240,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1219,
                          "end": 1232,
                          "decorators": [],
                          "name": "isMobileMatch",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1233,
                          "end": 1240,
                          "decorators": [],
                          "name": "matches",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1001,
              "end": 1024,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1001,
                "end": 1010,
                "decorators": [],
                "name": "_isMobile",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1015,
                "end": 1024,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1248,
            "end": 1265,
            "argument": {
              "type": "Identifier",
              "start": 1255,
              "end": 1264,
              "decorators": [],
              "name": "_isMobile",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 982,
        "end": 990,
        "decorators": [],
        "name": "isMobile",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
