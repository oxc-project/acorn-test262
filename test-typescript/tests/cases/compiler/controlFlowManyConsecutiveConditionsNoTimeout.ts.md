__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3848
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        40
      ],
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "body": {
          "type": "TSEnumBody",
          "range": [
            19,
            40
          ],
          "members": [
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "One",
                "optional": false,
                "range": [
                  25,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "range": [
                25,
                28
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                "name": "Two",
                "optional": false,
                "range": [
                  34,
                  37
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
              "range": [
                34,
                37
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
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Choice",
          "optional": false,
          "range": [
            12,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "range": [
          7,
          40
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
            "name": "choice",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              },
              "range": [
                54,
                62
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    56,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 6
                    },
                    "start": {
                      "column": 14,
                      "line": 6
                    }
                  }
                },
                "range": [
                  56,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 6
                  },
                  "start": {
                    "column": 14,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              48,
              62
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Choice",
              "optional": false,
              "range": [
                65,
                71
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
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
                72,
                75
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 6
                },
                "start": {
                  "column": 30,
                  "line": 6
                }
              }
            },
            "range": [
              65,
              75
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 6
              },
              "start": {
                "column": 23,
                "line": 6
              }
            }
          },
          "range": [
            48,
            75
          ],
          "loc": {
            "end": {
              "column": 33,
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
        76
      ],
      "loc": {
        "end": {
          "column": 34,
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
            "name": "choiceOne",
            "optional": false,
            "range": [
              83,
              92
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Choice",
              "optional": false,
              "range": [
                95,
                101
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 18,
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
                102,
                105
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            },
            "range": [
              95,
              105
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
              }
            }
          },
          "range": [
            83,
            105
          ],
          "loc": {
            "end": {
              "column": 28,
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
        77,
        106
      ],
      "loc": {
        "end": {
          "column": 29,
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
          134,
          136
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 9
          },
          "start": {
            "column": 26,
            "line": 9
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            112,
            118
          ],
          "loc": {
            "end": {
              "column": 10,
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
          "name": "choiceOne",
          "optional": false,
          "range": [
            123,
            132
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 9
            },
            "start": {
              "column": 15,
              "line": 9
            }
          }
        },
        "range": [
          112,
          132
        ],
        "loc": {
          "end": {
            "column": 24,
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
        136
      ],
      "loc": {
        "end": {
          "column": 28,
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
          163,
          165
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 10
          },
          "start": {
            "column": 26,
            "line": 10
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            141,
            147
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            152,
            161
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 10
            },
            "start": {
              "column": 15,
              "line": 10
            }
          }
        },
        "range": [
          141,
          161
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 10
          },
          "start": {
            "column": 4,
            "line": 10
          }
        }
      },
      "range": [
        137,
        165
      ],
      "loc": {
        "end": {
          "column": 28,
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
          192,
          194
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 11
          },
          "start": {
            "column": 26,
            "line": 11
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            170,
            176
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            181,
            190
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 11
            },
            "start": {
              "column": 15,
              "line": 11
            }
          }
        },
        "range": [
          170,
          190
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 11
          },
          "start": {
            "column": 4,
            "line": 11
          }
        }
      },
      "range": [
        166,
        194
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
          221,
          223
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 12
          },
          "start": {
            "column": 26,
            "line": 12
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            199,
            205
          ],
          "loc": {
            "end": {
              "column": 10,
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
          "name": "choiceOne",
          "optional": false,
          "range": [
            210,
            219
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 12
            },
            "start": {
              "column": 15,
              "line": 12
            }
          }
        },
        "range": [
          199,
          219
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 12
          },
          "start": {
            "column": 4,
            "line": 12
          }
        }
      },
      "range": [
        195,
        223
      ],
      "loc": {
        "end": {
          "column": 28,
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
          250,
          252
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 13
          },
          "start": {
            "column": 26,
            "line": 13
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            228,
            234
          ],
          "loc": {
            "end": {
              "column": 10,
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
          "name": "choiceOne",
          "optional": false,
          "range": [
            239,
            248
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 13
            },
            "start": {
              "column": 15,
              "line": 13
            }
          }
        },
        "range": [
          228,
          248
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 13
          },
          "start": {
            "column": 4,
            "line": 13
          }
        }
      },
      "range": [
        224,
        252
      ],
      "loc": {
        "end": {
          "column": 28,
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
          279,
          281
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 14
          },
          "start": {
            "column": 26,
            "line": 14
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            257,
            263
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            268,
            277
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 14
            },
            "start": {
              "column": 15,
              "line": 14
            }
          }
        },
        "range": [
          257,
          277
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 14
          },
          "start": {
            "column": 4,
            "line": 14
          }
        }
      },
      "range": [
        253,
        281
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
          308,
          310
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 15
          },
          "start": {
            "column": 26,
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
          "name": "choice",
          "optional": false,
          "range": [
            286,
            292
          ],
          "loc": {
            "end": {
              "column": 10,
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
          "name": "choiceOne",
          "optional": false,
          "range": [
            297,
            306
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 15
            },
            "start": {
              "column": 15,
              "line": 15
            }
          }
        },
        "range": [
          286,
          306
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 15
          },
          "start": {
            "column": 4,
            "line": 15
          }
        }
      },
      "range": [
        282,
        310
      ],
      "loc": {
        "end": {
          "column": 28,
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
          337,
          339
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 16
          },
          "start": {
            "column": 26,
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
          "name": "choice",
          "optional": false,
          "range": [
            315,
            321
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            326,
            335
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 16
            },
            "start": {
              "column": 15,
              "line": 16
            }
          }
        },
        "range": [
          315,
          335
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 16
          },
          "start": {
            "column": 4,
            "line": 16
          }
        }
      },
      "range": [
        311,
        339
      ],
      "loc": {
        "end": {
          "column": 28,
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
          366,
          368
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 17
          },
          "start": {
            "column": 26,
            "line": 17
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            344,
            350
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            355,
            364
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 17
            },
            "start": {
              "column": 15,
              "line": 17
            }
          }
        },
        "range": [
          344,
          364
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 17
          },
          "start": {
            "column": 4,
            "line": 17
          }
        }
      },
      "range": [
        340,
        368
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
          395,
          397
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 18
          },
          "start": {
            "column": 26,
            "line": 18
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            373,
            379
          ],
          "loc": {
            "end": {
              "column": 10,
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
          "name": "choiceOne",
          "optional": false,
          "range": [
            384,
            393
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 18
            },
            "start": {
              "column": 15,
              "line": 18
            }
          }
        },
        "range": [
          373,
          393
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 18
          },
          "start": {
            "column": 4,
            "line": 18
          }
        }
      },
      "range": [
        369,
        397
      ],
      "loc": {
        "end": {
          "column": 28,
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
          424,
          426
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 19
          },
          "start": {
            "column": 26,
            "line": 19
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            402,
            408
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            413,
            422
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 19
            },
            "start": {
              "column": 15,
              "line": 19
            }
          }
        },
        "range": [
          402,
          422
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 19
          },
          "start": {
            "column": 4,
            "line": 19
          }
        }
      },
      "range": [
        398,
        426
      ],
      "loc": {
        "end": {
          "column": 28,
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
          453,
          455
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 20
          },
          "start": {
            "column": 26,
            "line": 20
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            431,
            437
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            442,
            451
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 20
            },
            "start": {
              "column": 15,
              "line": 20
            }
          }
        },
        "range": [
          431,
          451
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 20
          },
          "start": {
            "column": 4,
            "line": 20
          }
        }
      },
      "range": [
        427,
        455
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
          482,
          484
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 21
          },
          "start": {
            "column": 26,
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
          "name": "choice",
          "optional": false,
          "range": [
            460,
            466
          ],
          "loc": {
            "end": {
              "column": 10,
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
          "name": "choiceOne",
          "optional": false,
          "range": [
            471,
            480
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 21
            },
            "start": {
              "column": 15,
              "line": 21
            }
          }
        },
        "range": [
          460,
          480
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 21
          },
          "start": {
            "column": 4,
            "line": 21
          }
        }
      },
      "range": [
        456,
        484
      ],
      "loc": {
        "end": {
          "column": 28,
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
          511,
          513
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 22
          },
          "start": {
            "column": 26,
            "line": 22
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            489,
            495
          ],
          "loc": {
            "end": {
              "column": 10,
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
          "name": "choiceOne",
          "optional": false,
          "range": [
            500,
            509
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 22
            },
            "start": {
              "column": 15,
              "line": 22
            }
          }
        },
        "range": [
          489,
          509
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 22
          },
          "start": {
            "column": 4,
            "line": 22
          }
        }
      },
      "range": [
        485,
        513
      ],
      "loc": {
        "end": {
          "column": 28,
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
          540,
          542
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 23
          },
          "start": {
            "column": 26,
            "line": 23
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            518,
            524
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            529,
            538
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 23
            },
            "start": {
              "column": 15,
              "line": 23
            }
          }
        },
        "range": [
          518,
          538
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 23
          },
          "start": {
            "column": 4,
            "line": 23
          }
        }
      },
      "range": [
        514,
        542
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
          569,
          571
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 24
          },
          "start": {
            "column": 26,
            "line": 24
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            547,
            553
          ],
          "loc": {
            "end": {
              "column": 10,
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
          "name": "choiceOne",
          "optional": false,
          "range": [
            558,
            567
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 24
            },
            "start": {
              "column": 15,
              "line": 24
            }
          }
        },
        "range": [
          547,
          567
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 24
          },
          "start": {
            "column": 4,
            "line": 24
          }
        }
      },
      "range": [
        543,
        571
      ],
      "loc": {
        "end": {
          "column": 28,
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
          598,
          600
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 25
          },
          "start": {
            "column": 26,
            "line": 25
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            576,
            582
          ],
          "loc": {
            "end": {
              "column": 10,
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
          "name": "choiceOne",
          "optional": false,
          "range": [
            587,
            596
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 25
            },
            "start": {
              "column": 15,
              "line": 25
            }
          }
        },
        "range": [
          576,
          596
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 25
          },
          "start": {
            "column": 4,
            "line": 25
          }
        }
      },
      "range": [
        572,
        600
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
          627,
          629
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 26
          },
          "start": {
            "column": 26,
            "line": 26
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            605,
            611
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            616,
            625
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 26
            },
            "start": {
              "column": 15,
              "line": 26
            }
          }
        },
        "range": [
          605,
          625
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 26
          },
          "start": {
            "column": 4,
            "line": 26
          }
        }
      },
      "range": [
        601,
        629
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
          656,
          658
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 27
          },
          "start": {
            "column": 26,
            "line": 27
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            634,
            640
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            645,
            654
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 27
            },
            "start": {
              "column": 15,
              "line": 27
            }
          }
        },
        "range": [
          634,
          654
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 27
          },
          "start": {
            "column": 4,
            "line": 27
          }
        }
      },
      "range": [
        630,
        658
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
          685,
          687
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 28
          },
          "start": {
            "column": 26,
            "line": 28
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            663,
            669
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            674,
            683
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 28
            },
            "start": {
              "column": 15,
              "line": 28
            }
          }
        },
        "range": [
          663,
          683
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 28
          },
          "start": {
            "column": 4,
            "line": 28
          }
        }
      },
      "range": [
        659,
        687
      ],
      "loc": {
        "end": {
          "column": 28,
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
          714,
          716
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 29
          },
          "start": {
            "column": 26,
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
          "name": "choice",
          "optional": false,
          "range": [
            692,
            698
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            703,
            712
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 29
            },
            "start": {
              "column": 15,
              "line": 29
            }
          }
        },
        "range": [
          692,
          712
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 29
          },
          "start": {
            "column": 4,
            "line": 29
          }
        }
      },
      "range": [
        688,
        716
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
          743,
          745
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 30
          },
          "start": {
            "column": 26,
            "line": 30
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            721,
            727
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            732,
            741
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 30
            },
            "start": {
              "column": 15,
              "line": 30
            }
          }
        },
        "range": [
          721,
          741
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 30
          },
          "start": {
            "column": 4,
            "line": 30
          }
        }
      },
      "range": [
        717,
        745
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
          772,
          774
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 31
          },
          "start": {
            "column": 26,
            "line": 31
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            750,
            756
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            761,
            770
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 31
            },
            "start": {
              "column": 15,
              "line": 31
            }
          }
        },
        "range": [
          750,
          770
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 31
          },
          "start": {
            "column": 4,
            "line": 31
          }
        }
      },
      "range": [
        746,
        774
      ],
      "loc": {
        "end": {
          "column": 28,
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
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          801,
          803
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 32
          },
          "start": {
            "column": 26,
            "line": 32
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            779,
            785
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            790,
            799
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 32
            },
            "start": {
              "column": 15,
              "line": 32
            }
          }
        },
        "range": [
          779,
          799
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 32
          },
          "start": {
            "column": 4,
            "line": 32
          }
        }
      },
      "range": [
        775,
        803
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
          830,
          832
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 33
          },
          "start": {
            "column": 26,
            "line": 33
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            808,
            814
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            819,
            828
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 33
            },
            "start": {
              "column": 15,
              "line": 33
            }
          }
        },
        "range": [
          808,
          828
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 33
          },
          "start": {
            "column": 4,
            "line": 33
          }
        }
      },
      "range": [
        804,
        832
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
          859,
          861
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 34
          },
          "start": {
            "column": 26,
            "line": 34
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            837,
            843
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            848,
            857
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 34
            },
            "start": {
              "column": 15,
              "line": 34
            }
          }
        },
        "range": [
          837,
          857
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 34
          },
          "start": {
            "column": 4,
            "line": 34
          }
        }
      },
      "range": [
        833,
        861
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
          888,
          890
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 35
          },
          "start": {
            "column": 26,
            "line": 35
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            866,
            872
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            877,
            886
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 35
            },
            "start": {
              "column": 15,
              "line": 35
            }
          }
        },
        "range": [
          866,
          886
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 35
          },
          "start": {
            "column": 4,
            "line": 35
          }
        }
      },
      "range": [
        862,
        890
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
          917,
          919
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 36
          },
          "start": {
            "column": 26,
            "line": 36
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            895,
            901
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            906,
            915
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 36
            },
            "start": {
              "column": 15,
              "line": 36
            }
          }
        },
        "range": [
          895,
          915
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
      },
      "range": [
        891,
        919
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
          946,
          948
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 37
          },
          "start": {
            "column": 26,
            "line": 37
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            924,
            930
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 37
            },
            "start": {
              "column": 4,
              "line": 37
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            935,
            944
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 37
            },
            "start": {
              "column": 15,
              "line": 37
            }
          }
        },
        "range": [
          924,
          944
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 37
          },
          "start": {
            "column": 4,
            "line": 37
          }
        }
      },
      "range": [
        920,
        948
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
          975,
          977
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 38
          },
          "start": {
            "column": 26,
            "line": 38
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            953,
            959
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 38
            },
            "start": {
              "column": 4,
              "line": 38
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            964,
            973
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 38
            },
            "start": {
              "column": 15,
              "line": 38
            }
          }
        },
        "range": [
          953,
          973
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 38
          },
          "start": {
            "column": 4,
            "line": 38
          }
        }
      },
      "range": [
        949,
        977
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
          1004,
          1006
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 39
          },
          "start": {
            "column": 26,
            "line": 39
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            982,
            988
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 39
            },
            "start": {
              "column": 4,
              "line": 39
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            993,
            1002
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 39
            },
            "start": {
              "column": 15,
              "line": 39
            }
          }
        },
        "range": [
          982,
          1002
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 39
          },
          "start": {
            "column": 4,
            "line": 39
          }
        }
      },
      "range": [
        978,
        1006
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
          1033,
          1035
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 40
          },
          "start": {
            "column": 26,
            "line": 40
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1011,
            1017
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1022,
            1031
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 40
            },
            "start": {
              "column": 15,
              "line": 40
            }
          }
        },
        "range": [
          1011,
          1031
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 40
          },
          "start": {
            "column": 4,
            "line": 40
          }
        }
      },
      "range": [
        1007,
        1035
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
          1062,
          1064
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 41
          },
          "start": {
            "column": 26,
            "line": 41
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1040,
            1046
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1051,
            1060
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 41
            },
            "start": {
              "column": 15,
              "line": 41
            }
          }
        },
        "range": [
          1040,
          1060
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 41
          },
          "start": {
            "column": 4,
            "line": 41
          }
        }
      },
      "range": [
        1036,
        1064
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
          1091,
          1093
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 42
          },
          "start": {
            "column": 26,
            "line": 42
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1069,
            1075
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 42
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1080,
            1089
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 42
            },
            "start": {
              "column": 15,
              "line": 42
            }
          }
        },
        "range": [
          1069,
          1089
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 42
          },
          "start": {
            "column": 4,
            "line": 42
          }
        }
      },
      "range": [
        1065,
        1093
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
          1120,
          1122
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 43
          },
          "start": {
            "column": 26,
            "line": 43
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1098,
            1104
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1109,
            1118
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 43
            },
            "start": {
              "column": 15,
              "line": 43
            }
          }
        },
        "range": [
          1098,
          1118
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 43
          },
          "start": {
            "column": 4,
            "line": 43
          }
        }
      },
      "range": [
        1094,
        1122
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
          1149,
          1151
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 44
          },
          "start": {
            "column": 26,
            "line": 44
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1127,
            1133
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 44
            },
            "start": {
              "column": 4,
              "line": 44
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1138,
            1147
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 44
            },
            "start": {
              "column": 15,
              "line": 44
            }
          }
        },
        "range": [
          1127,
          1147
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 44
          },
          "start": {
            "column": 4,
            "line": 44
          }
        }
      },
      "range": [
        1123,
        1151
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
          1178,
          1180
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 45
          },
          "start": {
            "column": 26,
            "line": 45
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1156,
            1162
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 45
            },
            "start": {
              "column": 4,
              "line": 45
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1167,
            1176
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 45
            },
            "start": {
              "column": 15,
              "line": 45
            }
          }
        },
        "range": [
          1156,
          1176
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 45
          },
          "start": {
            "column": 4,
            "line": 45
          }
        }
      },
      "range": [
        1152,
        1180
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
          1207,
          1209
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 46
          },
          "start": {
            "column": 26,
            "line": 46
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1185,
            1191
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 46
            },
            "start": {
              "column": 4,
              "line": 46
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1196,
            1205
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 46
            },
            "start": {
              "column": 15,
              "line": 46
            }
          }
        },
        "range": [
          1185,
          1205
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 46
          },
          "start": {
            "column": 4,
            "line": 46
          }
        }
      },
      "range": [
        1181,
        1209
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
          1236,
          1238
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 47
          },
          "start": {
            "column": 26,
            "line": 47
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1214,
            1220
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 47
            },
            "start": {
              "column": 4,
              "line": 47
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1225,
            1234
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 47
            },
            "start": {
              "column": 15,
              "line": 47
            }
          }
        },
        "range": [
          1214,
          1234
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 47
          },
          "start": {
            "column": 4,
            "line": 47
          }
        }
      },
      "range": [
        1210,
        1238
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
          1265,
          1267
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 48
          },
          "start": {
            "column": 26,
            "line": 48
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1243,
            1249
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 48
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1254,
            1263
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 48
            },
            "start": {
              "column": 15,
              "line": 48
            }
          }
        },
        "range": [
          1243,
          1263
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 48
          },
          "start": {
            "column": 4,
            "line": 48
          }
        }
      },
      "range": [
        1239,
        1267
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
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
          1294,
          1296
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 49
          },
          "start": {
            "column": 26,
            "line": 49
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1272,
            1278
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 49
            },
            "start": {
              "column": 4,
              "line": 49
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1283,
            1292
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 49
            },
            "start": {
              "column": 15,
              "line": 49
            }
          }
        },
        "range": [
          1272,
          1292
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 49
          },
          "start": {
            "column": 4,
            "line": 49
          }
        }
      },
      "range": [
        1268,
        1296
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
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
          1323,
          1325
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 50
          },
          "start": {
            "column": 26,
            "line": 50
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1301,
            1307
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 50
            },
            "start": {
              "column": 4,
              "line": 50
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1312,
            1321
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 50
            },
            "start": {
              "column": 15,
              "line": 50
            }
          }
        },
        "range": [
          1301,
          1321
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 50
          },
          "start": {
            "column": 4,
            "line": 50
          }
        }
      },
      "range": [
        1297,
        1325
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
          1352,
          1354
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 51
          },
          "start": {
            "column": 26,
            "line": 51
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1330,
            1336
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 51
            },
            "start": {
              "column": 4,
              "line": 51
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1341,
            1350
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 51
            },
            "start": {
              "column": 15,
              "line": 51
            }
          }
        },
        "range": [
          1330,
          1350
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 51
          },
          "start": {
            "column": 4,
            "line": 51
          }
        }
      },
      "range": [
        1326,
        1354
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
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
          1381,
          1383
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 52
          },
          "start": {
            "column": 26,
            "line": 52
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1359,
            1365
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 52
            },
            "start": {
              "column": 4,
              "line": 52
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1370,
            1379
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 52
            },
            "start": {
              "column": 15,
              "line": 52
            }
          }
        },
        "range": [
          1359,
          1379
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 52
          },
          "start": {
            "column": 4,
            "line": 52
          }
        }
      },
      "range": [
        1355,
        1383
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
          1410,
          1412
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 53
          },
          "start": {
            "column": 26,
            "line": 53
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1388,
            1394
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 53
            },
            "start": {
              "column": 4,
              "line": 53
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1399,
            1408
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 53
            },
            "start": {
              "column": 15,
              "line": 53
            }
          }
        },
        "range": [
          1388,
          1408
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 53
          },
          "start": {
            "column": 4,
            "line": 53
          }
        }
      },
      "range": [
        1384,
        1412
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
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
          1439,
          1441
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 54
          },
          "start": {
            "column": 26,
            "line": 54
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1417,
            1423
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 54
            },
            "start": {
              "column": 4,
              "line": 54
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1428,
            1437
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 54
            },
            "start": {
              "column": 15,
              "line": 54
            }
          }
        },
        "range": [
          1417,
          1437
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 54
          },
          "start": {
            "column": 4,
            "line": 54
          }
        }
      },
      "range": [
        1413,
        1441
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
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
          1468,
          1470
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 55
          },
          "start": {
            "column": 26,
            "line": 55
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1446,
            1452
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 55
            },
            "start": {
              "column": 4,
              "line": 55
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1457,
            1466
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 55
            },
            "start": {
              "column": 15,
              "line": 55
            }
          }
        },
        "range": [
          1446,
          1466
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 55
          },
          "start": {
            "column": 4,
            "line": 55
          }
        }
      },
      "range": [
        1442,
        1470
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
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
          1497,
          1499
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 56
          },
          "start": {
            "column": 26,
            "line": 56
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1475,
            1481
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 56
            },
            "start": {
              "column": 4,
              "line": 56
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1486,
            1495
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 56
            },
            "start": {
              "column": 15,
              "line": 56
            }
          }
        },
        "range": [
          1475,
          1495
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 56
          },
          "start": {
            "column": 4,
            "line": 56
          }
        }
      },
      "range": [
        1471,
        1499
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
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
          1526,
          1528
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 57
          },
          "start": {
            "column": 26,
            "line": 57
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1504,
            1510
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 57
            },
            "start": {
              "column": 4,
              "line": 57
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1515,
            1524
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 57
            },
            "start": {
              "column": 15,
              "line": 57
            }
          }
        },
        "range": [
          1504,
          1524
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 57
          },
          "start": {
            "column": 4,
            "line": 57
          }
        }
      },
      "range": [
        1500,
        1528
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
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
          1555,
          1557
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 58
          },
          "start": {
            "column": 26,
            "line": 58
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1533,
            1539
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 58
            },
            "start": {
              "column": 4,
              "line": 58
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1544,
            1553
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 58
            },
            "start": {
              "column": 15,
              "line": 58
            }
          }
        },
        "range": [
          1533,
          1553
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 58
          },
          "start": {
            "column": 4,
            "line": 58
          }
        }
      },
      "range": [
        1529,
        1557
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
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
          1584,
          1586
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 59
          },
          "start": {
            "column": 26,
            "line": 59
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1562,
            1568
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 59
            },
            "start": {
              "column": 4,
              "line": 59
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1573,
            1582
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 59
            },
            "start": {
              "column": 15,
              "line": 59
            }
          }
        },
        "range": [
          1562,
          1582
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 59
          },
          "start": {
            "column": 4,
            "line": 59
          }
        }
      },
      "range": [
        1558,
        1586
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
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
          1613,
          1615
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 60
          },
          "start": {
            "column": 26,
            "line": 60
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1591,
            1597
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 60
            },
            "start": {
              "column": 4,
              "line": 60
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1602,
            1611
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 60
            },
            "start": {
              "column": 15,
              "line": 60
            }
          }
        },
        "range": [
          1591,
          1611
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 60
          },
          "start": {
            "column": 4,
            "line": 60
          }
        }
      },
      "range": [
        1587,
        1615
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
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
          1642,
          1644
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 61
          },
          "start": {
            "column": 26,
            "line": 61
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1620,
            1626
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 61
            },
            "start": {
              "column": 4,
              "line": 61
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1631,
            1640
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 61
            },
            "start": {
              "column": 15,
              "line": 61
            }
          }
        },
        "range": [
          1620,
          1640
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 61
          },
          "start": {
            "column": 4,
            "line": 61
          }
        }
      },
      "range": [
        1616,
        1644
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
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
          1671,
          1673
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 62
          },
          "start": {
            "column": 26,
            "line": 62
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1649,
            1655
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 62
            },
            "start": {
              "column": 4,
              "line": 62
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1660,
            1669
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 62
            },
            "start": {
              "column": 15,
              "line": 62
            }
          }
        },
        "range": [
          1649,
          1669
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 62
          },
          "start": {
            "column": 4,
            "line": 62
          }
        }
      },
      "range": [
        1645,
        1673
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
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
          1700,
          1702
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 63
          },
          "start": {
            "column": 26,
            "line": 63
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1678,
            1684
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 63
            },
            "start": {
              "column": 4,
              "line": 63
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1689,
            1698
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 63
            },
            "start": {
              "column": 15,
              "line": 63
            }
          }
        },
        "range": [
          1678,
          1698
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 63
          },
          "start": {
            "column": 4,
            "line": 63
          }
        }
      },
      "range": [
        1674,
        1702
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
          1729,
          1731
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 64
          },
          "start": {
            "column": 26,
            "line": 64
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1707,
            1713
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 64
            },
            "start": {
              "column": 4,
              "line": 64
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1718,
            1727
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 64
            },
            "start": {
              "column": 15,
              "line": 64
            }
          }
        },
        "range": [
          1707,
          1727
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 64
          },
          "start": {
            "column": 4,
            "line": 64
          }
        }
      },
      "range": [
        1703,
        1731
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
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
          1758,
          1760
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 65
          },
          "start": {
            "column": 26,
            "line": 65
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1736,
            1742
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 65
            },
            "start": {
              "column": 4,
              "line": 65
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1747,
            1756
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 65
            },
            "start": {
              "column": 15,
              "line": 65
            }
          }
        },
        "range": [
          1736,
          1756
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 65
          },
          "start": {
            "column": 4,
            "line": 65
          }
        }
      },
      "range": [
        1732,
        1760
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
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
          1787,
          1789
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 66
          },
          "start": {
            "column": 26,
            "line": 66
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1765,
            1771
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 66
            },
            "start": {
              "column": 4,
              "line": 66
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1776,
            1785
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 66
            },
            "start": {
              "column": 15,
              "line": 66
            }
          }
        },
        "range": [
          1765,
          1785
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 66
          },
          "start": {
            "column": 4,
            "line": 66
          }
        }
      },
      "range": [
        1761,
        1789
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
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
          1816,
          1818
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 67
          },
          "start": {
            "column": 26,
            "line": 67
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1794,
            1800
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 67
            },
            "start": {
              "column": 4,
              "line": 67
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1805,
            1814
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 67
            },
            "start": {
              "column": 15,
              "line": 67
            }
          }
        },
        "range": [
          1794,
          1814
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 67
          },
          "start": {
            "column": 4,
            "line": 67
          }
        }
      },
      "range": [
        1790,
        1818
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
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
          1845,
          1847
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 68
          },
          "start": {
            "column": 26,
            "line": 68
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "range": [
            1823,
            1829
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 68
            },
            "start": {
              "column": 4,
              "line": 68
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "range": [
            1834,
            1843
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 68
            },
            "start": {
              "column": 15,
              "line": 68
            }
          }
        },
        "range": [
          1823,
          1843
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 68
          },
          "start": {
            "column": 4,
            "line": 68
          }
        }
      },
      "range": [
        1819,
        1847
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                1895,
                1897
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 71
                },
                "start": {
                  "column": 30,
                  "line": 71
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  1873,
                  1879
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 71
                  },
                  "start": {
                    "column": 8,
                    "line": 71
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  1884,
                  1893
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 71
                  },
                  "start": {
                    "column": 19,
                    "line": 71
                  }
                }
              },
              "range": [
                1873,
                1893
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 71
                },
                "start": {
                  "column": 8,
                  "line": 71
                }
              }
            },
            "range": [
              1869,
              1897
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
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
                1928,
                1930
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 72
                },
                "start": {
                  "column": 30,
                  "line": 72
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  1906,
                  1912
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 72
                  },
                  "start": {
                    "column": 8,
                    "line": 72
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  1917,
                  1926
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 72
                  },
                  "start": {
                    "column": 19,
                    "line": 72
                  }
                }
              },
              "range": [
                1906,
                1926
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 72
                },
                "start": {
                  "column": 8,
                  "line": 72
                }
              }
            },
            "range": [
              1902,
              1930
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
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
                1961,
                1963
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 73
                },
                "start": {
                  "column": 30,
                  "line": 73
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  1939,
                  1945
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 73
                  },
                  "start": {
                    "column": 8,
                    "line": 73
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  1950,
                  1959
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 73
                  },
                  "start": {
                    "column": 19,
                    "line": 73
                  }
                }
              },
              "range": [
                1939,
                1959
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 73
                },
                "start": {
                  "column": 8,
                  "line": 73
                }
              }
            },
            "range": [
              1935,
              1963
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
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
                1994,
                1996
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 74
                },
                "start": {
                  "column": 30,
                  "line": 74
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  1972,
                  1978
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 74
                  },
                  "start": {
                    "column": 8,
                    "line": 74
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  1983,
                  1992
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 74
                  },
                  "start": {
                    "column": 19,
                    "line": 74
                  }
                }
              },
              "range": [
                1972,
                1992
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 74
                },
                "start": {
                  "column": 8,
                  "line": 74
                }
              }
            },
            "range": [
              1968,
              1996
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
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
                2027,
                2029
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 75
                },
                "start": {
                  "column": 30,
                  "line": 75
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2005,
                  2011
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 75
                  },
                  "start": {
                    "column": 8,
                    "line": 75
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2016,
                  2025
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 75
                  },
                  "start": {
                    "column": 19,
                    "line": 75
                  }
                }
              },
              "range": [
                2005,
                2025
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 75
                },
                "start": {
                  "column": 8,
                  "line": 75
                }
              }
            },
            "range": [
              2001,
              2029
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
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
                2060,
                2062
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 76
                },
                "start": {
                  "column": 30,
                  "line": 76
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2038,
                  2044
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 76
                  },
                  "start": {
                    "column": 8,
                    "line": 76
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2049,
                  2058
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 76
                  },
                  "start": {
                    "column": 19,
                    "line": 76
                  }
                }
              },
              "range": [
                2038,
                2058
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 76
                },
                "start": {
                  "column": 8,
                  "line": 76
                }
              }
            },
            "range": [
              2034,
              2062
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
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
                2093,
                2095
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 77
                },
                "start": {
                  "column": 30,
                  "line": 77
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2071,
                  2077
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 77
                  },
                  "start": {
                    "column": 8,
                    "line": 77
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2082,
                  2091
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 77
                  },
                  "start": {
                    "column": 19,
                    "line": 77
                  }
                }
              },
              "range": [
                2071,
                2091
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 77
                },
                "start": {
                  "column": 8,
                  "line": 77
                }
              }
            },
            "range": [
              2067,
              2095
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
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
                2126,
                2128
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 78
                },
                "start": {
                  "column": 30,
                  "line": 78
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2104,
                  2110
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 78
                  },
                  "start": {
                    "column": 8,
                    "line": 78
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2115,
                  2124
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 78
                  },
                  "start": {
                    "column": 19,
                    "line": 78
                  }
                }
              },
              "range": [
                2104,
                2124
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 78
                },
                "start": {
                  "column": 8,
                  "line": 78
                }
              }
            },
            "range": [
              2100,
              2128
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
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
                2159,
                2161
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 79
                },
                "start": {
                  "column": 30,
                  "line": 79
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2137,
                  2143
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 79
                  },
                  "start": {
                    "column": 8,
                    "line": 79
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2148,
                  2157
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 79
                  },
                  "start": {
                    "column": 19,
                    "line": 79
                  }
                }
              },
              "range": [
                2137,
                2157
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 79
                },
                "start": {
                  "column": 8,
                  "line": 79
                }
              }
            },
            "range": [
              2133,
              2161
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
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
                2192,
                2194
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 80
                },
                "start": {
                  "column": 30,
                  "line": 80
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2170,
                  2176
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 80
                  },
                  "start": {
                    "column": 8,
                    "line": 80
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2181,
                  2190
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 80
                  },
                  "start": {
                    "column": 19,
                    "line": 80
                  }
                }
              },
              "range": [
                2170,
                2190
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 80
                },
                "start": {
                  "column": 8,
                  "line": 80
                }
              }
            },
            "range": [
              2166,
              2194
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 80
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
                2225,
                2227
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 81
                },
                "start": {
                  "column": 30,
                  "line": 81
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2203,
                  2209
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 81
                  },
                  "start": {
                    "column": 8,
                    "line": 81
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2214,
                  2223
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 81
                  },
                  "start": {
                    "column": 19,
                    "line": 81
                  }
                }
              },
              "range": [
                2203,
                2223
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 81
                },
                "start": {
                  "column": 8,
                  "line": 81
                }
              }
            },
            "range": [
              2199,
              2227
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
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
                2258,
                2260
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 82
                },
                "start": {
                  "column": 30,
                  "line": 82
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2236,
                  2242
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 82
                  },
                  "start": {
                    "column": 8,
                    "line": 82
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2247,
                  2256
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 82
                  },
                  "start": {
                    "column": 19,
                    "line": 82
                  }
                }
              },
              "range": [
                2236,
                2256
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 82
                },
                "start": {
                  "column": 8,
                  "line": 82
                }
              }
            },
            "range": [
              2232,
              2260
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 82
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
                2291,
                2293
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 83
                },
                "start": {
                  "column": 30,
                  "line": 83
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2269,
                  2275
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 83
                  },
                  "start": {
                    "column": 8,
                    "line": 83
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2280,
                  2289
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 83
                  },
                  "start": {
                    "column": 19,
                    "line": 83
                  }
                }
              },
              "range": [
                2269,
                2289
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 83
                },
                "start": {
                  "column": 8,
                  "line": 83
                }
              }
            },
            "range": [
              2265,
              2293
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
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
                2324,
                2326
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 84
                },
                "start": {
                  "column": 30,
                  "line": 84
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2302,
                  2308
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 84
                  },
                  "start": {
                    "column": 8,
                    "line": 84
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2313,
                  2322
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 84
                  },
                  "start": {
                    "column": 19,
                    "line": 84
                  }
                }
              },
              "range": [
                2302,
                2322
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 84
                },
                "start": {
                  "column": 8,
                  "line": 84
                }
              }
            },
            "range": [
              2298,
              2326
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
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
                2357,
                2359
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 85
                },
                "start": {
                  "column": 30,
                  "line": 85
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2335,
                  2341
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 85
                  },
                  "start": {
                    "column": 8,
                    "line": 85
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2346,
                  2355
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 85
                  },
                  "start": {
                    "column": 19,
                    "line": 85
                  }
                }
              },
              "range": [
                2335,
                2355
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 85
                },
                "start": {
                  "column": 8,
                  "line": 85
                }
              }
            },
            "range": [
              2331,
              2359
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
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
                2390,
                2392
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 86
                },
                "start": {
                  "column": 30,
                  "line": 86
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2368,
                  2374
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 86
                  },
                  "start": {
                    "column": 8,
                    "line": 86
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2379,
                  2388
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 86
                  },
                  "start": {
                    "column": 19,
                    "line": 86
                  }
                }
              },
              "range": [
                2368,
                2388
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 86
                },
                "start": {
                  "column": 8,
                  "line": 86
                }
              }
            },
            "range": [
              2364,
              2392
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
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
                2423,
                2425
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 87
                },
                "start": {
                  "column": 30,
                  "line": 87
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2401,
                  2407
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 87
                  },
                  "start": {
                    "column": 8,
                    "line": 87
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2412,
                  2421
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 87
                  },
                  "start": {
                    "column": 19,
                    "line": 87
                  }
                }
              },
              "range": [
                2401,
                2421
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 87
                },
                "start": {
                  "column": 8,
                  "line": 87
                }
              }
            },
            "range": [
              2397,
              2425
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
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
                2456,
                2458
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 88
                },
                "start": {
                  "column": 30,
                  "line": 88
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2434,
                  2440
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 88
                  },
                  "start": {
                    "column": 8,
                    "line": 88
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2445,
                  2454
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 88
                  },
                  "start": {
                    "column": 19,
                    "line": 88
                  }
                }
              },
              "range": [
                2434,
                2454
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 88
                },
                "start": {
                  "column": 8,
                  "line": 88
                }
              }
            },
            "range": [
              2430,
              2458
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
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
                2489,
                2491
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 89
                },
                "start": {
                  "column": 30,
                  "line": 89
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2467,
                  2473
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 89
                  },
                  "start": {
                    "column": 8,
                    "line": 89
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2478,
                  2487
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 89
                  },
                  "start": {
                    "column": 19,
                    "line": 89
                  }
                }
              },
              "range": [
                2467,
                2487
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 89
                },
                "start": {
                  "column": 8,
                  "line": 89
                }
              }
            },
            "range": [
              2463,
              2491
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 89
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
                2522,
                2524
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 90
                },
                "start": {
                  "column": 30,
                  "line": 90
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2500,
                  2506
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 90
                  },
                  "start": {
                    "column": 8,
                    "line": 90
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2511,
                  2520
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 90
                  },
                  "start": {
                    "column": 19,
                    "line": 90
                  }
                }
              },
              "range": [
                2500,
                2520
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 90
                },
                "start": {
                  "column": 8,
                  "line": 90
                }
              }
            },
            "range": [
              2496,
              2524
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
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
                2555,
                2557
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 91
                },
                "start": {
                  "column": 30,
                  "line": 91
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2533,
                  2539
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 91
                  },
                  "start": {
                    "column": 8,
                    "line": 91
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2544,
                  2553
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 91
                  },
                  "start": {
                    "column": 19,
                    "line": 91
                  }
                }
              },
              "range": [
                2533,
                2553
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 91
                },
                "start": {
                  "column": 8,
                  "line": 91
                }
              }
            },
            "range": [
              2529,
              2557
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
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
                2588,
                2590
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 92
                },
                "start": {
                  "column": 30,
                  "line": 92
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2566,
                  2572
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 92
                  },
                  "start": {
                    "column": 8,
                    "line": 92
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2577,
                  2586
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 92
                  },
                  "start": {
                    "column": 19,
                    "line": 92
                  }
                }
              },
              "range": [
                2566,
                2586
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 92
                },
                "start": {
                  "column": 8,
                  "line": 92
                }
              }
            },
            "range": [
              2562,
              2590
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 92
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
                2621,
                2623
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 93
                },
                "start": {
                  "column": 30,
                  "line": 93
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2599,
                  2605
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 93
                  },
                  "start": {
                    "column": 8,
                    "line": 93
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2610,
                  2619
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 93
                  },
                  "start": {
                    "column": 19,
                    "line": 93
                  }
                }
              },
              "range": [
                2599,
                2619
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 93
                },
                "start": {
                  "column": 8,
                  "line": 93
                }
              }
            },
            "range": [
              2595,
              2623
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 93
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
                2654,
                2656
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 94
                },
                "start": {
                  "column": 30,
                  "line": 94
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2632,
                  2638
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 94
                  },
                  "start": {
                    "column": 8,
                    "line": 94
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2643,
                  2652
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 94
                  },
                  "start": {
                    "column": 19,
                    "line": 94
                  }
                }
              },
              "range": [
                2632,
                2652
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 94
                },
                "start": {
                  "column": 8,
                  "line": 94
                }
              }
            },
            "range": [
              2628,
              2656
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 94
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
                2687,
                2689
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 95
                },
                "start": {
                  "column": 30,
                  "line": 95
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2665,
                  2671
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 95
                  },
                  "start": {
                    "column": 8,
                    "line": 95
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2676,
                  2685
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 95
                  },
                  "start": {
                    "column": 19,
                    "line": 95
                  }
                }
              },
              "range": [
                2665,
                2685
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 95
                },
                "start": {
                  "column": 8,
                  "line": 95
                }
              }
            },
            "range": [
              2661,
              2689
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 95
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
                2720,
                2722
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 96
                },
                "start": {
                  "column": 30,
                  "line": 96
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2698,
                  2704
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 96
                  },
                  "start": {
                    "column": 8,
                    "line": 96
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2709,
                  2718
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 96
                  },
                  "start": {
                    "column": 19,
                    "line": 96
                  }
                }
              },
              "range": [
                2698,
                2718
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 96
                },
                "start": {
                  "column": 8,
                  "line": 96
                }
              }
            },
            "range": [
              2694,
              2722
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 96
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
                2753,
                2755
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 97
                },
                "start": {
                  "column": 30,
                  "line": 97
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2731,
                  2737
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 97
                  },
                  "start": {
                    "column": 8,
                    "line": 97
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2742,
                  2751
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 97
                  },
                  "start": {
                    "column": 19,
                    "line": 97
                  }
                }
              },
              "range": [
                2731,
                2751
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 97
                },
                "start": {
                  "column": 8,
                  "line": 97
                }
              }
            },
            "range": [
              2727,
              2755
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 97
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
                2786,
                2788
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 98
                },
                "start": {
                  "column": 30,
                  "line": 98
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2764,
                  2770
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 98
                  },
                  "start": {
                    "column": 8,
                    "line": 98
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2775,
                  2784
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 98
                  },
                  "start": {
                    "column": 19,
                    "line": 98
                  }
                }
              },
              "range": [
                2764,
                2784
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 98
                },
                "start": {
                  "column": 8,
                  "line": 98
                }
              }
            },
            "range": [
              2760,
              2788
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 98
              },
              "start": {
                "column": 4,
                "line": 98
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
                2819,
                2821
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 99
                },
                "start": {
                  "column": 30,
                  "line": 99
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2797,
                  2803
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 99
                  },
                  "start": {
                    "column": 8,
                    "line": 99
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2808,
                  2817
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 99
                  },
                  "start": {
                    "column": 19,
                    "line": 99
                  }
                }
              },
              "range": [
                2797,
                2817
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 99
                },
                "start": {
                  "column": 8,
                  "line": 99
                }
              }
            },
            "range": [
              2793,
              2821
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
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
                2852,
                2854
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 100
                },
                "start": {
                  "column": 30,
                  "line": 100
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2830,
                  2836
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 100
                  },
                  "start": {
                    "column": 8,
                    "line": 100
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2841,
                  2850
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 100
                  },
                  "start": {
                    "column": 19,
                    "line": 100
                  }
                }
              },
              "range": [
                2830,
                2850
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 100
                },
                "start": {
                  "column": 8,
                  "line": 100
                }
              }
            },
            "range": [
              2826,
              2854
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 100
              },
              "start": {
                "column": 4,
                "line": 100
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
                2885,
                2887
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 101
                },
                "start": {
                  "column": 30,
                  "line": 101
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2863,
                  2869
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 101
                  },
                  "start": {
                    "column": 8,
                    "line": 101
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2874,
                  2883
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 101
                  },
                  "start": {
                    "column": 19,
                    "line": 101
                  }
                }
              },
              "range": [
                2863,
                2883
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 101
                },
                "start": {
                  "column": 8,
                  "line": 101
                }
              }
            },
            "range": [
              2859,
              2887
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 101
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
                2918,
                2920
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 102
                },
                "start": {
                  "column": 30,
                  "line": 102
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2896,
                  2902
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 102
                  },
                  "start": {
                    "column": 8,
                    "line": 102
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2907,
                  2916
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 102
                  },
                  "start": {
                    "column": 19,
                    "line": 102
                  }
                }
              },
              "range": [
                2896,
                2916
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 102
                },
                "start": {
                  "column": 8,
                  "line": 102
                }
              }
            },
            "range": [
              2892,
              2920
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 102
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
                2951,
                2953
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 103
                },
                "start": {
                  "column": 30,
                  "line": 103
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2929,
                  2935
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 103
                  },
                  "start": {
                    "column": 8,
                    "line": 103
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2940,
                  2949
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 103
                  },
                  "start": {
                    "column": 19,
                    "line": 103
                  }
                }
              },
              "range": [
                2929,
                2949
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 103
                },
                "start": {
                  "column": 8,
                  "line": 103
                }
              }
            },
            "range": [
              2925,
              2953
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 103
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
                2984,
                2986
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 104
                },
                "start": {
                  "column": 30,
                  "line": 104
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2962,
                  2968
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 104
                  },
                  "start": {
                    "column": 8,
                    "line": 104
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  2973,
                  2982
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 104
                  },
                  "start": {
                    "column": 19,
                    "line": 104
                  }
                }
              },
              "range": [
                2962,
                2982
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 104
                },
                "start": {
                  "column": 8,
                  "line": 104
                }
              }
            },
            "range": [
              2958,
              2986
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 104
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
                3017,
                3019
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 105
                },
                "start": {
                  "column": 30,
                  "line": 105
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  2995,
                  3001
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 105
                  },
                  "start": {
                    "column": 8,
                    "line": 105
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3006,
                  3015
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 105
                  },
                  "start": {
                    "column": 19,
                    "line": 105
                  }
                }
              },
              "range": [
                2995,
                3015
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 105
                },
                "start": {
                  "column": 8,
                  "line": 105
                }
              }
            },
            "range": [
              2991,
              3019
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 105
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
                3050,
                3052
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 106
                },
                "start": {
                  "column": 30,
                  "line": 106
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3028,
                  3034
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 106
                  },
                  "start": {
                    "column": 8,
                    "line": 106
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3039,
                  3048
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 106
                  },
                  "start": {
                    "column": 19,
                    "line": 106
                  }
                }
              },
              "range": [
                3028,
                3048
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 106
                },
                "start": {
                  "column": 8,
                  "line": 106
                }
              }
            },
            "range": [
              3024,
              3052
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 106
              },
              "start": {
                "column": 4,
                "line": 106
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
                3083,
                3085
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 107
                },
                "start": {
                  "column": 30,
                  "line": 107
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3061,
                  3067
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 107
                  },
                  "start": {
                    "column": 8,
                    "line": 107
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3072,
                  3081
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 107
                  },
                  "start": {
                    "column": 19,
                    "line": 107
                  }
                }
              },
              "range": [
                3061,
                3081
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 107
                },
                "start": {
                  "column": 8,
                  "line": 107
                }
              }
            },
            "range": [
              3057,
              3085
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 107
              },
              "start": {
                "column": 4,
                "line": 107
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
                3116,
                3118
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 108
                },
                "start": {
                  "column": 30,
                  "line": 108
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3094,
                  3100
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 108
                  },
                  "start": {
                    "column": 8,
                    "line": 108
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3105,
                  3114
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 108
                  },
                  "start": {
                    "column": 19,
                    "line": 108
                  }
                }
              },
              "range": [
                3094,
                3114
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 108
                },
                "start": {
                  "column": 8,
                  "line": 108
                }
              }
            },
            "range": [
              3090,
              3118
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 108
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
                3149,
                3151
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 109
                },
                "start": {
                  "column": 30,
                  "line": 109
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3127,
                  3133
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 109
                  },
                  "start": {
                    "column": 8,
                    "line": 109
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3138,
                  3147
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 109
                  },
                  "start": {
                    "column": 19,
                    "line": 109
                  }
                }
              },
              "range": [
                3127,
                3147
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 109
                },
                "start": {
                  "column": 8,
                  "line": 109
                }
              }
            },
            "range": [
              3123,
              3151
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 109
              },
              "start": {
                "column": 4,
                "line": 109
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
                3182,
                3184
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 110
                },
                "start": {
                  "column": 30,
                  "line": 110
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3160,
                  3166
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 110
                  },
                  "start": {
                    "column": 8,
                    "line": 110
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3171,
                  3180
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 110
                  },
                  "start": {
                    "column": 19,
                    "line": 110
                  }
                }
              },
              "range": [
                3160,
                3180
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 110
                },
                "start": {
                  "column": 8,
                  "line": 110
                }
              }
            },
            "range": [
              3156,
              3184
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 110
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
                3215,
                3217
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 111
                },
                "start": {
                  "column": 30,
                  "line": 111
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3193,
                  3199
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 111
                  },
                  "start": {
                    "column": 8,
                    "line": 111
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3204,
                  3213
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 111
                  },
                  "start": {
                    "column": 19,
                    "line": 111
                  }
                }
              },
              "range": [
                3193,
                3213
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 111
                },
                "start": {
                  "column": 8,
                  "line": 111
                }
              }
            },
            "range": [
              3189,
              3217
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 111
              },
              "start": {
                "column": 4,
                "line": 111
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
                3248,
                3250
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 112
                },
                "start": {
                  "column": 30,
                  "line": 112
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3226,
                  3232
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 112
                  },
                  "start": {
                    "column": 8,
                    "line": 112
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3237,
                  3246
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 112
                  },
                  "start": {
                    "column": 19,
                    "line": 112
                  }
                }
              },
              "range": [
                3226,
                3246
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 112
                },
                "start": {
                  "column": 8,
                  "line": 112
                }
              }
            },
            "range": [
              3222,
              3250
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 112
              },
              "start": {
                "column": 4,
                "line": 112
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
                3281,
                3283
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 113
                },
                "start": {
                  "column": 30,
                  "line": 113
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3259,
                  3265
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 113
                  },
                  "start": {
                    "column": 8,
                    "line": 113
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3270,
                  3279
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 113
                  },
                  "start": {
                    "column": 19,
                    "line": 113
                  }
                }
              },
              "range": [
                3259,
                3279
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 113
                },
                "start": {
                  "column": 8,
                  "line": 113
                }
              }
            },
            "range": [
              3255,
              3283
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 113
              },
              "start": {
                "column": 4,
                "line": 113
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
                3314,
                3316
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 114
                },
                "start": {
                  "column": 30,
                  "line": 114
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3292,
                  3298
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 114
                  },
                  "start": {
                    "column": 8,
                    "line": 114
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3303,
                  3312
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 114
                  },
                  "start": {
                    "column": 19,
                    "line": 114
                  }
                }
              },
              "range": [
                3292,
                3312
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 114
                },
                "start": {
                  "column": 8,
                  "line": 114
                }
              }
            },
            "range": [
              3288,
              3316
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 114
              },
              "start": {
                "column": 4,
                "line": 114
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
                3347,
                3349
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 115
                },
                "start": {
                  "column": 30,
                  "line": 115
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3325,
                  3331
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 115
                  },
                  "start": {
                    "column": 8,
                    "line": 115
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3336,
                  3345
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 115
                  },
                  "start": {
                    "column": 19,
                    "line": 115
                  }
                }
              },
              "range": [
                3325,
                3345
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 115
                },
                "start": {
                  "column": 8,
                  "line": 115
                }
              }
            },
            "range": [
              3321,
              3349
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 115
              },
              "start": {
                "column": 4,
                "line": 115
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
                3380,
                3382
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 116
                },
                "start": {
                  "column": 30,
                  "line": 116
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3358,
                  3364
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 116
                  },
                  "start": {
                    "column": 8,
                    "line": 116
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3369,
                  3378
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 116
                  },
                  "start": {
                    "column": 19,
                    "line": 116
                  }
                }
              },
              "range": [
                3358,
                3378
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 116
                },
                "start": {
                  "column": 8,
                  "line": 116
                }
              }
            },
            "range": [
              3354,
              3382
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 116
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
                3413,
                3415
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 117
                },
                "start": {
                  "column": 30,
                  "line": 117
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3391,
                  3397
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 117
                  },
                  "start": {
                    "column": 8,
                    "line": 117
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3402,
                  3411
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 117
                  },
                  "start": {
                    "column": 19,
                    "line": 117
                  }
                }
              },
              "range": [
                3391,
                3411
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 117
                },
                "start": {
                  "column": 8,
                  "line": 117
                }
              }
            },
            "range": [
              3387,
              3415
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 117
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
                3446,
                3448
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 118
                },
                "start": {
                  "column": 30,
                  "line": 118
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3424,
                  3430
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 118
                  },
                  "start": {
                    "column": 8,
                    "line": 118
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3435,
                  3444
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 118
                  },
                  "start": {
                    "column": 19,
                    "line": 118
                  }
                }
              },
              "range": [
                3424,
                3444
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 118
                },
                "start": {
                  "column": 8,
                  "line": 118
                }
              }
            },
            "range": [
              3420,
              3448
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 118
              },
              "start": {
                "column": 4,
                "line": 118
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
                3479,
                3481
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 119
                },
                "start": {
                  "column": 30,
                  "line": 119
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3457,
                  3463
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 119
                  },
                  "start": {
                    "column": 8,
                    "line": 119
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3468,
                  3477
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 119
                  },
                  "start": {
                    "column": 19,
                    "line": 119
                  }
                }
              },
              "range": [
                3457,
                3477
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 119
                },
                "start": {
                  "column": 8,
                  "line": 119
                }
              }
            },
            "range": [
              3453,
              3481
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 119
              },
              "start": {
                "column": 4,
                "line": 119
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
                3512,
                3514
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 120
                },
                "start": {
                  "column": 30,
                  "line": 120
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3490,
                  3496
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 120
                  },
                  "start": {
                    "column": 8,
                    "line": 120
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3501,
                  3510
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 120
                  },
                  "start": {
                    "column": 19,
                    "line": 120
                  }
                }
              },
              "range": [
                3490,
                3510
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 120
                },
                "start": {
                  "column": 8,
                  "line": 120
                }
              }
            },
            "range": [
              3486,
              3514
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 120
              },
              "start": {
                "column": 4,
                "line": 120
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
                3545,
                3547
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 121
                },
                "start": {
                  "column": 30,
                  "line": 121
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3523,
                  3529
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 121
                  },
                  "start": {
                    "column": 8,
                    "line": 121
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3534,
                  3543
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 121
                  },
                  "start": {
                    "column": 19,
                    "line": 121
                  }
                }
              },
              "range": [
                3523,
                3543
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 121
                },
                "start": {
                  "column": 8,
                  "line": 121
                }
              }
            },
            "range": [
              3519,
              3547
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 121
              },
              "start": {
                "column": 4,
                "line": 121
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
                3578,
                3580
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 122
                },
                "start": {
                  "column": 30,
                  "line": 122
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3556,
                  3562
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 122
                  },
                  "start": {
                    "column": 8,
                    "line": 122
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3567,
                  3576
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 122
                  },
                  "start": {
                    "column": 19,
                    "line": 122
                  }
                }
              },
              "range": [
                3556,
                3576
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 122
                },
                "start": {
                  "column": 8,
                  "line": 122
                }
              }
            },
            "range": [
              3552,
              3580
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 122
              },
              "start": {
                "column": 4,
                "line": 122
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
                3611,
                3613
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 123
                },
                "start": {
                  "column": 30,
                  "line": 123
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3589,
                  3595
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 123
                  },
                  "start": {
                    "column": 8,
                    "line": 123
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3600,
                  3609
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 123
                  },
                  "start": {
                    "column": 19,
                    "line": 123
                  }
                }
              },
              "range": [
                3589,
                3609
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 123
                },
                "start": {
                  "column": 8,
                  "line": 123
                }
              }
            },
            "range": [
              3585,
              3613
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 123
              },
              "start": {
                "column": 4,
                "line": 123
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
                3644,
                3646
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 124
                },
                "start": {
                  "column": 30,
                  "line": 124
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3622,
                  3628
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 124
                  },
                  "start": {
                    "column": 8,
                    "line": 124
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3633,
                  3642
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 124
                  },
                  "start": {
                    "column": 19,
                    "line": 124
                  }
                }
              },
              "range": [
                3622,
                3642
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 124
                },
                "start": {
                  "column": 8,
                  "line": 124
                }
              }
            },
            "range": [
              3618,
              3646
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 124
              },
              "start": {
                "column": 4,
                "line": 124
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
                3677,
                3679
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 125
                },
                "start": {
                  "column": 30,
                  "line": 125
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3655,
                  3661
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 125
                  },
                  "start": {
                    "column": 8,
                    "line": 125
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3666,
                  3675
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 125
                  },
                  "start": {
                    "column": 19,
                    "line": 125
                  }
                }
              },
              "range": [
                3655,
                3675
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 125
                },
                "start": {
                  "column": 8,
                  "line": 125
                }
              }
            },
            "range": [
              3651,
              3679
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 125
              },
              "start": {
                "column": 4,
                "line": 125
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
                3710,
                3712
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 126
                },
                "start": {
                  "column": 30,
                  "line": 126
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3688,
                  3694
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 126
                  },
                  "start": {
                    "column": 8,
                    "line": 126
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3699,
                  3708
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 126
                  },
                  "start": {
                    "column": 19,
                    "line": 126
                  }
                }
              },
              "range": [
                3688,
                3708
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 126
                },
                "start": {
                  "column": 8,
                  "line": 126
                }
              }
            },
            "range": [
              3684,
              3712
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 126
              },
              "start": {
                "column": 4,
                "line": 126
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
                3743,
                3745
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 127
                },
                "start": {
                  "column": 30,
                  "line": 127
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3721,
                  3727
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 127
                  },
                  "start": {
                    "column": 8,
                    "line": 127
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3732,
                  3741
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 127
                  },
                  "start": {
                    "column": 19,
                    "line": 127
                  }
                }
              },
              "range": [
                3721,
                3741
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 127
                },
                "start": {
                  "column": 8,
                  "line": 127
                }
              }
            },
            "range": [
              3717,
              3745
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 127
              },
              "start": {
                "column": 4,
                "line": 127
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
                3776,
                3778
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 128
                },
                "start": {
                  "column": 30,
                  "line": 128
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3754,
                  3760
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 128
                  },
                  "start": {
                    "column": 8,
                    "line": 128
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3765,
                  3774
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 128
                  },
                  "start": {
                    "column": 19,
                    "line": 128
                  }
                }
              },
              "range": [
                3754,
                3774
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 128
                },
                "start": {
                  "column": 8,
                  "line": 128
                }
              }
            },
            "range": [
              3750,
              3778
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 128
              },
              "start": {
                "column": 4,
                "line": 128
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
                3809,
                3811
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 129
                },
                "start": {
                  "column": 30,
                  "line": 129
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3787,
                  3793
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 129
                  },
                  "start": {
                    "column": 8,
                    "line": 129
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3798,
                  3807
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 129
                  },
                  "start": {
                    "column": 19,
                    "line": 129
                  }
                }
              },
              "range": [
                3787,
                3807
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 129
                },
                "start": {
                  "column": 8,
                  "line": 129
                }
              }
            },
            "range": [
              3783,
              3811
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 129
              },
              "start": {
                "column": 4,
                "line": 129
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
                3842,
                3844
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 130
                },
                "start": {
                  "column": 30,
                  "line": 130
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "range": [
                  3820,
                  3826
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 130
                  },
                  "start": {
                    "column": 8,
                    "line": 130
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "range": [
                  3831,
                  3840
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 130
                  },
                  "start": {
                    "column": 19,
                    "line": 130
                  }
                }
              },
              "range": [
                3820,
                3840
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 130
                },
                "start": {
                  "column": 8,
                  "line": 130
                }
              }
            },
            "range": [
              3816,
              3844
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 130
              },
              "start": {
                "column": 4,
                "line": 130
              }
            }
          }
        ],
        "range": [
          1863,
          3847
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 131
          },
          "start": {
            "column": 13,
            "line": 70
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          1857,
          1861
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 70
          },
          "start": {
            "column": 7,
            "line": 70
          }
        }
      },
      "range": [
        1850,
        3847
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 131
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 132
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
