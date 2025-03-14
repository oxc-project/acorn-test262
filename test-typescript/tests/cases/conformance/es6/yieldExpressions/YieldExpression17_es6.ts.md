__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    36
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
            "name": "v",
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
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    14,
                    17
                  ],
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
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    17,
                    34
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              28,
                              31
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 1
                              },
                              "start": {
                                "column": 28,
                                "line": 1
                              }
                            }
                          },
                          "delegate": false,
                          "range": [
                            22,
                            31
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 1
                            },
                            "start": {
                              "column": 22,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          22,
                          32
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 1
                          },
                          "start": {
                            "column": 22,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      20,
                      34
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 1
                      },
                      "start": {
                        "column": 20,
                        "line": 1
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 1
                    },
                    "start": {
                      "column": 17,
                      "line": 1
                    }
                  }
                },
                "range": [
                  10,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 1
                  },
                  "start": {
                    "column": 10,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              8,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
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
            36
          ],
          "loc": {
            "end": {
              "column": 36,
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
        36
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 1
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
      "column": 36,
      "line": 1
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
