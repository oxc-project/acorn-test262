__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    34,
    1391
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
            "name": "point",
            "optional": false,
            "range": [
              38,
              43
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    47,
                    48
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
                {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    50,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                46,
                52
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  56,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 4
                  },
                  "start": {
                    "column": 22,
                    "line": 4
                  }
                }
              },
              "range": [
                56,
                61
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              }
            },
            "range": [
              46,
              61
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "range": [
            38,
            61
          ],
          "loc": {
            "end": {
              "column": 27,
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
        34,
        62
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "**",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        141,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 7
                        },
                        "start": {
                          "column": 21,
                          "line": 7
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        146,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 7
                        },
                        "start": {
                          "column": 26,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      141,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 7
                      },
                      "start": {
                        "column": 21,
                        "line": 7
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "**",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        150,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 7
                        },
                        "start": {
                          "column": 30,
                          "line": 7
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        155,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 7
                        },
                        "start": {
                          "column": 35,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      150,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 7
                      },
                      "start": {
                        "column": 30,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    141,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 7
                    },
                    "start": {
                      "column": 21,
                      "line": 7
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
                    131,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sqrt",
                  "optional": false,
                  "range": [
                    136,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 7
                    },
                    "start": {
                      "column": 16,
                      "line": 7
                    }
                  }
                },
                "range": [
                  131,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                131,
                157
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              124,
              158
            ],
            "loc": {
              "end": {
                "column": 38,
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
          118,
          160
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 54,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "distanceFromOrigin",
        "optional": false,
        "range": [
          73,
          91
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                93,
                94
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
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                96,
                97
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 6
                }
              }
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 6
              },
              "start": {
                "column": 34,
                "line": 6
              }
            },
            "range": [
              98,
              116
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    101,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 6
                    },
                    "start": {
                      "column": 37,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    109,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 6
                    },
                    "start": {
                      "column": 45,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                100,
                116
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 6
                },
                "start": {
                  "column": 36,
                  "line": 6
                }
              }
            }
          },
          "range": [
            92,
            116
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 6
            },
            "start": {
              "column": 28,
              "line": 6
            }
          }
        }
      ],
      "range": [
        64,
        160
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
            "name": "point",
            "optional": false,
            "range": [
              181,
              186
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 10
              },
              "start": {
                "column": 19,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "distanceFromOrigin",
          "optional": false,
          "range": [
            162,
            180
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          162,
          187
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        162,
        188
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
        "name": "arryFn",
        "optional": false,
        "range": [
          207,
          213
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
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
                "column": 35,
                "line": 12
              },
              "start": {
                "column": 25,
                "line": 12
              }
            },
            "range": [
              215,
              225
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "range": [
                  217,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 27,
                    "line": 12
                  }
                }
              },
              "range": [
                217,
                225
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 12
                },
                "start": {
                  "column": 27,
                  "line": 12
                }
              }
            }
          },
          "range": [
            214,
            225
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 12
            },
            "start": {
              "column": 24,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 12
          },
          "start": {
            "column": 36,
            "line": 12
          }
        },
        "range": [
          226,
          232
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            228,
            232
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 12
            },
            "start": {
              "column": 38,
              "line": 12
            }
          }
        }
      },
      "range": [
        190,
        233
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 12
        },
        "start": {
          "column": 0,
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
            "type": "Identifier",
            "decorators": [],
            "name": "point",
            "optional": false,
            "range": [
              241,
              246
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 13
              },
              "start": {
                "column": 7,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn",
          "optional": false,
          "range": [
            234,
            240
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          234,
          247
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        234,
        248
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
        "name": "arryFn2",
        "optional": false,
        "range": [
          267,
          274
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 15
          },
          "start": {
            "column": 17,
            "line": 15
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
                "column": 41,
                "line": 15
              },
              "start": {
                "column": 26,
                "line": 15
              }
            },
            "range": [
              276,
              291
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  283,
                  291
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      284,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 15
                      },
                      "start": {
                        "column": 34,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 15
                  },
                  "start": {
                    "column": 33,
                    "line": 15
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  278,
                  283
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 15
                  },
                  "start": {
                    "column": 28,
                    "line": 15
                  }
                }
              },
              "range": [
                278,
                291
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 15
                },
                "start": {
                  "column": 28,
                  "line": 15
                }
              }
            }
          },
          "range": [
            275,
            291
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 15
            },
            "start": {
              "column": 25,
              "line": 15
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 48,
            "line": 15
          },
          "start": {
            "column": 42,
            "line": 15
          }
        },
        "range": [
          292,
          298
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            294,
            298
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 15
            },
            "start": {
              "column": 44,
              "line": 15
            }
          }
        }
      },
      "range": [
        250,
        299
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "point",
            "optional": false,
            "range": [
              308,
              313
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 16
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "range": [
            300,
            307
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          300,
          314
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        300,
        315
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              },
              "range": [
                332,
                351
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      343,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 18
                      },
                      "start": {
                        "column": 26,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    343,
                    351
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 18
                    },
                    "start": {
                      "column": 26,
                      "line": 18
                    }
                  }
                },
                "range": [
                  334,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 18
                  },
                  "start": {
                    "column": 17,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              331,
              351
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 18
              },
              "start": {
                "column": 14,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            331,
            351
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 18
            },
            "start": {
              "column": 14,
              "line": 18
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        317,
        352
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
                  "column": 35,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              },
              "range": [
                368,
                388
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    378,
                    388
                  ],
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "range": [
                          379,
                          385
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 19
                          },
                          "start": {
                            "column": 26,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        379,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 19
                        },
                        "start": {
                          "column": 26,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 19
                    },
                    "start": {
                      "column": 25,
                      "line": 19
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "range": [
                    370,
                    378
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 19
                    },
                    "start": {
                      "column": 17,
                      "line": 19
                    }
                  }
                },
                "range": [
                  370,
                  388
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 19
                  },
                  "start": {
                    "column": 17,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              367,
              388
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 19
              },
              "start": {
                "column": 14,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            367,
            388
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 19
            },
            "start": {
              "column": 14,
              "line": 19
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        353,
        389
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 20
                },
                "start": {
                  "column": 15,
                  "line": 20
                }
              },
              "range": [
                405,
                428
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    420,
                    428
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        421,
                        427
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 20
                        },
                        "start": {
                          "column": 31,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 20
                    },
                    "start": {
                      "column": 30,
                      "line": 20
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "range": [
                    407,
                    420
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 20
                    },
                    "start": {
                      "column": 17,
                      "line": 20
                    }
                  }
                },
                "range": [
                  407,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 20
                  },
                  "start": {
                    "column": 17,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              404,
              428
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 20
              },
              "start": {
                "column": 14,
                "line": 20
              }
            }
          },
          "init": null,
          "range": [
            404,
            428
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 20
            },
            "start": {
              "column": 14,
              "line": 20
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        390,
        429
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "a",
            "optional": false,
            "range": [
              439,
              440
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
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "range": [
            431,
            438
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          431,
          441
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        431,
        442
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              451,
              452
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
          "name": "arryFn2",
          "optional": false,
          "range": [
            443,
            450
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          443,
          453
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        443,
        454
      ],
      "loc": {
        "end": {
          "column": 11,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              463,
              464
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 24
              },
              "start": {
                "column": 8,
                "line": 24
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "range": [
            455,
            462
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          455,
          465
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        455,
        466
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              },
              "range": [
                476,
                490
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          488,
                          489
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 26
                          },
                          "start": {
                            "column": 20,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        488,
                        489
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 26
                        },
                        "start": {
                          "column": 20,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "range": [
                    487,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 26
                    },
                    "start": {
                      "column": 19,
                      "line": 26
                    }
                  }
                },
                "range": [
                  478,
                  490
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              474,
              490
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  494,
                  495
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 26
                  },
                  "start": {
                    "column": 26,
                    "line": 26
                  }
                }
              }
            ],
            "range": [
              493,
              496
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 26
              },
              "start": {
                "column": 25,
                "line": 26
              }
            }
          },
          "range": [
            474,
            496
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        468,
        497
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 27
                },
                "start": {
                  "column": 8,
                  "line": 27
                }
              },
              "range": [
                506,
                519
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "range": [
                    517,
                    519
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 27
                    },
                    "start": {
                      "column": 19,
                      "line": 27
                    }
                  }
                },
                "range": [
                  508,
                  519
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 27
                  },
                  "start": {
                    "column": 10,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              504,
              519
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "range": [
              522,
              524
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 27
              },
              "start": {
                "column": 24,
                "line": 27
              }
            }
          },
          "range": [
            504,
            524
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        498,
        525
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              },
              "range": [
                535,
                549
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          547,
                          548
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 29
                          },
                          "start": {
                            "column": 20,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        547,
                        548
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 29
                        },
                        "start": {
                          "column": 20,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "range": [
                    546,
                    549
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 29
                    },
                    "start": {
                      "column": 19,
                      "line": 29
                    }
                  }
                },
                "range": [
                  537,
                  549
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 29
                  },
                  "start": {
                    "column": 10,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              533,
              549
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  553,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 29
                  },
                  "start": {
                    "column": 26,
                    "line": 29
                  }
                }
              }
            ],
            "range": [
              552,
              555
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 29
              },
              "start": {
                "column": 25,
                "line": 29
              }
            }
          },
          "range": [
            533,
            555
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        527,
        556
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 30
                },
                "start": {
                  "column": 8,
                  "line": 30
                }
              },
              "range": [
                565,
                569
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "range": [
                  567,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              563,
              569
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 30
              },
              "start": {
                "column": 6,
                "line": 30
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "range": [
              572,
              574
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 30
              },
              "start": {
                "column": 15,
                "line": 30
              }
            }
          },
          "range": [
            563,
            574
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        557,
        575
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 32
                },
                "start": {
                  "column": 8,
                  "line": 32
                }
              },
              "range": [
                585,
                590
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        588,
                        589
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 32
                        },
                        "start": {
                          "column": 11,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      588,
                      589
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 32
                      },
                      "start": {
                        "column": 11,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  587,
                  590
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 32
                  },
                  "start": {
                    "column": 10,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              583,
              590
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  594,
                  595
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 32
                  },
                  "start": {
                    "column": 17,
                    "line": 32
                  }
                }
              }
            ],
            "range": [
              593,
              596
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 32
              },
              "start": {
                "column": 16,
                "line": 32
              }
            }
          },
          "range": [
            583,
            596
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        577,
        597
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "t6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 33
                },
                "start": {
                  "column": 8,
                  "line": 33
                }
              },
              "range": [
                606,
                619
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "range": [
                    617,
                    619
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 33
                    },
                    "start": {
                      "column": 19,
                      "line": 33
                    }
                  }
                },
                "range": [
                  608,
                  619
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 33
                  },
                  "start": {
                    "column": 10,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              604,
              619
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t5",
            "optional": false,
            "range": [
              622,
              624
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 33
              },
              "start": {
                "column": 24,
                "line": 33
              }
            }
          },
          "range": [
            604,
            624
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        598,
        625
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 35
                }
              },
              "range": [
                635,
                640
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        638,
                        639
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 35
                        },
                        "start": {
                          "column": 11,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      638,
                      639
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
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
                  637,
                  640
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 35
                  },
                  "start": {
                    "column": 10,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              633,
              640
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
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  644,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 35
                  },
                  "start": {
                    "column": 17,
                    "line": 35
                  }
                }
              }
            ],
            "range": [
              643,
              646
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 35
              },
              "start": {
                "column": 16,
                "line": 35
              }
            }
          },
          "range": [
            633,
            646
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        627,
        647
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 35
        },
        "start": {
          "column": 0,
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
            "name": "t8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 36
                },
                "start": {
                  "column": 8,
                  "line": 36
                }
              },
              "range": [
                656,
                660
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "range": [
                  658,
                  660
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 36
                  },
                  "start": {
                    "column": 10,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              654,
              660
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 36
              },
              "start": {
                "column": 6,
                "line": 36
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t7",
            "optional": false,
            "range": [
              663,
              665
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 36
              },
              "start": {
                "column": 15,
                "line": 36
              }
            }
          },
          "range": [
            654,
            665
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        648,
        666
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 38
                }
              },
              "range": [
                676,
                695
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      687,
                      693
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 38
                      },
                      "start": {
                        "column": 19,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    687,
                    695
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 38
                    },
                    "start": {
                      "column": 19,
                      "line": 38
                    }
                  }
                },
                "range": [
                  678,
                  695
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 38
                  },
                  "start": {
                    "column": 10,
                    "line": 38
                  }
                }
              }
            },
            "range": [
              674,
              695
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  699,
                  700
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 38
                  },
                  "start": {
                    "column": 31,
                    "line": 38
                  }
                }
              }
            ],
            "range": [
              698,
              701
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 38
              },
              "start": {
                "column": 30,
                "line": 38
              }
            }
          },
          "range": [
            674,
            701
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        668,
        702
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 39
                },
                "start": {
                  "column": 8,
                  "line": 39
                }
              },
              "range": [
                711,
                731
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      722,
                      729
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 39
                      },
                      "start": {
                        "column": 19,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    722,
                    731
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 39
                    },
                    "start": {
                      "column": 19,
                      "line": 39
                    }
                  }
                },
                "range": [
                  713,
                  731
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 39
                  },
                  "start": {
                    "column": 10,
                    "line": 39
                  }
                }
              }
            },
            "range": [
              709,
              731
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 39
              },
              "start": {
                "column": 6,
                "line": 39
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "range": [
              734,
              736
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 39
              },
              "start": {
                "column": 31,
                "line": 39
              }
            }
          },
          "range": [
            709,
            736
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        703,
        737
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 41
                },
                "start": {
                  "column": 8,
                  "line": 41
                }
              },
              "range": [
                747,
                766
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      758,
                      764
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 41
                      },
                      "start": {
                        "column": 19,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    758,
                    766
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 41
                    },
                    "start": {
                      "column": 19,
                      "line": 41
                    }
                  }
                },
                "range": [
                  749,
                  766
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 41
                  },
                  "start": {
                    "column": 10,
                    "line": 41
                  }
                }
              }
            },
            "range": [
              745,
              766
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 41
              },
              "start": {
                "column": 6,
                "line": 41
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  770,
                  771
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 41
                  },
                  "start": {
                    "column": 31,
                    "line": 41
                  }
                }
              }
            ],
            "range": [
              769,
              772
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 41
              },
              "start": {
                "column": 30,
                "line": 41
              }
            }
          },
          "range": [
            745,
            772
          ],
          "loc": {
            "end": {
              "column": 33,
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
      "kind": "const",
      "range": [
        739,
        773
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 41
        },
        "start": {
          "column": 0,
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 42
                },
                "start": {
                  "column": 8,
                  "line": 42
                }
              },
              "range": [
                782,
                793
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    784,
                    791
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 42
                    },
                    "start": {
                      "column": 10,
                      "line": 42
                    }
                  }
                },
                "range": [
                  784,
                  793
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 42
                  },
                  "start": {
                    "column": 10,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              780,
              793
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "range": [
              796,
              798
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 42
              },
              "start": {
                "column": 22,
                "line": 42
              }
            }
          },
          "range": [
            780,
            798
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        774,
        799
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 44
                },
                "start": {
                  "column": 8,
                  "line": 44
                }
              },
              "range": [
                809,
                819
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    811,
                    817
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 44
                    },
                    "start": {
                      "column": 10,
                      "line": 44
                    }
                  }
                },
                "range": [
                  811,
                  819
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 44
                  },
                  "start": {
                    "column": 10,
                    "line": 44
                  }
                }
              }
            },
            "range": [
              807,
              819
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 44
              },
              "start": {
                "column": 6,
                "line": 44
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  823,
                  824
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 44
                  },
                  "start": {
                    "column": 22,
                    "line": 44
                  }
                }
              }
            ],
            "range": [
              822,
              825
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 44
              },
              "start": {
                "column": 21,
                "line": 44
              }
            }
          },
          "range": [
            807,
            825
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 44
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        801,
        826
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 45
                },
                "start": {
                  "column": 8,
                  "line": 45
                }
              },
              "range": [
                835,
                856
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      846,
                      853
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 45
                      },
                      "start": {
                        "column": 19,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    846,
                    856
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 45
                    },
                    "start": {
                      "column": 19,
                      "line": 45
                    }
                  }
                },
                "range": [
                  837,
                  856
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 45
                  },
                  "start": {
                    "column": 10,
                    "line": 45
                  }
                }
              }
            },
            "range": [
              833,
              856
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 45
              },
              "start": {
                "column": 6,
                "line": 45
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "range": [
              859,
              861
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 45
              },
              "start": {
                "column": 32,
                "line": 45
              }
            }
          },
          "range": [
            833,
            861
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 45
            },
            "start": {
              "column": 6,
              "line": 45
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        827,
        862
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
            "name": "a7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 47
                },
                "start": {
                  "column": 8,
                  "line": 47
                }
              },
              "range": [
                872,
                882
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    874,
                    880
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 47
                    },
                    "start": {
                      "column": 10,
                      "line": 47
                    }
                  }
                },
                "range": [
                  874,
                  882
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 47
                  },
                  "start": {
                    "column": 10,
                    "line": 47
                  }
                }
              }
            },
            "range": [
              870,
              882
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 47
              },
              "start": {
                "column": 6,
                "line": 47
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  886,
                  887
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 47
                  },
                  "start": {
                    "column": 22,
                    "line": 47
                  }
                }
              }
            ],
            "range": [
              885,
              888
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 47
              },
              "start": {
                "column": 21,
                "line": 47
              }
            }
          },
          "range": [
            870,
            888
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 47
            },
            "start": {
              "column": 6,
              "line": 47
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        864,
        889
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
            "name": "a8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 48
                },
                "start": {
                  "column": 8,
                  "line": 48
                }
              },
              "range": [
                898,
                909
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    900,
                    907
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 48
                    },
                    "start": {
                      "column": 10,
                      "line": 48
                    }
                  }
                },
                "range": [
                  900,
                  909
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 48
                  },
                  "start": {
                    "column": 10,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              896,
              909
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 48
              },
              "start": {
                "column": 6,
                "line": 48
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a7",
            "optional": false,
            "range": [
              912,
              914
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 48
              },
              "start": {
                "column": 22,
                "line": 48
              }
            }
          },
          "range": [
            896,
            914
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 48
            },
            "start": {
              "column": 6,
              "line": 48
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        890,
        915
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
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
            "name": "ta1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 50
                },
                "start": {
                  "column": 9,
                  "line": 50
                }
              },
              "range": [
                926,
                940
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          938,
                          939
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 50
                          },
                          "start": {
                            "column": 21,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        938,
                        939
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 50
                        },
                        "start": {
                          "column": 21,
                          "line": 50
                        }
                      }
                    }
                  ],
                  "range": [
                    937,
                    940
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 50
                    },
                    "start": {
                      "column": 20,
                      "line": 50
                    }
                  }
                },
                "range": [
                  928,
                  940
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 50
                  },
                  "start": {
                    "column": 11,
                    "line": 50
                  }
                }
              }
            },
            "range": [
              923,
              940
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 50
              },
              "start": {
                "column": 6,
                "line": 50
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  944,
                  945
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 50
                  },
                  "start": {
                    "column": 27,
                    "line": 50
                  }
                }
              }
            ],
            "range": [
              943,
              946
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 50
              },
              "start": {
                "column": 26,
                "line": 50
              }
            }
          },
          "range": [
            923,
            946
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 50
            },
            "start": {
              "column": 6,
              "line": 50
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        917,
        947
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
            "name": "ta2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 51
                },
                "start": {
                  "column": 9,
                  "line": 51
                }
              },
              "range": [
                957,
                977
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      968,
                      975
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 51
                      },
                      "start": {
                        "column": 20,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    968,
                    977
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
                "range": [
                  959,
                  977
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 51
                  },
                  "start": {
                    "column": 11,
                    "line": 51
                  }
                }
              }
            },
            "range": [
              954,
              977
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 51
              },
              "start": {
                "column": 6,
                "line": 51
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta1",
            "optional": false,
            "range": [
              980,
              983
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 51
              },
              "start": {
                "column": 32,
                "line": 51
              }
            }
          },
          "range": [
            954,
            983
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 51
            },
            "start": {
              "column": 6,
              "line": 51
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        948,
        984
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
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
            "name": "ta3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 53
                },
                "start": {
                  "column": 9,
                  "line": 53
                }
              },
              "range": [
                995,
                1009
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1007,
                          1008
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 53
                          },
                          "start": {
                            "column": 21,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        1007,
                        1008
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 53
                        },
                        "start": {
                          "column": 21,
                          "line": 53
                        }
                      }
                    }
                  ],
                  "range": [
                    1006,
                    1009
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 53
                    },
                    "start": {
                      "column": 20,
                      "line": 53
                    }
                  }
                },
                "range": [
                  997,
                  1009
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 53
                  },
                  "start": {
                    "column": 11,
                    "line": 53
                  }
                }
              }
            },
            "range": [
              992,
              1009
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 53
              },
              "start": {
                "column": 6,
                "line": 53
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1013,
                  1014
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 53
                  },
                  "start": {
                    "column": 27,
                    "line": 53
                  }
                }
              }
            ],
            "range": [
              1012,
              1015
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 53
              },
              "start": {
                "column": 26,
                "line": 53
              }
            }
          },
          "range": [
            992,
            1015
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 53
            },
            "start": {
              "column": 6,
              "line": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        986,
        1016
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 53
        },
        "start": {
          "column": 0,
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
            "name": "ta4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 54
                },
                "start": {
                  "column": 9,
                  "line": 54
                }
              },
              "range": [
                1026,
                1036
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1028,
                    1034
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 54
                    },
                    "start": {
                      "column": 11,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1028,
                  1036
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 54
                  },
                  "start": {
                    "column": 11,
                    "line": 54
                  }
                }
              }
            },
            "range": [
              1023,
              1036
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 54
              },
              "start": {
                "column": 6,
                "line": 54
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta3",
            "optional": false,
            "range": [
              1039,
              1042
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 54
              },
              "start": {
                "column": 22,
                "line": 54
              }
            }
          },
          "range": [
            1023,
            1042
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 54
            },
            "start": {
              "column": 6,
              "line": 54
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1017,
        1043
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
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
            "name": "ta5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 56
                },
                "start": {
                  "column": 9,
                  "line": 56
                }
              },
              "range": [
                1054,
                1059
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1057,
                        1058
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 56
                        },
                        "start": {
                          "column": 12,
                          "line": 56
                        }
                      }
                    },
                    "range": [
                      1057,
                      1058
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 56
                      },
                      "start": {
                        "column": 12,
                        "line": 56
                      }
                    }
                  }
                ],
                "range": [
                  1056,
                  1059
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 56
                  },
                  "start": {
                    "column": 11,
                    "line": 56
                  }
                }
              }
            },
            "range": [
              1051,
              1059
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
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1063,
                  1064
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 56
                  },
                  "start": {
                    "column": 18,
                    "line": 56
                  }
                }
              }
            ],
            "range": [
              1062,
              1065
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 56
              },
              "start": {
                "column": 17,
                "line": 56
              }
            }
          },
          "range": [
            1051,
            1065
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 56
            },
            "start": {
              "column": 6,
              "line": 56
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1045,
        1066
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
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
            "name": "ta6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 57
                },
                "start": {
                  "column": 9,
                  "line": 57
                }
              },
              "range": [
                1076,
                1096
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      1087,
                      1094
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 57
                      },
                      "start": {
                        "column": 20,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    1087,
                    1096
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 57
                    },
                    "start": {
                      "column": 20,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1078,
                  1096
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 57
                  },
                  "start": {
                    "column": 11,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              1073,
              1096
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 57
              },
              "start": {
                "column": 6,
                "line": 57
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta5",
            "optional": false,
            "range": [
              1099,
              1102
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 57
              },
              "start": {
                "column": 32,
                "line": 57
              }
            }
          },
          "range": [
            1073,
            1102
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 57
            },
            "start": {
              "column": 6,
              "line": 57
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1067,
        1103
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 57
        },
        "start": {
          "column": 0,
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
            "name": "ta7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 59
                },
                "start": {
                  "column": 9,
                  "line": 59
                }
              },
              "range": [
                1114,
                1119
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1117,
                        1118
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 59
                        },
                        "start": {
                          "column": 12,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1117,
                      1118
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 59
                      },
                      "start": {
                        "column": 12,
                        "line": 59
                      }
                    }
                  }
                ],
                "range": [
                  1116,
                  1119
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 59
                  },
                  "start": {
                    "column": 11,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1111,
              1119
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 59
              },
              "start": {
                "column": 6,
                "line": 59
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1123,
                  1124
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 59
                  },
                  "start": {
                    "column": 18,
                    "line": 59
                  }
                }
              }
            ],
            "range": [
              1122,
              1125
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 59
              },
              "start": {
                "column": 17,
                "line": 59
              }
            }
          },
          "range": [
            1111,
            1125
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 59
            },
            "start": {
              "column": 6,
              "line": 59
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1105,
        1126
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 59
        },
        "start": {
          "column": 0,
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
            "name": "ta8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 60
                },
                "start": {
                  "column": 9,
                  "line": 60
                }
              },
              "range": [
                1136,
                1147
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1138,
                    1145
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 60
                    },
                    "start": {
                      "column": 11,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1138,
                  1147
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 60
                  },
                  "start": {
                    "column": 11,
                    "line": 60
                  }
                }
              }
            },
            "range": [
              1133,
              1147
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 60
              },
              "start": {
                "column": 6,
                "line": 60
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta7",
            "optional": false,
            "range": [
              1150,
              1153
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 60
              },
              "start": {
                "column": 23,
                "line": 60
              }
            }
          },
          "range": [
            1133,
            1153
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 60
            },
            "start": {
              "column": 6,
              "line": 60
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1127,
        1154
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
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
            "name": "at1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 62
                },
                "start": {
                  "column": 9,
                  "line": 62
                }
              },
              "range": [
                1165,
                1184
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1176,
                      1182
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 62
                      },
                      "start": {
                        "column": 20,
                        "line": 62
                      }
                    }
                  },
                  "range": [
                    1176,
                    1184
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 62
                    },
                    "start": {
                      "column": 20,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1167,
                  1184
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 62
                  },
                  "start": {
                    "column": 11,
                    "line": 62
                  }
                }
              }
            },
            "range": [
              1162,
              1184
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 62
              },
              "start": {
                "column": 6,
                "line": 62
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1188,
                  1189
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 62
                  },
                  "start": {
                    "column": 32,
                    "line": 62
                  }
                }
              }
            ],
            "range": [
              1187,
              1190
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 62
              },
              "start": {
                "column": 31,
                "line": 62
              }
            }
          },
          "range": [
            1162,
            1190
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 62
            },
            "start": {
              "column": 6,
              "line": 62
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1156,
        1191
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
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
            "name": "at2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 63
                },
                "start": {
                  "column": 9,
                  "line": 63
                }
              },
              "range": [
                1201,
                1215
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1213,
                          1214
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 63
                          },
                          "start": {
                            "column": 21,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        1213,
                        1214
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 63
                        },
                        "start": {
                          "column": 21,
                          "line": 63
                        }
                      }
                    }
                  ],
                  "range": [
                    1212,
                    1215
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 63
                    },
                    "start": {
                      "column": 20,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1203,
                  1215
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 63
                  },
                  "start": {
                    "column": 11,
                    "line": 63
                  }
                }
              }
            },
            "range": [
              1198,
              1215
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 63
              },
              "start": {
                "column": 6,
                "line": 63
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "at1",
            "optional": false,
            "range": [
              1218,
              1221
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 63
              },
              "start": {
                "column": 26,
                "line": 63
              }
            }
          },
          "range": [
            1198,
            1221
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
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1192,
        1222
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
            "name": "at3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 65
                },
                "start": {
                  "column": 9,
                  "line": 65
                }
              },
              "range": [
                1233,
                1252
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1244,
                      1250
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 65
                      },
                      "start": {
                        "column": 20,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1244,
                    1252
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 65
                    },
                    "start": {
                      "column": 20,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1235,
                  1252
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 65
                  },
                  "start": {
                    "column": 11,
                    "line": 65
                  }
                }
              }
            },
            "range": [
              1230,
              1252
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 65
              },
              "start": {
                "column": 6,
                "line": 65
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1256,
                  1257
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 65
                  },
                  "start": {
                    "column": 32,
                    "line": 65
                  }
                }
              }
            ],
            "range": [
              1255,
              1258
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 65
              },
              "start": {
                "column": 31,
                "line": 65
              }
            }
          },
          "range": [
            1230,
            1258
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 65
            },
            "start": {
              "column": 6,
              "line": 65
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1224,
        1259
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
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
            "name": "at4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 66
                },
                "start": {
                  "column": 9,
                  "line": 66
                }
              },
              "range": [
                1269,
                1274
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1272,
                        1273
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 66
                        },
                        "start": {
                          "column": 12,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1272,
                      1273
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 66
                      },
                      "start": {
                        "column": 12,
                        "line": 66
                      }
                    }
                  }
                ],
                "range": [
                  1271,
                  1274
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 66
                  },
                  "start": {
                    "column": 11,
                    "line": 66
                  }
                }
              }
            },
            "range": [
              1266,
              1274
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 66
              },
              "start": {
                "column": 6,
                "line": 66
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "at3",
            "optional": false,
            "range": [
              1277,
              1280
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 66
              },
              "start": {
                "column": 17,
                "line": 66
              }
            }
          },
          "range": [
            1266,
            1280
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 66
            },
            "start": {
              "column": 6,
              "line": 66
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1260,
        1281
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
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
            "name": "at5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 68
                },
                "start": {
                  "column": 9,
                  "line": 68
                }
              },
              "range": [
                1292,
                1302
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1294,
                    1300
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 68
                    },
                    "start": {
                      "column": 11,
                      "line": 68
                    }
                  }
                },
                "range": [
                  1294,
                  1302
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 68
                  },
                  "start": {
                    "column": 11,
                    "line": 68
                  }
                }
              }
            },
            "range": [
              1289,
              1302
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 68
              },
              "start": {
                "column": 6,
                "line": 68
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1306,
                  1307
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 68
                  },
                  "start": {
                    "column": 23,
                    "line": 68
                  }
                }
              }
            ],
            "range": [
              1305,
              1308
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 68
              },
              "start": {
                "column": 22,
                "line": 68
              }
            }
          },
          "range": [
            1289,
            1308
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 68
            },
            "start": {
              "column": 6,
              "line": 68
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1283,
        1309
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
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
            "name": "at6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 69
                },
                "start": {
                  "column": 9,
                  "line": 69
                }
              },
              "range": [
                1319,
                1333
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1331,
                          1332
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 69
                          },
                          "start": {
                            "column": 21,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1331,
                        1332
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 69
                        },
                        "start": {
                          "column": 21,
                          "line": 69
                        }
                      }
                    }
                  ],
                  "range": [
                    1330,
                    1333
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 69
                    },
                    "start": {
                      "column": 20,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1321,
                  1333
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 69
                  },
                  "start": {
                    "column": 11,
                    "line": 69
                  }
                }
              }
            },
            "range": [
              1316,
              1333
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 69
              },
              "start": {
                "column": 6,
                "line": 69
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "at5",
            "optional": false,
            "range": [
              1336,
              1339
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 69
              },
              "start": {
                "column": 26,
                "line": 69
              }
            }
          },
          "range": [
            1316,
            1339
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 69
            },
            "start": {
              "column": 6,
              "line": 69
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1310,
        1340
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
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
            "name": "at7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 71
                },
                "start": {
                  "column": 9,
                  "line": 71
                }
              },
              "range": [
                1351,
                1361
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1353,
                    1359
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 71
                    },
                    "start": {
                      "column": 11,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1353,
                  1361
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 71
                  },
                  "start": {
                    "column": 11,
                    "line": 71
                  }
                }
              }
            },
            "range": [
              1348,
              1361
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 71
              },
              "start": {
                "column": 6,
                "line": 71
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1365,
                  1366
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 71
                  },
                  "start": {
                    "column": 23,
                    "line": 71
                  }
                }
              }
            ],
            "range": [
              1364,
              1367
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 71
              },
              "start": {
                "column": 22,
                "line": 71
              }
            }
          },
          "range": [
            1348,
            1367
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 71
            },
            "start": {
              "column": 6,
              "line": 71
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1342,
        1368
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
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
            "name": "at8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 72
                },
                "start": {
                  "column": 9,
                  "line": 72
                }
              },
              "range": [
                1378,
                1383
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1381,
                        1382
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 72
                        },
                        "start": {
                          "column": 12,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1381,
                      1382
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 72
                      },
                      "start": {
                        "column": 12,
                        "line": 72
                      }
                    }
                  }
                ],
                "range": [
                  1380,
                  1383
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 72
                  },
                  "start": {
                    "column": 11,
                    "line": 72
                  }
                }
              }
            },
            "range": [
              1375,
              1383
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 72
              },
              "start": {
                "column": 6,
                "line": 72
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "at7",
            "optional": false,
            "range": [
              1386,
              1389
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 72
              },
              "start": {
                "column": 17,
                "line": 72
              }
            }
          },
          "range": [
            1375,
            1389
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 72
            },
            "start": {
              "column": 6,
              "line": 72
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1369,
        1390
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 73
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
