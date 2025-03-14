__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    976
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 1
                },
                "start": {
                  "column": 6,
                  "line": 1
                }
              },
              "range": [
                6,
                11
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  8,
                  11
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 1
                  },
                  "start": {
                    "column": 8,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            11
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              },
              "range": [
                19,
                24
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  21,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              17,
              24
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            17,
            24
          ],
          "loc": {
            "end": {
              "column": 11,
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
      "kind": "var",
      "range": [
        13,
        25
      ],
      "loc": {
        "end": {
          "column": 12,
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 5
                      },
                      "start": {
                        "column": 9,
                        "line": 5
                      }
                    },
                    "range": [
                      52,
                      59
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          54,
                          57
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 5
                          },
                          "start": {
                            "column": 11,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        54,
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 5
                        },
                        "start": {
                          "column": 11,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    49,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 6,
                      "line": 5
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    62,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 19,
                      "line": 5
                    }
                  }
                },
                "range": [
                  49,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 5
                  },
                  "start": {
                    "column": 6,
                    "line": 5
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              45,
              65
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
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
                      "raw": "'zero or one'",
                      "value": "zero or one",
                      "range": [
                        137,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 9
                        },
                        "start": {
                          "column": 13,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      130,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 9
                      },
                      "start": {
                        "column": 6,
                        "line": 9
                      }
                    }
                  }
                ],
                "test": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        118,
                        119
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 8
                        },
                        "start": {
                          "column": 9,
                          "line": 8
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        121,
                        122
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
                    }
                  ],
                  "range": [
                    118,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                },
                "range": [
                  113,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 8
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
                      "raw": "'more than one'",
                      "value": "more than one",
                      "range": [
                        178,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 11
                        },
                        "start": {
                          "column": 13,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      171,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 11
                      },
                      "start": {
                        "column": 6,
                        "line": 11
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  156,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 10
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
                "name": "arr",
                "optional": false,
                "range": [
                  75,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 6
                  },
                  "start": {
                    "column": 9,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  79,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 6
                  },
                  "start": {
                    "column": 13,
                    "line": 6
                  }
                }
              },
              "range": [
                75,
                85
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "range": [
              68,
              198
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "range": [
          41,
          200
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "range": [
          36,
          38
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [],
      "range": [
        27,
        200
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
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
            "name": "x",
            "optional": false,
            "range": [
              222,
              223
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      236,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 16
                      },
                      "start": {
                        "column": 18,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "5",
                    "value": 5,
                    "range": [
                      239,
                      240
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 16
                      },
                      "start": {
                        "column": 21,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  236,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 16
                  },
                  "start": {
                    "column": 18,
                    "line": 16
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  243,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 16
                  },
                  "start": {
                    "column": 25,
                    "line": 16
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
                "name": "Math",
                "optional": false,
                "range": [
                  226,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "pow",
                "optional": false,
                "range": [
                  231,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 16
                  },
                  "start": {
                    "column": 13,
                    "line": 16
                  }
                }
              },
              "range": [
                226,
                234
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              226,
              245
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 16
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          },
          "range": [
            222,
            245
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        218,
        246
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 16
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
            "name": "a",
            "optional": false,
            "range": [
              268,
              269
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    274,
                    275
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 19
                    },
                    "start": {
                      "column": 10,
                      "line": 19
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    278,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 19
                    },
                    "start": {
                      "column": 14,
                      "line": 19
                    }
                  }
                },
                "range": [
                  274,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                }
              },
              {
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          284,
                          285
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 19
                          },
                          "start": {
                            "column": 20,
                            "line": 19
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          288,
                          289
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 19
                          },
                          "start": {
                            "column": 24,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        284,
                        289
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 19
                        },
                        "start": {
                          "column": 20,
                          "line": 19
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "8",
                      "value": 8,
                      "range": [
                        291,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 19
                        },
                        "start": {
                          "column": 27,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "range": [
                    284,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 19
                    },
                    "start": {
                      "column": 20,
                      "line": 19
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    296,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 19
                    },
                    "start": {
                      "column": 32,
                      "line": 19
                    }
                  }
                },
                "range": [
                  283,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 19
                  },
                  "start": {
                    "column": 19,
                    "line": 19
                  }
                }
              }
            ],
            "range": [
              272,
              299
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          "range": [
            268,
            299
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        264,
        300
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
          "name": "xx",
          "optional": false,
          "range": [
            317,
            319
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                323,
                324
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 22
                },
                "start": {
                  "column": 6,
                  "line": 22
                }
              }
            },
            {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                326,
                327
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            }
          ],
          "range": [
            323,
            327
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        },
        "range": [
          317,
          328
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        317,
        329
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 22
        },
        "start": {
          "column": 0,
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
          "name": "xx",
          "optional": false,
          "range": [
            330,
            332
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "raw": "''",
              "value": "",
              "range": [
                336,
                338
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 23
                },
                "start": {
                  "column": 6,
                  "line": 23
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "range": [
                340,
                342
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 23
                },
                "start": {
                  "column": 10,
                  "line": 23
                }
              }
            }
          ],
          "range": [
            336,
            342
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        },
        "range": [
          330,
          343
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        330,
        344
      ],
      "loc": {
        "end": {
          "column": 14,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "range": [
            345,
            347
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "raw": "/323/",
              "regex": {
                "flags": "",
                "pattern": "323"
              },
              "value": null,
              "range": [
                351,
                356
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 24
                },
                "start": {
                  "column": 6,
                  "line": 24
                }
              }
            },
            {
              "type": "Literal",
              "raw": "5",
              "value": 5,
              "range": [
                358,
                359
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
            }
          ],
          "range": [
            351,
            359
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        },
        "range": [
          345,
          360
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        345,
        361
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "range": [
                362,
                364
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 25
                },
                "start": {
                  "column": 0,
                  "line": 25
                }
              }
            },
            "right": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "TemplateLiteral",
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "wat",
                        "raw": "wat"
                      },
                      "range": [
                        368,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 25
                        },
                        "start": {
                          "column": 6,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "range": [
                    368,
                    373
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 25
                    },
                    "start": {
                      "column": 6,
                      "line": 25
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'ok'",
                  "value": "ok",
                  "range": [
                    375,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 25
                    },
                    "start": {
                      "column": 13,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                368,
                379
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 25
                },
                "start": {
                  "column": 6,
                  "line": 25
                }
              }
            },
            "range": [
              362,
              380
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 25
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "range": [
                382,
                384
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 26
                },
                "start": {
                  "column": 0,
                  "line": 26
                }
              }
            },
            "right": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    388,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 26
                    },
                    "start": {
                      "column": 6,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    394,
                    399
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 26
                    },
                    "start": {
                      "column": 12,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                388,
                399
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 26
                },
                "start": {
                  "column": 6,
                  "line": 26
                }
              }
            },
            "range": [
              382,
              400
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 26
              },
              "start": {
                "column": 0,
                "line": 26
              }
            }
          }
        ],
        "range": [
          362,
          400
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        362,
        401
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 25
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
          "name": "xx",
          "optional": false,
          "range": [
            402,
            404
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                408,
                413
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 27
                },
                "start": {
                  "column": 6,
                  "line": 27
                }
              }
            },
            {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                415,
                419
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 27
                },
                "start": {
                  "column": 13,
                  "line": 27
                }
              }
            }
          ],
          "range": [
            408,
            419
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        },
        "range": [
          402,
          420
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        402,
        421
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 27
        },
        "start": {
          "column": 0,
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
          "name": "xx",
          "optional": false,
          "range": [
            422,
            424
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                428,
                432
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
            {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "range": [
                434,
                436
              ],
              "loc": {
                "end": {
                  "column": 14,
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
            428,
            436
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        },
        "range": [
          422,
          437
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        422,
        438
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 28
        },
        "start": {
          "column": 0,
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
          "name": "xx",
          "optional": false,
          "range": [
            439,
            441
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                445,
                454
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
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                456,
                458
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 29
                },
                "start": {
                  "column": 17,
                  "line": 29
                }
              }
            }
          ],
          "range": [
            445,
            458
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        },
        "range": [
          439,
          459
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        439,
        460
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
          "name": "xx",
          "optional": false,
          "range": [
            461,
            463
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  473,
                  475
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 30
                  },
                  "start": {
                    "column": 12,
                    "line": 30
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                467,
                475
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 30
                },
                "start": {
                  "column": 6,
                  "line": 30
                }
              }
            },
            {
              "type": "Literal",
              "raw": "'no'",
              "value": "no",
              "range": [
                477,
                481
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 30
                },
                "start": {
                  "column": 16,
                  "line": 30
                }
              }
            }
          ],
          "range": [
            467,
            481
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        },
        "range": [
          461,
          482
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        461,
        483
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
          "name": "xx",
          "optional": false,
          "range": [
            484,
            486
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  501,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 31
                  },
                  "start": {
                    "column": 17,
                    "line": 31
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                490,
                504
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 31
                },
                "start": {
                  "column": 6,
                  "line": 31
                }
              }
            },
            {
              "type": "Literal",
              "raw": "100",
              "value": 100,
              "range": [
                506,
                509
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 31
                },
                "start": {
                  "column": 22,
                  "line": 31
                }
              }
            }
          ],
          "range": [
            490,
            509
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 31
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        },
        "range": [
          484,
          510
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        484,
        511
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
          "name": "xx",
          "optional": false,
          "range": [
            512,
            514
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                518,
                520
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 32
                },
                "start": {
                  "column": 6,
                  "line": 32
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                522,
                524
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 32
                },
                "start": {
                  "column": 10,
                  "line": 32
                }
              }
            }
          ],
          "range": [
            518,
            524
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        },
        "range": [
          512,
          525
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        512,
        526
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
          "name": "xx",
          "optional": false,
          "range": [
            527,
            529
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  540,
                  542
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 33
                  },
                  "start": {
                    "column": 13,
                    "line": 33
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                533,
                542
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 33
                },
                "start": {
                  "column": 6,
                  "line": 33
                }
              }
            },
            {
              "type": "Literal",
              "raw": "'unused'",
              "value": "unused",
              "range": [
                544,
                552
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 33
                },
                "start": {
                  "column": 17,
                  "line": 33
                }
              }
            }
          ],
          "range": [
            533,
            552
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        },
        "range": [
          527,
          553
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        527,
        554
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 33
        },
        "start": {
          "column": 0,
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
          "name": "xx",
          "optional": false,
          "range": [
            555,
            557
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    562,
                    563
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 34
                    },
                    "start": {
                      "column": 7,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    565,
                    566
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 34
                    },
                    "start": {
                      "column": 10,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      568,
                      569
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 34
                      },
                      "start": {
                        "column": 13,
                        "line": 34
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": false,
                  "range": [
                    568,
                    571
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 34
                    },
                    "start": {
                      "column": 13,
                      "line": 34
                    }
                  }
                }
              ],
              "range": [
                561,
                572
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 34
                },
                "start": {
                  "column": 6,
                  "line": 34
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "range": [
                574,
                576
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 34
                },
                "start": {
                  "column": 19,
                  "line": 34
                }
              }
            }
          ],
          "range": [
            561,
            576
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 34
            },
            "start": {
              "column": 6,
              "line": 34
            }
          }
        },
        "range": [
          555,
          577
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        555,
        578
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
          "name": "xx",
          "optional": false,
          "range": [
            579,
            581
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  585,
                  587
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 35
                  },
                  "start": {
                    "column": 6,
                    "line": 35
                  }
                }
              },
              "range": [
                585,
                588
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 35
                },
                "start": {
                  "column": 6,
                  "line": 35
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "range": [
                590,
                592
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 35
                }
              }
            }
          ],
          "range": [
            585,
            592
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        },
        "range": [
          579,
          593
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        579,
        594
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
          "name": "xx",
          "optional": false,
          "range": [
            595,
            597
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  610,
                  611
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 36
                  },
                  "start": {
                    "column": 15,
                    "line": 36
                  }
                }
              },
              "consequent": {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  606,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 36
                  },
                  "start": {
                    "column": 11,
                    "line": 36
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  601,
                  603
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 36
                  },
                  "start": {
                    "column": 6,
                    "line": 36
                  }
                }
              },
              "range": [
                601,
                611
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 36
                },
                "start": {
                  "column": 6,
                  "line": 36
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                613,
                615
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 36
                },
                "start": {
                  "column": 18,
                  "line": 36
                }
              }
            }
          ],
          "range": [
            601,
            615
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 36
            }
          }
        },
        "range": [
          595,
          616
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        595,
        617
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
          "name": "xx",
          "optional": false,
          "range": [
            618,
            620
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  624,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 37
                  },
                  "start": {
                    "column": 6,
                    "line": 37
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  628,
                  629
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 37
                  },
                  "start": {
                    "column": 10,
                    "line": 37
                  }
                }
              },
              "range": [
                624,
                629
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 37
                },
                "start": {
                  "column": 6,
                  "line": 37
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                631,
                633
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 37
                },
                "start": {
                  "column": 13,
                  "line": 37
                }
              }
            }
          ],
          "range": [
            624,
            633
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        },
        "range": [
          618,
          634
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        618,
        635
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
          "name": "xx",
          "optional": false,
          "range": [
            636,
            638
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 38
            },
            "start": {
              "column": 0,
              "line": 38
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  643,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 38
                  },
                  "start": {
                    "column": 7,
                    "line": 38
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                642,
                645
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 38
                },
                "start": {
                  "column": 6,
                  "line": 38
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                647,
                649
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 38
                },
                "start": {
                  "column": 11,
                  "line": 38
                }
              }
            }
          ],
          "range": [
            642,
            649
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        },
        "range": [
          636,
          650
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        636,
        651
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 38
        },
        "start": {
          "column": 0,
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
          "name": "xx",
          "optional": false,
          "range": [
            652,
            654
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 39
            },
            "start": {
              "column": 0,
              "line": 39
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  659,
                  661
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 39
                  },
                  "start": {
                    "column": 7,
                    "line": 39
                  }
                }
              },
              "operator": "~",
              "prefix": true,
              "range": [
                658,
                661
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 39
                },
                "start": {
                  "column": 6,
                  "line": 39
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                663,
                665
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 39
                },
                "start": {
                  "column": 11,
                  "line": 39
                }
              }
            }
          ],
          "range": [
            658,
            665
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 39
            }
          }
        },
        "range": [
          652,
          666
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        652,
        667
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
          "name": "xx",
          "optional": false,
          "range": [
            668,
            670
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  675,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 40
                  },
                  "start": {
                    "column": 7,
                    "line": 40
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                674,
                677
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 40
                },
                "start": {
                  "column": 6,
                  "line": 40
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                679,
                681
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 40
                },
                "start": {
                  "column": 11,
                  "line": 40
                }
              }
            }
          ],
          "range": [
            674,
            681
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        },
        "range": [
          668,
          682
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        668,
        683
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
          "name": "xx",
          "optional": false,
          "range": [
            684,
            686
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  691,
                  693
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 41
                  },
                  "start": {
                    "column": 7,
                    "line": 41
                  }
                }
              },
              "operator": "+",
              "prefix": true,
              "range": [
                690,
                693
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 41
                },
                "start": {
                  "column": 6,
                  "line": 41
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                695,
                697
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 41
                },
                "start": {
                  "column": 11,
                  "line": 41
                }
              }
            }
          ],
          "range": [
            690,
            697
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
        "range": [
          684,
          698
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        684,
        699
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
          "name": "xx",
          "optional": false,
          "range": [
            700,
            702
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  706,
                  707
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 42
                  },
                  "start": {
                    "column": 6,
                    "line": 42
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  709,
                  711
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 42
                  },
                  "start": {
                    "column": 9,
                    "line": 42
                  }
                }
              }
            ],
            "range": [
              706,
              711
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
              }
            }
          },
          "optional": false,
          "range": [
            705,
            714
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 42
            },
            "start": {
              "column": 5,
              "line": 42
            }
          }
        },
        "range": [
          700,
          714
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        700,
        715
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
          "name": "xx",
          "optional": false,
          "range": [
            729,
            731
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 45
            },
            "start": {
              "column": 0,
              "line": 45
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  746,
                  747
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 45
                  },
                  "start": {
                    "column": 17,
                    "line": 45
                  }
                }
              },
              "consequent": {
                "type": "UpdateExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    740,
                    741
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 45
                    },
                    "start": {
                      "column": 11,
                      "line": 45
                    }
                  }
                },
                "operator": "++",
                "prefix": false,
                "range": [
                  740,
                  743
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 45
                  },
                  "start": {
                    "column": 11,
                    "line": 45
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  735,
                  737
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 45
                  },
                  "start": {
                    "column": 6,
                    "line": 45
                  }
                }
              },
              "range": [
                735,
                747
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 45
                },
                "start": {
                  "column": 6,
                  "line": 45
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                749,
                751
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 45
                },
                "start": {
                  "column": 20,
                  "line": 45
                }
              }
            }
          ],
          "range": [
            735,
            751
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 45
            },
            "start": {
              "column": 6,
              "line": 45
            }
          }
        },
        "range": [
          729,
          752
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        729,
        753
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
          "name": "xx",
          "optional": false,
          "range": [
            754,
            756
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 46
            },
            "start": {
              "column": 0,
              "line": 46
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  762,
                  764
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 46
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              },
              "operator": "--",
              "prefix": true,
              "range": [
                760,
                764
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 46
                },
                "start": {
                  "column": 6,
                  "line": 46
                }
              }
            },
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                766,
                767
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
          "range": [
            760,
            767
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 46
            },
            "start": {
              "column": 6,
              "line": 46
            }
          }
        },
        "range": [
          754,
          768
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 46
          },
          "start": {
            "column": 0,
            "line": 46
          }
        }
      },
      "range": [
        754,
        769
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
          "name": "xx",
          "optional": false,
          "range": [
            770,
            772
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 47
            },
            "start": {
              "column": 0,
              "line": 47
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  776,
                  778
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 47
                  },
                  "start": {
                    "column": 6,
                    "line": 47
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  781,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 47
                  },
                  "start": {
                    "column": 11,
                    "line": 47
                  }
                }
              },
              "range": [
                776,
                782
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 47
                },
                "start": {
                  "column": 6,
                  "line": 47
                }
              }
            },
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                784,
                785
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 47
                },
                "start": {
                  "column": 14,
                  "line": 47
                }
              }
            }
          ],
          "range": [
            776,
            785
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 47
            },
            "start": {
              "column": 6,
              "line": 47
            }
          }
        },
        "range": [
          770,
          786
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 47
          },
          "start": {
            "column": 0,
            "line": 47
          }
        }
      },
      "range": [
        770,
        787
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
          "name": "xx",
          "optional": false,
          "range": [
            788,
            790
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 48
            },
            "start": {
              "column": 0,
              "line": 48
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  795,
                  797
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 48
                  },
                  "start": {
                    "column": 7,
                    "line": 48
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  800,
                  801
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 48
                  },
                  "start": {
                    "column": 12,
                    "line": 48
                  }
                }
              },
              "range": [
                795,
                801
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 48
                },
                "start": {
                  "column": 7,
                  "line": 48
                }
              }
            },
            {
              "type": "Literal",
              "raw": "5",
              "value": 5,
              "range": [
                804,
                805
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 48
                },
                "start": {
                  "column": 16,
                  "line": 48
                }
              }
            }
          ],
          "range": [
            794,
            805
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 48
            },
            "start": {
              "column": 6,
              "line": 48
            }
          }
        },
        "range": [
          788,
          806
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        788,
        807
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 48
        },
        "start": {
          "column": 0,
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
          "name": "xx",
          "optional": false,
          "range": [
            808,
            810
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 49
            },
            "start": {
              "column": 0,
              "line": 49
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  814,
                  816
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 49
                  },
                  "start": {
                    "column": 6,
                    "line": 49
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  819,
                  820
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 49
                  },
                  "start": {
                    "column": 11,
                    "line": 49
                  }
                }
              },
              "range": [
                814,
                820
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 49
                },
                "start": {
                  "column": 6,
                  "line": 49
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "range": [
                822,
                824
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 49
                },
                "start": {
                  "column": 14,
                  "line": 49
                }
              }
            }
          ],
          "range": [
            814,
            824
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 49
            },
            "start": {
              "column": 6,
              "line": 49
            }
          }
        },
        "range": [
          808,
          825
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        808,
        826
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
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
          "name": "xx",
          "optional": false,
          "range": [
            827,
            829
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 50
            },
            "start": {
              "column": 0,
              "line": 50
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  834,
                  836
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 50
                  },
                  "start": {
                    "column": 7,
                    "line": 50
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  839,
                  840
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 50
                  },
                  "start": {
                    "column": 12,
                    "line": 50
                  }
                }
              },
              "range": [
                834,
                840
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 50
                },
                "start": {
                  "column": 7,
                  "line": 50
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "range": [
                843,
                845
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 50
                },
                "start": {
                  "column": 16,
                  "line": 50
                }
              }
            }
          ],
          "range": [
            833,
            845
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 50
            },
            "start": {
              "column": 6,
              "line": 50
            }
          }
        },
        "range": [
          827,
          846
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 50
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        827,
        847
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
          "name": "xx",
          "optional": false,
          "range": [
            848,
            850
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 51
            },
            "start": {
              "column": 0,
              "line": 51
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    863,
                    864
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 51
                    },
                    "start": {
                      "column": 15,
                      "line": 51
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    866,
                    867
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 51
                    },
                    "start": {
                      "column": 18,
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
                  "name": "Math",
                  "optional": false,
                  "range": [
                    854,
                    858
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 51
                    },
                    "start": {
                      "column": 6,
                      "line": 51
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pow",
                  "optional": false,
                  "range": [
                    859,
                    862
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 51
                    },
                    "start": {
                      "column": 11,
                      "line": 51
                    }
                  }
                },
                "range": [
                  854,
                  862
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 51
                  },
                  "start": {
                    "column": 6,
                    "line": 51
                  }
                }
              },
              "optional": false,
              "range": [
                854,
                868
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 51
                },
                "start": {
                  "column": 6,
                  "line": 51
                }
              }
            },
            {
              "type": "Literal",
              "raw": "4",
              "value": 4,
              "range": [
                870,
                871
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 51
                },
                "start": {
                  "column": 22,
                  "line": 51
                }
              }
            }
          ],
          "range": [
            854,
            871
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 51
            },
            "start": {
              "column": 6,
              "line": 51
            }
          }
        },
        "range": [
          848,
          872
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 51
          },
          "start": {
            "column": 0,
            "line": 51
          }
        }
      },
      "range": [
        848,
        873
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 51
        },
        "start": {
          "column": 0,
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
          "name": "xx",
          "optional": false,
          "range": [
            874,
            876
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 52
            },
            "start": {
              "column": 0,
              "line": 52
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  885,
                  887
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 52
                  },
                  "start": {
                    "column": 11,
                    "line": 52
                  }
                }
              },
              "operator": "void",
              "prefix": true,
              "range": [
                880,
                887
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
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                889,
                891
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 52
                },
                "start": {
                  "column": 15,
                  "line": 52
                }
              }
            }
          ],
          "range": [
            880,
            891
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 52
            },
            "start": {
              "column": 6,
              "line": 52
            }
          }
        },
        "range": [
          874,
          892
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 52
          },
          "start": {
            "column": 0,
            "line": 52
          }
        }
      },
      "range": [
        874,
        893
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
          "name": "xx",
          "optional": false,
          "range": [
            894,
            896
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 53
            },
            "start": {
              "column": 0,
              "line": 53
            }
          }
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "range": [
                  900,
                  902
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 53
                  },
                  "start": {
                    "column": 6,
                    "line": 53
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  906,
                  909
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 53
                  },
                  "start": {
                    "column": 12,
                    "line": 53
                  }
                }
              },
              "range": [
                900,
                909
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 53
                },
                "start": {
                  "column": 6,
                  "line": 53
                }
              }
            },
            {
              "type": "Literal",
              "raw": "100",
              "value": 100,
              "range": [
                911,
                914
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 53
                },
                "start": {
                  "column": 17,
                  "line": 53
                }
              }
            }
          ],
          "range": [
            900,
            914
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 53
            },
            "start": {
              "column": 6,
              "line": 53
            }
          }
        },
        "range": [
          894,
          915
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 53
          }
        }
      },
      "range": [
        894,
        916
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
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
          "name": "xx",
          "optional": false,
          "range": [
            917,
            919
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  923,
                  924
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 54
                  },
                  "start": {
                    "column": 6,
                    "line": 54
                  }
                }
              },
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "range": [
                    926,
                    928
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 54
                    },
                    "start": {
                      "column": 9,
                      "line": 54
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "range": [
                    929,
                    931
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 54
                    },
                    "start": {
                      "column": 12,
                      "line": 54
                    }
                  }
                },
                "range": [
                  926,
                  931
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 54
                  },
                  "start": {
                    "column": 9,
                    "line": 54
                  }
                }
              }
            ],
            "range": [
              923,
              931
            ],
            "loc": {
              "end": {
                "column": 14,
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
            922,
            934
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 54
            },
            "start": {
              "column": 5,
              "line": 54
            }
          }
        },
        "range": [
          917,
          934
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        917,
        935
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
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
          "name": "xx",
          "optional": false,
          "range": [
            936,
            938
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 55
            },
            "start": {
              "column": 0,
              "line": 55
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  942,
                  943
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 55
                  },
                  "start": {
                    "column": 6,
                    "line": 55
                  }
                }
              },
              {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "range": [
                    945,
                    947
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 55
                    },
                    "start": {
                      "column": 9,
                      "line": 55
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "'fn'",
                  "value": "fn",
                  "range": [
                    948,
                    952
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 55
                    },
                    "start": {
                      "column": 12,
                      "line": 55
                    }
                  }
                },
                "range": [
                  945,
                  953
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 55
                  },
                  "start": {
                    "column": 9,
                    "line": 55
                  }
                }
              }
            ],
            "range": [
              942,
              953
            ],
            "loc": {
              "end": {
                "column": 17,
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
            941,
            956
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 55
            },
            "start": {
              "column": 5,
              "line": 55
            }
          }
        },
        "range": [
          936,
          956
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        936,
        957
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
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
          "name": "xx",
          "optional": false,
          "range": [
            958,
            960
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 56
            },
            "start": {
              "column": 0,
              "line": 56
            }
          }
        },
        "right": {
          "type": "TaggedTemplateExpression",
          "quasi": {
            "type": "TemplateLiteral",
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  973,
                  975
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 56
                  },
                  "start": {
                    "column": 15,
                    "line": 56
                  }
                }
              }
            ],
            "range": [
              973,
              975
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 56
              },
              "start": {
                "column": 15,
                "line": 56
              }
            }
          },
          "tag": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  964,
                  965
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 56
                  },
                  "start": {
                    "column": 6,
                    "line": 56
                  }
                }
              },
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "range": [
                    967,
                    969
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 56
                    },
                    "start": {
                      "column": 9,
                      "line": 56
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "range": [
                    970,
                    972
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 56
                    },
                    "start": {
                      "column": 12,
                      "line": 56
                    }
                  }
                },
                "range": [
                  967,
                  972
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 56
                  },
                  "start": {
                    "column": 9,
                    "line": 56
                  }
                }
              }
            ],
            "range": [
              964,
              972
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 56
              },
              "start": {
                "column": 6,
                "line": 56
              }
            }
          },
          "range": [
            963,
            975
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 56
            },
            "start": {
              "column": 5,
              "line": 56
            }
          }
        },
        "range": [
          958,
          975
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 56
          }
        }
      },
      "range": [
        958,
        976
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 18,
      "line": 56
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
