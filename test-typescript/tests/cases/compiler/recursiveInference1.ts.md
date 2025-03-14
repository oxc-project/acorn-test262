__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    92
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          49,
                          50
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 1
                          },
                          "start": {
                            "column": 49,
                            "line": 1
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          53,
                          54
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 1
                          },
                          "start": {
                            "column": 53,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        49,
                        54
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 1
                        },
                        "start": {
                          "column": 49,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fib",
                    "optional": false,
                    "range": [
                      45,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 1
                      },
                      "start": {
                        "column": 45,
                        "line": 1
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    45,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 1
                    },
                    "start": {
                      "column": 45,
                      "line": 1
                    }
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          62,
                          63
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 1
                          },
                          "start": {
                            "column": 62,
                            "line": 1
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          66,
                          67
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 1
                          },
                          "start": {
                            "column": 66,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        62,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 1
                        },
                        "start": {
                          "column": 62,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fib",
                    "optional": false,
                    "range": [
                      58,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 1
                      },
                      "start": {
                        "column": 58,
                        "line": 1
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    58,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 1
                    },
                    "start": {
                      "column": 58,
                      "line": 1
                    }
                  }
                },
                "range": [
                  45,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 1
                  },
                  "start": {
                    "column": 45,
                    "line": 1
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  41,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 1
                  },
                  "start": {
                    "column": 41,
                    "line": 1
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "<=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    32,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 1
                    },
                    "start": {
                      "column": 32,
                      "line": 1
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    37,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
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
                  38
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 32,
                    "line": 1
                  }
                }
              },
              "range": [
                32,
                68
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            },
            "range": [
              25,
              69
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          }
        ],
        "range": [
          23,
          71
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 1
          },
          "start": {
            "column": 23,
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
        "name": "fib",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            },
            "range": [
              14,
              21
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                15,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
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
            13,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
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
        0,
        71
      ],
      "loc": {
        "end": {
          "column": 71,
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
            "name": "result",
            "optional": false,
            "range": [
              76,
              82
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "5",
                "value": 5,
                "range": [
                  89,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fib",
              "optional": false,
              "range": [
                85,
                88
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "optional": false,
            "range": [
              85,
              91
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          },
          "range": [
            76,
            91
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        72,
        92
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 20,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
