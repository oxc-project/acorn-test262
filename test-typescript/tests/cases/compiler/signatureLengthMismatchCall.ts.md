__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    107
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          48,
          60
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 48,
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
        "name": "takesCallback",
        "optional": false,
        "range": [
          9,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
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
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            },
            "range": [
              25,
              46
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
                        "column": 37,
                        "line": 1
                      },
                      "start": {
                        "column": 29,
                        "line": 1
                      }
                    },
                    "range": [
                      29,
                      37
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        31,
                        37
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 1
                        },
                        "start": {
                          "column": 31,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    28,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 1
                    },
                    "start": {
                      "column": 28,
                      "line": 1
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 1
                  },
                  "start": {
                    "column": 39,
                    "line": 1
                  }
                },
                "range": [
                  39,
                  46
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    42,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 1
                    },
                    "start": {
                      "column": 42,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                27,
                46
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            }
          },
          "range": [
            23,
            46
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        60
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                102,
                104
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 40,
                  "line": 5
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
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  },
                  "range": [
                    78,
                    86
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      80,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 5
                      },
                      "start": {
                        "column": 18,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  77,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 5
                    },
                    "start": {
                      "column": 27,
                      "line": 5
                    }
                  },
                  "range": [
                    89,
                    97
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      91,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 5
                      },
                      "start": {
                        "column": 29,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  88,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 5
                  },
                  "start": {
                    "column": 26,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              76,
              104
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takesCallback",
          "optional": false,
          "range": [
            62,
            75
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          62,
          105
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        62,
        106
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
