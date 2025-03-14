__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2269
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              },
              "range": [
                16,
                25
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  18,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
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
            25
          ],
          "loc": {
            "end": {
              "column": 25,
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
      "kind": "let",
      "range": [
        0,
        26
      ],
      "loc": {
        "end": {
          "column": 26,
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
                    109,
                    110
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
                "init": null,
                "range": [
                  109,
                  110
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
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              105,
              111
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
                        136,
                        137
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        140,
                        141
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
                    },
                    "range": [
                      136,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    136,
                    142
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
                }
              ],
              "range": [
                126,
                148
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                120,
                124
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "range": [
              116,
              148
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
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
                        173,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        177,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      173,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    173,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                163,
                191
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                157,
                161
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "range": [
              153,
              191
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    202,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    206,
                    207
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
                },
                "range": [
                  202,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              196,
              208
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
        "range": [
          99,
          242
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 14,
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
        "name": "f1",
        "optional": false,
        "range": [
          94,
          96
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [],
      "range": [
        85,
        242
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 4
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
                    337,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    341,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 17
                    },
                    "start": {
                      "column": 12,
                      "line": 17
                    }
                  }
                },
                "range": [
                  337,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              333,
              351
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                        376,
                        377
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
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        380,
                        381
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
                      376,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    376,
                    382
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                366,
                388
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 18
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                360,
                364
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            },
            "range": [
              356,
              388
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 18
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
                        413,
                        414
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        417,
                        424
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      413,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    413,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                403,
                431
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 14,
                  "line": 21
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                397,
                401
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "range": [
              393,
              431
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 21
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
                    442,
                    443
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 24
                    },
                    "start": {
                      "column": 10,
                      "line": 24
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    446,
                    447
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
                },
                "range": [
                  442,
                  447
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 24
                  },
                  "start": {
                    "column": 10,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              436,
              448
            ],
            "loc": {
              "end": {
                "column": 16,
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
          327,
          482
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 14,
            "line": 16
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
          322,
          324
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "params": [],
      "range": [
        313,
        482
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 16
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
                    572,
                    573
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
                "init": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    576,
                    580
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 29
                    },
                    "start": {
                      "column": 12,
                      "line": 29
                    }
                  }
                },
                "range": [
                  572,
                  580
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              568,
              581
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
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
                        606,
                        607
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        610,
                        611
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 31
                        },
                        "start": {
                          "column": 12,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      606,
                      611
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    606,
                    612
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                596,
                618
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 14,
                  "line": 30
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                590,
                594
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 30
                },
                "start": {
                  "column": 8,
                  "line": 30
                }
              }
            },
            "range": [
              586,
              618
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 30
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
                        643,
                        644
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        647,
                        654
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 34
                        },
                        "start": {
                          "column": 12,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      643,
                      654
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    643,
                    655
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                }
              ],
              "range": [
                633,
                661
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 14,
                  "line": 33
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                627,
                631
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 33
                },
                "start": {
                  "column": 8,
                  "line": 33
                }
              }
            },
            "range": [
              623,
              661
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    672,
                    673
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 36
                    },
                    "start": {
                      "column": 10,
                      "line": 36
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    676,
                    677
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 36
                    },
                    "start": {
                      "column": 14,
                      "line": 36
                    }
                  }
                },
                "range": [
                  672,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 36
                  },
                  "start": {
                    "column": 10,
                    "line": 36
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              666,
              678
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          562,
          707
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 14,
            "line": 28
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
          557,
          559
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 28
          },
          "start": {
            "column": 9,
            "line": 28
          }
        }
      },
      "params": [],
      "range": [
        548,
        707
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 28
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 41
                      },
                      "start": {
                        "column": 9,
                        "line": 41
                      }
                    },
                    "range": [
                      780,
                      785
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        782,
                        785
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 41
                        },
                        "start": {
                          "column": 11,
                          "line": 41
                        }
                      }
                    }
                  },
                  "range": [
                    779,
                    785
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
                "init": null,
                "range": [
                  779,
                  785
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
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              775,
              786
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
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
                        811,
                        812
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 43
                        },
                        "start": {
                          "column": 8,
                          "line": 43
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        815,
                        816
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 43
                        },
                        "start": {
                          "column": 12,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      811,
                      816
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 43
                      },
                      "start": {
                        "column": 8,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    811,
                    817
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 43
                    }
                  }
                }
              ],
              "range": [
                801,
                823
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 14,
                  "line": 42
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                795,
                799
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 42
                },
                "start": {
                  "column": 8,
                  "line": 42
                }
              }
            },
            "range": [
              791,
              823
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 42
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
                        848,
                        849
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 46
                        },
                        "start": {
                          "column": 8,
                          "line": 46
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        852,
                        859
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 46
                        },
                        "start": {
                          "column": 12,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      848,
                      859
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    848,
                    860
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                }
              ],
              "range": [
                838,
                866
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 47
                },
                "start": {
                  "column": 14,
                  "line": 45
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                832,
                836
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 45
                },
                "start": {
                  "column": 8,
                  "line": 45
                }
              }
            },
            "range": [
              828,
              866
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 47
              },
              "start": {
                "column": 4,
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    877,
                    878
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 48
                    },
                    "start": {
                      "column": 10,
                      "line": 48
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    881,
                    882
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
                },
                "range": [
                  877,
                  882
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 48
                  },
                  "start": {
                    "column": 10,
                    "line": 48
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              871,
              883
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
        "range": [
          769,
          893
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 14,
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
        "name": "f4",
        "optional": false,
        "range": [
          764,
          766
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
      "params": [],
      "range": [
        755,
        893
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
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
                    976,
                    977
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
                "init": null,
                "range": [
                  976,
                  977
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
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              972,
              978
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
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
                        1003,
                        1004
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 55
                        },
                        "start": {
                          "column": 8,
                          "line": 55
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1007,
                        1008
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 55
                        },
                        "start": {
                          "column": 12,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1003,
                      1008
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 55
                      },
                      "start": {
                        "column": 8,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1003,
                    1009
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                993,
                1015
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 56
                },
                "start": {
                  "column": 14,
                  "line": 54
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                987,
                991
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 54
                },
                "start": {
                  "column": 8,
                  "line": 54
                }
              }
            },
            "range": [
              983,
              1015
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 54
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
                        1040,
                        1041
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 58
                        },
                        "start": {
                          "column": 8,
                          "line": 58
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        1044,
                        1051
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 58
                        },
                        "start": {
                          "column": 12,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1040,
                      1051
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1040,
                    1052
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                }
              ],
              "range": [
                1030,
                1058
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 59
                },
                "start": {
                  "column": 14,
                  "line": 57
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1024,
                1028
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 57
                },
                "start": {
                  "column": 8,
                  "line": 57
                }
              }
            },
            "range": [
              1020,
              1058
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 57
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
                    1069,
                    1070
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 60
                    },
                    "start": {
                      "column": 10,
                      "line": 60
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1073,
                    1074
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 60
                    },
                    "start": {
                      "column": 14,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1069,
                  1074
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 60
                  },
                  "start": {
                    "column": 10,
                    "line": 60
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1063,
              1075
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          }
        ],
        "range": [
          966,
          1109
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 14,
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
        "name": "f5",
        "optional": false,
        "range": [
          961,
          963
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
      "params": [],
      "range": [
        952,
        1109
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 52
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
                    1204,
                    1205
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
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    1208,
                    1217
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 65
                    },
                    "start": {
                      "column": 12,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1204,
                  1217
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 65
                  },
                  "start": {
                    "column": 8,
                    "line": 65
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1200,
              1218
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
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
                        1243,
                        1244
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 67
                        },
                        "start": {
                          "column": 8,
                          "line": 67
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1247,
                        1248
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
                    "range": [
                      1243,
                      1248
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1243,
                    1249
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 67
                    },
                    "start": {
                      "column": 8,
                      "line": 67
                    }
                  }
                }
              ],
              "range": [
                1233,
                1255
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 14,
                  "line": 66
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1227,
                1231
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 66
                },
                "start": {
                  "column": 8,
                  "line": 66
                }
              }
            },
            "range": [
              1223,
              1255
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 66
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
                        1280,
                        1281
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 70
                        },
                        "start": {
                          "column": 8,
                          "line": 70
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        1284,
                        1291
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 70
                        },
                        "start": {
                          "column": 12,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      1280,
                      1291
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 70
                      },
                      "start": {
                        "column": 8,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    1280,
                    1292
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 70
                    },
                    "start": {
                      "column": 8,
                      "line": 70
                    }
                  }
                }
              ],
              "range": [
                1270,
                1298
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 71
                },
                "start": {
                  "column": 14,
                  "line": 69
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1264,
                1268
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
            "range": [
              1260,
              1298
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 69
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
                    1309,
                    1310
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 72
                    },
                    "start": {
                      "column": 10,
                      "line": 72
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1313,
                    1314
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 72
                    },
                    "start": {
                      "column": 14,
                      "line": 72
                    }
                  }
                },
                "range": [
                  1309,
                  1314
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
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1303,
              1315
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          }
        ],
        "range": [
          1194,
          1349
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 14,
            "line": 64
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
          1189,
          1191
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 64
          },
          "start": {
            "column": 9,
            "line": 64
          }
        }
      },
      "params": [],
      "range": [
        1180,
        1349
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 64
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
                    1439,
                    1440
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 77
                    },
                    "start": {
                      "column": 8,
                      "line": 77
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    1443,
                    1447
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 77
                    },
                    "start": {
                      "column": 12,
                      "line": 77
                    }
                  }
                },
                "range": [
                  1439,
                  1447
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 77
                  },
                  "start": {
                    "column": 8,
                    "line": 77
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1435,
              1448
            ],
            "loc": {
              "end": {
                "column": 17,
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
                        1473,
                        1474
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 79
                        },
                        "start": {
                          "column": 8,
                          "line": 79
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1477,
                        1478
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 79
                        },
                        "start": {
                          "column": 12,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      1473,
                      1478
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 79
                      },
                      "start": {
                        "column": 8,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    1473,
                    1479
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 79
                    },
                    "start": {
                      "column": 8,
                      "line": 79
                    }
                  }
                }
              ],
              "range": [
                1463,
                1485
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 80
                },
                "start": {
                  "column": 14,
                  "line": 78
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1457,
                1461
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
            "range": [
              1453,
              1485
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 78
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
                        1510,
                        1511
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 82
                        },
                        "start": {
                          "column": 8,
                          "line": 82
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        1514,
                        1521
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 82
                        },
                        "start": {
                          "column": 12,
                          "line": 82
                        }
                      }
                    },
                    "range": [
                      1510,
                      1521
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 82
                      },
                      "start": {
                        "column": 8,
                        "line": 82
                      }
                    }
                  },
                  "range": [
                    1510,
                    1522
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 82
                    },
                    "start": {
                      "column": 8,
                      "line": 82
                    }
                  }
                }
              ],
              "range": [
                1500,
                1528
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 83
                },
                "start": {
                  "column": 14,
                  "line": 81
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1494,
                1498
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 81
                },
                "start": {
                  "column": 8,
                  "line": 81
                }
              }
            },
            "range": [
              1490,
              1528
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 81
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
                    1539,
                    1540
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 84
                    },
                    "start": {
                      "column": 10,
                      "line": 84
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1543,
                    1544
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 84
                    },
                    "start": {
                      "column": 14,
                      "line": 84
                    }
                  }
                },
                "range": [
                  1539,
                  1544
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 84
                  },
                  "start": {
                    "column": 10,
                    "line": 84
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1533,
              1545
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          }
        ],
        "range": [
          1429,
          1574
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 85
          },
          "start": {
            "column": 14,
            "line": 76
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
          1424,
          1426
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 76
          },
          "start": {
            "column": 9,
            "line": 76
          }
        }
      },
      "params": [],
      "range": [
        1415,
        1574
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 76
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 89
                      },
                      "start": {
                        "column": 9,
                        "line": 89
                      }
                    },
                    "range": [
                      1647,
                      1652
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1649,
                        1652
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 89
                        },
                        "start": {
                          "column": 11,
                          "line": 89
                        }
                      }
                    }
                  },
                  "range": [
                    1646,
                    1652
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 89
                    },
                    "start": {
                      "column": 8,
                      "line": 89
                    }
                  }
                },
                "init": null,
                "range": [
                  1646,
                  1652
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 89
                  },
                  "start": {
                    "column": 8,
                    "line": 89
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1642,
              1653
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 89
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
                        1678,
                        1679
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 91
                        },
                        "start": {
                          "column": 8,
                          "line": 91
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1682,
                        1683
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 91
                        },
                        "start": {
                          "column": 12,
                          "line": 91
                        }
                      }
                    },
                    "range": [
                      1678,
                      1683
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 91
                      },
                      "start": {
                        "column": 8,
                        "line": 91
                      }
                    }
                  },
                  "range": [
                    1678,
                    1684
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
              "range": [
                1668,
                1690
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 92
                },
                "start": {
                  "column": 14,
                  "line": 90
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1662,
                1666
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 90
                },
                "start": {
                  "column": 8,
                  "line": 90
                }
              }
            },
            "range": [
              1658,
              1690
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 90
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
                        1715,
                        1716
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 94
                        },
                        "start": {
                          "column": 8,
                          "line": 94
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        1719,
                        1726
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 94
                        },
                        "start": {
                          "column": 12,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      1715,
                      1726
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 94
                      },
                      "start": {
                        "column": 8,
                        "line": 94
                      }
                    }
                  },
                  "range": [
                    1715,
                    1727
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 94
                    },
                    "start": {
                      "column": 8,
                      "line": 94
                    }
                  }
                }
              ],
              "range": [
                1705,
                1733
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 95
                },
                "start": {
                  "column": 14,
                  "line": 93
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1699,
                1703
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 93
                },
                "start": {
                  "column": 8,
                  "line": 93
                }
              }
            },
            "range": [
              1695,
              1733
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 93
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
                    1744,
                    1745
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 96
                    },
                    "start": {
                      "column": 10,
                      "line": 96
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1748,
                    1749
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 96
                    },
                    "start": {
                      "column": 14,
                      "line": 96
                    }
                  }
                },
                "range": [
                  1744,
                  1749
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 96
                  },
                  "start": {
                    "column": 10,
                    "line": 96
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1738,
              1750
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          }
        ],
        "range": [
          1636,
          1760
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 97
          },
          "start": {
            "column": 14,
            "line": 88
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
          1631,
          1633
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 88
          },
          "start": {
            "column": 9,
            "line": 88
          }
        }
      },
      "params": [],
      "range": [
        1622,
        1760
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 88
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
                    1825,
                    1826
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 101
                    },
                    "start": {
                      "column": 8,
                      "line": 101
                    }
                  }
                },
                "init": null,
                "range": [
                  1825,
                  1826
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 101
                  },
                  "start": {
                    "column": 8,
                    "line": 101
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1821,
              1827
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 101
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
                        1852,
                        1853
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
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1856,
                        1857
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 103
                        },
                        "start": {
                          "column": 12,
                          "line": 103
                        }
                      }
                    },
                    "range": [
                      1852,
                      1857
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 103
                      },
                      "start": {
                        "column": 8,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    1852,
                    1858
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 103
                    },
                    "start": {
                      "column": 8,
                      "line": 103
                    }
                  }
                }
              ],
              "range": [
                1842,
                1864
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 104
                },
                "start": {
                  "column": 14,
                  "line": 102
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1836,
                1840
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 102
                },
                "start": {
                  "column": 8,
                  "line": 102
                }
              }
            },
            "range": [
              1832,
              1864
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 102
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
                        1889,
                        1890
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 106
                        },
                        "start": {
                          "column": 8,
                          "line": 106
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        1893,
                        1900
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 106
                        },
                        "start": {
                          "column": 12,
                          "line": 106
                        }
                      }
                    },
                    "range": [
                      1889,
                      1900
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 106
                      },
                      "start": {
                        "column": 8,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    1889,
                    1901
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 106
                    },
                    "start": {
                      "column": 8,
                      "line": 106
                    }
                  }
                }
              ],
              "range": [
                1879,
                1907
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 107
                },
                "start": {
                  "column": 14,
                  "line": 105
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1873,
                1877
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 105
                },
                "start": {
                  "column": 8,
                  "line": 105
                }
              }
            },
            "range": [
              1869,
              1907
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 107
              },
              "start": {
                "column": 4,
                "line": 105
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
                    1918,
                    1919
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 108
                    },
                    "start": {
                      "column": 10,
                      "line": 108
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1922,
                    1923
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 108
                    },
                    "start": {
                      "column": 14,
                      "line": 108
                    }
                  }
                },
                "range": [
                  1918,
                  1923
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 108
                  },
                  "start": {
                    "column": 10,
                    "line": 108
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1912,
              1924
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 108
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
                        "name": "z",
                        "optional": false,
                        "range": [
                          1990,
                          1991
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 110
                          },
                          "start": {
                            "column": 14,
                            "line": 110
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1994,
                          1995
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 110
                          },
                          "start": {
                            "column": 18,
                            "line": 110
                          }
                        }
                      },
                      "range": [
                        1990,
                        1995
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 110
                        },
                        "start": {
                          "column": 14,
                          "line": 110
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    1984,
                    1996
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 110
                    },
                    "start": {
                      "column": 8,
                      "line": 110
                    }
                  }
                }
              ],
              "range": [
                1974,
                2010
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 111
                },
                "start": {
                  "column": 17,
                  "line": 109
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                1970,
                1971
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 109
                },
                "start": {
                  "column": 13,
                  "line": 109
                }
              }
            },
            "params": [],
            "range": [
              1961,
              2010
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 111
              },
              "start": {
                "column": 4,
                "line": 109
              }
            }
          }
        ],
        "range": [
          1815,
          2012
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 112
          },
          "start": {
            "column": 14,
            "line": 100
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
          1810,
          1812
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 100
          },
          "start": {
            "column": 9,
            "line": 100
          }
        }
      },
      "params": [],
      "range": [
        1801,
        2012
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 112
        },
        "start": {
          "column": 0,
          "line": 100
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
                    2078,
                    2079
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
                "init": null,
                "range": [
                  2078,
                  2079
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
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2074,
              2080
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 116
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
                        2105,
                        2106
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 118
                        },
                        "start": {
                          "column": 8,
                          "line": 118
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2109,
                        2110
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 118
                        },
                        "start": {
                          "column": 12,
                          "line": 118
                        }
                      }
                    },
                    "range": [
                      2105,
                      2110
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 118
                      },
                      "start": {
                        "column": 8,
                        "line": 118
                      }
                    }
                  },
                  "range": [
                    2105,
                    2111
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 118
                    },
                    "start": {
                      "column": 8,
                      "line": 118
                    }
                  }
                }
              ],
              "range": [
                2095,
                2117
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 119
                },
                "start": {
                  "column": 14,
                  "line": 117
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                2089,
                2093
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 117
                },
                "start": {
                  "column": 8,
                  "line": 117
                }
              }
            },
            "range": [
              2085,
              2117
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 119
              },
              "start": {
                "column": 4,
                "line": 117
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
                        2142,
                        2143
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 121
                        },
                        "start": {
                          "column": 8,
                          "line": 121
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        2146,
                        2153
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 121
                        },
                        "start": {
                          "column": 12,
                          "line": 121
                        }
                      }
                    },
                    "range": [
                      2142,
                      2153
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 121
                      },
                      "start": {
                        "column": 8,
                        "line": 121
                      }
                    }
                  },
                  "range": [
                    2142,
                    2154
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 121
                    },
                    "start": {
                      "column": 8,
                      "line": 121
                    }
                  }
                }
              ],
              "range": [
                2132,
                2160
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 122
                },
                "start": {
                  "column": 14,
                  "line": 120
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                2126,
                2130
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 120
                },
                "start": {
                  "column": 8,
                  "line": 120
                }
              }
            },
            "range": [
              2122,
              2160
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 122
              },
              "start": {
                "column": 4,
                "line": 120
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
                    2171,
                    2172
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 123
                    },
                    "start": {
                      "column": 10,
                      "line": 123
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2175,
                    2176
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 123
                    },
                    "start": {
                      "column": 14,
                      "line": 123
                    }
                  }
                },
                "range": [
                  2171,
                  2176
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 123
                  },
                  "start": {
                    "column": 10,
                    "line": 123
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2165,
              2177
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 123
              },
              "start": {
                "column": 4,
                "line": 123
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
                  "name": "f",
                  "optional": false,
                  "range": [
                    2220,
                    2221
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 124
                    },
                    "start": {
                      "column": 10,
                      "line": 124
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "z",
                              "optional": false,
                              "range": [
                                2246,
                                2247
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 125
                                },
                                "start": {
                                  "column": 14,
                                  "line": 125
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2250,
                                2251
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 125
                                },
                                "start": {
                                  "column": 18,
                                  "line": 125
                                }
                              }
                            },
                            "range": [
                              2246,
                              2251
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 125
                              },
                              "start": {
                                "column": 14,
                                "line": 125
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          2240,
                          2252
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
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
                      2230,
                      2266
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 126
                      },
                      "start": {
                        "column": 20,
                        "line": 124
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    2224,
                    2266
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 126
                    },
                    "start": {
                      "column": 14,
                      "line": 124
                    }
                  }
                },
                "range": [
                  2220,
                  2266
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 126
                  },
                  "start": {
                    "column": 10,
                    "line": 124
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2214,
              2267
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 126
              },
              "start": {
                "column": 4,
                "line": 124
              }
            }
          }
        ],
        "range": [
          2068,
          2269
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 127
          },
          "start": {
            "column": 15,
            "line": 115
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
          2062,
          2065
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 115
          },
          "start": {
            "column": 9,
            "line": 115
          }
        }
      },
      "params": [],
      "range": [
        2053,
        2269
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 127
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 127
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
