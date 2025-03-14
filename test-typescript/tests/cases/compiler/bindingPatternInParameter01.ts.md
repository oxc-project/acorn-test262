__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    104
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
            "name": "nestedArray",
            "optional": false,
            "range": [
              6,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          23,
                          24
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 1
                          },
                          "start": {
                            "column": 23,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          26,
                          27
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 1
                          },
                          "start": {
                            "column": 26,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      22,
                      28
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 1
                      },
                      "start": {
                        "column": 22,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  21,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          33,
                          34
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 1
                          },
                          "start": {
                            "column": 33,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "4",
                        "value": 4,
                        "range": [
                          36,
                          37
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 1
                          },
                          "start": {
                            "column": 36,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      32,
                      38
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
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
                  39
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 1
                  },
                  "start": {
                    "column": 31,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              20,
              40
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          "range": [
            6,
            40
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        41
      ],
      "loc": {
        "end": {
          "column": 41,
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          93,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 4
                          },
                          "start": {
                            "column": 14,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          96,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 4
                          },
                          "start": {
                            "column": 17,
                            "line": 4
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
                        "name": "console",
                        "optional": false,
                        "range": [
                          81,
                          88
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 4
                          },
                          "start": {
                            "column": 2,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "range": [
                          89,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 4
                          },
                          "start": {
                            "column": 10,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        81,
                        92
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
                    },
                    "optional": false,
                    "range": [
                      81,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 2,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    81,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
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
                77,
                101
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          66,
                          67
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 3
                          },
                          "start": {
                            "column": 23,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          69,
                          70
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 3
                          },
                          "start": {
                            "column": 26,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      65,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 3
                      },
                      "start": {
                        "column": 22,
                        "line": 3
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  64,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              63,
              101
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 3
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
            "name": "nestedArray",
            "optional": false,
            "range": [
              43,
              54
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 0,
                "line": 3
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "range": [
              55,
              62
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "range": [
            43,
            62
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          43,
          102
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        43,
        103
      ],
      "loc": {
        "end": {
          "column": 3,
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
      "column": 0,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
