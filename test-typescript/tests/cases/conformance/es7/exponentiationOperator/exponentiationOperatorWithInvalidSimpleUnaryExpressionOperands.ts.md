__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    673
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
            "name": "temp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              },
              "range": [
                9,
                14
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  11,
                  14
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 1
                  },
                  "start": {
                    "column": 11,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              5,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 5,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            5,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
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
        15
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 1
        },
        "start": {
          "column": 1,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                66,
                70
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              }
            },
            "operator": "--",
            "prefix": true,
            "range": [
              64,
              70
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 4
              },
              "start": {
                "column": 3,
                "line": 4
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            62,
            70
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 4
            },
            "start": {
              "column": 1,
              "line": 4
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            75,
            76
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
        "range": [
          61,
          76
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        61,
        77
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                80,
                84
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
                }
              }
            },
            "operator": "--",
            "prefix": false,
            "range": [
              80,
              86
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            79,
            86
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 5
            },
            "start": {
              "column": 1,
              "line": 5
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            91,
            92
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        },
        "range": [
          78,
          92
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        78,
        93
      ],
      "loc": {
        "end": {
          "column": 15,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              96,
              97
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            95,
            97
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 6
            },
            "start": {
              "column": 1,
              "line": 6
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "4",
          "value": 4,
          "range": [
            102,
            103
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 6
            },
            "start": {
              "column": 8,
              "line": 6
            }
          }
        },
        "range": [
          94,
          103
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        94,
        104
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                107,
                111
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
                }
              }
            },
            "operator": "++",
            "prefix": false,
            "range": [
              107,
              113
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            106,
            113
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 7
            },
            "start": {
              "column": 1,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "4",
          "value": 4,
          "range": [
            118,
            119
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 7
            },
            "start": {
              "column": 13,
              "line": 7
            }
          }
        },
        "range": [
          105,
          119
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
      "range": [
        105,
        120
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                123,
                127
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            },
            "operator": "--",
            "prefix": false,
            "range": [
              123,
              129
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            122,
            129
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 8
            },
            "start": {
              "column": 1,
              "line": 8
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "4",
          "value": 4,
          "range": [
            134,
            135
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 8
            },
            "start": {
              "column": 13,
              "line": 8
            }
          }
        },
        "range": [
          121,
          135
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        121,
        136
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                143,
                147
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 10
                }
              }
            },
            "operator": "--",
            "prefix": true,
            "range": [
              141,
              147
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 3,
                "line": 10
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            139,
            147
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 10
            },
            "start": {
              "column": 1,
              "line": 10
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              152,
              153
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
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              157,
              158
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 10
              },
              "start": {
                "column": 19,
                "line": 10
              }
            }
          },
          "range": [
            152,
            158
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 10
            },
            "start": {
              "column": 14,
              "line": 10
            }
          }
        },
        "range": [
          138,
          158
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
      "range": [
        138,
        159
      ],
      "loc": {
        "end": {
          "column": 21,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                162,
                166
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
                }
              }
            },
            "operator": "--",
            "prefix": false,
            "range": [
              162,
              168
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            161,
            168
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 11
            },
            "start": {
              "column": 1,
              "line": 11
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              173,
              174
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              178,
              179
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 11
              },
              "start": {
                "column": 18,
                "line": 11
              }
            }
          },
          "range": [
            173,
            179
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          }
        },
        "range": [
          160,
          179
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        160,
        180
      ],
      "loc": {
        "end": {
          "column": 20,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              183,
              184
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            182,
            184
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 12
            },
            "start": {
              "column": 1,
              "line": 12
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "Literal",
            "raw": "4",
            "value": 4,
            "range": [
              189,
              190
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 12
              },
              "start": {
                "column": 8,
                "line": 12
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              194,
              195
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 12
              },
              "start": {
                "column": 13,
                "line": 12
              }
            }
          },
          "range": [
            189,
            195
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 12
            },
            "start": {
              "column": 8,
              "line": 12
            }
          }
        },
        "range": [
          181,
          195
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        181,
        196
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                199,
                203
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
                }
              }
            },
            "operator": "++",
            "prefix": false,
            "range": [
              199,
              205
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            198,
            205
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 13
            },
            "start": {
              "column": 1,
              "line": 13
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "Literal",
            "raw": "4",
            "value": 4,
            "range": [
              210,
              211
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              215,
              216
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 13
              },
              "start": {
                "column": 18,
                "line": 13
              }
            }
          },
          "range": [
            210,
            216
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 13
            },
            "start": {
              "column": 13,
              "line": 13
            }
          }
        },
        "range": [
          197,
          216
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        197,
        217
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                220,
                224
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
                }
              }
            },
            "operator": "--",
            "prefix": false,
            "range": [
              220,
              226
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            219,
            226
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 14
            },
            "start": {
              "column": 1,
              "line": 14
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "Literal",
            "raw": "4",
            "value": 4,
            "range": [
              231,
              232
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 14
              },
              "start": {
                "column": 13,
                "line": 14
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              236,
              237
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 14
              },
              "start": {
                "column": 18,
                "line": 14
              }
            }
          },
          "range": [
            231,
            237
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 14
            },
            "start": {
              "column": 13,
              "line": 14
            }
          }
        },
        "range": [
          218,
          237
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        218,
        238
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                250,
                254
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              }
            },
            "operator": "--",
            "prefix": true,
            "range": [
              248,
              254
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 16
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            241,
            254
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 16
            },
            "start": {
              "column": 1,
              "line": 16
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            259,
            260
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 16
            },
            "start": {
              "column": 19,
              "line": 16
            }
          }
        },
        "range": [
          240,
          260
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        240,
        261
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                270,
                274
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            "operator": "--",
            "prefix": false,
            "range": [
              270,
              276
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            263,
            276
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 17
            },
            "start": {
              "column": 1,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            281,
            282
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 17
            },
            "start": {
              "column": 19,
              "line": 17
            }
          }
        },
        "range": [
          262,
          282
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        262,
        283
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              292,
              293
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 18
              },
              "start": {
                "column": 8,
                "line": 18
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            285,
            293
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 18
            },
            "start": {
              "column": 1,
              "line": 18
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "4",
          "value": 4,
          "range": [
            298,
            299
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 18
            },
            "start": {
              "column": 14,
              "line": 18
            }
          }
        },
        "range": [
          284,
          299
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        284,
        300
      ],
      "loc": {
        "end": {
          "column": 16,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                309,
                313
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              }
            },
            "operator": "++",
            "prefix": false,
            "range": [
              309,
              315
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            302,
            315
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 19
            },
            "start": {
              "column": 1,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "4",
          "value": 4,
          "range": [
            320,
            321
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
        },
        "range": [
          301,
          321
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        301,
        322
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                331,
                335
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "operator": "--",
            "prefix": false,
            "range": [
              331,
              337
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            324,
            337
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 20
            },
            "start": {
              "column": 1,
              "line": 20
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "4",
          "value": 4,
          "range": [
            342,
            343
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 20
            },
            "start": {
              "column": 19,
              "line": 20
            }
          }
        },
        "range": [
          323,
          343
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        323,
        344
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            346,
            347
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "range": [
                  361,
                  365
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 15,
                    "line": 22
                  }
                }
              },
              "operator": "--",
              "prefix": true,
              "range": [
                359,
                365
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 22
                },
                "start": {
                  "column": 13,
                  "line": 22
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              352,
              365
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              370,
              371
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 22
              },
              "start": {
                "column": 24,
                "line": 22
              }
            }
          },
          "range": [
            351,
            371
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 22
            },
            "start": {
              "column": 5,
              "line": 22
            }
          }
        },
        "range": [
          346,
          371
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        346,
        372
      ],
      "loc": {
        "end": {
          "column": 26,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            373,
            374
          ],
          "loc": {
            "end": {
              "column": 1,
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
            "type": "UnaryExpression",
            "argument": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "range": [
                  386,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 23
                  },
                  "start": {
                    "column": 13,
                    "line": 23
                  }
                }
              },
              "operator": "--",
              "prefix": false,
              "range": [
                386,
                392
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 23
                },
                "start": {
                  "column": 13,
                  "line": 23
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              379,
              392
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              397,
              398
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 23
              },
              "start": {
                "column": 24,
                "line": 23
              }
            }
          },
          "range": [
            378,
            398
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 23
            },
            "start": {
              "column": 5,
              "line": 23
            }
          }
        },
        "range": [
          373,
          398
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        373,
        399
      ],
      "loc": {
        "end": {
          "column": 26,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            400,
            401
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                413,
                414
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 24
                },
                "start": {
                  "column": 13,
                  "line": 24
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              406,
              414
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "4",
            "value": 4,
            "range": [
              419,
              420
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 24
              },
              "start": {
                "column": 19,
                "line": 24
              }
            }
          },
          "range": [
            405,
            420
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 24
            },
            "start": {
              "column": 5,
              "line": 24
            }
          }
        },
        "range": [
          400,
          420
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        400,
        421
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            422,
            423
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "range": [
                  435,
                  439
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 25
                  },
                  "start": {
                    "column": 13,
                    "line": 25
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                435,
                441
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 25
                },
                "start": {
                  "column": 13,
                  "line": 25
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              428,
              441
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "4",
            "value": 4,
            "range": [
              446,
              447
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 25
              },
              "start": {
                "column": 24,
                "line": 25
              }
            }
          },
          "range": [
            427,
            447
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 25
            },
            "start": {
              "column": 5,
              "line": 25
            }
          }
        },
        "range": [
          422,
          447
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        422,
        448
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            449,
            450
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "range": [
                  462,
                  466
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 26
                  },
                  "start": {
                    "column": 13,
                    "line": 26
                  }
                }
              },
              "operator": "--",
              "prefix": false,
              "range": [
                462,
                468
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 26
                },
                "start": {
                  "column": 13,
                  "line": 26
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              455,
              468
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "4",
            "value": 4,
            "range": [
              473,
              474
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 26
              },
              "start": {
                "column": 24,
                "line": 26
              }
            }
          },
          "range": [
            454,
            474
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 26
            },
            "start": {
              "column": 5,
              "line": 26
            }
          }
        },
        "range": [
          449,
          474
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        449,
        475
      ],
      "loc": {
        "end": {
          "column": 26,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                487,
                491
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 28
                },
                "start": {
                  "column": 10,
                  "line": 28
                }
              }
            },
            "operator": "--",
            "prefix": true,
            "range": [
              485,
              491
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 28
              },
              "start": {
                "column": 8,
                "line": 28
              }
            }
          },
          "operator": "delete",
          "prefix": true,
          "range": [
            478,
            491
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 28
            },
            "start": {
              "column": 1,
              "line": 28
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            496,
            497
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 28
            },
            "start": {
              "column": 19,
              "line": 28
            }
          }
        },
        "range": [
          477,
          497
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        477,
        498
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                509,
                513
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 29
                },
                "start": {
                  "column": 10,
                  "line": 29
                }
              }
            },
            "operator": "++",
            "prefix": true,
            "range": [
              507,
              513
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 29
              },
              "start": {
                "column": 8,
                "line": 29
              }
            }
          },
          "operator": "delete",
          "prefix": true,
          "range": [
            500,
            513
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 29
            },
            "start": {
              "column": 1,
              "line": 29
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            518,
            519
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 29
            },
            "start": {
              "column": 19,
              "line": 29
            }
          }
        },
        "range": [
          499,
          519
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        499,
        520
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                529,
                533
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 30
                },
                "start": {
                  "column": 8,
                  "line": 30
                }
              }
            },
            "operator": "--",
            "prefix": false,
            "range": [
              529,
              535
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 30
              },
              "start": {
                "column": 8,
                "line": 30
              }
            }
          },
          "operator": "delete",
          "prefix": true,
          "range": [
            522,
            535
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 30
            },
            "start": {
              "column": 1,
              "line": 30
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            540,
            541
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
          521,
          541
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
      "range": [
        521,
        542
      ],
      "loc": {
        "end": {
          "column": 21,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                551,
                555
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 31
                },
                "start": {
                  "column": 8,
                  "line": 31
                }
              }
            },
            "operator": "++",
            "prefix": false,
            "range": [
              551,
              557
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 31
              },
              "start": {
                "column": 8,
                "line": 31
              }
            }
          },
          "operator": "delete",
          "prefix": true,
          "range": [
            544,
            557
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 31
            },
            "start": {
              "column": 1,
              "line": 31
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            562,
            563
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 31
            },
            "start": {
              "column": 19,
              "line": 31
            }
          }
        },
        "range": [
          543,
          563
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        543,
        564
      ],
      "loc": {
        "end": {
          "column": 21,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            566,
            567
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "range": [
                  581,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 33
                  },
                  "start": {
                    "column": 15,
                    "line": 33
                  }
                }
              },
              "operator": "--",
              "prefix": true,
              "range": [
                579,
                585
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 33
                },
                "start": {
                  "column": 13,
                  "line": 33
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              572,
              585
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              590,
              591
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 33
              },
              "start": {
                "column": 24,
                "line": 33
              }
            }
          },
          "range": [
            571,
            591
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 33
            },
            "start": {
              "column": 5,
              "line": 33
            }
          }
        },
        "range": [
          566,
          591
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        566,
        592
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            593,
            594
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "range": [
                  608,
                  612
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 34
                  },
                  "start": {
                    "column": 15,
                    "line": 34
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                606,
                612
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 34
                },
                "start": {
                  "column": 13,
                  "line": 34
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              599,
              612
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              617,
              618
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 34
              },
              "start": {
                "column": 24,
                "line": 34
              }
            }
          },
          "range": [
            598,
            618
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 34
            },
            "start": {
              "column": 5,
              "line": 34
            }
          }
        },
        "range": [
          593,
          618
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        593,
        619
      ],
      "loc": {
        "end": {
          "column": 26,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            620,
            621
          ],
          "loc": {
            "end": {
              "column": 1,
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
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "range": [
                  633,
                  637
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 35
                  },
                  "start": {
                    "column": 13,
                    "line": 35
                  }
                }
              },
              "operator": "--",
              "prefix": false,
              "range": [
                633,
                639
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 35
                },
                "start": {
                  "column": 13,
                  "line": 35
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              626,
              639
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 35
              },
              "start": {
                "column": 6,
                "line": 35
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              644,
              645
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 35
              },
              "start": {
                "column": 24,
                "line": 35
              }
            }
          },
          "range": [
            625,
            645
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 35
            },
            "start": {
              "column": 5,
              "line": 35
            }
          }
        },
        "range": [
          620,
          645
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        620,
        646
      ],
      "loc": {
        "end": {
          "column": 26,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            647,
            648
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "range": [
                  660,
                  664
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 36
                  },
                  "start": {
                    "column": 13,
                    "line": 36
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                660,
                666
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 36
                },
                "start": {
                  "column": 13,
                  "line": 36
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              653,
              666
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 36
              },
              "start": {
                "column": 6,
                "line": 36
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              671,
              672
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 36
              },
              "start": {
                "column": 24,
                "line": 36
              }
            }
          },
          "range": [
            652,
            672
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 36
            },
            "start": {
              "column": 5,
              "line": 36
            }
          }
        },
        "range": [
          647,
          672
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        647,
        673
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 26,
      "line": 36
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
