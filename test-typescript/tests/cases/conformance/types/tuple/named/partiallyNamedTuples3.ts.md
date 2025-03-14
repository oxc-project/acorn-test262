__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    124
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
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 75,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                75
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
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
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        36,
                        42
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 1
                        },
                        "start": {
                          "column": 36,
                          "line": 1
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "range": [
                        30,
                        34
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 1
                        },
                        "start": {
                          "column": 30,
                          "line": 1
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      30,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 1
                      },
                      "start": {
                        "column": 30,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      44,
                      51
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 1
                      },
                      "start": {
                        "column": 44,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "range": [
                        60,
                        66
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 1
                        },
                        "start": {
                          "column": 60,
                          "line": 1
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        53,
                        58
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 1
                        },
                        "start": {
                          "column": 53,
                          "line": 1
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      53,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 1
                      },
                      "start": {
                        "column": 53,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      68,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 1
                      },
                      "start": {
                        "column": 68,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  21,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              75
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            75
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        76
      ],
      "loc": {
        "end": {
          "column": 76,
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
            "name": "output",
            "optional": false,
            "range": [
              84,
              90
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tuple",
                  "optional": false,
                  "range": [
                    116,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 3
                    },
                    "start": {
                      "column": 38,
                      "line": 3
                    }
                  }
                },
                "range": [
                  113,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              }
            ],
            "callee": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  107,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      98,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 3
                      },
                      "start": {
                        "column": 20,
                        "line": 3
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    95,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 3
                    },
                    "start": {
                      "column": 17,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                94,
                111
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              93,
              122
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          },
          "range": [
            84,
            122
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        78,
        123
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 3
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
      "column": 0,
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
