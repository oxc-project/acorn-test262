__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    43
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
            "name": "x",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              8,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            12
          ],
          "loc": {
            "end": {
              "column": 12,
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
        13
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                19,
                28
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Boolean",
                  "optional": false,
                  "range": [
                    21,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 7,
                      "line": 2
                    }
                  }
                },
                "range": [
                  21,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              18,
              28
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            18,
            28
          ],
          "loc": {
            "end": {
              "column": 14,
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
        14,
        29
      ],
      "loc": {
        "end": {
          "column": 15,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            30,
            31
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            34,
            35
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "range": [
          30,
          35
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        30,
        36
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
          "name": "a",
          "optional": false,
          "range": [
            37,
            38
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            41,
            42
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
          37,
          42
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        37,
        43
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 6,
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
