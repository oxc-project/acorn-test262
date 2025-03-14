__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    33,
    165
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              47,
              49
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "importScripts",
          "optional": false,
          "range": [
            33,
            46
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          33,
          50
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        33,
        50
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "f",
            "optional": false,
            "range": [
              100,
              101
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
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "FormData",
              "optional": false,
              "range": [
                108,
                116
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "range": [
              104,
              118
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          },
          "range": [
            100,
            118
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        94,
        118
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "element",
                "optional": false,
                "range": [
                  148,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 7
                  },
                  "start": {
                    "column": 2,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  156,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              },
              "range": [
                148,
                162
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
                }
              }
            },
            "range": [
              148,
              162
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          }
        ],
        "range": [
          144,
          164
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 25,
            "line": 6
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "element",
              "optional": false,
              "range": [
                130,
                137
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "init": null,
            "range": [
              130,
              137
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 11,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          124,
          137
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          141,
          142
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 6
          },
          "start": {
            "column": 22,
            "line": 6
          }
        }
      },
      "range": [
        119,
        164
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
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
      "line": 2
    }
  },
  "hashbang": null
}
```
