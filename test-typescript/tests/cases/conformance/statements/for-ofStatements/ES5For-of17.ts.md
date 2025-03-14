__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    91
  ],
  "body": [
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
              "name": "v",
              "optional": false,
              "range": [
                24,
                25
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              24,
              26
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 2
              },
              "start": {
                "column": 4,
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          64,
                          65
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          68,
                          69
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 4
                          },
                          "start": {
                            "column": 16,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        64,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    60,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        79,
                        80
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      79,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    79,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                50,
                89
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 23,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      40,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 3
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    40,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                36,
                41
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    46,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                45,
                48
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "range": [
              31,
              89
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          18,
          91
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 18,
            "line": 1
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
              "name": "v",
              "optional": false,
              "range": [
                9,
                10
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              }
            },
            "init": null,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          5,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          14,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "range": [
        0,
        91
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
