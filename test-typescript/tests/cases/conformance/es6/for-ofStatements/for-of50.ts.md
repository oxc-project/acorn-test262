__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    16,
    92
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
            "name": "map",
            "optional": false,
            "range": [
              20,
              23
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"\"",
                        "value": "",
                        "range": [
                          36,
                          38
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 2
                          },
                          "start": {
                            "column": 20,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          40,
                          44
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 2
                          },
                          "start": {
                            "column": 24,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      35,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  34,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "range": [
                30,
                33
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              26,
              47
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          "range": [
            20,
            47
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        16,
        48
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "range": [
                81,
                82
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              81,
              83
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "range": [
                88,
                89
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              88,
              90
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          75,
          92
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 26,
            "line": 3
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "range": [
                    61,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    64,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                60,
                66
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "init": null,
            "range": [
              60,
              66
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          54,
          66
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "range": [
          70,
          73
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 3
          }
        }
      },
      "range": [
        49,
        92
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
