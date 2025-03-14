__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    158
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          10
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        10
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          39,
          41
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 27,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          27,
          28
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          37,
          38
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 25,
            "line": 3
          }
        }
      },
      "range": [
        12,
        41
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          61,
          63
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 20,
            "line": 5
          },
          "start": {
            "column": 18,
            "line": 5
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
          49,
          50
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          59,
          60
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 5
          }
        }
      },
      "range": [
        43,
        63
      ],
      "loc": {
        "end": {
          "column": 20,
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
            "name": "AA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              },
              "range": [
                72,
                82
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    81,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 16,
                      "line": 7
                    }
                  }
                },
                "range": [
                  74,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              69,
              82
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              85,
              86
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
              }
            }
          },
          "range": [
            69,
            86
          ],
          "loc": {
            "end": {
              "column": 21,
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
        65,
        87
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "BB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              },
              "range": [
                95,
                105
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    104,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                },
                "range": [
                  97,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              92,
              105
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              108,
              109
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
              },
              "start": {
                "column": 20,
                "line": 8
              }
            }
          },
          "range": [
            92,
            109
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
      "declare": false,
      "kind": "var",
      "range": [
        88,
        110
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 8
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
            "name": "CC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 7,
                  "line": 9
                }
              },
              "range": [
                118,
                128
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    127,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
                    }
                  }
                },
                "range": [
                  120,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              115,
              128
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              131,
              132
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
            115,
            132
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        111,
        133
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
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "range": [
            139,
            141
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
          135,
          141
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        135,
        142
      ],
      "loc": {
        "end": {
          "column": 7,
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
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "BB",
          "optional": false,
          "range": [
            147,
            149
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        },
        "range": [
          143,
          149
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        143,
        150
      ],
      "loc": {
        "end": {
          "column": 7,
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
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "CC",
          "optional": false,
          "range": [
            155,
            157
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        "range": [
          151,
          157
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        151,
        158
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 7,
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
