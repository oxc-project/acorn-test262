__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    154
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
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 6,
                  "line": 1
                }
              },
              "range": [
                6,
                13
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    8,
                    13
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 1
                    },
                    "start": {
                      "column": 8,
                      "line": 1
                    }
                  }
                },
                "range": [
                  8,
                  13
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 1
                  },
                  "start": {
                    "column": 8,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              5,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 5,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            5,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 5,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1,
        14
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 1
        },
        "start": {
          "column": 1,
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
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                20,
                35
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        22,
                        27
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 2
                        },
                        "start": {
                          "column": 7,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      22,
                      27
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 2
                      },
                      "start": {
                        "column": 7,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        30,
                        35
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 2
                        },
                        "start": {
                          "column": 15,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      30,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  22,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              19,
              35
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
          "init": null,
          "range": [
            19,
            35
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
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        15,
        36
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                76,
                82
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            }
          ],
          "test": {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              61,
              66
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 9,
                "line": 5
              }
            }
          },
          "range": [
            56,
            82
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                107,
                113
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            }
          ],
          "test": {
            "type": "Literal",
            "raw": "\"bar\"",
            "value": "bar",
            "range": [
              92,
              97
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 7
              },
              "start": {
                "column": 9,
                "line": 7
              }
            }
          },
          "range": [
            87,
            113
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  134,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              },
              "range": [
                134,
                136
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                145,
                151
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            }
          ],
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              123,
              124
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "range": [
            118,
            151
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "range": [
          47,
          48
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 4
          },
          "start": {
            "column": 8,
            "line": 4
          }
        }
      },
      "range": [
        39,
        153
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
