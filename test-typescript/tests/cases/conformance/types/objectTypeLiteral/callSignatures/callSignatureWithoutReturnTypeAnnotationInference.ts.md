__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    111,
    1597
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                140,
                141
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
              133,
              142
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
          }
        ],
        "range": [
          127,
          144
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 16,
            "line": 4
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
          120,
          123
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            124,
            125
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        }
      ],
      "range": [
        111,
        144
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "range": [
              149,
              150
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  157,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
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
                153,
                156
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "optional": false,
            "range": [
              153,
              159
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            }
          },
          "range": [
            149,
            159
          ],
          "loc": {
            "end": {
              "column": 14,
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
        145,
        160
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    196,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 10
                    },
                    "start": {
                      "column": 15,
                      "line": 10
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
                  192,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                192,
                198
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              185,
              199
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          179,
          201
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 17,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          171,
          175
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            176,
            177
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 9
            }
          }
        }
      ],
      "range": [
        162,
        201
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "r2",
            "optional": false,
            "range": [
              206,
              208
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  216,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 14,
                    "line": 12
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                211,
                215
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              211,
              218
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 12
              },
              "start": {
                "column": 9,
                "line": 12
              }
            }
          },
          "range": [
            206,
            218
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        202,
        219
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "range": [
                  250,
                  254
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
              },
              "optional": false,
              "range": [
                250,
                256
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "range": [
              243,
              257
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          237,
          259
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 16,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          230,
          234
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
      "params": [],
      "range": [
        221,
        259
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "r3",
            "optional": false,
            "range": [
              264,
              266
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                269,
                273
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "optional": false,
            "range": [
              269,
              275
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 17
              },
              "start": {
                "column": 9,
                "line": 17
              }
            }
          },
          "range": [
            264,
            275
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
      "declare": false,
      "kind": "var",
      "range": [
        260,
        276
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                314,
                315
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "range": [
              307,
              316
            ],
            "loc": {
              "end": {
                "column": 13,
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
          301,
          318
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 23,
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
        "name": "foo4",
        "optional": false,
        "range": [
          287,
          291
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 19
              },
              "start": {
                "column": 18,
                "line": 19
              }
            },
            "range": [
              296,
              299
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  298,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 19
                  },
                  "start": {
                    "column": 20,
                    "line": 19
                  }
                }
              },
              "range": [
                298,
                299
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 19
                },
                "start": {
                  "column": 20,
                  "line": 19
                }
              }
            }
          },
          "range": [
            295,
            299
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 19
            },
            "start": {
              "column": 17,
              "line": 19
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 19
          },
          "start": {
            "column": 13,
            "line": 19
          }
        },
        "range": [
          291,
          294
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                292,
                293
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              292,
              293
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 19
              },
              "start": {
                "column": 14,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        278,
        318
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4",
            "optional": false,
            "range": [
              323,
              325
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  333,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "range": [
                328,
                332
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              328,
              335
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          },
          "range": [
            323,
            335
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        319,
        336
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      419,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 28
                      },
                      "start": {
                        "column": 15,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    412,
                    421
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                402,
                427
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      388,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 26
                      },
                      "start": {
                        "column": 15,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    381,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                371,
                396
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 14,
                  "line": 25
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                365,
                369
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              }
            },
            "range": [
              361,
              427
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "range": [
          355,
          429
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 17,
            "line": 24
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "range": [
          347,
          351
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            352,
            353
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 24
            },
            "start": {
              "column": 14,
              "line": 24
            }
          }
        }
      ],
      "range": [
        338,
        429
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "r5",
            "optional": false,
            "range": [
              434,
              436
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  444,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 31
                  },
                  "start": {
                    "column": 14,
                    "line": 31
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "range": [
                439,
                443
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "optional": false,
            "range": [
              439,
              446
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 31
              },
              "start": {
                "column": 9,
                "line": 31
              }
            }
          },
          "range": [
            434,
            446
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        430,
        447
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                476,
                483
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      554,
                      556
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 40
                      },
                      "start": {
                        "column": 15,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    547,
                    557
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                537,
                563
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 12,
                  "line": 39
                }
              }
            },
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        515,
                        517
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 37
                        },
                        "start": {
                          "column": 15,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      508,
                      518
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
                      }
                    }
                  }
                ],
                "range": [
                  498,
                  524
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 14,
                    "line": 36
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  495,
                  496
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 36
                  },
                  "start": {
                    "column": 11,
                    "line": 36
                  }
                }
              },
              "range": [
                488,
                524
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 36
                }
              }
            },
            "range": [
              472,
              563
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          466,
          565
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 17,
            "line": 33
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          458,
          462
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            463,
            464
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 33
            },
            "start": {
              "column": 14,
              "line": 33
            }
          }
        }
      ],
      "range": [
        449,
        565
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "r6",
            "optional": false,
            "range": [
              570,
              572
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  580,
                  581
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 43
                  },
                  "start": {
                    "column": 14,
                    "line": 43
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "range": [
                575,
                579
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 43
                },
                "start": {
                  "column": 9,
                  "line": 43
                }
              }
            },
            "optional": false,
            "range": [
              575,
              582
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 43
              },
              "start": {
                "column": 9,
                "line": 43
              }
            }
          },
          "range": [
            570,
            582
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        566,
        583
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  622,
                  623
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 46
                  },
                  "start": {
                    "column": 18,
                    "line": 46
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                615,
                623
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 46
                },
                "start": {
                  "column": 11,
                  "line": 46
                }
              }
            },
            "range": [
              608,
              624
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "range": [
          602,
          626
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 17,
            "line": 45
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "range": [
          594,
          598
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 45
          },
          "start": {
            "column": 9,
            "line": 45
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            599,
            600
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 45
            },
            "start": {
              "column": 14,
              "line": 45
            }
          }
        }
      ],
      "range": [
        585,
        626
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 45
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
            "name": "r7",
            "optional": false,
            "range": [
              631,
              633
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  641,
                  642
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 48
                  },
                  "start": {
                    "column": 14,
                    "line": 48
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "range": [
                636,
                640
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 48
                },
                "start": {
                  "column": 9,
                  "line": 48
                }
              }
            },
            "optional": false,
            "range": [
              636,
              643
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 48
              },
              "start": {
                "column": 9,
                "line": 48
              }
            }
          },
          "range": [
            631,
            643
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 48
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        627,
        644
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
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
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      702,
                      703
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 52
                      },
                      "start": {
                        "column": 13,
                        "line": 52
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      705,
                      706
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 52
                      },
                      "start": {
                        "column": 16,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    702,
                    706
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 52
                    },
                    "start": {
                      "column": 13,
                      "line": 52
                    }
                  }
                }
              ],
              "range": [
                700,
                708
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 52
                },
                "start": {
                  "column": 11,
                  "line": 52
                }
              }
            },
            "range": [
              693,
              709
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "range": [
          687,
          711
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 25,
            "line": 51
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "range": [
          671,
          675
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 51
          },
          "start": {
            "column": 9,
            "line": 51
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 51
              },
              "start": {
                "column": 15,
                "line": 51
              }
            },
            "range": [
              677,
              685
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                679,
                685
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 51
                },
                "start": {
                  "column": 17,
                  "line": 51
                }
              }
            }
          },
          "range": [
            676,
            685
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 51
            },
            "start": {
              "column": 14,
              "line": 51
            }
          }
        }
      ],
      "range": [
        662,
        711
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 51
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
            "name": "r8",
            "optional": false,
            "range": [
              716,
              718
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  726,
                  727
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 54
                  },
                  "start": {
                    "column": 14,
                    "line": 54
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "range": [
                721,
                725
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 54
                },
                "start": {
                  "column": 9,
                  "line": 54
                }
              }
            },
            "optional": false,
            "range": [
              721,
              728
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 54
              },
              "start": {
                "column": 9,
                "line": 54
              }
            }
          },
          "range": [
            716,
            728
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 54
            },
            "start": {
              "column": 4,
              "line": 54
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        712,
        729
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          743,
          763
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                749,
                752
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
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
                  "column": 15,
                  "line": 57
                },
                "start": {
                  "column": 7,
                  "line": 57
                }
              },
              "range": [
                752,
                760
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  754,
                  760
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 57
                  },
                  "start": {
                    "column": 9,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              749,
              761
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 58
          },
          "start": {
            "column": 12,
            "line": 56
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          741,
          742
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 56
          },
          "start": {
            "column": 10,
            "line": 56
          }
        }
      },
      "range": [
        731,
        763
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 56
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 60
                      },
                      "start": {
                        "column": 9,
                        "line": 60
                      }
                    },
                    "range": [
                      800,
                      803
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "range": [
                          802,
                          803
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 60
                          },
                          "start": {
                            "column": 11,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        802,
                        803
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 60
                        },
                        "start": {
                          "column": 11,
                          "line": 60
                        }
                      }
                    }
                  },
                  "range": [
                    799,
                    803
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                },
                "init": null,
                "range": [
                  799,
                  803
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 60
                  },
                  "start": {
                    "column": 8,
                    "line": 60
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              795,
              804
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                816,
                817
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 61
                },
                "start": {
                  "column": 11,
                  "line": 61
                }
              }
            },
            "range": [
              809,
              818
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          }
        ],
        "range": [
          789,
          824
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 25,
            "line": 59
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "range": [
          773,
          777
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 59
          },
          "start": {
            "column": 9,
            "line": 59
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 59
              },
              "start": {
                "column": 15,
                "line": 59
              }
            },
            "range": [
              779,
              787
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                781,
                787
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 59
                },
                "start": {
                  "column": 17,
                  "line": 59
                }
              }
            }
          },
          "range": [
            778,
            787
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 59
            },
            "start": {
              "column": 14,
              "line": 59
            }
          }
        }
      ],
      "range": [
        764,
        824
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 59
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
            "name": "r9",
            "optional": false,
            "range": [
              829,
              831
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  839,
                  840
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 63
                  },
                  "start": {
                    "column": 14,
                    "line": 63
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "range": [
                834,
                838
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 63
                },
                "start": {
                  "column": 9,
                  "line": 63
                }
              }
            },
            "optional": false,
            "range": [
              834,
              841
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 63
              },
              "start": {
                "column": 9,
                "line": 63
              }
            }
          },
          "range": [
            829,
            841
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 63
            },
            "start": {
              "column": 4,
              "line": 63
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        825,
        842
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          852,
          872
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                858,
                861
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 66
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 66
                },
                "start": {
                  "column": 7,
                  "line": 66
                }
              },
              "range": [
                861,
                869
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  863,
                  869
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 66
                  },
                  "start": {
                    "column": 9,
                    "line": 66
                  }
                }
              }
            },
            "value": null,
            "range": [
              858,
              870
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 8,
            "line": 65
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
          850,
          851
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 65
          },
          "start": {
            "column": 6,
            "line": 65
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        844,
        872
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 65
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 69
                      },
                      "start": {
                        "column": 9,
                        "line": 69
                      }
                    },
                    "range": [
                      910,
                      913
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          912,
                          913
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 69
                          },
                          "start": {
                            "column": 11,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        912,
                        913
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 69
                        },
                        "start": {
                          "column": 11,
                          "line": 69
                        }
                      }
                    }
                  },
                  "range": [
                    909,
                    913
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
                      "line": 69
                    }
                  }
                },
                "init": null,
                "range": [
                  909,
                  913
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 69
                  },
                  "start": {
                    "column": 8,
                    "line": 69
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              905,
              914
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                926,
                927
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
              919,
              928
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
          899,
          930
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 71
          },
          "start": {
            "column": 26,
            "line": 68
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "range": [
          882,
          887
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 68
          },
          "start": {
            "column": 9,
            "line": 68
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 68
              },
              "start": {
                "column": 16,
                "line": 68
              }
            },
            "range": [
              889,
              897
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                891,
                897
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 68
                },
                "start": {
                  "column": 18,
                  "line": 68
                }
              }
            }
          },
          "range": [
            888,
            897
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 68
            },
            "start": {
              "column": 15,
              "line": 68
            }
          }
        }
      ],
      "range": [
        873,
        930
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 68
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
            "name": "r10",
            "optional": false,
            "range": [
              935,
              938
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  947,
                  948
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 72
                  },
                  "start": {
                    "column": 16,
                    "line": 72
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "range": [
                941,
                946
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 72
                },
                "start": {
                  "column": 10,
                  "line": 72
                }
              }
            },
            "optional": false,
            "range": [
              941,
              949
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 72
              },
              "start": {
                "column": 10,
                "line": 72
              }
            }
          },
          "range": [
            935,
            949
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 72
            },
            "start": {
              "column": 4,
              "line": 72
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        931,
        950
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              967,
              984
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
                      978,
                      979
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 75
                      },
                      "start": {
                        "column": 15,
                        "line": 75
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      982,
                      983
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 75
                      },
                      "start": {
                        "column": 19,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    978,
                    983
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 75
                    },
                    "start": {
                      "column": 15,
                      "line": 75
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                974,
                984
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 75
                },
                "start": {
                  "column": 11,
                  "line": 75
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 21,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              989,
              1019
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1004,
                  1019
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        1006,
                        1009
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 76
                        },
                        "start": {
                          "column": 21,
                          "line": 76
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 76
                        },
                        "start": {
                          "column": 24,
                          "line": 76
                        }
                      },
                      "range": [
                        1009,
                        1017
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1011,
                          1017
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 76
                          },
                          "start": {
                            "column": 26,
                            "line": 76
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      1006,
                      1017
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 76
                      },
                      "start": {
                        "column": 21,
                        "line": 76
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 76
                  },
                  "start": {
                    "column": 19,
                    "line": 76
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
                  1002,
                  1003
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 76
                  },
                  "start": {
                    "column": 17,
                    "line": 76
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                996,
                1019
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 76
                },
                "start": {
                  "column": 11,
                  "line": 76
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 34,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          }
        ],
        "range": [
          961,
          1021
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 9,
            "line": 74
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          959,
          960
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 74
          },
          "start": {
            "column": 7,
            "line": 74
          }
        }
      },
      "kind": "module",
      "range": [
        952,
        1021
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 74
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
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                1052,
                1053
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 79
                },
                "start": {
                  "column": 11,
                  "line": 79
                }
              }
            },
            "range": [
              1045,
              1054
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          }
        ],
        "range": [
          1039,
          1056
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 17,
            "line": 78
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "range": [
          1031,
          1036
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 78
          },
          "start": {
            "column": 9,
            "line": 78
          }
        }
      },
      "params": [],
      "range": [
        1022,
        1056
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 78
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
            "name": "r11",
            "optional": false,
            "range": [
              1061,
              1064
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "range": [
                1067,
                1072
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 81
                },
                "start": {
                  "column": 10,
                  "line": 81
                }
              }
            },
            "optional": false,
            "range": [
              1067,
              1074
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 81
              },
              "start": {
                "column": 10,
                "line": 81
              }
            }
          },
          "range": [
            1061,
            1074
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 81
            },
            "start": {
              "column": 4,
              "line": 81
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1057,
        1075
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1113,
          1131
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1119,
                1120
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 85
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
                  "column": 13,
                  "line": 85
                },
                "start": {
                  "column": 5,
                  "line": 85
                }
              },
              "range": [
                1120,
                1128
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1122,
                  1128
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 85
                  },
                  "start": {
                    "column": 7,
                    "line": 85
                  }
                }
              }
            },
            "range": [
              1119,
              1129
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 86
          },
          "start": {
            "column": 13,
            "line": 84
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "range": [
          1110,
          1112
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 84
          },
          "start": {
            "column": 10,
            "line": 84
          }
        }
      },
      "range": [
        1100,
        1131
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1145,
          1163
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                1151,
                1152
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
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
                  "column": 13,
                  "line": 88
                },
                "start": {
                  "column": 5,
                  "line": 88
                }
              },
              "range": [
                1152,
                1160
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1154,
                  1160
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 88
                  },
                  "start": {
                    "column": 7,
                    "line": 88
                  }
                }
              }
            },
            "range": [
              1151,
              1161
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 89
          },
          "start": {
            "column": 13,
            "line": 87
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "range": [
          1142,
          1144
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 87
          },
          "start": {
            "column": 10,
            "line": 87
          }
        }
      },
      "range": [
        1132,
        1163
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 87
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
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 91
                      },
                      "start": {
                        "column": 10,
                        "line": 91
                      }
                    },
                    "range": [
                      1193,
                      1197
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I2",
                        "optional": false,
                        "range": [
                          1195,
                          1197
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 91
                          },
                          "start": {
                            "column": 12,
                            "line": 91
                          }
                        }
                      },
                      "range": [
                        1195,
                        1197
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 91
                        },
                        "start": {
                          "column": 12,
                          "line": 91
                        }
                      }
                    }
                  },
                  "range": [
                    1191,
                    1197
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 91
                    },
                    "start": {
                      "column": 8,
                      "line": 91
                    }
                  }
                },
                "init": null,
                "range": [
                  1191,
                  1197
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 91
                  },
                  "start": {
                    "column": 8,
                    "line": 91
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1187,
              1198
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "range": [
                1210,
                1212
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 92
                },
                "start": {
                  "column": 11,
                  "line": 92
                }
              }
            },
            "range": [
              1203,
              1213
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 92
              }
            }
          }
        ],
        "range": [
          1181,
          1215
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 93
          },
          "start": {
            "column": 17,
            "line": 90
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "range": [
          1173,
          1178
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 90
          },
          "start": {
            "column": 9,
            "line": 90
          }
        }
      },
      "params": [],
      "range": [
        1164,
        1215
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 90
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
            "name": "r12",
            "optional": false,
            "range": [
              1220,
              1223
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "range": [
                1226,
                1231
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 94
                },
                "start": {
                  "column": 10,
                  "line": 94
                }
              }
            },
            "optional": false,
            "range": [
              1226,
              1233
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 94
              },
              "start": {
                "column": 10,
                "line": 94
              }
            }
          },
          "range": [
            1220,
            1233
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 94
            },
            "start": {
              "column": 4,
              "line": 94
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1216,
        1234
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 94
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
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                1259,
                1260
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 96
                },
                "start": {
                  "column": 23,
                  "line": 96
                }
              }
            },
            "range": [
              1252,
              1261
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 96
              },
              "start": {
                "column": 16,
                "line": 96
              }
            }
          }
        ],
        "range": [
          1250,
          1263
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 96
          },
          "start": {
            "column": 14,
            "line": 96
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "range": [
          1245,
          1247
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 96
          },
          "start": {
            "column": 9,
            "line": 96
          }
        }
      },
      "params": [],
      "range": [
        1236,
        1263
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 96
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1276,
              1293
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
                      1287,
                      1288
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 97
                      },
                      "start": {
                        "column": 23,
                        "line": 97
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      1291,
                      1292
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 97
                      },
                      "start": {
                        "column": 27,
                        "line": 97
                      }
                    }
                  },
                  "range": [
                    1287,
                    1292
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 97
                    },
                    "start": {
                      "column": 23,
                      "line": 97
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1283,
                1293
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 97
                },
                "start": {
                  "column": 19,
                  "line": 97
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 29,
                "line": 97
              },
              "start": {
                "column": 12,
                "line": 97
              }
            }
          }
        ],
        "range": [
          1274,
          1295
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 97
          },
          "start": {
            "column": 10,
            "line": 97
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1271,
          1273
        ],
        "decorators": [],
        "name": "m1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 97
          },
          "start": {
            "column": 7,
            "line": 97
          }
        }
      },
      "kind": "module",
      "range": [
        1264,
        1295
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 97
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
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "range": [
                1326,
                1328
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 99
                },
                "start": {
                  "column": 11,
                  "line": 99
                }
              }
            },
            "range": [
              1319,
              1329
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
              }
            }
          }
        ],
        "range": [
          1313,
          1331
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 100
          },
          "start": {
            "column": 17,
            "line": 98
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "range": [
          1305,
          1310
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 98
          },
          "start": {
            "column": 9,
            "line": 98
          }
        }
      },
      "params": [],
      "range": [
        1296,
        1331
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 98
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
            "name": "r13",
            "optional": false,
            "range": [
              1336,
              1339
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 101
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "range": [
                1342,
                1347
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 101
                },
                "start": {
                  "column": 10,
                  "line": 101
                }
              }
            },
            "optional": false,
            "range": [
              1342,
              1349
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 101
              },
              "start": {
                "column": 10,
                "line": 101
              }
            }
          },
          "range": [
            1336,
            1349
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 101
            },
            "start": {
              "column": 4,
              "line": 101
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1332,
        1350
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 101
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1361,
          1404
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                1367,
                1370
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 104
                },
                "start": {
                  "column": 4,
                  "line": 104
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 104
                },
                "start": {
                  "column": 7,
                  "line": 104
                }
              },
              "range": [
                1370,
                1378
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1372,
                  1378
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 104
                  },
                  "start": {
                    "column": 9,
                    "line": 104
                  }
                }
              }
            },
            "value": null,
            "range": [
              1367,
              1379
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1384,
                1395
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 105
                },
                "start": {
                  "column": 4,
                  "line": 105
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1395,
                1402
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1399,
                  1402
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 105
                  },
                  "start": {
                    "column": 19,
                    "line": 105
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1396,
                    1397
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 105
                    },
                    "start": {
                      "column": 16,
                      "line": 105
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 105
                },
                "start": {
                  "column": 15,
                  "line": 105
                }
              }
            },
            "range": [
              1384,
              1402
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 105
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 106
          },
          "start": {
            "column": 9,
            "line": 103
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "range": [
          1358,
          1360
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 103
          },
          "start": {
            "column": 6,
            "line": 103
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1352,
        1404
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 103
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1421,
              1438
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
                      1432,
                      1433
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 108
                      },
                      "start": {
                        "column": 15,
                        "line": 108
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1436,
                      1437
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 108
                      },
                      "start": {
                        "column": 19,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    1432,
                    1437
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 108
                    },
                    "start": {
                      "column": 15,
                      "line": 108
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1428,
                1438
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 108
                },
                "start": {
                  "column": 11,
                  "line": 108
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 21,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 108
              }
            }
          }
        ],
        "range": [
          1415,
          1440
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 109
          },
          "start": {
            "column": 10,
            "line": 107
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1412,
          1414
        ],
        "decorators": [],
        "name": "c1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 107
          },
          "start": {
            "column": 7,
            "line": 107
          }
        }
      },
      "kind": "module",
      "range": [
        1405,
        1440
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 107
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
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "range": [
                1471,
                1473
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 111
                },
                "start": {
                  "column": 11,
                  "line": 111
                }
              }
            },
            "range": [
              1464,
              1474
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 111
              },
              "start": {
                "column": 4,
                "line": 111
              }
            }
          }
        ],
        "range": [
          1458,
          1476
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 112
          },
          "start": {
            "column": 17,
            "line": 110
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "range": [
          1450,
          1455
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 110
          },
          "start": {
            "column": 9,
            "line": 110
          }
        }
      },
      "params": [],
      "range": [
        1441,
        1476
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 112
        },
        "start": {
          "column": 0,
          "line": 110
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
            "name": "r14",
            "optional": false,
            "range": [
              1481,
              1484
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 113
              },
              "start": {
                "column": 4,
                "line": 113
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "range": [
                1487,
                1492
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 113
                },
                "start": {
                  "column": 10,
                  "line": 113
                }
              }
            },
            "optional": false,
            "range": [
              1487,
              1494
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 113
              },
              "start": {
                "column": 10,
                "line": 113
              }
            }
          },
          "range": [
            1481,
            1494
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 113
            },
            "start": {
              "column": 4,
              "line": 113
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1477,
        1495
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          1505,
          1510
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1507,
                1508
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 115
                },
                "start": {
                  "column": 10,
                  "line": 115
                }
              }
            },
            "range": [
              1507,
              1508
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 115
              },
              "start": {
                "column": 10,
                "line": 115
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 115
          },
          "start": {
            "column": 8,
            "line": 115
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "range": [
          1502,
          1504
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 115
          },
          "start": {
            "column": 5,
            "line": 115
          }
        }
      },
      "range": [
        1497,
        1510
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 115
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1523,
              1540
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
                      1534,
                      1535
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 116
                      },
                      "start": {
                        "column": 23,
                        "line": 116
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1538,
                      1539
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 116
                      },
                      "start": {
                        "column": 27,
                        "line": 116
                      }
                    }
                  },
                  "range": [
                    1534,
                    1539
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 116
                    },
                    "start": {
                      "column": 23,
                      "line": 116
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1530,
                1540
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 116
                },
                "start": {
                  "column": 19,
                  "line": 116
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 29,
                "line": 116
              },
              "start": {
                "column": 12,
                "line": 116
              }
            }
          }
        ],
        "range": [
          1521,
          1542
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 116
          },
          "start": {
            "column": 10,
            "line": 116
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1518,
          1520
        ],
        "decorators": [],
        "name": "e1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 116
          },
          "start": {
            "column": 7,
            "line": 116
          }
        }
      },
      "kind": "module",
      "range": [
        1511,
        1542
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 116
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
              "type": "Identifier",
              "decorators": [],
              "name": "e1",
              "optional": false,
              "range": [
                1573,
                1575
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 118
                },
                "start": {
                  "column": 11,
                  "line": 118
                }
              }
            },
            "range": [
              1566,
              1576
            ],
            "loc": {
              "end": {
                "column": 14,
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
          1560,
          1578
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 119
          },
          "start": {
            "column": 17,
            "line": 117
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "range": [
          1552,
          1557
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 117
          },
          "start": {
            "column": 9,
            "line": 117
          }
        }
      },
      "params": [],
      "range": [
        1543,
        1578
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 117
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
            "name": "r15",
            "optional": false,
            "range": [
              1583,
              1586
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 120
              },
              "start": {
                "column": 4,
                "line": 120
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "range": [
                1589,
                1594
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 120
                },
                "start": {
                  "column": 10,
                  "line": 120
                }
              }
            },
            "optional": false,
            "range": [
              1589,
              1596
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 120
              },
              "start": {
                "column": 10,
                "line": 120
              }
            }
          },
          "range": [
            1583,
            1596
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 120
            },
            "start": {
              "column": 4,
              "line": 120
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1579,
        1597
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 120
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 18,
      "line": 120
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
