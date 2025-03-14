__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    70
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              34,
              35
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              38,
              42
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            34,
            42
          ],
          "loc": {
            "end": {
              "column": 12,
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
      "kind": "let",
      "range": [
        30,
        43
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 2
        },
        "start": {
          "column": 0,
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
          "name": "x",
          "optional": false,
          "range": [
            45,
            46
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                55,
                56
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  50,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 4
                  },
                  "start": {
                    "column": 5,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              50,
              56
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 5,
                "line": 4
              }
            }
          },
          "right": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                67,
                68
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
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  62,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              62,
              68
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            }
          },
          "range": [
            49,
            69
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
        "range": [
          45,
          69
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        45,
        70
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 25,
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
