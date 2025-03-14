__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    531
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          78,
                          79
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 3
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
                        "name": "console",
                        "optional": false,
                        "range": [
                          66,
                          73
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
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
                          74,
                          77
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 3
                          },
                          "start": {
                            "column": 16,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        66,
                        77
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      66,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    66,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
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
                56,
                87
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 40,
                  "line": 2
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
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_a",
                        "optional": false,
                        "range": [
                          32,
                          34
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 2
                          },
                          "start": {
                            "column": 16,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          36,
                          37
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 2
                          },
                          "start": {
                            "column": 20,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      31,
                      38
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    31,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                25,
                38
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "'key'",
                      "value": "key",
                      "range": [
                        44,
                        49
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 28,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        51,
                        52
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 2
                        },
                        "start": {
                          "column": 35,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    43,
                    53
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 2
                    },
                    "start": {
                      "column": 27,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                42,
                54
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 2
                },
                "start": {
                  "column": 26,
                  "line": 2
                }
              }
            },
            "range": [
              20,
              87
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          151,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 7
                          },
                          "start": {
                            "column": 20,
                            "line": 7
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
                          139,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
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
                          147,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 7
                          },
                          "start": {
                            "column": 16,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        139,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      139,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    139,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                129,
                160
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 40,
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
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          105,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 6
                          },
                          "start": {
                            "column": 16,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_b",
                        "optional": false,
                        "range": [
                          108,
                          110
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 6
                          },
                          "start": {
                            "column": 19,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      104,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    104,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 15,
                      "line": 6
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                98,
                111
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "'key'",
                      "value": "key",
                      "range": [
                        117,
                        122
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 6
                        },
                        "start": {
                          "column": 28,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        124,
                        125
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 6
                        },
                        "start": {
                          "column": 35,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    116,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 6
                    },
                    "start": {
                      "column": 27,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                115,
                127
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 6
                },
                "start": {
                  "column": 26,
                  "line": 6
                }
              }
            },
            "range": [
              93,
              160
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
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
                203,
                205
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 10
                },
                "start": {
                  "column": 41,
                  "line": 10
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
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_a",
                        "optional": false,
                        "range": [
                          178,
                          180
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 10
                          },
                          "start": {
                            "column": 16,
                            "line": 10
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_b",
                        "optional": false,
                        "range": [
                          182,
                          184
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 10
                          },
                          "start": {
                            "column": 20,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      177,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 10
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    177,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 10
                    },
                    "start": {
                      "column": 15,
                      "line": 10
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                171,
                185
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "'key'",
                      "value": "key",
                      "range": [
                        191,
                        196
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 10
                        },
                        "start": {
                          "column": 29,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        198,
                        199
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 10
                        },
                        "start": {
                          "column": 36,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    190,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 10
                    },
                    "start": {
                      "column": 28,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                189,
                201
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 10
                },
                "start": {
                  "column": 27,
                  "line": 10
                }
              }
            },
            "range": [
              166,
              205
            ],
            "loc": {
              "end": {
                "column": 43,
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
          14,
          207
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "range": [
        0,
        207
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "type": "ForOfStatement",
            "await": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                266,
                268
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 15
                },
                "start": {
                  "column": 40,
                  "line": 15
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
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_a",
                        "optional": false,
                        "range": [
                          242,
                          244
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 15
                          },
                          "start": {
                            "column": 16,
                            "line": 15
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          246,
                          247
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 15
                          },
                          "start": {
                            "column": 20,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      241,
                      248
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 15
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    241,
                    248
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 15
                    },
                    "start": {
                      "column": 15,
                      "line": 15
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                235,
                248
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "'key'",
                      "value": "key",
                      "range": [
                        254,
                        259
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 15
                        },
                        "start": {
                          "column": 28,
                          "line": 15
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        261,
                        262
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 15
                        },
                        "start": {
                          "column": 35,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    253,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 15
                    },
                    "start": {
                      "column": 27,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                252,
                264
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 15
                },
                "start": {
                  "column": 26,
                  "line": 15
                }
              }
            },
            "range": [
              230,
              268
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                310,
                312
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 17
                },
                "start": {
                  "column": 40,
                  "line": 17
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
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          286,
                          287
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 17
                          },
                          "start": {
                            "column": 16,
                            "line": 17
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_b",
                        "optional": false,
                        "range": [
                          289,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 17
                          },
                          "start": {
                            "column": 19,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      285,
                      292
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 17
                      },
                      "start": {
                        "column": 15,
                        "line": 17
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    285,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 17
                    },
                    "start": {
                      "column": 15,
                      "line": 17
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                279,
                292
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "'key'",
                      "value": "key",
                      "range": [
                        298,
                        303
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 17
                        },
                        "start": {
                          "column": 28,
                          "line": 17
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        305,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 17
                        },
                        "start": {
                          "column": 35,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "range": [
                    297,
                    307
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 17
                    },
                    "start": {
                      "column": 27,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                296,
                308
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 17
                },
                "start": {
                  "column": 26,
                  "line": 17
                }
              }
            },
            "range": [
              274,
              312
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                353,
                355
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 19
                },
                "start": {
                  "column": 39,
                  "line": 19
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
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          330,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 19
                          },
                          "start": {
                            "column": 16,
                            "line": 19
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          333,
                          334
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 19
                          },
                          "start": {
                            "column": 19,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      329,
                      335
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    329,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 19
                    },
                    "start": {
                      "column": 15,
                      "line": 19
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                323,
                335
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "'key'",
                      "value": "key",
                      "range": [
                        341,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 19
                        },
                        "start": {
                          "column": 27,
                          "line": 19
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        348,
                        349
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 19
                        },
                        "start": {
                          "column": 34,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "range": [
                    340,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 19
                    },
                    "start": {
                      "column": 26,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                339,
                351
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 19
                },
                "start": {
                  "column": 25,
                  "line": 19
                }
              }
            },
            "range": [
              318,
              355
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          224,
          357
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 14,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "range": [
          219,
          221
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
      "params": [],
      "range": [
        210,
        357
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 14
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
            "type": "ForOfStatement",
            "await": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                423,
                425
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 23
                },
                "start": {
                  "column": 48,
                  "line": 23
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
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
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
                                "name": "_a",
                                "optional": false,
                                "range": [
                                  393,
                                  395
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 23
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "range": [
                                  397,
                                  398
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 23
                                  }
                                }
                              }
                            ],
                            "optional": false,
                            "range": [
                              392,
                              399
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 23
                              },
                              "start": {
                                "column": 17,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "optional": false,
                        "range": [
                          391,
                          400
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 23
                          },
                          "start": {
                            "column": 16,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      390,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    390,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                384,
                401
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
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
                              "raw": "'key'",
                              "value": "key",
                              "range": [
                                409,
                                414
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 23
                                },
                                "start": {
                                  "column": 34,
                                  "line": 23
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                416,
                                417
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 23
                                },
                                "start": {
                                  "column": 41,
                                  "line": 23
                                }
                              }
                            }
                          ],
                          "range": [
                            408,
                            418
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 23
                            },
                            "start": {
                              "column": 33,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "range": [
                        407,
                        419
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 23
                        },
                        "start": {
                          "column": 32,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "range": [
                    406,
                    420
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 23
                    },
                    "start": {
                      "column": 31,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                405,
                421
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 23
                },
                "start": {
                  "column": 30,
                  "line": 23
                }
              }
            },
            "range": [
              379,
              425
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                475,
                477
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 25
                },
                "start": {
                  "column": 48,
                  "line": 25
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
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
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
                                  445,
                                  446
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 25
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_b",
                                "optional": false,
                                "range": [
                                  448,
                                  450
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 25
                                  }
                                }
                              }
                            ],
                            "optional": false,
                            "range": [
                              444,
                              451
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 25
                              },
                              "start": {
                                "column": 17,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "optional": false,
                        "range": [
                          443,
                          452
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 25
                          },
                          "start": {
                            "column": 16,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      442,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    442,
                    453
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 25
                    },
                    "start": {
                      "column": 15,
                      "line": 25
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                436,
                453
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 25
                },
                "start": {
                  "column": 9,
                  "line": 25
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
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
                              "raw": "'key'",
                              "value": "key",
                              "range": [
                                461,
                                466
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 25
                                },
                                "start": {
                                  "column": 34,
                                  "line": 25
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                468,
                                469
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 25
                                },
                                "start": {
                                  "column": 41,
                                  "line": 25
                                }
                              }
                            }
                          ],
                          "range": [
                            460,
                            470
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 25
                            },
                            "start": {
                              "column": 33,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        459,
                        471
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 25
                        },
                        "start": {
                          "column": 32,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "range": [
                    458,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 25
                    },
                    "start": {
                      "column": 31,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                457,
                473
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 25
                },
                "start": {
                  "column": 30,
                  "line": 25
                }
              }
            },
            "range": [
              431,
              477
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
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
                526,
                528
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 27
                },
                "start": {
                  "column": 47,
                  "line": 27
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
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
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
                                  497,
                                  498
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 27
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "range": [
                                  500,
                                  501
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 27
                                  }
                                }
                              }
                            ],
                            "optional": false,
                            "range": [
                              496,
                              502
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 27
                              },
                              "start": {
                                "column": 17,
                                "line": 27
                              }
                            }
                          }
                        ],
                        "optional": false,
                        "range": [
                          495,
                          503
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 27
                          },
                          "start": {
                            "column": 16,
                            "line": 27
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      494,
                      504
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 27
                      },
                      "start": {
                        "column": 15,
                        "line": 27
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    494,
                    504
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 27
                    },
                    "start": {
                      "column": 15,
                      "line": 27
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                488,
                504
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 27
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
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
                              "raw": "'key'",
                              "value": "key",
                              "range": [
                                512,
                                517
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 27
                                },
                                "start": {
                                  "column": 33,
                                  "line": 27
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                519,
                                520
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 27
                                },
                                "start": {
                                  "column": 40,
                                  "line": 27
                                }
                              }
                            }
                          ],
                          "range": [
                            511,
                            521
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 27
                            },
                            "start": {
                              "column": 32,
                              "line": 27
                            }
                          }
                        }
                      ],
                      "range": [
                        510,
                        522
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 27
                        },
                        "start": {
                          "column": 31,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "range": [
                    509,
                    523
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 27
                    },
                    "start": {
                      "column": 30,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                508,
                524
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 27
                },
                "start": {
                  "column": 29,
                  "line": 27
                }
              }
            },
            "range": [
              483,
              528
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          373,
          530
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 14,
            "line": 22
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "range": [
          368,
          370
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 22
          },
          "start": {
            "column": 9,
            "line": 22
          }
        }
      },
      "params": [],
      "range": [
        359,
        530
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
