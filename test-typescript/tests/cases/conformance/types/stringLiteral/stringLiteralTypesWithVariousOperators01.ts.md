__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    24,
    763
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
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              },
              "range": [
                31,
                38
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"ABC\"",
                  "value": "ABC",
                  "range": [
                    33,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 3
                    },
                    "start": {
                      "column": 9,
                      "line": 3
                    }
                  }
                },
                "range": [
                  33,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 9,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              28,
              38
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"ABC\"",
            "value": "ABC",
            "range": [
              41,
              46
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          },
          "range": [
            28,
            46
          ],
          "loc": {
            "end": {
              "column": 22,
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
        24,
        47
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "xyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                55,
                62
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"XYZ\"",
                  "value": "XYZ",
                  "range": [
                    57,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "range": [
                  57,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              52,
              62
            ],
            "loc": {
              "end": {
                "column": 14,
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
            "raw": "\"XYZ\"",
            "value": "XYZ",
            "range": [
              65,
              70
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            }
          },
          "range": [
            52,
            70
          ],
          "loc": {
            "end": {
              "column": 22,
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
        48,
        71
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "abcOrXyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              },
              "range": [
                84,
                99
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"ABC\"",
                      "value": "ABC",
                      "range": [
                        86,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 5
                        },
                        "start": {
                          "column": 14,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      86,
                      91
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 14,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"XYZ\"",
                      "value": "XYZ",
                      "range": [
                        94,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 5
                        },
                        "start": {
                          "column": 22,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      94,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 5
                      },
                      "start": {
                        "column": 22,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  86,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              76,
              99
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                102,
                105
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 5
                },
                "start": {
                  "column": 30,
                  "line": 5
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "range": [
                109,
                112
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 37,
                  "line": 5
                }
              }
            },
            "range": [
              102,
              112
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 5
              },
              "start": {
                "column": 30,
                "line": 5
              }
            }
          },
          "range": [
            76,
            112
          ],
          "loc": {
            "end": {
              "column": 40,
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
      "kind": "let",
      "range": [
        72,
        113
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "abcOrXyzOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              },
              "range": [
                134,
                158
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"ABC\"",
                      "value": "ABC",
                      "range": [
                        136,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 6
                        },
                        "start": {
                          "column": 22,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      136,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 6
                      },
                      "start": {
                        "column": 22,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"XYZ\"",
                      "value": "XYZ",
                      "range": [
                        144,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 6
                        },
                        "start": {
                          "column": 30,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      144,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 6
                      },
                      "start": {
                        "column": 30,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      152,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 6
                      },
                      "start": {
                        "column": 38,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  136,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 6
                  },
                  "start": {
                    "column": 22,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              118,
              158
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "range": [
                161,
                169
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 6
                },
                "start": {
                  "column": 47,
                  "line": 6
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "100",
              "value": 100,
              "range": [
                173,
                176
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 6
                },
                "start": {
                  "column": 59,
                  "line": 6
                }
              }
            },
            "range": [
              161,
              176
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 6
              },
              "start": {
                "column": 47,
                "line": 6
              }
            }
          },
          "range": [
            118,
            176
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        114,
        177
      ],
      "loc": {
        "end": {
          "column": 63,
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
            "name": "a",
            "optional": false,
            "range": [
              183,
              184
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                187,
                189
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                192,
                195
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "range": [
              187,
              195
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
              }
            }
          },
          "range": [
            183,
            195
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        179,
        196
      ],
      "loc": {
        "end": {
          "column": 17,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              201,
              202
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
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                205,
                208
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                211,
                213
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "range": [
              205,
              213
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          },
          "range": [
            201,
            213
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        197,
        214
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "range": [
              219,
              220
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                223,
                225
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                228,
                231
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "range": [
              223,
              231
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 10
              },
              "start": {
                "column": 8,
                "line": 10
              }
            }
          },
          "range": [
            219,
            231
          ],
          "loc": {
            "end": {
              "column": 16,
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
        215,
        232
      ],
      "loc": {
        "end": {
          "column": 17,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "range": [
              237,
              238
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                241,
                244
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                247,
                249
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "range": [
              241,
              249
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 11
              }
            }
          },
          "range": [
            237,
            249
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
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        233,
        250
      ],
      "loc": {
        "end": {
          "column": 17,
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
            "name": "e",
            "optional": false,
            "range": [
              255,
              256
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
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "range": [
                259,
                262
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                265,
                268
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              }
            },
            "range": [
              259,
              268
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 12
              },
              "start": {
                "column": 8,
                "line": 12
              }
            }
          },
          "range": [
            255,
            268
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        251,
        269
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 12
        },
        "start": {
          "column": 0,
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
            "name": "f",
            "optional": false,
            "range": [
              274,
              275
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
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                278,
                281
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "range": [
                284,
                287
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 13
                },
                "start": {
                  "column": 14,
                  "line": 13
                }
              }
            },
            "range": [
              278,
              287
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 13
              }
            }
          },
          "range": [
            274,
            287
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        270,
        288
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "g",
            "optional": false,
            "range": [
              293,
              294
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
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                297,
                301
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                304,
                307
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            },
            "range": [
              297,
              307
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          },
          "range": [
            293,
            307
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        289,
        308
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 14
        },
        "start": {
          "column": 0,
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
            "name": "h",
            "optional": false,
            "range": [
              313,
              314
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                317,
                320
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                323,
                327
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 14,
                  "line": 15
                }
              }
            },
            "range": [
              317,
              327
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          },
          "range": [
            313,
            327
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        309,
        328
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "i",
            "optional": false,
            "range": [
              333,
              334
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
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "abc",
                "optional": false,
                "range": [
                  337,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "abcOrXyz",
                "optional": false,
                "range": [
                  343,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 16
                  },
                  "start": {
                    "column": 14,
                    "line": 16
                  }
                }
              },
              "range": [
                337,
                351
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "range": [
                354,
                357
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 16
                },
                "start": {
                  "column": 25,
                  "line": 16
                }
              }
            },
            "range": [
              337,
              357
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 16
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          },
          "range": [
            333,
            357
          ],
          "loc": {
            "end": {
              "column": 28,
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
        329,
        358
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "j",
            "optional": false,
            "range": [
              363,
              364
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "range": [
                367,
                375
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "range": [
                378,
                386
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 17
                },
                "start": {
                  "column": 19,
                  "line": 17
                }
              }
            },
            "range": [
              367,
              386
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          },
          "range": [
            363,
            386
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        359,
        387
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "k",
            "optional": false,
            "range": [
              392,
              393
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
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "range": [
                397,
                405
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              396,
              405
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 18
              },
              "start": {
                "column": 8,
                "line": 18
              }
            }
          },
          "range": [
            392,
            405
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        388,
        406
      ],
      "loc": {
        "end": {
          "column": 18,
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
            "name": "l",
            "optional": false,
            "range": [
              411,
              412
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
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "range": [
                416,
                424
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              415,
              424
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          "range": [
            411,
            424
          ],
          "loc": {
            "end": {
              "column": 17,
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
        407,
        425
      ],
      "loc": {
        "end": {
          "column": 18,
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
            "name": "m",
            "optional": false,
            "range": [
              430,
              431
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
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                434,
                450
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                453,
                455
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 20
                },
                "start": {
                  "column": 27,
                  "line": 20
                }
              }
            },
            "range": [
              434,
              455
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            430,
            455
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        426,
        456
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "range": [
              461,
              462
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                465,
                467
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                470,
                486
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 21
                },
                "start": {
                  "column": 13,
                  "line": 21
                }
              }
            },
            "range": [
              465,
              486
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          },
          "range": [
            461,
            486
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        457,
        487
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 21
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
            "name": "o",
            "optional": false,
            "range": [
              492,
              493
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                496,
                512
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "range": [
                515,
                523
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 22
                },
                "start": {
                  "column": 27,
                  "line": 22
                }
              }
            },
            "range": [
              496,
              523
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 22
              },
              "start": {
                "column": 8,
                "line": 22
              }
            }
          },
          "range": [
            492,
            523
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        488,
        524
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "p",
            "optional": false,
            "range": [
              529,
              530
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
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "range": [
                533,
                541
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                544,
                560
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 23
                },
                "start": {
                  "column": 19,
                  "line": 23
                }
              }
            },
            "range": [
              533,
              560
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 23
              },
              "start": {
                "column": 8,
                "line": 23
              }
            }
          },
          "range": [
            529,
            560
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        525,
        561
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "q",
            "optional": false,
            "range": [
              566,
              567
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                571,
                587
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              570,
              587
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 24
              },
              "start": {
                "column": 8,
                "line": 24
              }
            }
          },
          "range": [
            566,
            587
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        562,
        588
      ],
      "loc": {
        "end": {
          "column": 26,
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
            "name": "r",
            "optional": false,
            "range": [
              593,
              594
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                598,
                614
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 25
                },
                "start": {
                  "column": 9,
                  "line": 25
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              597,
              614
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 25
              },
              "start": {
                "column": 8,
                "line": 25
              }
            }
          },
          "range": [
            593,
            614
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        589,
        615
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "s",
            "optional": false,
            "range": [
              620,
              621
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "<",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                624,
                640
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                643,
                659
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 26
                },
                "start": {
                  "column": 27,
                  "line": 26
                }
              }
            },
            "range": [
              624,
              659
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 26
              },
              "start": {
                "column": 8,
                "line": 26
              }
            }
          },
          "range": [
            620,
            659
          ],
          "loc": {
            "end": {
              "column": 43,
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
      "kind": "let",
      "range": [
        616,
        660
      ],
      "loc": {
        "end": {
          "column": 44,
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
            "name": "t",
            "optional": false,
            "range": [
              665,
              666
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                669,
                685
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 27
                },
                "start": {
                  "column": 8,
                  "line": 27
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "range": [
                689,
                697
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 27
                },
                "start": {
                  "column": 28,
                  "line": 27
                }
              }
            },
            "range": [
              669,
              697
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 27
              },
              "start": {
                "column": 8,
                "line": 27
              }
            }
          },
          "range": [
            665,
            697
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        661,
        698
      ],
      "loc": {
        "end": {
          "column": 37,
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
            "name": "u",
            "optional": false,
            "range": [
              703,
              704
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
          "init": {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                707,
                710
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 28
                },
                "start": {
                  "column": 8,
                  "line": 28
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "range": [
                715,
                723
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 28
                }
              }
            },
            "range": [
              707,
              723
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 28
              },
              "start": {
                "column": 8,
                "line": 28
              }
            }
          },
          "range": [
            703,
            723
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        699,
        724
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "v",
            "optional": false,
            "range": [
              729,
              730
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
          "init": {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "range": [
                733,
                741
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                746,
                762
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 29
                },
                "start": {
                  "column": 21,
                  "line": 29
                }
              }
            },
            "range": [
              733,
              762
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 29
              },
              "start": {
                "column": 8,
                "line": 29
              }
            }
          },
          "range": [
            729,
            762
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        725,
        763
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 29
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
      "column": 38,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
