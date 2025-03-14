__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    24,
    532
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
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                187,
                203
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "100",
              "value": 100,
              "range": [
                206,
                209
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 8
                },
                "start": {
                  "column": 27,
                  "line": 8
                }
              }
            },
            "range": [
              187,
              209
            ],
            "loc": {
              "end": {
                "column": 30,
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
            209
          ],
          "loc": {
            "end": {
              "column": 30,
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
        210
      ],
      "loc": {
        "end": {
          "column": 31,
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
              215,
              216
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
              "type": "Literal",
              "raw": "100",
              "value": 100,
              "range": [
                219,
                222
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
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                225,
                241
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "range": [
              219,
              241
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          },
          "range": [
            215,
            241
          ],
          "loc": {
            "end": {
              "column": 30,
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
        211,
        242
      ],
      "loc": {
        "end": {
          "column": 31,
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
              247,
              248
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
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                251,
                267
              ],
              "loc": {
                "end": {
                  "column": 24,
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
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                270,
                286
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 10
                },
                "start": {
                  "column": 27,
                  "line": 10
                }
              }
            },
            "range": [
              251,
              286
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 10
              },
              "start": {
                "column": 8,
                "line": 10
              }
            }
          },
          "range": [
            247,
            286
          ],
          "loc": {
            "end": {
              "column": 43,
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
        243,
        287
      ],
      "loc": {
        "end": {
          "column": 44,
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
              292,
              293
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
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                296,
                312
              ],
              "loc": {
                "end": {
                  "column": 24,
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
              "raw": "true",
              "value": true,
              "range": [
                315,
                319
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 11
                },
                "start": {
                  "column": 27,
                  "line": 11
                }
              }
            },
            "range": [
              296,
              319
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 11
              }
            }
          },
          "range": [
            292,
            319
          ],
          "loc": {
            "end": {
              "column": 31,
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
        288,
        320
      ],
      "loc": {
        "end": {
          "column": 32,
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
              325,
              326
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
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                329,
                334
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
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                337,
                353
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 12
                },
                "start": {
                  "column": 16,
                  "line": 12
                }
              }
            },
            "range": [
              329,
              353
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 12
              },
              "start": {
                "column": 8,
                "line": 12
              }
            }
          },
          "range": [
            325,
            353
          ],
          "loc": {
            "end": {
              "column": 32,
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
        321,
        354
      ],
      "loc": {
        "end": {
          "column": 33,
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
              359,
              360
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
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                363,
                379
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "operator": "++",
            "prefix": false,
            "range": [
              363,
              381
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 13
              }
            }
          },
          "range": [
            359,
            381
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
      "declare": false,
      "kind": "let",
      "range": [
        355,
        382
      ],
      "loc": {
        "end": {
          "column": 27,
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
              387,
              388
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
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                393,
                409
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 14
                },
                "start": {
                  "column": 10,
                  "line": 14
                }
              }
            },
            "operator": "--",
            "prefix": true,
            "range": [
              391,
              409
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          },
          "range": [
            387,
            409
          ],
          "loc": {
            "end": {
              "column": 26,
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
        383,
        410
      ],
      "loc": {
        "end": {
          "column": 27,
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
              415,
              416
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
            "operator": "^",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                419,
                435
              ],
              "loc": {
                "end": {
                  "column": 24,
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
              "raw": "10",
              "value": 10,
              "range": [
                438,
                440
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 15
                },
                "start": {
                  "column": 27,
                  "line": 15
                }
              }
            },
            "range": [
              419,
              440
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          },
          "range": [
            415,
            440
          ],
          "loc": {
            "end": {
              "column": 29,
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
        411,
        441
      ],
      "loc": {
        "end": {
          "column": 30,
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
              446,
              447
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
            "operator": "|",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "range": [
                450,
                466
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                469,
                471
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 16
                },
                "start": {
                  "column": 27,
                  "line": 16
                }
              }
            },
            "range": [
              450,
              471
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 16
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          },
          "range": [
            446,
            471
          ],
          "loc": {
            "end": {
              "column": 29,
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
        442,
        472
      ],
      "loc": {
        "end": {
          "column": 30,
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
              477,
              478
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
            "operator": "<",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                481,
                484
              ],
              "loc": {
                "end": {
                  "column": 11,
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
              "name": "xyz",
              "optional": false,
              "range": [
                487,
                490
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 17
                },
                "start": {
                  "column": 14,
                  "line": 17
                }
              }
            },
            "range": [
              481,
              490
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          },
          "range": [
            477,
            490
          ],
          "loc": {
            "end": {
              "column": 17,
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
        473,
        491
      ],
      "loc": {
        "end": {
          "column": 18,
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
              496,
              497
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
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                500,
                503
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
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "range": [
                508,
                511
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 18
                }
              }
            },
            "range": [
              500,
              511
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 18
              },
              "start": {
                "column": 8,
                "line": 18
              }
            }
          },
          "range": [
            496,
            511
          ],
          "loc": {
            "end": {
              "column": 19,
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
        492,
        512
      ],
      "loc": {
        "end": {
          "column": 20,
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
              517,
              518
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
            "type": "BinaryExpression",
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                521,
                524
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
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "range": [
                528,
                531
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            },
            "range": [
              521,
              531
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          "range": [
            517,
            531
          ],
          "loc": {
            "end": {
              "column": 18,
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
        513,
        532
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 19,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
