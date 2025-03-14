__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    164
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
            "name": "s",
            "optional": false,
            "range": [
              63,
              64
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"X\"",
            "value": "X",
            "range": [
              67,
              70
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          },
          "range": [
            63,
            70
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        57,
        71
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        73,
        101
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "expr",
              "optional": false,
              "range": [
                86,
                90
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  99,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 5
                  },
                  "start": {
                    "column": 26,
                    "line": 5
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                93,
                101
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "range": [
              86,
              101
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          80,
          101
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 28,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "expr",
            "optional": false,
            "range": [
              102,
              106
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              107,
              108
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 6
              },
              "start": {
                "column": 5,
                "line": 6
              }
            }
          },
          "range": [
            102,
            109
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            112,
            113
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 6
            },
            "start": {
              "column": 10,
              "line": 6
            }
          }
        },
        "range": [
          102,
          113
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        102,
        113
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        115,
        150
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "expr2",
              "optional": false,
              "range": [
                128,
                133
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "init": {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  148,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 8
                  },
                  "start": {
                    "column": 33,
                    "line": 8
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                136,
                150
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            "range": [
              128,
              150
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          122,
          150
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 35,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "expr2",
            "optional": false,
            "range": [
              151,
              156
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              157,
              158
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "range": [
            151,
            159
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            162,
            163
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 9
            },
            "start": {
              "column": 11,
              "line": 9
            }
          }
        },
        "range": [
          151,
          163
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        151,
        163
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 9
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
      "column": 0,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
