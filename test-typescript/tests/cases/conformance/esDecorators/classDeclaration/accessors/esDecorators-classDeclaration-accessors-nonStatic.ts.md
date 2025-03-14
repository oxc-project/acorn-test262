__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    303
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                20
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  17,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
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
            20
          ],
          "loc": {
            "end": {
              "column": 20,
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
        21
      ],
      "loc": {
        "end": {
          "column": 21,
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
            "name": "method3",
            "optional": false,
            "range": [
              29,
              36
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"method3\"",
            "value": "method3",
            "range": [
              39,
              48
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          },
          "range": [
            29,
            48
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        23,
        49
      ],
      "loc": {
        "end": {
          "column": 26,
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
          59,
          302
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "11",
                      "value": 11,
                      "range": [
                        70,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 6
                        },
                        "start": {
                          "column": 9,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      66,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 6
                      },
                      "start": {
                        "column": 5,
                        "line": 6
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    66,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 6
                    },
                    "start": {
                      "column": 5,
                      "line": 6
                    }
                  }
                },
                "range": [
                  65,
                  73
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
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "range": [
                78,
                85
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 17,
                  "line": 6
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                85,
                101
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        97,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 6
                        },
                        "start": {
                          "column": 36,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      90,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 6
                      },
                      "start": {
                        "column": 29,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  88,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 6
                  },
                  "start": {
                    "column": 27,
                    "line": 6
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
                  "column": 40,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              }
            },
            "range": [
              65,
              101
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
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        111,
                        113
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 7
                        },
                        "start": {
                          "column": 9,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      107,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 7
                      },
                      "start": {
                        "column": 5,
                        "line": 7
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    107,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 7
                    },
                    "start": {
                      "column": 5,
                      "line": 7
                    }
                  }
                },
                "range": [
                  106,
                  114
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
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "range": [
                119,
                126
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                126,
                136
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  134,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    127,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 7
                    },
                    "start": {
                      "column": 25,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
                }
              }
            },
            "range": [
              106,
              136
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "21",
                      "value": 21,
                      "range": [
                        146,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 8
                        },
                        "start": {
                          "column": 9,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      142,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 8
                      },
                      "start": {
                        "column": 5,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    142,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 8
                    },
                    "start": {
                      "column": 5,
                      "line": 8
                    }
                  }
                },
                "range": [
                  141,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              }
            ],
            "key": {
              "type": "Literal",
              "raw": "\"method2\"",
              "value": "method2",
              "range": [
                155,
                164
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 8
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                165,
                181
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        177,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 8
                        },
                        "start": {
                          "column": 40,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      170,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 8
                      },
                      "start": {
                        "column": 33,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  168,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 8
                  },
                  "start": {
                    "column": 31,
                    "line": 8
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
                  "column": 44,
                  "line": 8
                },
                "start": {
                  "column": 28,
                  "line": 8
                }
              }
            },
            "range": [
              141,
              181
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "22",
                      "value": 22,
                      "range": [
                        191,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 9
                        },
                        "start": {
                          "column": 9,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      187,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 9
                      },
                      "start": {
                        "column": 5,
                        "line": 9
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    187,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 9
                    },
                    "start": {
                      "column": 5,
                      "line": 9
                    }
                  }
                },
                "range": [
                  186,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              }
            ],
            "key": {
              "type": "Literal",
              "raw": "\"method2\"",
              "value": "method2",
              "range": [
                200,
                209
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 18,
                  "line": 9
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                210,
                220
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  218,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 9
                  },
                  "start": {
                    "column": 36,
                    "line": 9
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    211,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 9
                    },
                    "start": {
                      "column": 29,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 9
                },
                "start": {
                  "column": 28,
                  "line": 9
                }
              }
            },
            "range": [
              186,
              220
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "31",
                      "value": 31,
                      "range": [
                        230,
                        232
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
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      226,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 10
                      },
                      "start": {
                        "column": 5,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    226,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 10
                    }
                  }
                },
                "range": [
                  225,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "range": [
                239,
                246
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 10
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                247,
                263
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        259,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 10
                        },
                        "start": {
                          "column": 38,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      252,
                      261
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 10
                      },
                      "start": {
                        "column": 31,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  250,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 10
                  },
                  "start": {
                    "column": 29,
                    "line": 10
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
                  "column": 42,
                  "line": 10
                },
                "start": {
                  "column": 26,
                  "line": 10
                }
              }
            },
            "range": [
              225,
              263
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "32",
                      "value": 32,
                      "range": [
                        273,
                        275
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
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      269,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 11
                      },
                      "start": {
                        "column": 5,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    269,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 11
                    },
                    "start": {
                      "column": 5,
                      "line": 11
                    }
                  }
                },
                "range": [
                  268,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "range": [
                282,
                289
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 11
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                290,
                300
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  298,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 11
                  },
                  "start": {
                    "column": 34,
                    "line": 11
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    291,
                    296
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 11
                    },
                    "start": {
                      "column": 27,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 11
                },
                "start": {
                  "column": 26,
                  "line": 11
                }
              }
            },
            "range": [
              268,
              300
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
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
        "name": "C",
        "optional": false,
        "range": [
          57,
          58
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
        51,
        302
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
