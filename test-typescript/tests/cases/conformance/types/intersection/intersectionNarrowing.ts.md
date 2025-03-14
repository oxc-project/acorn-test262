__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    807
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      92,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    92,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                82,
                132
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                79,
                80
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              75,
              132
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          69,
          134
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 46,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          32,
          34
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
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
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            },
            "range": [
              39,
              67
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          41,
                          42
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 3
                          },
                          "start": {
                            "column": 18,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        41,
                        42
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 3
                        },
                        "start": {
                          "column": 18,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        45,
                        51
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 3
                        },
                        "start": {
                          "column": 22,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    41,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 18,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          54,
                          55
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 3
                          },
                          "start": {
                            "column": 31,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        54,
                        55
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 3
                        },
                        "start": {
                          "column": 31,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        58,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 3
                        },
                        "start": {
                          "column": 35,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    54,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 3
                    },
                    "start": {
                      "column": 31,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                41,
                67
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            }
          },
          "range": [
            38,
            67
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 3
            },
            "start": {
              "column": 15,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        },
        "range": [
          34,
          37
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                35,
                36
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              35,
              36
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        23,
        134
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 3
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      279,
                      280
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    279,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                269,
                322
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      219,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    219,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                209,
                259
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 25,
                  "line": 10
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  192,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 9,
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
                "name": "undefined",
                "optional": false,
                "range": [
                  198,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 10
                  },
                  "start": {
                    "column": 14,
                    "line": 10
                  }
                }
              },
              "range": [
                192,
                207
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "range": [
              188,
              322
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          182,
          324
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 46,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          145,
          147
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
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
                "column": 44,
                "line": 9
              },
              "start": {
                "column": 16,
                "line": 9
              }
            },
            "range": [
              152,
              180
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          154,
                          155
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
                      "range": [
                        154,
                        155
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
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        158,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 9
                        },
                        "start": {
                          "column": 22,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "range": [
                    154,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 18,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          167,
                          168
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 9
                          },
                          "start": {
                            "column": 31,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        167,
                        168
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 9
                        },
                        "start": {
                          "column": 31,
                          "line": 9
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        171,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 9
                        },
                        "start": {
                          "column": 35,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "range": [
                    167,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 9
                    },
                    "start": {
                      "column": 31,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                154,
                180
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 9
                },
                "start": {
                  "column": 18,
                  "line": 9
                }
              }
            }
          },
          "range": [
            151,
            180
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 9
            },
            "start": {
              "column": 15,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 9
          },
          "start": {
            "column": 11,
            "line": 9
          }
        },
        "range": [
          147,
          150
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                148,
                149
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              148,
              149
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        136,
        324
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 9
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      472,
                      473
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
                    472,
                    474
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                462,
                512
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      412,
                      413
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    412,
                    414
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                402,
                452
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 31,
                  "line": 19
                }
              }
            },
            "test": {
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
                    386,
                    387
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 19
                    },
                    "start": {
                      "column": 15,
                      "line": 19
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  379,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  392,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 19
                  },
                  "start": {
                    "column": 21,
                    "line": 19
                  }
                }
              },
              "range": [
                379,
                400
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              }
            },
            "range": [
              375,
              512
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          369,
          514
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 43,
            "line": 18
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          335,
          337
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
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
                "line": 18
              },
              "start": {
                "column": 16,
                "line": 18
              }
            },
            "range": [
              342,
              367
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          344,
                          345
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 18
                          },
                          "start": {
                            "column": 18,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        344,
                        345
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 18
                        },
                        "start": {
                          "column": 18,
                          "line": 18
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        348,
                        354
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
                    }
                  ],
                  "range": [
                    344,
                    354
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 18
                    },
                    "start": {
                      "column": 18,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          357,
                          358
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 18
                          },
                          "start": {
                            "column": 31,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        357,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 18
                        },
                        "start": {
                          "column": 31,
                          "line": 18
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        361,
                        367
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 18
                        },
                        "start": {
                          "column": 35,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "range": [
                    357,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
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
                344,
                367
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 18
                },
                "start": {
                  "column": 18,
                  "line": 18
                }
              }
            }
          },
          "range": [
            341,
            367
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 18
            },
            "start": {
              "column": 15,
              "line": 18
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 18
          },
          "start": {
            "column": 11,
            "line": 18
          }
        },
        "range": [
          337,
          340
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                338,
                339
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 12,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              338,
              339
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 18
              },
              "start": {
                "column": 12,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        326,
        514
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        584,
                        585
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 29
                        },
                        "start": {
                          "column": 16,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      584,
                      586
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 29
                      },
                      "start": {
                        "column": 16,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      587,
                      593
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 29
                      },
                      "start": {
                        "column": 19,
                        "line": 29
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    581,
                    582
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 29
                    },
                    "start": {
                      "column": 13,
                      "line": 29
                    }
                  }
                },
                "range": [
                  576,
                  593
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        620,
                        621
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 30
                        },
                        "start": {
                          "column": 16,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      620,
                      622
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 30
                      },
                      "start": {
                        "column": 16,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      623,
                      629
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 30
                      },
                      "start": {
                        "column": 19,
                        "line": 30
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    617,
                    618
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
                  612,
                  629
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        657,
                        658
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 31
                        },
                        "start": {
                          "column": 17,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      657,
                      659
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 31
                      },
                      "start": {
                        "column": 17,
                        "line": 31
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  648,
                  659
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                563,
                564
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
              555,
              692
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          549,
          694
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 33,
            "line": 27
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          525,
          527
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
                "column": 31,
                "line": 27
              },
              "start": {
                "column": 16,
                "line": 27
              }
            },
            "range": [
              532,
              547
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          534,
                          535
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 27
                          },
                          "start": {
                            "column": 18,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        534,
                        535
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 27
                        },
                        "start": {
                          "column": 18,
                          "line": 27
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          538,
                          539
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 27
                          },
                          "start": {
                            "column": 22,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        538,
                        539
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 27
                        },
                        "start": {
                          "column": 22,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "range": [
                    534,
                    539
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 27
                    },
                    "start": {
                      "column": 18,
                      "line": 27
                    }
                  }
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          542,
                          543
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 27
                          },
                          "start": {
                            "column": 26,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        542,
                        543
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 27
                        },
                        "start": {
                          "column": 26,
                          "line": 27
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          546,
                          547
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 27
                          },
                          "start": {
                            "column": 30,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        546,
                        547
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 27
                        },
                        "start": {
                          "column": 30,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "range": [
                    542,
                    547
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 27
                    },
                    "start": {
                      "column": 26,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                534,
                547
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 27
                },
                "start": {
                  "column": 18,
                  "line": 27
                }
              }
            }
          },
          "range": [
            531,
            547
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 27
            },
            "start": {
              "column": 15,
              "line": 27
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 27
          },
          "start": {
            "column": 11,
            "line": 27
          }
        },
        "range": [
          527,
          530
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                528,
                529
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              528,
              529
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 27
              },
              "start": {
                "column": 12,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        516,
        694
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 27
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
                  "name": "t1",
                  "optional": false,
                  "range": [
                    762,
                    764
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
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      767,
                      768
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
                  "right": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      773,
                      780
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 36
                      },
                      "start": {
                        "column": 21,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    767,
                    780
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 36
                    },
                    "start": {
                      "column": 15,
                      "line": 36
                    }
                  }
                },
                "range": [
                  762,
                  780
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 36
                  },
                  "start": {
                    "column": 10,
                    "line": 36
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              756,
              781
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          750,
          806
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 54,
            "line": 35
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          705,
          707
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 35
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
                "column": 52,
                "line": 35
              },
              "start": {
                "column": 40,
                "line": 35
              }
            },
            "range": [
              736,
              748
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      738,
                      739
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 35
                      },
                      "start": {
                        "column": 42,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    738,
                    739
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 35
                    },
                    "start": {
                      "column": 42,
                      "line": 35
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    742,
                    748
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 35
                    },
                    "start": {
                      "column": 46,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                738,
                748
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 35
                },
                "start": {
                  "column": 42,
                  "line": 35
                }
              }
            }
          },
          "range": [
            735,
            748
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 35
            },
            "start": {
              "column": 39,
              "line": 35
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 35
          },
          "start": {
            "column": 11,
            "line": 35
          }
        },
        "range": [
          707,
          734
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    718,
                    724
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 35
                    },
                    "start": {
                      "column": 22,
                      "line": 35
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    727,
                    733
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 35
                    },
                    "start": {
                      "column": 31,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                718,
                733
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 35
                },
                "start": {
                  "column": 22,
                  "line": 35
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                708,
                709
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 35
                },
                "start": {
                  "column": 12,
                  "line": 35
                }
              }
            },
            "out": false,
            "range": [
              708,
              733
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 35
              },
              "start": {
                "column": 12,
                "line": 35
              }
            }
          }
        ]
      },
      "range": [
        696,
        806
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
