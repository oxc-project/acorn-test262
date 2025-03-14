__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    78
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
                  "name": "bar",
                  "optional": false,
                  "range": [
                    44,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 5
                    },
                    "start": {
                      "column": 5,
                      "line": 5
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
                    47,
                    75
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "12",
                          "value": 12,
                          "range": [
                            69,
                            71
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 6
                            },
                            "start": {
                              "column": 9,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          62,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
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
                      58,
                      75
                    ],
                    "loc": {
                      "end": {
                        "column": 2,
                        "line": 7
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 10,
                        "line": 5
                      }
                    },
                    "range": [
                      49,
                      57
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        51,
                        57
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 12,
                          "line": 5
                        }
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "range": [
                  40,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 7
                  },
                  "start": {
                    "column": 1,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              8,
              77
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            77
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
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
        77
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
