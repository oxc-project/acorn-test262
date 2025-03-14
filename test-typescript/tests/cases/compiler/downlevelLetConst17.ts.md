__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    615
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "raw": "'use strict'",
        "value": "use strict",
        "range": [
          0,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        12
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
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
          31,
          34
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
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
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            },
            "range": [
              36,
              41
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                38,
                41
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            }
          },
          "range": [
            35,
            41
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 3
            },
            "start": {
              "column": 21,
              "line": 3
            }
          }
        }
      ],
      "range": [
        14,
        43
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
              49,
              50
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            49,
            50
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        45,
        51
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ForStatement",
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    82,
                    83
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  78,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                78,
                84
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              78,
              85
            ],
            "loc": {
              "end": {
                "column": 11,
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
          72,
          87
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 20,
            "line": 6
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
                61,
                62
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                65,
                67
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "range": [
              61,
              67
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 9,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          57,
          67
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "test": null,
      "update": null,
      "range": [
        52,
        87
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "x",
            "optional": false,
            "range": [
              92,
              93
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
            88,
            91
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          88,
          94
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        88,
        95
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ForStatement",
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    129,
                    130
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  125,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 7,
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
                125,
                131
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
              125,
              132
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
          }
        ],
        "range": [
          119,
          134
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 22,
            "line": 11
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
                108,
                109
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                112,
                114
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "range": [
              108,
              114
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          102,
          114
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "test": null,
      "update": null,
      "range": [
        97,
        134
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
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
                    156,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    160,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                },
                "range": [
                  156,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              152,
              163
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    172,
                    173
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  168,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "range": [
                168,
                174
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              168,
              175
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                  180,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  184,
                  185
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
              "range": [
                180,
                185
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              180,
              186
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          146,
          188
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "init": null,
      "test": null,
      "update": null,
      "range": [
        136,
        188
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
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
                    212,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 22
                    },
                    "start": {
                      "column": 10,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    216,
                    218
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
                },
                "range": [
                  212,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 22
                  },
                  "start": {
                    "column": 10,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              206,
              219
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    228,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
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
                  224,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "range": [
                224,
                230
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              224,
              231
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
          }
        ],
        "range": [
          200,
          233
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 10,
            "line": 21
          }
        }
      },
      "init": null,
      "test": null,
      "update": null,
      "range": [
        190,
        233
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ForStatement",
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    260,
                    261
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
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  256,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                256,
                262
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
            "range": [
              256,
              263
            ],
            "loc": {
              "end": {
                "column": 11,
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
                  268,
                  269
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
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  272,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              },
              "range": [
                268,
                273
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              268,
              274
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          250,
          276
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 15,
            "line": 26
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
                244,
                245
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "init": null,
            "range": [
              244,
              245
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 26
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          240,
          245
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "test": null,
      "update": null,
      "range": [
        235,
        276
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
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
                    298,
                    299
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                "init": null,
                "range": [
                  298,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              294,
              300
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    309,
                    310
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  305,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 7,
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
                305,
                311
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "range": [
              305,
              312
            ],
            "loc": {
              "end": {
                "column": 11,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  317,
                  318
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
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  321,
                  322
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
              "range": [
                317,
                322
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              317,
              323
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
          }
        ],
        "range": [
          288,
          325
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 10,
            "line": 31
          }
        }
      },
      "init": null,
      "test": null,
      "update": null,
      "range": [
        278,
        325
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
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
                    350,
                    351
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
                  350,
                  351
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
              346,
              352
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    361,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
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
                  357,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              "optional": false,
              "range": [
                357,
                363
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            "range": [
              357,
              364
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          }
        ],
        "range": [
          340,
          366
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 13,
            "line": 37
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          334,
          338
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 37
          },
          "start": {
            "column": 7,
            "line": 37
          }
        }
      },
      "range": [
        327,
        366
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
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
                    393,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 43
                    },
                    "start": {
                      "column": 10,
                      "line": 43
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    397,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 43
                    },
                    "start": {
                      "column": 14,
                      "line": 43
                    }
                  }
                },
                "range": [
                  393,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 43
                  },
                  "start": {
                    "column": 10,
                    "line": 43
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              387,
              402
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    411,
                    412
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
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
                  407,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              "optional": false,
              "range": [
                407,
                413
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              407,
              414
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
          381,
          416
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 13,
            "line": 42
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          375,
          379
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 42
          },
          "start": {
            "column": 7,
            "line": 42
          }
        }
      },
      "range": [
        368,
        416
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
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
                    431,
                    432
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
                "init": null,
                "range": [
                  431,
                  432
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
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              427,
              433
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    442,
                    443
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
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
                  438,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "range": [
                438,
                444
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              438,
              445
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "range": [
          421,
          447
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 3,
            "line": 47
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          455,
          459
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 50
          },
          "start": {
            "column": 9,
            "line": 50
          }
        }
      },
      "range": [
        418,
        461
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
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
                    476,
                    477
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
                  476,
                  477
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
            "kind": "let",
            "range": [
              472,
              478
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    487,
                    488
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  483,
                  486
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 54
                  },
                  "start": {
                    "column": 4,
                    "line": 54
                  }
                }
              },
              "optional": false,
              "range": [
                483,
                489
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
                }
              }
            },
            "range": [
              483,
              490
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "range": [
          466,
          492
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 3,
            "line": 52
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          500,
          504
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
      "range": [
        463,
        506
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "ForInStatement",
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    536,
                    537
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  532,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 58
                  }
                }
              },
              "optional": false,
              "range": [
                532,
                538
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            },
            "range": [
              532,
              539
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          }
        ],
        "range": [
          526,
          541
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 18,
            "line": 57
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
                517,
                518
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 57
                },
                "start": {
                  "column": 9,
                  "line": 57
                }
              }
            },
            "init": null,
            "range": [
              517,
              518
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 57
              },
              "start": {
                "column": 9,
                "line": 57
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          513,
          518
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 57
          },
          "start": {
            "column": 5,
            "line": 57
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          522,
          524
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 57
          },
          "start": {
            "column": 14,
            "line": 57
          }
        }
      },
      "range": [
        508,
        541
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "ForInStatement",
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    573,
                    574
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
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
                  569,
                  572
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 62
                  },
                  "start": {
                    "column": 4,
                    "line": 62
                  }
                }
              },
              "optional": false,
              "range": [
                569,
                575
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 62
                }
              }
            },
            "range": [
              569,
              576
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          }
        ],
        "range": [
          563,
          578
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 20,
            "line": 61
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
                554,
                555
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
            },
            "init": null,
            "range": [
              554,
              555
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
        "declare": false,
        "kind": "const",
        "range": [
          548,
          555
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 61
          },
          "start": {
            "column": 5,
            "line": 61
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          559,
          561
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 61
          },
          "start": {
            "column": 16,
            "line": 61
          }
        }
      },
      "range": [
        543,
        578
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    610,
                    611
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
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
                  606,
                  609
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 66
                  },
                  "start": {
                    "column": 4,
                    "line": 66
                  }
                }
              },
              "optional": false,
              "range": [
                606,
                612
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 66
                }
              }
            },
            "range": [
              606,
              613
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "range": [
          600,
          615
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 20,
            "line": 65
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
                591,
                592
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 65
                },
                "start": {
                  "column": 11,
                  "line": 65
                }
              }
            },
            "init": null,
            "range": [
              591,
              592
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 65
              },
              "start": {
                "column": 11,
                "line": 65
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          585,
          592
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 65
          },
          "start": {
            "column": 5,
            "line": 65
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          596,
          598
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 65
          },
          "start": {
            "column": 16,
            "line": 65
          }
        }
      },
      "range": [
        580,
        615
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 65
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 67
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
