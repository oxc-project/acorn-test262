__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    65
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          15,
          18
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
          },
          "start": {
            "column": 15,
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
        "name": "foo",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "range": [
        0,
        18
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        19,
        44
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                },
                "range": [
                  31,
                  43
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      40,
                      43
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
                    33,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 3
                    },
                    "start": {
                      "column": 14,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                30,
                43
              ],
              "loc": {
                "end": {
                  "column": 24,
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
              30,
              43
            ],
            "loc": {
              "end": {
                "column": 24,
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
        "kind": "var",
        "range": [
          26,
          44
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 25,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        45,
        64
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
              "name": "b",
              "optional": false,
              "range": [
                56,
                57
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                60,
                63
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              56,
              63
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          52,
          64
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 19,
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
