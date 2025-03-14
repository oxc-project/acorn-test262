__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    16,
    133
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          39,
          92
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  46,
                  52
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "range": [
                  53,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                }
              },
              "range": [
                46,
                61
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                62,
                90
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        82,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 4
                        },
                        "start": {
                          "column": 15,
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
                        "column": 17,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  65,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            },
            "range": [
              45,
              90
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false,
        "range": [
          22,
          38
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        16,
        92
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          130,
          133
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 8
          },
          "start": {
            "column": 36,
            "line": 8
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
              "name": "v",
              "optional": false,
              "range": [
                103,
                104
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            },
            "init": null,
            "range": [
              103,
              104
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 8
              },
              "start": {
                "column": 9,
                "line": 8
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          99,
          104
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "right": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "range": [
            112,
            128
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 8
            },
            "start": {
              "column": 18,
              "line": 8
            }
          }
        },
        "range": [
          108,
          128
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 8
          }
        }
      },
      "range": [
        94,
        133
      ],
      "loc": {
        "end": {
          "column": 39,
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
      "column": 39,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
