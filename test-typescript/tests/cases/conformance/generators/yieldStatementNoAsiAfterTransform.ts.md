__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    805
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              },
              "range": [
                13,
                18
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  15,
                  18
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        19
      ],
      "loc": {
        "end": {
          "column": 19,
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
              "type": "YieldExpression",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    77,
                    78
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
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    82,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 13,
                      "line": 6
                    }
                  }
                },
                "range": [
                  77,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "delegate": false,
              "range": [
                42,
                91
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              42,
              92
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          36,
          94
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "range": [
          31,
          33
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        21,
        94
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      151,
                      152
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
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      156,
                      159
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 12
                      },
                      "start": {
                        "column": 13,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    151,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    168,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "range": [
                  122,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              },
              "delegate": false,
              "range": [
                116,
                169
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              116,
              170
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          110,
          172
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 15,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "range": [
          105,
          107
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "params": [],
      "range": [
        95,
        172
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 9
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
              "type": "YieldExpression",
              "argument": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    250,
                    251
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
                "consequent": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    246,
                    247
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "test": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      229,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      234,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 18
                      },
                      "start": {
                        "column": 13,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    229,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "range": [
                  200,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              },
              "delegate": false,
              "range": [
                194,
                251
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              194,
              252
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          188,
          254
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 15,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "range": [
          183,
          185
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "params": [],
      "range": [
        173,
        254
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 15
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
              "type": "YieldExpression",
              "argument": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      311,
                      312
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      316,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 24
                      },
                      "start": {
                        "column": 13,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    311,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    326,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 25
                    },
                    "start": {
                      "column": 6,
                      "line": 25
                    }
                  }
                },
                "range": [
                  282,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 22
                  }
                }
              },
              "delegate": false,
              "range": [
                276,
                327
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              276,
              328
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          270,
          330
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 15,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t4",
        "optional": false,
        "range": [
          265,
          267
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 21
          },
          "start": {
            "column": 10,
            "line": 21
          }
        }
      },
      "params": [],
      "range": [
        255,
        330
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 21
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
              "type": "YieldExpression",
              "argument": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      387,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      392,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 30
                      },
                      "start": {
                        "column": 13,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    387,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    402,
                    403
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 31
                    },
                    "start": {
                      "column": 6,
                      "line": 31
                    }
                  }
                },
                "range": [
                  358,
                  404
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 31
                  },
                  "start": {
                    "column": 10,
                    "line": 28
                  }
                }
              },
              "delegate": false,
              "range": [
                352,
                404
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              352,
              405
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          346,
          407
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 15,
            "line": 27
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t5",
        "optional": false,
        "range": [
          341,
          343
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 27
          },
          "start": {
            "column": 10,
            "line": 27
          }
        }
      },
      "params": [],
      "range": [
        331,
        407
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      464,
                      465
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
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      469,
                      472
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 36
                      },
                      "start": {
                        "column": 13,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    464,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                },
                "optional": false,
                "range": [
                  435,
                  480
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 37
                  },
                  "start": {
                    "column": 10,
                    "line": 34
                  }
                }
              },
              "delegate": false,
              "range": [
                429,
                480
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              429,
              481
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          423,
          483
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 15,
            "line": 33
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t6",
        "optional": false,
        "range": [
          418,
          420
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 33
          },
          "start": {
            "column": 10,
            "line": 33
          }
        }
      },
      "params": [],
      "range": [
        408,
        483
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 33
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
              "type": "YieldExpression",
              "argument": {
                "type": "TaggedTemplateExpression",
                "quasi": {
                  "type": "TemplateLiteral",
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "range": [
                        554,
                        556
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 43
                        },
                        "start": {
                          "column": 5,
                          "line": 43
                        }
                      }
                    }
                  ],
                  "range": [
                    554,
                    556
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 43
                    },
                    "start": {
                      "column": 5,
                      "line": 43
                    }
                  }
                },
                "tag": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      540,
                      541
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
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      545,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 42
                      },
                      "start": {
                        "column": 13,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    540,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                },
                "range": [
                  511,
                  556
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 43
                  },
                  "start": {
                    "column": 10,
                    "line": 40
                  }
                }
              },
              "delegate": false,
              "range": [
                505,
                556
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "range": [
              505,
              557
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          499,
          559
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 15,
            "line": 39
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t7",
        "optional": false,
        "range": [
          494,
          496
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 39
          },
          "start": {
            "column": 10,
            "line": 39
          }
        }
      },
      "params": [],
      "range": [
        484,
        559
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 39
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
              "type": "YieldExpression",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      616,
                      617
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
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      621,
                      624
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 48
                      },
                      "start": {
                        "column": 13,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    616,
                    624
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 48
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    634,
                    637
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 49
                    },
                    "start": {
                      "column": 9,
                      "line": 49
                    }
                  }
                },
                "range": [
                  587,
                  637
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 49
                  },
                  "start": {
                    "column": 10,
                    "line": 46
                  }
                }
              },
              "delegate": false,
              "range": [
                581,
                637
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "range": [
              581,
              638
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "range": [
          575,
          640
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 15,
            "line": 45
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t8",
        "optional": false,
        "range": [
          570,
          572
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 45
          },
          "start": {
            "column": 10,
            "line": 45
          }
        }
      },
      "params": [],
      "range": [
        560,
        640
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 45
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
              "type": "YieldExpression",
              "argument": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      697,
                      698
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 54
                      },
                      "start": {
                        "column": 8,
                        "line": 54
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      702,
                      705
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 54
                      },
                      "start": {
                        "column": 13,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    697,
                    705
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 54
                    },
                    "start": {
                      "column": 8,
                      "line": 54
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    722,
                    725
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 55
                    },
                    "start": {
                      "column": 16,
                      "line": 55
                    }
                  }
                },
                "range": [
                  668,
                  725
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 55
                  },
                  "start": {
                    "column": 10,
                    "line": 52
                  }
                }
              },
              "delegate": false,
              "range": [
                662,
                725
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "range": [
              662,
              726
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "range": [
          656,
          728
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 15,
            "line": 51
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t9",
        "optional": false,
        "range": [
          651,
          653
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 51
          },
          "start": {
            "column": 10,
            "line": 51
          }
        }
      },
      "params": [],
      "range": [
        641,
        728
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 51
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
              "type": "YieldExpression",
              "argument": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      786,
                      787
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      791,
                      794
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 60
                      },
                      "start": {
                        "column": 13,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    786,
                    794
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                },
                "range": [
                  757,
                  801
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 61
                  },
                  "start": {
                    "column": 10,
                    "line": 58
                  }
                }
              },
              "delegate": false,
              "range": [
                751,
                801
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            },
            "range": [
              751,
              802
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          }
        ],
        "range": [
          745,
          804
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 16,
            "line": 57
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t10",
        "optional": false,
        "range": [
          739,
          742
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 57
          },
          "start": {
            "column": 10,
            "line": 57
          }
        }
      },
      "params": [],
      "range": [
        729,
        804
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 63
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
