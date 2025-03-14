__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    669
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
            "range": [
              21,
              25
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              28,
              30
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          },
          "range": [
            21,
            30
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        17,
        31
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            },
            "operator": "++",
            "prefix": true,
            "range": [
              35,
              41
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
          "operator": "-",
          "prefix": true,
          "range": [
            34,
            41
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
            46,
            47
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
          33,
          47
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
        33,
        48
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
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                53,
                57
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "operator": "--",
            "prefix": true,
            "range": [
              51,
              57
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          "operator": "+",
          "prefix": true,
          "range": [
            50,
            57
          ],
          "loc": {
            "end": {
              "column": 8,
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
          "raw": "3",
          "value": 3,
          "range": [
            62,
            63
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 6
            },
            "start": {
              "column": 13,
              "line": 6
            }
          }
        },
        "range": [
          49,
          63
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
        49,
        64
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
                67,
                71
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
              67,
              73
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
          "operator": "-",
          "prefix": true,
          "range": [
            66,
            73
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
          "raw": "3",
          "value": 3,
          "range": [
            78,
            79
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
          65,
          79
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
        65,
        80
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
                83,
                87
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
              83,
              89
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
          "operator": "+",
          "prefix": true,
          "range": [
            82,
            89
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
          "raw": "3",
          "value": 3,
          "range": [
            94,
            95
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
          81,
          95
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
        81,
        96
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
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                100,
                101
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 9
                },
                "start": {
                  "column": 3,
                  "line": 9
                }
              }
            },
            "right": {
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
                    "column": 14,
                    "line": 9
                  },
                  "start": {
                    "column": 10,
                    "line": 9
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                105,
                111
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "range": [
              100,
              111
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 9
              },
              "start": {
                "column": 3,
                "line": 9
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            98,
            112
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 9
            },
            "start": {
              "column": 1,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            117,
            118
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 9
            },
            "start": {
              "column": 20,
              "line": 9
            }
          }
        },
        "range": [
          97,
          118
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        97,
        119
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                123,
                124
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 10
                },
                "start": {
                  "column": 3,
                  "line": 10
                }
              }
            },
            "right": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "range": [
                  130,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              },
              "operator": "--",
              "prefix": true,
              "range": [
                128,
                134
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "range": [
              123,
              134
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 10
              },
              "start": {
                "column": 3,
                "line": 10
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            121,
            135
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 10
            },
            "start": {
              "column": 1,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            140,
            141
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 10
            },
            "start": {
              "column": 20,
              "line": 10
            }
          }
        },
        "range": [
          120,
          141
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
      "range": [
        120,
        142
      ],
      "loc": {
        "end": {
          "column": 22,
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
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                146,
                147
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 11
                },
                "start": {
                  "column": 3,
                  "line": 11
                }
              }
            },
            "right": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "range": [
                  151,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                151,
                157
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "range": [
              146,
              157
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 3,
                "line": 11
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            144,
            158
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 11
            },
            "start": {
              "column": 1,
              "line": 11
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            163,
            164
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 11
            },
            "start": {
              "column": 20,
              "line": 11
            }
          }
        },
        "range": [
          143,
          164
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        143,
        165
      ],
      "loc": {
        "end": {
          "column": 22,
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
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                169,
                170
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 12
                },
                "start": {
                  "column": 3,
                  "line": 12
                }
              }
            },
            "right": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "range": [
                  174,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "operator": "--",
              "prefix": false,
              "range": [
                174,
                180
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
              169,
              180
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 12
              },
              "start": {
                "column": 3,
                "line": 12
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            167,
            181
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 12
            },
            "start": {
              "column": 1,
              "line": 12
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            186,
            187
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 12
            },
            "start": {
              "column": 20,
              "line": 12
            }
          }
        },
        "range": [
          166,
          187
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        166,
        188
      ],
      "loc": {
        "end": {
          "column": 22,
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
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              192,
              193
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            191,
            193
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 14
            },
            "start": {
              "column": 1,
              "line": 14
            }
          }
        },
        "right": {
          "type": "UpdateExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "range": [
              198,
              202
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          },
          "operator": "++",
          "prefix": false,
          "range": [
            198,
            204
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 14
            },
            "start": {
              "column": 8,
              "line": 14
            }
          }
        },
        "range": [
          190,
          204
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        190,
        205
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              208,
              209
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 15
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            207,
            209
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 15
            },
            "start": {
              "column": 1,
              "line": 15
            }
          }
        },
        "right": {
          "type": "UpdateExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "range": [
              214,
              218
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          },
          "operator": "--",
          "prefix": false,
          "range": [
            214,
            220
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 15
            },
            "start": {
              "column": 8,
              "line": 15
            }
          }
        },
        "range": [
          206,
          220
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        206,
        221
      ],
      "loc": {
        "end": {
          "column": 15,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              224,
              225
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            223,
            225
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 16
            },
            "start": {
              "column": 1,
              "line": 16
            }
          }
        },
        "right": {
          "type": "UpdateExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "range": [
              232,
              236
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
          "operator": "++",
          "prefix": true,
          "range": [
            230,
            236
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
        "range": [
          222,
          236
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        222,
        237
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              240,
              241
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 17
              },
              "start": {
                "column": 2,
                "line": 17
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            239,
            241
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 17
            },
            "start": {
              "column": 1,
              "line": 17
            }
          }
        },
        "right": {
          "type": "UpdateExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "range": [
              248,
              252
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 17
              },
              "start": {
                "column": 10,
                "line": 17
              }
            }
          },
          "operator": "--",
          "prefix": true,
          "range": [
            246,
            252
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
        "range": [
          238,
          252
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        238,
        253
      ],
      "loc": {
        "end": {
          "column": 15,
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
              256,
              257
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 18
              }
            }
          },
          "operator": "+",
          "prefix": true,
          "range": [
            255,
            257
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 18
            },
            "start": {
              "column": 1,
              "line": 18
            }
          }
        },
        "right": {
          "type": "UpdateExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "range": [
              262,
              266
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 18
              },
              "start": {
                "column": 8,
                "line": 18
              }
            }
          },
          "operator": "++",
          "prefix": false,
          "range": [
            262,
            268
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 18
            },
            "start": {
              "column": 8,
              "line": 18
            }
          }
        },
        "range": [
          254,
          268
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        254,
        269
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
              272,
              273
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          },
          "operator": "+",
          "prefix": true,
          "range": [
            271,
            273
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 19
            },
            "start": {
              "column": 1,
              "line": 19
            }
          }
        },
        "right": {
          "type": "UpdateExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "range": [
              278,
              282
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
          "operator": "--",
          "prefix": false,
          "range": [
            278,
            284
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
        "range": [
          270,
          284
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        270,
        285
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              288,
              289
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          },
          "operator": "+",
          "prefix": true,
          "range": [
            287,
            289
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 20
            },
            "start": {
              "column": 1,
              "line": 20
            }
          }
        },
        "right": {
          "type": "UpdateExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "range": [
              296,
              300
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 20
              },
              "start": {
                "column": 10,
                "line": 20
              }
            }
          },
          "operator": "++",
          "prefix": true,
          "range": [
            294,
            300
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
        "range": [
          286,
          300
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        286,
        301
      ],
      "loc": {
        "end": {
          "column": 15,
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
          "type": "UnaryExpression",
          "argument": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              304,
              305
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          },
          "operator": "+",
          "prefix": true,
          "range": [
            303,
            305
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 21
            },
            "start": {
              "column": 1,
              "line": 21
            }
          }
        },
        "right": {
          "type": "UpdateExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "range": [
              312,
              316
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 21
              },
              "start": {
                "column": 10,
                "line": 21
              }
            }
          },
          "operator": "--",
          "prefix": true,
          "range": [
            310,
            316
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 21
            },
            "start": {
              "column": 8,
              "line": 21
            }
          }
        },
        "range": [
          302,
          316
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        302,
        317
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
              320,
              321
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            319,
            321
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 22
            },
            "start": {
              "column": 1,
              "line": 22
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                326,
                330
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "operator": "++",
            "prefix": false,
            "range": [
              326,
              332
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 22
              },
              "start": {
                "column": 8,
                "line": 22
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              336,
              337
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 22
              },
              "start": {
                "column": 18,
                "line": 22
              }
            }
          },
          "range": [
            326,
            337
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 22
            },
            "start": {
              "column": 8,
              "line": 22
            }
          }
        },
        "range": [
          318,
          337
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
      "range": [
        318,
        338
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              341,
              342
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            340,
            342
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 23
            },
            "start": {
              "column": 1,
              "line": 23
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                347,
                351
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "operator": "--",
            "prefix": false,
            "range": [
              347,
              353
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 23
              },
              "start": {
                "column": 8,
                "line": 23
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              357,
              358
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 23
              },
              "start": {
                "column": 18,
                "line": 23
              }
            }
          },
          "range": [
            347,
            358
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 23
            },
            "start": {
              "column": 8,
              "line": 23
            }
          }
        },
        "range": [
          339,
          358
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        339,
        359
      ],
      "loc": {
        "end": {
          "column": 20,
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
          "type": "UnaryExpression",
          "argument": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              362,
              363
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            361,
            363
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 24
            },
            "start": {
              "column": 1,
              "line": 24
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                370,
                374
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 24
                },
                "start": {
                  "column": 10,
                  "line": 24
                }
              }
            },
            "operator": "++",
            "prefix": true,
            "range": [
              368,
              374
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 24
              },
              "start": {
                "column": 8,
                "line": 24
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              378,
              379
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 24
              },
              "start": {
                "column": 18,
                "line": 24
              }
            }
          },
          "range": [
            368,
            379
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 24
            },
            "start": {
              "column": 8,
              "line": 24
            }
          }
        },
        "range": [
          360,
          379
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        360,
        380
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
              383,
              384
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            382,
            384
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 25
            },
            "start": {
              "column": 1,
              "line": 25
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                391,
                395
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 25
                },
                "start": {
                  "column": 10,
                  "line": 25
                }
              }
            },
            "operator": "--",
            "prefix": true,
            "range": [
              389,
              395
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 25
              },
              "start": {
                "column": 8,
                "line": 25
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              399,
              400
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
          "range": [
            389,
            400
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 25
            },
            "start": {
              "column": 8,
              "line": 25
            }
          }
        },
        "range": [
          381,
          400
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        381,
        401
      ],
      "loc": {
        "end": {
          "column": 20,
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
          "type": "UnaryExpression",
          "argument": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              404,
              405
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          },
          "operator": "+",
          "prefix": true,
          "range": [
            403,
            405
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 26
            },
            "start": {
              "column": 1,
              "line": 26
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                410,
                414
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "operator": "++",
            "prefix": false,
            "range": [
              410,
              416
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 26
              },
              "start": {
                "column": 8,
                "line": 26
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              420,
              421
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 26
              },
              "start": {
                "column": 18,
                "line": 26
              }
            }
          },
          "range": [
            410,
            421
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 26
            },
            "start": {
              "column": 8,
              "line": 26
            }
          }
        },
        "range": [
          402,
          421
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        402,
        422
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              425,
              426
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 27
              },
              "start": {
                "column": 2,
                "line": 27
              }
            }
          },
          "operator": "+",
          "prefix": true,
          "range": [
            424,
            426
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 27
            },
            "start": {
              "column": 1,
              "line": 27
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                431,
                435
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 27
                },
                "start": {
                  "column": 8,
                  "line": 27
                }
              }
            },
            "operator": "--",
            "prefix": false,
            "range": [
              431,
              437
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 27
              },
              "start": {
                "column": 8,
                "line": 27
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              441,
              442
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
          "range": [
            431,
            442
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 27
            },
            "start": {
              "column": 8,
              "line": 27
            }
          }
        },
        "range": [
          423,
          442
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        423,
        443
      ],
      "loc": {
        "end": {
          "column": 20,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              446,
              447
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 28
              }
            }
          },
          "operator": "+",
          "prefix": true,
          "range": [
            445,
            447
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 28
            },
            "start": {
              "column": 1,
              "line": 28
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                454,
                458
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
            "operator": "++",
            "prefix": true,
            "range": [
              452,
              458
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
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              462,
              463
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 28
              },
              "start": {
                "column": 18,
                "line": 28
              }
            }
          },
          "range": [
            452,
            463
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 28
            },
            "start": {
              "column": 8,
              "line": 28
            }
          }
        },
        "range": [
          444,
          463
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
      "range": [
        444,
        464
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
              467,
              468
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 29
              }
            }
          },
          "operator": "+",
          "prefix": true,
          "range": [
            466,
            468
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 29
            },
            "start": {
              "column": 1,
              "line": 29
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                475,
                479
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
            "operator": "--",
            "prefix": true,
            "range": [
              473,
              479
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
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              483,
              484
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 29
              },
              "start": {
                "column": 18,
                "line": 29
              }
            }
          },
          "range": [
            473,
            484
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 29
            },
            "start": {
              "column": 8,
              "line": 29
            }
          }
        },
        "range": [
          465,
          484
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        465,
        485
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            487,
            488
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "right": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                493,
                497
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 31
                },
                "start": {
                  "column": 6,
                  "line": 31
                }
              }
            },
            "operator": "++",
            "prefix": false,
            "range": [
              493,
              499
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            492,
            499
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
          487,
          499
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
        487,
        500
      ],
      "loc": {
        "end": {
          "column": 13,
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
          "raw": "3",
          "value": 3,
          "range": [
            501,
            502
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "right": {
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                507,
                511
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 32
                },
                "start": {
                  "column": 6,
                  "line": 32
                }
              }
            },
            "operator": "--",
            "prefix": false,
            "range": [
              507,
              513
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            506,
            513
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 32
            },
            "start": {
              "column": 5,
              "line": 32
            }
          }
        },
        "range": [
          501,
          513
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        501,
        514
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
          "raw": "3",
          "value": 3,
          "range": [
            515,
            516
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
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                523,
                527
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 33
                },
                "start": {
                  "column": 8,
                  "line": 33
                }
              }
            },
            "operator": "++",
            "prefix": true,
            "range": [
              521,
              527
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            520,
            527
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 33
            },
            "start": {
              "column": 5,
              "line": 33
            }
          }
        },
        "range": [
          515,
          527
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        515,
        528
      ],
      "loc": {
        "end": {
          "column": 13,
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
          "raw": "3",
          "value": 3,
          "range": [
            529,
            530
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
          "type": "UnaryExpression",
          "argument": {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "range": [
                537,
                541
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 34
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              }
            },
            "operator": "--",
            "prefix": true,
            "range": [
              535,
              541
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          },
          "operator": "+",
          "prefix": true,
          "range": [
            534,
            541
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 34
            },
            "start": {
              "column": 5,
              "line": 34
            }
          }
        },
        "range": [
          529,
          541
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        529,
        542
      ],
      "loc": {
        "end": {
          "column": 13,
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
          "raw": "3",
          "value": 3,
          "range": [
            543,
            544
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
                  550,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 35
                  },
                  "start": {
                    "column": 7,
                    "line": 35
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                550,
                556
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 35
                },
                "start": {
                  "column": 7,
                  "line": 35
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              549,
              556
            ],
            "loc": {
              "end": {
                "column": 13,
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
            "raw": "2",
            "value": 2,
            "range": [
              561,
              562
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 35
              },
              "start": {
                "column": 18,
                "line": 35
              }
            }
          },
          "range": [
            548,
            562
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 35
            },
            "start": {
              "column": 5,
              "line": 35
            }
          }
        },
        "range": [
          543,
          562
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
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
          "raw": "3",
          "value": 3,
          "range": [
            564,
            565
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
                  571,
                  575
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 36
                  },
                  "start": {
                    "column": 7,
                    "line": 36
                  }
                }
              },
              "operator": "--",
              "prefix": false,
              "range": [
                571,
                577
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 36
                },
                "start": {
                  "column": 7,
                  "line": 36
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              570,
              577
            ],
            "loc": {
              "end": {
                "column": 13,
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
            "raw": "2",
            "value": 2,
            "range": [
              582,
              583
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 36
              },
              "start": {
                "column": 18,
                "line": 36
              }
            }
          },
          "range": [
            569,
            583
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 36
            },
            "start": {
              "column": 5,
              "line": 36
            }
          }
        },
        "range": [
          564,
          583
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        564,
        584
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
          "raw": "3",
          "value": 3,
          "range": [
            585,
            586
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
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
                  592,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 37
                  },
                  "start": {
                    "column": 7,
                    "line": 37
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                592,
                598
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 37
                },
                "start": {
                  "column": 7,
                  "line": 37
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              591,
              598
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 37
              },
              "start": {
                "column": 6,
                "line": 37
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              603,
              604
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 37
              },
              "start": {
                "column": 18,
                "line": 37
              }
            }
          },
          "range": [
            590,
            604
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 37
            },
            "start": {
              "column": 5,
              "line": 37
            }
          }
        },
        "range": [
          585,
          604
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        585,
        605
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
          "raw": "3",
          "value": 3,
          "range": [
            606,
            607
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 38
            },
            "start": {
              "column": 0,
              "line": 38
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
                  613,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 38
                  },
                  "start": {
                    "column": 7,
                    "line": 38
                  }
                }
              },
              "operator": "--",
              "prefix": false,
              "range": [
                613,
                619
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 38
                },
                "start": {
                  "column": 7,
                  "line": 38
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              612,
              619
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              624,
              625
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 38
              },
              "start": {
                "column": 18,
                "line": 38
              }
            }
          },
          "range": [
            611,
            625
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 38
            },
            "start": {
              "column": 5,
              "line": 38
            }
          }
        },
        "range": [
          606,
          625
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        606,
        626
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            627,
            628
          ],
          "loc": {
            "end": {
              "column": 1,
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
                  636,
                  640
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 39
                  },
                  "start": {
                    "column": 9,
                    "line": 39
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                634,
                640
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 39
                },
                "start": {
                  "column": 7,
                  "line": 39
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              633,
              640
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 39
              },
              "start": {
                "column": 6,
                "line": 39
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              645,
              646
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 39
              },
              "start": {
                "column": 18,
                "line": 39
              }
            }
          },
          "range": [
            632,
            646
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 39
            },
            "start": {
              "column": 5,
              "line": 39
            }
          }
        },
        "range": [
          627,
          646
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        627,
        647
      ],
      "loc": {
        "end": {
          "column": 20,
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
        "type": "BinaryExpression",
        "operator": "**",
        "left": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            648,
            649
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
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
                  657,
                  661
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 40
                  },
                  "start": {
                    "column": 9,
                    "line": 40
                  }
                }
              },
              "operator": "--",
              "prefix": true,
              "range": [
                655,
                661
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 40
                },
                "start": {
                  "column": 7,
                  "line": 40
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              654,
              661
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              666,
              667
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 40
              },
              "start": {
                "column": 18,
                "line": 40
              }
            }
          },
          "range": [
            653,
            667
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 40
            },
            "start": {
              "column": 5,
              "line": 40
            }
          }
        },
        "range": [
          648,
          667
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        648,
        668
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 40
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
      "line": 41
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
