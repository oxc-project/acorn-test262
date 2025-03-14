__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    10,
    76
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
        "name": "f",
        "optional": false,
        "range": [
          27,
          28
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 2
              },
              "start": {
                "column": 27,
                "line": 2
              }
            },
            "range": [
              37,
              49
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
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
                        "column": 30,
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
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 2
                    },
                    "start": {
                      "column": 29,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    43,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 2
                    },
                    "start": {
                      "column": 33,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                39,
                49
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 2
                },
                "start": {
                  "column": 29,
                  "line": 2
                }
              }
            }
          },
          "range": [
            32,
            49
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 2
            },
            "start": {
              "column": 22,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 2
          },
          "start": {
            "column": 40,
            "line": 2
          }
        },
        "range": [
          50,
          56
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            52,
            56
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 2
            },
            "start": {
              "column": 42,
              "line": 2
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        },
        "range": [
          28,
          31
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
                29,
                30
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              29,
              30
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        10,
        57
      ],
      "loc": {
        "end": {
          "column": 47,
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
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                72,
                74
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
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
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  },
                  "range": [
                    62,
                    67
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      64,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 3
                      },
                      "start": {
                        "column": 6,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  61,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 3
                  },
                  "start": {
                    "column": 3,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              60,
              74
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            58,
            59
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          58,
          75
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        58,
        75
      ],
      "loc": {
        "end": {
          "column": 17,
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
      "line": 2
    }
  },
  "hashbang": null
}
```
