__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    37,
    829
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                45,
                98
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      47,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 2
                      },
                      "start": {
                        "column": 10,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      56,
                      62
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      65,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 2
                      },
                      "start": {
                        "column": 28,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        75,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 2
                        },
                        "start": {
                          "column": 38,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      75,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 2
                      },
                      "start": {
                        "column": 38,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "range": [
                      83,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 2
                      },
                      "start": {
                        "column": 46,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSBigIntKeyword",
                    "range": [
                      92,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 2
                      },
                      "start": {
                        "column": 55,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  47,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              41,
              98
            ],
            "loc": {
              "end": {
                "column": 61,
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
            41,
            98
          ],
          "loc": {
            "end": {
              "column": 61,
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
        37,
        99
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                139,
                143
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              139,
              144
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
          }
        ],
        "range": [
          133,
          156
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 33,
            "line": 3
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              104,
              108
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              109,
              120
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          },
          "range": [
            104,
            120
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "String",
          "optional": false,
          "range": [
            125,
            131
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 25,
              "line": 3
            }
          }
        },
        "range": [
          104,
          131
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 4,
            "line": 3
          }
        }
      },
      "range": [
        100,
        156
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                196,
                200
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
              196,
              201
            ],
            "loc": {
              "end": {
                "column": 9,
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
          190,
          213
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 33,
            "line": 6
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              161,
              165
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              166,
              177
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 6
              },
              "start": {
                "column": 9,
                "line": 6
              }
            }
          },
          "range": [
            161,
            177
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Number",
          "optional": false,
          "range": [
            182,
            188
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 6
            },
            "start": {
              "column": 25,
              "line": 6
            }
          }
        },
        "range": [
          161,
          188
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 6
          },
          "start": {
            "column": 4,
            "line": 6
          }
        }
      },
      "range": [
        157,
        213
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
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                254,
                258
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              254,
              259
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          248,
          272
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 34,
            "line": 9
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              218,
              222
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              223,
              234
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "range": [
            218,
            234
          ],
          "loc": {
            "end": {
              "column": 20,
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
          "name": "Boolean",
          "optional": false,
          "range": [
            239,
            246
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 9
            },
            "start": {
              "column": 25,
              "line": 9
            }
          }
        },
        "range": [
          218,
          246
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 9
          },
          "start": {
            "column": 4,
            "line": 9
          }
        }
      },
      "range": [
        214,
        272
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                311,
                315
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              311,
              316
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
          }
        ],
        "range": [
          305,
          327
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 32,
            "line": 12
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              277,
              281
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              282,
              293
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 9,
                "line": 12
              }
            }
          },
          "range": [
            277,
            293
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "range": [
            298,
            303
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 12
            },
            "start": {
              "column": 25,
              "line": 12
            }
          }
        },
        "range": [
          277,
          303
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 12
          },
          "start": {
            "column": 4,
            "line": 12
          }
        }
      },
      "range": [
        273,
        327
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                367,
                371
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              367,
              372
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          361,
          384
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 33,
            "line": 15
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              332,
              336
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              337,
              348
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 15
              },
              "start": {
                "column": 9,
                "line": 15
              }
            }
          },
          "range": [
            332,
            348
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "range": [
            353,
            359
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 15
            },
            "start": {
              "column": 25,
              "line": 15
            }
          }
        },
        "range": [
          332,
          359
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 15
          },
          "start": {
            "column": 4,
            "line": 15
          }
        }
      },
      "range": [
        328,
        384
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                424,
                428
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              424,
              429
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          418,
          441
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 33,
            "line": 18
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              389,
              393
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              394,
              405
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            389,
            405
          ],
          "loc": {
            "end": {
              "column": 20,
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
          "name": "BigInt",
          "optional": false,
          "range": [
            410,
            416
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 18
            },
            "start": {
              "column": 25,
              "line": 18
            }
          }
        },
        "range": [
          389,
          416
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 18
          },
          "start": {
            "column": 4,
            "line": 18
          }
        }
      },
      "range": [
        385,
        441
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
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
            "name": "var2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              },
              "range": [
                495,
                540
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "range": [
                        497,
                        503
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 23
                        },
                        "start": {
                          "column": 10,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      497,
                      503
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 23
                      },
                      "start": {
                        "column": 10,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "range": [
                        506,
                        512
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 23
                        },
                        "start": {
                          "column": 19,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      506,
                      512
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 23
                      },
                      "start": {
                        "column": 19,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Boolean",
                      "optional": false,
                      "range": [
                        515,
                        522
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 23
                        },
                        "start": {
                          "column": 28,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      515,
                      522
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 23
                      },
                      "start": {
                        "column": 28,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "range": [
                        525,
                        531
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 23
                        },
                        "start": {
                          "column": 38,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      525,
                      531
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 23
                      },
                      "start": {
                        "column": 38,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BigInt",
                      "optional": false,
                      "range": [
                        534,
                        540
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 23
                        },
                        "start": {
                          "column": 47,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      534,
                      540
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 23
                      },
                      "start": {
                        "column": 47,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  497,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 23
                  },
                  "start": {
                    "column": 10,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              491,
              540
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": null,
          "range": [
            491,
            540
          ],
          "loc": {
            "end": {
              "column": 53,
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
        487,
        541
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "range": [
                581,
                585
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              581,
              586
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "range": [
          575,
          598
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 33,
            "line": 24
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "range": [
              546,
              550
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              551,
              562
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "range": [
            546,
            562
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "String",
          "optional": false,
          "range": [
            567,
            573
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 24
            },
            "start": {
              "column": 25,
              "line": 24
            }
          }
        },
        "range": [
          546,
          573
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 24
          },
          "start": {
            "column": 4,
            "line": 24
          }
        }
      },
      "range": [
        542,
        598
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 24
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "range": [
                638,
                642
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
            "range": [
              638,
              643
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
          }
        ],
        "range": [
          632,
          655
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 33,
            "line": 27
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "range": [
              603,
              607
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              608,
              619
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 27
              },
              "start": {
                "column": 9,
                "line": 27
              }
            }
          },
          "range": [
            603,
            619
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Number",
          "optional": false,
          "range": [
            624,
            630
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 27
            },
            "start": {
              "column": 25,
              "line": 27
            }
          }
        },
        "range": [
          603,
          630
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 27
          },
          "start": {
            "column": 4,
            "line": 27
          }
        }
      },
      "range": [
        599,
        655
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "range": [
                696,
                700
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              696,
              701
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          690,
          714
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 34,
            "line": 30
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "range": [
              660,
              664
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              665,
              676
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 30
              },
              "start": {
                "column": 9,
                "line": 30
              }
            }
          },
          "range": [
            660,
            676
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boolean",
          "optional": false,
          "range": [
            681,
            688
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 30
            },
            "start": {
              "column": 25,
              "line": 30
            }
          }
        },
        "range": [
          660,
          688
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 30
          },
          "start": {
            "column": 4,
            "line": 30
          }
        }
      },
      "range": [
        656,
        714
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 30
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "range": [
                754,
                758
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              754,
              759
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
          }
        ],
        "range": [
          748,
          771
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 33,
            "line": 33
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "range": [
              719,
              723
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
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              724,
              735
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 33
              },
              "start": {
                "column": 9,
                "line": 33
              }
            }
          },
          "range": [
            719,
            735
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "range": [
            740,
            746
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 33
            },
            "start": {
              "column": 25,
              "line": 33
            }
          }
        },
        "range": [
          719,
          746
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 33
          },
          "start": {
            "column": 4,
            "line": 33
          }
        }
      },
      "range": [
        715,
        771
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 33
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "range": [
                811,
                815
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              811,
              816
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          805,
          828
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 33,
            "line": 36
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "range": [
              776,
              780
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              781,
              792
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 36
              },
              "start": {
                "column": 9,
                "line": 36
              }
            }
          },
          "range": [
            776,
            792
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "range": [
            797,
            803
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 36
            },
            "start": {
              "column": 25,
              "line": 36
            }
          }
        },
        "range": [
          776,
          803
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 36
          },
          "start": {
            "column": 4,
            "line": 36
          }
        }
      },
      "range": [
        772,
        828
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
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
      "line": 39
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
