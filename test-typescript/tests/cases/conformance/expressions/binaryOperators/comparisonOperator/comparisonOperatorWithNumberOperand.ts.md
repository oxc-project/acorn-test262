__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    16,
    76
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              },
              "range": [
                32,
                58
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      34,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        50,
                        58
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            51,
                            57
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 2
                            },
                            "start": {
                              "column": 35,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 2
                        },
                        "start": {
                          "column": 34,
                          "line": 2
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        43,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 2
                        },
                        "start": {
                          "column": 27,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      43,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 2
                      },
                      "start": {
                        "column": 27,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  34,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              30,
              58
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            30,
            58
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 2
            },
            "start": {
              "column": 14,
              "line": 2
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        16,
        58
      ],
      "loc": {
        "end": {
          "column": 42,
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
        "type": "BinaryExpression",
        "operator": ">=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "range": [
            59,
            61
          ],
          "loc": {
            "end": {
              "column": 2,
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
          "raw": "0",
          "value": 0,
          "range": [
            65,
            66
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
        "range": [
          59,
          66
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        59,
        66
      ],
      "loc": {
        "end": {
          "column": 7,
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
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
