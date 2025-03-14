__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    93
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              },
              "range": [
                13,
                58
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          16,
                          22
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 1
                          },
                          "start": {
                            "column": 16,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          24,
                          30
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 1
                          },
                          "start": {
                            "column": 24,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      15,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 1
                      },
                      "start": {
                        "column": 15,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          35,
                          41
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 1
                          },
                          "start": {
                            "column": 35,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          43,
                          49
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 1
                          },
                          "start": {
                            "column": 43,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          51,
                          57
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 1
                          },
                          "start": {
                            "column": 51,
                            "line": 1
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
                        "column": 58,
                        "line": 1
                      },
                      "start": {
                        "column": 34,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  15,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              58
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            58
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        59
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSAsExpression",
        "expression": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                69,
                70
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                61,
                62
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 0,
                  "line": 3
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "slice",
              "optional": false,
              "range": [
                63,
                68
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            },
            "range": [
              61,
              68
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
          "optional": false,
          "range": [
            61,
            71
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "range": [
                84,
                90
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            },
            "range": [
              84,
              92
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
          "range": [
            75,
            92
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        },
        "range": [
          61,
          92
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        61,
        93
      ],
      "loc": {
        "end": {
          "column": 32,
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
      "column": 32,
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
