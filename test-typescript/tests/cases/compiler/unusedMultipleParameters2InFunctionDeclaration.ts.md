__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    120
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
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
                  "name": "unused",
                  "optional": false,
                  "range": [
                    77,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "20",
                  "value": 20,
                  "range": [
                    86,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                },
                "range": [
                  77,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              73,
              89
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "person2",
                "optional": false,
                "range": [
                  94,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"dummy value\"",
                "value": "dummy value",
                "range": [
                  104,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 14,
                    "line": 3
                  }
                }
              },
              "range": [
                94,
                117
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              94,
              118
            ],
            "loc": {
              "end": {
                "column": 28,
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
          67,
          120
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 67,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "range": [
          9,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            },
            "range": [
              23,
              31
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                25,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            }
          },
          "range": [
            17,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 1
              },
              "start": {
                "column": 40,
                "line": 1
              }
            },
            "range": [
              40,
              48
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                42,
                48
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 1
                },
                "start": {
                  "column": 42,
                  "line": 1
                }
              }
            }
          },
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
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 1
              },
              "start": {
                "column": 57,
                "line": 1
              }
            },
            "range": [
              57,
              65
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                59,
                65
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 1
                },
                "start": {
                  "column": 59,
                  "line": 1
                }
              }
            }
          },
          "range": [
            50,
            65
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 1
            },
            "start": {
              "column": 50,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        120
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
