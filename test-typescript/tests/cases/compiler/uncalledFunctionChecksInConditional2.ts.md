__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1268
  ],
  "body": [
    {
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
                "name": "perf",
                "optional": false,
                "range": [
                  10,
                  14
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "range": [
                    17,
                    23
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "performance",
                  "optional": false,
                  "range": [
                    24,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 2
                    },
                    "start": {
                      "column": 22,
                      "line": 2
                    }
                  }
                },
                "range": [
                  17,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                }
              },
              "range": [
                10,
                35
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            4,
            35
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 2
            },
            "start": {
              "column": 2,
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
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        161,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 11
                        },
                        "start": {
                          "column": 17,
                          "line": 11
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
                      "name": "perf",
                      "optional": false,
                      "range": [
                        148,
                        152
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 11
                        },
                        "start": {
                          "column": 4,
                          "line": 11
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "measure",
                      "optional": false,
                      "range": [
                        153,
                        160
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 11
                        },
                        "start": {
                          "column": 9,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      148,
                      160
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
                  "optional": false,
                  "range": [
                    148,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                },
                "range": [
                  148,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
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
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        186,
                        188
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 12
                        },
                        "start": {
                          "column": 20,
                          "line": 12
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
                      "name": "perf",
                      "optional": false,
                      "range": [
                        170,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 12
                        },
                        "start": {
                          "column": 4,
                          "line": 12
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "clearMarks",
                      "optional": false,
                      "range": [
                        175,
                        185
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 12
                        },
                        "start": {
                          "column": 9,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      170,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 12
                      },
                      "start": {
                        "column": 4,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    170,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                },
                "range": [
                  170,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 23,
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
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        213,
                        215
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 13
                        },
                        "start": {
                          "column": 23,
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
                      "name": "perf",
                      "optional": false,
                      "range": [
                        194,
                        198
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
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
                      "name": "clearMeasures",
                      "optional": false,
                      "range": [
                        199,
                        212
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 13
                        },
                        "start": {
                          "column": 9,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      194,
                      212
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
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
                    194,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                },
                "range": [
                  194,
                  216
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              142,
              220
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "test": {
            "type": "LogicalExpression",
            "operator": "&&",
            "left": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "range": [
                    64,
                    68
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "range": [
                      76,
                      80
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
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "measure",
                    "optional": false,
                    "range": [
                      81,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    76,
                    88
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
                "range": [
                  64,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "range": [
                    96,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "clearMarks",
                  "optional": false,
                  "range": [
                    101,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                },
                "range": [
                  96,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "range": [
                64,
                111
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "perf",
                "optional": false,
                "range": [
                  119,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearMeasures",
                "optional": false,
                "range": [
                  124,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              },
              "range": [
                119,
                137
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              64,
              137
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "range": [
            55,
            220
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 14
            },
            "start": {
              "column": 2,
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
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        318,
                        320
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
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
                      "name": "perf",
                      "optional": false,
                      "range": [
                        308,
                        312
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
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
                      "name": "mark",
                      "optional": false,
                      "range": [
                        313,
                        317
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
                    "range": [
                      308,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
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
                    308,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                },
                "range": [
                  308,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              302,
              326
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "test": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "range": [
                    246,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "range": [
                      258,
                      262
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 19
                      },
                      "start": {
                        "column": 4,
                        "line": 19
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mark",
                    "optional": false,
                    "range": [
                      263,
                      267
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
                  "range": [
                    258,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 19
                    },
                    "start": {
                      "column": 4,
                      "line": 19
                    }
                  }
                },
                "range": [
                  246,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "range": [
                    275,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 20
                    },
                    "start": {
                      "column": 4,
                      "line": 20
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "measure",
                  "optional": false,
                  "range": [
                    280,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 9,
                      "line": 20
                    }
                  }
                },
                "range": [
                  275,
                  287
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "range": [
                246,
                287
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "right": {
              "type": "UnaryExpression",
              "argument": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    293,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 22,
                      "line": 20
                    }
                  }
                },
                "operator": "!",
                "prefix": true,
                "range": [
                  292,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 20
                  },
                  "start": {
                    "column": 21,
                    "line": 20
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                291,
                297
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 20
                },
                "start": {
                  "column": 20,
                  "line": 20
                }
              }
            },
            "range": [
              246,
              297
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "range": [
            237,
            326
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 23
            },
            "start": {
              "column": 2,
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
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        442,
                        444
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 33
                        },
                        "start": {
                          "column": 14,
                          "line": 33
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
                      "name": "perf",
                      "optional": false,
                      "range": [
                        432,
                        436
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 33
                        },
                        "start": {
                          "column": 4,
                          "line": 33
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mark",
                      "optional": false,
                      "range": [
                        437,
                        441
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
                    "range": [
                      432,
                      441
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 33
                      },
                      "start": {
                        "column": 4,
                        "line": 33
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    432,
                    445
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 33
                    },
                    "start": {
                      "column": 4,
                      "line": 33
                    }
                  }
                },
                "range": [
                  432,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              }
            ],
            "range": [
              426,
              450
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "test": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "range": [
                    360,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 28
                    },
                    "start": {
                      "column": 6,
                      "line": 28
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "range": [
                      374,
                      378
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 29
                      },
                      "start": {
                        "column": 6,
                        "line": 29
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mark",
                    "optional": false,
                    "range": [
                      379,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 29
                      },
                      "start": {
                        "column": 11,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    374,
                    383
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 29
                    },
                    "start": {
                      "column": 6,
                      "line": 29
                    }
                  }
                },
                "range": [
                  360,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 29
                  },
                  "start": {
                    "column": 6,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "range": [
                    393,
                    397
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 30
                    },
                    "start": {
                      "column": 6,
                      "line": 30
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "measure",
                  "optional": false,
                  "range": [
                    398,
                    405
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 30
                    },
                    "start": {
                      "column": 11,
                      "line": 30
                    }
                  }
                },
                "range": [
                  393,
                  405
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 30
                  },
                  "start": {
                    "column": 6,
                    "line": 30
                  }
                }
              },
              "range": [
                360,
                405
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 30
                },
                "start": {
                  "column": 6,
                  "line": 28
                }
              }
            },
            "right": {
              "type": "UnaryExpression",
              "argument": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    417,
                    421
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 31
                    },
                    "start": {
                      "column": 11,
                      "line": 31
                    }
                  }
                },
                "operator": "!",
                "prefix": true,
                "range": [
                  416,
                  421
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 31
                  },
                  "start": {
                    "column": 10,
                    "line": 31
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                415,
                421
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "range": [
              352,
              421
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "range": [
            343,
            450
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 34
            },
            "start": {
              "column": 2,
              "line": 26
            }
          }
        }
      ],
      "range": [
        0,
        452
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        452,
        453
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 35
        },
        "start": {
          "column": 1,
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
            "name": "inBrowser",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 38
                },
                "start": {
                  "column": 21,
                  "line": 38
                }
              },
              "range": [
                495,
                504
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  497,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 38
                  },
                  "start": {
                    "column": 23,
                    "line": 38
                  }
                }
              }
            },
            "range": [
              486,
              504
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 38
              },
              "start": {
                "column": 12,
                "line": 38
              }
            }
          },
          "init": null,
          "range": [
            486,
            504
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 38
            },
            "start": {
              "column": 12,
              "line": 38
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        474,
        505
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
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
                "name": "mark",
                "optional": false,
                "range": [
                  514,
                  518
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 40
                  },
                  "start": {
                    "column": 6,
                    "line": 40
                  }
                }
              },
              "init": null,
              "range": [
                514,
                518
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 40
                },
                "start": {
                  "column": 6,
                  "line": 40
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            510,
            519
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 40
            },
            "start": {
              "column": 2,
              "line": 40
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
                "name": "measure",
                "optional": false,
                "range": [
                  526,
                  533
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 41
                  },
                  "start": {
                    "column": 6,
                    "line": 41
                  }
                }
              },
              "init": null,
              "range": [
                526,
                533
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 41
                },
                "start": {
                  "column": 6,
                  "line": 41
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            522,
            534
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 41
            },
            "start": {
              "column": 2,
              "line": 41
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
                "name": "perf",
                "optional": false,
                "range": [
                  543,
                  547
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
              "init": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inBrowser",
                  "optional": false,
                  "range": [
                    550,
                    559
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 42
                    },
                    "start": {
                      "column": 15,
                      "line": 42
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "range": [
                      563,
                      569
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 42
                      },
                      "start": {
                        "column": 28,
                        "line": 42
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "performance",
                    "optional": false,
                    "range": [
                      570,
                      581
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 42
                      },
                      "start": {
                        "column": 35,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    563,
                    581
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 42
                    },
                    "start": {
                      "column": 28,
                      "line": 42
                    }
                  }
                },
                "range": [
                  550,
                  581
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 42
                  },
                  "start": {
                    "column": 15,
                    "line": 42
                  }
                }
              },
              "range": [
                543,
                581
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 42
                },
                "start": {
                  "column": 8,
                  "line": 42
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            537,
            581
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 42
            },
            "start": {
              "column": 2,
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
                    "name": "mark",
                    "optional": false,
                    "range": [
                      721,
                      725
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 51
                      },
                      "start": {
                        "column": 4,
                        "line": 51
                      }
                    }
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tag",
                          "optional": false,
                          "range": [
                            747,
                            750
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 51
                            },
                            "start": {
                              "column": 30,
                              "line": 51
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
                          "name": "perf",
                          "optional": false,
                          "range": [
                            737,
                            741
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 51
                            },
                            "start": {
                              "column": 20,
                              "line": 51
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mark",
                          "optional": false,
                          "range": [
                            742,
                            746
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 51
                            },
                            "start": {
                              "column": 25,
                              "line": 51
                            }
                          }
                        },
                        "range": [
                          737,
                          746
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 51
                          },
                          "start": {
                            "column": 20,
                            "line": 51
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        737,
                        751
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 51
                        },
                        "start": {
                          "column": 20,
                          "line": 51
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "range": [
                          729,
                          732
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 51
                          },
                          "start": {
                            "column": 12,
                            "line": 51
                          }
                        }
                      }
                    ],
                    "range": [
                      728,
                      751
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 51
                      },
                      "start": {
                        "column": 11,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    721,
                    751
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 51
                    },
                    "start": {
                      "column": 4,
                      "line": 51
                    }
                  }
                },
                "range": [
                  721,
                  751
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 51
                  },
                  "start": {
                    "column": 4,
                    "line": 51
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
                    "name": "measure",
                    "optional": false,
                    "range": [
                      756,
                      763
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
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "range": [
                                  815,
                                  819
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 53
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 53
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "startTag",
                                "optional": false,
                                "range": [
                                  821,
                                  829
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 53
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 53
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "endTag",
                                "optional": false,
                                "range": [
                                  831,
                                  837
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 53
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 53
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
                                "name": "perf",
                                "optional": false,
                                "range": [
                                  802,
                                  806
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 53
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 53
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "measure",
                                "optional": false,
                                "range": [
                                  807,
                                  814
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 53
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 53
                                  }
                                }
                              },
                              "range": [
                                802,
                                814
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 53
                                },
                                "start": {
                                  "column": 6,
                                  "line": 53
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              802,
                              838
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 53
                              },
                              "start": {
                                "column": 6,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            802,
                            838
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 53
                            },
                            "start": {
                              "column": 6,
                              "line": 53
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
                                "name": "startTag",
                                "optional": false,
                                "range": [
                                  861,
                                  869
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 54
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 54
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
                                "name": "perf",
                                "optional": false,
                                "range": [
                                  845,
                                  849
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 54
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 54
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "clearMarks",
                                "optional": false,
                                "range": [
                                  850,
                                  860
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 54
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 54
                                  }
                                }
                              },
                              "range": [
                                845,
                                860
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 54
                                },
                                "start": {
                                  "column": 6,
                                  "line": 54
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              845,
                              870
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 54
                              },
                              "start": {
                                "column": 6,
                                "line": 54
                              }
                            }
                          },
                          "range": [
                            845,
                            870
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 54
                            },
                            "start": {
                              "column": 6,
                              "line": 54
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
                                "name": "endTag",
                                "optional": false,
                                "range": [
                                  893,
                                  899
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 55
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
                                "name": "perf",
                                "optional": false,
                                "range": [
                                  877,
                                  881
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 55
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "clearMarks",
                                "optional": false,
                                "range": [
                                  882,
                                  892
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 55
                                  }
                                }
                              },
                              "range": [
                                877,
                                892
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 55
                                },
                                "start": {
                                  "column": 6,
                                  "line": 55
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              877,
                              900
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 55
                              },
                              "start": {
                                "column": 6,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            877,
                            900
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 55
                            },
                            "start": {
                              "column": 6,
                              "line": 55
                            }
                          }
                        }
                      ],
                      "range": [
                        794,
                        940
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 57
                        },
                        "start": {
                          "column": 42,
                          "line": 52
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "range": [
                          767,
                          771
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 52
                          },
                          "start": {
                            "column": 15,
                            "line": 52
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "startTag",
                        "optional": false,
                        "range": [
                          773,
                          781
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 52
                          },
                          "start": {
                            "column": 21,
                            "line": 52
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "endTag",
                        "optional": false,
                        "range": [
                          783,
                          789
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 52
                          },
                          "start": {
                            "column": 31,
                            "line": 52
                          }
                        }
                      }
                    ],
                    "range": [
                      766,
                      940
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 57
                      },
                      "start": {
                        "column": 14,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    756,
                    940
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 57
                    },
                    "start": {
                      "column": 4,
                      "line": 52
                    }
                  }
                },
                "range": [
                  756,
                  940
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 52
                  }
                }
              }
            ],
            "range": [
              715,
              944
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          "test": {
            "type": "LogicalExpression",
            "operator": "&&",
            "left": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "range": [
                      620,
                      624
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 45
                      },
                      "start": {
                        "column": 4,
                        "line": 45
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "perf",
                      "optional": false,
                      "range": [
                        632,
                        636
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 46
                        },
                        "start": {
                          "column": 4,
                          "line": 46
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mark",
                      "optional": false,
                      "range": [
                        637,
                        641
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 46
                        },
                        "start": {
                          "column": 9,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      632,
                      641
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 46
                      },
                      "start": {
                        "column": 4,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    620,
                    641
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 46
                    },
                    "start": {
                      "column": 4,
                      "line": 45
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "range": [
                      649,
                      653
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 47
                      },
                      "start": {
                        "column": 4,
                        "line": 47
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "measure",
                    "optional": false,
                    "range": [
                      654,
                      661
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 47
                      },
                      "start": {
                        "column": 9,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    649,
                    661
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 47
                    },
                    "start": {
                      "column": 4,
                      "line": 47
                    }
                  }
                },
                "range": [
                  620,
                  661
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "range": [
                    669,
                    673
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 48
                    },
                    "start": {
                      "column": 4,
                      "line": 48
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "clearMarks",
                  "optional": false,
                  "range": [
                    674,
                    684
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 48
                    },
                    "start": {
                      "column": 9,
                      "line": 48
                    }
                  }
                },
                "range": [
                  669,
                  684
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 48
                  },
                  "start": {
                    "column": 4,
                    "line": 48
                  }
                }
              },
              "range": [
                620,
                684
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "perf",
                "optional": false,
                "range": [
                  692,
                  696
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearMeasures",
                "optional": false,
                "range": [
                  697,
                  710
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 49
                  },
                  "start": {
                    "column": 9,
                    "line": 49
                  }
                }
              },
              "range": [
                692,
                710
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              620,
              710
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          "range": [
            611,
            944
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 58
            },
            "start": {
              "column": 2,
              "line": 44
            }
          }
        }
      ],
      "range": [
        506,
        946
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        946,
        947
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 59
        },
        "start": {
          "column": 1,
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
            "name": "_isMobile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 61
                },
                "start": {
                  "column": 13,
                  "line": 61
                }
              },
              "range": [
                962,
                971
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  964,
                  971
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 61
                  },
                  "start": {
                    "column": 15,
                    "line": 61
                  }
                }
              }
            },
            "range": [
              953,
              971
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          "init": null,
          "range": [
            953,
            971
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 61
            },
            "start": {
              "column": 4,
              "line": 61
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        949,
        972
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isMobileMatch",
                        "optional": false,
                        "range": [
                          1038,
                          1051
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 64
                          },
                          "start": {
                            "column": 10,
                            "line": 64
                          }
                        }
                      },
                      "init": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "!==",
                            "left": {
                              "type": "UnaryExpression",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "window",
                                "optional": false,
                                "range": [
                                  1067,
                                  1073
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 65
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 65
                                  }
                                }
                              },
                              "operator": "typeof",
                              "prefix": true,
                              "range": [
                                1060,
                                1073
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 65
                                },
                                "start": {
                                  "column": 6,
                                  "line": 65
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "'undefined'",
                              "value": "undefined",
                              "range": [
                                1078,
                                1089
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 65
                                },
                                "start": {
                                  "column": 24,
                                  "line": 65
                                }
                              }
                            },
                            "range": [
                              1060,
                              1089
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 65
                              },
                              "start": {
                                "column": 6,
                                "line": 65
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "window",
                              "optional": false,
                              "range": [
                                1099,
                                1105
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 66
                                },
                                "start": {
                                  "column": 6,
                                  "line": 66
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "matchMedia",
                              "optional": false,
                              "range": [
                                1106,
                                1116
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 66
                                },
                                "start": {
                                  "column": 13,
                                  "line": 66
                                }
                              }
                            },
                            "range": [
                              1099,
                              1116
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 66
                              },
                              "start": {
                                "column": 6,
                                "line": 66
                              }
                            }
                          },
                          "range": [
                            1060,
                            1116
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 66
                            },
                            "start": {
                              "column": 6,
                              "line": 65
                            }
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "'(max-device-width: 680px)'",
                              "value": "(max-device-width: 680px)",
                              "range": [
                                1156,
                                1183
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 67
                                },
                                "start": {
                                  "column": 24,
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
                              "name": "window",
                              "optional": false,
                              "range": [
                                1138,
                                1144
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 67
                                },
                                "start": {
                                  "column": 6,
                                  "line": 67
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "matchMedia",
                              "optional": false,
                              "range": [
                                1145,
                                1155
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 67
                                },
                                "start": {
                                  "column": 13,
                                  "line": 67
                                }
                              }
                            },
                            "range": [
                              1138,
                              1155
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 67
                              },
                              "start": {
                                "column": 6,
                                "line": 67
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1138,
                            1184
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 67
                            },
                            "start": {
                              "column": 6,
                              "line": 67
                            }
                          }
                        },
                        "range": [
                          1060,
                          1184
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 67
                          },
                          "start": {
                            "column": 6,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        1038,
                        1184
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 67
                        },
                        "start": {
                          "column": 10,
                          "line": 64
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    1032,
                    1185
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 67
                    },
                    "start": {
                      "column": 4,
                      "line": 64
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
                      "name": "_isMobile",
                      "optional": false,
                      "range": [
                        1190,
                        1199
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 68
                        },
                        "start": {
                          "column": 4,
                          "line": 68
                        }
                      }
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isMobileMatch",
                        "optional": false,
                        "range": [
                          1202,
                          1215
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 68
                          },
                          "start": {
                            "column": 16,
                            "line": 68
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMobileMatch",
                          "optional": false,
                          "range": [
                            1219,
                            1232
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 68
                            },
                            "start": {
                              "column": 33,
                              "line": 68
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "matches",
                          "optional": false,
                          "range": [
                            1233,
                            1240
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 68
                            },
                            "start": {
                              "column": 47,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          1219,
                          1240
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 68
                          },
                          "start": {
                            "column": 33,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        1202,
                        1240
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 68
                        },
                        "start": {
                          "column": 16,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1190,
                      1240
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 68
                      },
                      "start": {
                        "column": 4,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1190,
                    1241
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 68
                    },
                    "start": {
                      "column": 4,
                      "line": 68
                    }
                  }
                }
              ],
              "range": [
                1026,
                1245
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 69
                },
                "start": {
                  "column": 31,
                  "line": 63
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "_isMobile",
                "optional": false,
                "range": [
                  1001,
                  1010
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 63
                  },
                  "start": {
                    "column": 6,
                    "line": 63
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  1015,
                  1024
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 63
                  },
                  "start": {
                    "column": 20,
                    "line": 63
                  }
                }
              },
              "range": [
                1001,
                1024
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 63
                },
                "start": {
                  "column": 6,
                  "line": 63
                }
              }
            },
            "range": [
              997,
              1245
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 69
              },
              "start": {
                "column": 2,
                "line": 63
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "_isMobile",
              "optional": false,
              "range": [
                1255,
                1264
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 70
                },
                "start": {
                  "column": 9,
                  "line": 70
                }
              }
            },
            "range": [
              1248,
              1265
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 70
              },
              "start": {
                "column": 2,
                "line": 70
              }
            }
          }
        ],
        "range": [
          993,
          1267
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 71
          },
          "start": {
            "column": 20,
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
        "name": "isMobile",
        "optional": false,
        "range": [
          982,
          990
        ],
        "loc": {
          "end": {
            "column": 17,
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
        973,
        1267
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 72
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
