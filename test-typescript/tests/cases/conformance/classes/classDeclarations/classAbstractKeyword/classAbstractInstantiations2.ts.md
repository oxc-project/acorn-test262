__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1118
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          22
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        22
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
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          41,
          114
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                47,
                50
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                50,
                83
              ],
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            70,
                            74
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 6
                            },
                            "start": {
                              "column": 27,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "range": [
                            75,
                            78
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 6
                            },
                            "start": {
                              "column": 32,
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
                            "column": 35,
                            "line": 6
                          },
                          "start": {
                            "column": 27,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        70,
                        80
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 6
                        },
                        "start": {
                          "column": 27,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      63,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 6
                      },
                      "start": {
                        "column": 20,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  61,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 9,
                    "line": 6
                  }
                },
                "range": [
                  52,
                  60
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    54,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 40,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              }
            },
            "range": [
              47,
              83
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                97,
                100
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                100,
                112
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                },
                "range": [
                  103,
                  111
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    105,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 7
                    },
                    "start": {
                      "column": 21,
                      "line": 7
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            },
            "range": [
              88,
              112
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
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          39,
          40
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        24,
        114
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "range": [
            120,
            121
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        },
        "range": [
          116,
          121
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        116,
        122
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "BB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              },
              "range": [
                139,
                149
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    148,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                },
                "range": [
                  141,
                  149
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
              }
            },
            "range": [
              137,
              149
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
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              152,
              153
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 19,
                "line": 12
              }
            }
          },
          "range": [
            137,
            153
          ],
          "loc": {
            "end": {
              "column": 20,
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
        133,
        154
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
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "AA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 6,
                  "line": 13
                }
              },
              "range": [
                161,
                171
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    170,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 13
                    },
                    "start": {
                      "column": 15,
                      "line": 13
                    }
                  }
                },
                "range": [
                  163,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              159,
              171
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "BB",
            "optional": false,
            "range": [
              174,
              176
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 13
              },
              "start": {
                "column": 19,
                "line": 13
              }
            }
          },
          "range": [
            159,
            176
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        155,
        177
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "range": [
            220,
            222
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        "range": [
          216,
          222
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        216,
        223
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Factory",
                "optional": false,
                "range": [
                  275,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              },
              "range": [
                271,
                282
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
            },
            "range": [
              271,
              283
            ],
            "loc": {
              "end": {
                "column": 16,
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
          265,
          326
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 40,
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
        "name": "constructB",
        "optional": false,
        "range": [
          234,
          244
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Factory",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 16
              },
              "start": {
                "column": 28,
                "line": 16
              }
            },
            "range": [
              253,
              263
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  262,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 16
                  },
                  "start": {
                    "column": 37,
                    "line": 16
                  }
                }
              },
              "range": [
                255,
                263
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 16
                },
                "start": {
                  "column": 30,
                  "line": 16
                }
              }
            }
          },
          "range": [
            245,
            263
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 16
            },
            "start": {
              "column": 20,
              "line": 16
            }
          }
        }
      ],
      "range": [
        225,
        326
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
            "name": "BB",
            "optional": false,
            "range": [
              332,
              334
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              337,
              338
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 20
              },
              "start": {
                "column": 9,
                "line": 20
              }
            }
          },
          "range": [
            332,
            338
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        328,
        339
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
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "BB",
          "optional": false,
          "range": [
            344,
            346
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        },
        "range": [
          340,
          346
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        340,
        347
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 21
        },
        "start": {
          "column": 0,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 23
                },
                "start": {
                  "column": 6,
                  "line": 23
                }
              },
              "range": [
                391,
                396
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  393,
                  396
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
              }
            },
            "range": [
              389,
              396
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              399,
              400
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 23
              },
              "start": {
                "column": 14,
                "line": 23
              }
            }
          },
          "range": [
            389,
            400
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        385,
        401
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            406,
            407
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        "range": [
          402,
          407
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        402,
        408
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          469,
          472
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 21,
            "line": 26
          },
          "start": {
            "column": 18,
            "line": 26
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
          457,
          458
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 26
          },
          "start": {
            "column": 6,
            "line": 26
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          467,
          468
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 26
          },
          "start": {
            "column": 16,
            "line": 26
          }
        }
      },
      "range": [
        451,
        472
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          535,
          538
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 30,
            "line": 28
          },
          "start": {
            "column": 27,
            "line": 28
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          523,
          524
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
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          533,
          534
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
        508,
        538
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          566,
          631
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                610,
                613
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                613,
                629
              ],
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
                        625,
                        626
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 31
                        },
                        "start": {
                          "column": 19,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      618,
                      627
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 31
                      },
                      "start": {
                        "column": 12,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  616,
                  629
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 31
                  },
                  "start": {
                    "column": 10,
                    "line": 31
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 31
                },
                "start": {
                  "column": 7,
                  "line": 31
                }
              }
            },
            "range": [
              610,
              629
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 18,
            "line": 30
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          554,
          555
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 30
          },
          "start": {
            "column": 6,
            "line": 30
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          564,
          565
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 30
          },
          "start": {
            "column": 16,
            "line": 30
          }
        }
      },
      "range": [
        548,
        631
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          660,
          716
        ],
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                675,
                678
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 35
                },
                "start": {
                  "column": 13,
                  "line": 35
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                678,
                690
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 35
                  },
                  "start": {
                    "column": 19,
                    "line": 35
                  }
                },
                "range": [
                  681,
                  689
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    683,
                    689
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 35
                    },
                    "start": {
                      "column": 21,
                      "line": 35
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 28,
                  "line": 35
                },
                "start": {
                  "column": 16,
                  "line": 35
                }
              }
            },
            "range": [
              666,
              690
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                695,
                698
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                698,
                714
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        710,
                        711
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 36
                        },
                        "start": {
                          "column": 19,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      703,
                      712
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 36
                      },
                      "start": {
                        "column": 12,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  701,
                  714
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 36
                  },
                  "start": {
                    "column": 10,
                    "line": 36
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 36
                },
                "start": {
                  "column": 7,
                  "line": 36
                }
              }
            },
            "range": [
              695,
              714
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 27,
            "line": 34
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "range": [
          648,
          649
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 34
          },
          "start": {
            "column": 15,
            "line": 34
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          658,
          659
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 34
          },
          "start": {
            "column": 25,
            "line": 34
          }
        }
      },
      "range": [
        633,
        716
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          735,
          1042
        ],
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "qux",
              "optional": false,
              "range": [
                750,
                753
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 40
                },
                "start": {
                  "column": 13,
                  "line": 40
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                753,
                775
              ],
              "async": false,
              "body": null,
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 40
                      },
                      "start": {
                        "column": 19,
                        "line": 40
                      }
                    },
                    "range": [
                      756,
                      764
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        758,
                        764
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 40
                        },
                        "start": {
                          "column": 21,
                          "line": 40
                        }
                      }
                    }
                  },
                  "range": [
                    754,
                    764
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 40
                    },
                    "start": {
                      "column": 17,
                      "line": 40
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 40
                  },
                  "start": {
                    "column": 29,
                    "line": 40
                  }
                },
                "range": [
                  766,
                  774
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    768,
                    774
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 40
                    },
                    "start": {
                      "column": 31,
                      "line": 40
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 38,
                  "line": 40
                },
                "start": {
                  "column": 16,
                  "line": 40
                }
              }
            },
            "range": [
              741,
              775
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "qux",
              "optional": false,
              "range": [
                789,
                792
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 41
                },
                "start": {
                  "column": 13,
                  "line": 41
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                792,
                804
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 41
                  },
                  "start": {
                    "column": 19,
                    "line": 41
                  }
                },
                "range": [
                  795,
                  803
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    797,
                    803
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 41
                    },
                    "start": {
                      "column": 21,
                      "line": 41
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 28,
                  "line": 41
                },
                "start": {
                  "column": 16,
                  "line": 41
                }
              }
            },
            "range": [
              780,
              804
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
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
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                809,
                810
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 42
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
                  "column": 14,
                  "line": 42
                },
                "start": {
                  "column": 6,
                  "line": 42
                }
              },
              "range": [
                811,
                819
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  813,
                  819
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 42
                  },
                  "start": {
                    "column": 8,
                    "line": 42
                  }
                }
              }
            },
            "value": null,
            "range": [
              809,
              820
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "quz",
              "optional": false,
              "range": [
                834,
                837
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 43
                },
                "start": {
                  "column": 13,
                  "line": 43
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                837,
                872
              ],
              "async": false,
              "body": null,
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 43
                      },
                      "start": {
                        "column": 19,
                        "line": 43
                      }
                    },
                    "range": [
                      840,
                      848
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        842,
                        848
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 43
                        },
                        "start": {
                          "column": 21,
                          "line": 43
                        }
                      }
                    }
                  },
                  "range": [
                    838,
                    848
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 43
                    },
                    "start": {
                      "column": 17,
                      "line": 43
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
                        "column": 39,
                        "line": 43
                      },
                      "start": {
                        "column": 31,
                        "line": 43
                      }
                    },
                    "range": [
                      852,
                      860
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        854,
                        860
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 43
                        },
                        "start": {
                          "column": 33,
                          "line": 43
                        }
                      }
                    }
                  },
                  "range": [
                    850,
                    860
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 43
                    },
                    "start": {
                      "column": 29,
                      "line": 43
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 43
                  },
                  "start": {
                    "column": 41,
                    "line": 43
                  }
                },
                "range": [
                  862,
                  871
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    864,
                    871
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 43
                    },
                    "start": {
                      "column": 43,
                      "line": 43
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 51,
                  "line": 43
                },
                "start": {
                  "column": 16,
                  "line": 43
                }
              }
            },
            "range": [
              825,
              872
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nom",
              "optional": false,
              "range": [
                929,
                932
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 45
                },
                "start": {
                  "column": 13,
                  "line": 45
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                932,
                944
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 45
                  },
                  "start": {
                    "column": 18,
                    "line": 45
                  }
                },
                "range": [
                  934,
                  943
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    936,
                    943
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 45
                    },
                    "start": {
                      "column": 20,
                      "line": 45
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 28,
                  "line": 45
                },
                "start": {
                  "column": 16,
                  "line": 45
                }
              }
            },
            "range": [
              920,
              944
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nom",
              "optional": false,
              "range": [
                949,
                952
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                952,
                974
              ],
              "async": false,
              "body": null,
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 46
                      },
                      "start": {
                        "column": 10,
                        "line": 46
                      }
                    },
                    "range": [
                      955,
                      963
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        957,
                        963
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 46
                        },
                        "start": {
                          "column": 12,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    953,
                    963
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 46
                  },
                  "start": {
                    "column": 19,
                    "line": 46
                  }
                },
                "range": [
                  964,
                  973
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    966,
                    973
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 46
                    },
                    "start": {
                      "column": 21,
                      "line": 46
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 29,
                  "line": 46
                },
                "start": {
                  "column": 7,
                  "line": 46
                }
              }
            },
            "range": [
              949,
              974
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 17,
            "line": 39
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "range": [
          733,
          734
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 39
          },
          "start": {
            "column": 15,
            "line": 39
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        718,
        1042
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1052,
          1118
        ],
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                1101,
                1104
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 50
                },
                "start": {
                  "column": 13,
                  "line": 50
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1104,
                1116
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 50
                  },
                  "start": {
                    "column": 19,
                    "line": 50
                  }
                },
                "range": [
                  1107,
                  1115
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1109,
                    1115
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 50
                    },
                    "start": {
                      "column": 21,
                      "line": 50
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 28,
                  "line": 50
                },
                "start": {
                  "column": 16,
                  "line": 50
                }
              }
            },
            "range": [
              1092,
              1116
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 8,
            "line": 49
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "range": [
          1050,
          1051
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 49
          },
          "start": {
            "column": 6,
            "line": 49
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1044,
        1118
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 51
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
