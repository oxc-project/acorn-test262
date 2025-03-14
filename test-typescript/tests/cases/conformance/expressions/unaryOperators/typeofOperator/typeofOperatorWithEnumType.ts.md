__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    34,
    589
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
            "name": "ResultIsString1",
            "optional": false,
            "range": [
              96,
              111
            ],
            "loc": {
              "end": {
                "column": 19,
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
                121,
                125
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              114,
              125
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 7
              },
              "start": {
                "column": 22,
                "line": 7
              }
            }
          },
          "range": [
            96,
            125
          ],
          "loc": {
            "end": {
              "column": 33,
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
        126
      ],
      "loc": {
        "end": {
          "column": 34,
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
            "name": "ResultIsString2",
            "optional": false,
            "range": [
              131,
              146
            ],
            "loc": {
              "end": {
                "column": 19,
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
                156,
                161
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 29,
                  "line": 8
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              149,
              161
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 8
              },
              "start": {
                "column": 22,
                "line": 8
              }
            }
          },
          "range": [
            131,
            161
          ],
          "loc": {
            "end": {
              "column": 34,
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
        127,
        162
      ],
      "loc": {
        "end": {
          "column": 35,
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
            "name": "ResultIsString3",
            "optional": false,
            "range": [
              193,
              208
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  218,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
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
                  224,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 11
                  },
                  "start": {
                    "column": 35,
                    "line": 11
                  }
                }
              },
              "range": [
                218,
                228
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 11
                },
                "start": {
                  "column": 29,
                  "line": 11
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              211,
              228
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 11
              },
              "start": {
                "column": 22,
                "line": 11
              }
            }
          },
          "range": [
            193,
            228
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
      "kind": "var",
      "range": [
        189,
        229
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
            "name": "ResultIsString4",
            "optional": false,
            "range": [
              234,
              249
            ],
            "loc": {
              "end": {
                "column": 19,
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
                    260,
                    264
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 12
                    },
                    "start": {
                      "column": 30,
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
                    265,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 12
                    },
                    "start": {
                      "column": 35,
                      "line": 12
                    }
                  }
                },
                "range": [
                  260,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 12
                  },
                  "start": {
                    "column": 30,
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
                    270,
                    275
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 12
                    },
                    "start": {
                      "column": 40,
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
                    276,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 12
                    },
                    "start": {
                      "column": 46,
                      "line": 12
                    }
                  }
                },
                "range": [
                  270,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 12
                  },
                  "start": {
                    "column": 40,
                    "line": 12
                  }
                }
              },
              "range": [
                260,
                280
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 12
                },
                "start": {
                  "column": 30,
                  "line": 12
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              252,
              281
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            }
          },
          "range": [
            234,
            281
          ],
          "loc": {
            "end": {
              "column": 51,
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
        230,
        282
      ],
      "loc": {
        "end": {
          "column": 52,
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
            "name": "ResultIsString5",
            "optional": false,
            "range": [
              318,
              333
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  350,
                  354
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 15
                  },
                  "start": {
                    "column": 36,
                    "line": 15
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                343,
                354
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 15
                },
                "start": {
                  "column": 29,
                  "line": 15
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              336,
              354
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 15
              },
              "start": {
                "column": 22,
                "line": 15
              }
            }
          },
          "range": [
            318,
            354
          ],
          "loc": {
            "end": {
              "column": 40,
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
        314,
        355
      ],
      "loc": {
        "end": {
          "column": 41,
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
            "name": "ResultIsString6",
            "optional": false,
            "range": [
              360,
              375
            ],
            "loc": {
              "end": {
                "column": 19,
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
                        400,
                        404
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 16
                        },
                        "start": {
                          "column": 44,
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
                        405,
                        406
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 16
                        },
                        "start": {
                          "column": 49,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      400,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 16
                      },
                      "start": {
                        "column": 44,
                        "line": 16
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "range": [
                        410,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 16
                        },
                        "start": {
                          "column": 54,
                          "line": 16
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
                        416,
                        417
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 16
                        },
                        "start": {
                          "column": 60,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      410,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 16
                      },
                      "start": {
                        "column": 54,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    400,
                    417
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 16
                    },
                    "start": {
                      "column": 44,
                      "line": 16
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  392,
                  418
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 16
                  },
                  "start": {
                    "column": 36,
                    "line": 16
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                385,
                418
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 16
                },
                "start": {
                  "column": 29,
                  "line": 16
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              378,
              418
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 16
              },
              "start": {
                "column": 22,
                "line": 16
              }
            }
          },
          "range": [
            360,
            418
          ],
          "loc": {
            "end": {
              "column": 62,
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
        356,
        419
      ],
      "loc": {
        "end": {
          "column": 63,
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
            457,
            461
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
        "operator": "typeof",
        "prefix": true,
        "range": [
          450,
          461
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
        450,
        462
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
            470,
            475
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
        "operator": "typeof",
        "prefix": true,
        "range": [
          463,
          475
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
        463,
        476
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "range": [
              484,
              489
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
            "type": "Literal",
            "raw": "\"B\"",
            "value": "B",
            "range": [
              490,
              493
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 21
              },
              "start": {
                "column": 13,
                "line": 21
              }
            }
          },
          "range": [
            484,
            494
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 21
            },
            "start": {
              "column": 7,
              "line": 21
            }
          }
        },
        "operator": "typeof",
        "prefix": true,
        "range": [
          477,
          494
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        477,
        495
      ],
      "loc": {
        "end": {
          "column": 18,
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
                503,
                507
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
            "operator": "typeof",
            "prefix": true,
            "range": [
              496,
              507
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
              509,
              514
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
          496,
          514
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
        496,
        515
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
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          552,
          555
        ],
        "members": [],
        "loc": {
          "end": {
            "column": 10,
            "line": 25
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          550,
          551
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 25
          },
          "start": {
            "column": 5,
            "line": 25
          }
        }
      },
      "range": [
        545,
        555
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        555,
        556
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 25
        },
        "start": {
          "column": 10,
          "line": 25
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM",
            "optional": false,
            "range": [
              567,
              571
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 26
              },
              "start": {
                "column": 10,
                "line": 26
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            560,
            571
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 26
            },
            "start": {
              "column": 3,
              "line": 26
            }
          }
        },
        "range": [
          560,
          572
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 26
          },
          "start": {
            "column": 3,
            "line": 26
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          557,
          558
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        557,
        572
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "range": [
              583,
              588
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 27
              },
              "start": {
                "column": 10,
                "line": 27
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            576,
            588
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 27
            },
            "start": {
              "column": 3,
              "line": 27
            }
          }
        },
        "range": [
          576,
          589
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 27
          },
          "start": {
            "column": 3,
            "line": 27
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          573,
          574
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        573,
        589
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 16,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
