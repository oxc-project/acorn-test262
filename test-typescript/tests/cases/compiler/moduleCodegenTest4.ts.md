__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    73
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        45
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                20,
                43
              ],
              "attributes": [],
              "declaration": {
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
                        31,
                        32
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 1
                        },
                        "start": {
                          "column": 31,
                          "line": 1
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        35,
                        42
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 1
                        },
                        "start": {
                          "column": 35,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      31,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 1
                      },
                      "start": {
                        "column": 31,
                        "line": 1
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  27,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 1
                  },
                  "start": {
                    "column": 27,
                    "line": 1
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            18,
            45
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            14,
            17
          ],
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        "kind": "module",
        "range": [
          7,
          45
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 45,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "range": [
              47,
              50
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 3
              },
              "start": {
                "column": 0,
                "line": 3
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              51,
              52
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
            47,
            52
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
        "right": {
          "type": "Literal",
          "raw": "\"goodbye\"",
          "value": "goodbye",
          "range": [
            55,
            64
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 8,
              "line": 3
            }
          }
        },
        "range": [
          47,
          64
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        47,
        65
      ],
      "loc": {
        "end": {
          "column": 18,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            71,
            72
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 4
            },
            "start": {
              "column": 5,
              "line": 4
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          66,
          72
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
      },
      "range": [
        66,
        73
      ],
      "loc": {
        "end": {
          "column": 7,
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
      "column": 7,
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
