__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    649
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
            "name": "empty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              },
              "range": [
                33,
                37
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"\"",
                  "value": "",
                  "range": [
                    35,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  }
                },
                "range": [
                  35,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              28,
              37
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              40,
              42
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            }
          },
          "range": [
            28,
            42
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        22,
        43
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "foo",
            "optional": false,
            "range": [
              48,
              51
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "empty",
            "optional": false,
            "range": [
              54,
              59
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 10,
                "line": 4
              }
            }
          },
          "range": [
            48,
            59
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        44,
        60
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
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
            61,
            64
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "+",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              67,
              70
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "\"bar\"",
            "value": "bar",
            "range": [
              73,
              78
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          "range": [
            67,
            78
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        },
        "range": [
          61,
          78
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        61,
        78
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          79,
          82
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        79,
        82
      ],
      "loc": {
        "end": {
          "column": 3,
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
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
                }
              },
              "range": [
                118,
                121
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    120,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 8
                    },
                    "start": {
                      "column": 26,
                      "line": 8
                    }
                  }
                },
                "range": [
                  120,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 8
                  },
                  "start": {
                    "column": 26,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              108,
              121
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            108,
            121
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 8
            },
            "start": {
              "column": 14,
              "line": 8
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        94,
        122
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "t1",
            "optional": false,
            "range": [
              128,
              130
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "range": [
              133,
              143
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 10
              },
              "start": {
                "column": 9,
                "line": 10
              }
            }
          },
          "range": [
            128,
            143
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        124,
        144
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "range": [
            145,
            147
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "+",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "range": [
              150,
              152
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 11
              },
              "start": {
                "column": 5,
                "line": 11
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              155,
              157
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 11
              },
              "start": {
                "column": 10,
                "line": 11
              }
            }
          },
          "range": [
            150,
            157
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 11
            },
            "start": {
              "column": 5,
              "line": 11
            }
          }
        },
        "range": [
          145,
          157
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        145,
        157
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "range": [
          158,
          160
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        158,
        160
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "t2",
            "optional": false,
            "range": [
              176,
              178
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "range": [
              181,
              191
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 14
              },
              "start": {
                "column": 9,
                "line": 14
              }
            }
          },
          "range": [
            176,
            191
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        172,
        192
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "range": [
            193,
            195
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "-",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "range": [
              198,
              200
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 15
              },
              "start": {
                "column": 5,
                "line": 15
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              203,
              205
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 15
              },
              "start": {
                "column": 10,
                "line": 15
              }
            }
          },
          "range": [
            198,
            205
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 15
            },
            "start": {
              "column": 5,
              "line": 15
            }
          }
        },
        "range": [
          193,
          205
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        193,
        205
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "range": [
          206,
          208
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        206,
        208
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "t3",
            "optional": false,
            "range": [
              224,
              226
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "range": [
              229,
              239
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            224,
            239
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        220,
        240
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "range": [
            241,
            243
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "*",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "range": [
              246,
              248
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 19
              },
              "start": {
                "column": 5,
                "line": 19
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              251,
              253
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 19
              },
              "start": {
                "column": 10,
                "line": 19
              }
            }
          },
          "range": [
            246,
            253
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 19
            },
            "start": {
              "column": 5,
              "line": 19
            }
          }
        },
        "range": [
          241,
          253
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        241,
        253
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "range": [
          254,
          256
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        254,
        256
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "t4",
            "optional": false,
            "range": [
              272,
              274
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "range": [
              277,
              287
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          },
          "range": [
            272,
            287
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        268,
        288
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "range": [
            289,
            291
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t4",
            "optional": false,
            "range": [
              294,
              296
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 23
              },
              "start": {
                "column": 5,
                "line": 23
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              300,
              302
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 23
              },
              "start": {
                "column": 11,
                "line": 23
              }
            }
          },
          "range": [
            294,
            302
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 23
            },
            "start": {
              "column": 5,
              "line": 23
            }
          }
        },
        "range": [
          289,
          302
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        289,
        302
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t4",
        "optional": false,
        "range": [
          303,
          305
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        303,
        305
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "t5",
            "optional": false,
            "range": [
              321,
              323
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "range": [
              326,
              336
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 26
              }
            }
          },
          "range": [
            321,
            336
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        317,
        337
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t5",
          "optional": false,
          "range": [
            338,
            340
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "/",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t5",
            "optional": false,
            "range": [
              343,
              345
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 27
              },
              "start": {
                "column": 5,
                "line": 27
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              348,
              350
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 27
              },
              "start": {
                "column": 10,
                "line": 27
              }
            }
          },
          "range": [
            343,
            350
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 27
            },
            "start": {
              "column": 5,
              "line": 27
            }
          }
        },
        "range": [
          338,
          350
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        338,
        350
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t5",
        "optional": false,
        "range": [
          351,
          353
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        351,
        353
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "t6",
            "optional": false,
            "range": [
              369,
              371
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "range": [
              374,
              384
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 30
              },
              "start": {
                "column": 9,
                "line": 30
              }
            }
          },
          "range": [
            369,
            384
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        365,
        385
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t6",
          "optional": false,
          "range": [
            386,
            388
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "%",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t6",
            "optional": false,
            "range": [
              391,
              393
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 31
              },
              "start": {
                "column": 5,
                "line": 31
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              396,
              398
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 31
              },
              "start": {
                "column": 10,
                "line": 31
              }
            }
          },
          "range": [
            391,
            398
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 31
            },
            "start": {
              "column": 5,
              "line": 31
            }
          }
        },
        "range": [
          386,
          398
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        386,
        398
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t6",
        "optional": false,
        "range": [
          399,
          401
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        399,
        401
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "t7",
            "optional": false,
            "range": [
              417,
              419
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "range": [
              422,
              432
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 34
              },
              "start": {
                "column": 9,
                "line": 34
              }
            }
          },
          "range": [
            417,
            432
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        413,
        433
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t7",
          "optional": false,
          "range": [
            434,
            436
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": ">>",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t7",
            "optional": false,
            "range": [
              439,
              441
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 35
              },
              "start": {
                "column": 5,
                "line": 35
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              445,
              446
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 35
              },
              "start": {
                "column": 11,
                "line": 35
              }
            }
          },
          "range": [
            439,
            446
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 35
            },
            "start": {
              "column": 5,
              "line": 35
            }
          }
        },
        "range": [
          434,
          446
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        434,
        446
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t7",
        "optional": false,
        "range": [
          447,
          449
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        447,
        449
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "t8",
            "optional": false,
            "range": [
              465,
              467
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "range": [
              470,
              480
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 38
              },
              "start": {
                "column": 9,
                "line": 38
              }
            }
          },
          "range": [
            465,
            480
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 38
            },
            "start": {
              "column": 4,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        461,
        481
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t8",
          "optional": false,
          "range": [
            482,
            484
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 39
            },
            "start": {
              "column": 0,
              "line": 39
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": ">>>",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t8",
            "optional": false,
            "range": [
              487,
              489
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 39
              },
              "start": {
                "column": 5,
                "line": 39
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              494,
              495
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 39
              },
              "start": {
                "column": 12,
                "line": 39
              }
            }
          },
          "range": [
            487,
            495
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 39
            },
            "start": {
              "column": 5,
              "line": 39
            }
          }
        },
        "range": [
          482,
          495
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        482,
        495
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t8",
        "optional": false,
        "range": [
          496,
          498
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        496,
        498
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "t9",
            "optional": false,
            "range": [
              514,
              516
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "range": [
              519,
              529
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 42
              },
              "start": {
                "column": 9,
                "line": 42
              }
            }
          },
          "range": [
            514,
            529
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 42
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        510,
        530
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t9",
          "optional": false,
          "range": [
            531,
            533
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "<<",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t9",
            "optional": false,
            "range": [
              536,
              538
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 43
              },
              "start": {
                "column": 5,
                "line": 43
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              542,
              543
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 43
              },
              "start": {
                "column": 11,
                "line": 43
              }
            }
          },
          "range": [
            536,
            543
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 43
            },
            "start": {
              "column": 5,
              "line": 43
            }
          }
        },
        "range": [
          531,
          543
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        531,
        543
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t9",
        "optional": false,
        "range": [
          544,
          546
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        544,
        546
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
            "name": "literalUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 46
                },
                "start": {
                  "column": 26,
                  "line": 46
                }
              },
              "range": [
                584,
                593
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        586,
                        589
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 46
                        },
                        "start": {
                          "column": 28,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      586,
                      589
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 46
                      },
                      "start": {
                        "column": 28,
                        "line": 46
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        592,
                        593
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 46
                        },
                        "start": {
                          "column": 34,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      592,
                      593
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 46
                      },
                      "start": {
                        "column": 34,
                        "line": 46
                      }
                    }
                  }
                ],
                "range": [
                  586,
                  593
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 46
                  },
                  "start": {
                    "column": 28,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              572,
              593
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 46
              },
              "start": {
                "column": 14,
                "line": 46
              }
            }
          },
          "init": null,
          "range": [
            572,
            593
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 46
            },
            "start": {
              "column": 14,
              "line": 46
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        558,
        594
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
            "name": "t10",
            "optional": false,
            "range": [
              599,
              602
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "literalUnion",
            "optional": false,
            "range": [
              605,
              617
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 47
              },
              "start": {
                "column": 10,
                "line": 47
              }
            }
          },
          "range": [
            599,
            617
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 47
            },
            "start": {
              "column": 4,
              "line": 47
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        595,
        618
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t10",
          "optional": false,
          "range": [
            619,
            622
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 48
            },
            "start": {
              "column": 0,
              "line": 48
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "+",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t10",
            "optional": false,
            "range": [
              625,
              628
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 48
              },
              "start": {
                "column": 6,
                "line": 48
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "'b'",
            "value": "b",
            "range": [
              631,
              634
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 48
              },
              "start": {
                "column": 12,
                "line": 48
              }
            }
          },
          "range": [
            625,
            634
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 48
            },
            "start": {
              "column": 6,
              "line": 48
            }
          }
        },
        "range": [
          619,
          634
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        619,
        634
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t10",
        "optional": false,
        "range": [
          635,
          638
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        635,
        638
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 50
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
