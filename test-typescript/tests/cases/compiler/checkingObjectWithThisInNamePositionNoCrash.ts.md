__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    174
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        174
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
              "name": "thing",
              "optional": false,
              "range": [
                13,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 13,
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
                    "name": "doit",
                    "optional": false,
                    "range": [
                      27,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 2
                      },
                      "start": {
                        "column": 4,
                        "line": 2
                      }
                    }
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      31,
                      172
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": true,
                                "key": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      66,
                                      70
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "range": [
                                      71,
                                      72
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "range": [
                                    66,
                                    72
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 4
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "\"\"",
                                  "value": "",
                                  "range": [
                                    75,
                                    77
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  65,
                                  77
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "range": [
                              51,
                              166
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 5
                              },
                              "start": {
                                "column": 15,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            44,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        34,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
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
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    27,
                    172
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                21,
                174
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              174
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          174
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
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
          "column": 1,
          "line": 7
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
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
