__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    111
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "additional",
            "optional": false,
            "range": [
              4,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              17,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          },
          "range": [
            4,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        20
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "additional",
                "optional": false,
                "range": [
                  65,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "additional",
                      "optional": false,
                      "range": [
                        82,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 3
                        },
                        "start": {
                          "column": 21,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      79,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 3
                      },
                      "start": {
                        "column": 18,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "subcomponent",
                    "optional": false,
                    "range": [
                      94,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 3
                      },
                      "start": {
                        "column": 33,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  78,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              },
              "range": [
                65,
                107
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              65,
              108
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          59,
          110
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 38,
            "line": 2
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "subcomponent",
              "optional": false,
              "range": [
                32,
                44
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "init": null,
            "range": [
              32,
              44
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          26,
          44
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              49,
              50
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 28,
                "line": 2
              }
            }
          },
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              52,
              53
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 2
              },
              "start": {
                "column": 31,
                "line": 2
              }
            }
          },
          {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              55,
              56
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 2
              },
              "start": {
                "column": 34,
                "line": 2
              }
            }
          }
        ],
        "range": [
          48,
          57
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 2
          },
          "start": {
            "column": 27,
            "line": 2
          }
        }
      },
      "range": [
        21,
        110
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
