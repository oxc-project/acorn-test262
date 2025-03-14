__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    627
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
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  143,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 2
                  },
                  "start": {
                    "column": 67,
                    "line": 2
                  }
                }
              },
              "consequent": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "range": [
                      118,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 2
                      },
                      "start": {
                        "column": 42,
                        "line": 2
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
                      127,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 2
                      },
                      "start": {
                        "column": 51,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    118,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 2
                    },
                    "start": {
                      "column": 42,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "range": [
                  118,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 2
                  },
                  "start": {
                    "column": 42,
                    "line": 2
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "range": [
                      94,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    87,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    107,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 2
                    },
                    "start": {
                      "column": 31,
                      "line": 2
                    }
                  }
                },
                "range": [
                  87,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "range": [
                87,
                145
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              80,
              146
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          74,
          148
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 74,
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
        "name": "stringify1",
        "optional": false,
        "range": [
          9,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
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
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 1
              },
              "start": {
                "column": 28,
                "line": 1
              }
            },
            "range": [
              28,
              64
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "range": [
                          32,
                          40
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 1
                          },
                          "start": {
                            "column": 32,
                            "line": 1
                          }
                        }
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 1
                          },
                          "start": {
                            "column": 42,
                            "line": 1
                          }
                        },
                        "range": [
                          42,
                          50
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            44,
                            50
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 1
                            },
                            "start": {
                              "column": 44,
                              "line": 1
                            }
                          }
                        }
                      },
                      "static": false,
                      "range": [
                        32,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 1
                        },
                        "start": {
                          "column": 32,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    30,
                    52
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 1
                    },
                    "start": {
                      "column": 30,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    55,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 1
                    },
                    "start": {
                      "column": 55,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                30,
                64
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
                }
              }
            }
          },
          "range": [
            20,
            64
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 73,
            "line": 1
          },
          "start": {
            "column": 65,
            "line": 1
          }
        },
        "range": [
          65,
          73
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            67,
            73
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 1
            },
            "start": {
              "column": 67,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        148
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
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  273,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 6
                  },
                  "start": {
                    "column": 67,
                    "line": 6
                  }
                }
              },
              "consequent": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "range": [
                      248,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 6
                      },
                      "start": {
                        "column": 42,
                        "line": 6
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
                      257,
                      268
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 6
                      },
                      "start": {
                        "column": 51,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    248,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 6
                    },
                    "start": {
                      "column": 42,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "range": [
                  248,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 6
                  },
                  "start": {
                    "column": 42,
                    "line": 6
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "range": [
                      224,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 6
                      },
                      "start": {
                        "column": 18,
                        "line": 6
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    217,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    237,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 6
                    },
                    "start": {
                      "column": 31,
                      "line": 6
                    }
                  }
                },
                "range": [
                  217,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              "range": [
                217,
                275
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "range": [
              210,
              276
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          204,
          278
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 54,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringify2",
        "optional": false,
        "range": [
          159,
          169
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 5
              },
              "start": {
                "column": 28,
                "line": 5
              }
            },
            "range": [
              178,
              194
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "range": [
                    180,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 5
                    },
                    "start": {
                      "column": 30,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    185,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 5
                    },
                    "start": {
                      "column": 35,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                180,
                194
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 5
                },
                "start": {
                  "column": 30,
                  "line": 5
                }
              }
            }
          },
          "range": [
            170,
            194
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 5
            },
            "start": {
              "column": 20,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 5
          },
          "start": {
            "column": 45,
            "line": 5
          }
        },
        "range": [
          195,
          203
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            197,
            203
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 5
            },
            "start": {
              "column": 47,
              "line": 5
            }
          }
        }
      },
      "range": [
        150,
        278
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  470,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 10
                  },
                  "start": {
                    "column": 67,
                    "line": 10
                  }
                }
              },
              "consequent": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "range": [
                      445,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 10
                      },
                      "start": {
                        "column": 42,
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
                      454,
                      465
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 10
                      },
                      "start": {
                        "column": 51,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    445,
                    465
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 10
                    },
                    "start": {
                      "column": 42,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "range": [
                  445,
                  467
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 10
                  },
                  "start": {
                    "column": 42,
                    "line": 10
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "range": [
                      421,
                      429
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 10
                      },
                      "start": {
                        "column": 18,
                        "line": 10
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    414,
                    429
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 11,
                      "line": 10
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    434,
                    442
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 10
                    },
                    "start": {
                      "column": 31,
                      "line": 10
                    }
                  }
                },
                "range": [
                  414,
                  442
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "range": [
                414,
                472
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              407,
              473
            ],
            "loc": {
              "end": {
                "column": 70,
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
          339,
          475
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 59,
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
        "name": "stringify3",
        "optional": false,
        "range": [
          289,
          299
        ],
        "loc": {
          "end": {
            "column": 19,
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
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 9
              },
              "start": {
                "column": 28,
                "line": 9
              }
            },
            "range": [
              308,
              329
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUnknownKeyword",
                  "range": [
                    310,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 9
                    },
                    "start": {
                      "column": 30,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    320,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 9
                    },
                    "start": {
                      "column": 40,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                310,
                329
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 9
                },
                "start": {
                  "column": 30,
                  "line": 9
                }
              }
            }
          },
          "range": [
            300,
            329
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 9
            },
            "start": {
              "column": 20,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 58,
            "line": 9
          },
          "start": {
            "column": 50,
            "line": 9
          }
        },
        "range": [
          330,
          338
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            332,
            338
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 9
            },
            "start": {
              "column": 52,
              "line": 9
            }
          }
        }
      },
      "range": [
        280,
        475
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
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  621,
                  623
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 14
                  },
                  "start": {
                    "column": 67,
                    "line": 14
                  }
                }
              },
              "consequent": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "range": [
                      596,
                      604
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 14
                      },
                      "start": {
                        "column": 42,
                        "line": 14
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
                      605,
                      616
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 14
                      },
                      "start": {
                        "column": 51,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    596,
                    616
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 14
                    },
                    "start": {
                      "column": 42,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "range": [
                  596,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 14
                  },
                  "start": {
                    "column": 42,
                    "line": 14
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "range": [
                      572,
                      580
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 14
                      },
                      "start": {
                        "column": 18,
                        "line": 14
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    565,
                    580
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    585,
                    593
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 14
                    },
                    "start": {
                      "column": 31,
                      "line": 14
                    }
                  }
                },
                "range": [
                  565,
                  593
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              "range": [
                565,
                623
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              558,
              624
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          552,
          626
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 75,
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
        "name": "stringify4",
        "optional": false,
        "range": [
          486,
          496
        ],
        "loc": {
          "end": {
            "column": 19,
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
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 13
              },
              "start": {
                "column": 28,
                "line": 13
              }
            },
            "range": [
              505,
              542
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "range": [
                          509,
                          517
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 13
                          },
                          "start": {
                            "column": 32,
                            "line": 13
                          }
                        }
                      },
                      "kind": "method",
                      "optional": true,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 13
                          },
                          "start": {
                            "column": 43,
                            "line": 13
                          }
                        },
                        "range": [
                          520,
                          528
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            522,
                            528
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 13
                            },
                            "start": {
                              "column": 45,
                              "line": 13
                            }
                          }
                        }
                      },
                      "static": false,
                      "range": [
                        509,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 13
                        },
                        "start": {
                          "column": 32,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    507,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 13
                    },
                    "start": {
                      "column": 30,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    533,
                    542
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 13
                    },
                    "start": {
                      "column": 56,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                507,
                542
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 13
                },
                "start": {
                  "column": 30,
                  "line": 13
                }
              }
            }
          },
          "range": [
            497,
            542
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 13
            },
            "start": {
              "column": 20,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 74,
            "line": 13
          },
          "start": {
            "column": 66,
            "line": 13
          }
        },
        "range": [
          543,
          551
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            545,
            551
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 13
            },
            "start": {
              "column": 68,
              "line": 13
            }
          }
        }
      },
      "range": [
        477,
        626
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
