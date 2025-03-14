__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    611
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
            "name": "𝑚",
            "optional": false,
            "range": [
              6,
              8
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "4",
            "value": 4,
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
          "range": [
            6,
            12
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        13
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "𝑀",
            "optional": false,
            "range": [
              20,
              22
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "5",
            "value": 5,
            "range": [
              25,
              26
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
          "range": [
            20,
            26
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        14,
        27
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "𝑀",
              "optional": false,
              "range": [
                40,
                42
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "𝑚",
              "optional": false,
              "range": [
                45,
                47
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "range": [
              40,
              47
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "range": [
              28,
              35
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 0,
                "line": 3
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              36,
              39
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            28,
            39
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
        "optional": false,
        "range": [
          28,
          48
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        28,
        49
      ],
      "loc": {
        "end": {
          "column": 21,
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
          64,
          93
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "𝑚",
              "range": [
                70,
                73
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "4",
              "value": 4,
              "range": [
                76,
                77
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            "range": [
              70,
              78
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "𝑀",
              "range": [
                83,
                86
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "5",
              "value": 5,
              "range": [
                89,
                90
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "range": [
              83,
              91
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 8,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "range": [
          62,
          63
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
      "superClass": null,
      "range": [
        56,
        93
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
            "name": "ၡ",
            "optional": false,
            "range": [
              131,
              132
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "6",
            "value": 6,
            "range": [
              135,
              136
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 10,
                "line": 11
              }
            }
          },
          "range": [
            131,
            136
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        125,
        137
      ],
      "loc": {
        "end": {
          "column": 12,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ၡ",
              "optional": false,
              "range": [
                150,
                151
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ၡ",
              "optional": false,
              "range": [
                155,
                156
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 17,
                  "line": 12
                }
              }
            },
            "range": [
              150,
              156
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 12
              },
              "start": {
                "column": 12,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "range": [
              138,
              145
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              146,
              149
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 12
              },
              "start": {
                "column": 8,
                "line": 12
              }
            }
          },
          "range": [
            138,
            149
          ],
          "loc": {
            "end": {
              "column": 11,
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
          138,
          157
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
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
          "line": 12
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
            "name": "ဒ",
            "optional": false,
            "range": [
              215,
              216
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "7",
            "value": 7,
            "range": [
              219,
              220
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 15
              },
              "start": {
                "column": 10,
                "line": 15
              }
            }
          },
          "range": [
            215,
            220
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        209,
        221
      ],
      "loc": {
        "end": {
          "column": 12,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ဒ",
              "optional": false,
              "range": [
                234,
                235
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 16
                },
                "start": {
                  "column": 12,
                  "line": 16
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ဒ",
              "optional": false,
              "range": [
                239,
                240
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 16
                }
              }
            },
            "range": [
              234,
              240
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 16
              },
              "start": {
                "column": 12,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "range": [
              222,
              229
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 16
              },
              "start": {
                "column": 0,
                "line": 16
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              230,
              233
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
          "range": [
            222,
            233
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          222,
          241
        ],
        "loc": {
          "end": {
            "column": 19,
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
        242
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
            "name": "ဒၡ𝑀",
            "optional": false,
            "range": [
              277,
              281
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "7",
            "value": 7,
            "range": [
              284,
              285
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
              }
            }
          },
          "range": [
            277,
            285
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        271,
        286
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ဒၡ𝑀",
              "optional": false,
              "range": [
                299,
                303
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ဒၡ𝑀",
              "optional": false,
              "range": [
                307,
                311
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 20
                },
                "start": {
                  "column": 20,
                  "line": 20
                }
              }
            },
            "range": [
              299,
              311
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 20
              },
              "start": {
                "column": 12,
                "line": 20
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "range": [
              287,
              294
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 20
              },
              "start": {
                "column": 0,
                "line": 20
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              295,
              298
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            287,
            298
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          287,
          312
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        287,
        313
      ],
      "loc": {
        "end": {
          "column": 26,
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
            "name": "ၡ𝑀ဒ",
            "optional": false,
            "range": [
              321,
              325
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "7",
            "value": 7,
            "range": [
              328,
              329
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 22
              },
              "start": {
                "column": 13,
                "line": 22
              }
            }
          },
          "range": [
            321,
            329
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        315,
        330
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ၡ𝑀ဒ",
              "optional": false,
              "range": [
                343,
                347
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 23
                },
                "start": {
                  "column": 12,
                  "line": 23
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ၡ𝑀ဒ",
              "optional": false,
              "range": [
                351,
                355
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 23
                },
                "start": {
                  "column": 20,
                  "line": 23
                }
              }
            },
            "range": [
              343,
              355
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 23
              },
              "start": {
                "column": 12,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "range": [
              331,
              338
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 23
              },
              "start": {
                "column": 0,
                "line": 23
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              339,
              342
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 23
              },
              "start": {
                "column": 8,
                "line": 23
              }
            }
          },
          "range": [
            331,
            342
          ],
          "loc": {
            "end": {
              "column": 11,
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
          331,
          356
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
        331,
        357
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "𝑀ဒၡ",
            "optional": false,
            "range": [
              365,
              369
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "7",
            "value": 7,
            "range": [
              372,
              373
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 25
              },
              "start": {
                "column": 13,
                "line": 25
              }
            }
          },
          "range": [
            365,
            373
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        359,
        374
      ],
      "loc": {
        "end": {
          "column": 15,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "BinaryExpression",
            "operator": "**",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "𝑀ဒၡ",
              "optional": false,
              "range": [
                387,
                391
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 26
                },
                "start": {
                  "column": 12,
                  "line": 26
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "𝑀ဒၡ",
              "optional": false,
              "range": [
                395,
                399
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 26
                },
                "start": {
                  "column": 20,
                  "line": 26
                }
              }
            },
            "range": [
              387,
              399
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 26
              },
              "start": {
                "column": 12,
                "line": 26
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "range": [
              375,
              382
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 26
              },
              "start": {
                "column": 0,
                "line": 26
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              383,
              386
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 26
              },
              "start": {
                "column": 8,
                "line": 26
              }
            }
          },
          "range": [
            375,
            386
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          375,
          400
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
        375,
        401
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "𝓱𝓮𝓵𝓵𝓸",
            "optional": false,
            "range": [
              409,
              419
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"𝔀𝓸𝓻𝓵𝓭\"",
            "value": "𝔀𝓸𝓻𝓵𝓭",
            "range": [
              422,
              434
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 28
              },
              "start": {
                "column": 19,
                "line": 28
              }
            }
          },
          "range": [
            409,
            434
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        403,
        435
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "Ɐⱱ",
            "optional": false,
            "range": [
              443,
              445
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 30
              },
              "start": {
                "column": 6,
                "line": 30
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"ok\"",
            "value": "ok",
            "range": [
              448,
              452
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 30
              },
              "start": {
                "column": 11,
                "line": 30
              }
            }
          },
          "range": [
            443,
            452
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        437,
        453
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "𓀸𓀹𓀺",
            "optional": false,
            "range": [
              468,
              474
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
          "init": {
            "type": "Literal",
            "raw": "\"ok\"",
            "value": "ok",
            "range": [
              477,
              481
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 32
              },
              "start": {
                "column": 15,
                "line": 32
              }
            }
          },
          "range": [
            468,
            481
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        462,
        482
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "𡚭𡚮𡚯",
            "optional": false,
            "range": [
              497,
              503
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
          "init": {
            "type": "Literal",
            "raw": "\"ok\"",
            "value": "ok",
            "range": [
              506,
              510
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
          "range": [
            497,
            510
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
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        491,
        511
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "𡚭𓀺ⱱ𝓮",
            "optional": false,
            "range": [
              526,
              533
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
          "init": {
            "type": "Literal",
            "raw": "\"ok\"",
            "value": "ok",
            "range": [
              536,
              540
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 36
              },
              "start": {
                "column": 16,
                "line": 36
              }
            }
          },
          "range": [
            526,
            540
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        520,
        541
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "𓀺ⱱ𝓮𡚭",
            "optional": false,
            "range": [
              549,
              556
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
          "init": {
            "type": "Literal",
            "raw": "\"ok\"",
            "value": "ok",
            "range": [
              559,
              563
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 38
              },
              "start": {
                "column": 16,
                "line": 38
              }
            }
          },
          "range": [
            549,
            563
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        543,
        564
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "ⱱ𝓮𡚭𓀺",
            "optional": false,
            "range": [
              572,
              579
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
          "init": {
            "type": "Literal",
            "raw": "\"ok\"",
            "value": "ok",
            "range": [
              582,
              586
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 40
              },
              "start": {
                "column": 16,
                "line": 40
              }
            }
          },
          "range": [
            572,
            586
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        566,
        587
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "𝓮𡚭𓀺ⱱ",
            "optional": false,
            "range": [
              595,
              602
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"ok\"",
            "value": "ok",
            "range": [
              605,
              609
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 42
              },
              "start": {
                "column": 16,
                "line": 42
              }
            }
          },
          "range": [
            595,
            609
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        589,
        610
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
