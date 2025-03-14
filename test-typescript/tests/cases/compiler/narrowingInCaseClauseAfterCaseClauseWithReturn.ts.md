__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    986
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
                    121,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 4
                    },
                    "start": {
                      "column": 22,
                      "line": 4
                    }
                  }
                },
                "range": [
                  117,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              "range": [
                111,
                129
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "range": [
                  106,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                105,
                109
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            },
            "range": [
              101,
              129
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"A\"",
                      "value": "A",
                      "range": [
                        198,
                        201
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 8
                        },
                        "start": {
                          "column": 13,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      191,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 8
                      },
                      "start": {
                        "column": 6,
                        "line": 8
                      }
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "range": [
                          158,
                          161
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 7
                          },
                          "start": {
                            "column": 9,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "range": [
                          162,
                          173
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 7
                          },
                          "start": {
                            "column": 13,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        158,
                        173
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 7
                        },
                        "start": {
                          "column": 9,
                          "line": 7
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      158,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"A\"",
                    "value": "A",
                    "range": [
                      180,
                      183
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 7
                      },
                      "start": {
                        "column": 31,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    158,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 7
                    },
                    "start": {
                      "column": 9,
                      "line": 7
                    }
                  }
                },
                "range": [
                  153,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "range": [
                          213,
                          216
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 10
                          },
                          "start": {
                            "column": 9,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "range": [
                          217,
                          228
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 10
                          },
                          "start": {
                            "column": 13,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        213,
                        228
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 10
                        },
                        "start": {
                          "column": 9,
                          "line": 10
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      213,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 10
                      },
                      "start": {
                        "column": 9,
                        "line": 10
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"B\"",
                    "value": "B",
                    "range": [
                      235,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 10
                      },
                      "start": {
                        "column": 31,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    213,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                },
                "range": [
                  208,
                  239
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "range": [
                          249,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 11
                          },
                          "start": {
                            "column": 9,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "range": [
                          253,
                          264
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 11
                          },
                          "start": {
                            "column": 13,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        249,
                        264
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 11
                        },
                        "start": {
                          "column": 9,
                          "line": 11
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      249,
                      266
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"C\"",
                    "value": "C",
                    "range": [
                      271,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 11
                      },
                      "start": {
                        "column": 31,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    249,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 11
                    },
                    "start": {
                      "column": 9,
                      "line": 11
                    }
                  }
                },
                "range": [
                  244,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"B, C or D\"",
                      "value": "B, C or D",
                      "range": [
                        325,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 13
                        },
                        "start": {
                          "column": 13,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      318,
                      337
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 6,
                        "line": 13
                      }
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "range": [
                          285,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 12
                          },
                          "start": {
                            "column": 9,
                            "line": 12
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "range": [
                          289,
                          300
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 12
                          },
                          "start": {
                            "column": 13,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        285,
                        300
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
                    "optional": false,
                    "range": [
                      285,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"D\"",
                    "value": "D",
                    "range": [
                      307,
                      310
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 12
                      },
                      "start": {
                        "column": 31,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    285,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                },
                "range": [
                  280,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                141,
                145
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            "range": [
              133,
              341
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "\"Not A, B, C or D\"",
              "value": "Not A, B, C or D",
              "range": [
                352,
                370
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 16
                }
              }
            },
            "range": [
              345,
              371
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          }
        ],
        "range": [
          97,
          373
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 40,
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
        "name": "test1",
        "optional": false,
        "range": [
          66,
          71
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
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
                "column": 38,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            },
            "range": [
              75,
              95
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    77,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 20,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    86,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 3
                    },
                    "start": {
                      "column": 29,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                77,
                95
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            }
          },
          "range": [
            72,
            95
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 3
            },
            "start": {
              "column": 15,
              "line": 3
            }
          }
        }
      ],
      "range": [
        57,
        373
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                    439,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 20
                    },
                    "start": {
                      "column": 22,
                      "line": 20
                    }
                  }
                },
                "range": [
                  435,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 20
                  },
                  "start": {
                    "column": 18,
                    "line": 20
                  }
                }
              },
              "range": [
                429,
                447
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "range": [
                  424,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 20
                  },
                  "start": {
                    "column": 7,
                    "line": 20
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                423,
                427
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 20
                },
                "start": {
                  "column": 6,
                  "line": 20
                }
              }
            },
            "range": [
              419,
              447
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          },
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "range": [
                          476,
                          479
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 23
                          },
                          "start": {
                            "column": 9,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "range": [
                          480,
                          491
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 23
                          },
                          "start": {
                            "column": 13,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        476,
                        491
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 23
                        },
                        "start": {
                          "column": 9,
                          "line": 23
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      476,
                      493
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 23
                      },
                      "start": {
                        "column": 9,
                        "line": 23
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"A\"",
                    "value": "A",
                    "range": [
                      498,
                      501
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 23
                      },
                      "start": {
                        "column": 31,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    476,
                    501
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 23
                    },
                    "start": {
                      "column": 9,
                      "line": 23
                    }
                  }
                },
                "range": [
                  471,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "range": [
                          512,
                          515
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 24
                          },
                          "start": {
                            "column": 9,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "range": [
                          516,
                          527
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 24
                          },
                          "start": {
                            "column": 13,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        512,
                        527
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 24
                        },
                        "start": {
                          "column": 9,
                          "line": 24
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      512,
                      529
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 24
                      },
                      "start": {
                        "column": 9,
                        "line": 24
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"B\"",
                    "value": "B",
                    "range": [
                      534,
                      537
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 24
                      },
                      "start": {
                        "column": 31,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    512,
                    537
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 24
                    },
                    "start": {
                      "column": 9,
                      "line": 24
                    }
                  }
                },
                "range": [
                  507,
                  538
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 24
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"A, B or C\"",
                      "value": "A, B or C",
                      "range": [
                        588,
                        599
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 26
                        },
                        "start": {
                          "column": 13,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      581,
                      600
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 26
                      },
                      "start": {
                        "column": 6,
                        "line": 26
                      }
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "range": [
                          548,
                          551
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 25
                          },
                          "start": {
                            "column": 9,
                            "line": 25
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "range": [
                          552,
                          563
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 25
                          },
                          "start": {
                            "column": 13,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        548,
                        563
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 25
                        },
                        "start": {
                          "column": 9,
                          "line": 25
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      548,
                      565
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 25
                      },
                      "start": {
                        "column": 9,
                        "line": 25
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"C\"",
                    "value": "C",
                    "range": [
                      570,
                      573
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 25
                      },
                      "start": {
                        "column": 31,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    548,
                    573
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 25
                    },
                    "start": {
                      "column": 9,
                      "line": 25
                    }
                  }
                },
                "range": [
                  543,
                  600
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"D\"",
                      "value": "D",
                      "range": [
                        650,
                        653
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 28
                        },
                        "start": {
                          "column": 13,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      643,
                      654
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 28
                      },
                      "start": {
                        "column": 6,
                        "line": 28
                      }
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "range": [
                          610,
                          613
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 27
                          },
                          "start": {
                            "column": 9,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "range": [
                          614,
                          625
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 27
                          },
                          "start": {
                            "column": 13,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        610,
                        625
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 27
                        },
                        "start": {
                          "column": 9,
                          "line": 27
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      610,
                      627
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 27
                      },
                      "start": {
                        "column": 9,
                        "line": 27
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"D\"",
                    "value": "D",
                    "range": [
                      632,
                      635
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 27
                      },
                      "start": {
                        "column": 31,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    610,
                    635
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 27
                    },
                    "start": {
                      "column": 9,
                      "line": 27
                    }
                  }
                },
                "range": [
                  605,
                  654
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                459,
                463
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 22
                },
                "start": {
                  "column": 10,
                  "line": 22
                }
              }
            },
            "range": [
              451,
              658
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "\"Not A, B, C or D\"",
              "value": "Not A, B, C or D",
              "range": [
                669,
                687
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "range": [
              662,
              688
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 31
              }
            }
          }
        ],
        "range": [
          415,
          690
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 40,
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
        "name": "test2",
        "optional": false,
        "range": [
          384,
          389
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 19
              },
              "start": {
                "column": 18,
                "line": 19
              }
            },
            "range": [
              393,
              413
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    395,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 19
                    },
                    "start": {
                      "column": 20,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    404,
                    413
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 19
                    },
                    "start": {
                      "column": 29,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                395,
                413
              ],
              "loc": {
                "end": {
                  "column": 38,
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
            390,
            413
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 19
            },
            "start": {
              "column": 15,
              "line": 19
            }
          }
        }
      ],
      "range": [
        375,
        690
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    871,
                    878
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 44
                    },
                    "start": {
                      "column": 4,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                865,
                882
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 45
                },
                "start": {
                  "column": 12,
                  "line": 43
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  860,
                  863
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 43
                  },
                  "start": {
                    "column": 7,
                    "line": 43
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                859,
                863
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 43
                },
                "start": {
                  "column": 6,
                  "line": 43
                }
              }
            },
            "range": [
              855,
              882
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 45
              },
              "start": {
                "column": 2,
                "line": 43
              }
            }
          },
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "range": [
                      926,
                      933
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 49
                      },
                      "start": {
                        "column": 6,
                        "line": 49
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"a\"",
                  "value": "a",
                  "range": [
                    915,
                    918
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 48
                    },
                    "start": {
                      "column": 9,
                      "line": 48
                    }
                  }
                },
                "range": [
                  910,
                  933
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 48
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      943,
                      946
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 50
                      },
                      "start": {
                        "column": 9,
                        "line": 50
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      947,
                      951
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 50
                      },
                      "start": {
                        "column": 13,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    943,
                    951
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 50
                    },
                    "start": {
                      "column": 9,
                      "line": 50
                    }
                  }
                },
                "range": [
                  938,
                  952
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "range": [
                      973,
                      980
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 52
                      },
                      "start": {
                        "column": 6,
                        "line": 52
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"c\"",
                  "value": "c",
                  "range": [
                    962,
                    965
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 51
                    },
                    "start": {
                      "column": 9,
                      "line": 51
                    }
                  }
                },
                "range": [
                  957,
                  980
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 52
                  },
                  "start": {
                    "column": 4,
                    "line": 51
                  }
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  894,
                  897
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 47
                  },
                  "start": {
                    "column": 10,
                    "line": 47
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  898,
                  902
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 47
                  },
                  "start": {
                    "column": 14,
                    "line": 47
                  }
                }
              },
              "range": [
                894,
                902
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 47
                },
                "start": {
                  "column": 10,
                  "line": 47
                }
              }
            },
            "range": [
              886,
              984
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 53
              },
              "start": {
                "column": 2,
                "line": 47
              }
            }
          }
        ],
        "range": [
          851,
          986
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 2,
            "line": 42
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "range": [
          701,
          706
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 38
              },
              "start": {
                "column": 5,
                "line": 35
              }
            },
            "range": [
              713,
              817
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          723,
                          727
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 36
                          },
                          "start": {
                            "column": 8,
                            "line": 36
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
                            "column": 17,
                            "line": 36
                          },
                          "start": {
                            "column": 12,
                            "line": 36
                          }
                        },
                        "range": [
                          727,
                          732
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"a\"",
                            "value": "a",
                            "range": [
                              729,
                              732
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 36
                              },
                              "start": {
                                "column": 14,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            729,
                            732
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 36
                            },
                            "start": {
                              "column": 14,
                              "line": 36
                            }
                          }
                        }
                      },
                      "range": [
                        723,
                        733
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 36
                        },
                        "start": {
                          "column": 8,
                          "line": 36
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          734,
                          738
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 36
                          },
                          "start": {
                            "column": 19,
                            "line": 36
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
                            "column": 31,
                            "line": 36
                          },
                          "start": {
                            "column": 23,
                            "line": 36
                          }
                        },
                        "range": [
                          738,
                          746
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            740,
                            746
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 36
                            },
                            "start": {
                              "column": 25,
                              "line": 36
                            }
                          }
                        }
                      },
                      "range": [
                        734,
                        746
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 36
                        },
                        "start": {
                          "column": 19,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "range": [
                    721,
                    748
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 36
                    },
                    "start": {
                      "column": 6,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          757,
                          761
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 37
                          },
                          "start": {
                            "column": 8,
                            "line": 37
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
                            "column": 17,
                            "line": 37
                          },
                          "start": {
                            "column": 12,
                            "line": 37
                          }
                        },
                        "range": [
                          761,
                          766
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"b\"",
                            "value": "b",
                            "range": [
                              763,
                              766
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 37
                              },
                              "start": {
                                "column": 14,
                                "line": 37
                              }
                            }
                          },
                          "range": [
                            763,
                            766
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 37
                            },
                            "start": {
                              "column": 14,
                              "line": 37
                            }
                          }
                        }
                      },
                      "range": [
                        757,
                        767
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
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          768,
                          772
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 37
                          },
                          "start": {
                            "column": 19,
                            "line": 37
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
                            "column": 31,
                            "line": 37
                          },
                          "start": {
                            "column": 23,
                            "line": 37
                          }
                        },
                        "range": [
                          772,
                          780
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            774,
                            780
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 37
                            },
                            "start": {
                              "column": 25,
                              "line": 37
                            }
                          }
                        }
                      },
                      "range": [
                        768,
                        780
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 37
                        },
                        "start": {
                          "column": 19,
                          "line": 37
                        }
                      }
                    }
                  ],
                  "range": [
                    755,
                    782
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 37
                    },
                    "start": {
                      "column": 6,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          791,
                          795
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 38
                          },
                          "start": {
                            "column": 8,
                            "line": 38
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
                            "column": 17,
                            "line": 38
                          },
                          "start": {
                            "column": 12,
                            "line": 38
                          }
                        },
                        "range": [
                          795,
                          800
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"c\"",
                            "value": "c",
                            "range": [
                              797,
                              800
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 38
                              },
                              "start": {
                                "column": 14,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            797,
                            800
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 38
                            },
                            "start": {
                              "column": 14,
                              "line": 38
                            }
                          }
                        }
                      },
                      "range": [
                        791,
                        801
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 38
                        },
                        "start": {
                          "column": 8,
                          "line": 38
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          802,
                          806
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 38
                          },
                          "start": {
                            "column": 19,
                            "line": 38
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
                            "column": 32,
                            "line": 38
                          },
                          "start": {
                            "column": 23,
                            "line": 38
                          }
                        },
                        "range": [
                          806,
                          815
                        ],
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "range": [
                            808,
                            815
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 38
                            },
                            "start": {
                              "column": 25,
                              "line": 38
                            }
                          }
                        }
                      },
                      "range": [
                        802,
                        815
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 38
                        },
                        "start": {
                          "column": 19,
                          "line": 38
                        }
                      }
                    }
                  ],
                  "range": [
                    789,
                    817
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 38
                    },
                    "start": {
                      "column": 6,
                      "line": 38
                    }
                  }
                }
              ],
              "range": [
                719,
                817
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 36
                }
              }
            }
          },
          "range": [
            710,
            817
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 38
            },
            "start": {
              "column": 2,
              "line": 35
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 3,
                "line": 41
              },
              "start": {
                "column": 6,
                "line": 39
              }
            },
            "range": [
              825,
              847
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      833,
                      837
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 40
                      },
                      "start": {
                        "column": 4,
                        "line": 40
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
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    },
                    "range": [
                      837,
                      842
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"b\"",
                        "value": "b",
                        "range": [
                          839,
                          842
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 40
                          },
                          "start": {
                            "column": 10,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        839,
                        842
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 40
                        },
                        "start": {
                          "column": 10,
                          "line": 40
                        }
                      }
                    }
                  },
                  "range": [
                    833,
                    843
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 40
                    },
                    "start": {
                      "column": 4,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                827,
                847
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 41
                },
                "start": {
                  "column": 8,
                  "line": 39
                }
              }
            }
          },
          "range": [
            821,
            847
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 41
            },
            "start": {
              "column": 2,
              "line": 39
            }
          }
        }
      ],
      "range": [
        692,
        986
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 54
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
