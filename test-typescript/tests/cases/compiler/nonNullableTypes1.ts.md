__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    600
  ],
  "body": [
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    31,
                    32
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
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      35,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 2
                      },
                      "start": {
                        "column": 12,
                        "line": 2
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      40,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    35,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  31,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 24,
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
            "kind": "let",
            "range": [
              27,
              48
            ],
            "loc": {
              "end": {
                "column": 25,
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
          21,
          78
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 21,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            },
            "range": [
              16,
              19
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  18,
                  19
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              },
              "range": [
                18,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
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
            15,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        },
        "range": [
          11,
          14
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                12,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        78
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
                  120,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 6
                  },
                  "start": {
                    "column": 14,
                    "line": 6
                  }
                }
              },
              "range": [
                116,
                127
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            "range": [
              110,
              128
            ],
            "loc": {
              "end": {
                "column": 22,
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
          104,
          130
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 24,
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
        "name": "error",
        "optional": false,
        "range": [
          89,
          94
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 23,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 5
          }
        },
        "range": [
          96,
          103
        ],
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "range": [
            98,
            103
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 5
            },
            "start": {
              "column": 18,
              "line": 5
            }
          }
        }
      },
      "range": [
        80,
        130
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
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  185,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "range": [
                    190,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 16,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "range": [
                  190,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 10
                  },
                  "start": {
                    "column": 16,
                    "line": 10
                  }
                }
              },
              "range": [
                185,
                197
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              178,
              198
            ],
            "loc": {
              "end": {
                "column": 24,
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
          153,
          200
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 21,
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
        "name": "f2",
        "optional": false,
        "range": [
          141,
          143
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
                "column": 19,
                "line": 9
              },
              "start": {
                "column": 16,
                "line": 9
              }
            },
            "range": [
              148,
              151
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  150,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              },
              "range": [
                150,
                151
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 18,
                  "line": 9
                }
              }
            }
          },
          "range": [
            147,
            151
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 9
            },
            "start": {
              "column": 15,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 9
          },
          "start": {
            "column": 11,
            "line": 9
          }
        },
        "range": [
          143,
          146
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                144,
                145
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              144,
              145
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        132,
        200
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
                    236,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      240,
                      241
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
                    240,
                    242
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
                },
                "range": [
                  236,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              232,
              243
            ],
            "loc": {
              "end": {
                "column": 15,
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
          226,
          252
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 24,
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
        "name": "f3",
        "optional": false,
        "range": [
          211,
          213
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            },
            "range": [
              215,
              224
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                217,
                224
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            }
          },
          "range": [
            214,
            224
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        }
      ],
      "range": [
        202,
        252
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
                    "name": "obj",
                    "optional": false,
                    "range": [
                      351,
                      354
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    351,
                    355
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
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
                341,
                380
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 28,
                  "line": 18
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      321,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      326,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 18
                      },
                      "start": {
                        "column": 13,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    321,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "range": [
                  321,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  332,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 18
                  },
                  "start": {
                    "column": 19,
                    "line": 18
                  }
                }
              },
              "range": [
                321,
                339
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            },
            "range": [
              317,
              380
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      407,
                      410
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    407,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
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
                397,
                436
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 16,
                  "line": 21
                }
              }
            },
            "test": {
              "type": "ChainExpression",
              "expression": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    389,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    394,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 21
                    },
                    "start": {
                      "column": 13,
                      "line": 21
                    }
                  }
                },
                "range": [
                  389,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              },
              "range": [
                389,
                395
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "range": [
              385,
              436
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
                    "name": "obj",
                    "optional": false,
                    "range": [
                      483,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    483,
                    487
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                473,
                512
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 36,
                  "line": 24
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        452,
                        455
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 24
                        }
                      }
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        457,
                        458
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
                    "range": [
                      452,
                      458
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 24
                      },
                      "start": {
                        "column": 15,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    452,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 24
                    },
                    "start": {
                      "column": 15,
                      "line": 24
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  445,
                  458
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  463,
                  471
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 24
                  },
                  "start": {
                    "column": 26,
                    "line": 24
                  }
                }
              },
              "range": [
                445,
                471
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
                }
              }
            },
            "range": [
              441,
              512
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          311,
          514
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 57,
            "line": 17
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
          263,
          265
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 55,
                "line": 17
              },
              "start": {
                "column": 52,
                "line": 17
              }
            },
            "range": [
              306,
              309
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  308,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 17
                  },
                  "start": {
                    "column": 54,
                    "line": 17
                  }
                }
              },
              "range": [
                308,
                309
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 17
                },
                "start": {
                  "column": 54,
                  "line": 17
                }
              }
            }
          },
          "range": [
            303,
            309
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 17
            },
            "start": {
              "column": 49,
              "line": 17
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 17
          },
          "start": {
            "column": 11,
            "line": 17
          }
        },
        "range": [
          265,
          302
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          278,
                          279
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 17
                          },
                          "start": {
                            "column": 24,
                            "line": 17
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
                            "column": 33,
                            "line": 17
                          },
                          "start": {
                            "column": 25,
                            "line": 17
                          }
                        },
                        "range": [
                          279,
                          287
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            281,
                            287
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 17
                            },
                            "start": {
                              "column": 27,
                              "line": 17
                            }
                          }
                        }
                      },
                      "range": [
                        278,
                        287
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 17
                        },
                        "start": {
                          "column": 24,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "range": [
                    276,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 17
                    },
                    "start": {
                      "column": 22,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    292,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 17
                    },
                    "start": {
                      "column": 38,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                276,
                301
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 17
                },
                "start": {
                  "column": 22,
                  "line": 17
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                266,
                267
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              266,
              301
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        254,
        514
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          524,
          599
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                530,
                531
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                534,
                541
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 30
                },
                "start": {
                  "column": 8,
                  "line": 30
                }
              }
            },
            "range": [
              530,
              542
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
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
              "name": "foo",
              "optional": false,
              "range": [
                547,
                550
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
                550,
                597
              ],
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
                          "name": "zz",
                          "optional": false,
                          "range": [
                            567,
                            569
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 32
                            },
                            "start": {
                              "column": 12,
                              "line": 32
                            }
                          }
                        },
                        "init": {
                          "type": "ChainExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                572,
                                576
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 32
                                },
                                "start": {
                                  "column": 17,
                                  "line": 32
                                }
                              }
                            },
                            "optional": true,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                578,
                                579
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 32
                                },
                                "start": {
                                  "column": 23,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              572,
                              579
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 32
                              },
                              "start": {
                                "column": 17,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            572,
                            579
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 32
                            },
                            "start": {
                              "column": 17,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          567,
                          579
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 32
                          },
                          "start": {
                            "column": 12,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      563,
                      580
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  553,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
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
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 7,
                  "line": 31
                }
              }
            },
            "range": [
              547,
              597
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
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
            "line": 34
          },
          "start": {
            "column": 8,
            "line": 29
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
          522,
          523
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 29
          },
          "start": {
            "column": 6,
            "line": 29
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        516,
        599
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 35
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
