__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1322
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
        "name": "cond",
        "optional": false,
        "range": [
          17,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 32,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        },
        "range": [
          23,
          32
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            25,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        33
      ],
      "loc": {
        "end": {
          "column": 33,
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
                    59,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    63,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "range": [
                  59,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              55,
              66
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
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
                    118,
                    119
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
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    122,
                    123
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
                "range": [
                  118,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
              114,
              124
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
                  "raw": "5",
                  "value": 5,
                  "range": [
                    162,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    155,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    157,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 6
                    },
                    "start": {
                      "column": 6,
                      "line": 6
                    }
                  }
                },
                "range": [
                  155,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                155,
                164
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              155,
              165
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    174,
                    175
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
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    178,
                    179
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
                  174,
                  179
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
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              170,
              180
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          49,
          182
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 14,
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
        "name": "f1",
        "optional": false,
        "range": [
          44,
          46
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        35,
        182
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
                    208,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "init": null,
                "range": [
                  208,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              204,
              210
            ],
            "loc": {
              "end": {
                "column": 10,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  263,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  267,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "range": [
                263,
                269
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              263,
              270
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 12
              },
              "start": {
                "column": 4,
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    279,
                    280
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
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    283,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 13
                    },
                    "start": {
                      "column": 12,
                      "line": 13
                    }
                  }
                },
                "range": [
                  279,
                  284
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              275,
              285
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
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
                  "raw": "5",
                  "value": 5,
                  "range": [
                    323,
                    324
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    316,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    318,
                    322
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 14
                    },
                    "start": {
                      "column": 6,
                      "line": 14
                    }
                  }
                },
                "range": [
                  316,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                316,
                325
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              316,
              326
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    335,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
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
                    339,
                    340
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
                "range": [
                  335,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              331,
              341
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          198,
          343
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 14,
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
          193,
          195
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
      "params": [],
      "range": [
        184,
        343
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
                    369,
                    370
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
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    373,
                    375
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
                },
                "range": [
                  369,
                  375
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
            "declare": false,
            "kind": "let",
            "range": [
              365,
              376
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
                  "raw": "5",
                  "value": 5,
                  "range": [
                    431,
                    432
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 20
                    },
                    "start": {
                      "column": 11,
                      "line": 20
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    424,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
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
                  "name": "push",
                  "optional": false,
                  "range": [
                    426,
                    430
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
                  424,
                  430
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
              "optional": false,
              "range": [
                424,
                433
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              424,
              434
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      462,
                      463
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
                  "range": [
                    462,
                    464
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                452,
                500
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 17,
                  "line": 21
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                448,
                449
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
            "params": [],
            "range": [
              439,
              500
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
          }
        ],
        "range": [
          359,
          502
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 14,
            "line": 18
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
          354,
          356
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "params": [],
      "range": [
        345,
        502
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 18
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
                    528,
                    529
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "init": null,
                "range": [
                  528,
                  529
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              524,
              530
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
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
                "name": "x",
                "optional": false,
                "range": [
                  535,
                  536
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "5",
                    "value": 5,
                    "range": [
                      540,
                      541
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 28
                      },
                      "start": {
                        "column": 9,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      543,
                      550
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 28
                      },
                      "start": {
                        "column": 12,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  539,
                  551
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              },
              "range": [
                535,
                551
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              535,
              552
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
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
                  "raw": "true",
                  "value": true,
                  "range": [
                    587,
                    591
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
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    580,
                    581
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 29
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    582,
                    586
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
                "range": [
                  580,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "range": [
                580,
                592
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "range": [
              580,
              593
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
          }
        ],
        "range": [
          518,
          609
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 14,
            "line": 26
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
          513,
          515
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
          }
        }
      },
      "params": [],
      "range": [
        504,
        609
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 26
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
                    635,
                    636
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "5",
                      "value": 5,
                      "range": [
                        640,
                        641
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 33
                        },
                        "start": {
                          "column": 13,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        643,
                        650
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 33
                        },
                        "start": {
                          "column": 16,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "range": [
                    639,
                    651
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 33
                    },
                    "start": {
                      "column": 12,
                      "line": 33
                    }
                  }
                },
                "range": [
                  635,
                  651
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              631,
              652
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
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
                  "raw": "true",
                  "value": true,
                  "range": [
                    687,
                    691
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 34
                    },
                    "start": {
                      "column": 11,
                      "line": 34
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    680,
                    681
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 34
                    },
                    "start": {
                      "column": 4,
                      "line": 34
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    682,
                    686
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 34
                    },
                    "start": {
                      "column": 6,
                      "line": 34
                    }
                  }
                },
                "range": [
                  680,
                  686
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "range": [
                680,
                692
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              680,
              693
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          625,
          713
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 14,
            "line": 32
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
          620,
          622
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 32
          },
          "start": {
            "column": 9,
            "line": 32
          }
        }
      },
      "params": [],
      "range": [
        611,
        713
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 32
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
                    739,
                    740
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                "init": null,
                "range": [
                  739,
                  740
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              735,
              741
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                        845,
                        846
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "true",
                          "value": true,
                          "range": [
                            850,
                            854
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 45
                            },
                            "start": {
                              "column": 13,
                              "line": 45
                            }
                          }
                        }
                      ],
                      "range": [
                        849,
                        855
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 45
                        },
                        "start": {
                          "column": 12,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      845,
                      855
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    845,
                    856
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                }
              ],
              "range": [
                835,
                885
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 9,
                  "line": 44
                }
              }
            },
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
                        768,
                        769
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 40
                        },
                        "start": {
                          "column": 8,
                          "line": 40
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        772,
                        774
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 40
                        },
                        "start": {
                          "column": 12,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      768,
                      774
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
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
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
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
                        "raw": "5",
                        "value": 5,
                        "range": [
                          791,
                          792
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 41
                          },
                          "start": {
                            "column": 15,
                            "line": 41
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          784,
                          785
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
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          786,
                          790
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 41
                          },
                          "start": {
                            "column": 10,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        784,
                        790
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
                    "optional": false,
                    "range": [
                      784,
                      793
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    784,
                    794
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
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
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          810,
                          817
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 42
                          },
                          "start": {
                            "column": 15,
                            "line": 42
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          803,
                          804
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
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          805,
                          809
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 42
                          },
                          "start": {
                            "column": 10,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        803,
                        809
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
                    },
                    "optional": false,
                    "range": [
                      803,
                      818
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    803,
                    819
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
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
                758,
                825
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 16,
                  "line": 39
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  750,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              },
              "optional": false,
              "range": [
                750,
                756
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 39
                },
                "start": {
                  "column": 8,
                  "line": 39
                }
              }
            },
            "range": [
              746,
              885
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                890,
                891
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              890,
              892
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
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
                  "raw": "99",
                  "value": 99,
                  "range": [
                    949,
                    951
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 48
                    },
                    "start": {
                      "column": 11,
                      "line": 48
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    942,
                    943
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
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
                  "name": "push",
                  "optional": false,
                  "range": [
                    944,
                    948
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 48
                    },
                    "start": {
                      "column": 6,
                      "line": 48
                    }
                  }
                },
                "range": [
                  942,
                  948
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 48
                  },
                  "start": {
                    "column": 4,
                    "line": 48
                  }
                }
              },
              "optional": false,
              "range": [
                942,
                952
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
                }
              }
            },
            "range": [
              942,
              953
            ],
            "loc": {
              "end": {
                "column": 15,
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
          729,
          965
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 14,
            "line": 37
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
          724,
          726
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "params": [],
      "range": [
        715,
        965
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 37
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
                    991,
                    992
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
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    995,
                    997
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 52
                    },
                    "start": {
                      "column": 12,
                      "line": 52
                    }
                  }
                },
                "range": [
                  991,
                  997
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 52
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              987,
              998
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
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
                  "raw": "5",
                  "value": 5,
                  "range": [
                    1046,
                    1047
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 53
                    },
                    "start": {
                      "column": 11,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1039,
                    1040
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 53
                    },
                    "start": {
                      "column": 4,
                      "line": 53
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    1041,
                    1045
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
                "range": [
                  1039,
                  1045
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
              "optional": false,
              "range": [
                1039,
                1048
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              1039,
              1049
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
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
                    1058,
                    1059
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
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1062,
                    1063
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 54
                    },
                    "start": {
                      "column": 12,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1058,
                  1063
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 54
                  },
                  "start": {
                    "column": 8,
                    "line": 54
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1054,
              1064
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 54
              },
              "start": {
                "column": 4,
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
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    1117,
                    1124
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 55
                    },
                    "start": {
                      "column": 11,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1110,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 55
                    },
                    "start": {
                      "column": 4,
                      "line": 55
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    1112,
                    1116
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
                "range": [
                  1110,
                  1116
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 55
                  },
                  "start": {
                    "column": 4,
                    "line": 55
                  }
                }
              },
              "optional": false,
              "range": [
                1110,
                1125
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "range": [
              1110,
              1126
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
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
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    1145,
                    1152
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 56
                    },
                    "start": {
                      "column": 11,
                      "line": 56
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    1138,
                    1139
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 56
                    },
                    "start": {
                      "column": 4,
                      "line": 56
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    1140,
                    1144
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 56
                    },
                    "start": {
                      "column": 6,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1138,
                  1144
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              },
              "optional": false,
              "range": [
                1138,
                1153
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "range": [
              1138,
              1154
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "range": [
          981,
          1166
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 14,
            "line": 51
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
          976,
          978
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 51
          },
          "start": {
            "column": 9,
            "line": 51
          }
        }
      },
      "params": [],
      "range": [
        967,
        1166
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
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
                    1194,
                    1195
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
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    1198,
                    1200
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 60
                    },
                    "start": {
                      "column": 14,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1194,
                  1200
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
              1188,
              1201
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
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
                  "raw": "5",
                  "value": 5,
                  "range": [
                    1256,
                    1257
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 61
                    },
                    "start": {
                      "column": 11,
                      "line": 61
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1249,
                    1250
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 61
                    },
                    "start": {
                      "column": 4,
                      "line": 61
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    1251,
                    1255
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 61
                    },
                    "start": {
                      "column": 6,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1249,
                  1255
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 61
                  },
                  "start": {
                    "column": 4,
                    "line": 61
                  }
                }
              },
              "optional": false,
              "range": [
                1249,
                1258
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "range": [
              1249,
              1259
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 61
              },
              "start": {
                "column": 4,
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1287,
                      1288
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
                  },
                  "range": [
                    1287,
                    1289
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 63
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                }
              ],
              "range": [
                1277,
                1320
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 17,
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
              "name": "g",
              "optional": false,
              "range": [
                1273,
                1274
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 62
                },
                "start": {
                  "column": 13,
                  "line": 62
                }
              }
            },
            "params": [],
            "range": [
              1264,
              1320
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          }
        ],
        "range": [
          1182,
          1322
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 65
          },
          "start": {
            "column": 14,
            "line": 59
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
          1177,
          1179
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 59
          },
          "start": {
            "column": 9,
            "line": 59
          }
        }
      },
      "params": [],
      "range": [
        1168,
        1322
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 65
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
