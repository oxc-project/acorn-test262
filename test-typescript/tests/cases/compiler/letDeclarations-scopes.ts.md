__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    10,
    1659
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
            "name": "l",
            "optional": false,
            "range": [
              14,
              15
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"string\"",
            "value": "string",
            "range": [
              18,
              26
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            14,
            26
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        10,
        27
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                34,
                42
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  36,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              33,
              42
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            33,
            42
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        29,
        43
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    139,
                    140
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
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    143,
                    144
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  139,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              135,
              145
            ],
            "loc": {
              "end": {
                "column": 14,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  150,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  154,
                  155
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
              "range": [
                150,
                155
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              150,
              156
            ],
            "loc": {
              "end": {
                "column": 10,
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
          129,
          158
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    104,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    108,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                "range": [
                  104,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              100,
              110
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
                "name": "n",
                "optional": false,
                "range": [
                  115,
                  116
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
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  119,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              },
              "range": [
                115,
                120
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              115,
              121
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          94,
          123
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          88,
          92
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
      "range": [
        84,
        158
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 7
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    183,
                    184
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
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    187,
                    188
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
                "range": [
                  183,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
              179,
              189
            ],
            "loc": {
              "end": {
                "column": 14,
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
                "name": "n",
                "optional": false,
                "range": [
                  194,
                  195
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
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  198,
                  199
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
                194,
                199
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
              194,
              200
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
          173,
          202
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 13,
            "line": 16
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          167,
          171
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "range": [
        160,
        202
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 16
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    216,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 22
                    },
                    "start": {
                      "column": 7,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    220,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 22
                    },
                    "start": {
                      "column": 11,
                      "line": 22
                    }
                  }
                },
                "range": [
                  216,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 22
                  },
                  "start": {
                    "column": 7,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              212,
              222
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 22
              },
              "start": {
                "column": 3,
                "line": 22
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
                "name": "n",
                "optional": false,
                "range": [
                  227,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  231,
                  232
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
              },
              "range": [
                227,
                232
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              227,
              233
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
          }
        ],
        "range": [
          207,
          235
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 3,
            "line": 21
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          243,
          247
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "range": [
        204,
        249
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 24
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
            "name": "obj",
            "optional": false,
            "range": [
              255,
              258
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": null,
          "range": [
            255,
            258
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        251,
        259
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "WithStatement",
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    281,
                    282
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
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    285,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 28
                    },
                    "start": {
                      "column": 12,
                      "line": 28
                    }
                  }
                },
                "range": [
                  281,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              277,
              287
            ],
            "loc": {
              "end": {
                "column": 14,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  292,
                  293
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  296,
                  297
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
              "range": [
                292,
                297
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "range": [
              292,
              298
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
          }
        ],
        "range": [
          271,
          300
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 11,
            "line": 27
          }
        }
      },
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "range": [
          266,
          269
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
          }
        }
      },
      "range": [
        260,
        300
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 27
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    341,
                    342
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
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    345,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 33
                    },
                    "start": {
                      "column": 12,
                      "line": 33
                    }
                  }
                },
                "range": [
                  341,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
              337,
              347
            ],
            "loc": {
              "end": {
                "column": 14,
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
                "name": "n",
                "optional": false,
                "range": [
                  352,
                  353
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
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  356,
                  357
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
                352,
                357
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
              352,
              358
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
          331,
          360
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 29,
            "line": 32
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
              "name": "i",
              "optional": false,
              "range": [
                311,
                312
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 32
                },
                "start": {
                  "column": 9,
                  "line": 32
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                315,
                316
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 32
                },
                "start": {
                  "column": 13,
                  "line": 32
                }
              }
            },
            "range": [
              311,
              316
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 32
              },
              "start": {
                "column": 9,
                "line": 32
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          307,
          316
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            318,
            319
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 32
            },
            "start": {
              "column": 16,
              "line": 32
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            322,
            324
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 32
            },
            "start": {
              "column": 20,
              "line": 32
            }
          }
        },
        "range": [
          318,
          324
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 32
          },
          "start": {
            "column": 16,
            "line": 32
          }
        }
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            326,
            327
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 32
            },
            "start": {
              "column": 24,
              "line": 32
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          326,
          329
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 32
          },
          "start": {
            "column": 24,
            "line": 32
          }
        }
      },
      "range": [
        302,
        360
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    391,
                    392
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
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    395,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 38
                    },
                    "start": {
                      "column": 12,
                      "line": 38
                    }
                  }
                },
                "range": [
                  391,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
              387,
              397
            ],
            "loc": {
              "end": {
                "column": 14,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  402,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  406,
                  407
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
              },
              "range": [
                402,
                407
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            "range": [
              402,
              408
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
          }
        ],
        "range": [
          381,
          410
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 19,
            "line": 37
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
              "name": "i2",
              "optional": false,
              "range": [
                371,
                373
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
            "init": null,
            "range": [
              371,
              373
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
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          367,
          373
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 37
          },
          "start": {
            "column": 5,
            "line": 37
          }
        }
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "range": [
          377,
          379
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 37
          },
          "start": {
            "column": 15,
            "line": 37
          }
        }
      },
      "range": [
        362,
        410
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
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "body": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "range": [
                      439,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 43
                      },
                      "start": {
                        "column": 15,
                        "line": 43
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      443,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 43
                      },
                      "start": {
                        "column": 19,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    439,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 43
                    },
                    "start": {
                      "column": 15,
                      "line": 43
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                435,
                445
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 43
                },
                "start": {
                  "column": 11,
                  "line": 43
                }
              }
            },
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "range": [
                428,
                433
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            "range": [
              428,
              445
            ],
            "loc": {
              "end": {
                "column": 21,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  450,
                  451
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  454,
                  455
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
              },
              "range": [
                450,
                455
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              450,
              456
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
          }
        ],
        "range": [
          422,
          458
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 10,
            "line": 42
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "true",
        "value": true,
        "range": [
          416,
          420
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 42
          },
          "start": {
            "column": 4,
            "line": 42
          }
        }
      },
      "range": [
        412,
        458
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
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "body": {
              "type": "LabeledStatement",
              "body": {
                "type": "LabeledStatement",
                "body": {
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "range": [
                          508,
                          509
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 48
                          },
                          "start": {
                            "column": 32,
                            "line": 48
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          512,
                          513
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 48
                          },
                          "start": {
                            "column": 36,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        508,
                        513
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 48
                        },
                        "start": {
                          "column": 32,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    504,
                    514
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 48
                    },
                    "start": {
                      "column": 28,
                      "line": 48
                    }
                  }
                },
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "range": [
                    496,
                    502
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 48
                    },
                    "start": {
                      "column": 20,
                      "line": 48
                    }
                  }
                },
                "range": [
                  496,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 48
                  },
                  "start": {
                    "column": 20,
                    "line": 48
                  }
                }
              },
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label3",
                "optional": false,
                "range": [
                  488,
                  494
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 48
                  },
                  "start": {
                    "column": 12,
                    "line": 48
                  }
                }
              },
              "range": [
                488,
                514
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 48
                },
                "start": {
                  "column": 12,
                  "line": 48
                }
              }
            },
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label2",
              "optional": false,
              "range": [
                480,
                486
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
            "range": [
              480,
              514
            ],
            "loc": {
              "end": {
                "column": 38,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  519,
                  520
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  523,
                  524
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
              },
              "range": [
                519,
                524
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              519,
              525
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
          }
        ],
        "range": [
          474,
          527
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 14,
            "line": 47
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "false",
        "value": false,
        "range": [
          467,
          472
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 47
          },
          "start": {
            "column": 7,
            "line": 47
          }
        }
      },
      "range": [
        460,
        527
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 47
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    567,
                    568
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
                "init": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    571,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 53
                    },
                    "start": {
                      "column": 12,
                      "line": 53
                    }
                  }
                },
                "range": [
                  567,
                  575
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
              563,
              576
            ],
            "loc": {
              "end": {
                "column": 17,
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
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 54
                      },
                      "start": {
                        "column": 10,
                        "line": 54
                      }
                    },
                    "range": [
                      587,
                      596
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        589,
                        596
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 54
                        },
                        "start": {
                          "column": 12,
                          "line": 54
                        }
                      }
                    }
                  },
                  "range": [
                    585,
                    596
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    599,
                    600
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 54
                    },
                    "start": {
                      "column": 22,
                      "line": 54
                    }
                  }
                },
                "range": [
                  585,
                  600
                ],
                "loc": {
                  "end": {
                    "column": 23,
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
            "kind": "var",
            "range": [
              581,
              601
            ],
            "loc": {
              "end": {
                "column": 24,
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
          557,
          603
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 28,
            "line": 52
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
              "name": "l",
              "optional": false,
              "range": [
                538,
                539
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 52
                },
                "start": {
                  "column": 9,
                  "line": 52
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                542,
                543
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 52
                },
                "start": {
                  "column": 13,
                  "line": 52
                }
              }
            },
            "range": [
              538,
              543
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 52
              },
              "start": {
                "column": 9,
                "line": 52
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          534,
          543
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 52
          },
          "start": {
            "column": 5,
            "line": 52
          }
        }
      },
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "range": [
            545,
            546
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 52
            },
            "start": {
              "column": 16,
              "line": 52
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "range": [
            549,
            550
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 52
            },
            "start": {
              "column": 20,
              "line": 52
            }
          }
        },
        "range": [
          545,
          550
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 52
          },
          "start": {
            "column": 16,
            "line": 52
          }
        }
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "range": [
            552,
            553
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 52
            },
            "start": {
              "column": 23,
              "line": 52
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          552,
          555
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 52
          },
          "start": {
            "column": 23,
            "line": 52
          }
        }
      },
      "range": [
        529,
        603
      ],
      "loc": {
        "end": {
          "column": 1,
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
        "body": [],
        "range": [
          623,
          627
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
              "name": "l",
              "optional": false,
              "range": [
                614,
                615
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
              614,
              615
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
          610,
          615
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
        "type": "ObjectExpression",
        "properties": [],
        "range": [
          619,
          621
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
        605,
        627
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
      "type": "TryStatement",
      "block": {
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    664,
                    665
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
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    668,
                    669
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 63
                    },
                    "start": {
                      "column": 12,
                      "line": 63
                    }
                  }
                },
                "range": [
                  664,
                  669
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 63
                  },
                  "start": {
                    "column": 8,
                    "line": 63
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              660,
              670
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
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
                "name": "n",
                "optional": false,
                "range": [
                  675,
                  676
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 64
                  },
                  "start": {
                    "column": 4,
                    "line": 64
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  679,
                  680
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              },
              "range": [
                675,
                680
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            "range": [
              675,
              681
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          }
        ],
        "range": [
          654,
          683
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 65
          },
          "start": {
            "column": 4,
            "line": 62
          }
        }
      },
      "finalizer": {
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    742,
                    743
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 71
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    746,
                    747
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 71
                    },
                    "start": {
                      "column": 12,
                      "line": 71
                    }
                  }
                },
                "range": [
                  742,
                  747
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 71
                  },
                  "start": {
                    "column": 8,
                    "line": 71
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              738,
              748
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
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
                "name": "n",
                "optional": false,
                "range": [
                  753,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 72
                  },
                  "start": {
                    "column": 4,
                    "line": 72
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  757,
                  758
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 72
                  },
                  "start": {
                    "column": 8,
                    "line": 72
                  }
                }
              },
              "range": [
                753,
                758
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
                }
              }
            },
            "range": [
              753,
              759
            ],
            "loc": {
              "end": {
                "column": 10,
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
          732,
          761
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 8,
            "line": 70
          }
        }
      },
      "handler": {
        "type": "CatchClause",
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
                    "name": "l",
                    "optional": false,
                    "range": [
                      704,
                      705
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
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      708,
                      709
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
                    704,
                    709
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
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                700,
                710
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 67
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
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "range": [
                    715,
                    716
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 68
                    },
                    "start": {
                      "column": 4,
                      "line": 68
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "range": [
                    719,
                    720
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 68
                    },
                    "start": {
                      "column": 8,
                      "line": 68
                    }
                  }
                },
                "range": [
                  715,
                  720
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 68
                  },
                  "start": {
                    "column": 4,
                    "line": 68
                  }
                }
              },
              "range": [
                715,
                721
              ],
              "loc": {
                "end": {
                  "column": 10,
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
            694,
            723
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 69
            },
            "start": {
              "column": 10,
              "line": 66
            }
          }
        },
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            691,
            692
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 66
            },
            "start": {
              "column": 7,
              "line": 66
            }
          }
        },
        "range": [
          684,
          723
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 0,
            "line": 66
          }
        }
      },
      "range": [
        650,
        761
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 62
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
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "range": [
                      810,
                      811
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 78
                      },
                      "start": {
                        "column": 12,
                        "line": 78
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      814,
                      815
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 78
                      },
                      "start": {
                        "column": 16,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    810,
                    815
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 78
                    },
                    "start": {
                      "column": 12,
                      "line": 78
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                806,
                816
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 78
                },
                "start": {
                  "column": 8,
                  "line": 78
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
                  "name": "n",
                  "optional": false,
                  "range": [
                    825,
                    826
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "range": [
                    829,
                    830
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
                  825,
                  830
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
                825,
                831
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
            },
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                840,
                846
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 80
                },
                "start": {
                  "column": 8,
                  "line": 80
                }
              }
            }
          ],
          "test": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              795,
              796
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 77
              },
              "start": {
                "column": 9,
                "line": 77
              }
            }
          },
          "range": [
            790,
            846
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 80
            },
            "start": {
              "column": 4,
              "line": 77
            }
          }
        }
      ],
      "discriminant": {
        "type": "Literal",
        "raw": "0",
        "value": 0,
        "range": [
          781,
          782
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 76
          },
          "start": {
            "column": 8,
            "line": 76
          }
        }
      },
      "range": [
        773,
        848
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 76
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
                "name": "l",
                "optional": false,
                "range": [
                  870,
                  871
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
              },
              "init": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  874,
                  875
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 85
                  },
                  "start": {
                    "column": 12,
                    "line": 85
                  }
                }
              },
              "range": [
                870,
                875
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 85
                },
                "start": {
                  "column": 8,
                  "line": 85
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            866,
            876
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 85
            },
            "start": {
              "column": 4,
              "line": 85
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
              "name": "n",
              "optional": false,
              "range": [
                881,
                882
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 86
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "range": [
                885,
                886
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 86
                },
                "start": {
                  "column": 8,
                  "line": 86
                }
              }
            },
            "range": [
              881,
              886
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          },
          "range": [
            881,
            887
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 86
            },
            "start": {
              "column": 4,
              "line": 86
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
                    "name": "l",
                    "optional": false,
                    "range": [
                      906,
                      907
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 88
                      },
                      "start": {
                        "column": 12,
                        "line": 88
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      910,
                      915
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 88
                      },
                      "start": {
                        "column": 16,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    906,
                    915
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 88
                    },
                    "start": {
                      "column": 12,
                      "line": 88
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                902,
                916
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 88
                },
                "start": {
                  "column": 8,
                  "line": 88
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 89
                        },
                        "start": {
                          "column": 13,
                          "line": 89
                        }
                      },
                      "range": [
                        930,
                        939
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          932,
                          939
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 89
                          },
                          "start": {
                            "column": 15,
                            "line": 89
                          }
                        }
                      }
                    },
                    "range": [
                      929,
                      939
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 89
                      },
                      "start": {
                        "column": 12,
                        "line": 89
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "range": [
                      942,
                      943
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 89
                      },
                      "start": {
                        "column": 25,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    929,
                    943
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 89
                    },
                    "start": {
                      "column": 12,
                      "line": 89
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                925,
                944
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 89
                },
                "start": {
                  "column": 8,
                  "line": 89
                }
              }
            }
          ],
          "range": [
            892,
            950
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 90
            },
            "start": {
              "column": 4,
              "line": 87
            }
          }
        }
      ],
      "range": [
        860,
        952
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 84
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    990,
                    991
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 95
                    },
                    "start": {
                      "column": 8,
                      "line": 95
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    994,
                    995
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 95
                    },
                    "start": {
                      "column": 12,
                      "line": 95
                    }
                  }
                },
                "range": [
                  990,
                  995
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 95
                  },
                  "start": {
                    "column": 8,
                    "line": 95
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              986,
              996
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 95
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
                "name": "n",
                "optional": false,
                "range": [
                  1001,
                  1002
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 96
                  },
                  "start": {
                    "column": 4,
                    "line": 96
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  1005,
                  1006
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
              },
              "range": [
                1001,
                1006
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 96
                },
                "start": {
                  "column": 4,
                  "line": 96
                }
              }
            },
            "range": [
              1001,
              1007
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
          }
        ],
        "range": [
          980,
          1009
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 97
          },
          "start": {
            "column": 13,
            "line": 94
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "range": [
          976,
          977
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 94
          },
          "start": {
            "column": 9,
            "line": 94
          }
        }
      },
      "params": [],
      "range": [
        967,
        1009
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 94
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
            "name": "F2",
            "optional": false,
            "range": [
              1015,
              1017
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
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
                        "name": "l",
                        "optional": false,
                        "range": [
                          1036,
                          1037
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 100
                          },
                          "start": {
                            "column": 8,
                            "line": 100
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1040,
                          1041
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 100
                          },
                          "start": {
                            "column": 12,
                            "line": 100
                          }
                        }
                      },
                      "range": [
                        1036,
                        1041
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 100
                        },
                        "start": {
                          "column": 8,
                          "line": 100
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1032,
                    1042
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 100
                    },
                    "start": {
                      "column": 4,
                      "line": 100
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
                      "name": "n",
                      "optional": false,
                      "range": [
                        1047,
                        1048
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 101
                        },
                        "start": {
                          "column": 4,
                          "line": 101
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "range": [
                        1051,
                        1052
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
                    "range": [
                      1047,
                      1052
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 101
                      },
                      "start": {
                        "column": 4,
                        "line": 101
                      }
                    }
                  },
                  "range": [
                    1047,
                    1053
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
                }
              ],
              "range": [
                1026,
                1055
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 102
                },
                "start": {
                  "column": 15,
                  "line": 99
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              1020,
              1055
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 102
              },
              "start": {
                "column": 9,
                "line": 99
              }
            }
          },
          "range": [
            1015,
            1055
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 102
            },
            "start": {
              "column": 4,
              "line": 99
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1011,
        1056
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 99
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
            "name": "F3",
            "optional": false,
            "range": [
              1062,
              1064
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
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
                        "name": "l",
                        "optional": false,
                        "range": [
                          1089,
                          1090
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 105
                          },
                          "start": {
                            "column": 8,
                            "line": 105
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1093,
                          1094
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 105
                          },
                          "start": {
                            "column": 12,
                            "line": 105
                          }
                        }
                      },
                      "range": [
                        1089,
                        1094
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 105
                        },
                        "start": {
                          "column": 8,
                          "line": 105
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1085,
                    1095
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 105
                    },
                    "start": {
                      "column": 4,
                      "line": 105
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
                      "name": "n",
                      "optional": false,
                      "range": [
                        1100,
                        1101
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 106
                        },
                        "start": {
                          "column": 4,
                          "line": 106
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "range": [
                        1104,
                        1105
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
                    "range": [
                      1100,
                      1105
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 106
                      },
                      "start": {
                        "column": 4,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    1100,
                    1106
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 106
                    },
                    "start": {
                      "column": 4,
                      "line": 106
                    }
                  }
                }
              ],
              "range": [
                1079,
                1108
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 107
                },
                "start": {
                  "column": 21,
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
              1067,
              1108
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 107
              },
              "start": {
                "column": 9,
                "line": 104
              }
            }
          },
          "range": [
            1062,
            1108
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 107
            },
            "start": {
              "column": 4,
              "line": 104
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1058,
        1109
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 104
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "l",
                  "optional": false,
                  "range": [
                    1141,
                    1142
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 111
                    },
                    "start": {
                      "column": 8,
                      "line": 111
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1145,
                    1146
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 111
                    },
                    "start": {
                      "column": 12,
                      "line": 111
                    }
                  }
                },
                "range": [
                  1141,
                  1146
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 111
                  },
                  "start": {
                    "column": 8,
                    "line": 111
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1137,
              1147
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 111
              },
              "start": {
                "column": 4,
                "line": 111
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
                "name": "n",
                "optional": false,
                "range": [
                  1152,
                  1153
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 112
                  },
                  "start": {
                    "column": 4,
                    "line": 112
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "range": [
                  1156,
                  1157
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 112
                  },
                  "start": {
                    "column": 8,
                    "line": 112
                  }
                }
              },
              "range": [
                1152,
                1157
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 112
                },
                "start": {
                  "column": 4,
                  "line": 112
                }
              }
            },
            "range": [
              1152,
              1158
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 112
              },
              "start": {
                "column": 4,
                "line": 112
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
                      "name": "l",
                      "optional": false,
                      "range": [
                        1177,
                        1178
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 115
                        },
                        "start": {
                          "column": 11,
                          "line": 115
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        1181,
                        1186
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
                    "range": [
                      1177,
                      1186
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 115
                      },
                      "start": {
                        "column": 11,
                        "line": 115
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "let",
                "range": [
                  1173,
                  1187
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 115
                  },
                  "start": {
                    "column": 7,
                    "line": 115
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
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 116
                          },
                          "start": {
                            "column": 13,
                            "line": 116
                          }
                        },
                        "range": [
                          1201,
                          1210
                        ],
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1203,
                            1210
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 116
                            },
                            "start": {
                              "column": 15,
                              "line": 116
                            }
                          }
                        }
                      },
                      "range": [
                        1199,
                        1210
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 116
                        },
                        "start": {
                          "column": 11,
                          "line": 116
                        }
                      }
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "range": [
                        1213,
                        1214
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 116
                        },
                        "start": {
                          "column": 25,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      1199,
                      1214
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 116
                      },
                      "start": {
                        "column": 11,
                        "line": 116
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  1195,
                  1215
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 116
                  },
                  "start": {
                    "column": 7,
                    "line": 116
                  }
                }
              }
            ],
            "range": [
              1164,
              1221
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 114
              }
            }
          },
          {
            "type": "LabeledStatement",
            "body": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l2",
                    "optional": false,
                    "range": [
                      1238,
                      1240
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 119
                      },
                      "start": {
                        "column": 15,
                        "line": 119
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1243,
                      1244
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 119
                      },
                      "start": {
                        "column": 20,
                        "line": 119
                      }
                    }
                  },
                  "range": [
                    1238,
                    1244
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 119
                    },
                    "start": {
                      "column": 15,
                      "line": 119
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                1234,
                1245
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 119
                },
                "start": {
                  "column": 11,
                  "line": 119
                }
              }
            },
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "lable",
              "optional": false,
              "range": [
                1227,
                1232
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 119
                },
                "start": {
                  "column": 4,
                  "line": 119
                }
              }
            },
            "range": [
              1227,
              1245
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 119
              },
              "start": {
                "column": 4,
                "line": 119
              }
            }
          }
        ],
        "range": [
          1131,
          1247
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 120
          },
          "start": {
            "column": 9,
            "line": 110
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1129,
          1130
        ],
        "decorators": [],
        "name": "m",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 110
          },
          "start": {
            "column": 7,
            "line": 110
          }
        }
      },
      "kind": "module",
      "range": [
        1122,
        1247
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 110
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1268,
          1520
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1274,
                1285
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 124
                },
                "start": {
                  "column": 4,
                  "line": 124
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1285,
                1329
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
                          "name": "l",
                          "optional": false,
                          "range": [
                            1302,
                            1303
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 125
                            },
                            "start": {
                              "column": 12,
                              "line": 125
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            1306,
                            1307
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 125
                            },
                            "start": {
                              "column": 16,
                              "line": 125
                            }
                          }
                        },
                        "range": [
                          1302,
                          1307
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 125
                          },
                          "start": {
                            "column": 12,
                            "line": 125
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      1298,
                      1308
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 125
                      },
                      "start": {
                        "column": 8,
                        "line": 125
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          1317,
                          1318
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 126
                          },
                          "start": {
                            "column": 8,
                            "line": 126
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "range": [
                          1321,
                          1322
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 126
                          },
                          "start": {
                            "column": 12,
                            "line": 126
                          }
                        }
                      },
                      "range": [
                        1317,
                        1322
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 126
                        },
                        "start": {
                          "column": 8,
                          "line": 126
                        }
                      }
                    },
                    "range": [
                      1317,
                      1323
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 126
                      },
                      "start": {
                        "column": 8,
                        "line": 126
                      }
                    }
                  }
                ],
                "range": [
                  1288,
                  1329
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 127
                  },
                  "start": {
                    "column": 18,
                    "line": 124
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
                  "line": 127
                },
                "start": {
                  "column": 15,
                  "line": 124
                }
              }
            },
            "range": [
              1274,
              1329
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 127
              },
              "start": {
                "column": 4,
                "line": 124
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
              "name": "method",
              "optional": false,
              "range": [
                1335,
                1341
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 129
                },
                "start": {
                  "column": 4,
                  "line": 129
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
                1341,
                1385
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
                          "name": "l",
                          "optional": false,
                          "range": [
                            1358,
                            1359
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 130
                            },
                            "start": {
                              "column": 12,
                              "line": 130
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            1362,
                            1363
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 130
                            },
                            "start": {
                              "column": 16,
                              "line": 130
                            }
                          }
                        },
                        "range": [
                          1358,
                          1363
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 130
                          },
                          "start": {
                            "column": 12,
                            "line": 130
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      1354,
                      1364
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 130
                      },
                      "start": {
                        "column": 8,
                        "line": 130
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          1373,
                          1374
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 131
                          },
                          "start": {
                            "column": 8,
                            "line": 131
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "range": [
                          1377,
                          1378
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 131
                          },
                          "start": {
                            "column": 12,
                            "line": 131
                          }
                        }
                      },
                      "range": [
                        1373,
                        1378
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 131
                        },
                        "start": {
                          "column": 8,
                          "line": 131
                        }
                      }
                    },
                    "range": [
                      1373,
                      1379
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 131
                      },
                      "start": {
                        "column": 8,
                        "line": 131
                      }
                    }
                  }
                ],
                "range": [
                  1344,
                  1385
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 132
                  },
                  "start": {
                    "column": 13,
                    "line": 129
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
                  "line": 132
                },
                "start": {
                  "column": 10,
                  "line": 129
                }
              }
            },
            "range": [
              1335,
              1385
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 132
              },
              "start": {
                "column": 4,
                "line": 129
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
              "name": "v",
              "optional": false,
              "range": [
                1395,
                1396
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 134
                },
                "start": {
                  "column": 8,
                  "line": 134
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
                1396,
                1458
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
                          "name": "l",
                          "optional": false,
                          "range": [
                            1413,
                            1414
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 135
                            },
                            "start": {
                              "column": 12,
                              "line": 135
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            1417,
                            1418
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 135
                            },
                            "start": {
                              "column": 16,
                              "line": 135
                            }
                          }
                        },
                        "range": [
                          1413,
                          1418
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 135
                          },
                          "start": {
                            "column": 12,
                            "line": 135
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      1409,
                      1419
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 135
                      },
                      "start": {
                        "column": 8,
                        "line": 135
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          1428,
                          1429
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 136
                          },
                          "start": {
                            "column": 8,
                            "line": 136
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "range": [
                          1432,
                          1433
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 136
                          },
                          "start": {
                            "column": 12,
                            "line": 136
                          }
                        }
                      },
                      "range": [
                        1428,
                        1433
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 136
                        },
                        "start": {
                          "column": 8,
                          "line": 136
                        }
                      }
                    },
                    "range": [
                      1428,
                      1434
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 136
                      },
                      "start": {
                        "column": 8,
                        "line": 136
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        1450,
                        1451
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 137
                        },
                        "start": {
                          "column": 15,
                          "line": 137
                        }
                      }
                    },
                    "range": [
                      1443,
                      1452
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 137
                      },
                      "start": {
                        "column": 8,
                        "line": 137
                      }
                    }
                  }
                ],
                "range": [
                  1399,
                  1458
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 138
                  },
                  "start": {
                    "column": 12,
                    "line": 134
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
                  "line": 138
                },
                "start": {
                  "column": 9,
                  "line": 134
                }
              }
            },
            "range": [
              1391,
              1458
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 138
              },
              "start": {
                "column": 4,
                "line": 134
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
              "name": "v",
              "optional": false,
              "range": [
                1468,
                1469
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 140
                },
                "start": {
                  "column": 8,
                  "line": 140
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
                1469,
                1518
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
                          "name": "l",
                          "optional": false,
                          "range": [
                            1491,
                            1492
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 141
                            },
                            "start": {
                              "column": 12,
                              "line": 141
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            1495,
                            1496
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
                        },
                        "range": [
                          1491,
                          1496
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 141
                          },
                          "start": {
                            "column": 12,
                            "line": 141
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      1487,
                      1497
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 141
                      },
                      "start": {
                        "column": 8,
                        "line": 141
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          1506,
                          1507
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 142
                          },
                          "start": {
                            "column": 8,
                            "line": 142
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "range": [
                          1510,
                          1511
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 142
                          },
                          "start": {
                            "column": 12,
                            "line": 142
                          }
                        }
                      },
                      "range": [
                        1506,
                        1511
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 142
                        },
                        "start": {
                          "column": 8,
                          "line": 142
                        }
                      }
                    },
                    "range": [
                      1506,
                      1512
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 142
                      },
                      "start": {
                        "column": 8,
                        "line": 142
                      }
                    }
                  }
                ],
                "range": [
                  1477,
                  1518
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 143
                  },
                  "start": {
                    "column": 17,
                    "line": 140
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
                    1470,
                    1475
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 140
                    },
                    "start": {
                      "column": 10,
                      "line": 140
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 143
                },
                "start": {
                  "column": 9,
                  "line": 140
                }
              }
            },
            "range": [
              1464,
              1518
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 143
              },
              "start": {
                "column": 4,
                "line": 140
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 144
          },
          "start": {
            "column": 8,
            "line": 123
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
          1266,
          1267
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 123
          },
          "start": {
            "column": 6,
            "line": 123
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1260,
        1520
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 144
        },
        "start": {
          "column": 0,
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
            "name": "o",
            "optional": false,
            "range": [
              1545,
              1546
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 147
              },
              "start": {
                "column": 4,
                "line": 147
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    1555,
                    1556
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 148
                    },
                    "start": {
                      "column": 4,
                      "line": 148
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1556,
                    1600
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
                              "name": "l",
                              "optional": false,
                              "range": [
                                1573,
                                1574
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 149
                                },
                                "start": {
                                  "column": 12,
                                  "line": 149
                                }
                              }
                            },
                            "init": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                1577,
                                1578
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 149
                                },
                                "start": {
                                  "column": 16,
                                  "line": 149
                                }
                              }
                            },
                            "range": [
                              1573,
                              1578
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 149
                              },
                              "start": {
                                "column": 12,
                                "line": 149
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          1569,
                          1579
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 149
                          },
                          "start": {
                            "column": 8,
                            "line": 149
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
                            "name": "n",
                            "optional": false,
                            "range": [
                              1588,
                              1589
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 150
                              },
                              "start": {
                                "column": 8,
                                "line": 150
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "l",
                            "optional": false,
                            "range": [
                              1592,
                              1593
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 150
                              },
                              "start": {
                                "column": 12,
                                "line": 150
                              }
                            }
                          },
                          "range": [
                            1588,
                            1593
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 150
                            },
                            "start": {
                              "column": 8,
                              "line": 150
                            }
                          }
                        },
                        "range": [
                          1588,
                          1594
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 150
                          },
                          "start": {
                            "column": 8,
                            "line": 150
                          }
                        }
                      }
                    ],
                    "range": [
                      1559,
                      1600
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 151
                      },
                      "start": {
                        "column": 8,
                        "line": 148
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
                      "line": 151
                    },
                    "start": {
                      "column": 5,
                      "line": 148
                    }
                  }
                },
                "range": [
                  1555,
                  1600
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 151
                  },
                  "start": {
                    "column": 4,
                    "line": 148
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "range": [
                    1606,
                    1608
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 152
                    },
                    "start": {
                      "column": 4,
                      "line": 152
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
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
                              "name": "l",
                              "optional": false,
                              "range": [
                                1630,
                                1631
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 153
                                },
                                "start": {
                                  "column": 12,
                                  "line": 153
                                }
                              }
                            },
                            "init": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                1634,
                                1635
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 153
                                },
                                "start": {
                                  "column": 16,
                                  "line": 153
                                }
                              }
                            },
                            "range": [
                              1630,
                              1635
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 153
                              },
                              "start": {
                                "column": 12,
                                "line": 153
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          1626,
                          1636
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 153
                          },
                          "start": {
                            "column": 8,
                            "line": 153
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
                            "name": "n",
                            "optional": false,
                            "range": [
                              1645,
                              1646
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 154
                              },
                              "start": {
                                "column": 8,
                                "line": 154
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "l",
                            "optional": false,
                            "range": [
                              1649,
                              1650
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 154
                              },
                              "start": {
                                "column": 12,
                                "line": 154
                              }
                            }
                          },
                          "range": [
                            1645,
                            1650
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 154
                            },
                            "start": {
                              "column": 8,
                              "line": 154
                            }
                          }
                        },
                        "range": [
                          1645,
                          1651
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 154
                          },
                          "start": {
                            "column": 8,
                            "line": 154
                          }
                        }
                      }
                    ],
                    "range": [
                      1616,
                      1657
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 155
                      },
                      "start": {
                        "column": 14,
                        "line": 152
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1610,
                    1657
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 155
                    },
                    "start": {
                      "column": 8,
                      "line": 152
                    }
                  }
                },
                "range": [
                  1606,
                  1657
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 155
                  },
                  "start": {
                    "column": 4,
                    "line": 152
                  }
                }
              }
            ],
            "range": [
              1549,
              1659
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 156
              },
              "start": {
                "column": 8,
                "line": 147
              }
            }
          },
          "range": [
            1545,
            1659
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 156
            },
            "start": {
              "column": 4,
              "line": 147
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1541,
        1659
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 156
        },
        "start": {
          "column": 0,
          "line": 147
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 156
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
