__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    324
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
            "name": "greetings",
            "optional": false,
            "range": [
              4,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          "range": [
            4,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        18
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "greetings",
                "optional": false,
                "range": [
                  66,
                  75
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
              "operator": "++",
              "prefix": false,
              "range": [
                66,
                77
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              66,
              78
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "greetings",
              "optional": false,
              "range": [
                90,
                99
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              83,
              100
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          60,
          102
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 41,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "greet",
        "optional": false,
        "range": [
          28,
          33
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "greeting",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 23,
                "line": 2
              }
            },
            "range": [
              42,
              50
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                44,
                50
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 25,
                  "line": 2
                }
              }
            }
          },
          "range": [
            34,
            50
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 15,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 2
          },
          "start": {
            "column": 32,
            "line": 2
          }
        },
        "range": [
          51,
          59
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            53,
            59
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 2
            },
            "start": {
              "column": 34,
              "line": 2
            }
          }
        }
      },
      "range": [
        19,
        102
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 2
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "greetings",
                "optional": false,
                "range": [
                  196,
                  205
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
              "operator": "++",
              "prefix": false,
              "range": [
                196,
                207
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              196,
              208
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "greetings",
              "optional": false,
              "range": [
                220,
                229
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              213,
              230
            ],
            "loc": {
              "end": {
                "column": 21,
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
          190,
          232
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 87,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "greet2",
        "optional": false,
        "range": [
          112,
          118
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "greeting",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 6
              },
              "start": {
                "column": 24,
                "line": 6
              }
            },
            "range": [
              127,
              135
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                129,
                135
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 6
                },
                "start": {
                  "column": 26,
                  "line": 6
                }
              }
            }
          },
          "range": [
            119,
            135
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 6
            },
            "start": {
              "column": 16,
              "line": 6
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "range": [
              137,
              138
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 6
              },
              "start": {
                "column": 34,
                "line": 6
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              141,
              143
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 6
              },
              "start": {
                "column": 38,
                "line": 6
              }
            }
          },
          "range": [
            137,
            143
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 6
            },
            "start": {
              "column": 34,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 6
              },
              "start": {
                "column": 44,
                "line": 6
              }
            },
            "range": [
              147,
              155
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                149,
                155
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 6
                },
                "start": {
                  "column": 46,
                  "line": 6
                }
              }
            }
          },
          "range": [
            145,
            155
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 6
            },
            "start": {
              "column": 42,
              "line": 6
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParams",
            "optional": false,
            "range": [
              160,
              170
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 6
              },
              "start": {
                "column": 57,
                "line": 6
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 6
              },
              "start": {
                "column": 67,
                "line": 6
              }
            },
            "range": [
              170,
              180
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  172,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 6
                  },
                  "start": {
                    "column": 69,
                    "line": 6
                  }
                }
              },
              "range": [
                172,
                180
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 6
                },
                "start": {
                  "column": 69,
                  "line": 6
                }
              }
            }
          },
          "range": [
            157,
            180
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 6
            },
            "start": {
              "column": 54,
              "line": 6
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 86,
            "line": 6
          },
          "start": {
            "column": 78,
            "line": 6
          }
        },
        "range": [
          181,
          189
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            183,
            189
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 6
            },
            "start": {
              "column": 80,
              "line": 6
            }
          }
        }
      },
      "range": [
        103,
        232
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
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
            "argument": null,
            "range": [
              315,
              322
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          309,
          324
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          242,
          245
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "greeting",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 10
              },
              "start": {
                "column": 21,
                "line": 10
              }
            },
            "range": [
              254,
              262
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                256,
                262
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 10
                },
                "start": {
                  "column": 23,
                  "line": 10
                }
              }
            }
          },
          "range": [
            246,
            262
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 10
            },
            "start": {
              "column": 13,
              "line": 10
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "range": [
              264,
              265
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 10
              },
              "start": {
                "column": 31,
                "line": 10
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              268,
              270
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 10
              },
              "start": {
                "column": 35,
                "line": 10
              }
            }
          },
          "range": [
            264,
            270
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 10
            },
            "start": {
              "column": 31,
              "line": 10
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 10
              },
              "start": {
                "column": 41,
                "line": 10
              }
            },
            "range": [
              274,
              282
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                276,
                282
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 10
                },
                "start": {
                  "column": 43,
                  "line": 10
                }
              }
            }
          },
          "range": [
            272,
            282
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 10
            },
            "start": {
              "column": 39,
              "line": 10
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParams",
            "optional": false,
            "range": [
              287,
              297
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 10
              },
              "start": {
                "column": 54,
                "line": 10
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 10
              },
              "start": {
                "column": 64,
                "line": 10
              }
            },
            "range": [
              297,
              307
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  299,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 10
                  },
                  "start": {
                    "column": 66,
                    "line": 10
                  }
                }
              },
              "range": [
                299,
                307
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 10
                },
                "start": {
                  "column": 66,
                  "line": 10
                }
              }
            }
          },
          "range": [
            284,
            307
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 10
            },
            "start": {
              "column": 51,
              "line": 10
            }
          }
        }
      ],
      "range": [
        233,
        324
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
