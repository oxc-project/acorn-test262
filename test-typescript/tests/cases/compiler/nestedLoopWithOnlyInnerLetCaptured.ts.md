__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    108
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
            "name": "doSomething",
            "optional": false,
            "range": [
              12,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        0,
        24
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "ForOfStatement",
        "await": false,
        "body": {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "range": [
                    104,
                    106
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
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  98,
                  106
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "range": [
                86,
                97
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              86,
              107
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          "range": [
            86,
            108
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 8,
              "line": 5
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
                "name": "a2",
                "optional": false,
                "range": [
                  58,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              },
              "init": null,
              "range": [
                58,
                60
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            54,
            60
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 4
            },
            "start": {
              "column": 9,
              "line": 4
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "range": [
              64,
              66
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 19,
                "line": 4
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someArray",
            "optional": false,
            "range": [
              67,
              76
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            }
          },
          "range": [
            64,
            76
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 4
            },
            "start": {
              "column": 19,
              "line": 4
            }
          }
        },
        "range": [
          49,
          108
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 5
          },
          "start": {
            "column": 4,
            "line": 4
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
              "name": "a1",
              "optional": false,
              "range": [
                35,
                37
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "init": null,
            "range": [
              35,
              37
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          31,
          37
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          41,
          43
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "range": [
        26,
        108
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 5
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
      "column": 30,
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
