__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    84
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
        "name": "foo",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 1
              },
              "start": {
                "column": 39,
                "line": 1
              }
            },
            "range": [
              39,
              42
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  41,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 1
                  },
                  "start": {
                    "column": 41,
                    "line": 1
                  }
                }
              },
              "range": [
                41,
                42
              ],
              "loc": {
                "end": {
                  "column": 42,
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
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 1
          },
          "start": {
            "column": 43,
            "line": 1
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
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 45,
                "line": 1
              }
            }
          },
          "range": [
            45,
            46
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 1
            },
            "start": {
              "column": 45,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        },
        "range": [
          20,
          37
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    32,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 1
                    },
                    "start": {
                      "column": 32,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                31,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                21,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              21,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        47
      ],
      "loc": {
        "end": {
          "column": 47,
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
            "name": "y",
            "optional": false,
            "range": [
              53,
              54
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      62,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 3
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  61,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                57,
                60
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              57,
              73
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            53,
            73
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        49,
        74
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 3
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "range": [
            75,
            76
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                80,
                82
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            79,
            83
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "range": [
          75,
          83
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        75,
        84
      ],
      "loc": {
        "end": {
          "column": 9,
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
      "column": 9,
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
