__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    202
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              },
              "range": [
                74,
                82
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  76,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              71,
              82
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            71,
            82
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        57,
        83
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
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                136,
                139
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            },
            "range": [
              136,
              140
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "range": [
          132,
          142
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                120,
                123
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            },
            "range": [
              120,
              124
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "range": [
          116,
          126
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 31,
            "line": 5
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              97,
              100
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            90,
            100
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 5
            },
            "start": {
              "column": 5,
              "line": 5
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"string\"",
          "value": "string",
          "range": [
            106,
            114
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 5
            }
          }
        },
        "range": [
          89,
          114
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 4,
            "line": 5
          }
        }
      },
      "range": [
        85,
        142
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                195,
                198
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
                }
              }
            },
            "range": [
              195,
              199
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          }
        ],
        "range": [
          191,
          201
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                179,
                182
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
                }
              }
            },
            "range": [
              179,
              183
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          }
        ],
        "range": [
          175,
          185
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 31,
            "line": 11
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              155,
              158
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            148,
            158
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"string\"",
          "value": "string",
          "range": [
            164,
            172
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 11
            },
            "start": {
              "column": 20,
              "line": 11
            }
          }
        },
        "range": [
          148,
          173
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 11
          },
          "start": {
            "column": 4,
            "line": 11
          }
        }
      },
      "range": [
        144,
        201
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
