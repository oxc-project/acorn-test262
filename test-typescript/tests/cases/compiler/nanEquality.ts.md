__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    604
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                23
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  17,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
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
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
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
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            30,
            31
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            36,
            39
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 3
            },
            "start": {
              "column": 10,
              "line": 3
            }
          }
        },
        "range": [
          30,
          39
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
      "range": [
        26,
        43
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          59,
          61
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 15,
            "line": 4
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            56,
            57
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        },
        "range": [
          48,
          57
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 4,
            "line": 4
          }
        }
      },
      "range": [
        44,
        61
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          77,
          79
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 6
          },
          "start": {
            "column": 14,
            "line": 6
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            67,
            68
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            72,
            75
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 6
            },
            "start": {
              "column": 9,
              "line": 6
            }
          }
        },
        "range": [
          67,
          75
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 4,
            "line": 6
          }
        }
      },
      "range": [
        63,
        79
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          94,
          96
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 7
          },
          "start": {
            "column": 14,
            "line": 7
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            84,
            87
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            91,
            92
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 7
            },
            "start": {
              "column": 11,
              "line": 7
            }
          }
        },
        "range": [
          84,
          92
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 7
          },
          "start": {
            "column": 4,
            "line": 7
          }
        }
      },
      "range": [
        80,
        96
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          113,
          115
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 9
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            102,
            103
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            108,
            111
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 9
            },
            "start": {
              "column": 10,
              "line": 9
            }
          }
        },
        "range": [
          102,
          111
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 9
          },
          "start": {
            "column": 4,
            "line": 9
          }
        }
      },
      "range": [
        98,
        115
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          131,
          133
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 10
          },
          "start": {
            "column": 15,
            "line": 10
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            120,
            123
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            128,
            129
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 10
            },
            "start": {
              "column": 12,
              "line": 10
            }
          }
        },
        "range": [
          120,
          129
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 10
          },
          "start": {
            "column": 4,
            "line": 10
          }
        }
      },
      "range": [
        116,
        133
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          149,
          151
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 12
          },
          "start": {
            "column": 14,
            "line": 12
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            139,
            140
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            144,
            147
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 12
            },
            "start": {
              "column": 9,
              "line": 12
            }
          }
        },
        "range": [
          139,
          147
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 12
          },
          "start": {
            "column": 4,
            "line": 12
          }
        }
      },
      "range": [
        135,
        151
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          166,
          168
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 13
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            156,
            159
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            163,
            164
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 13
            },
            "start": {
              "column": 11,
              "line": 13
            }
          }
        },
        "range": [
          156,
          164
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 13
          },
          "start": {
            "column": 4,
            "line": 13
          }
        }
      },
      "range": [
        152,
        168
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          189,
          191
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 15
          },
          "start": {
            "column": 19,
            "line": 15
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            174,
            175
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            182,
            185
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        },
        "range": [
          174,
          187
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 15
          },
          "start": {
            "column": 4,
            "line": 15
          }
        }
      },
      "range": [
        170,
        191
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          211,
          213
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 16
          },
          "start": {
            "column": 19,
            "line": 16
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            198,
            201
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            208,
            209
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 16
            },
            "start": {
              "column": 16,
              "line": 16
            }
          }
        },
        "range": [
          196,
          209
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 16
          },
          "start": {
            "column": 4,
            "line": 16
          }
        }
      },
      "range": [
        192,
        213
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          234,
          236
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 18
          },
          "start": {
            "column": 19,
            "line": 18
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            219,
            220
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            227,
            230
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 18
            },
            "start": {
              "column": 12,
              "line": 18
            }
          }
        },
        "range": [
          219,
          232
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 18
          },
          "start": {
            "column": 4,
            "line": 18
          }
        }
      },
      "range": [
        215,
        236
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          256,
          258
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 19
          },
          "start": {
            "column": 19,
            "line": 19
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            243,
            246
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            253,
            254
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
        "range": [
          241,
          254
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 19
          },
          "start": {
            "column": 4,
            "line": 19
          }
        }
      },
      "range": [
        237,
        258
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          277,
          279
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 21
          },
          "start": {
            "column": 17,
            "line": 21
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            264,
            267
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            272,
            275
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 21
            },
            "start": {
              "column": 12,
              "line": 21
            }
          }
        },
        "range": [
          264,
          275
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 21
          },
          "start": {
            "column": 4,
            "line": 21
          }
        }
      },
      "range": [
        260,
        279
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          297,
          299
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 22
          },
          "start": {
            "column": 17,
            "line": 22
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            284,
            287
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            292,
            295
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 22
            },
            "start": {
              "column": 12,
              "line": 22
            }
          }
        },
        "range": [
          284,
          295
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 22
          },
          "start": {
            "column": 4,
            "line": 22
          }
        }
      },
      "range": [
        280,
        299
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          317,
          319
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 24
          },
          "start": {
            "column": 16,
            "line": 24
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            305,
            308
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            312,
            315
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 24
            },
            "start": {
              "column": 11,
              "line": 24
            }
          }
        },
        "range": [
          305,
          315
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 24
          },
          "start": {
            "column": 4,
            "line": 24
          }
        }
      },
      "range": [
        301,
        319
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          336,
          338
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 25
          },
          "start": {
            "column": 16,
            "line": 25
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            324,
            327
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            331,
            334
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 25
            },
            "start": {
              "column": 11,
              "line": 25
            }
          }
        },
        "range": [
          324,
          334
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 25
          },
          "start": {
            "column": 4,
            "line": 25
          }
        }
      },
      "range": [
        320,
        338
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 28
                },
                "start": {
                  "column": 13,
                  "line": 28
                }
              },
              "range": [
                360,
                365
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  362,
                  365
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 28
                  },
                  "start": {
                    "column": 15,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              359,
              365
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 28
              },
              "start": {
                "column": 12,
                "line": 28
              }
            }
          },
          "init": null,
          "range": [
            359,
            365
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 28
            },
            "start": {
              "column": 12,
              "line": 28
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        347,
        366
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          388,
          390
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 29
          },
          "start": {
            "column": 21,
            "line": 29
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "range": [
            371,
            374
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                379,
                380
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 29
                },
                "start": {
                  "column": 12,
                  "line": 29
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                381,
                382
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 29
                },
                "start": {
                  "column": 14,
                  "line": 29
                }
              }
            },
            "range": [
              379,
              383
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 29
              },
              "start": {
                "column": 12,
                "line": 29
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              384,
              385
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 29
              },
              "start": {
                "column": 17,
                "line": 29
              }
            }
          },
          "range": [
            379,
            386
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 29
            },
            "start": {
              "column": 12,
              "line": 29
            }
          }
        },
        "range": [
          371,
          386
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 29
          },
          "start": {
            "column": 4,
            "line": 29
          }
        }
      },
      "range": [
        367,
        390
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  445,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 32
                  },
                  "start": {
                    "column": 11,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "range": [
                  455,
                  458
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 32
                  },
                  "start": {
                    "column": 21,
                    "line": 32
                  }
                }
              },
              "range": [
                445,
                458
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 32
                },
                "start": {
                  "column": 11,
                  "line": 32
                }
              }
            },
            "range": [
              438,
              459
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "range": [
          432,
          467
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 40,
            "line": 31
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
          401,
          403
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 31
              },
              "start": {
                "column": 17,
                "line": 31
              }
            },
            "range": [
              409,
              417
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                411,
                417
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 31
                },
                "start": {
                  "column": 19,
                  "line": 31
                }
              }
            }
          },
          "range": [
            404,
            417
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 31
            },
            "start": {
              "column": 12,
              "line": 31
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 31
              },
              "start": {
                "column": 30,
                "line": 31
              }
            },
            "range": [
              422,
              430
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                424,
                430
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 31
                },
                "start": {
                  "column": 32,
                  "line": 31
                }
              }
            }
          },
          "range": [
            419,
            430
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 31
            },
            "start": {
              "column": 27,
              "line": 31
            }
          }
        }
      ],
      "range": [
        392,
        467
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 31
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
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "range": [
                  522,
                  525
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 36
                  },
                  "start": {
                    "column": 11,
                    "line": 36
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  529,
                  534
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 36
                  },
                  "start": {
                    "column": 18,
                    "line": 36
                  }
                }
              },
              "range": [
                522,
                534
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 36
                },
                "start": {
                  "column": 11,
                  "line": 36
                }
              }
            },
            "range": [
              515,
              535
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          509,
          543
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 40,
            "line": 35
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
          478,
          480
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 35
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 35
              },
              "start": {
                "column": 17,
                "line": 35
              }
            },
            "range": [
              486,
              494
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                488,
                494
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 35
                },
                "start": {
                  "column": 19,
                  "line": 35
                }
              }
            }
          },
          "range": [
            481,
            494
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 35
            },
            "start": {
              "column": 12,
              "line": 35
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 35
              },
              "start": {
                "column": 30,
                "line": 35
              }
            },
            "range": [
              499,
              507
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                501,
                507
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 35
                },
                "start": {
                  "column": 32,
                  "line": 35
                }
              }
            }
          },
          "range": [
            496,
            507
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 35
            },
            "start": {
              "column": 27,
              "line": 35
            }
          }
        }
      ],
      "range": [
        469,
        543
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 35
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
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "range": [
                  583,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 40
                  },
                  "start": {
                    "column": 11,
                    "line": 40
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "range": [
                  591,
                  594
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 40
                  },
                  "start": {
                    "column": 19,
                    "line": 40
                  }
                }
              },
              "range": [
                583,
                594
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 40
                },
                "start": {
                  "column": 11,
                  "line": 40
                }
              }
            },
            "range": [
              576,
              595
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          570,
          603
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 25,
            "line": 39
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
          554,
          556
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 39
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 39
              },
              "start": {
                "column": 15,
                "line": 39
              }
            },
            "range": [
              560,
              568
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                562,
                568
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 39
                },
                "start": {
                  "column": 17,
                  "line": 39
                }
              }
            }
          },
          "range": [
            557,
            568
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 39
            },
            "start": {
              "column": 12,
              "line": 39
            }
          }
        }
      ],
      "range": [
        545,
        603
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 42
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
