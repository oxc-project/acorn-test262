__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    64,
    274
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              },
              "range": [
                70,
                80
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    72,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "range": [
                  72,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              68,
              80
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  86,
                  87
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
              {
                "type": "Literal",
                "raw": "\"3\"",
                "value": "3",
                "range": [
                  88,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              83,
              92
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 19,
                "line": 4
              }
            }
          },
          "range": [
            68,
            92
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        64,
        93
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "stuff",
              "optional": false,
              "range": [
                160,
                165
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 7
                },
                "start": {
                  "column": 37,
                  "line": 7
                }
              }
            },
            "range": [
              153,
              166
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 7
              },
              "start": {
                "column": 30,
                "line": 7
              }
            }
          }
        ],
        "range": [
          151,
          168
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 7
          },
          "start": {
            "column": 28,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func1",
        "optional": false,
        "range": [
          132,
          137
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
              }
            },
            "range": [
              143,
              149
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  144,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              "range": [
                144,
                149
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 7
                }
              }
            }
          },
          "range": [
            138,
            149
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 7
            },
            "start": {
              "column": 15,
              "line": 7
            }
          }
        }
      ],
      "range": [
        123,
        168
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stuff1",
                      "optional": false,
                      "range": [
                        247,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stuff2",
                      "optional": false,
                      "range": [
                        255,
                        261
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 10
                        },
                        "start": {
                          "column": 23,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stuff3",
                      "optional": false,
                      "range": [
                        263,
                        269
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 10
                        },
                        "start": {
                          "column": 31,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    246,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 10
                    },
                    "start": {
                      "column": 14,
                      "line": 10
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "func1",
                "optional": false,
                "range": [
                  240,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                240,
                271
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "range": [
              233,
              272
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 10
              },
              "start": {
                "column": 1,
                "line": 10
              }
            }
          }
        ],
        "range": [
          230,
          274
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 60,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "range": [
          179,
          184
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 9
              },
              "start": {
                "column": 21,
                "line": 9
              }
            },
            "range": [
              191,
              198
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                192,
                198
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 22,
                  "line": 9
                }
              }
            }
          },
          "range": [
            185,
            198
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 9
            },
            "start": {
              "column": 15,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 9
              },
              "start": {
                "column": 36,
                "line": 9
              }
            },
            "range": [
              206,
              213
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                207,
                213
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 9
                },
                "start": {
                  "column": 37,
                  "line": 9
                }
              }
            }
          },
          "range": [
            200,
            213
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 9
            },
            "start": {
              "column": 30,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 9
              },
              "start": {
                "column": 51,
                "line": 9
              }
            },
            "range": [
              221,
              228
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                222,
                228
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 9
                },
                "start": {
                  "column": 52,
                  "line": 9
                }
              }
            }
          },
          "range": [
            215,
            228
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 9
            },
            "start": {
              "column": 45,
              "line": 9
            }
          }
        }
      ],
      "range": [
        170,
        274
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
