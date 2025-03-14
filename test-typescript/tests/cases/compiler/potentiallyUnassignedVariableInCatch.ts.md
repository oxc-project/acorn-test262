__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    78
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
            "name": "foo",
            "optional": false,
            "range": [
              4,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
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
            7
          ],
          "loc": {
            "end": {
              "column": 7,
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
      "kind": "let",
      "range": [
        0,
        8
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        45,
                        48
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 4
                        },
                        "start": {
                          "column": 2,
                          "line": 4
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1234",
                      "value": 1234,
                      "range": [
                        51,
                        55
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      45,
                      55
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 4
                      },
                      "start": {
                        "column": 2,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    45,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 4
                    },
                    "start": {
                      "column": 2,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                41,
                59
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 3
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "range": [
                      20,
                      24
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
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
                    "name": "random",
                    "optional": false,
                    "range": [
                      25,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 3
                      },
                      "start": {
                        "column": 10,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    20,
                    31
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 5,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "range": [
                  20,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 5,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0.5",
                "value": 0.5,
                "range": [
                  36,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              },
              "range": [
                20,
                39
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              }
            },
            "range": [
              16,
              59
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 5
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          }
        ],
        "range": [
          13,
          61
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 4,
            "line": 2
          }
        }
      },
      "finalizer": null,
      "handler": {
        "type": "CatchClause",
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  71,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 7
                  },
                  "start": {
                    "column": 1,
                    "line": 7
                  }
                }
              },
              "range": [
                71,
                75
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 1,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            68,
            77
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 8,
              "line": 6
            }
          }
        },
        "param": null,
        "range": [
          62,
          77
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 2,
            "line": 6
          }
        }
      },
      "range": [
        9,
        77
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
