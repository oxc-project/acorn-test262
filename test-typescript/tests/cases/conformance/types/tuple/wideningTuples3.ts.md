__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    45
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              },
              "range": [
                5,
                12
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      8,
                      11
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 1
                      },
                      "start": {
                        "column": 8,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  7,
                  12
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 1
                  },
                  "start": {
                    "column": 7,
                    "line": 1
                  }
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
          },
          "init": null,
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
            "name": "b",
            "optional": false,
            "range": [
              19,
              20
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
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                23,
                24
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 8,
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
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    28,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    39,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                27,
                44
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "range": [
              23,
              44
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            19,
            44
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        15,
        45
      ],
      "loc": {
        "end": {
          "column": 30,
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
      "column": 30,
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
