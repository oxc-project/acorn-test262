__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1205
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      56,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    56,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                46,
                74
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  33,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  39,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              },
              "range": [
                33,
                44
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "range": [
              29,
              74
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      121,
                      122
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    121,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                111,
                147
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 36,
                  "line": 5
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "range": [
                    83,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    89,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 14,
                      "line": 5
                    }
                  }
                },
                "range": [
                  83,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "range": [
                    98,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 5
                    },
                    "start": {
                      "column": 23,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"bar\"",
                  "value": "bar",
                  "range": [
                    104,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 5
                    },
                    "start": {
                      "column": 29,
                      "line": 5
                    }
                  }
                },
                "range": [
                  98,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 5
                  },
                  "start": {
                    "column": 23,
                    "line": 5
                  }
                }
              },
              "range": [
                83,
                109
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              79,
              147
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          23,
          149
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 23,
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
        "name": "f1",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            },
            "range": [
              13,
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
            12,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        149
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    206,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                },
                "range": [
                  201,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        245,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 14
                        },
                        "start": {
                          "column": 12,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      245,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 14
                      },
                      "start": {
                        "column": 12,
                        "line": 14
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"bar\"",
                  "value": "bar",
                  "range": [
                    226,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 13
                    },
                    "start": {
                      "column": 13,
                      "line": 13
                    }
                  }
                },
                "range": [
                  221,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        298,
                        299
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
                    "range": [
                      298,
                      300
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 16
                      },
                      "start": {
                        "column": 12,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      339,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 17
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"baz\"",
                  "value": "baz",
                  "range": [
                    279,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 15
                    },
                    "start": {
                      "column": 13,
                      "line": 15
                    }
                  }
                },
                "range": [
                  274,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        375,
                        376
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 19
                        },
                        "start": {
                          "column": 12,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      375,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 19
                      },
                      "start": {
                        "column": 12,
                        "line": 19
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  354,
                  377
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                188,
                189
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 12,
                  "line": 11
                }
              }
            },
            "range": [
              180,
              394
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          174,
          396
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 23,
            "line": 10
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
          160,
          162
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 10
              }
            },
            "range": [
              164,
              172
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                166,
                172
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            }
          },
          "range": [
            163,
            172
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 10
            },
            "start": {
              "column": 12,
              "line": 10
            }
          }
        }
      ],
      "range": [
        151,
        396
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  467,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 24
                  },
                  "start": {
                    "column": 44,
                    "line": 24
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  463,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 24
                  },
                  "start": {
                    "column": 40,
                    "line": 24
                  }
                }
              },
              "test": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      434,
                      435
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 24
                      },
                      "start": {
                        "column": 11,
                        "line": 24
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"foo\"",
                    "value": "foo",
                    "range": [
                      440,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 24
                      },
                      "start": {
                        "column": 17,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    434,
                    445
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 24
                    },
                    "start": {
                      "column": 11,
                      "line": 24
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      449,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 24
                      },
                      "start": {
                        "column": 26,
                        "line": 24
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"bar\"",
                    "value": "bar",
                    "range": [
                      455,
                      460
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 24
                      },
                      "start": {
                        "column": 32,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    449,
                    460
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 24
                    },
                    "start": {
                      "column": 26,
                      "line": 24
                    }
                  }
                },
                "range": [
                  434,
                  460
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                }
              },
              "range": [
                434,
                476
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "range": [
              427,
              477
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          421,
          509
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 23,
            "line": 23
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
          407,
          409
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 23
          },
          "start": {
            "column": 9,
            "line": 23
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 23
              },
              "start": {
                "column": 13,
                "line": 23
              }
            },
            "range": [
              411,
              419
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                413,
                419
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 23
                }
              }
            }
          },
          "range": [
            410,
            419
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 23
            },
            "start": {
              "column": 12,
              "line": 23
            }
          }
        }
      ],
      "range": [
        398,
        509
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 23
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
            "alternate": null,
            "consequent": {
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
                      581,
                      582
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
                  },
                  "range": [
                    574,
                    583
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
                }
              ],
              "range": [
                564,
                599
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 28,
                  "line": 28
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    544,
                    545
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    550,
                    551
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 28
                    },
                    "start": {
                      "column": 14,
                      "line": 28
                    }
                  }
                },
                "range": [
                  544,
                  551
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    555,
                    556
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 28
                    },
                    "start": {
                      "column": 19,
                      "line": 28
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    561,
                    562
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 28
                    },
                    "start": {
                      "column": 25,
                      "line": 28
                    }
                  }
                },
                "range": [
                  555,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 28
                  },
                  "start": {
                    "column": 19,
                    "line": 28
                  }
                }
              },
              "range": [
                544,
                562
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 28
                },
                "start": {
                  "column": 8,
                  "line": 28
                }
              }
            },
            "range": [
              540,
              599
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "range": [
                  614,
                  619
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 31
                  },
                  "start": {
                    "column": 14,
                    "line": 31
                  }
                }
              },
              "range": [
                610,
                621
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 31
                },
                "start": {
                  "column": 10,
                  "line": 31
                }
              }
            },
            "range": [
              604,
              622
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          534,
          624
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 23,
            "line": 27
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
          520,
          522
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 27
          },
          "start": {
            "column": 9,
            "line": 27
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
                "line": 27
              },
              "start": {
                "column": 13,
                "line": 27
              }
            },
            "range": [
              524,
              532
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                526,
                532
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 27
                },
                "start": {
                  "column": 15,
                  "line": 27
                }
              }
            }
          },
          "range": [
            523,
            532
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 27
            },
            "start": {
              "column": 12,
              "line": 27
            }
          }
        }
      ],
      "range": [
        511,
        624
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 27
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
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      699,
                      700
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    699,
                    701
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                }
              ],
              "range": [
                689,
                721
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 28,
                  "line": 35
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    669,
                    670
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    675,
                    676
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 35
                    },
                    "start": {
                      "column": 14,
                      "line": 35
                    }
                  }
                },
                "range": [
                  669,
                  676
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    680,
                    681
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 35
                    },
                    "start": {
                      "column": 19,
                      "line": 35
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    686,
                    687
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 35
                    },
                    "start": {
                      "column": 25,
                      "line": 35
                    }
                  }
                },
                "range": [
                  680,
                  687
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 35
                  },
                  "start": {
                    "column": 19,
                    "line": 35
                  }
                }
              },
              "range": [
                669,
                687
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 35
                }
              }
            },
            "range": [
              665,
              721
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "range": [
          659,
          723
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 33,
            "line": 34
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
          635,
          637
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 34
          },
          "start": {
            "column": 9,
            "line": 34
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
                "line": 34
              },
              "start": {
                "column": 13,
                "line": 34
              }
            },
            "range": [
              639,
              647
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                641,
                647
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 34
                },
                "start": {
                  "column": 15,
                  "line": 34
                }
              }
            }
          },
          "range": [
            638,
            647
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 34
            },
            "start": {
              "column": 12,
              "line": 34
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 34
              },
              "start": {
                "column": 24,
                "line": 34
              }
            },
            "range": [
              650,
              657
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      652,
                      653
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 34
                      },
                      "start": {
                        "column": 26,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    652,
                    653
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 34
                    },
                    "start": {
                      "column": 26,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      656,
                      657
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 34
                      },
                      "start": {
                        "column": 30,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    656,
                    657
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 34
                    },
                    "start": {
                      "column": 30,
                      "line": 34
                    }
                  }
                }
              ],
              "range": [
                652,
                657
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 34
                },
                "start": {
                  "column": 26,
                  "line": 34
                }
              }
            }
          },
          "range": [
            649,
            657
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 34
            },
            "start": {
              "column": 23,
              "line": 34
            }
          }
        }
      ],
      "range": [
        626,
        723
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 34
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
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      798,
                      799
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    798,
                    800
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                }
              ],
              "range": [
                788,
                820
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 28,
                  "line": 41
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    768,
                    769
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
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    774,
                    775
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 41
                    },
                    "start": {
                      "column": 14,
                      "line": 41
                    }
                  }
                },
                "range": [
                  768,
                  775
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 41
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    779,
                    780
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 41
                    },
                    "start": {
                      "column": 19,
                      "line": 41
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    785,
                    786
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 41
                    },
                    "start": {
                      "column": 25,
                      "line": 41
                    }
                  }
                },
                "range": [
                  779,
                  786
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 41
                  },
                  "start": {
                    "column": 19,
                    "line": 41
                  }
                }
              },
              "range": [
                768,
                786
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 41
                },
                "start": {
                  "column": 8,
                  "line": 41
                }
              }
            },
            "range": [
              764,
              820
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "range": [
          758,
          822
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 33,
            "line": 40
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
          734,
          736
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 40
          },
          "start": {
            "column": 9,
            "line": 40
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
                "line": 40
              },
              "start": {
                "column": 13,
                "line": 40
              }
            },
            "range": [
              738,
              746
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                740,
                746
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 40
                },
                "start": {
                  "column": 15,
                  "line": 40
                }
              }
            }
          },
          "range": [
            737,
            746
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 40
            },
            "start": {
              "column": 12,
              "line": 40
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 40
              },
              "start": {
                "column": 24,
                "line": 40
              }
            },
            "range": [
              749,
              756
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      751,
                      752
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 40
                      },
                      "start": {
                        "column": 26,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    751,
                    752
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 40
                    },
                    "start": {
                      "column": 26,
                      "line": 40
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      755,
                      756
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 40
                      },
                      "start": {
                        "column": 30,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    755,
                    756
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 40
                    },
                    "start": {
                      "column": 30,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                751,
                756
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 40
                },
                "start": {
                  "column": 26,
                  "line": 40
                }
              }
            }
          },
          "range": [
            748,
            756
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 40
            },
            "start": {
              "column": 23,
              "line": 40
            }
          }
        }
      ],
      "range": [
        725,
        822
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 40
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
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      911,
                      912
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    911,
                    913
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 48
                    }
                  }
                }
              ],
              "range": [
                901,
                945
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 49
                },
                "start": {
                  "column": 17,
                  "line": 47
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  892,
                  893
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  898,
                  899
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 47
                  },
                  "start": {
                    "column": 14,
                    "line": 47
                  }
                }
              },
              "range": [
                892,
                899
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 47
                },
                "start": {
                  "column": 8,
                  "line": 47
                }
              }
            },
            "range": [
              888,
              945
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "range": [
          882,
          947
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 58,
            "line": 46
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
          833,
          835
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 46
          },
          "start": {
            "column": 9,
            "line": 46
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
                "column": 37,
                "line": 46
              },
              "start": {
                "column": 13,
                "line": 46
              }
            },
            "range": [
              837,
              861
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    839,
                    845
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 46
                    },
                    "start": {
                      "column": 15,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"foo\"",
                    "value": "foo",
                    "range": [
                      848,
                      853
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 46
                      },
                      "start": {
                        "column": 24,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    848,
                    853
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 46
                    },
                    "start": {
                      "column": 24,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"bar\"",
                    "value": "bar",
                    "range": [
                      856,
                      861
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 46
                      },
                      "start": {
                        "column": 32,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    856,
                    861
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 46
                    },
                    "start": {
                      "column": 32,
                      "line": 46
                    }
                  }
                }
              ],
              "range": [
                839,
                861
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 46
                },
                "start": {
                  "column": 15,
                  "line": 46
                }
              }
            }
          },
          "range": [
            836,
            861
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 46
            },
            "start": {
              "column": 12,
              "line": 46
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 46
              },
              "start": {
                "column": 40,
                "line": 46
              }
            },
            "range": [
              864,
              880
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      866,
                      867
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 46
                      },
                      "start": {
                        "column": 42,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    866,
                    867
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 46
                    },
                    "start": {
                      "column": 42,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      870,
                      871
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 46
                      },
                      "start": {
                        "column": 46,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    870,
                    871
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 46
                    },
                    "start": {
                      "column": 46,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    874,
                    880
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 46
                    },
                    "start": {
                      "column": 50,
                      "line": 46
                    }
                  }
                }
              ],
              "range": [
                866,
                880
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 46
                },
                "start": {
                  "column": 42,
                  "line": 46
                }
              }
            }
          },
          "range": [
            863,
            880
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 46
            },
            "start": {
              "column": 39,
              "line": 46
            }
          }
        }
      ],
      "range": [
        824,
        947
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 46
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1020,
                    1021
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 54
                    },
                    "start": {
                      "column": 13,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1015,
                  1022
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 54
                  },
                  "start": {
                    "column": 8,
                    "line": 54
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1051,
                        1052
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 56
                        },
                        "start": {
                          "column": 12,
                          "line": 56
                        }
                      }
                    },
                    "range": [
                      1051,
                      1053
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
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      1076,
                      1082
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 57
                      },
                      "start": {
                        "column": 12,
                        "line": 57
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    1036,
                    1037
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 55
                    },
                    "start": {
                      "column": 13,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1031,
                  1082
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 57
                  },
                  "start": {
                    "column": 8,
                    "line": 55
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
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
                          "column": 13,
                          "line": 59
                        },
                        "start": {
                          "column": 12,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1115,
                      1117
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 59
                      },
                      "start": {
                        "column": 12,
                        "line": 59
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      1140,
                      1146
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 60
                      },
                      "start": {
                        "column": 12,
                        "line": 60
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    1096,
                    1101
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 58
                    },
                    "start": {
                      "column": 13,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1091,
                  1146
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 60
                  },
                  "start": {
                    "column": 8,
                    "line": 58
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1176,
                        1177
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 62
                        },
                        "start": {
                          "column": 12,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1176,
                      1178
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 62
                      },
                      "start": {
                        "column": 12,
                        "line": 62
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  1155,
                  1178
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 62
                  },
                  "start": {
                    "column": 8,
                    "line": 61
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1002,
                1003
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
              994,
              1203
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          }
        ],
        "range": [
          988,
          1205
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 39,
            "line": 52
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
          958,
          960
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 52
          },
          "start": {
            "column": 9,
            "line": 52
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
                "column": 37,
                "line": 52
              },
              "start": {
                "column": 13,
                "line": 52
              }
            },
            "range": [
              962,
              986
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    964,
                    970
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 52
                    },
                    "start": {
                      "column": 15,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"foo\"",
                    "value": "foo",
                    "range": [
                      973,
                      978
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 52
                      },
                      "start": {
                        "column": 24,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    973,
                    978
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 52
                    },
                    "start": {
                      "column": 24,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"bar\"",
                    "value": "bar",
                    "range": [
                      981,
                      986
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 52
                      },
                      "start": {
                        "column": 32,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    981,
                    986
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 52
                    },
                    "start": {
                      "column": 32,
                      "line": 52
                    }
                  }
                }
              ],
              "range": [
                964,
                986
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 52
                },
                "start": {
                  "column": 15,
                  "line": 52
                }
              }
            }
          },
          "range": [
            961,
            986
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 52
            },
            "start": {
              "column": 12,
              "line": 52
            }
          }
        }
      ],
      "range": [
        949,
        1205
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 64
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
