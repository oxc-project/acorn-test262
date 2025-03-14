__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    78
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
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              },
              "range": [
                7,
                26
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    18,
                    26
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        19,
                        25
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 1
                        },
                        "start": {
                          "column": 19,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 1
                    },
                    "start": {
                      "column": 18,
                      "line": 1
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Uppercase",
                  "optional": false,
                  "range": [
                    9,
                    18
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 1
                    },
                    "start": {
                      "column": 9,
                      "line": 1
                    }
                  }
                },
                "range": [
                  9,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              29,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            }
          },
          "range": [
            6,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
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
        32
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                40,
                59
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    51,
                    59
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        52,
                        58
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Uppercase",
                  "optional": false,
                  "range": [
                    42,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 2
                    },
                    "start": {
                      "column": 9,
                      "line": 2
                    }
                  }
                },
                "range": [
                  42,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              39,
              59
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
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
                    64,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 2
                    },
                    "start": {
                      "column": 31,
                      "line": 2
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"bar\"",
                  "value": "bar",
                  "range": [
                    69,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 2
                    },
                    "start": {
                      "column": 36,
                      "line": 2
                    }
                  }
                },
                "range": [
                  64,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 2
                  },
                  "start": {
                    "column": 31,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              62,
              76
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 2
              },
              "start": {
                "column": 29,
                "line": 2
              }
            }
          },
          "range": [
            39,
            76
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        33,
        77
      ],
      "loc": {
        "end": {
          "column": 44,
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
      "column": 0,
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
