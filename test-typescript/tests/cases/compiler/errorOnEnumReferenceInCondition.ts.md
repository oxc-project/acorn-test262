__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    411
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          10,
          40
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Zero",
              "optional": false,
              "range": [
                16,
                20
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                23,
                24
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              16,
              24
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
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "range": [
                30,
                33
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                36,
                37
              ],
              "loc": {
                "end": {
                  "column": 11,
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
              37
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nums",
        "optional": false,
        "range": [
          5,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "range": [
        0,
        40
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
            "name": "a",
            "optional": false,
            "range": [
              48,
              49
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "\"b\"",
              "value": "b",
              "range": [
                70,
                73
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 6
                },
                "start": {
                  "column": 28,
                  "line": 6
                }
              }
            },
            "consequent": {
              "type": "Literal",
              "raw": "\"a\"",
              "value": "a",
              "range": [
                64,
                67
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 22,
                  "line": 6
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nums",
                "optional": false,
                "range": [
                  52,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Zero",
                "optional": false,
                "range": [
                  57,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                }
              },
              "range": [
                52,
                61
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            "range": [
              52,
              73
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 6
              },
              "start": {
                "column": 10,
                "line": 6
              }
            }
          },
          "range": [
            48,
            73
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        42,
        74
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "b",
            "optional": false,
            "range": [
              81,
              82
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "\"b\"",
              "value": "b",
              "range": [
                102,
                105
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 27,
                  "line": 7
                }
              }
            },
            "consequent": {
              "type": "Literal",
              "raw": "\"a\"",
              "value": "a",
              "range": [
                96,
                99
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 7
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nums",
                "optional": false,
                "range": [
                  85,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "One",
                "optional": false,
                "range": [
                  90,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
                    "line": 7
                  }
                }
              },
              "range": [
                85,
                93
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "range": [
              85,
              105
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 10,
                "line": 7
              }
            }
          },
          "range": [
            81,
            105
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        75,
        106
      ],
      "loc": {
        "end": {
          "column": 31,
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
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "range": [
                148,
                152
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              148,
              153
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          142,
          155
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 12
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "range": [
                129,
                133
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              129,
              134
            ],
            "loc": {
              "end": {
                "column": 9,
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
          123,
          136
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 15,
            "line": 9
          }
        }
      },
      "test": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Nums",
          "optional": false,
          "range": [
            112,
            116
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Zero",
          "optional": false,
          "range": [
            117,
            121
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 9
            },
            "start": {
              "column": 9,
              "line": 9
            }
          }
        },
        "range": [
          112,
          121
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
        108,
        155
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "range": [
                197,
                201
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "range": [
              197,
              202
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          191,
          204
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "range": [
                178,
                182
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              178,
              183
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          172,
          185
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 14,
            "line": 17
          }
        }
      },
      "test": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Nums",
          "optional": false,
          "range": [
            162,
            166
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "One",
          "optional": false,
          "range": [
            167,
            170
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 17
            },
            "start": {
              "column": 9,
              "line": 17
            }
          }
        },
        "range": [
          162,
          170
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
      },
      "range": [
        158,
        204
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          217,
          249
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Empty",
              "optional": false,
              "range": [
                223,
                228
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
            },
            "initializer": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                231,
                233
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 26
                },
                "start": {
                  "column": 12,
                  "line": 26
                }
              }
            },
            "range": [
              223,
              233
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                239,
                240
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "\"A\"",
              "value": "A",
              "range": [
                243,
                246
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 27
                },
                "start": {
                  "column": 8,
                  "line": 27
                }
              }
            },
            "range": [
              239,
              246
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 10,
            "line": 25
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Strs",
        "optional": false,
        "range": [
          212,
          216
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 25
          },
          "start": {
            "column": 5,
            "line": 25
          }
        }
      },
      "range": [
        207,
        249
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
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
            "name": "c",
            "optional": false,
            "range": [
              257,
              258
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 30
              },
              "start": {
                "column": 6,
                "line": 30
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "\"b\"",
              "value": "b",
              "range": [
                280,
                283
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 30
                },
                "start": {
                  "column": 29,
                  "line": 30
                }
              }
            },
            "consequent": {
              "type": "Literal",
              "raw": "\"a\"",
              "value": "a",
              "range": [
                274,
                277
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 30
                },
                "start": {
                  "column": 23,
                  "line": 30
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Strs",
                "optional": false,
                "range": [
                  261,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Empty",
                "optional": false,
                "range": [
                  266,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 30
                  },
                  "start": {
                    "column": 15,
                    "line": 30
                  }
                }
              },
              "range": [
                261,
                271
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 30
                },
                "start": {
                  "column": 10,
                  "line": 30
                }
              }
            },
            "range": [
              261,
              283
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 30
              },
              "start": {
                "column": 10,
                "line": 30
              }
            }
          },
          "range": [
            257,
            283
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        251,
        284
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "d",
            "optional": false,
            "range": [
              291,
              292
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "\"b\"",
              "value": "b",
              "range": [
                310,
                313
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 31
                },
                "start": {
                  "column": 25,
                  "line": 31
                }
              }
            },
            "consequent": {
              "type": "Literal",
              "raw": "\"a\"",
              "value": "a",
              "range": [
                304,
                307
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 31
                },
                "start": {
                  "column": 19,
                  "line": 31
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Strs",
                "optional": false,
                "range": [
                  295,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 31
                  },
                  "start": {
                    "column": 10,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  300,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 31
                  },
                  "start": {
                    "column": 15,
                    "line": 31
                  }
                }
              },
              "range": [
                295,
                301
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 31
                },
                "start": {
                  "column": 10,
                  "line": 31
                }
              }
            },
            "range": [
              295,
              313
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 31
              },
              "start": {
                "column": 10,
                "line": 31
              }
            }
          },
          "range": [
            291,
            313
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 31
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        285,
        314
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "range": [
                357,
                361
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              357,
              362
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          351,
          364
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 5,
            "line": 36
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "range": [
                338,
                342
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              338,
              343
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          332,
          345
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 16,
            "line": 33
          }
        }
      },
      "test": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Strs",
          "optional": false,
          "range": [
            320,
            324
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Empty",
          "optional": false,
          "range": [
            325,
            330
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 33
            },
            "start": {
              "column": 9,
              "line": 33
            }
          }
        },
        "range": [
          320,
          330
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 33
          },
          "start": {
            "column": 4,
            "line": 33
          }
        }
      },
      "range": [
        316,
        364
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "range": [
                404,
                408
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              404,
              409
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          398,
          411
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 5,
            "line": 44
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "range": [
                385,
                389
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 42
                }
              }
            },
            "range": [
              385,
              390
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          }
        ],
        "range": [
          379,
          392
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 12,
            "line": 41
          }
        }
      },
      "test": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Strs",
          "optional": false,
          "range": [
            371,
            375
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 41
            },
            "start": {
              "column": 4,
              "line": 41
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            376,
            377
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 41
            },
            "start": {
              "column": 9,
              "line": 41
            }
          }
        },
        "range": [
          371,
          377
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 41
          },
          "start": {
            "column": 4,
            "line": 41
          }
        }
      },
      "range": [
        367,
        411
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
