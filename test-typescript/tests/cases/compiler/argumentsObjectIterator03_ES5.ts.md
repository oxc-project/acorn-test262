__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    149
  ],
  "body": [
    {
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        97,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 2
                        },
                        "start": {
                          "column": 9,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        100,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 2
                        },
                        "start": {
                          "column": 12,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "range": [
                        103,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 2
                        },
                        "start": {
                          "column": 15,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    96,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "range": [
                    108,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  }
                },
                "range": [
                  96,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 29,
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
              92,
              118
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    136,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    139,
                    140
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
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    142,
                    143
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
                }
              ],
              "range": [
                135,
                144
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              128,
              145
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          86,
          147
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 86,
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
        "name": "asReversedTuple",
        "optional": false,
        "range": [
          9,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
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
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            },
            "range": [
              26,
              34
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                28,
                34
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 1
                },
                "start": {
                  "column": 28,
                  "line": 1
                }
              }
            }
          },
          "range": [
            25,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
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
                "column": 45,
                "line": 1
              },
              "start": {
                "column": 37,
                "line": 1
              }
            },
            "range": [
              37,
              45
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                39,
                45
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 1
                },
                "start": {
                  "column": 39,
                  "line": 1
                }
              }
            }
          },
          "range": [
            36,
            45
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 1
            },
            "start": {
              "column": 36,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 1
              },
              "start": {
                "column": 48,
                "line": 1
              }
            },
            "range": [
              48,
              57
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                50,
                57
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 1
                },
                "start": {
                  "column": 50,
                  "line": 1
                }
              }
            }
          },
          "range": [
            47,
            57
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 1
            },
            "start": {
              "column": 47,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 85,
            "line": 1
          },
          "start": {
            "column": 58,
            "line": 1
          }
        },
        "range": [
          58,
          85
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSBooleanKeyword",
              "range": [
                61,
                68
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 1
                },
                "start": {
                  "column": 61,
                  "line": 1
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                70,
                76
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 1
                },
                "start": {
                  "column": 70,
                  "line": 1
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                78,
                84
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 1
                },
                "start": {
                  "column": 78,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            60,
            85
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 1
            },
            "start": {
              "column": 60,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        147
      ],
      "loc": {
        "end": {
          "column": 1,
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
