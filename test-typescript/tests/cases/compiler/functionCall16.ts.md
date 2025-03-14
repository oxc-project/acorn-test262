__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    144
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          48,
          50
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 1
          },
          "start": {
            "column": 48,
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
        "name": "foo",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            },
            "range": [
              14,
              21
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                15,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            }
          },
          "range": [
            13,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            },
            "range": [
              25,
              32
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                26,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            }
          },
          "range": [
            23,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              37,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 37,
                "line": 1
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 1
              },
              "start": {
                "column": 38,
                "line": 1
              }
            },
            "range": [
              38,
              47
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "range": [
                  39,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 1
                  },
                  "start": {
                    "column": 39,
                    "line": 1
                  }
                }
              },
              "range": [
                39,
                47
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 1
                },
                "start": {
                  "column": 39,
                  "line": 1
                }
              }
            }
          },
          "range": [
            34,
            47
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 1
            },
            "start": {
              "column": 34,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        50
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 1
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "'foo'",
            "value": "foo",
            "range": [
              55,
              60
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              62,
              63
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
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            51,
            54
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          51,
          64
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        51,
        65
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "'foo'",
            "value": "foo",
            "range": [
              71,
              76
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "callee": {
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
              "column": 3,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          67,
          77
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        67,
        78
      ],
      "loc": {
        "end": {
          "column": 11,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "'foo'",
            "value": "foo",
            "range": [
              84,
              89
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'bar'",
            "value": "bar",
            "range": [
              91,
              96
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            80,
            83
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "optional": false,
        "range": [
          80,
          97
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
      "range": [
        80,
        98
      ],
      "loc": {
        "end": {
          "column": 18,
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
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            100,
            103
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
        "optional": false,
        "range": [
          100,
          105
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        100,
        106
      ],
      "loc": {
        "end": {
          "column": 6,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              111,
              112
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
          {
            "type": "Literal",
            "raw": "'bar'",
            "value": "bar",
            "range": [
              114,
              119
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 6
              },
              "start": {
                "column": 7,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            107,
            110
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
        "optional": false,
        "range": [
          107,
          120
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        107,
        121
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "'foo'",
            "value": "foo",
            "range": [
              126,
              131
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'bar'",
            "value": "bar",
            "range": [
              133,
              138
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 11,
                "line": 7
              }
            }
          },
          {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              140,
              141
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            122,
            125
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          122,
          142
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        122,
        143
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
