__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    123
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
            "name": "func",
            "optional": false,
            "range": [
              4,
              8
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
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
                        "name": "unused",
                        "optional": false,
                        "range": [
                          80,
                          86
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 2
                          },
                          "start": {
                            "column": 8,
                            "line": 2
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "20",
                        "value": 20,
                        "range": [
                          89,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 2
                          },
                          "start": {
                            "column": 17,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        80,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
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
                  "kind": "var",
                  "range": [
                    76,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 2
                    },
                    "start": {
                      "column": 4,
                      "line": 2
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
                      "name": "person2",
                      "optional": false,
                      "range": [
                        97,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 3
                        },
                        "start": {
                          "column": 4,
                          "line": 3
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"Dummy value\"",
                      "value": "Dummy value",
                      "range": [
                        107,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 3
                        },
                        "start": {
                          "column": 14,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      97,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 3
                      },
                      "start": {
                        "column": 4,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    97,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                70,
                123
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 4
                },
                "start": {
                  "column": 70,
                  "line": 1
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "person",
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
                    "type": "TSStringKeyword",
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
                  20,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 1
                  },
                  "start": {
                    "column": 20,
                    "line": 1
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "person2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 1
                    },
                    "start": {
                      "column": 43,
                      "line": 1
                    }
                  },
                  "range": [
                    43,
                    51
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
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
                  }
                },
                "range": [
                  36,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
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
                "name": "person3",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 1
                    },
                    "start": {
                      "column": 60,
                      "line": 1
                    }
                  },
                  "range": [
                    60,
                    68
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      62,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 1
                      },
                      "start": {
                        "column": 62,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  53,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 1
                  },
                  "start": {
                    "column": 53,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              11,
              123
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          },
          "range": [
            4,
            123
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
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
        123
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
