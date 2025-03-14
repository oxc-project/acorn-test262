__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    157
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
            "name": "x",
            "optional": false,
            "range": [
              21,
              22
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      31,
                      32
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 14,
                        "line": 2
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "range": [
                      25,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 2
                      },
                      "start": {
                        "column": 8,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "range": [
                      32,
                      37
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  25,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              },
              "right": {
                "type": "TemplateLiteral",
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "range": [
                      42,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  42,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 25,
                    "line": 2
                  }
                }
              },
              "range": [
                25,
                47
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "right": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "TemplateLiteral",
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "range": [
                          59,
                          64
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      59,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  "right": {
                    "type": "TemplateLiteral",
                    "expressions": [
                      {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          75,
                          76
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 3
                          },
                          "start": {
                            "column": 24,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "range": [
                          69,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 3
                          },
                          "start": {
                            "column": 18,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "range": [
                          76,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 3
                          },
                          "start": {
                            "column": 25,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      69,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 3
                      },
                      "start": {
                        "column": 18,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    59,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "TemplateLiteral",
                    "expressions": [
                      {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          99,
                          100
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
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "range": [
                          93,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "range": [
                          100,
                          105
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 4
                          },
                          "start": {
                            "column": 15,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      93,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"abc0abc\"",
                    "value": "abc0abc",
                    "range": [
                      109,
                      118
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    93,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "range": [
                  59,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "Literal",
                  "raw": "\"abc0abc\"",
                  "value": "abc0abc",
                  "range": [
                    130,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        150,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 5
                        },
                        "start": {
                          "column": 28,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "range": [
                        144,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 5
                        },
                        "start": {
                          "column": 22,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "range": [
                        151,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 5
                        },
                        "start": {
                          "column": 29,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    144,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  }
                },
                "range": [
                  130,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              "range": [
                59,
                156
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "range": [
              25,
              156
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            21,
            156
          ],
          "loc": {
            "end": {
              "column": 34,
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
        17,
        157
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 5
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
      "column": 35,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
