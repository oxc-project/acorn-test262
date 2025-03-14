__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    126
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "range": [
              39,
              43
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 39,
                "line": 1
              }
            }
          },
          "value": {
            "type": "Literal",
            "raw": "\"json\"",
            "value": "json",
            "range": [
              45,
              51
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 1
              },
              "start": {
                "column": 45,
                "line": 1
              }
            }
          },
          "range": [
            39,
            51
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 1
            },
            "start": {
              "column": 39,
              "line": 1
            }
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./data.json\"",
        "value": "./data.json",
        "range": [
          18,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            12
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "data1",
            "optional": false,
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
          },
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
      ],
      "range": [
        0,
        54
      ],
      "loc": {
        "end": {
          "column": 54,
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
            "name": "data2",
            "optional": false,
            "range": [
              61,
              66
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "ImportExpression",
              "options": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "with",
                      "optional": false,
                      "range": [
                        99,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 2
                        },
                        "start": {
                          "column": 44,
                          "line": 2
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "range": [
                              107,
                              111
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 2
                              },
                              "start": {
                                "column": 52,
                                "line": 2
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"json\"",
                            "value": "json",
                            "range": [
                              113,
                              119
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 2
                              },
                              "start": {
                                "column": 58,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            107,
                            119
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 2
                            },
                            "start": {
                              "column": 52,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "range": [
                        105,
                        121
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 2
                        },
                        "start": {
                          "column": 50,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      99,
                      121
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 2
                      },
                      "start": {
                        "column": 44,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  97,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 2
                  },
                  "start": {
                    "column": 42,
                    "line": 2
                  }
                }
              },
              "source": {
                "type": "Literal",
                "raw": "\"./data.json\"",
                "value": "./data.json",
                "range": [
                  82,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              },
              "range": [
                75,
                124
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            },
            "range": [
              69,
              124
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          "range": [
            61,
            124
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        55,
        125
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
