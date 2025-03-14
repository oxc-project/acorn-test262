__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    147
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
        "name": "resolver",
        "optional": false,
        "range": [
          17,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 1
          },
          "start": {
            "column": 30,
            "line": 1
          }
        },
        "range": [
          30,
          42
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 1
              },
              "start": {
                "column": 35,
                "line": 1
              }
            },
            "range": [
              35,
              42
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                38,
                42
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 1
                },
                "start": {
                  "column": 38,
                  "line": 1
                }
              }
            }
          },
          "range": [
            32,
            42
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 1
            },
            "start": {
              "column": 32,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        },
        "range": [
          25,
          28
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
                26,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              26,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        43
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrapResolver",
        "optional": false,
        "range": [
          61,
          73
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "resolverFunction",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 61,
                "line": 2
              },
              "start": {
                "column": 49,
                "line": 2
              }
            },
            "range": [
              93,
              105
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 2
                  },
                  "start": {
                    "column": 54,
                    "line": 2
                  }
                },
                "range": [
                  98,
                  105
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    101,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 2
                    },
                    "start": {
                      "column": 57,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                95,
                105
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 2
                },
                "start": {
                  "column": 51,
                  "line": 2
                }
              }
            }
          },
          "range": [
            77,
            105
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 2
            },
            "start": {
              "column": 33,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 68,
            "line": 2
          },
          "start": {
            "column": 62,
            "line": 2
          }
        },
        "range": [
          106,
          112
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            108,
            112
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 2
            },
            "start": {
              "column": 64,
              "line": 2
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 2
          },
          "start": {
            "column": 29,
            "line": 2
          }
        },
        "range": [
          73,
          76
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
                74,
                75
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 30,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              74,
              75
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 30,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        44,
        113
      ],
      "loc": {
        "end": {
          "column": 69,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolver",
                "optional": false,
                "range": [
                  128,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "range": [
                128,
                138
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                142,
                144
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              }
            },
            "range": [
              128,
              144
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapResolver",
          "optional": false,
          "range": [
            115,
            127
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "optional": false,
        "range": [
          115,
          145
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        115,
        146
      ],
      "loc": {
        "end": {
          "column": 31,
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
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
