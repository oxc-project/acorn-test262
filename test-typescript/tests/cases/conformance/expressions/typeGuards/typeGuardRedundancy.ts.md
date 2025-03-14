__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    351
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              },
              "range": [
                5,
                20
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      7,
                      13
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 1
                      },
                      "start": {
                        "column": 7,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      14,
                      20
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 1
                      },
                      "start": {
                        "column": 14,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  7,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 1
                  },
                  "start": {
                    "column": 7,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
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
            20
          ],
          "loc": {
            "end": {
              "column": 20,
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
        21
      ],
      "loc": {
        "end": {
          "column": 21,
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
            "name": "r1",
            "optional": false,
            "range": [
              27,
              29
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
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
                    "column": 70,
                    "line": 3
                  },
                  "start": {
                    "column": 69,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "range": [
                  94,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 3
                  },
                  "start": {
                    "column": 71,
                    "line": 3
                  }
                }
              },
              "range": [
                92,
                101
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 3
                },
                "start": {
                  "column": 69,
                  "line": 3
                }
              }
            },
            "consequent": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  81,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 3
                  },
                  "start": {
                    "column": 58,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "range": [
                  83,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 3
                  },
                  "start": {
                    "column": 60,
                    "line": 3
                  }
                }
              },
              "range": [
                81,
                89
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 3
                },
                "start": {
                  "column": 58,
                  "line": 3
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      39,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 3
                      },
                      "start": {
                        "column": 16,
                        "line": 3
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    32,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 3
                    },
                    "start": {
                      "column": 9,
                      "line": 3
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    45,
                    53
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 22,
                      "line": 3
                    }
                  }
                },
                "range": [
                  32,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 9,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      64,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 3
                      },
                      "start": {
                        "column": 41,
                        "line": 3
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    57,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 3
                    },
                    "start": {
                      "column": 34,
                      "line": 3
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    70,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 3
                    },
                    "start": {
                      "column": 47,
                      "line": 3
                    }
                  }
                },
                "range": [
                  57,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 3
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                }
              },
              "range": [
                32,
                78
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "range": [
              32,
              101
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          },
          "range": [
            27,
            101
          ],
          "loc": {
            "end": {
              "column": 78,
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
      "kind": "var",
      "range": [
        23,
        102
      ],
      "loc": {
        "end": {
          "column": 79,
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
            "name": "r2",
            "optional": false,
            "range": [
              108,
              110
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  177,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 5
                  },
                  "start": {
                    "column": 73,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "range": [
                  179,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 5
                  },
                  "start": {
                    "column": 75,
                    "line": 5
                  }
                }
              },
              "range": [
                177,
                185
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 5
                },
                "start": {
                  "column": 73,
                  "line": 5
                }
              }
            },
            "consequent": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  165,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 5
                  },
                  "start": {
                    "column": 61,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "range": [
                  167,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 5
                  },
                  "start": {
                    "column": 63,
                    "line": 5
                  }
                }
              },
              "range": [
                165,
                174
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 5
                },
                "start": {
                  "column": 61,
                  "line": 5
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
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
                          "column": 19,
                          "line": 5
                        },
                        "start": {
                          "column": 18,
                          "line": 5
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      115,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 11,
                        "line": 5
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      128,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    115,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 5
                    },
                    "start": {
                      "column": 11,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        147,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 5
                        },
                        "start": {
                          "column": 43,
                          "line": 5
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      140,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 5
                      },
                      "start": {
                        "column": 36,
                        "line": 5
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      153,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 5
                      },
                      "start": {
                        "column": 49,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    140,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 5
                    },
                    "start": {
                      "column": 36,
                      "line": 5
                    }
                  }
                },
                "range": [
                  115,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                113,
                162
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              }
            },
            "range": [
              113,
              185
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 5
              },
              "start": {
                "column": 9,
                "line": 5
              }
            }
          },
          "range": [
            108,
            185
          ],
          "loc": {
            "end": {
              "column": 81,
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
        104,
        186
      ],
      "loc": {
        "end": {
          "column": 82,
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
            "name": "r3",
            "optional": false,
            "range": [
              192,
              194
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  257,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 7
                  },
                  "start": {
                    "column": 69,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "range": [
                  259,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 7
                  },
                  "start": {
                    "column": 71,
                    "line": 7
                  }
                }
              },
              "range": [
                257,
                266
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 7
                },
                "start": {
                  "column": 69,
                  "line": 7
                }
              }
            },
            "consequent": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  246,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 7
                  },
                  "start": {
                    "column": 58,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "range": [
                  248,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 7
                  },
                  "start": {
                    "column": 60,
                    "line": 7
                  }
                }
              },
              "range": [
                246,
                254
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 7
                },
                "start": {
                  "column": 58,
                  "line": 7
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      204,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 16,
                        "line": 7
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    197,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 9,
                      "line": 7
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    210,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 7
                    },
                    "start": {
                      "column": 22,
                      "line": 7
                    }
                  }
                },
                "range": [
                  197,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      229,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 7
                      },
                      "start": {
                        "column": 41,
                        "line": 7
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    222,
                    230
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 7
                    },
                    "start": {
                      "column": 34,
                      "line": 7
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    235,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 7
                    },
                    "start": {
                      "column": 47,
                      "line": 7
                    }
                  }
                },
                "range": [
                  222,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 7
                  },
                  "start": {
                    "column": 34,
                    "line": 7
                  }
                }
              },
              "range": [
                197,
                243
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "range": [
              197,
              266
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 7
              },
              "start": {
                "column": 9,
                "line": 7
              }
            }
          },
          "range": [
            192,
            266
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        188,
        267
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "r4",
            "optional": false,
            "range": [
              273,
              275
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  342,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 9
                  },
                  "start": {
                    "column": 73,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "range": [
                  344,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 9
                  },
                  "start": {
                    "column": 75,
                    "line": 9
                  }
                }
              },
              "range": [
                342,
                350
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 9
                },
                "start": {
                  "column": 73,
                  "line": 9
                }
              }
            },
            "consequent": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  330,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 9
                  },
                  "start": {
                    "column": 61,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "range": [
                  332,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 9
                  },
                  "start": {
                    "column": 63,
                    "line": 9
                  }
                }
              },
              "range": [
                330,
                339
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 9
                },
                "start": {
                  "column": 61,
                  "line": 9
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        287,
                        288
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
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      280,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 11,
                        "line": 9
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      293,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 9
                      },
                      "start": {
                        "column": 24,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    280,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        312,
                        313
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 9
                        },
                        "start": {
                          "column": 43,
                          "line": 9
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      305,
                      313
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 36,
                        "line": 9
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      318,
                      326
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 9
                      },
                      "start": {
                        "column": 49,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    305,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 9
                    },
                    "start": {
                      "column": 36,
                      "line": 9
                    }
                  }
                },
                "range": [
                  280,
                  326
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                278,
                327
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              }
            },
            "range": [
              278,
              350
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "range": [
            273,
            350
          ],
          "loc": {
            "end": {
              "column": 81,
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
      "kind": "var",
      "range": [
        269,
        351
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 82,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
