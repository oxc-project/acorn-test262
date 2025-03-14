__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    74
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          13,
          26
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 3,
                  "line": 2
                }
              },
              "range": [
                18,
                23
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  19,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              16,
              24
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I6",
        "optional": false,
        "range": [
          10,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        26
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          52,
          55
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 27,
            "line": 5
          },
          "start": {
            "column": 24,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I6",
            "optional": false,
            "range": [
              49,
              51
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 21,
                "line": 5
              }
            }
          },
          "range": [
            49,
            51
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 5
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I7",
        "optional": false,
        "range": [
          38,
          40
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        28,
        55
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 7
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              },
              "range": [
                63,
                66
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I7",
                  "optional": false,
                  "range": [
                    64,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                },
                "range": [
                  64,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              61,
              66
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            61,
            66
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        57,
        67
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "v1",
          "optional": false,
          "range": [
            68,
            70
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          68,
          72
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        68,
        73
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
