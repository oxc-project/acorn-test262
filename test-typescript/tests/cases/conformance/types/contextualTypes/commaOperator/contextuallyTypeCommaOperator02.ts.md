__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    90
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
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              },
              "range": [
                5,
                28
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 1
                        },
                        "start": {
                          "column": 9,
                          "line": 1
                        }
                      },
                      "range": [
                        9,
                        17
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          11,
                          17
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 1
                          },
                          "start": {
                            "column": 11,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      8,
                      17
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 1
                      },
                      "start": {
                        "column": 8,
                        "line": 1
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 1
                    },
                    "start": {
                      "column": 19,
                      "line": 1
                    }
                  },
                  "range": [
                    19,
                    28
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      22,
                      28
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 1
                      },
                      "start": {
                        "column": 22,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  7,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 7,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
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
      "kind": "let",
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 29,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            31,
            32
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
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "raw": "100",
              "value": 100,
              "range": [
                36,
                39
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              }
            },
            {
              "type": "ArrowFunctionExpression",
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 4
                              },
                              "start": {
                                "column": 11,
                                "line": 4
                              }
                            },
                            "range": [
                              59,
                              67
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                61,
                                67
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
                            }
                          },
                          "range": [
                            58,
                            67
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 4
                            },
                            "start": {
                              "column": 10,
                              "line": 4
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            70,
                            71
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 4
                            },
                            "start": {
                              "column": 22,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          58,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 4
                          },
                          "start": {
                            "column": 10,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      52,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 4,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        84,
                        85
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 5
                        },
                        "start": {
                          "column": 11,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      77,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 5
                      },
                      "start": {
                        "column": 4,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  46,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    41,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                41,
                88
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            36,
            88
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 5,
              "line": 3
            }
          }
        },
        "range": [
          31,
          89
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        31,
        90
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 6
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
      "column": 3,
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
