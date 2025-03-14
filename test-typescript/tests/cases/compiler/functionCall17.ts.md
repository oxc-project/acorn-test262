__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    156
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          59,
          61
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 1
          },
          "start": {
            "column": 59,
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
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 36,
                "line": 1
              }
            },
            "range": [
              36,
              43
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                37,
                43
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            }
          },
          "range": [
            34,
            43
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 34,
              "line": 1
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "range": [
              48,
              49
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 48,
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
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 49,
                "line": 1
              }
            },
            "range": [
              49,
              58
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "range": [
                  50,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 1
                  },
                  "start": {
                    "column": 50,
                    "line": 1
                  }
                }
              },
              "range": [
                50,
                58
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 1
                },
                "start": {
                  "column": 50,
                  "line": 1
                }
              }
            }
          },
          "range": [
            45,
            58
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 1
            },
            "start": {
              "column": 45,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        61
      ],
      "loc": {
        "end": {
          "column": 61,
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
              66,
              71
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
              73,
              74
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
            62,
            65
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
          62,
          75
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
        62,
        76
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
              82,
              87
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
            78,
            81
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
          78,
          88
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
        78,
        89
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
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            91,
            94
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
          91,
          96
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        91,
        97
      ],
      "loc": {
        "end": {
          "column": 6,
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
        "arguments": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              102,
              103
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'bar'",
            "value": "bar",
            "range": [
              105,
              110
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 5
              },
              "start": {
                "column": 7,
                "line": 5
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
            98,
            101
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
          98,
          111
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        98,
        112
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
              117,
              122
            ],
            "loc": {
              "end": {
                "column": 9,
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
            "raw": "1",
            "value": 1,
            "range": [
              124,
              125
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 6
              },
              "start": {
                "column": 11,
                "line": 6
              }
            }
          },
          {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              127,
              128
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 14,
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
            113,
            116
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
          113,
          129
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
      "range": [
        113,
        130
      ],
      "loc": {
        "end": {
          "column": 17,
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
              135,
              140
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
              142,
              147
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
              149,
              150
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
          },
          {
            "type": "Literal",
            "raw": "4",
            "value": 4,
            "range": [
              152,
              153
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 21,
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
            131,
            134
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
          131,
          154
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        131,
        155
      ],
      "loc": {
        "end": {
          "column": 24,
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
