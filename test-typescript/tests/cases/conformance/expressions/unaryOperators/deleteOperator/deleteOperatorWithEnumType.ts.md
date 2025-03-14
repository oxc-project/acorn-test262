__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    34,
    521
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          44,
          47
        ],
        "members": [],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "range": [
          39,
          43
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "range": [
        34,
        47
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        47,
        48
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 3
        },
        "start": {
          "column": 13,
          "line": 3
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          60,
          72
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                62,
                63
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
            "range": [
              62,
              63
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
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                65,
                66
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
            },
            "range": [
              65,
              66
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
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                68,
                70
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            },
            "range": [
              68,
              70
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 19,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 11,
            "line": 4
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "range": [
          54,
          59
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "range": [
        49,
        72
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
      "type": "EmptyStatement",
      "range": [
        72,
        73
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 4
        },
        "start": {
          "column": 23,
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "range": [
              96,
              112
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "range": [
                122,
                126
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 7
                },
                "start": {
                  "column": 30,
                  "line": 7
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              115,
              126
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 7
              },
              "start": {
                "column": 23,
                "line": 7
              }
            }
          },
          "range": [
            96,
            126
          ],
          "loc": {
            "end": {
              "column": 34,
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
        92,
        127
      ],
      "loc": {
        "end": {
          "column": 35,
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "range": [
              132,
              148
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "range": [
                158,
                163
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 8
                },
                "start": {
                  "column": 30,
                  "line": 8
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              151,
              163
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 8
              },
              "start": {
                "column": 23,
                "line": 8
              }
            }
          },
          "range": [
            132,
            163
          ],
          "loc": {
            "end": {
              "column": 35,
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
      "kind": "var",
      "range": [
        128,
        164
      ],
      "loc": {
        "end": {
          "column": 36,
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "range": [
              195,
              211
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "range": [
                  221,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 11
                  },
                  "start": {
                    "column": 30,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "\"A\"",
                "value": "A",
                "range": [
                  227,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 11
                  },
                  "start": {
                    "column": 36,
                    "line": 11
                  }
                }
              },
              "range": [
                221,
                231
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 11
                },
                "start": {
                  "column": 30,
                  "line": 11
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              214,
              231
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 11
              },
              "start": {
                "column": 23,
                "line": 11
              }
            }
          },
          "range": [
            195,
            231
          ],
          "loc": {
            "end": {
              "column": 40,
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
      "kind": "var",
      "range": [
        191,
        232
      ],
      "loc": {
        "end": {
          "column": 41,
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "range": [
              237,
              253
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "range": [
                    264,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 12
                    },
                    "start": {
                      "column": 31,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    269,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 12
                    },
                    "start": {
                      "column": 36,
                      "line": 12
                    }
                  }
                },
                "range": [
                  264,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 12
                  },
                  "start": {
                    "column": 31,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "range": [
                    274,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 12
                    },
                    "start": {
                      "column": 41,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "\"B\"",
                  "value": "B",
                  "range": [
                    280,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 12
                    },
                    "start": {
                      "column": 47,
                      "line": 12
                    }
                  }
                },
                "range": [
                  274,
                  284
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 12
                  },
                  "start": {
                    "column": 41,
                    "line": 12
                  }
                }
              },
              "range": [
                264,
                284
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 12
                },
                "start": {
                  "column": 31,
                  "line": 12
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              256,
              285
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 12
              },
              "start": {
                "column": 23,
                "line": 12
              }
            }
          },
          "range": [
            237,
            285
          ],
          "loc": {
            "end": {
              "column": 52,
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
      "kind": "var",
      "range": [
        233,
        286
      ],
      "loc": {
        "end": {
          "column": 53,
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "range": [
              322,
              338
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "range": [
                  355,
                  359
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 15
                  },
                  "start": {
                    "column": 37,
                    "line": 15
                  }
                }
              },
              "operator": "delete",
              "prefix": true,
              "range": [
                348,
                359
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 15
                },
                "start": {
                  "column": 30,
                  "line": 15
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              341,
              359
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 15
              },
              "start": {
                "column": 23,
                "line": 15
              }
            }
          },
          "range": [
            322,
            359
          ],
          "loc": {
            "end": {
              "column": 41,
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
      "kind": "var",
      "range": [
        318,
        360
      ],
      "loc": {
        "end": {
          "column": 42,
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "range": [
              365,
              381
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UnaryExpression",
              "argument": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "range": [
                        406,
                        410
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 16
                        },
                        "start": {
                          "column": 45,
                          "line": 16
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        411,
                        412
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 16
                        },
                        "start": {
                          "column": 50,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      406,
                      413
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 16
                      },
                      "start": {
                        "column": 45,
                        "line": 16
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "range": [
                        416,
                        421
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 16
                        },
                        "start": {
                          "column": 55,
                          "line": 16
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"B\"",
                      "value": "B",
                      "range": [
                        422,
                        425
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 16
                        },
                        "start": {
                          "column": 61,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      416,
                      426
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 16
                      },
                      "start": {
                        "column": 55,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    406,
                    426
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 16
                    },
                    "start": {
                      "column": 45,
                      "line": 16
                    }
                  }
                },
                "operator": "delete",
                "prefix": true,
                "range": [
                  398,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 16
                  },
                  "start": {
                    "column": 37,
                    "line": 16
                  }
                }
              },
              "operator": "delete",
              "prefix": true,
              "range": [
                391,
                427
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 16
                },
                "start": {
                  "column": 30,
                  "line": 16
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              384,
              427
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 16
              },
              "start": {
                "column": 23,
                "line": 16
              }
            }
          },
          "range": [
            365,
            427
          ],
          "loc": {
            "end": {
              "column": 66,
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
      "kind": "var",
      "range": [
        361,
        428
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
          "name": "ENUM",
          "optional": false,
          "range": [
            466,
            470
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 19
            },
            "start": {
              "column": 7,
              "line": 19
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          459,
          470
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        459,
        471
      ],
      "loc": {
        "end": {
          "column": 12,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "range": [
            479,
            484
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 20
            },
            "start": {
              "column": 7,
              "line": 20
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          472,
          484
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        472,
        485
      ],
      "loc": {
        "end": {
          "column": 13,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "range": [
              493,
              498
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 21
              },
              "start": {
                "column": 7,
                "line": 21
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              499,
              500
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
            493,
            500
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 21
            },
            "start": {
              "column": 7,
              "line": 21
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          486,
          500
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        486,
        501
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "range": [
                509,
                513
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 7,
                  "line": 22
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              502,
              513
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
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "range": [
              515,
              520
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 22
              },
              "start": {
                "column": 13,
                "line": 22
              }
            }
          }
        ],
        "range": [
          502,
          520
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        502,
        521
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 19,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
