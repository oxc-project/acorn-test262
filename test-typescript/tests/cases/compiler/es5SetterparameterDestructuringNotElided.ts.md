__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    101
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    22,
                    25
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
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    25,
                    97
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "start",
                            "optional": false,
                            "range": [
                              67,
                              72
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 3
                              },
                              "start": {
                                "column": 13,
                                "line": 3
                              }
                            }
                          },
                          "operator": "void",
                          "prefix": true,
                          "range": [
                            62,
                            72
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 3
                            },
                            "start": {
                              "column": 8,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          62,
                          73
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "end",
                            "optional": false,
                            "range": [
                              87,
                              90
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 4
                              },
                              "start": {
                                "column": 13,
                                "line": 4
                              }
                            }
                          },
                          "operator": "void",
                          "prefix": true,
                          "range": [
                            82,
                            90
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          82,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      52,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 5
                      },
                      "start": {
                        "column": 38,
                        "line": 2
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "start",
                          "optional": false,
                          "range": [
                            27,
                            32
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 2
                            },
                            "start": {
                              "column": 13,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "end",
                          "optional": false,
                          "range": [
                            34,
                            37
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 2
                            },
                            "start": {
                              "column": 20,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 2
                          },
                          "start": {
                            "column": 24,
                            "line": 2
                          }
                        },
                        "range": [
                          38,
                          50
                        ],
                        "typeAnnotation": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSAnyKeyword",
                              "range": [
                                41,
                                44
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 2
                                },
                                "start": {
                                  "column": 27,
                                  "line": 2
                                }
                              }
                            },
                            {
                              "type": "TSAnyKeyword",
                              "range": [
                                46,
                                49
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 2
                                },
                                "start": {
                                  "column": 32,
                                  "line": 2
                                }
                              }
                            }
                          ],
                          "range": [
                            40,
                            50
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 2
                            },
                            "start": {
                              "column": 26,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        26,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 2
                        },
                        "start": {
                          "column": 12,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 5
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "range": [
                  18,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
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
              100
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            6,
            100
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
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
        101
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 6
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
      "column": 2,
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
