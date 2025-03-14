__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    31,
    389
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                39,
                44
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  41,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              35,
              44
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            35,
            44
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        31,
        45
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                86,
                90
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
            "range": [
              86,
              91
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          80,
          103
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 33,
            "line": 4
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              51,
              55
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              56,
              67
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "range": [
            51,
            67
          ],
          "loc": {
            "end": {
              "column": 20,
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
          "name": "String",
          "optional": false,
          "range": [
            72,
            78
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 4
            },
            "start": {
              "column": 25,
              "line": 4
            }
          }
        },
        "range": [
          51,
          78
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 4
          },
          "start": {
            "column": 4,
            "line": 4
          }
        }
      },
      "range": [
        47,
        103
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                143,
                147
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              143,
              148
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          137,
          160
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 33,
            "line": 7
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              108,
              112
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              113,
              124
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 7
              },
              "start": {
                "column": 9,
                "line": 7
              }
            }
          },
          "range": [
            108,
            124
          ],
          "loc": {
            "end": {
              "column": 20,
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
          "name": "Number",
          "optional": false,
          "range": [
            129,
            135
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 7
            },
            "start": {
              "column": 25,
              "line": 7
            }
          }
        },
        "range": [
          108,
          135
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 7
          },
          "start": {
            "column": 4,
            "line": 7
          }
        }
      },
      "range": [
        104,
        160
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                201,
                205
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              201,
              206
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          195,
          219
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 34,
            "line": 10
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              165,
              169
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              170,
              181
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 10
              },
              "start": {
                "column": 9,
                "line": 10
              }
            }
          },
          "range": [
            165,
            181
          ],
          "loc": {
            "end": {
              "column": 20,
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
          "name": "Boolean",
          "optional": false,
          "range": [
            186,
            193
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 10
            },
            "start": {
              "column": 25,
              "line": 10
            }
          }
        },
        "range": [
          165,
          193
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 10
          },
          "start": {
            "column": 4,
            "line": 10
          }
        }
      },
      "range": [
        161,
        219
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                258,
                262
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              258,
              263
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          252,
          274
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 32,
            "line": 13
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              224,
              228
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              229,
              240
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          },
          "range": [
            224,
            240
          ],
          "loc": {
            "end": {
              "column": 20,
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
          "name": "Array",
          "optional": false,
          "range": [
            245,
            250
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 13
            },
            "start": {
              "column": 25,
              "line": 13
            }
          }
        },
        "range": [
          224,
          250
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 13
          },
          "start": {
            "column": 4,
            "line": 13
          }
        }
      },
      "range": [
        220,
        274
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                314,
                318
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
            "range": [
              314,
              319
            ],
            "loc": {
              "end": {
                "column": 9,
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
          308,
          331
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 33,
            "line": 16
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              279,
              283
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              284,
              295
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 9,
                "line": 16
              }
            }
          },
          "range": [
            279,
            295
          ],
          "loc": {
            "end": {
              "column": 20,
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
          "name": "Symbol",
          "optional": false,
          "range": [
            300,
            306
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 16
            },
            "start": {
              "column": 25,
              "line": 16
            }
          }
        },
        "range": [
          279,
          306
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 16
          },
          "start": {
            "column": 4,
            "line": 16
          }
        }
      },
      "range": [
        275,
        331
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
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                371,
                375
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              371,
              376
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          365,
          388
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 33,
            "line": 19
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              336,
              340
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              341,
              352
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 19
              },
              "start": {
                "column": 9,
                "line": 19
              }
            }
          },
          "range": [
            336,
            352
          ],
          "loc": {
            "end": {
              "column": 20,
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
          "name": "BigInt",
          "optional": false,
          "range": [
            357,
            363
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 19
            },
            "start": {
              "column": 25,
              "line": 19
            }
          }
        },
        "range": [
          336,
          363
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 19
          },
          "start": {
            "column": 4,
            "line": 19
          }
        }
      },
      "range": [
        332,
        388
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
