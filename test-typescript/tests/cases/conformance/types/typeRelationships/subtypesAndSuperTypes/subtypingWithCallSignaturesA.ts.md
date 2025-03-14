__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    103
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          17,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            },
            "range": [
              24,
              47
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 36,
                        "line": 1
                      },
                      "start": {
                        "column": 28,
                        "line": 1
                      }
                    },
                    "range": [
                      28,
                      36
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        30,
                        36
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 1
                        },
                        "start": {
                          "column": 30,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    27,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 1
                    },
                    "start": {
                      "column": 27,
                      "line": 1
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 1
                  },
                  "start": {
                    "column": 38,
                    "line": 1
                  }
                },
                "range": [
                  38,
                  47
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    41,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 1
                    },
                    "start": {
                      "column": 41,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                26,
                47
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            }
          },
          "range": [
            22,
            47
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 59,
            "line": 1
          },
          "start": {
            "column": 48,
            "line": 1
          }
        },
        "range": [
          48,
          59
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "cb",
            "optional": false,
            "range": [
              57,
              59
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 1
              },
              "start": {
                "column": 57,
                "line": 1
              }
            }
          },
          "range": [
            50,
            59
          ],
          "loc": {
            "end": {
              "column": 59,
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
        0,
        60
      ],
      "loc": {
        "end": {
          "column": 60,
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
            "name": "r5",
            "optional": false,
            "range": [
              65,
              67
            ],
            "loc": {
              "end": {
                "column": 6,
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
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    90,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 2
                    },
                    "start": {
                      "column": 29,
                      "line": 2
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 2
                        },
                        "start": {
                          "column": 16,
                          "line": 2
                        }
                      },
                      "range": [
                        77,
                        85
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          79,
                          85
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 2
                          },
                          "start": {
                            "column": 18,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      76,
                      85
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
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
                  75,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                70,
                74
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "optional": false,
            "range": [
              70,
              93
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "range": [
            65,
            93
          ],
          "loc": {
            "end": {
              "column": 32,
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
        61,
        94
      ],
      "loc": {
        "end": {
          "column": 33,
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
      "column": 42,
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
