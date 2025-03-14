__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    81
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              },
              "range": [
                5,
                15
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    7,
                    13
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 1
                    },
                    "start": {
                      "column": 7,
                      "line": 1
                    }
                  }
                },
                "range": [
                  7,
                  15
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 1
                  },
                  "start": {
                    "column": 7,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            15
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        16
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  44,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  48,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 2
                  },
                  "start": {
                    "column": 31,
                    "line": 2
                  }
                }
              },
              "range": [
                44,
                49
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 2
                },
                "start": {
                  "column": 27,
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
                "name": "c",
                "optional": false,
                "range": [
                  35,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  38,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              34,
              49
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 2
              },
              "start": {
                "column": 17,
                "line": 2
              }
            }
          },
          {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              51,
              52
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 2
              },
              "start": {
                "column": 34,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              17,
              18
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "range": [
              19,
              25
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          "range": [
            17,
            25
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            25,
            33
          ],
          "params": [
            {
              "type": "TSNumberKeyword",
              "range": [
                26,
                32
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 2
            },
            "start": {
              "column": 8,
              "line": 2
            }
          }
        },
        "range": [
          17,
          53
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        17,
        54
      ],
      "loc": {
        "end": {
          "column": 37,
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
      "column": 64,
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
