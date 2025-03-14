__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    77
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
            "name": "A",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    14,
                    15
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 1
                    },
                    "start": {
                      "column": 14,
                      "line": 1
                    }
                  }
                },
                "range": [
                  10,
                  15
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 1
                  },
                  "start": {
                    "column": 10,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              8,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
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
        18
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          60,
          64
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 40,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fill",
        "optional": false,
        "range": [
          29,
          33
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 3
              },
              "start": {
                "column": 35,
                "line": 3
              }
            },
            "range": [
              55,
              58
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  57,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 37,
                    "line": 3
                  }
                }
              },
              "range": [
                57,
                58
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 37,
                  "line": 3
                }
              }
            }
          },
          "range": [
            54,
            58
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 3
            },
            "start": {
              "column": 34,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
          }
        },
        "range": [
          33,
          53
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  51,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 31,
                    "line": 3
                  }
                }
              },
              "range": [
                44,
                52
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                34,
                35
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              34,
              52
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        20,
        64
      ],
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
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "32",
            "value": 32,
            "range": [
              72,
              74
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 7
              },
              "start": {
                "column": 5,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fill",
          "optional": false,
          "range": [
            67,
            71
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          67,
          75
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        67,
        76
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
