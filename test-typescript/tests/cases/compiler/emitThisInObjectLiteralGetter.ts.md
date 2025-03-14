__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    82
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
            "name": "example",
            "optional": false,
            "range": [
              6,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    26,
                    29
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
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
                    29,
                    78
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "item",
                                "optional": false,
                                "range": [
                                  66,
                                  70
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 3
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  57,
                                  61
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 3
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  62,
                                  65
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                57,
                                65
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 3
                                },
                                "start": {
                                  "column": 23,
                                  "line": 3
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              57,
                              71
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 3
                              },
                              "start": {
                                "column": 23,
                                "line": 3
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "range": [
                                49,
                                53
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 3
                                },
                                "start": {
                                  "column": 15,
                                  "line": 3
                                }
                              }
                            }
                          ],
                          "range": [
                            49,
                            71
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 3
                            },
                            "start": {
                              "column": 15,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          42,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
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
                      32,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
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
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "range": [
                  22,
                  78
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
              16,
              80
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          "range": [
            6,
            80
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
        81
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
