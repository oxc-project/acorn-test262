__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    526
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                27,
                28
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            "range": [
              21,
              29
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          15,
          31
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 15,
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
        "name": "fn",
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            12,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
        "type": "ArrowFunctionExpression",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ThrowStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  54,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                48,
                56
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            46,
            58
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                38,
                41
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    40,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 5
                    },
                    "start": {
                      "column": 7,
                      "line": 5
                    }
                  }
                },
                "range": [
                  40,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              37,
              41
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 3,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          },
          "range": [
            33,
            36
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  34,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 5
                  },
                  "start": {
                    "column": 1,
                    "line": 5
                  }
                }
              },
              "out": false,
              "range": [
                34,
                35
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 5
                },
                "start": {
                  "column": 1,
                  "line": 5
                }
              }
            }
          ]
        },
        "range": [
          33,
          58
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        33,
        58
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                65,
                73
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  67,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              64,
              73
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            64,
            73
          ],
          "loc": {
            "end": {
              "column": 13,
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
        60,
        74
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "ThrowStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  116,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 10
                  },
                  "start": {
                    "column": 14,
                    "line": 10
                  }
                }
              },
              "range": [
                110,
                118
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            }
          ],
          "test": {
            "type": "Literal",
            "raw": "'a'",
            "value": "a",
            "range": [
              97,
              100
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "range": [
            92,
            118
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "ThrowStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  146,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 14,
                    "line": 12
                  }
                }
              },
              "range": [
                140,
                148
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            }
          ],
          "test": null,
          "range": [
            123,
            148
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "range": [
          83,
          84
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 8
          },
          "start": {
            "column": 8,
            "line": 8
          }
        }
      },
      "range": [
        75,
        150
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
            "name": "z",
            "optional": false,
            "range": [
              156,
              157
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
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              160,
              161
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          },
          "range": [
            156,
            161
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        152,
        162
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                190,
                191
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 17
                },
                "start": {
                  "column": 10,
                  "line": 17
                }
              }
            },
            "range": [
              184,
              192
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          178,
          194
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 15,
            "line": 16
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "range": [
            170,
            171
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 16
            },
            "start": {
              "column": 7,
              "line": 16
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            174,
            176
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 16
            },
            "start": {
              "column": 11,
              "line": 16
            }
          }
        },
        "range": [
          170,
          176
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "range": [
        163,
        194
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                223,
                224
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 20
                },
                "start": {
                  "column": 27,
                  "line": 20
                }
              }
            },
            "range": [
              217,
              225
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 20
              },
              "start": {
                "column": 21,
                "line": 20
              }
            }
          }
        ],
        "range": [
          215,
          227
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 20
          },
          "start": {
            "column": 19,
            "line": 20
          }
        }
      },
      "init": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                205,
                206
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                209,
                210
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 20
                },
                "start": {
                  "column": 13,
                  "line": 20
                }
              }
            },
            "range": [
              205,
              210
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 20
              },
              "start": {
                "column": 9,
                "line": 20
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          201,
          210
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "test": null,
      "update": null,
      "range": [
        196,
        227
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "idx",
              "optional": false,
              "range": [
                257,
                260
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 22
                },
                "start": {
                  "column": 28,
                  "line": 22
                }
              }
            },
            "range": [
              251,
              261
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 22
              },
              "start": {
                "column": 22,
                "line": 22
              }
            }
          }
        ],
        "range": [
          249,
          263
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 22
          },
          "start": {
            "column": 20,
            "line": 22
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
              "name": "idx",
              "optional": false,
              "range": [
                238,
                241
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "init": null,
            "range": [
              238,
              241
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          234,
          241
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
          }
        }
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "range": [
          245,
          247
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 22
          },
          "start": {
            "column": 16,
            "line": 22
          }
        }
      },
      "range": [
        229,
        263
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                276,
                280
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "range": [
              270,
              281
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 24
              },
              "start": {
                "column": 5,
                "line": 24
              }
            }
          }
        ],
        "range": [
          268,
          283
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 24
          },
          "start": {
            "column": 3,
            "line": 24
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          289,
          293
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 24
          },
          "start": {
            "column": 24,
            "line": 24
          }
        }
      },
      "range": [
        265,
        294
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "j",
            "optional": false,
            "range": [
              300,
              301
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              304,
              305
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 26
              },
              "start": {
                "column": 8,
                "line": 26
              }
            }
          },
          "range": [
            300,
            305
          ],
          "loc": {
            "end": {
              "column": 9,
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
      "kind": "var",
      "range": [
        296,
        306
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "range": [
                329,
                330
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 27
                },
                "start": {
                  "column": 22,
                  "line": 27
                }
              }
            },
            "range": [
              323,
              331
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
        "range": [
          321,
          333
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 27
          },
          "start": {
            "column": 14,
            "line": 27
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "range": [
            314,
            315
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 27
            },
            "start": {
              "column": 7,
              "line": 27
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            318,
            319
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 27
            },
            "start": {
              "column": 11,
              "line": 27
            }
          }
        },
        "range": [
          314,
          319
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 27
          },
          "start": {
            "column": 7,
            "line": 27
          }
        }
      },
      "range": [
        307,
        333
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          346,
          462
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                360,
                365
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 30
                },
                "start": {
                  "column": 12,
                  "line": 30
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 30
                },
                "start": {
                  "column": 17,
                  "line": 30
                }
              },
              "range": [
                365,
                368
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    367,
                    368
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 30
                    },
                    "start": {
                      "column": 19,
                      "line": 30
                    }
                  }
                },
                "range": [
                  367,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 30
                  },
                  "start": {
                    "column": 19,
                    "line": 30
                  }
                }
              }
            },
            "value": null,
            "range": [
              352,
              369
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "biz",
              "optional": false,
              "range": [
                374,
                377
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
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
                377,
                413
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          396,
                          400
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 32
                          },
                          "start": {
                            "column": 14,
                            "line": 32
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          401,
                          406
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 32
                          },
                          "start": {
                            "column": 19,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        396,
                        406
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 32
                        },
                        "start": {
                          "column": 14,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      390,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  380,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
                  },
                  "start": {
                    "column": 10,
                    "line": 31
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
                  "line": 33
                },
                "start": {
                  "column": 7,
                  "line": 31
                }
              }
            },
            "range": [
              374,
              413
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                419,
                430
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                430,
                460
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "range": [
                        449,
                        453
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 36
                        },
                        "start": {
                          "column": 14,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      443,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  433,
                  460
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 37
                  },
                  "start": {
                    "column": 18,
                    "line": 35
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
                  "line": 37
                },
                "start": {
                  "column": 15,
                  "line": 35
                }
              }
            },
            "range": [
              419,
              460
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 11,
            "line": 29
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          341,
          342
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 29
          },
          "start": {
            "column": 6,
            "line": 29
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 29
          },
          "start": {
            "column": 7,
            "line": 29
          }
        },
        "range": [
          342,
          345
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                343,
                344
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              343,
              344
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 29
              },
              "start": {
                "column": 8,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        335,
        462
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "aa",
            "optional": false,
            "range": [
              468,
              470
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "range": [
                    479,
                    481
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 41
                    },
                    "start": {
                      "column": 4,
                      "line": 41
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "12",
                  "value": 12,
                  "range": [
                    482,
                    484
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 41
                    },
                    "start": {
                      "column": 7,
                      "line": 41
                    }
                  }
                },
                "range": [
                  479,
                  484
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "biz",
                  "optional": false,
                  "range": [
                    490,
                    493
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 42
                    },
                    "start": {
                      "column": 4,
                      "line": 42
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    493,
                    523
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "ThisExpression",
                          "range": [
                            512,
                            516
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 43
                            },
                            "start": {
                              "column": 14,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          506,
                          517
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 43
                          },
                          "start": {
                            "column": 8,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "range": [
                      496,
                      523
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 44
                      },
                      "start": {
                        "column": 10,
                        "line": 42
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
                      "line": 44
                    },
                    "start": {
                      "column": 7,
                      "line": 42
                    }
                  }
                },
                "range": [
                  490,
                  523
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 42
                  }
                }
              }
            ],
            "range": [
              473,
              525
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 45
              },
              "start": {
                "column": 9,
                "line": 40
              }
            }
          },
          "range": [
            468,
            525
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 45
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        464,
        525
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 46
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
