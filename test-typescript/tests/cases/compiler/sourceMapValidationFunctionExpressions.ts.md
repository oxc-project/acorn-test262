__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    158
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
            "name": "greetings",
            "optional": false,
            "range": [
              4,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "greet",
            "optional": false,
            "range": [
              23,
              28
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greetings",
                      "optional": false,
                      "range": [
                        67,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 3
                        },
                        "start": {
                          "column": 4,
                          "line": 3
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      67,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 3
                      },
                      "start": {
                        "column": 4,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    67,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greetings",
                    "optional": false,
                    "range": [
                      91,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    84,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                61,
                103
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 5
                },
                "start": {
                  "column": 42,
                  "line": 2
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  },
                  "range": [
                    40,
                    48
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      42,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 2
                      },
                      "start": {
                        "column": 23,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  32,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 2
                },
                "start": {
                  "column": 30,
                  "line": 2
                }
              },
              "range": [
                49,
                57
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  51,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 32,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              31,
              103
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            23,
            103
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        19,
        103
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 2
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
            "raw": "\"Hello\"",
            "value": "Hello",
            "range": [
              110,
              117
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "greet",
          "optional": false,
          "range": [
            104,
            109
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          104,
          118
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        104,
        119
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "incrGreetings",
            "optional": false,
            "range": [
              124,
              137
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "greetings",
                "optional": false,
                "range": [
                  146,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 7
                  },
                  "start": {
                    "column": 26,
                    "line": 7
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                146,
                157
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 26,
                  "line": 7
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              140,
              157
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
              }
            }
          },
          "range": [
            124,
            157
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        120,
        158
      ],
      "loc": {
        "end": {
          "column": 38,
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
      "column": 38,
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
