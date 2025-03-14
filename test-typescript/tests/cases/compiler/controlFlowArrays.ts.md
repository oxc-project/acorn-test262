__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3145
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "cond",
        "optional": false,
        "range": [
          17,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 32,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        },
        "range": [
          23,
          32
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            25,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        }
      },
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
                    59,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    63,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "range": [
                  59,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              55,
              66
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    71,
                    72
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
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    73,
                    74
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
                "range": [
                  71,
                  75
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
              "right": {
                "type": "Literal",
                "raw": "5",
                "value": 5,
                "range": [
                  78,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "range": [
                71,
                79
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              71,
              80
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    85,
                    86
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
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    87,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 6
                    },
                    "start": {
                      "column": 6,
                      "line": 6
                    }
                  }
                },
                "range": [
                  85,
                  89
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
              "right": {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  92,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              "range": [
                85,
                99
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              85,
              100
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    105,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
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
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    107,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 7
                    },
                    "start": {
                      "column": 6,
                      "line": 7
                    }
                  }
                },
                "range": [
                  105,
                  109
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
              "right": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  112,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              },
              "range": [
                105,
                116
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
              105,
              117
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
              "name": "x",
              "optional": false,
              "range": [
                129,
                130
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              122,
              131
            ],
            "loc": {
              "end": {
                "column": 13,
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
          49,
          167
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 14,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          44,
          46
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        35,
        167
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    193,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    197,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  193,
                  199
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
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              189,
              200
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
                  "raw": "5",
                  "value": 5,
                  "range": [
                    212,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    205,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
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
                  "name": "push",
                  "optional": false,
                  "range": [
                    207,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 13
                    },
                    "start": {
                      "column": 6,
                      "line": 13
                    }
                  }
                },
                "range": [
                  205,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "range": [
                205,
                214
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              205,
              215
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
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
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    227,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    220,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    222,
                    226
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 14
                    },
                    "start": {
                      "column": 6,
                      "line": 14
                    }
                  }
                },
                "range": [
                  220,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                220,
                235
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              220,
              236
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                  "raw": "true",
                  "value": true,
                  "range": [
                    248,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 15
                    },
                    "start": {
                      "column": 11,
                      "line": 15
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    241,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    243,
                    247
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 15
                    },
                    "start": {
                      "column": 6,
                      "line": 15
                    }
                  }
                },
                "range": [
                  241,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "range": [
                241,
                253
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              241,
              254
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                266,
                267
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              259,
              268
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          183,
          304
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 14,
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
        "name": "f2",
        "optional": false,
        "range": [
          178,
          180
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [],
      "range": [
        169,
        304
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 11
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    330,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "init": null,
                "range": [
                  330,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              326,
              332
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                "name": "x",
                "optional": false,
                "range": [
                  337,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  341,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              },
              "range": [
                337,
                343
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "range": [
              337,
              344
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 21
              },
              "start": {
                "column": 4,
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
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    356,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 22
                    },
                    "start": {
                      "column": 11,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    359,
                    366
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 22
                    },
                    "start": {
                      "column": 14,
                      "line": 22
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    349,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    351,
                    355
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
                "range": [
                  349,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "range": [
                349,
                367
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              349,
              368
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                380,
                381
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
            "range": [
              373,
              382
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "range": [
          320,
          408
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 14,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          315,
          317
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [],
      "range": [
        306,
        408
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 19
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    434,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    438,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 27
                    },
                    "start": {
                      "column": 12,
                      "line": 27
                    }
                  }
                },
                "range": [
                  434,
                  440
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
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              430,
              441
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          511,
                          518
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 32
                          },
                          "start": {
                            "column": 15,
                            "line": 32
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          504,
                          505
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 32
                          },
                          "start": {
                            "column": 8,
                            "line": 32
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          506,
                          510
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 32
                          },
                          "start": {
                            "column": 10,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        504,
                        510
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 32
                        },
                        "start": {
                          "column": 8,
                          "line": 32
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      504,
                      519
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    504,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                }
              ],
              "range": [
                494,
                526
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "5",
                        "value": 5,
                        "range": [
                          475,
                          476
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 29
                          },
                          "start": {
                            "column": 15,
                            "line": 29
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          468,
                          469
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 29
                          },
                          "start": {
                            "column": 8,
                            "line": 29
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          470,
                          474
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
                      "range": [
                        468,
                        474
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
                    "optional": false,
                    "range": [
                      468,
                      477
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    468,
                    478
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                458,
                484
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 16,
                  "line": 28
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  450,
                  454
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "range": [
                450,
                456
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
            "range": [
              446,
              526
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                538,
                539
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 34
                },
                "start": {
                  "column": 11,
                  "line": 34
                }
              }
            },
            "range": [
              531,
              540
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          424,
          566
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 14,
            "line": 26
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          419,
          421
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
          }
        }
      },
      "params": [],
      "range": [
        410,
        566
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 26
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    592,
                    593
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                "init": null,
                "range": [
                  592,
                  593
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              588,
              594
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        673,
                        674
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 44
                        },
                        "start": {
                          "column": 8,
                          "line": 44
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        677,
                        679
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 44
                        },
                        "start": {
                          "column": 12,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      673,
                      679
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 44
                      },
                      "start": {
                        "column": 8,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    673,
                    680
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
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
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          696,
                          703
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 45
                          },
                          "start": {
                            "column": 15,
                            "line": 45
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          689,
                          690
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 45
                          },
                          "start": {
                            "column": 8,
                            "line": 45
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          691,
                          695
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 45
                          },
                          "start": {
                            "column": 10,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        689,
                        695
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      689,
                      704
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    689,
                    705
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                }
              ],
              "range": [
                663,
                711
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 9,
                  "line": 43
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        621,
                        622
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 40
                        },
                        "start": {
                          "column": 8,
                          "line": 40
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        625,
                        627
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 40
                        },
                        "start": {
                          "column": 12,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      621,
                      627
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    621,
                    628
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
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
                        "raw": "5",
                        "value": 5,
                        "range": [
                          644,
                          645
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 41
                          },
                          "start": {
                            "column": 15,
                            "line": 41
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          637,
                          638
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 41
                          },
                          "start": {
                            "column": 8,
                            "line": 41
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          639,
                          643
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 41
                          },
                          "start": {
                            "column": 10,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        637,
                        643
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 41
                        },
                        "start": {
                          "column": 8,
                          "line": 41
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      637,
                      646
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    637,
                    647
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                }
              ],
              "range": [
                611,
                653
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 16,
                  "line": 39
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  603,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              },
              "optional": false,
              "range": [
                603,
                609
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 39
                },
                "start": {
                  "column": 8,
                  "line": 39
                }
              }
            },
            "range": [
              599,
              711
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                723,
                724
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 47
                },
                "start": {
                  "column": 11,
                  "line": 47
                }
              }
            },
            "range": [
              716,
              725
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "range": [
          582,
          751
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 14,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          577,
          579
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "params": [],
      "range": [
        568,
        751
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 37
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    777,
                    778
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                },
                "init": null,
                "range": [
                  777,
                  778
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 51
                  },
                  "start": {
                    "column": 8,
                    "line": 51
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              773,
              779
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        838,
                        839
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 56
                        },
                        "start": {
                          "column": 8,
                          "line": 56
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        842,
                        844
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 56
                        },
                        "start": {
                          "column": 12,
                          "line": 56
                        }
                      }
                    },
                    "range": [
                      838,
                      844
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 56
                      },
                      "start": {
                        "column": 8,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    838,
                    845
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
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
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          861,
                          868
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 57
                          },
                          "start": {
                            "column": 15,
                            "line": 57
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          854,
                          855
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 57
                          },
                          "start": {
                            "column": 8,
                            "line": 57
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          856,
                          860
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 57
                          },
                          "start": {
                            "column": 10,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        854,
                        860
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 57
                        },
                        "start": {
                          "column": 8,
                          "line": 57
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      854,
                      869
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    854,
                    870
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
                      "line": 57
                    }
                  }
                }
              ],
              "range": [
                828,
                876
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 58
                },
                "start": {
                  "column": 9,
                  "line": 55
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        806,
                        807
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 53
                        },
                        "start": {
                          "column": 8,
                          "line": 53
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "5",
                      "value": 5,
                      "range": [
                        810,
                        811
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 53
                        },
                        "start": {
                          "column": 12,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      806,
                      811
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 53
                      },
                      "start": {
                        "column": 8,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    806,
                    812
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 53
                    }
                  }
                }
              ],
              "range": [
                796,
                818
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 54
                },
                "start": {
                  "column": 16,
                  "line": 52
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  788,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 52
                  }
                }
              },
              "optional": false,
              "range": [
                788,
                794
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 52
                },
                "start": {
                  "column": 8,
                  "line": 52
                }
              }
            },
            "range": [
              784,
              876
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                888,
                889
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 59
                },
                "start": {
                  "column": 11,
                  "line": 59
                }
              }
            },
            "range": [
              881,
              890
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          }
        ],
        "range": [
          767,
          914
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 60
          },
          "start": {
            "column": 14,
            "line": 50
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          762,
          764
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 50
          },
          "start": {
            "column": 9,
            "line": 50
          }
        }
      },
      "params": [],
      "range": [
        753,
        914
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 50
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    940,
                    941
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 63
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    944,
                    948
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 63
                    },
                    "start": {
                      "column": 12,
                      "line": 63
                    }
                  }
                },
                "range": [
                  940,
                  948
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 63
                  },
                  "start": {
                    "column": 8,
                    "line": 63
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              936,
              949
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
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
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        976,
                        977
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 65
                        },
                        "start": {
                          "column": 8,
                          "line": 65
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        980,
                        982
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 65
                        },
                        "start": {
                          "column": 12,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      976,
                      982
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 65
                      },
                      "start": {
                        "column": 8,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    976,
                    983
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 65
                    },
                    "start": {
                      "column": 8,
                      "line": 65
                    }
                  }
                },
                {
                  "type": "WhileStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "\"hello\"",
                              "value": "hello",
                              "range": [
                                1028,
                                1035
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 67
                                },
                                "start": {
                                  "column": 19,
                                  "line": 67
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
                              "name": "x",
                              "optional": false,
                              "range": [
                                1021,
                                1022
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 67
                                },
                                "start": {
                                  "column": 12,
                                  "line": 67
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "range": [
                                1023,
                                1027
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 67
                                },
                                "start": {
                                  "column": 14,
                                  "line": 67
                                }
                              }
                            },
                            "range": [
                              1021,
                              1027
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 67
                              },
                              "start": {
                                "column": 12,
                                "line": 67
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1021,
                            1036
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 67
                            },
                            "start": {
                              "column": 12,
                              "line": 67
                            }
                          }
                        },
                        "range": [
                          1021,
                          1037
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 67
                          },
                          "start": {
                            "column": 12,
                            "line": 67
                          }
                        }
                      }
                    ],
                    "range": [
                      1007,
                      1047
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 68
                      },
                      "start": {
                        "column": 23,
                        "line": 66
                      }
                    }
                  },
                  "test": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "range": [
                        999,
                        1003
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 66
                        },
                        "start": {
                          "column": 15,
                          "line": 66
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      999,
                      1005
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 66
                      },
                      "start": {
                        "column": 15,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    992,
                    1047
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 68
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                }
              ],
              "range": [
                966,
                1053
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 69
                },
                "start": {
                  "column": 16,
                  "line": 64
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  958,
                  962
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              },
              "optional": false,
              "range": [
                958,
                964
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 64
                },
                "start": {
                  "column": 8,
                  "line": 64
                }
              }
            },
            "range": [
              954,
              1053
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1065,
                1066
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 70
                },
                "start": {
                  "column": 11,
                  "line": 70
                }
              }
            },
            "range": [
              1058,
              1067
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 70
              }
            }
          }
        ],
        "range": [
          930,
          1089
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 71
          },
          "start": {
            "column": 14,
            "line": 62
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "range": [
          925,
          927
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 62
          },
          "start": {
            "column": 9,
            "line": 62
          }
        }
      },
      "params": [],
      "range": [
        916,
        1089
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 62
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1115,
                    1116
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    1119,
                    1121
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 74
                    },
                    "start": {
                      "column": 12,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1115,
                  1121
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 74
                  },
                  "start": {
                    "column": 8,
                    "line": 74
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1111,
              1122
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
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
                  "raw": "5",
                  "value": 5,
                  "range": [
                    1134,
                    1135
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 75
                    },
                    "start": {
                      "column": 11,
                      "line": 75
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1127,
                    1128
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 75
                    },
                    "start": {
                      "column": 4,
                      "line": 75
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    1129,
                    1133
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 75
                    },
                    "start": {
                      "column": 6,
                      "line": 75
                    }
                  }
                },
                "range": [
                  1127,
                  1133
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 75
                  },
                  "start": {
                    "column": 4,
                    "line": 75
                  }
                }
              },
              "optional": false,
              "range": [
                1127,
                1136
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 75
                },
                "start": {
                  "column": 4,
                  "line": 75
                }
              }
            },
            "range": [
              1127,
              1137
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1161,
                  1162
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 76
                  },
                  "start": {
                    "column": 23,
                    "line": 76
                  }
                }
              },
              "range": [
                1154,
                1163
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 76
                },
                "start": {
                  "column": 16,
                  "line": 76
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  1146,
                  1150
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 76
                  },
                  "start": {
                    "column": 8,
                    "line": 76
                  }
                }
              },
              "optional": false,
              "range": [
                1146,
                1152
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 76
                },
                "start": {
                  "column": 8,
                  "line": 76
                }
              }
            },
            "range": [
              1142,
              1163
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
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
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    1188,
                    1195
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 77
                    },
                    "start": {
                      "column": 11,
                      "line": 77
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1181,
                    1182
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 77
                    },
                    "start": {
                      "column": 4,
                      "line": 77
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    1183,
                    1187
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 77
                    },
                    "start": {
                      "column": 6,
                      "line": 77
                    }
                  }
                },
                "range": [
                  1181,
                  1187
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 77
                  },
                  "start": {
                    "column": 4,
                    "line": 77
                  }
                }
              },
              "optional": false,
              "range": [
                1181,
                1196
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
                }
              }
            },
            "range": [
              1181,
              1197
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1221,
                  1222
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 78
                  },
                  "start": {
                    "column": 23,
                    "line": 78
                  }
                }
              },
              "range": [
                1214,
                1223
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 78
                },
                "start": {
                  "column": 16,
                  "line": 78
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  1206,
                  1210
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 78
                  },
                  "start": {
                    "column": 8,
                    "line": 78
                  }
                }
              },
              "optional": false,
              "range": [
                1206,
                1212
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 78
                },
                "start": {
                  "column": 8,
                  "line": 78
                }
              }
            },
            "range": [
              1202,
              1223
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
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
                  "raw": "true",
                  "value": true,
                  "range": [
                    1259,
                    1263
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 79
                    },
                    "start": {
                      "column": 11,
                      "line": 79
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1252,
                    1253
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 79
                    },
                    "start": {
                      "column": 4,
                      "line": 79
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    1254,
                    1258
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 79
                    },
                    "start": {
                      "column": 6,
                      "line": 79
                    }
                  }
                },
                "range": [
                  1252,
                  1258
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 79
                  },
                  "start": {
                    "column": 4,
                    "line": 79
                  }
                }
              },
              "optional": false,
              "range": [
                1252,
                1264
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 79
                },
                "start": {
                  "column": 4,
                  "line": 79
                }
              }
            },
            "range": [
              1252,
              1265
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1277,
                1278
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 80
                },
                "start": {
                  "column": 11,
                  "line": 80
                }
              }
            },
            "range": [
              1270,
              1279
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          }
        ],
        "range": [
          1105,
          1315
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 81
          },
          "start": {
            "column": 14,
            "line": 73
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "range": [
          1100,
          1102
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 73
          },
          "start": {
            "column": 9,
            "line": 73
          }
        }
      },
      "params": [],
      "range": [
        1091,
        1315
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 73
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1341,
                    1342
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 84
                    },
                    "start": {
                      "column": 8,
                      "line": 84
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    1345,
                    1347
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 84
                    },
                    "start": {
                      "column": 12,
                      "line": 84
                    }
                  }
                },
                "range": [
                  1341,
                  1347
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 84
                  },
                  "start": {
                    "column": 8,
                    "line": 84
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1337,
              1348
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          1449,
                          1456
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 90
                          },
                          "start": {
                            "column": 15,
                            "line": 90
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          1442,
                          1443
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 90
                          },
                          "start": {
                            "column": 8,
                            "line": 90
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          1444,
                          1448
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 90
                          },
                          "start": {
                            "column": 10,
                            "line": 90
                          }
                        }
                      },
                      "range": [
                        1442,
                        1448
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 90
                        },
                        "start": {
                          "column": 8,
                          "line": 90
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1442,
                      1457
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 90
                      },
                      "start": {
                        "column": 8,
                        "line": 90
                      }
                    }
                  },
                  "range": [
                    1442,
                    1458
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 90
                    },
                    "start": {
                      "column": 8,
                      "line": 90
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1474,
                      1475
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 91
                      },
                      "start": {
                        "column": 15,
                        "line": 91
                      }
                    }
                  },
                  "range": [
                    1467,
                    1476
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 91
                    },
                    "start": {
                      "column": 8,
                      "line": 91
                    }
                  }
                }
              ],
              "range": [
                1432,
                1495
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 92
                },
                "start": {
                  "column": 9,
                  "line": 89
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "5",
                        "value": 5,
                        "range": [
                          1382,
                          1383
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 86
                          },
                          "start": {
                            "column": 15,
                            "line": 86
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          1375,
                          1376
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 86
                          },
                          "start": {
                            "column": 8,
                            "line": 86
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          1377,
                          1381
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 86
                          },
                          "start": {
                            "column": 10,
                            "line": 86
                          }
                        }
                      },
                      "range": [
                        1375,
                        1381
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 86
                        },
                        "start": {
                          "column": 8,
                          "line": 86
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1375,
                      1384
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 86
                      },
                      "start": {
                        "column": 8,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    1375,
                    1385
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 86
                    },
                    "start": {
                      "column": 8,
                      "line": 86
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1401,
                      1402
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 87
                      },
                      "start": {
                        "column": 15,
                        "line": 87
                      }
                    }
                  },
                  "range": [
                    1394,
                    1403
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 87
                    },
                    "start": {
                      "column": 8,
                      "line": 87
                    }
                  }
                }
              ],
              "range": [
                1365,
                1422
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 88
                },
                "start": {
                  "column": 16,
                  "line": 85
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  1357,
                  1361
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 85
                  },
                  "start": {
                    "column": 8,
                    "line": 85
                  }
                }
              },
              "optional": false,
              "range": [
                1357,
                1363
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 85
                },
                "start": {
                  "column": 8,
                  "line": 85
                }
              }
            },
            "range": [
              1353,
              1495
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "range": [
          1331,
          1497
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 93
          },
          "start": {
            "column": 14,
            "line": 83
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "range": [
          1326,
          1328
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 83
          },
          "start": {
            "column": 9,
            "line": 83
          }
        }
      },
      "params": [],
      "range": [
        1317,
        1497
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 83
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1524,
                    1525
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 96
                    },
                    "start": {
                      "column": 8,
                      "line": 96
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    1528,
                    1530
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 96
                    },
                    "start": {
                      "column": 12,
                      "line": 96
                    }
                  }
                },
                "range": [
                  1524,
                  1530
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 96
                  },
                  "start": {
                    "column": 8,
                    "line": 96
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1520,
              1531
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "5",
                        "value": 5,
                        "range": [
                          1629,
                          1630
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 102
                          },
                          "start": {
                            "column": 15,
                            "line": 102
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          1622,
                          1623
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 102
                          },
                          "start": {
                            "column": 8,
                            "line": 102
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          1624,
                          1628
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 102
                          },
                          "start": {
                            "column": 10,
                            "line": 102
                          }
                        }
                      },
                      "range": [
                        1622,
                        1628
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 102
                        },
                        "start": {
                          "column": 8,
                          "line": 102
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1622,
                      1631
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 102
                      },
                      "start": {
                        "column": 8,
                        "line": 102
                      }
                    }
                  },
                  "range": [
                    1622,
                    1632
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 102
                    },
                    "start": {
                      "column": 8,
                      "line": 102
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1641,
                      1642
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 103
                      },
                      "start": {
                        "column": 8,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    1641,
                    1643
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 103
                    },
                    "start": {
                      "column": 8,
                      "line": 103
                    }
                  }
                },
                {
                  "type": "WhileStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "\"hello\"",
                              "value": "hello",
                              "range": [
                                1701,
                                1708
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 105
                                },
                                "start": {
                                  "column": 19,
                                  "line": 105
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
                              "name": "x",
                              "optional": false,
                              "range": [
                                1694,
                                1695
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 105
                                },
                                "start": {
                                  "column": 12,
                                  "line": 105
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "range": [
                                1696,
                                1700
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 105
                                },
                                "start": {
                                  "column": 14,
                                  "line": 105
                                }
                              }
                            },
                            "range": [
                              1694,
                              1700
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 105
                              },
                              "start": {
                                "column": 12,
                                "line": 105
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1694,
                            1709
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 105
                            },
                            "start": {
                              "column": 12,
                              "line": 105
                            }
                          }
                        },
                        "range": [
                          1694,
                          1710
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 105
                          },
                          "start": {
                            "column": 12,
                            "line": 105
                          }
                        }
                      }
                    ],
                    "range": [
                      1680,
                      1720
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 106
                      },
                      "start": {
                        "column": 23,
                        "line": 104
                      }
                    }
                  },
                  "test": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "range": [
                        1672,
                        1676
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 104
                        },
                        "start": {
                          "column": 15,
                          "line": 104
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1672,
                      1678
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 104
                      },
                      "start": {
                        "column": 15,
                        "line": 104
                      }
                    }
                  },
                  "range": [
                    1665,
                    1720
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 106
                    },
                    "start": {
                      "column": 8,
                      "line": 104
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1729,
                      1730
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 107
                      },
                      "start": {
                        "column": 8,
                        "line": 107
                      }
                    }
                  },
                  "range": [
                    1729,
                    1731
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 107
                    },
                    "start": {
                      "column": 8,
                      "line": 107
                    }
                  }
                }
              ],
              "range": [
                1612,
                1761
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 108
                },
                "start": {
                  "column": 9,
                  "line": 101
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          1565,
                          1569
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 98
                          },
                          "start": {
                            "column": 15,
                            "line": 98
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          1558,
                          1559
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 98
                          },
                          "start": {
                            "column": 8,
                            "line": 98
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          1560,
                          1564
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 98
                          },
                          "start": {
                            "column": 10,
                            "line": 98
                          }
                        }
                      },
                      "range": [
                        1558,
                        1564
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 98
                        },
                        "start": {
                          "column": 8,
                          "line": 98
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1558,
                      1570
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 98
                      },
                      "start": {
                        "column": 8,
                        "line": 98
                      }
                    }
                  },
                  "range": [
                    1558,
                    1571
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 98
                    },
                    "start": {
                      "column": 8,
                      "line": 98
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1580,
                      1581
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 99
                      },
                      "start": {
                        "column": 8,
                        "line": 99
                      }
                    }
                  },
                  "range": [
                    1580,
                    1582
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 99
                    },
                    "start": {
                      "column": 8,
                      "line": 99
                    }
                  }
                }
              ],
              "range": [
                1548,
                1602
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 100
                },
                "start": {
                  "column": 16,
                  "line": 97
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  1540,
                  1544
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 97
                  },
                  "start": {
                    "column": 8,
                    "line": 97
                  }
                }
              },
              "optional": false,
              "range": [
                1540,
                1546
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 97
                },
                "start": {
                  "column": 8,
                  "line": 97
                }
              }
            },
            "range": [
              1536,
              1761
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 97
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
                  "raw": "99",
                  "value": 99,
                  "range": [
                    1773,
                    1775
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 109
                    },
                    "start": {
                      "column": 11,
                      "line": 109
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1766,
                    1767
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 109
                    },
                    "start": {
                      "column": 4,
                      "line": 109
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    1768,
                    1772
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 109
                    },
                    "start": {
                      "column": 6,
                      "line": 109
                    }
                  }
                },
                "range": [
                  1766,
                  1772
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 109
                  },
                  "start": {
                    "column": 4,
                    "line": 109
                  }
                }
              },
              "optional": false,
              "range": [
                1766,
                1776
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 109
                },
                "start": {
                  "column": 4,
                  "line": 109
                }
              }
            },
            "range": [
              1766,
              1777
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 109
              },
              "start": {
                "column": 4,
                "line": 109
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1789,
                1790
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 110
                },
                "start": {
                  "column": 11,
                  "line": 110
                }
              }
            },
            "range": [
              1782,
              1791
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 110
              }
            }
          }
        ],
        "range": [
          1514,
          1827
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 111
          },
          "start": {
            "column": 15,
            "line": 95
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "range": [
          1508,
          1511
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 95
          },
          "start": {
            "column": 9,
            "line": 95
          }
        }
      },
      "params": [],
      "range": [
        1499,
        1827
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 95
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1854,
                    1855
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 114
                    },
                    "start": {
                      "column": 8,
                      "line": 114
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    1858,
                    1860
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 114
                    },
                    "start": {
                      "column": 12,
                      "line": 114
                    }
                  }
                },
                "range": [
                  1854,
                  1860
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 114
                  },
                  "start": {
                    "column": 8,
                    "line": 114
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1850,
              1861
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 114
              },
              "start": {
                "column": 4,
                "line": 114
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          1937,
                          1944
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 116
                          },
                          "start": {
                            "column": 15,
                            "line": 116
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          1930,
                          1931
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 116
                          },
                          "start": {
                            "column": 8,
                            "line": 116
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          1932,
                          1936
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 116
                          },
                          "start": {
                            "column": 10,
                            "line": 116
                          }
                        }
                      },
                      "range": [
                        1930,
                        1936
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 116
                        },
                        "start": {
                          "column": 8,
                          "line": 116
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1930,
                      1945
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 116
                      },
                      "start": {
                        "column": 8,
                        "line": 116
                      }
                    }
                  },
                  "range": [
                    1930,
                    1946
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 116
                    },
                    "start": {
                      "column": 8,
                      "line": 116
                    }
                  }
                }
              ],
              "range": [
                1886,
                1952
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 117
                },
                "start": {
                  "column": 24,
                  "line": 115
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1870,
                    1871
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 115
                    },
                    "start": {
                      "column": 8,
                      "line": 115
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "range": [
                    1872,
                    1878
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 115
                    },
                    "start": {
                      "column": 10,
                      "line": 115
                    }
                  }
                },
                "range": [
                  1870,
                  1878
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 115
                  },
                  "start": {
                    "column": 8,
                    "line": 115
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1883,
                  1884
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 115
                  },
                  "start": {
                    "column": 21,
                    "line": 115
                  }
                }
              },
              "range": [
                1870,
                1884
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 115
                },
                "start": {
                  "column": 8,
                  "line": 115
                }
              }
            },
            "range": [
              1866,
              1952
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 115
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1964,
                1965
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 118
                },
                "start": {
                  "column": 11,
                  "line": 118
                }
              }
            },
            "range": [
              1957,
              1966
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 118
              },
              "start": {
                "column": 4,
                "line": 118
              }
            }
          }
        ],
        "range": [
          1844,
          1968
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 119
          },
          "start": {
            "column": 15,
            "line": 113
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "range": [
          1838,
          1841
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 113
          },
          "start": {
            "column": 9,
            "line": 113
          }
        }
      },
      "params": [],
      "range": [
        1829,
        1968
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 113
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1995,
                    1996
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 122
                    },
                    "start": {
                      "column": 8,
                      "line": 122
                    }
                  }
                },
                "init": null,
                "range": [
                  1995,
                  1996
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 122
                  },
                  "start": {
                    "column": 8,
                    "line": 122
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1991,
              1997
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 122
              },
              "start": {
                "column": 4,
                "line": 122
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
                "name": "x",
                "optional": false,
                "range": [
                  2002,
                  2003
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 123
                  },
                  "start": {
                    "column": 4,
                    "line": 123
                  }
                }
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  2006,
                  2008
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 123
                  },
                  "start": {
                    "column": 8,
                    "line": 123
                  }
                }
              },
              "range": [
                2002,
                2008
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 123
                },
                "start": {
                  "column": 4,
                  "line": 123
                }
              }
            },
            "range": [
              2002,
              2009
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 123
              },
              "start": {
                "column": 4,
                "line": 123
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          2085,
                          2092
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 125
                          },
                          "start": {
                            "column": 15,
                            "line": 125
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          2078,
                          2079
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 125
                          },
                          "start": {
                            "column": 8,
                            "line": 125
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          2080,
                          2084
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 125
                          },
                          "start": {
                            "column": 10,
                            "line": 125
                          }
                        }
                      },
                      "range": [
                        2078,
                        2084
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 125
                        },
                        "start": {
                          "column": 8,
                          "line": 125
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2078,
                      2093
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 125
                      },
                      "start": {
                        "column": 8,
                        "line": 125
                      }
                    }
                  },
                  "range": [
                    2078,
                    2094
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 125
                    },
                    "start": {
                      "column": 8,
                      "line": 125
                    }
                  }
                }
              ],
              "range": [
                2034,
                2100
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 126
                },
                "start": {
                  "column": 24,
                  "line": 124
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2018,
                    2019
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 124
                    },
                    "start": {
                      "column": 8,
                      "line": 124
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "range": [
                    2020,
                    2026
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 124
                    },
                    "start": {
                      "column": 10,
                      "line": 124
                    }
                  }
                },
                "range": [
                  2018,
                  2026
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 124
                  },
                  "start": {
                    "column": 8,
                    "line": 124
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2031,
                  2032
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 124
                  },
                  "start": {
                    "column": 21,
                    "line": 124
                  }
                }
              },
              "range": [
                2018,
                2032
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 124
                },
                "start": {
                  "column": 8,
                  "line": 124
                }
              }
            },
            "range": [
              2014,
              2100
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 126
              },
              "start": {
                "column": 4,
                "line": 124
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2112,
                2113
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 127
                },
                "start": {
                  "column": 11,
                  "line": 127
                }
              }
            },
            "range": [
              2105,
              2114
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 127
              },
              "start": {
                "column": 4,
                "line": 127
              }
            }
          }
        ],
        "range": [
          1985,
          2116
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 128
          },
          "start": {
            "column": 15,
            "line": 121
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "range": [
          1979,
          1982
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 121
          },
          "start": {
            "column": 9,
            "line": 121
          }
        }
      },
      "params": [],
      "range": [
        1970,
        2116
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 128
        },
        "start": {
          "column": 0,
          "line": 121
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2143,
                    2144
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 131
                    },
                    "start": {
                      "column": 8,
                      "line": 131
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    2147,
                    2149
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 131
                    },
                    "start": {
                      "column": 12,
                      "line": 131
                    }
                  }
                },
                "range": [
                  2143,
                  2149
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 131
                  },
                  "start": {
                    "column": 8,
                    "line": 131
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              2139,
              2150
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 131
              },
              "start": {
                "column": 4,
                "line": 131
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
                  "raw": "5",
                  "value": 5,
                  "range": [
                    2162,
                    2163
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 132
                    },
                    "start": {
                      "column": 11,
                      "line": 132
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2155,
                    2156
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 132
                    },
                    "start": {
                      "column": 4,
                      "line": 132
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    2157,
                    2161
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 132
                    },
                    "start": {
                      "column": 6,
                      "line": 132
                    }
                  }
                },
                "range": [
                  2155,
                  2161
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 132
                  },
                  "start": {
                    "column": 4,
                    "line": 132
                  }
                }
              },
              "optional": false,
              "range": [
                2155,
                2164
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 132
                },
                "start": {
                  "column": 4,
                  "line": 132
                }
              }
            },
            "range": [
              2155,
              2165
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 132
              },
              "start": {
                "column": 4,
                "line": 132
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
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    2177,
                    2184
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 133
                    },
                    "start": {
                      "column": 11,
                      "line": 133
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2170,
                    2171
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 133
                    },
                    "start": {
                      "column": 4,
                      "line": 133
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    2172,
                    2176
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 133
                    },
                    "start": {
                      "column": 6,
                      "line": 133
                    }
                  }
                },
                "range": [
                  2170,
                  2176
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 133
                  },
                  "start": {
                    "column": 4,
                    "line": 133
                  }
                }
              },
              "optional": false,
              "range": [
                2170,
                2185
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 133
                },
                "start": {
                  "column": 4,
                  "line": 133
                }
              }
            },
            "range": [
              2170,
              2186
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 133
              },
              "start": {
                "column": 4,
                "line": 133
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
                  "raw": "true",
                  "value": true,
                  "range": [
                    2198,
                    2202
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 134
                    },
                    "start": {
                      "column": 11,
                      "line": 134
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2191,
                    2192
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 134
                    },
                    "start": {
                      "column": 4,
                      "line": 134
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    2193,
                    2197
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 134
                    },
                    "start": {
                      "column": 6,
                      "line": 134
                    }
                  }
                },
                "range": [
                  2191,
                  2197
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 134
                  },
                  "start": {
                    "column": 4,
                    "line": 134
                  }
                }
              },
              "optional": false,
              "range": [
                2191,
                2203
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 134
                },
                "start": {
                  "column": 4,
                  "line": 134
                }
              }
            },
            "range": [
              2191,
              2204
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 134
              },
              "start": {
                "column": 4,
                "line": 134
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2216,
                2217
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 135
                },
                "start": {
                  "column": 11,
                  "line": 135
                }
              }
            },
            "range": [
              2209,
              2218
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 135
              },
              "start": {
                "column": 4,
                "line": 135
              }
            }
          }
        ],
        "range": [
          2133,
          2254
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 136
          },
          "start": {
            "column": 15,
            "line": 130
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "range": [
          2127,
          2130
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 130
          },
          "start": {
            "column": 9,
            "line": 130
          }
        }
      },
      "params": [],
      "range": [
        2118,
        2254
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 136
        },
        "start": {
          "column": 0,
          "line": 130
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2283,
                    2284
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 139
                    },
                    "start": {
                      "column": 10,
                      "line": 139
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    2287,
                    2289
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 139
                    },
                    "start": {
                      "column": 14,
                      "line": 139
                    }
                  }
                },
                "range": [
                  2283,
                  2289
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 139
                  },
                  "start": {
                    "column": 10,
                    "line": 139
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2277,
              2290
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 139
              },
              "start": {
                "column": 4,
                "line": 139
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
                  "raw": "5",
                  "value": 5,
                  "range": [
                    2302,
                    2303
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 140
                    },
                    "start": {
                      "column": 11,
                      "line": 140
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2295,
                    2296
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 140
                    },
                    "start": {
                      "column": 4,
                      "line": 140
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    2297,
                    2301
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 140
                    },
                    "start": {
                      "column": 6,
                      "line": 140
                    }
                  }
                },
                "range": [
                  2295,
                  2301
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 140
                  },
                  "start": {
                    "column": 4,
                    "line": 140
                  }
                }
              },
              "optional": false,
              "range": [
                2295,
                2304
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 140
                },
                "start": {
                  "column": 4,
                  "line": 140
                }
              }
            },
            "range": [
              2295,
              2305
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 140
              },
              "start": {
                "column": 4,
                "line": 140
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
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    2317,
                    2324
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 141
                    },
                    "start": {
                      "column": 11,
                      "line": 141
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2310,
                    2311
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 141
                    },
                    "start": {
                      "column": 4,
                      "line": 141
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    2312,
                    2316
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 141
                    },
                    "start": {
                      "column": 6,
                      "line": 141
                    }
                  }
                },
                "range": [
                  2310,
                  2316
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 141
                  },
                  "start": {
                    "column": 4,
                    "line": 141
                  }
                }
              },
              "optional": false,
              "range": [
                2310,
                2325
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 141
                },
                "start": {
                  "column": 4,
                  "line": 141
                }
              }
            },
            "range": [
              2310,
              2326
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 141
              },
              "start": {
                "column": 4,
                "line": 141
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
                  "raw": "true",
                  "value": true,
                  "range": [
                    2338,
                    2342
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 142
                    },
                    "start": {
                      "column": 11,
                      "line": 142
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2331,
                    2332
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 142
                    },
                    "start": {
                      "column": 4,
                      "line": 142
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    2333,
                    2337
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 142
                    },
                    "start": {
                      "column": 6,
                      "line": 142
                    }
                  }
                },
                "range": [
                  2331,
                  2337
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 142
                  },
                  "start": {
                    "column": 4,
                    "line": 142
                  }
                }
              },
              "optional": false,
              "range": [
                2331,
                2343
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 142
                },
                "start": {
                  "column": 4,
                  "line": 142
                }
              }
            },
            "range": [
              2331,
              2344
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 142
              },
              "start": {
                "column": 4,
                "line": 142
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2356,
                2357
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 143
                },
                "start": {
                  "column": 11,
                  "line": 143
                }
              }
            },
            "range": [
              2349,
              2358
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 143
              },
              "start": {
                "column": 4,
                "line": 143
              }
            }
          }
        ],
        "range": [
          2271,
          2394
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 144
          },
          "start": {
            "column": 15,
            "line": 138
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "range": [
          2265,
          2268
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 138
          },
          "start": {
            "column": 9,
            "line": 138
          }
        }
      },
      "params": [],
      "range": [
        2256,
        2394
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 144
        },
        "start": {
          "column": 0,
          "line": 138
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2421,
                    2422
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 147
                    },
                    "start": {
                      "column": 8,
                      "line": 147
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    2425,
                    2427
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 147
                    },
                    "start": {
                      "column": 12,
                      "line": 147
                    }
                  }
                },
                "range": [
                  2421,
                  2427
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 147
                  },
                  "start": {
                    "column": 8,
                    "line": 147
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2417,
              2428
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 147
              },
              "start": {
                "column": 4,
                "line": 147
              }
            }
          },
          {
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2473,
                      2475
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 149
                      },
                      "start": {
                        "column": 23,
                        "line": 149
                      }
                    }
                  },
                  "test": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "range": [
                        2465,
                        2469
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 149
                        },
                        "start": {
                          "column": 15,
                          "line": 149
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2465,
                      2471
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 149
                      },
                      "start": {
                        "column": 15,
                        "line": 149
                      }
                    }
                  },
                  "range": [
                    2458,
                    2475
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 149
                    },
                    "start": {
                      "column": 8,
                      "line": 149
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
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          2491,
                          2498
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 150
                          },
                          "start": {
                            "column": 15,
                            "line": 150
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          2484,
                          2485
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 150
                          },
                          "start": {
                            "column": 8,
                            "line": 150
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          2486,
                          2490
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 150
                          },
                          "start": {
                            "column": 10,
                            "line": 150
                          }
                        }
                      },
                      "range": [
                        2484,
                        2490
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 150
                        },
                        "start": {
                          "column": 8,
                          "line": 150
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2484,
                      2499
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 150
                      },
                      "start": {
                        "column": 8,
                        "line": 150
                      }
                    }
                  },
                  "range": [
                    2484,
                    2500
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 150
                    },
                    "start": {
                      "column": 8,
                      "line": 150
                    }
                  }
                }
              ],
              "range": [
                2448,
                2506
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 151
                },
                "start": {
                  "column": 19,
                  "line": 148
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  2440,
                  2444
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 148
                  },
                  "start": {
                    "column": 11,
                    "line": 148
                  }
                }
              },
              "optional": false,
              "range": [
                2440,
                2446
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 148
                },
                "start": {
                  "column": 11,
                  "line": 148
                }
              }
            },
            "range": [
              2433,
              2506
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 151
              },
              "start": {
                "column": 4,
                "line": 148
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2518,
                2519
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 152
                },
                "start": {
                  "column": 11,
                  "line": 152
                }
              }
            },
            "range": [
              2511,
              2520
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 152
              },
              "start": {
                "column": 4,
                "line": 152
              }
            }
          }
        ],
        "range": [
          2411,
          2535
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 153
          },
          "start": {
            "column": 15,
            "line": 146
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "range": [
          2405,
          2408
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 146
          },
          "start": {
            "column": 9,
            "line": 146
          }
        }
      },
      "params": [],
      "range": [
        2396,
        2535
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 153
        },
        "start": {
          "column": 0,
          "line": 146
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2562,
                    2563
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 156
                    },
                    "start": {
                      "column": 8,
                      "line": 156
                    }
                  }
                },
                "init": null,
                "range": [
                  2562,
                  2563
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 156
                  },
                  "start": {
                    "column": 8,
                    "line": 156
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2558,
              2564
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 156
              },
              "start": {
                "column": 4,
                "line": 156
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    2573,
                    2574
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 157
                    },
                    "start": {
                      "column": 8,
                      "line": 157
                    }
                  }
                },
                "init": null,
                "range": [
                  2573,
                  2574
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 157
                  },
                  "start": {
                    "column": 8,
                    "line": 157
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2569,
              2575
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 157
              },
              "start": {
                "column": 4,
                "line": 157
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
                  "raw": "5",
                  "value": 5,
                  "range": [
                    2597,
                    2598
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 158
                    },
                    "start": {
                      "column": 21,
                      "line": 158
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2581,
                          2582
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 158
                          },
                          "start": {
                            "column": 5,
                            "line": 158
                          }
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "range": [
                          2585,
                          2587
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 158
                          },
                          "start": {
                            "column": 9,
                            "line": 158
                          }
                        }
                      },
                      "range": [
                        2581,
                        2587
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 158
                        },
                        "start": {
                          "column": 5,
                          "line": 158
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2589,
                        2590
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 158
                        },
                        "start": {
                          "column": 13,
                          "line": 158
                        }
                      }
                    }
                  ],
                  "range": [
                    2581,
                    2590
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 158
                    },
                    "start": {
                      "column": 5,
                      "line": 158
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    2592,
                    2596
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 158
                    },
                    "start": {
                      "column": 16,
                      "line": 158
                    }
                  }
                },
                "range": [
                  2580,
                  2596
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 158
                  },
                  "start": {
                    "column": 4,
                    "line": 158
                  }
                }
              },
              "optional": false,
              "range": [
                2580,
                2599
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 158
                },
                "start": {
                  "column": 4,
                  "line": 158
                }
              }
            },
            "range": [
              2580,
              2600
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 158
              },
              "start": {
                "column": 4,
                "line": 158
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
                  "raw": "true",
                  "value": true,
                  "range": [
                    2631,
                    2635
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 159
                    },
                    "start": {
                      "column": 30,
                      "line": 159
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"hello\"",
                          "value": "hello",
                          "range": [
                            2613,
                            2620
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 159
                            },
                            "start": {
                              "column": 12,
                              "line": 159
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            2606,
                            2607
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 159
                            },
                            "start": {
                              "column": 5,
                              "line": 159
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "range": [
                            2608,
                            2612
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 159
                            },
                            "start": {
                              "column": 7,
                              "line": 159
                            }
                          }
                        },
                        "range": [
                          2606,
                          2612
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 159
                          },
                          "start": {
                            "column": 5,
                            "line": 159
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        2606,
                        2621
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 159
                        },
                        "start": {
                          "column": 5,
                          "line": 159
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2623,
                        2624
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 159
                        },
                        "start": {
                          "column": 22,
                          "line": 159
                        }
                      }
                    }
                  ],
                  "range": [
                    2606,
                    2624
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 159
                    },
                    "start": {
                      "column": 5,
                      "line": 159
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    2626,
                    2630
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 159
                    },
                    "start": {
                      "column": 25,
                      "line": 159
                    }
                  }
                },
                "range": [
                  2605,
                  2630
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 159
                  },
                  "start": {
                    "column": 4,
                    "line": 159
                  }
                }
              },
              "optional": false,
              "range": [
                2605,
                2636
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 159
                },
                "start": {
                  "column": 4,
                  "line": 159
                }
              }
            },
            "range": [
              2605,
              2637
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 159
              },
              "start": {
                "column": 4,
                "line": 159
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2644,
                    2645
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 160
                    },
                    "start": {
                      "column": 6,
                      "line": 160
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    2648,
                    2649
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 160
                    },
                    "start": {
                      "column": 10,
                      "line": 160
                    }
                  }
                },
                "range": [
                  2642,
                  2650
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 160
                  },
                  "start": {
                    "column": 4,
                    "line": 160
                  }
                }
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        2655,
                        2656
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 160
                        },
                        "start": {
                          "column": 17,
                          "line": 160
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2658,
                        2659
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 160
                        },
                        "start": {
                          "column": 20,
                          "line": 160
                        }
                      }
                    },
                    "range": [
                      2655,
                      2659
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 160
                      },
                      "start": {
                        "column": 17,
                        "line": 160
                      }
                    }
                  }
                ],
                "range": [
                  2653,
                  2661
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 160
                  },
                  "start": {
                    "column": 15,
                    "line": 160
                  }
                }
              },
              "range": [
                2642,
                2661
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 160
                },
                "start": {
                  "column": 4,
                  "line": 160
                }
              }
            },
            "range": [
              2642,
              2662
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 160
              },
              "start": {
                "column": 4,
                "line": 160
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2674,
                2675
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 161
                },
                "start": {
                  "column": 11,
                  "line": 161
                }
              }
            },
            "range": [
              2667,
              2676
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 161
              },
              "start": {
                "column": 4,
                "line": 161
              }
            }
          }
        ],
        "range": [
          2552,
          2728
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 162
          },
          "start": {
            "column": 15,
            "line": 155
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f16",
        "optional": false,
        "range": [
          2546,
          2549
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 155
          },
          "start": {
            "column": 9,
            "line": 155
          }
        }
      },
      "params": [],
      "range": [
        2537,
        2728
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 162
        },
        "start": {
          "column": 0,
          "line": 155
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2755,
                    2756
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 165
                    },
                    "start": {
                      "column": 8,
                      "line": 165
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    2759,
                    2761
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 165
                    },
                    "start": {
                      "column": 12,
                      "line": 165
                    }
                  }
                },
                "range": [
                  2755,
                  2761
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 165
                  },
                  "start": {
                    "column": 8,
                    "line": 165
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2751,
              2762
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 165
              },
              "start": {
                "column": 4,
                "line": 165
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
                  "raw": "5",
                  "value": 5,
                  "range": [
                    2777,
                    2778
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 166
                    },
                    "start": {
                      "column": 14,
                      "line": 166
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2767,
                    2768
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 166
                    },
                    "start": {
                      "column": 4,
                      "line": 166
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "range": [
                    2769,
                    2776
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 166
                    },
                    "start": {
                      "column": 6,
                      "line": 166
                    }
                  }
                },
                "range": [
                  2767,
                  2776
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 166
                  },
                  "start": {
                    "column": 4,
                    "line": 166
                  }
                }
              },
              "optional": false,
              "range": [
                2767,
                2779
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 166
                },
                "start": {
                  "column": 4,
                  "line": 166
                }
              }
            },
            "range": [
              2767,
              2780
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 166
              },
              "start": {
                "column": 4,
                "line": 166
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
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    2795,
                    2802
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 167
                    },
                    "start": {
                      "column": 14,
                      "line": 167
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2785,
                    2786
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 167
                    },
                    "start": {
                      "column": 4,
                      "line": 167
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "range": [
                    2787,
                    2794
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 167
                    },
                    "start": {
                      "column": 6,
                      "line": 167
                    }
                  }
                },
                "range": [
                  2785,
                  2794
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 167
                  },
                  "start": {
                    "column": 4,
                    "line": 167
                  }
                }
              },
              "optional": false,
              "range": [
                2785,
                2803
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 167
                },
                "start": {
                  "column": 4,
                  "line": 167
                }
              }
            },
            "range": [
              2785,
              2804
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 167
              },
              "start": {
                "column": 4,
                "line": 167
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
                  "raw": "true",
                  "value": true,
                  "range": [
                    2819,
                    2823
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 168
                    },
                    "start": {
                      "column": 14,
                      "line": 168
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2809,
                    2810
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 168
                    },
                    "start": {
                      "column": 4,
                      "line": 168
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "range": [
                    2811,
                    2818
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 168
                    },
                    "start": {
                      "column": 6,
                      "line": 168
                    }
                  }
                },
                "range": [
                  2809,
                  2818
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 168
                  },
                  "start": {
                    "column": 4,
                    "line": 168
                  }
                }
              },
              "optional": false,
              "range": [
                2809,
                2824
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 168
                },
                "start": {
                  "column": 4,
                  "line": 168
                }
              }
            },
            "range": [
              2809,
              2825
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 168
              },
              "start": {
                "column": 4,
                "line": 168
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2837,
                2838
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 169
                },
                "start": {
                  "column": 11,
                  "line": 169
                }
              }
            },
            "range": [
              2830,
              2839
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 169
              },
              "start": {
                "column": 4,
                "line": 169
              }
            }
          }
        ],
        "range": [
          2745,
          2875
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 170
          },
          "start": {
            "column": 15,
            "line": 164
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f17",
        "optional": false,
        "range": [
          2739,
          2742
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 164
          },
          "start": {
            "column": 9,
            "line": 164
          }
        }
      },
      "params": [],
      "range": [
        2730,
        2875
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 164
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2902,
                    2903
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 173
                    },
                    "start": {
                      "column": 8,
                      "line": 173
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    2906,
                    2908
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 173
                    },
                    "start": {
                      "column": 12,
                      "line": 173
                    }
                  }
                },
                "range": [
                  2902,
                  2908
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 173
                  },
                  "start": {
                    "column": 8,
                    "line": 173
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2898,
              2909
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 173
              },
              "start": {
                "column": 4,
                "line": 173
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
                  "raw": "5",
                  "value": 5,
                  "range": [
                    2921,
                    2922
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 174
                    },
                    "start": {
                      "column": 11,
                      "line": 174
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2914,
                    2915
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 174
                    },
                    "start": {
                      "column": 4,
                      "line": 174
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    2916,
                    2920
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 174
                    },
                    "start": {
                      "column": 6,
                      "line": 174
                    }
                  }
                },
                "range": [
                  2914,
                  2920
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 174
                  },
                  "start": {
                    "column": 4,
                    "line": 174
                  }
                }
              },
              "optional": false,
              "range": [
                2914,
                2923
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 174
                },
                "start": {
                  "column": 4,
                  "line": 174
                }
              }
            },
            "range": [
              2914,
              2924
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 174
              },
              "start": {
                "column": 4,
                "line": 174
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
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    2939,
                    2946
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 175
                    },
                    "start": {
                      "column": 14,
                      "line": 175
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2929,
                    2930
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 175
                    },
                    "start": {
                      "column": 4,
                      "line": 175
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "range": [
                    2931,
                    2938
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 175
                    },
                    "start": {
                      "column": 6,
                      "line": 175
                    }
                  }
                },
                "range": [
                  2929,
                  2938
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 175
                  },
                  "start": {
                    "column": 4,
                    "line": 175
                  }
                }
              },
              "optional": false,
              "range": [
                2929,
                2947
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 175
                },
                "start": {
                  "column": 4,
                  "line": 175
                }
              }
            },
            "range": [
              2929,
              2948
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 175
              },
              "start": {
                "column": 4,
                "line": 175
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2953,
                    2954
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 176
                    },
                    "start": {
                      "column": 4,
                      "line": 176
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    2955,
                    2956
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 176
                    },
                    "start": {
                      "column": 6,
                      "line": 176
                    }
                  }
                },
                "range": [
                  2953,
                  2957
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 176
                  },
                  "start": {
                    "column": 4,
                    "line": 176
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  2960,
                  2964
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 176
                  },
                  "start": {
                    "column": 11,
                    "line": 176
                  }
                }
              },
              "range": [
                2953,
                2964
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 176
                },
                "start": {
                  "column": 4,
                  "line": 176
                }
              }
            },
            "range": [
              2953,
              2965
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 176
              },
              "start": {
                "column": 4,
                "line": 176
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2977,
                2978
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 177
                },
                "start": {
                  "column": 11,
                  "line": 177
                }
              }
            },
            "range": [
              2970,
              2979
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 177
              },
              "start": {
                "column": 4,
                "line": 177
              }
            }
          }
        ],
        "range": [
          2892,
          3015
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 178
          },
          "start": {
            "column": 15,
            "line": 172
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f18",
        "optional": false,
        "range": [
          2886,
          2889
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 172
          },
          "start": {
            "column": 9,
            "line": 172
          }
        }
      },
      "params": [],
      "range": [
        2877,
        3015
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 178
        },
        "start": {
          "column": 0,
          "line": 172
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          3056,
          3059
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 182
          },
          "start": {
            "column": 17,
            "line": 182
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 182
              },
              "start": {
                "column": 24,
                "line": 182
              }
            },
            "range": [
              3063,
              3082
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "range": [
                        3067,
                        3070
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 182
                        },
                        "start": {
                          "column": 28,
                          "line": 182
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
                          "column": 39,
                          "line": 182
                        },
                        "start": {
                          "column": 31,
                          "line": 182
                        }
                      },
                      "range": [
                        3070,
                        3078
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          3072,
                          3078
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 182
                          },
                          "start": {
                            "column": 33,
                            "line": 182
                          }
                        }
                      }
                    },
                    "range": [
                      3067,
                      3078
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 182
                      },
                      "start": {
                        "column": 28,
                        "line": 182
                      }
                    }
                  }
                ],
                "range": [
                  3065,
                  3080
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 182
                  },
                  "start": {
                    "column": 26,
                    "line": 182
                  }
                }
              },
              "range": [
                3065,
                3082
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 182
                },
                "start": {
                  "column": 26,
                  "line": 182
                }
              }
            }
          },
          "range": [
            3060,
            3082
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 182
            },
            "start": {
              "column": 21,
              "line": 182
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 50,
            "line": 182
          },
          "start": {
            "column": 44,
            "line": 182
          }
        },
        "range": [
          3083,
          3089
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            3085,
            3089
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 182
            },
            "start": {
              "column": 46,
              "line": 182
            }
          }
        }
      },
      "range": [
        3039,
        3090
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 182
        },
        "start": {
          "column": 0,
          "line": 182
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
            "name": "arr",
            "optional": false,
            "range": [
              3096,
              3099
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 184
              },
              "start": {
                "column": 4,
                "line": 184
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              3102,
              3104
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 184
              },
              "start": {
                "column": 10,
                "line": 184
              }
            }
          },
          "range": [
            3096,
            3104
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 184
            },
            "start": {
              "column": 4,
              "line": 184
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3092,
        3104
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 184
        },
        "start": {
          "column": 0,
          "line": 184
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "range": [
                    3116,
                    3119
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 185
                    },
                    "start": {
                      "column": 11,
                      "line": 185
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    3121,
                    3122
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 185
                    },
                    "start": {
                      "column": 16,
                      "line": 185
                    }
                  }
                },
                "range": [
                  3116,
                  3122
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 185
                  },
                  "start": {
                    "column": 11,
                    "line": 185
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    3124,
                    3127
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 185
                    },
                    "start": {
                      "column": 19,
                      "line": 185
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    3129,
                    3130
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 185
                    },
                    "start": {
                      "column": 24,
                      "line": 185
                    }
                  }
                },
                "range": [
                  3124,
                  3130
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 185
                  },
                  "start": {
                    "column": 19,
                    "line": 185
                  }
                }
              }
            ],
            "range": [
              3114,
              3132
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 185
              },
              "start": {
                "column": 9,
                "line": 185
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
            "name": "arr",
            "optional": false,
            "range": [
              3105,
              3108
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 185
              },
              "start": {
                "column": 0,
                "line": 185
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "range": [
              3109,
              3113
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 185
              },
              "start": {
                "column": 4,
                "line": 185
              }
            }
          },
          "range": [
            3105,
            3113
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 185
            },
            "start": {
              "column": 0,
              "line": 185
            }
          }
        },
        "optional": false,
        "range": [
          3105,
          3133
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 185
          },
          "start": {
            "column": 0,
            "line": 185
          }
        }
      },
      "range": [
        3105,
        3134
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 185
        },
        "start": {
          "column": 0,
          "line": 185
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
            "name": "arr",
            "optional": false,
            "range": [
              3139,
              3142
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 186
              },
              "start": {
                "column": 4,
                "line": 186
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
            3135,
            3138
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 186
            },
            "start": {
              "column": 0,
              "line": 186
            }
          }
        },
        "optional": false,
        "range": [
          3135,
          3143
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 186
          },
          "start": {
            "column": 0,
            "line": 186
          }
        }
      },
      "range": [
        3135,
        3144
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 186
        },
        "start": {
          "column": 0,
          "line": 186
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 187
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
