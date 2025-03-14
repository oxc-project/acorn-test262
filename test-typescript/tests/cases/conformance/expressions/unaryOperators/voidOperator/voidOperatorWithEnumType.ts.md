__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    32,
    467
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          42,
          45
        ],
        "members": [],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "range": [
          37,
          41
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "range": [
        32,
        45
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        45,
        46
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 3
        },
        "start": {
          "column": 13,
          "line": 3
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          58,
          70
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
                60,
                61
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
            },
            "range": [
              60,
              61
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
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                63,
                64
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              }
            },
            "range": [
              63,
              64
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 16,
                "line": 4
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                66,
                68
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            },
            "range": [
              66,
              68
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 19,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 11,
            "line": 4
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "range": [
          52,
          57
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "range": [
        47,
        70
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        70,
        71
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 4
        },
        "start": {
          "column": 23,
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
            "name": "ResultIsAny1",
            "optional": false,
            "range": [
              94,
              106
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
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "range": [
                114,
                118
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              109,
              118
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 19,
                "line": 7
              }
            }
          },
          "range": [
            94,
            118
          ],
          "loc": {
            "end": {
              "column": 28,
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
        90,
        119
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "ResultIsAny2",
            "optional": false,
            "range": [
              124,
              136
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "range": [
                144,
                149
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              139,
              149
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 8
              },
              "start": {
                "column": 19,
                "line": 8
              }
            }
          },
          "range": [
            124,
            149
          ],
          "loc": {
            "end": {
              "column": 29,
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
        120,
        150
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "ResultIsAny3",
            "optional": false,
            "range": [
              181,
              193
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "range": [
                  201,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 11
                  },
                  "start": {
                    "column": 24,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "\"A\"",
                "value": "A",
                "range": [
                  207,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 30,
                    "line": 11
                  }
                }
              },
              "range": [
                201,
                211
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 11
                },
                "start": {
                  "column": 24,
                  "line": 11
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              196,
              211
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 19,
                "line": 11
              }
            }
          },
          "range": [
            181,
            211
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        177,
        212
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "ResultIsAny4",
            "optional": false,
            "range": [
              217,
              229
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
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "range": [
                    238,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 12
                    },
                    "start": {
                      "column": 25,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    243,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 12
                    },
                    "start": {
                      "column": 30,
                      "line": 12
                    }
                  }
                },
                "range": [
                  238,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 12
                  },
                  "start": {
                    "column": 25,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "range": [
                    248,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 12
                    },
                    "start": {
                      "column": 35,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "\"B\"",
                  "value": "B",
                  "range": [
                    254,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 12
                    },
                    "start": {
                      "column": 41,
                      "line": 12
                    }
                  }
                },
                "range": [
                  248,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 12
                  },
                  "start": {
                    "column": 35,
                    "line": 12
                  }
                }
              },
              "range": [
                238,
                258
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 12
                },
                "start": {
                  "column": 25,
                  "line": 12
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              232,
              259
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 12
              },
              "start": {
                "column": 19,
                "line": 12
              }
            }
          },
          "range": [
            217,
            259
          ],
          "loc": {
            "end": {
              "column": 46,
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
        213,
        260
      ],
      "loc": {
        "end": {
          "column": 47,
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
            "name": "ResultIsAny5",
            "optional": false,
            "range": [
              294,
              306
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
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "range": [
                  319,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 15
                  },
                  "start": {
                    "column": 29,
                    "line": 15
                  }
                }
              },
              "operator": "void",
              "prefix": true,
              "range": [
                314,
                323
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 15
                },
                "start": {
                  "column": 24,
                  "line": 15
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              309,
              323
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 15
              },
              "start": {
                "column": 19,
                "line": 15
              }
            }
          },
          "range": [
            294,
            323
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        290,
        324
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "ResultIsAny6",
            "optional": false,
            "range": [
              329,
              341
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UnaryExpression",
              "argument": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "range": [
                        360,
                        364
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 16
                        },
                        "start": {
                          "column": 35,
                          "line": 16
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        365,
                        366
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 16
                        },
                        "start": {
                          "column": 40,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      360,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 16
                      },
                      "start": {
                        "column": 35,
                        "line": 16
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "range": [
                        370,
                        375
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 16
                        },
                        "start": {
                          "column": 45,
                          "line": 16
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        376,
                        377
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 16
                        },
                        "start": {
                          "column": 51,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      370,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 16
                      },
                      "start": {
                        "column": 45,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    360,
                    377
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 16
                    },
                    "start": {
                      "column": 35,
                      "line": 16
                    }
                  }
                },
                "operator": "void",
                "prefix": true,
                "range": [
                  354,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 16
                  },
                  "start": {
                    "column": 29,
                    "line": 16
                  }
                }
              },
              "operator": "void",
              "prefix": true,
              "range": [
                349,
                378
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 16
                },
                "start": {
                  "column": 24,
                  "line": 16
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              344,
              378
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 16
              },
              "start": {
                "column": 19,
                "line": 16
              }
            }
          },
          "range": [
            329,
            378
          ],
          "loc": {
            "end": {
              "column": 53,
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
      "kind": "var",
      "range": [
        325,
        379
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "range": [
            415,
            419
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 19
            },
            "start": {
              "column": 5,
              "line": 19
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          410,
          419
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        410,
        420
      ],
      "loc": {
        "end": {
          "column": 10,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "range": [
            426,
            431
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 20
            },
            "start": {
              "column": 5,
              "line": 20
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          421,
          431
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        421,
        432
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "range": [
              438,
              443
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 21
              },
              "start": {
                "column": 5,
                "line": 21
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"B\"",
            "value": "B",
            "range": [
              444,
              447
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 21
              },
              "start": {
                "column": 11,
                "line": 21
              }
            }
          },
          "range": [
            438,
            448
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 21
            },
            "start": {
              "column": 5,
              "line": 21
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          433,
          448
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        433,
        449
      ],
      "loc": {
        "end": {
          "column": 16,
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
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "range": [
                455,
                459
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 22
                },
                "start": {
                  "column": 5,
                  "line": 22
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              450,
              459
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 22
              },
              "start": {
                "column": 0,
                "line": 22
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "range": [
              461,
              466
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 22
              },
              "start": {
                "column": 11,
                "line": 22
              }
            }
          }
        ],
        "range": [
          450,
          466
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        450,
        467
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 17,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
