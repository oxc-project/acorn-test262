__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    141
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
              5,
              6
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 1
              },
              "start": {
                "column": 5,
                "line": 1
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
                      15,
                      16
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 1
                      },
                      "start": {
                        "column": 15,
                        "line": 1
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
                      9,
                      15
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 1
                      },
                      "start": {
                        "column": 9,
                        "line": 1
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
                      16,
                      21
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 1
                      },
                      "start": {
                        "column": 16,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  9,
                  21
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
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
                      26,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
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
                  26,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 1
                  },
                  "start": {
                    "column": 26,
                    "line": 1
                  }
                }
              },
              "range": [
                9,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
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
                          43,
                          48
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 2
                          },
                          "start": {
                            "column": 8,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      43,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
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
                    "expressions": [
                      {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          59,
                          60
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 2
                          },
                          "start": {
                            "column": 24,
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
                          53,
                          59
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 2
                          },
                          "start": {
                            "column": 18,
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
                          60,
                          65
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
                      53,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    43,
                    65
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
                          83,
                          84
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 3
                          },
                          "start": {
                            "column": 14,
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
                          77,
                          83
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
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
                          84,
                          89
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 3
                          },
                          "start": {
                            "column": 15,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      77,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"abc0abc\"",
                    "value": "abc0abc",
                    "range": [
                      93,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 3
                      },
                      "start": {
                        "column": 24,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    77,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "range": [
                  43,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 2
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
                    114,
                    123
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
                },
                "right": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        134,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 4
                        },
                        "start": {
                          "column": 28,
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
                        128,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 4
                        },
                        "start": {
                          "column": 22,
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
                        135,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 4
                        },
                        "start": {
                          "column": 29,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    128,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 4
                    },
                    "start": {
                      "column": 22,
                      "line": 4
                    }
                  }
                },
                "range": [
                  114,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "range": [
                43,
                140
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "range": [
              9,
              140
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            5,
            140
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 4
            },
            "start": {
              "column": 5,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1,
        141
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 4
        },
        "start": {
          "column": 1,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 35,
      "line": 4
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
