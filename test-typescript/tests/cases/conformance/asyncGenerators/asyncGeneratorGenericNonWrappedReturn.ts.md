__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    11,
    175
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        11,
        174
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": true,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              },
              "range": [
                77,
                85
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            73,
            174
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 62,
              "line": 3
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": true,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            34,
            38
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
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
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              },
              "range": [
                43,
                46
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    45,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 3
                    },
                    "start": {
                      "column": 34,
                      "line": 3
                    }
                  }
                },
                "range": [
                  45,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              42,
              46
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 61,
              "line": 3
            },
            "start": {
              "column": 36,
              "line": 3
            }
          },
          "range": [
            47,
            72
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                63,
                72
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      64,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 3
                      },
                      "start": {
                        "column": 53,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    64,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 3
                    },
                    "start": {
                      "column": 53,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      67,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 3
                      },
                      "start": {
                        "column": 56,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    67,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 3
                    },
                    "start": {
                      "column": 56,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      70,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 3
                      },
                      "start": {
                        "column": 59,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    70,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 3
                    },
                    "start": {
                      "column": 59,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 3
                },
                "start": {
                  "column": 52,
                  "line": 3
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "range": [
                49,
                63
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 3
                },
                "start": {
                  "column": 38,
                  "line": 3
                }
              }
            },
            "range": [
              49,
              72
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 3
              },
              "start": {
                "column": 38,
                "line": 3
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 30,
              "line": 3
            },
            "start": {
              "column": 27,
              "line": 3
            }
          },
          "range": [
            38,
            41
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  39,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                39,
                40
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          18,
          174
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
