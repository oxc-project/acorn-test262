__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    15,
    805
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": true,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "symbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              },
              "range": [
                26,
                34
              ],
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "range": [
                  28,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              19,
              34
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            19,
            34
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        15,
        35
      ],
      "loc": {
        "end": {
          "column": 20,
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
            "name": "str",
            "optional": false,
            "range": [
              40,
              43
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"hello \"",
            "value": "hello ",
            "range": [
              46,
              54
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 10,
                "line": 4
              }
            }
          },
          "range": [
            40,
            54
          ],
          "loc": {
            "end": {
              "column": 18,
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
      "kind": "let",
      "range": [
        36,
        55
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 4
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
            "name": "templateStr",
            "optional": false,
            "range": [
              63,
              74
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "symbol",
                "optional": false,
                "range": [
                  86,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 6
                  },
                  "start": {
                    "column": 29,
                    "line": 6
                  }
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "hello ",
                  "raw": "hello "
                },
                "range": [
                  77,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
                    "line": 6
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  92,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 6
                  },
                  "start": {
                    "column": 35,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              77,
              94
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
              }
            }
          },
          "range": [
            63,
            94
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        57,
        95
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 6
        },
        "start": {
          "column": 0,
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
            "name": "appendStr",
            "optional": false,
            "range": [
              102,
              111
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Literal",
              "raw": "\"hello \"",
              "value": "hello ",
              "range": [
                114,
                122
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 7
                },
                "start": {
                  "column": 18,
                  "line": 7
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "symbol",
              "optional": false,
              "range": [
                125,
                131
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              }
            },
            "range": [
              114,
              131
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
              }
            }
          },
          "range": [
            102,
            131
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        96,
        132
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            133,
            136
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "symbol",
          "optional": false,
          "range": [
            140,
            146
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 8
            },
            "start": {
              "column": 7,
              "line": 8
            }
          }
        },
        "range": [
          133,
          146
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        133,
        147
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": true,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "symbolUnionNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 10
                },
                "start": {
                  "column": 22,
                  "line": 10
                }
              },
              "range": [
                171,
                188
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "range": [
                      173,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 10
                      },
                      "start": {
                        "column": 24,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      182,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 10
                      },
                      "start": {
                        "column": 33,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  173,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 24,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              153,
              188
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            153,
            188
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        149,
        189
      ],
      "loc": {
        "end": {
          "column": 40,
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
          "definite": true,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "symbolUnionString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 11
                },
                "start": {
                  "column": 22,
                  "line": 11
                }
              },
              "range": [
                212,
                229
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "range": [
                      214,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 11
                      },
                      "start": {
                        "column": 24,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      223,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 11
                      },
                      "start": {
                        "column": 33,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  214,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 11
                  },
                  "start": {
                    "column": 24,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              194,
              229
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            194,
            229
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        190,
        230
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "templateStrUnion",
            "optional": false,
            "range": [
              238,
              254
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "symbolUnionNumber",
                "optional": false,
                "range": [
                  278,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 13
                  },
                  "start": {
                    "column": 46,
                    "line": 13
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "symbolUnionString",
                "optional": false,
                "range": [
                  321,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 106,
                    "line": 13
                  },
                  "start": {
                    "column": 89,
                    "line": 13
                  }
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "union with number ",
                  "raw": "union with number "
                },
                "range": [
                  257,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 13
                  },
                  "start": {
                    "column": 25,
                    "line": 13
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": " and union with string ",
                  "raw": " and union with string "
                },
                "range": [
                  295,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 13
                  },
                  "start": {
                    "column": 63,
                    "line": 13
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  338,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 108,
                    "line": 13
                  },
                  "start": {
                    "column": 106,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              257,
              340
            ],
            "loc": {
              "end": {
                "column": 108,
                "line": 13
              },
              "start": {
                "column": 25,
                "line": 13
              }
            }
          },
          "range": [
            238,
            340
          ],
          "loc": {
            "end": {
              "column": 108,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        232,
        341
      ],
      "loc": {
        "end": {
          "column": 109,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringOrSymbol",
        "optional": false,
        "range": [
          364,
          378
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              381,
              387
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 18
              },
              "start": {
                "column": 22,
                "line": 18
              }
            }
          },
          {
            "type": "TSSymbolKeyword",
            "range": [
              390,
              396
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 18
              },
              "start": {
                "column": 31,
                "line": 18
              }
            }
          }
        ],
        "range": [
          381,
          396
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 18
          },
          "start": {
            "column": 22,
            "line": 18
          }
        }
      },
      "range": [
        359,
        397
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 18
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
            "type": "ReturnStatement",
            "argument": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "range": [
                    465,
                    468
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 21
                    },
                    "start": {
                      "column": 14,
                      "line": 21
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    462,
                    465
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 21
                    },
                    "start": {
                      "column": 11,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": " is the key",
                    "raw": " is the key"
                  },
                  "range": [
                    468,
                    481
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 21
                    },
                    "start": {
                      "column": 17,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                462,
                481
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "range": [
              455,
              482
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          449,
          484
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 50,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getKey",
        "optional": false,
        "range": [
          408,
          414
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 20
              },
              "start": {
                "column": 45,
                "line": 20
              }
            },
            "range": [
              444,
              447
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "range": [
                  446,
                  447
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 20
                  },
                  "start": {
                    "column": 47,
                    "line": 20
                  }
                }
              },
              "range": [
                446,
                447
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 20
                },
                "start": {
                  "column": 47,
                  "line": 20
                }
              }
            }
          },
          "range": [
            441,
            447
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 20
            },
            "start": {
              "column": 42,
              "line": 20
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 20
          },
          "start": {
            "column": 15,
            "line": 20
          }
        },
        "range": [
          414,
          440
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringOrSymbol",
                "optional": false,
                "range": [
                  425,
                  439
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 20
                  },
                  "start": {
                    "column": 26,
                    "line": 20
                  }
                }
              },
              "range": [
                425,
                439
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 20
                },
                "start": {
                  "column": 26,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                415,
                416
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              415,
              439
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 20
              },
              "start": {
                "column": 16,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        399,
        484
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": true,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 25
                      },
                      "start": {
                        "column": 11,
                        "line": 25
                      }
                    },
                    "range": [
                      542,
                      545
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "range": [
                          544,
                          545
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 25
                          },
                          "start": {
                            "column": 13,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        544,
                        545
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 25
                        },
                        "start": {
                          "column": 13,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    539,
                    545
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "init": null,
                "range": [
                  539,
                  545
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              535,
              546
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "range": [
                    554,
                    556
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 26
                    },
                    "start": {
                      "column": 7,
                      "line": 26
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    551,
                    554
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
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    556,
                    558
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
                }
              ],
              "range": [
                551,
                558
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "range": [
              551,
              559
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "range": [
                  564,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  569,
                  571
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 27
                  },
                  "start": {
                    "column": 9,
                    "line": 27
                  }
                }
              },
              "range": [
                564,
                571
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
            "range": [
              564,
              572
            ],
            "loc": {
              "end": {
                "column": 12,
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
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "range": [
                  578,
                  580
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 28
                  },
                  "start": {
                    "column": 5,
                    "line": 28
                  }
                }
              },
              "operator": "+",
              "prefix": true,
              "range": [
                577,
                580
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              577,
              581
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": true,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 30
                      },
                      "start": {
                        "column": 11,
                        "line": 30
                      }
                    },
                    "range": [
                      594,
                      606
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              596,
                              597
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 30
                              },
                              "start": {
                                "column": 13,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            596,
                            597
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 30
                            },
                            "start": {
                              "column": 13,
                              "line": 30
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            600,
                            606
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 30
                            },
                            "start": {
                              "column": 17,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "range": [
                        596,
                        606
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 30
                        },
                        "start": {
                          "column": 13,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    591,
                    606
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "init": null,
                "range": [
                  591,
                  606
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              587,
              607
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "range": [
                    615,
                    617
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 31
                    },
                    "start": {
                      "column": 7,
                      "line": 31
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    612,
                    615
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
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    617,
                    619
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 31
                    },
                    "start": {
                      "column": 9,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                612,
                619
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              612,
              620
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "range": [
                  625,
                  627
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  630,
                  632
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
              "range": [
                625,
                632
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              625,
              633
            ],
            "loc": {
              "end": {
                "column": 12,
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
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "range": [
                  639,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 33
                  },
                  "start": {
                    "column": 5,
                    "line": 33
                  }
                }
              },
              "operator": "+",
              "prefix": true,
              "range": [
                638,
                641
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
            "range": [
              638,
              642
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
          }
        ],
        "range": [
          529,
          644
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 43,
            "line": 24
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getKey1",
        "optional": false,
        "range": [
          495,
          502
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 24
              },
              "start": {
                "column": 38,
                "line": 24
              }
            },
            "range": [
              524,
              527
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "range": [
                  526,
                  527
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 24
                  },
                  "start": {
                    "column": 40,
                    "line": 24
                  }
                }
              },
              "range": [
                526,
                527
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 24
                },
                "start": {
                  "column": 40,
                  "line": 24
                }
              }
            }
          },
          "range": [
            521,
            527
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 24
            },
            "start": {
              "column": 35,
              "line": 24
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 24
          },
          "start": {
            "column": 16,
            "line": 24
          }
        },
        "range": [
          502,
          520
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSSymbolKeyword",
              "range": [
                513,
                519
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 24
                },
                "start": {
                  "column": 27,
                  "line": 24
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                503,
                504
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
            "out": false,
            "range": [
              503,
              519
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 24
              },
              "start": {
                "column": 17,
                "line": 24
              }
            }
          }
        ]
      },
      "range": [
        486,
        644
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 24
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
                "definite": true,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 37
                      },
                      "start": {
                        "column": 11,
                        "line": 37
                      }
                    },
                    "range": [
                      702,
                      705
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "range": [
                          704,
                          705
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 37
                          },
                          "start": {
                            "column": 13,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        704,
                        705
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 37
                        },
                        "start": {
                          "column": 13,
                          "line": 37
                        }
                      }
                    }
                  },
                  "range": [
                    699,
                    705
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                "init": null,
                "range": [
                  699,
                  705
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 37
                  },
                  "start": {
                    "column": 8,
                    "line": 37
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              695,
              706
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "range": [
                    714,
                    716
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
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    711,
                    714
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 38
                    },
                    "start": {
                      "column": 4,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    716,
                    718
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 38
                    },
                    "start": {
                      "column": 9,
                      "line": 38
                    }
                  }
                }
              ],
              "range": [
                711,
                718
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              711,
              719
            ],
            "loc": {
              "end": {
                "column": 12,
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
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "range": [
                  724,
                  726
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  729,
                  731
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 39
                  },
                  "start": {
                    "column": 9,
                    "line": 39
                  }
                }
              },
              "range": [
                724,
                731
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
            },
            "range": [
              724,
              732
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 39
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
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "range": [
                  738,
                  740
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 40
                  },
                  "start": {
                    "column": 5,
                    "line": 40
                  }
                }
              },
              "operator": "+",
              "prefix": true,
              "range": [
                737,
                740
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "range": [
              737,
              741
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": true,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 42
                      },
                      "start": {
                        "column": 11,
                        "line": 42
                      }
                    },
                    "range": [
                      754,
                      766
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              756,
                              757
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 42
                              },
                              "start": {
                                "column": 13,
                                "line": 42
                              }
                            }
                          },
                          "range": [
                            756,
                            757
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 42
                            },
                            "start": {
                              "column": 13,
                              "line": 42
                            }
                          }
                        },
                        {
                          "type": "TSSymbolKeyword",
                          "range": [
                            760,
                            766
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 42
                            },
                            "start": {
                              "column": 17,
                              "line": 42
                            }
                          }
                        }
                      ],
                      "range": [
                        756,
                        766
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 42
                        },
                        "start": {
                          "column": 13,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    751,
                    766
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
                "init": null,
                "range": [
                  751,
                  766
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
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              747,
              767
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "range": [
                    775,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 43
                    },
                    "start": {
                      "column": 7,
                      "line": 43
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    772,
                    775
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 43
                    },
                    "start": {
                      "column": 4,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    777,
                    779
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 43
                    },
                    "start": {
                      "column": 9,
                      "line": 43
                    }
                  }
                }
              ],
              "range": [
                772,
                779
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            "range": [
              772,
              780
            ],
            "loc": {
              "end": {
                "column": 12,
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
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "range": [
                  785,
                  787
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  790,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 44
                  },
                  "start": {
                    "column": 9,
                    "line": 44
                  }
                }
              },
              "range": [
                785,
                792
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
            },
            "range": [
              785,
              793
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "range": [
                  799,
                  801
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 45
                  },
                  "start": {
                    "column": 5,
                    "line": 45
                  }
                }
              },
              "operator": "+",
              "prefix": true,
              "range": [
                798,
                801
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              798,
              802
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
          }
        ],
        "range": [
          689,
          804
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 43,
            "line": 36
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getKey2",
        "optional": false,
        "range": [
          655,
          662
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 36
          },
          "start": {
            "column": 9,
            "line": 36
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 36
              },
              "start": {
                "column": 38,
                "line": 36
              }
            },
            "range": [
              684,
              687
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "range": [
                  686,
                  687
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 36
                  },
                  "start": {
                    "column": 40,
                    "line": 36
                  }
                }
              },
              "range": [
                686,
                687
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 36
                },
                "start": {
                  "column": 40,
                  "line": 36
                }
              }
            }
          },
          "range": [
            681,
            687
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 36
            },
            "start": {
              "column": 35,
              "line": 36
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 36
          },
          "start": {
            "column": 16,
            "line": 36
          }
        },
        "range": [
          662,
          680
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                673,
                679
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 36
                },
                "start": {
                  "column": 27,
                  "line": 36
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                663,
                664
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 36
                },
                "start": {
                  "column": 17,
                  "line": 36
                }
              }
            },
            "out": false,
            "range": [
              663,
              679
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 36
              },
              "start": {
                "column": 17,
                "line": 36
              }
            }
          }
        ]
      },
      "range": [
        646,
        804
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 47
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
