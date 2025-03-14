__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    175
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        21
      ],
      "attributes": [],
      "declaration": {
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
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                15,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          7,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
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
          "column": 21,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        22,
        39
      ],
      "attributes": [],
      "declaration": {
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
              "range": [
                33,
                34
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
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              33,
              38
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          29,
          39
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 17,
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
        "body": [],
        "range": [
          48,
          56
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 8,
            "line": 3
          }
        }
      },
      "test": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            45,
            46
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 3
            },
            "start": {
              "column": 5,
              "line": 3
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          44,
          46
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 3
          },
          "start": {
            "column": 4,
            "line": 3
          }
        }
      },
      "range": [
        40,
        56
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
          66,
          74
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 8,
            "line": 7
          }
        }
      },
      "test": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            63,
            64
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 7
            },
            "start": {
              "column": 5,
              "line": 7
            }
          }
        },
        "operator": "+",
        "prefix": true,
        "range": [
          62,
          64
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 7
          },
          "start": {
            "column": 4,
            "line": 7
          }
        }
      },
      "range": [
        58,
        74
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
        "body": [],
        "range": [
          84,
          92
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 8,
            "line": 11
          }
        }
      },
      "test": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            81,
            82
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 11
            },
            "start": {
              "column": 5,
              "line": 11
            }
          }
        },
        "operator": "-",
        "prefix": true,
        "range": [
          80,
          82
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 11
          },
          "start": {
            "column": 4,
            "line": 11
          }
        }
      },
      "range": [
        76,
        92
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
          102,
          110
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 8,
            "line": 15
          }
        }
      },
      "test": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            99,
            100
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 15
            },
            "start": {
              "column": 5,
              "line": 15
            }
          }
        },
        "operator": "~",
        "prefix": true,
        "range": [
          98,
          100
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 15
          },
          "start": {
            "column": 4,
            "line": 15
          }
        }
      },
      "range": [
        94,
        110
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
          124,
          132
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 12,
            "line": 19
          }
        }
      },
      "test": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            121,
            122
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 19
            },
            "start": {
              "column": 9,
              "line": 19
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          116,
          122
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
      "range": [
        112,
        132
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
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          148,
          156
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 14,
            "line": 23
          }
        }
      },
      "test": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            145,
            146
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 23
            },
            "start": {
              "column": 11,
              "line": 23
            }
          }
        },
        "operator": "typeof",
        "prefix": true,
        "range": [
          138,
          146
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 23
          },
          "start": {
            "column": 4,
            "line": 23
          }
        }
      },
      "range": [
        134,
        156
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
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
          167,
          175
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 27
          }
        }
      },
      "test": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "range": [
            164,
            165
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        },
        "operator": "++",
        "prefix": true,
        "range": [
          162,
          165
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 27
          },
          "start": {
            "column": 4,
            "line": 27
          }
        }
      },
      "range": [
        158,
        175
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
