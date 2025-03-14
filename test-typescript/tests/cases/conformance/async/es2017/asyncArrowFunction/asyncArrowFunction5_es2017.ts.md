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
            "name": "foo",
            "optional": false,
            "range": [
              4,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                42,
                45
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 2
                },
                "start": {
                  "column": 42,
                  "line": 1
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "await",
                "optional": false,
                "range": [
                  17,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              },
              "range": [
                23,
                38
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    32,
                    38
                  ],
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "range": [
                        33,
                        37
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 1
                        },
                        "start": {
                          "column": 33,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 1
                    },
                    "start": {
                      "column": 32,
                      "line": 1
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    25,
                    32
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 1
                    },
                    "start": {
                      "column": 25,
                      "line": 1
                    }
                  }
                },
                "range": [
                  25,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 38,
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
              10,
              45
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            4,
            45
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 2
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
        45
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
