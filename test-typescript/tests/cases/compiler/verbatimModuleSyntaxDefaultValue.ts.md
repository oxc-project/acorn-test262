__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    112
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          13
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Task",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        13
      ],
      "loc": {
        "end": {
          "column": 13,
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
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Task",
                "optional": false,
                "range": [
                  50,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              },
              "range": [
                46,
                56
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            },
            "range": [
              39,
              57
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          }
        ],
        "range": [
          37,
          59
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 3
          },
          "start": {
            "column": 22,
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
        "name": "task",
        "optional": false,
        "range": [
          24,
          28
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        },
        "range": [
          30,
          36
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Task",
            "optional": false,
            "range": [
              32,
              36
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          },
          "range": [
            32,
            36
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 17,
              "line": 3
            }
          }
        }
      },
      "range": [
        15,
        59
      ],
      "loc": {
        "end": {
          "column": 44,
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
        61,
        89
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
              "name": "build",
              "optional": false,
              "range": [
                74,
                79
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "task",
                "optional": false,
                "range": [
                  82,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "range": [
                82,
                88
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "range": [
              74,
              88
            ],
            "loc": {
              "end": {
                "column": 27,
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
          68,
          89
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
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "build",
        "optional": false,
        "range": [
          105,
          110
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 6
          },
          "start": {
            "column": 15,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "range": [
        90,
        111
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
