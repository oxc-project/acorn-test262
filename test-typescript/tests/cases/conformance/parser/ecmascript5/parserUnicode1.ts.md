__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    195
  ],
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
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
                  "name": "xx",
                  "optional": false,
                  "range": [
                    12,
                    19
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "6",
                  "value": 6,
                  "range": [
                    22,
                    23
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
                "range": [
                  12,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 6,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              8,
              24
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "raw": "'#6.1: var \\\\u0078x = 1; xx === 6. Actual: '",
                          "value": "#6.1: var \\u0078x = 1; xx === 6. Actual: ",
                          "range": [
                            56,
                            100
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 6
                            },
                            "start": {
                              "column": 11,
                              "line": 6
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xx",
                          "optional": false,
                          "range": [
                            104,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 6
                            },
                            "start": {
                              "column": 59,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          56,
                          107
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 6
                          },
                          "start": {
                            "column": 11,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "$ERROR",
                      "optional": false,
                      "range": [
                        49,
                        55
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 6
                        },
                        "start": {
                          "column": 4,
                          "line": 6
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      49,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    49,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                42,
                113
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  32,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 4
                  },
                  "start": {
                    "column": 6,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "6",
                "value": 6,
                "range": [
                  39,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              },
              "range": [
                32,
                40
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            },
            "range": [
              28,
              113
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "range": [
          4,
          115
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 4,
            "line": 1
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
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "raw": "'#6.2: var \\\\u0078x = 1; xx === 6. Actual: '",
                      "value": "#6.2: var \\u0078x = 1; xx === 6. Actual: ",
                      "range": [
                        139,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 10
                        },
                        "start": {
                          "column": 11,
                          "line": 10
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "xx",
                      "optional": false,
                      "range": [
                        187,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 10
                        },
                        "start": {
                          "column": 59,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      139,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ERROR",
                  "optional": false,
                  "range": [
                    132,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "range": [
                  132,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "range": [
                132,
                192
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            }
          ],
          "range": [
            126,
            195
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 10,
              "line": 9
            }
          }
        },
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            123,
            124
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 9
            },
            "start": {
              "column": 7,
              "line": 9
            }
          }
        },
        "range": [
          116,
          195
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        0,
        195
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
