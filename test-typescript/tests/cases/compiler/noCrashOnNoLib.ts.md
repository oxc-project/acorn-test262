__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    91
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        91
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
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
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 2
                        },
                        "start": {
                          "column": 9,
                          "line": 2
                        }
                      },
                      "range": [
                        31,
                        37
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "range": [
                            33,
                            35
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 2
                            },
                            "start": {
                              "column": 11,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          33,
                          37
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 2
                          },
                          "start": {
                            "column": 11,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      30,
                      37
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 8,
                        "line": 2
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    30,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                26,
                38
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            {
              "type": "WhileStatement",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "range": [
                          64,
                          65
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 4
                          },
                          "start": {
                            "column": 6,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "SpreadElement",
                            "argument": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "range": [
                                  73,
                                  74
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 4
                                  }
                                }
                              },
                              "right": {
                                "type": "ArrayExpression",
                                "elements": [],
                                "range": [
                                  78,
                                  80
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                73,
                                80
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 4
                                },
                                "start": {
                                  "column": 15,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              69,
                              81
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 4
                              },
                              "start": {
                                "column": 11,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "range": [
                          68,
                          82
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 4
                          },
                          "start": {
                            "column": 10,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        64,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 4
                        },
                        "start": {
                          "column": 6,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      64,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 6,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  56,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              },
              "test": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  50,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              },
              "range": [
                43,
                89
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            20,
            91
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
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
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            16,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [],
        "range": [
          7,
          91
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
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
      "column": 1,
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
