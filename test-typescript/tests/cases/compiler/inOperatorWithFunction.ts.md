__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    75
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
            "name": "fn",
            "optional": false,
            "range": [
              4,
              6
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "range": [
                      42,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 1
                      },
                      "start": {
                        "column": 42,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    35,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 1
                    },
                    "start": {
                      "column": 35,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                33,
                48
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 1
                    },
                    "start": {
                      "column": 22,
                      "line": 1
                    }
                  },
                  "range": [
                    22,
                    31
                  ],
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      24,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 1
                      },
                      "start": {
                        "column": 24,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  19,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              9,
              48
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            4,
            48
          ],
          "loc": {
            "end": {
              "column": 48,
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
      "kind": "var",
      "range": [
        0,
        48
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "BinaryExpression",
            "operator": "in",
            "left": {
              "type": "Literal",
              "raw": "\"a\"",
              "value": "a",
              "range": [
                52,
                55
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 3,
                  "line": 2
                }
              }
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      61,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 12,
                        "line": 2
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      66,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    61,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                59,
                72
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            "range": [
              52,
              72
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 3,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "range": [
            49,
            51
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          49,
          73
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        49,
        74
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 2
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
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
