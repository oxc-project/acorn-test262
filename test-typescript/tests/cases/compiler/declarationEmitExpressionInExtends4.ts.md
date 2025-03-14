__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    212
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  45,
                  48
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 19,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  43,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                37,
                48
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              30,
              48
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          24,
          50
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 24,
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
        "name": "getSomething",
        "optional": false,
        "range": [
          9,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "range": [
        0,
        50
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          99,
          103
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 47,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          58,
          59
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getSomething",
          "optional": false,
          "range": [
            68,
            80
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          68,
          82
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 5
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          82,
          98
        ],
        "params": [
          {
            "type": "TSNumberKeyword",
            "range": [
              83,
              89
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 5
              },
              "start": {
                "column": 31,
                "line": 5
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              91,
              97
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 5
              },
              "start": {
                "column": 39,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 5
          },
          "start": {
            "column": 30,
            "line": 5
          }
        }
      },
      "range": [
        52,
        103
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          162,
          166
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 57,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          111,
          113
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeUndefinedFunction",
          "optional": false,
          "range": [
            122,
            143
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 9
            },
            "start": {
              "column": 17,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          122,
          145
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 9
          },
          "start": {
            "column": 17,
            "line": 9
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          145,
          161
        ],
        "params": [
          {
            "type": "TSNumberKeyword",
            "range": [
              146,
              152
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 9
              },
              "start": {
                "column": 41,
                "line": 9
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              154,
              160
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 9
              },
              "start": {
                "column": 49,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 9
          },
          "start": {
            "column": 40,
            "line": 9
          }
        }
      },
      "range": [
        105,
        166
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
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          208,
          212
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 39,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "range": [
          175,
          177
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeUndefinedFunction",
        "optional": false,
        "range": [
          186,
          207
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 14
          },
          "start": {
            "column": 17,
            "line": 14
          }
        }
      },
      "range": [
        169,
        212
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
