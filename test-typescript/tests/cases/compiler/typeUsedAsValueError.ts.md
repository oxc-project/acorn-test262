__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    418
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          20,
          24
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Interface",
        "optional": false,
        "range": [
          10,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        24
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          42,
          46
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 16,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "range": [
          32,
          41
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        26,
        46
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeAliasForSomeClass",
        "optional": false,
        "range": [
          53,
          74
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeClass",
          "optional": false,
          "range": [
            77,
            86
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 9
            },
            "start": {
              "column": 29,
              "line": 9
            }
          }
        },
        "range": [
          77,
          86
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 9
          },
          "start": {
            "column": 29,
            "line": 9
          }
        }
      },
      "range": [
        48,
        87
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someType",
        "optional": false,
        "range": [
          93,
          101
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                106,
                107
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 10
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 10
                },
                "start": {
                  "column": 19,
                  "line": 10
                }
              },
              "range": [
                107,
                115
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  109,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 10
                  },
                  "start": {
                    "column": 21,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              106,
              115
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 10
              },
              "start": {
                "column": 18,
                "line": 10
              }
            }
          }
        ],
        "range": [
          104,
          117
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 10
          },
          "start": {
            "column": 16,
            "line": 10
          }
        }
      },
      "range": [
        88,
        118
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          158,
          162
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 38,
            "line": 12
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptsSomeType",
        "optional": false,
        "range": [
          129,
          144
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
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
                "column": 36,
                "line": 12
              },
              "start": {
                "column": 26,
                "line": 12
              }
            },
            "range": [
              146,
              156
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "someType",
                "optional": false,
                "range": [
                  148,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 12
                  },
                  "start": {
                    "column": 28,
                    "line": 12
                  }
                }
              },
              "range": [
                148,
                156
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 12
                },
                "start": {
                  "column": 28,
                  "line": 12
                }
              }
            }
          },
          "range": [
            145,
            156
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 12
            },
            "start": {
              "column": 25,
              "line": 12
            }
          }
        }
      ],
      "range": [
        120,
        162
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "one",
            "optional": false,
            "range": [
              168,
              171
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Interface",
            "optional": false,
            "range": [
              174,
              183
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 16
              },
              "start": {
                "column": 10,
                "line": 16
              }
            }
          },
          "range": [
            168,
            183
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        164,
        184
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
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "range": [
              189,
              192
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "InterfaceNotFound",
            "optional": false,
            "range": [
              195,
              212
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 17
              },
              "start": {
                "column": 10,
                "line": 17
              }
            }
          },
          "range": [
            189,
            212
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        185,
        213
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "three",
            "optional": false,
            "range": [
              218,
              223
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeAliasForSomeClass",
            "optional": false,
            "range": [
              226,
              247
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 18
              },
              "start": {
                "column": 12,
                "line": 18
              }
            }
          },
          "range": [
            218,
            247
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        214,
        248
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "four",
            "optional": false,
            "range": [
              253,
              257
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
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeAliasForSomeClass",
              "optional": false,
              "range": [
                264,
                285
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            },
            "range": [
              260,
              287
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 19
              },
              "start": {
                "column": 11,
                "line": 19
              }
            }
          },
          "range": [
            253,
            287
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        249,
        288
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "five",
            "optional": false,
            "range": [
              293,
              297
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
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeAliasForSomeClassNotFound",
              "optional": false,
              "range": [
                304,
                333
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 20
                },
                "start": {
                  "column": 15,
                  "line": 20
                }
              }
            },
            "range": [
              300,
              335
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 20
              },
              "start": {
                "column": 11,
                "line": 20
              }
            }
          },
          "range": [
            293,
            335
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        289,
        336
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "six",
            "optional": false,
            "range": [
              341,
              344
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "someType",
            "optional": false,
            "range": [
              347,
              355
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 21
              },
              "start": {
                "column": 10,
                "line": 21
              }
            }
          },
          "range": [
            341,
            355
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        337,
        356
      ],
      "loc": {
        "end": {
          "column": 19,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "someType",
            "optional": false,
            "range": [
              373,
              381
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 22
              },
              "start": {
                "column": 16,
                "line": 22
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "acceptsSomeType",
          "optional": false,
          "range": [
            357,
            372
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          357,
          382
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
        357,
        383
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "someTypeNotFound",
            "optional": false,
            "range": [
              400,
              416
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 23
              },
              "start": {
                "column": 16,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "acceptsSomeType",
          "optional": false,
          "range": [
            384,
            399
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          384,
          417
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        384,
        418
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 34,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
