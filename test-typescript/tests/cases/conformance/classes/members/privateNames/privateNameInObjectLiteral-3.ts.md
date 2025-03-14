__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    58
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
            "name": "obj",
            "optional": false,
            "range": [
              6,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 6,
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
                  "type": "PrivateIdentifier",
                  "name": "foo",
                  "range": [
                    22,
                    26
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
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
                    26,
                    54
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "\"\"",
                          "value": "",
                          "range": [
                            46,
                            48
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 3
                            },
                            "start": {
                              "column": 15,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          39,
                          48
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
                      }
                    ],
                    "range": [
                      29,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 2
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
                      "column": 5,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  18,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              12,
              56
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            6,
            56
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        57
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 5
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
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
