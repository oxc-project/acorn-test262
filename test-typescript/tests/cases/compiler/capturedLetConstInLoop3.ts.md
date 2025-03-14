__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    16,
    3450
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
        "name": "use",
        "optional": false,
        "range": [
          33,
          36
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
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
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
              }
            },
            "range": [
              38,
              43
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                40,
                43
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            }
          },
          "range": [
            37,
            43
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 2
            },
            "start": {
              "column": 21,
              "line": 2
            }
          }
        }
      ],
      "range": [
        16,
        45
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "type": "ForOfStatement",
            "await": false,
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          101,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 5
                          },
                          "start": {
                            "column": 12,
                            "line": 5
                          }
                        }
                      },
                      "init": {
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
                            "column": 17,
                            "line": 5
                          },
                          "start": {
                            "column": 16,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        101,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 5
                        },
                        "start": {
                          "column": 12,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    97,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                137,
                                138
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 6
                                },
                                "start": {
                                  "column": 29,
                                  "line": 6
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                141,
                                142
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 6
                                },
                                "start": {
                                  "column": 33,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              137,
                              142
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 6
                              },
                              "start": {
                                "column": 29,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            130,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 6
                            },
                            "start": {
                              "column": 22,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        128,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 6
                        },
                        "start": {
                          "column": 20,
                          "line": 6
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      117,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 6
                      },
                      "start": {
                        "column": 9,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    116,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          162,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 7
                          },
                          "start": {
                            "column": 15,
                            "line": 7
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          166,
                          167
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 7
                          },
                          "start": {
                            "column": 19,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        162,
                        167
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      156,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    155,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
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
                87,
                175
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              }
            },
            "left": {
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
                      78,
                      79
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
                  "init": null,
                  "range": [
                    78,
                    79
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
              "declare": false,
              "kind": "let",
              "range": [
                74,
                79
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                83,
                85
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            "range": [
              69,
              175
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    185,
                    186
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  181,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                181,
                187
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              181,
              188
            ],
            "loc": {
              "end": {
                "column": 11,
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
          63,
          190
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 17,
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
        "name": "foo0",
        "optional": false,
        "range": [
          55,
          59
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "x",
          "optional": false,
          "range": [
            60,
            61
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "range": [
        46,
        190
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "type": "ForInStatement",
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          249,
                          250
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 15
                          },
                          "start": {
                            "column": 12,
                            "line": 15
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          253,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 15
                          },
                          "start": {
                            "column": 16,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        249,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 15
                        },
                        "start": {
                          "column": 12,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    245,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                285,
                                286
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 16
                                },
                                "start": {
                                  "column": 29,
                                  "line": 16
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                289,
                                290
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 16
                                },
                                "start": {
                                  "column": 33,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              285,
                              290
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 16
                              },
                              "start": {
                                "column": 29,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            278,
                            290
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 16
                            },
                            "start": {
                              "column": 22,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        276,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 16
                        },
                        "start": {
                          "column": 20,
                          "line": 16
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      265,
                      292
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 16
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    264,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          310,
                          311
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 17
                          },
                          "start": {
                            "column": 15,
                            "line": 17
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          314,
                          315
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 17
                          },
                          "start": {
                            "column": 19,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        310,
                        315
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      304,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 17
                      },
                      "start": {
                        "column": 9,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    303,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                235,
                323
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 22,
                  "line": 14
                }
              }
            },
            "left": {
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
                      226,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    226,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                222,
                227
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                231,
                233
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 14
                },
                "start": {
                  "column": 18,
                  "line": 14
                }
              }
            },
            "range": [
              217,
              323
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    333,
                    334
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
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  329,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "range": [
                329,
                335
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
            "range": [
              329,
              336
            ],
            "loc": {
              "end": {
                "column": 11,
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
          211,
          338
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 19,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_1",
        "optional": false,
        "range": [
          201,
          207
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
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
            208,
            209
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 13
            },
            "start": {
              "column": 16,
              "line": 13
            }
          }
        }
      ],
      "range": [
        192,
        338
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 13
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
            "type": "ForStatement",
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          405,
                          406
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          409,
                          410
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 25
                          },
                          "start": {
                            "column": 16,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        405,
                        410
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 25
                        },
                        "start": {
                          "column": 12,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    401,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                441,
                                442
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 26
                                },
                                "start": {
                                  "column": 29,
                                  "line": 26
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                445,
                                446
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 26
                                },
                                "start": {
                                  "column": 33,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              441,
                              446
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 26
                              },
                              "start": {
                                "column": 29,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            434,
                            446
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 26
                            },
                            "start": {
                              "column": 22,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "range": [
                        432,
                        448
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 26
                        },
                        "start": {
                          "column": 20,
                          "line": 26
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      421,
                      448
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 26
                      },
                      "start": {
                        "column": 9,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    420,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          466,
                          467
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 27
                          },
                          "start": {
                            "column": 15,
                            "line": 27
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          470,
                          471
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 27
                          },
                          "start": {
                            "column": 19,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        466,
                        471
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 27
                        },
                        "start": {
                          "column": 15,
                          "line": 27
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      460,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 27
                      },
                      "start": {
                        "column": 9,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    459,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                391,
                479
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 32,
                  "line": 24
                }
              }
            },
            "init": {
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
                      372,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 24
                      },
                      "start": {
                        "column": 13,
                        "line": 24
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      376,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 24
                      },
                      "start": {
                        "column": 17,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    372,
                    377
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 24
                    },
                    "start": {
                      "column": 13,
                      "line": 24
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                368,
                377
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  379,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 24
                  },
                  "start": {
                    "column": 20,
                    "line": 24
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  383,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 24
                  },
                  "start": {
                    "column": 24,
                    "line": 24
                  }
                }
              },
              "range": [
                379,
                384
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 24
                },
                "start": {
                  "column": 20,
                  "line": 24
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  388,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 24
                  },
                  "start": {
                    "column": 29,
                    "line": 24
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                386,
                389
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 24
                },
                "start": {
                  "column": 27,
                  "line": 24
                }
              }
            },
            "range": [
              363,
              479
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 24
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    489,
                    490
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  485,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 30
                  },
                  "start": {
                    "column": 4,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "range": [
                485,
                491
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              485,
              492
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          357,
          494
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 17,
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
        "name": "foo1",
        "optional": false,
        "range": [
          349,
          353
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "x",
          "optional": false,
          "range": [
            354,
            355
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
        }
      ],
      "range": [
        340,
        494
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
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
            "type": "WhileStatement",
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
                          549,
                          550
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 35
                          },
                          "start": {
                            "column": 12,
                            "line": 35
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          553,
                          554
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 35
                          },
                          "start": {
                            "column": 16,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        549,
                        554
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 35
                        },
                        "start": {
                          "column": 12,
                          "line": 35
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    545,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          568,
                          569
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 36
                          },
                          "start": {
                            "column": 12,
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
                          572,
                          573
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 36
                          },
                          "start": {
                            "column": 16,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        568,
                        573
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 36
                        },
                        "start": {
                          "column": 12,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    564,
                    574
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                604,
                                605
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 37
                                },
                                "start": {
                                  "column": 29,
                                  "line": 37
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                608,
                                609
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 37
                                },
                                "start": {
                                  "column": 33,
                                  "line": 37
                                }
                              }
                            },
                            "range": [
                              604,
                              609
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 37
                              },
                              "start": {
                                "column": 29,
                                "line": 37
                              }
                            }
                          },
                          "range": [
                            597,
                            609
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 37
                            },
                            "start": {
                              "column": 22,
                              "line": 37
                            }
                          }
                        }
                      ],
                      "range": [
                        595,
                        611
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 37
                        },
                        "start": {
                          "column": 20,
                          "line": 37
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      584,
                      611
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 37
                      },
                      "start": {
                        "column": 9,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    583,
                    613
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          629,
                          630
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 38
                          },
                          "start": {
                            "column": 15,
                            "line": 38
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          633,
                          634
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 38
                          },
                          "start": {
                            "column": 19,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        629,
                        634
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 38
                        },
                        "start": {
                          "column": 15,
                          "line": 38
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      623,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 38
                      },
                      "start": {
                        "column": 9,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    622,
                    636
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                }
              ],
              "range": [
                535,
                642
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 39
                },
                "start": {
                  "column": 20,
                  "line": 34
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  526,
                  527
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
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  532,
                  533
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 34
                  },
                  "start": {
                    "column": 17,
                    "line": 34
                  }
                }
              },
              "range": [
                526,
                533
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 34
                },
                "start": {
                  "column": 11,
                  "line": 34
                }
              }
            },
            "range": [
              519,
              642
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 34
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    656,
                    657
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  652,
                  655
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              "optional": false,
              "range": [
                652,
                658
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            "range": [
              652,
              659
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "range": [
          513,
          661
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
        "name": "foo2",
        "optional": false,
        "range": [
          505,
          509
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
            510,
            511
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
        496,
        661
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "DoWhileStatement",
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
                          703,
                          704
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 46
                          },
                          "start": {
                            "column": 12,
                            "line": 46
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        703,
                        704
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 46
                        },
                        "start": {
                          "column": 12,
                          "line": 46
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    699,
                    705
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          718,
                          719
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 47
                          },
                          "start": {
                            "column": 12,
                            "line": 47
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        718,
                        719
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 47
                        },
                        "start": {
                          "column": 12,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    714,
                    720
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                750,
                                751
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 48
                                },
                                "start": {
                                  "column": 29,
                                  "line": 48
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                754,
                                755
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 48
                                },
                                "start": {
                                  "column": 33,
                                  "line": 48
                                }
                              }
                            },
                            "range": [
                              750,
                              755
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 48
                              },
                              "start": {
                                "column": 29,
                                "line": 48
                              }
                            }
                          },
                          "range": [
                            743,
                            755
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 48
                            },
                            "start": {
                              "column": 22,
                              "line": 48
                            }
                          }
                        }
                      ],
                      "range": [
                        741,
                        757
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 48
                        },
                        "start": {
                          "column": 20,
                          "line": 48
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      730,
                      757
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 48
                      },
                      "start": {
                        "column": 9,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    729,
                    759
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 48
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          775,
                          776
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 49
                          },
                          "start": {
                            "column": 15,
                            "line": 49
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          779,
                          780
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 49
                          },
                          "start": {
                            "column": 19,
                            "line": 49
                          }
                        }
                      },
                      "range": [
                        775,
                        780
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 49
                        },
                        "start": {
                          "column": 15,
                          "line": 49
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      769,
                      780
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 49
                      },
                      "start": {
                        "column": 9,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    768,
                    782
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                }
              ],
              "range": [
                689,
                788
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 50
                },
                "start": {
                  "column": 7,
                  "line": 45
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  796,
                  797
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 50
                  },
                  "start": {
                    "column": 13,
                    "line": 50
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  802,
                  803
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 50
                  },
                  "start": {
                    "column": 19,
                    "line": 50
                  }
                }
              },
              "range": [
                796,
                803
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 50
                },
                "start": {
                  "column": 13,
                  "line": 50
                }
              }
            },
            "range": [
              686,
              805
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 45
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    819,
                    820
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  815,
                  818
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 52
                  },
                  "start": {
                    "column": 4,
                    "line": 52
                  }
                }
              },
              "optional": false,
              "range": [
                815,
                821
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "range": [
              815,
              822
            ],
            "loc": {
              "end": {
                "column": 11,
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
          680,
          824
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 17,
            "line": 44
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
          672,
          676
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 44
          },
          "start": {
            "column": 9,
            "line": 44
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
            677,
            678
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 44
            },
            "start": {
              "column": 14,
              "line": 44
            }
          }
        }
      ],
      "range": [
        663,
        824
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 44
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
            "type": "ForStatement",
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          891,
                          892
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 57
                          },
                          "start": {
                            "column": 12,
                            "line": 57
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          895,
                          896
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 57
                          },
                          "start": {
                            "column": 16,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        891,
                        896
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 57
                        },
                        "start": {
                          "column": 12,
                          "line": 57
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    887,
                    897
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          910,
                          911
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 58
                          },
                          "start": {
                            "column": 12,
                            "line": 58
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          914,
                          915
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 58
                          },
                          "start": {
                            "column": 16,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        910,
                        915
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 58
                        },
                        "start": {
                          "column": 12,
                          "line": 58
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    906,
                    916
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                946,
                                947
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 59
                                },
                                "start": {
                                  "column": 29,
                                  "line": 59
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                950,
                                951
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 59
                                },
                                "start": {
                                  "column": 33,
                                  "line": 59
                                }
                              }
                            },
                            "range": [
                              946,
                              951
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 59
                              },
                              "start": {
                                "column": 29,
                                "line": 59
                              }
                            }
                          },
                          "range": [
                            939,
                            951
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 59
                            },
                            "start": {
                              "column": 22,
                              "line": 59
                            }
                          }
                        }
                      ],
                      "range": [
                        937,
                        953
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 59
                        },
                        "start": {
                          "column": 20,
                          "line": 59
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      926,
                      953
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 59
                      },
                      "start": {
                        "column": 9,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    925,
                    955
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          971,
                          972
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 60
                          },
                          "start": {
                            "column": 15,
                            "line": 60
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          975,
                          976
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 60
                          },
                          "start": {
                            "column": 19,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        971,
                        976
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 60
                        },
                        "start": {
                          "column": 15,
                          "line": 60
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      965,
                      976
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 60
                      },
                      "start": {
                        "column": 9,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    964,
                    978
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                }
              ],
              "range": [
                877,
                984
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 61
                },
                "start": {
                  "column": 32,
                  "line": 56
                }
              }
            },
            "init": {
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
                      858,
                      859
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 56
                      },
                      "start": {
                        "column": 13,
                        "line": 56
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      862,
                      863
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 56
                      },
                      "start": {
                        "column": 17,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    858,
                    863
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 56
                    },
                    "start": {
                      "column": 13,
                      "line": 56
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                854,
                863
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 56
                },
                "start": {
                  "column": 9,
                  "line": 56
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  865,
                  866
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 56
                  },
                  "start": {
                    "column": 20,
                    "line": 56
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  869,
                  870
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 56
                  },
                  "start": {
                    "column": 24,
                    "line": 56
                  }
                }
              },
              "range": [
                865,
                870
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 56
                },
                "start": {
                  "column": 20,
                  "line": 56
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  874,
                  875
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 56
                  },
                  "start": {
                    "column": 29,
                    "line": 56
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                872,
                875
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 56
                },
                "start": {
                  "column": 27,
                  "line": 56
                }
              }
            },
            "range": [
              849,
              984
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 61
              },
              "start": {
                "column": 4,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    998,
                    999
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  994,
                  997
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 63
                  },
                  "start": {
                    "column": 4,
                    "line": 63
                  }
                }
              },
              "optional": false,
              "range": [
                994,
                1000
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 63
                },
                "start": {
                  "column": 4,
                  "line": 63
                }
              }
            },
            "range": [
              994,
              1001
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          }
        ],
        "range": [
          843,
          1003
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 17,
            "line": 55
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
          835,
          839
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 55
          },
          "start": {
            "column": 9,
            "line": 55
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
            840,
            841
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 55
            },
            "start": {
              "column": 14,
              "line": 55
            }
          }
        }
      ],
      "range": [
        826,
        1003
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 55
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
            "type": "ForStatement",
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          1077,
                          1078
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 68
                          },
                          "start": {
                            "column": 12,
                            "line": 68
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1081,
                          1082
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 68
                          },
                          "start": {
                            "column": 16,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        1077,
                        1082
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 68
                        },
                        "start": {
                          "column": 12,
                          "line": 68
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1073,
                    1083
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 68
                    },
                    "start": {
                      "column": 8,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1113,
                                  1114
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 69
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 69
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1117,
                                  1118
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 69
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 69
                                  }
                                }
                              },
                              "range": [
                                1113,
                                1118
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 69
                                },
                                "start": {
                                  "column": 29,
                                  "line": 69
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                1121,
                                1122
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 69
                                },
                                "start": {
                                  "column": 37,
                                  "line": 69
                                }
                              }
                            },
                            "range": [
                              1113,
                              1122
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 69
                              },
                              "start": {
                                "column": 29,
                                "line": 69
                              }
                            }
                          },
                          "range": [
                            1106,
                            1122
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 69
                            },
                            "start": {
                              "column": 22,
                              "line": 69
                            }
                          }
                        }
                      ],
                      "range": [
                        1104,
                        1124
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 69
                        },
                        "start": {
                          "column": 20,
                          "line": 69
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1093,
                      1124
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 69
                      },
                      "start": {
                        "column": 9,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    1092,
                    1126
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
                      "line": 69
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1142,
                            1143
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 70
                            },
                            "start": {
                              "column": 15,
                              "line": 70
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1146,
                            1147
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 70
                            },
                            "start": {
                              "column": 19,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          1142,
                          1147
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 70
                          },
                          "start": {
                            "column": 15,
                            "line": 70
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          1150,
                          1151
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 70
                          },
                          "start": {
                            "column": 23,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1142,
                        1151
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 70
                        },
                        "start": {
                          "column": 15,
                          "line": 70
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1136,
                      1151
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 70
                      },
                      "start": {
                        "column": 9,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    1135,
                    1153
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                1063,
                1159
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 71
                },
                "start": {
                  "column": 39,
                  "line": 67
                }
              }
            },
            "init": {
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
                      1037,
                      1038
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 67
                      },
                      "start": {
                        "column": 13,
                        "line": 67
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1041,
                      1042
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 67
                      },
                      "start": {
                        "column": 17,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1037,
                    1042
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 67
                    },
                    "start": {
                      "column": 13,
                      "line": 67
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1044,
                      1045
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 67
                      },
                      "start": {
                        "column": 20,
                        "line": 67
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1048,
                      1049
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 67
                      },
                      "start": {
                        "column": 24,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1044,
                    1049
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 67
                    },
                    "start": {
                      "column": 20,
                      "line": 67
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                1033,
                1049
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 67
                },
                "start": {
                  "column": 9,
                  "line": 67
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
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
                    "column": 28,
                    "line": 67
                  },
                  "start": {
                    "column": 27,
                    "line": 67
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1055,
                  1056
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 67
                  },
                  "start": {
                    "column": 31,
                    "line": 67
                  }
                }
              },
              "range": [
                1051,
                1056
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 67
                },
                "start": {
                  "column": 27,
                  "line": 67
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1060,
                  1061
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 67
                  },
                  "start": {
                    "column": 36,
                    "line": 67
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                1058,
                1061
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 67
                },
                "start": {
                  "column": 34,
                  "line": 67
                }
              }
            },
            "range": [
              1028,
              1159
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 67
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    1173,
                    1174
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  1169,
                  1172
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 73
                  },
                  "start": {
                    "column": 4,
                    "line": 73
                  }
                }
              },
              "optional": false,
              "range": [
                1169,
                1175
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 73
                },
                "start": {
                  "column": 4,
                  "line": 73
                }
              }
            },
            "range": [
              1169,
              1176
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          }
        ],
        "range": [
          1022,
          1178
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 17,
            "line": 66
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
          1014,
          1018
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 66
          },
          "start": {
            "column": 9,
            "line": 66
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
            1019,
            1020
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 66
            },
            "start": {
              "column": 14,
              "line": 66
            }
          }
        }
      ],
      "range": [
        1005,
        1178
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 66
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
            "type": "WhileStatement",
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
                          1234,
                          1235
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
                      "init": null,
                      "range": [
                        1234,
                        1235
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
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1237,
                          1238
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 79
                          },
                          "start": {
                            "column": 15,
                            "line": 79
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        1237,
                        1238
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 79
                        },
                        "start": {
                          "column": 15,
                          "line": 79
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1230,
                    1239
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 79
                    },
                    "start": {
                      "column": 8,
                      "line": 79
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          1252,
                          1253
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 80
                          },
                          "start": {
                            "column": 12,
                            "line": 80
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1256,
                          1257
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 80
                          },
                          "start": {
                            "column": 16,
                            "line": 80
                          }
                        }
                      },
                      "range": [
                        1252,
                        1257
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 80
                        },
                        "start": {
                          "column": 12,
                          "line": 80
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1248,
                    1258
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 80
                    },
                    "start": {
                      "column": 8,
                      "line": 80
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1288,
                                  1289
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 81
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 81
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1292,
                                  1293
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 81
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 81
                                  }
                                }
                              },
                              "range": [
                                1288,
                                1293
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 81
                                },
                                "start": {
                                  "column": 29,
                                  "line": 81
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                1296,
                                1297
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 81
                                },
                                "start": {
                                  "column": 37,
                                  "line": 81
                                }
                              }
                            },
                            "range": [
                              1288,
                              1297
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 81
                              },
                              "start": {
                                "column": 29,
                                "line": 81
                              }
                            }
                          },
                          "range": [
                            1281,
                            1297
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 81
                            },
                            "start": {
                              "column": 22,
                              "line": 81
                            }
                          }
                        }
                      ],
                      "range": [
                        1279,
                        1299
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 81
                        },
                        "start": {
                          "column": 20,
                          "line": 81
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1268,
                      1299
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 81
                      },
                      "start": {
                        "column": 9,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    1267,
                    1301
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 81
                    },
                    "start": {
                      "column": 8,
                      "line": 81
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1317,
                            1318
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 82
                            },
                            "start": {
                              "column": 15,
                              "line": 82
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1321,
                            1322
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 82
                            },
                            "start": {
                              "column": 19,
                              "line": 82
                            }
                          }
                        },
                        "range": [
                          1317,
                          1322
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 82
                          },
                          "start": {
                            "column": 15,
                            "line": 82
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          1325,
                          1326
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 82
                          },
                          "start": {
                            "column": 23,
                            "line": 82
                          }
                        }
                      },
                      "range": [
                        1317,
                        1326
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 82
                        },
                        "start": {
                          "column": 15,
                          "line": 82
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1311,
                      1326
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 82
                      },
                      "start": {
                        "column": 9,
                        "line": 82
                      }
                    }
                  },
                  "range": [
                    1310,
                    1328
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                1220,
                1334
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 83
                },
                "start": {
                  "column": 20,
                  "line": 78
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1211,
                  1212
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 78
                  },
                  "start": {
                    "column": 11,
                    "line": 78
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1217,
                  1218
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 78
                  },
                  "start": {
                    "column": 17,
                    "line": 78
                  }
                }
              },
              "range": [
                1211,
                1218
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 78
                },
                "start": {
                  "column": 11,
                  "line": 78
                }
              }
            },
            "range": [
              1204,
              1334
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 83
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    1348,
                    1349
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 85
                    },
                    "start": {
                      "column": 8,
                      "line": 85
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  1344,
                  1347
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 85
                  },
                  "start": {
                    "column": 4,
                    "line": 85
                  }
                }
              },
              "optional": false,
              "range": [
                1344,
                1350
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 85
                }
              }
            },
            "range": [
              1344,
              1350
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "range": [
          1198,
          1352
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 86
          },
          "start": {
            "column": 17,
            "line": 77
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
          1190,
          1194
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 77
          },
          "start": {
            "column": 9,
            "line": 77
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
            1195,
            1196
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 77
            },
            "start": {
              "column": 14,
              "line": 77
            }
          }
        }
      ],
      "range": [
        1181,
        1352
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 77
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
            "type": "DoWhileStatement",
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
                          1394,
                          1395
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 90
                          },
                          "start": {
                            "column": 12,
                            "line": 90
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        1394,
                        1395
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 90
                        },
                        "start": {
                          "column": 12,
                          "line": 90
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1397,
                          1398
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 90
                          },
                          "start": {
                            "column": 15,
                            "line": 90
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        1397,
                        1398
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 90
                        },
                        "start": {
                          "column": 15,
                          "line": 90
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1390,
                    1399
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 90
                    },
                    "start": {
                      "column": 8,
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          1412,
                          1413
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
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1416,
                          1417
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 91
                          },
                          "start": {
                            "column": 16,
                            "line": 91
                          }
                        }
                      },
                      "range": [
                        1412,
                        1417
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 91
                        },
                        "start": {
                          "column": 12,
                          "line": 91
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1408,
                    1418
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 91
                    },
                    "start": {
                      "column": 8,
                      "line": 91
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1448,
                                  1449
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 92
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 92
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1452,
                                  1453
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 92
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 92
                                  }
                                }
                              },
                              "range": [
                                1448,
                                1453
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 92
                                },
                                "start": {
                                  "column": 29,
                                  "line": 92
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                1456,
                                1457
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 92
                                },
                                "start": {
                                  "column": 37,
                                  "line": 92
                                }
                              }
                            },
                            "range": [
                              1448,
                              1457
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 92
                              },
                              "start": {
                                "column": 29,
                                "line": 92
                              }
                            }
                          },
                          "range": [
                            1441,
                            1457
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 92
                            },
                            "start": {
                              "column": 22,
                              "line": 92
                            }
                          }
                        }
                      ],
                      "range": [
                        1439,
                        1459
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 92
                        },
                        "start": {
                          "column": 20,
                          "line": 92
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1428,
                      1459
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 92
                      },
                      "start": {
                        "column": 9,
                        "line": 92
                      }
                    }
                  },
                  "range": [
                    1427,
                    1461
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 92
                    },
                    "start": {
                      "column": 8,
                      "line": 92
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1477,
                            1478
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 93
                            },
                            "start": {
                              "column": 15,
                              "line": 93
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1481,
                            1482
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 93
                            },
                            "start": {
                              "column": 19,
                              "line": 93
                            }
                          }
                        },
                        "range": [
                          1477,
                          1482
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 93
                          },
                          "start": {
                            "column": 15,
                            "line": 93
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          1485,
                          1486
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 93
                          },
                          "start": {
                            "column": 23,
                            "line": 93
                          }
                        }
                      },
                      "range": [
                        1477,
                        1486
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 93
                        },
                        "start": {
                          "column": 15,
                          "line": 93
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1471,
                      1486
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 93
                      },
                      "start": {
                        "column": 9,
                        "line": 93
                      }
                    }
                  },
                  "range": [
                    1470,
                    1488
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 93
                    },
                    "start": {
                      "column": 8,
                      "line": 93
                    }
                  }
                }
              ],
              "range": [
                1380,
                1494
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 94
                },
                "start": {
                  "column": 7,
                  "line": 89
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1502,
                  1503
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 94
                  },
                  "start": {
                    "column": 13,
                    "line": 94
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1508,
                  1509
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 94
                  },
                  "start": {
                    "column": 19,
                    "line": 94
                  }
                }
              },
              "range": [
                1502,
                1509
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 94
                },
                "start": {
                  "column": 13,
                  "line": 94
                }
              }
            },
            "range": [
              1377,
              1511
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 89
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    1525,
                    1526
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  1521,
                  1524
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 96
                  },
                  "start": {
                    "column": 4,
                    "line": 96
                  }
                }
              },
              "optional": false,
              "range": [
                1521,
                1527
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 96
                },
                "start": {
                  "column": 4,
                  "line": 96
                }
              }
            },
            "range": [
              1521,
              1528
            ],
            "loc": {
              "end": {
                "column": 11,
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
          1371,
          1530
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 97
          },
          "start": {
            "column": 17,
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
        "name": "foo7",
        "optional": false,
        "range": [
          1363,
          1367
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 88
          },
          "start": {
            "column": 9,
            "line": 88
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
            1368,
            1369
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 88
            },
            "start": {
              "column": 14,
              "line": 88
            }
          }
        }
      ],
      "range": [
        1354,
        1530
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
            "type": "ForStatement",
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
                          1598,
                          1599
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 102
                          },
                          "start": {
                            "column": 12,
                            "line": 102
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1602,
                          1603
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 102
                          },
                          "start": {
                            "column": 16,
                            "line": 102
                          }
                        }
                      },
                      "range": [
                        1598,
                        1603
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 102
                        },
                        "start": {
                          "column": 12,
                          "line": 102
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1594,
                    1604
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          1617,
                          1618
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
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1621,
                          1622
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 103
                          },
                          "start": {
                            "column": 16,
                            "line": 103
                          }
                        }
                      },
                      "range": [
                        1617,
                        1622
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 103
                        },
                        "start": {
                          "column": 12,
                          "line": 103
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1613,
                    1623
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 103
                    },
                    "start": {
                      "column": 8,
                      "line": 103
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1653,
                                  1654
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 104
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 104
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1657,
                                  1658
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 104
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 104
                                  }
                                }
                              },
                              "range": [
                                1653,
                                1658
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 104
                                },
                                "start": {
                                  "column": 29,
                                  "line": 104
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                1661,
                                1662
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 104
                                },
                                "start": {
                                  "column": 37,
                                  "line": 104
                                }
                              }
                            },
                            "range": [
                              1653,
                              1662
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 104
                              },
                              "start": {
                                "column": 29,
                                "line": 104
                              }
                            }
                          },
                          "range": [
                            1646,
                            1662
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 104
                            },
                            "start": {
                              "column": 22,
                              "line": 104
                            }
                          }
                        }
                      ],
                      "range": [
                        1644,
                        1664
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 104
                        },
                        "start": {
                          "column": 20,
                          "line": 104
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1633,
                      1664
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 104
                      },
                      "start": {
                        "column": 9,
                        "line": 104
                      }
                    }
                  },
                  "range": [
                    1632,
                    1666
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 104
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
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1682,
                            1683
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 105
                            },
                            "start": {
                              "column": 15,
                              "line": 105
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1686,
                            1687
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 105
                            },
                            "start": {
                              "column": 19,
                              "line": 105
                            }
                          }
                        },
                        "range": [
                          1682,
                          1687
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 105
                          },
                          "start": {
                            "column": 15,
                            "line": 105
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          1690,
                          1691
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 105
                          },
                          "start": {
                            "column": 23,
                            "line": 105
                          }
                        }
                      },
                      "range": [
                        1682,
                        1691
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 105
                        },
                        "start": {
                          "column": 15,
                          "line": 105
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1676,
                      1691
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 105
                      },
                      "start": {
                        "column": 9,
                        "line": 105
                      }
                    }
                  },
                  "range": [
                    1675,
                    1693
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 105
                    },
                    "start": {
                      "column": 8,
                      "line": 105
                    }
                  }
                }
              ],
              "range": [
                1584,
                1699
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 106
                },
                "start": {
                  "column": 32,
                  "line": 101
                }
              }
            },
            "init": {
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
                      1565,
                      1566
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 101
                      },
                      "start": {
                        "column": 13,
                        "line": 101
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1569,
                      1570
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 101
                      },
                      "start": {
                        "column": 17,
                        "line": 101
                      }
                    }
                  },
                  "range": [
                    1565,
                    1570
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 101
                    },
                    "start": {
                      "column": 13,
                      "line": 101
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                1561,
                1570
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 101
                },
                "start": {
                  "column": 9,
                  "line": 101
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  1572,
                  1573
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 101
                  },
                  "start": {
                    "column": 20,
                    "line": 101
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1576,
                  1577
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 101
                  },
                  "start": {
                    "column": 24,
                    "line": 101
                  }
                }
              },
              "range": [
                1572,
                1577
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 101
                },
                "start": {
                  "column": 20,
                  "line": 101
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  1581,
                  1582
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 101
                  },
                  "start": {
                    "column": 29,
                    "line": 101
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                1579,
                1582
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 101
                },
                "start": {
                  "column": 27,
                  "line": 101
                }
              }
            },
            "range": [
              1556,
              1699
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 106
              },
              "start": {
                "column": 4,
                "line": 101
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    1713,
                    1714
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 108
                    },
                    "start": {
                      "column": 8,
                      "line": 108
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  1709,
                  1712
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 108
                  },
                  "start": {
                    "column": 4,
                    "line": 108
                  }
                }
              },
              "optional": false,
              "range": [
                1709,
                1715
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 108
                },
                "start": {
                  "column": 4,
                  "line": 108
                }
              }
            },
            "range": [
              1709,
              1716
            ],
            "loc": {
              "end": {
                "column": 11,
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
          1550,
          1718
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 109
          },
          "start": {
            "column": 17,
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
        "name": "foo8",
        "optional": false,
        "range": [
          1542,
          1546
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 100
          },
          "start": {
            "column": 9,
            "line": 100
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
            1547,
            1548
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 100
            },
            "start": {
              "column": 14,
              "line": 100
            }
          }
        }
      ],
      "range": [
        1533,
        1718
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 109
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
            "type": "ForOfStatement",
            "await": false,
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          1789,
                          1790
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 113
                          },
                          "start": {
                            "column": 12,
                            "line": 113
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1793,
                          1794
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 113
                          },
                          "start": {
                            "column": 16,
                            "line": 113
                          }
                        }
                      },
                      "range": [
                        1789,
                        1794
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 113
                        },
                        "start": {
                          "column": 12,
                          "line": 113
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1785,
                    1795
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 113
                    },
                    "start": {
                      "column": 8,
                      "line": 113
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
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
                                  "column": 30,
                                  "line": 114
                                },
                                "start": {
                                  "column": 29,
                                  "line": 114
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                1829,
                                1830
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 114
                                },
                                "start": {
                                  "column": 33,
                                  "line": 114
                                }
                              }
                            },
                            "range": [
                              1825,
                              1830
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 114
                              },
                              "start": {
                                "column": 29,
                                "line": 114
                              }
                            }
                          },
                          "range": [
                            1818,
                            1830
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 114
                            },
                            "start": {
                              "column": 22,
                              "line": 114
                            }
                          }
                        }
                      ],
                      "range": [
                        1816,
                        1832
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 114
                        },
                        "start": {
                          "column": 20,
                          "line": 114
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1805,
                      1832
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 114
                      },
                      "start": {
                        "column": 9,
                        "line": 114
                      }
                    }
                  },
                  "range": [
                    1804,
                    1834
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 114
                    },
                    "start": {
                      "column": 8,
                      "line": 114
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1850,
                          1851
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 115
                          },
                          "start": {
                            "column": 15,
                            "line": 115
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          1854,
                          1855
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 115
                          },
                          "start": {
                            "column": 19,
                            "line": 115
                          }
                        }
                      },
                      "range": [
                        1850,
                        1855
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 115
                        },
                        "start": {
                          "column": 15,
                          "line": 115
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1844,
                      1855
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 115
                      },
                      "start": {
                        "column": 9,
                        "line": 115
                      }
                    }
                  },
                  "range": [
                    1843,
                    1857
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
                }
              ],
              "range": [
                1775,
                1863
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 116
                },
                "start": {
                  "column": 24,
                  "line": 112
                }
              }
            },
            "left": {
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
                      1766,
                      1767
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 112
                      },
                      "start": {
                        "column": 15,
                        "line": 112
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    1766,
                    1767
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 112
                    },
                    "start": {
                      "column": 15,
                      "line": 112
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                1760,
                1767
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 112
                },
                "start": {
                  "column": 9,
                  "line": 112
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                1771,
                1773
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 112
                },
                "start": {
                  "column": 20,
                  "line": 112
                }
              }
            },
            "range": [
              1755,
              1863
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 112
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    1873,
                    1874
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  1869,
                  1872
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 118
                  },
                  "start": {
                    "column": 4,
                    "line": 118
                  }
                }
              },
              "optional": false,
              "range": [
                1869,
                1875
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 118
                },
                "start": {
                  "column": 4,
                  "line": 118
                }
              }
            },
            "range": [
              1869,
              1876
            ],
            "loc": {
              "end": {
                "column": 11,
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
          1749,
          1878
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 119
          },
          "start": {
            "column": 19,
            "line": 111
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_c",
        "optional": false,
        "range": [
          1739,
          1745
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 111
          },
          "start": {
            "column": 9,
            "line": 111
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
            1746,
            1747
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 111
            },
            "start": {
              "column": 16,
              "line": 111
            }
          }
        }
      ],
      "range": [
        1730,
        1878
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 111
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
            "type": "ForInStatement",
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          1941,
                          1942
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 123
                          },
                          "start": {
                            "column": 12,
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
                          1945,
                          1946
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 123
                          },
                          "start": {
                            "column": 16,
                            "line": 123
                          }
                        }
                      },
                      "range": [
                        1941,
                        1946
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 123
                        },
                        "start": {
                          "column": 12,
                          "line": 123
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1937,
                    1947
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 123
                    },
                    "start": {
                      "column": 8,
                      "line": 123
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1977,
                                1978
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 124
                                },
                                "start": {
                                  "column": 29,
                                  "line": 124
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                1981,
                                1982
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 124
                                },
                                "start": {
                                  "column": 33,
                                  "line": 124
                                }
                              }
                            },
                            "range": [
                              1977,
                              1982
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 124
                              },
                              "start": {
                                "column": 29,
                                "line": 124
                              }
                            }
                          },
                          "range": [
                            1970,
                            1982
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 124
                            },
                            "start": {
                              "column": 22,
                              "line": 124
                            }
                          }
                        }
                      ],
                      "range": [
                        1968,
                        1984
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 124
                        },
                        "start": {
                          "column": 20,
                          "line": 124
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1957,
                      1984
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 124
                      },
                      "start": {
                        "column": 9,
                        "line": 124
                      }
                    }
                  },
                  "range": [
                    1956,
                    1986
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 124
                    },
                    "start": {
                      "column": 8,
                      "line": 124
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
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
                            "column": 16,
                            "line": 125
                          },
                          "start": {
                            "column": 15,
                            "line": 125
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          2006,
                          2007
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 125
                          },
                          "start": {
                            "column": 19,
                            "line": 125
                          }
                        }
                      },
                      "range": [
                        2002,
                        2007
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 125
                        },
                        "start": {
                          "column": 15,
                          "line": 125
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1996,
                      2007
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 125
                      },
                      "start": {
                        "column": 9,
                        "line": 125
                      }
                    }
                  },
                  "range": [
                    1995,
                    2009
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
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
                1927,
                2015
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 126
                },
                "start": {
                  "column": 24,
                  "line": 122
                }
              }
            },
            "left": {
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
                      1918,
                      1919
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 122
                      },
                      "start": {
                        "column": 15,
                        "line": 122
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    1918,
                    1919
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 122
                    },
                    "start": {
                      "column": 15,
                      "line": 122
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                1912,
                1919
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 122
                },
                "start": {
                  "column": 9,
                  "line": 122
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                1923,
                1925
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 122
                },
                "start": {
                  "column": 20,
                  "line": 122
                }
              }
            },
            "range": [
              1907,
              2015
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 126
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    2025,
                    2026
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 128
                    },
                    "start": {
                      "column": 8,
                      "line": 128
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  2021,
                  2024
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 128
                  },
                  "start": {
                    "column": 4,
                    "line": 128
                  }
                }
              },
              "optional": false,
              "range": [
                2021,
                2027
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 128
                },
                "start": {
                  "column": 4,
                  "line": 128
                }
              }
            },
            "range": [
              2021,
              2028
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 128
              },
              "start": {
                "column": 4,
                "line": 128
              }
            }
          }
        ],
        "range": [
          1901,
          2030
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 129
          },
          "start": {
            "column": 21,
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
        "name": "foo0_1_c",
        "optional": false,
        "range": [
          1889,
          1897
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 121
          },
          "start": {
            "column": 9,
            "line": 121
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
            1898,
            1899
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 121
            },
            "start": {
              "column": 18,
              "line": 121
            }
          }
        }
      ],
      "range": [
        1880,
        2030
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 129
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
            "type": "ForStatement",
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          2097,
                          2098
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 133
                          },
                          "start": {
                            "column": 12,
                            "line": 133
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2101,
                          2102
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 133
                          },
                          "start": {
                            "column": 16,
                            "line": 133
                          }
                        }
                      },
                      "range": [
                        2097,
                        2102
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 133
                        },
                        "start": {
                          "column": 12,
                          "line": 133
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2093,
                    2103
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 133
                    },
                    "start": {
                      "column": 8,
                      "line": 133
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2133,
                                2134
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 134
                                },
                                "start": {
                                  "column": 29,
                                  "line": 134
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                2137,
                                2138
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 134
                                },
                                "start": {
                                  "column": 33,
                                  "line": 134
                                }
                              }
                            },
                            "range": [
                              2133,
                              2138
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 134
                              },
                              "start": {
                                "column": 29,
                                "line": 134
                              }
                            }
                          },
                          "range": [
                            2126,
                            2138
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 134
                            },
                            "start": {
                              "column": 22,
                              "line": 134
                            }
                          }
                        }
                      ],
                      "range": [
                        2124,
                        2140
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 134
                        },
                        "start": {
                          "column": 20,
                          "line": 134
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2113,
                      2140
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 134
                      },
                      "start": {
                        "column": 9,
                        "line": 134
                      }
                    }
                  },
                  "range": [
                    2112,
                    2142
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 134
                    },
                    "start": {
                      "column": 8,
                      "line": 134
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2158,
                          2159
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 135
                          },
                          "start": {
                            "column": 15,
                            "line": 135
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          2162,
                          2163
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 135
                          },
                          "start": {
                            "column": 19,
                            "line": 135
                          }
                        }
                      },
                      "range": [
                        2158,
                        2163
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 135
                        },
                        "start": {
                          "column": 15,
                          "line": 135
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2152,
                      2163
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 135
                      },
                      "start": {
                        "column": 9,
                        "line": 135
                      }
                    }
                  },
                  "range": [
                    2151,
                    2165
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 135
                    },
                    "start": {
                      "column": 8,
                      "line": 135
                    }
                  }
                }
              ],
              "range": [
                2083,
                2171
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 136
                },
                "start": {
                  "column": 30,
                  "line": 132
                }
              }
            },
            "init": {
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
                      2068,
                      2069
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 132
                      },
                      "start": {
                        "column": 15,
                        "line": 132
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      2072,
                      2073
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 132
                      },
                      "start": {
                        "column": 19,
                        "line": 132
                      }
                    }
                  },
                  "range": [
                    2068,
                    2073
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 132
                    },
                    "start": {
                      "column": 15,
                      "line": 132
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2062,
                2073
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 132
                },
                "start": {
                  "column": 9,
                  "line": 132
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2075,
                  2076
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 132
                  },
                  "start": {
                    "column": 22,
                    "line": 132
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2079,
                  2080
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 132
                  },
                  "start": {
                    "column": 26,
                    "line": 132
                  }
                }
              },
              "range": [
                2075,
                2080
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 132
                },
                "start": {
                  "column": 22,
                  "line": 132
                }
              }
            },
            "update": null,
            "range": [
              2057,
              2171
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 136
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    2181,
                    2182
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 138
                    },
                    "start": {
                      "column": 8,
                      "line": 138
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  2177,
                  2180
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 138
                  },
                  "start": {
                    "column": 4,
                    "line": 138
                  }
                }
              },
              "optional": false,
              "range": [
                2177,
                2183
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 138
                },
                "start": {
                  "column": 4,
                  "line": 138
                }
              }
            },
            "range": [
              2177,
              2184
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 138
              },
              "start": {
                "column": 4,
                "line": 138
              }
            }
          }
        ],
        "range": [
          2051,
          2186
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 139
          },
          "start": {
            "column": 19,
            "line": 131
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1_c",
        "optional": false,
        "range": [
          2041,
          2047
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 131
          },
          "start": {
            "column": 9,
            "line": 131
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
            2048,
            2049
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 131
            },
            "start": {
              "column": 16,
              "line": 131
            }
          }
        }
      ],
      "range": [
        2032,
        2186
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 139
        },
        "start": {
          "column": 0,
          "line": 131
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
            "type": "WhileStatement",
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
                          2245,
                          2246
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 143
                          },
                          "start": {
                            "column": 14,
                            "line": 143
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2249,
                          2250
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 143
                          },
                          "start": {
                            "column": 18,
                            "line": 143
                          }
                        }
                      },
                      "range": [
                        2245,
                        2250
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 143
                        },
                        "start": {
                          "column": 14,
                          "line": 143
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    2239,
                    2251
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 143
                    },
                    "start": {
                      "column": 8,
                      "line": 143
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          2264,
                          2265
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 144
                          },
                          "start": {
                            "column": 12,
                            "line": 144
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2268,
                          2269
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 144
                          },
                          "start": {
                            "column": 16,
                            "line": 144
                          }
                        }
                      },
                      "range": [
                        2264,
                        2269
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 144
                        },
                        "start": {
                          "column": 12,
                          "line": 144
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2260,
                    2270
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 144
                    },
                    "start": {
                      "column": 8,
                      "line": 144
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2300,
                                2301
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 145
                                },
                                "start": {
                                  "column": 29,
                                  "line": 145
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                2304,
                                2305
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 145
                                },
                                "start": {
                                  "column": 33,
                                  "line": 145
                                }
                              }
                            },
                            "range": [
                              2300,
                              2305
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 145
                              },
                              "start": {
                                "column": 29,
                                "line": 145
                              }
                            }
                          },
                          "range": [
                            2293,
                            2305
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 145
                            },
                            "start": {
                              "column": 22,
                              "line": 145
                            }
                          }
                        }
                      ],
                      "range": [
                        2291,
                        2307
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 145
                        },
                        "start": {
                          "column": 20,
                          "line": 145
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2280,
                      2307
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 145
                      },
                      "start": {
                        "column": 9,
                        "line": 145
                      }
                    }
                  },
                  "range": [
                    2279,
                    2309
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 145
                    },
                    "start": {
                      "column": 8,
                      "line": 145
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2325,
                          2326
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 146
                          },
                          "start": {
                            "column": 15,
                            "line": 146
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          2329,
                          2330
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 146
                          },
                          "start": {
                            "column": 19,
                            "line": 146
                          }
                        }
                      },
                      "range": [
                        2325,
                        2330
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 146
                        },
                        "start": {
                          "column": 15,
                          "line": 146
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2319,
                      2330
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 146
                      },
                      "start": {
                        "column": 9,
                        "line": 146
                      }
                    }
                  },
                  "range": [
                    2318,
                    2332
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 146
                    },
                    "start": {
                      "column": 8,
                      "line": 146
                    }
                  }
                }
              ],
              "range": [
                2229,
                2338
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 147
                },
                "start": {
                  "column": 20,
                  "line": 142
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2220,
                  2221
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 142
                  },
                  "start": {
                    "column": 11,
                    "line": 142
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2226,
                  2227
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 142
                  },
                  "start": {
                    "column": 17,
                    "line": 142
                  }
                }
              },
              "range": [
                2220,
                2227
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 142
                },
                "start": {
                  "column": 11,
                  "line": 142
                }
              }
            },
            "range": [
              2213,
              2338
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 147
              },
              "start": {
                "column": 4,
                "line": 142
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    2352,
                    2353
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 149
                    },
                    "start": {
                      "column": 8,
                      "line": 149
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  2348,
                  2351
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 149
                  },
                  "start": {
                    "column": 4,
                    "line": 149
                  }
                }
              },
              "optional": false,
              "range": [
                2348,
                2354
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 149
                },
                "start": {
                  "column": 4,
                  "line": 149
                }
              }
            },
            "range": [
              2348,
              2355
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 149
              },
              "start": {
                "column": 4,
                "line": 149
              }
            }
          }
        ],
        "range": [
          2207,
          2357
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 150
          },
          "start": {
            "column": 19,
            "line": 141
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2_c",
        "optional": false,
        "range": [
          2197,
          2203
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 141
          },
          "start": {
            "column": 9,
            "line": 141
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
            2204,
            2205
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 141
            },
            "start": {
              "column": 16,
              "line": 141
            }
          }
        }
      ],
      "range": [
        2188,
        2357
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 150
        },
        "start": {
          "column": 0,
          "line": 141
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
            "type": "DoWhileStatement",
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
                          2403,
                          2404
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 154
                          },
                          "start": {
                            "column": 14,
                            "line": 154
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2407,
                          2408
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 154
                          },
                          "start": {
                            "column": 18,
                            "line": 154
                          }
                        }
                      },
                      "range": [
                        2403,
                        2408
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 154
                        },
                        "start": {
                          "column": 14,
                          "line": 154
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    2397,
                    2409
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 154
                    },
                    "start": {
                      "column": 8,
                      "line": 154
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          2422,
                          2423
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 155
                          },
                          "start": {
                            "column": 12,
                            "line": 155
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        2422,
                        2423
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 155
                        },
                        "start": {
                          "column": 12,
                          "line": 155
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2418,
                    2424
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 155
                    },
                    "start": {
                      "column": 8,
                      "line": 155
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2454,
                                2455
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 156
                                },
                                "start": {
                                  "column": 29,
                                  "line": 156
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                2458,
                                2459
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 156
                                },
                                "start": {
                                  "column": 33,
                                  "line": 156
                                }
                              }
                            },
                            "range": [
                              2454,
                              2459
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 156
                              },
                              "start": {
                                "column": 29,
                                "line": 156
                              }
                            }
                          },
                          "range": [
                            2447,
                            2459
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 156
                            },
                            "start": {
                              "column": 22,
                              "line": 156
                            }
                          }
                        }
                      ],
                      "range": [
                        2445,
                        2461
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 156
                        },
                        "start": {
                          "column": 20,
                          "line": 156
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2434,
                      2461
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 156
                      },
                      "start": {
                        "column": 9,
                        "line": 156
                      }
                    }
                  },
                  "range": [
                    2433,
                    2463
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 156
                    },
                    "start": {
                      "column": 8,
                      "line": 156
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2479,
                          2480
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 157
                          },
                          "start": {
                            "column": 15,
                            "line": 157
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          2483,
                          2484
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 157
                          },
                          "start": {
                            "column": 19,
                            "line": 157
                          }
                        }
                      },
                      "range": [
                        2479,
                        2484
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 157
                        },
                        "start": {
                          "column": 15,
                          "line": 157
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2473,
                      2484
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 157
                      },
                      "start": {
                        "column": 9,
                        "line": 157
                      }
                    }
                  },
                  "range": [
                    2472,
                    2486
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 157
                    },
                    "start": {
                      "column": 8,
                      "line": 157
                    }
                  }
                }
              ],
              "range": [
                2387,
                2492
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 158
                },
                "start": {
                  "column": 7,
                  "line": 153
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2500,
                  2501
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
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2506,
                  2507
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 158
                  },
                  "start": {
                    "column": 19,
                    "line": 158
                  }
                }
              },
              "range": [
                2500,
                2507
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 158
                },
                "start": {
                  "column": 13,
                  "line": 158
                }
              }
            },
            "range": [
              2384,
              2509
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 158
              },
              "start": {
                "column": 4,
                "line": 153
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    2523,
                    2524
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 160
                    },
                    "start": {
                      "column": 8,
                      "line": 160
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  2519,
                  2522
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 160
                  },
                  "start": {
                    "column": 4,
                    "line": 160
                  }
                }
              },
              "optional": false,
              "range": [
                2519,
                2525
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 160
                },
                "start": {
                  "column": 4,
                  "line": 160
                }
              }
            },
            "range": [
              2519,
              2526
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 160
              },
              "start": {
                "column": 4,
                "line": 160
              }
            }
          }
        ],
        "range": [
          2378,
          2528
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 161
          },
          "start": {
            "column": 19,
            "line": 152
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3_c",
        "optional": false,
        "range": [
          2368,
          2374
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 152
          },
          "start": {
            "column": 9,
            "line": 152
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
            2375,
            2376
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 152
            },
            "start": {
              "column": 16,
              "line": 152
            }
          }
        }
      ],
      "range": [
        2359,
        2528
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 161
        },
        "start": {
          "column": 0,
          "line": 152
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
            "type": "ForStatement",
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          2595,
                          2596
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 165
                          },
                          "start": {
                            "column": 12,
                            "line": 165
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          2599,
                          2600
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 165
                          },
                          "start": {
                            "column": 16,
                            "line": 165
                          }
                        }
                      },
                      "range": [
                        2595,
                        2600
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 165
                        },
                        "start": {
                          "column": 12,
                          "line": 165
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2591,
                    2601
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 165
                    },
                    "start": {
                      "column": 8,
                      "line": 165
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
                        "range": [
                          2616,
                          2617
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
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2620,
                          2621
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 166
                          },
                          "start": {
                            "column": 18,
                            "line": 166
                          }
                        }
                      },
                      "range": [
                        2616,
                        2621
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 166
                        },
                        "start": {
                          "column": 14,
                          "line": 166
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    2610,
                    2622
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 166
                    },
                    "start": {
                      "column": 8,
                      "line": 166
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2652,
                                2653
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 167
                                },
                                "start": {
                                  "column": 29,
                                  "line": 167
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                2656,
                                2657
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 167
                                },
                                "start": {
                                  "column": 33,
                                  "line": 167
                                }
                              }
                            },
                            "range": [
                              2652,
                              2657
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 167
                              },
                              "start": {
                                "column": 29,
                                "line": 167
                              }
                            }
                          },
                          "range": [
                            2645,
                            2657
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 167
                            },
                            "start": {
                              "column": 22,
                              "line": 167
                            }
                          }
                        }
                      ],
                      "range": [
                        2643,
                        2659
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 167
                        },
                        "start": {
                          "column": 20,
                          "line": 167
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2632,
                      2659
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 167
                      },
                      "start": {
                        "column": 9,
                        "line": 167
                      }
                    }
                  },
                  "range": [
                    2631,
                    2661
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 167
                    },
                    "start": {
                      "column": 8,
                      "line": 167
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2677,
                          2678
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 168
                          },
                          "start": {
                            "column": 15,
                            "line": 168
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          2681,
                          2682
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 168
                          },
                          "start": {
                            "column": 19,
                            "line": 168
                          }
                        }
                      },
                      "range": [
                        2677,
                        2682
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 168
                        },
                        "start": {
                          "column": 15,
                          "line": 168
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2671,
                      2682
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 168
                      },
                      "start": {
                        "column": 9,
                        "line": 168
                      }
                    }
                  },
                  "range": [
                    2670,
                    2684
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 168
                    },
                    "start": {
                      "column": 8,
                      "line": 168
                    }
                  }
                }
              ],
              "range": [
                2581,
                2690
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 169
                },
                "start": {
                  "column": 30,
                  "line": 164
                }
              }
            },
            "init": {
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
                      2566,
                      2567
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 164
                      },
                      "start": {
                        "column": 15,
                        "line": 164
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      2570,
                      2571
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 164
                      },
                      "start": {
                        "column": 19,
                        "line": 164
                      }
                    }
                  },
                  "range": [
                    2566,
                    2571
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 164
                    },
                    "start": {
                      "column": 15,
                      "line": 164
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2560,
                2571
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 164
                },
                "start": {
                  "column": 9,
                  "line": 164
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
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
                    "column": 23,
                    "line": 164
                  },
                  "start": {
                    "column": 22,
                    "line": 164
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2577,
                  2578
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 164
                  },
                  "start": {
                    "column": 26,
                    "line": 164
                  }
                }
              },
              "range": [
                2573,
                2578
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 164
                },
                "start": {
                  "column": 22,
                  "line": 164
                }
              }
            },
            "update": null,
            "range": [
              2555,
              2690
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 169
              },
              "start": {
                "column": 4,
                "line": 164
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    2704,
                    2705
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 171
                    },
                    "start": {
                      "column": 8,
                      "line": 171
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  2700,
                  2703
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 171
                  },
                  "start": {
                    "column": 4,
                    "line": 171
                  }
                }
              },
              "optional": false,
              "range": [
                2700,
                2706
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 171
                },
                "start": {
                  "column": 4,
                  "line": 171
                }
              }
            },
            "range": [
              2700,
              2707
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 171
              },
              "start": {
                "column": 4,
                "line": 171
              }
            }
          }
        ],
        "range": [
          2549,
          2709
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 172
          },
          "start": {
            "column": 19,
            "line": 163
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4_c",
        "optional": false,
        "range": [
          2539,
          2545
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 163
          },
          "start": {
            "column": 9,
            "line": 163
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
            2546,
            2547
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 163
            },
            "start": {
              "column": 16,
              "line": 163
            }
          }
        }
      ],
      "range": [
        2530,
        2709
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 172
        },
        "start": {
          "column": 0,
          "line": 163
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
            "type": "ForStatement",
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          2783,
                          2784
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 176
                          },
                          "start": {
                            "column": 12,
                            "line": 176
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2787,
                          2788
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 176
                          },
                          "start": {
                            "column": 16,
                            "line": 176
                          }
                        }
                      },
                      "range": [
                        2783,
                        2788
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 176
                        },
                        "start": {
                          "column": 12,
                          "line": 176
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2779,
                    2789
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 176
                    },
                    "start": {
                      "column": 8,
                      "line": 176
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  2819,
                                  2820
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 177
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 177
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  2823,
                                  2824
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 177
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 177
                                  }
                                }
                              },
                              "range": [
                                2819,
                                2824
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 177
                                },
                                "start": {
                                  "column": 29,
                                  "line": 177
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                2827,
                                2828
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 177
                                },
                                "start": {
                                  "column": 37,
                                  "line": 177
                                }
                              }
                            },
                            "range": [
                              2819,
                              2828
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 177
                              },
                              "start": {
                                "column": 29,
                                "line": 177
                              }
                            }
                          },
                          "range": [
                            2812,
                            2828
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 177
                            },
                            "start": {
                              "column": 22,
                              "line": 177
                            }
                          }
                        }
                      ],
                      "range": [
                        2810,
                        2830
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 177
                        },
                        "start": {
                          "column": 20,
                          "line": 177
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2799,
                      2830
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 177
                      },
                      "start": {
                        "column": 9,
                        "line": 177
                      }
                    }
                  },
                  "range": [
                    2798,
                    2832
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 177
                    },
                    "start": {
                      "column": 8,
                      "line": 177
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2848,
                            2849
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 178
                            },
                            "start": {
                              "column": 15,
                              "line": 178
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            2852,
                            2853
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 178
                            },
                            "start": {
                              "column": 19,
                              "line": 178
                            }
                          }
                        },
                        "range": [
                          2848,
                          2853
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 178
                          },
                          "start": {
                            "column": 15,
                            "line": 178
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          2856,
                          2857
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 178
                          },
                          "start": {
                            "column": 23,
                            "line": 178
                          }
                        }
                      },
                      "range": [
                        2848,
                        2857
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 178
                        },
                        "start": {
                          "column": 15,
                          "line": 178
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2842,
                      2857
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 178
                      },
                      "start": {
                        "column": 9,
                        "line": 178
                      }
                    }
                  },
                  "range": [
                    2841,
                    2859
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 178
                    },
                    "start": {
                      "column": 8,
                      "line": 178
                    }
                  }
                }
              ],
              "range": [
                2769,
                2865
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 179
                },
                "start": {
                  "column": 37,
                  "line": 175
                }
              }
            },
            "init": {
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
                      2747,
                      2748
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 175
                      },
                      "start": {
                        "column": 15,
                        "line": 175
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      2751,
                      2752
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 175
                      },
                      "start": {
                        "column": 19,
                        "line": 175
                      }
                    }
                  },
                  "range": [
                    2747,
                    2752
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 175
                    },
                    "start": {
                      "column": 15,
                      "line": 175
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      2754,
                      2755
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 175
                      },
                      "start": {
                        "column": 22,
                        "line": 175
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2758,
                      2759
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 175
                      },
                      "start": {
                        "column": 26,
                        "line": 175
                      }
                    }
                  },
                  "range": [
                    2754,
                    2759
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 175
                    },
                    "start": {
                      "column": 22,
                      "line": 175
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2741,
                2759
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 175
                },
                "start": {
                  "column": 9,
                  "line": 175
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2761,
                  2762
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 175
                  },
                  "start": {
                    "column": 29,
                    "line": 175
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2765,
                  2766
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 175
                  },
                  "start": {
                    "column": 33,
                    "line": 175
                  }
                }
              },
              "range": [
                2761,
                2766
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 175
                },
                "start": {
                  "column": 29,
                  "line": 175
                }
              }
            },
            "update": null,
            "range": [
              2736,
              2865
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 179
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    2879,
                    2880
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 181
                    },
                    "start": {
                      "column": 8,
                      "line": 181
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  2875,
                  2878
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 181
                  },
                  "start": {
                    "column": 4,
                    "line": 181
                  }
                }
              },
              "optional": false,
              "range": [
                2875,
                2881
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 181
                },
                "start": {
                  "column": 4,
                  "line": 181
                }
              }
            },
            "range": [
              2875,
              2882
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 181
              },
              "start": {
                "column": 4,
                "line": 181
              }
            }
          }
        ],
        "range": [
          2730,
          2884
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 182
          },
          "start": {
            "column": 19,
            "line": 174
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5_c",
        "optional": false,
        "range": [
          2720,
          2726
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 174
          },
          "start": {
            "column": 9,
            "line": 174
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
            2727,
            2728
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 174
            },
            "start": {
              "column": 16,
              "line": 174
            }
          }
        }
      ],
      "range": [
        2711,
        2884
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 182
        },
        "start": {
          "column": 0,
          "line": 174
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
            "type": "WhileStatement",
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
                          2944,
                          2945
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 187
                          },
                          "start": {
                            "column": 14,
                            "line": 187
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2948,
                          2949
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 187
                          },
                          "start": {
                            "column": 18,
                            "line": 187
                          }
                        }
                      },
                      "range": [
                        2944,
                        2949
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 187
                        },
                        "start": {
                          "column": 14,
                          "line": 187
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          2951,
                          2952
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 187
                          },
                          "start": {
                            "column": 21,
                            "line": 187
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2955,
                          2956
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 187
                          },
                          "start": {
                            "column": 25,
                            "line": 187
                          }
                        }
                      },
                      "range": [
                        2951,
                        2956
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 187
                        },
                        "start": {
                          "column": 21,
                          "line": 187
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    2938,
                    2957
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 187
                    },
                    "start": {
                      "column": 8,
                      "line": 187
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          2970,
                          2971
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 188
                          },
                          "start": {
                            "column": 12,
                            "line": 188
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2974,
                          2975
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 188
                          },
                          "start": {
                            "column": 16,
                            "line": 188
                          }
                        }
                      },
                      "range": [
                        2970,
                        2975
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 188
                        },
                        "start": {
                          "column": 12,
                          "line": 188
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2966,
                    2976
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 188
                    },
                    "start": {
                      "column": 8,
                      "line": 188
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  3006,
                                  3007
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 189
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 189
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  3010,
                                  3011
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 189
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 189
                                  }
                                }
                              },
                              "range": [
                                3006,
                                3011
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 189
                                },
                                "start": {
                                  "column": 29,
                                  "line": 189
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                3014,
                                3015
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 189
                                },
                                "start": {
                                  "column": 37,
                                  "line": 189
                                }
                              }
                            },
                            "range": [
                              3006,
                              3015
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 189
                              },
                              "start": {
                                "column": 29,
                                "line": 189
                              }
                            }
                          },
                          "range": [
                            2999,
                            3015
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 189
                            },
                            "start": {
                              "column": 22,
                              "line": 189
                            }
                          }
                        }
                      ],
                      "range": [
                        2997,
                        3017
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 189
                        },
                        "start": {
                          "column": 20,
                          "line": 189
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2986,
                      3017
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 189
                      },
                      "start": {
                        "column": 9,
                        "line": 189
                      }
                    }
                  },
                  "range": [
                    2985,
                    3019
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 189
                    },
                    "start": {
                      "column": 8,
                      "line": 189
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3035,
                            3036
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 190
                            },
                            "start": {
                              "column": 15,
                              "line": 190
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            3039,
                            3040
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 190
                            },
                            "start": {
                              "column": 19,
                              "line": 190
                            }
                          }
                        },
                        "range": [
                          3035,
                          3040
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 190
                          },
                          "start": {
                            "column": 15,
                            "line": 190
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          3043,
                          3044
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 190
                          },
                          "start": {
                            "column": 23,
                            "line": 190
                          }
                        }
                      },
                      "range": [
                        3035,
                        3044
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 190
                        },
                        "start": {
                          "column": 15,
                          "line": 190
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3029,
                      3044
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 190
                      },
                      "start": {
                        "column": 9,
                        "line": 190
                      }
                    }
                  },
                  "range": [
                    3028,
                    3046
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 190
                    },
                    "start": {
                      "column": 8,
                      "line": 190
                    }
                  }
                }
              ],
              "range": [
                2928,
                3052
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 191
                },
                "start": {
                  "column": 20,
                  "line": 186
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2919,
                  2920
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 186
                  },
                  "start": {
                    "column": 11,
                    "line": 186
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2925,
                  2926
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 186
                  },
                  "start": {
                    "column": 17,
                    "line": 186
                  }
                }
              },
              "range": [
                2919,
                2926
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 186
                },
                "start": {
                  "column": 11,
                  "line": 186
                }
              }
            },
            "range": [
              2912,
              3052
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 191
              },
              "start": {
                "column": 4,
                "line": 186
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    3066,
                    3067
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 193
                    },
                    "start": {
                      "column": 8,
                      "line": 193
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  3062,
                  3065
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 193
                  },
                  "start": {
                    "column": 4,
                    "line": 193
                  }
                }
              },
              "optional": false,
              "range": [
                3062,
                3068
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 193
                },
                "start": {
                  "column": 4,
                  "line": 193
                }
              }
            },
            "range": [
              3062,
              3068
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 193
              },
              "start": {
                "column": 4,
                "line": 193
              }
            }
          }
        ],
        "range": [
          2906,
          3070
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 194
          },
          "start": {
            "column": 19,
            "line": 185
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6_c",
        "optional": false,
        "range": [
          2896,
          2902
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 185
          },
          "start": {
            "column": 9,
            "line": 185
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
            2903,
            2904
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
        }
      ],
      "range": [
        2887,
        3070
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 194
        },
        "start": {
          "column": 0,
          "line": 185
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
            "type": "DoWhileStatement",
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
                          3116,
                          3117
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 198
                          },
                          "start": {
                            "column": 14,
                            "line": 198
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3120,
                          3121
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 198
                          },
                          "start": {
                            "column": 18,
                            "line": 198
                          }
                        }
                      },
                      "range": [
                        3116,
                        3121
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 198
                        },
                        "start": {
                          "column": 14,
                          "line": 198
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          3123,
                          3124
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 198
                          },
                          "start": {
                            "column": 21,
                            "line": 198
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3127,
                          3128
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 198
                          },
                          "start": {
                            "column": 25,
                            "line": 198
                          }
                        }
                      },
                      "range": [
                        3123,
                        3128
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 198
                        },
                        "start": {
                          "column": 21,
                          "line": 198
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    3110,
                    3129
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 198
                    },
                    "start": {
                      "column": 8,
                      "line": 198
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          3142,
                          3143
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 199
                          },
                          "start": {
                            "column": 12,
                            "line": 199
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3146,
                          3147
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 199
                          },
                          "start": {
                            "column": 16,
                            "line": 199
                          }
                        }
                      },
                      "range": [
                        3142,
                        3147
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 199
                        },
                        "start": {
                          "column": 12,
                          "line": 199
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    3138,
                    3148
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 199
                    },
                    "start": {
                      "column": 8,
                      "line": 199
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  3178,
                                  3179
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 200
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 200
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  3182,
                                  3183
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 200
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 200
                                  }
                                }
                              },
                              "range": [
                                3178,
                                3183
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 200
                                },
                                "start": {
                                  "column": 29,
                                  "line": 200
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                3186,
                                3187
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 200
                                },
                                "start": {
                                  "column": 37,
                                  "line": 200
                                }
                              }
                            },
                            "range": [
                              3178,
                              3187
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 200
                              },
                              "start": {
                                "column": 29,
                                "line": 200
                              }
                            }
                          },
                          "range": [
                            3171,
                            3187
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 200
                            },
                            "start": {
                              "column": 22,
                              "line": 200
                            }
                          }
                        }
                      ],
                      "range": [
                        3169,
                        3189
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 200
                        },
                        "start": {
                          "column": 20,
                          "line": 200
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3158,
                      3189
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 200
                      },
                      "start": {
                        "column": 9,
                        "line": 200
                      }
                    }
                  },
                  "range": [
                    3157,
                    3191
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 200
                    },
                    "start": {
                      "column": 8,
                      "line": 200
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3207,
                            3208
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 201
                            },
                            "start": {
                              "column": 15,
                              "line": 201
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            3211,
                            3212
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 201
                            },
                            "start": {
                              "column": 19,
                              "line": 201
                            }
                          }
                        },
                        "range": [
                          3207,
                          3212
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 201
                          },
                          "start": {
                            "column": 15,
                            "line": 201
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          3215,
                          3216
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 201
                          },
                          "start": {
                            "column": 23,
                            "line": 201
                          }
                        }
                      },
                      "range": [
                        3207,
                        3216
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 201
                        },
                        "start": {
                          "column": 15,
                          "line": 201
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3201,
                      3216
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 201
                      },
                      "start": {
                        "column": 9,
                        "line": 201
                      }
                    }
                  },
                  "range": [
                    3200,
                    3218
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 201
                    },
                    "start": {
                      "column": 8,
                      "line": 201
                    }
                  }
                }
              ],
              "range": [
                3100,
                3224
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 202
                },
                "start": {
                  "column": 7,
                  "line": 197
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  3232,
                  3233
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 202
                  },
                  "start": {
                    "column": 13,
                    "line": 202
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  3238,
                  3239
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 202
                  },
                  "start": {
                    "column": 19,
                    "line": 202
                  }
                }
              },
              "range": [
                3232,
                3239
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 202
                },
                "start": {
                  "column": 13,
                  "line": 202
                }
              }
            },
            "range": [
              3097,
              3241
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 202
              },
              "start": {
                "column": 4,
                "line": 197
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    3255,
                    3256
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 204
                    },
                    "start": {
                      "column": 8,
                      "line": 204
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  3251,
                  3254
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 204
                  },
                  "start": {
                    "column": 4,
                    "line": 204
                  }
                }
              },
              "optional": false,
              "range": [
                3251,
                3257
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 204
                },
                "start": {
                  "column": 4,
                  "line": 204
                }
              }
            },
            "range": [
              3251,
              3258
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 204
              },
              "start": {
                "column": 4,
                "line": 204
              }
            }
          }
        ],
        "range": [
          3091,
          3260
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 205
          },
          "start": {
            "column": 19,
            "line": 196
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7_c",
        "optional": false,
        "range": [
          3081,
          3087
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 196
          },
          "start": {
            "column": 9,
            "line": 196
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
            3088,
            3089
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 196
            },
            "start": {
              "column": 16,
              "line": 196
            }
          }
        }
      ],
      "range": [
        3072,
        3260
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 205
        },
        "start": {
          "column": 0,
          "line": 196
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
            "type": "ForStatement",
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
                          3330,
                          3331
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 210
                          },
                          "start": {
                            "column": 14,
                            "line": 210
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3334,
                          3335
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 210
                          },
                          "start": {
                            "column": 18,
                            "line": 210
                          }
                        }
                      },
                      "range": [
                        3330,
                        3335
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 210
                        },
                        "start": {
                          "column": 14,
                          "line": 210
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    3324,
                    3336
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 210
                    },
                    "start": {
                      "column": 8,
                      "line": 210
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          3349,
                          3350
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 211
                          },
                          "start": {
                            "column": 12,
                            "line": 211
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3353,
                          3354
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 211
                          },
                          "start": {
                            "column": 16,
                            "line": 211
                          }
                        }
                      },
                      "range": [
                        3349,
                        3354
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 211
                        },
                        "start": {
                          "column": 12,
                          "line": 211
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    3345,
                    3355
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 211
                    },
                    "start": {
                      "column": 8,
                      "line": 211
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  3385,
                                  3386
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 212
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 212
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  3389,
                                  3390
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 212
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 212
                                  }
                                }
                              },
                              "range": [
                                3385,
                                3390
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 212
                                },
                                "start": {
                                  "column": 29,
                                  "line": 212
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                3393,
                                3394
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 212
                                },
                                "start": {
                                  "column": 37,
                                  "line": 212
                                }
                              }
                            },
                            "range": [
                              3385,
                              3394
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 212
                              },
                              "start": {
                                "column": 29,
                                "line": 212
                              }
                            }
                          },
                          "range": [
                            3378,
                            3394
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 212
                            },
                            "start": {
                              "column": 22,
                              "line": 212
                            }
                          }
                        }
                      ],
                      "range": [
                        3376,
                        3396
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 212
                        },
                        "start": {
                          "column": 20,
                          "line": 212
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3365,
                      3396
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 212
                      },
                      "start": {
                        "column": 9,
                        "line": 212
                      }
                    }
                  },
                  "range": [
                    3364,
                    3398
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 212
                    },
                    "start": {
                      "column": 8,
                      "line": 212
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3414,
                            3415
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 213
                            },
                            "start": {
                              "column": 15,
                              "line": 213
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            3418,
                            3419
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 213
                            },
                            "start": {
                              "column": 19,
                              "line": 213
                            }
                          }
                        },
                        "range": [
                          3414,
                          3419
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 213
                          },
                          "start": {
                            "column": 15,
                            "line": 213
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          3422,
                          3423
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 213
                          },
                          "start": {
                            "column": 23,
                            "line": 213
                          }
                        }
                      },
                      "range": [
                        3414,
                        3423
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 213
                        },
                        "start": {
                          "column": 15,
                          "line": 213
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3408,
                      3423
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 213
                      },
                      "start": {
                        "column": 9,
                        "line": 213
                      }
                    }
                  },
                  "range": [
                    3407,
                    3425
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 213
                    },
                    "start": {
                      "column": 8,
                      "line": 213
                    }
                  }
                }
              ],
              "range": [
                3314,
                3431
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 214
                },
                "start": {
                  "column": 30,
                  "line": 209
                }
              }
            },
            "init": {
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
                      3299,
                      3300
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 209
                      },
                      "start": {
                        "column": 15,
                        "line": 209
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      3303,
                      3304
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 209
                      },
                      "start": {
                        "column": 19,
                        "line": 209
                      }
                    }
                  },
                  "range": [
                    3299,
                    3304
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 209
                    },
                    "start": {
                      "column": 15,
                      "line": 209
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                3293,
                3304
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 209
                },
                "start": {
                  "column": 9,
                  "line": 209
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  3306,
                  3307
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 209
                  },
                  "start": {
                    "column": 22,
                    "line": 209
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  3310,
                  3311
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 209
                  },
                  "start": {
                    "column": 26,
                    "line": 209
                  }
                }
              },
              "range": [
                3306,
                3311
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 209
                },
                "start": {
                  "column": 22,
                  "line": 209
                }
              }
            },
            "update": null,
            "range": [
              3288,
              3431
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 214
              },
              "start": {
                "column": 4,
                "line": 209
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    3445,
                    3446
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 216
                    },
                    "start": {
                      "column": 8,
                      "line": 216
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  3441,
                  3444
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 216
                  },
                  "start": {
                    "column": 4,
                    "line": 216
                  }
                }
              },
              "optional": false,
              "range": [
                3441,
                3447
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 216
                },
                "start": {
                  "column": 4,
                  "line": 216
                }
              }
            },
            "range": [
              3441,
              3448
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 216
              },
              "start": {
                "column": 4,
                "line": 216
              }
            }
          }
        ],
        "range": [
          3282,
          3450
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 217
          },
          "start": {
            "column": 19,
            "line": 208
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8_c",
        "optional": false,
        "range": [
          3272,
          3278
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 208
          },
          "start": {
            "column": 9,
            "line": 208
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
            3279,
            3280
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 208
            },
            "start": {
              "column": 16,
              "line": 208
            }
          }
        }
      ],
      "range": [
        3263,
        3450
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 217
        },
        "start": {
          "column": 0,
          "line": 208
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 217
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
