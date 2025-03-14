__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    365
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          31,
          33
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 1
          },
          "start": {
            "column": 31,
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
        "name": "takeObject",
        "optional": false,
        "range": [
          9,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
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
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            },
            "range": [
              21,
              29
            ],
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "range": [
                23,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            }
          },
          "range": [
            20,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        33
      ],
      "loc": {
        "end": {
          "column": 33,
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                79,
                81
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
              72,
              82
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          66,
          84
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 32,
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
        "name": "returnObject",
        "optional": false,
        "range": [
          43,
          55
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [],
      "returnType": {
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
          57,
          65
        ],
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "range": [
            59,
            65
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
        84
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "nonPrimitive",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              },
              "range": [
                102,
                110
              ],
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "range": [
                  104,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              90,
              110
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            90,
            110
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        86,
        111
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "primitive",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              },
              "range": [
                125,
                134
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  127,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              116,
              134
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            116,
            134
          ],
          "loc": {
            "end": {
              "column": 22,
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
        112,
        135
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nonPrimitive",
            "optional": false,
            "range": [
              148,
              160
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 9
              },
              "start": {
                "column": 11,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeObject",
          "optional": false,
          "range": [
            137,
            147
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          137,
          161
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        137,
        162
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonPrimitive",
          "optional": false,
          "range": [
            163,
            175
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnObject",
            "optional": false,
            "range": [
              178,
              190
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 10
              },
              "start": {
                "column": 15,
                "line": 10
              }
            }
          },
          "optional": false,
          "range": [
            178,
            192
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 10
            },
            "start": {
              "column": 15,
              "line": 10
            }
          }
        },
        "range": [
          163,
          192
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        163,
        193
      ],
      "loc": {
        "end": {
          "column": 30,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "primitive",
            "optional": false,
            "range": [
              206,
              215
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 11,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeObject",
          "optional": false,
          "range": [
            195,
            205
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          195,
          216
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
        195,
        217
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "primitive",
          "optional": false,
          "range": [
            234,
            243
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnObject",
            "optional": false,
            "range": [
              246,
              258
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 13
              },
              "start": {
                "column": 12,
                "line": 13
              }
            }
          },
          "optional": false,
          "range": [
            246,
            260
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        },
        "range": [
          234,
          260
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        234,
        261
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ret",
                  "optional": false,
                  "range": [
                    320,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "123",
                  "value": 123,
                  "range": [
                    326,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 16
                    },
                    "start": {
                      "column": 14,
                      "line": 16
                    }
                  }
                },
                "range": [
                  320,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              316,
              330
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ret",
              "optional": false,
              "range": [
                342,
                345
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "range": [
              335,
              346
            ],
            "loc": {
              "end": {
                "column": 15,
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
          310,
          364
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 31,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnError",
        "optional": false,
        "range": [
          288,
          299
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 15
          },
          "start": {
            "column": 22,
            "line": 15
          }
        },
        "range": [
          301,
          309
        ],
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "range": [
            303,
            309
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 15
            },
            "start": {
              "column": 24,
              "line": 15
            }
          }
        }
      },
      "range": [
        279,
        364
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
