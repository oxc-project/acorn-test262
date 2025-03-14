__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    130
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
            "name": "a",
            "optional": false,
            "range": [
              62,
              63
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                92,
                101
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 2
                },
                "start": {
                  "column": 36,
                  "line": 2
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              },
              "range": [
                68,
                88
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      70,
                      76
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 2
                      },
                      "start": {
                        "column": 14,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      79,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 2
                      },
                      "start": {
                        "column": 23,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  70,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              66,
              101
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          "range": [
            62,
            101
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        56,
        102
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "range": [
              124,
              126
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
              }
            }
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  105,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 3
                  },
                  "start": {
                    "column": 2,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "right": {
                "type": "LogicalExpression",
                "operator": "??",
                "left": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      109,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 3
                      },
                      "start": {
                        "column": 6,
                        "line": 3
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    109,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 3
                    },
                    "start": {
                      "column": 6,
                      "line": 3
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"d\"",
                  "value": "d",
                  "range": [
                    116,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  }
                },
                "range": [
                  109,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 3
                  },
                  "start": {
                    "column": 6,
                    "line": 3
                  }
                }
              },
              "range": [
                105,
                119
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            104,
            126
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 3
            },
            "start": {
              "column": 1,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          103,
          129
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        103,
        130
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 3
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
      "column": 27,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
