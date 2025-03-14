__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    50
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
            "type": "TSTypeAssertion",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
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
                          32,
                          35
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 1
                          },
                          "start": {
                            "column": 32,
                            "line": 1
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"s\"",
                        "value": "s",
                        "range": [
                          37,
                          40
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 1
                          },
                          "start": {
                            "column": 37,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        32,
                        40
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 1
                        },
                        "start": {
                          "column": 32,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    30,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 1
                    },
                    "start": {
                      "column": 30,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    44,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 1
                    },
                    "start": {
                      "column": 44,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                29,
                49
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "range": [
                        13,
                        15
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 1
                        },
                        "start": {
                          "column": 13,
                          "line": 1
                        }
                      }
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 1
                        },
                        "start": {
                          "column": 15,
                          "line": 1
                        }
                      },
                      "range": [
                        15,
                        23
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          17,
                          23
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 1
                          },
                          "start": {
                            "column": 17,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      13,
                      24
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 1
                      },
                      "start": {
                        "column": 13,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  11,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 1
                  },
                  "start": {
                    "column": 11,
                    "line": 1
                  }
                }
              },
              "range": [
                11,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "range": [
              10,
              49
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            4,
            49
          ],
          "loc": {
            "end": {
              "column": 49,
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
        50
      ],
      "loc": {
        "end": {
          "column": 50,
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
      "column": 50,
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
