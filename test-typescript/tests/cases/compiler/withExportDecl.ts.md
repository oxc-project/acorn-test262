__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1126
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
            "name": "simpleVar",
            "optional": false,
            "range": [
              4,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
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
            13
          ],
          "loc": {
            "end": {
              "column": 13,
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
        14
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        15,
        44
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exportedSimpleVar",
              "optional": false,
              "range": [
                26,
                43
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "init": null,
            "range": [
              26,
              43
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          22,
          44
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 29,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "anotherVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              },
              "range": [
                60,
                65
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  62,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              50,
              65
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            50,
            65
          ],
          "loc": {
            "end": {
              "column": 19,
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
      "kind": "var",
      "range": [
        46,
        66
      ],
      "loc": {
        "end": {
          "column": 20,
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
            "name": "varWithSimpleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              },
              "range": [
                88,
                96
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  90,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 5
                  },
                  "start": {
                    "column": 23,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              71,
              96
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            71,
            96
          ],
          "loc": {
            "end": {
              "column": 29,
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
        67,
        97
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "varWithArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              },
              "range": [
                118,
                128
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    120,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  }
                },
                "range": [
                  120,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 30,
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
              102,
              128
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            102,
            128
          ],
          "loc": {
            "end": {
              "column": 30,
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
      "kind": "var",
      "range": [
        98,
        129
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "varWithInitialValue",
            "optional": false,
            "range": [
              135,
              154
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "30",
            "value": 30,
            "range": [
              157,
              159
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 26,
                "line": 8
              }
            }
          },
          "range": [
            135,
            159
          ],
          "loc": {
            "end": {
              "column": 28,
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
        131,
        160
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        161,
        205
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exportedVarWithInitialValue",
              "optional": false,
              "range": [
                172,
                199
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "70",
              "value": 70,
              "range": [
                202,
                204
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 9
                },
                "start": {
                  "column": 41,
                  "line": 9
                }
              }
            },
            "range": [
              172,
              204
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 9
              },
              "start": {
                "column": 11,
                "line": 9
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          168,
          205
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 44,
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
            "name": "withComplicatedValue",
            "optional": false,
            "range": [
              211,
              231
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    236,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 11
                    },
                    "start": {
                      "column": 29,
                      "line": 11
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "30",
                  "value": 30,
                  "range": [
                    239,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 11
                    },
                    "start": {
                      "column": 32,
                      "line": 11
                    }
                  }
                },
                "range": [
                  236,
                  241
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
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    243,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 11
                    },
                    "start": {
                      "column": 36,
                      "line": 11
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "70",
                  "value": 70,
                  "range": [
                    246,
                    248
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 11
                    },
                    "start": {
                      "column": 39,
                      "line": 11
                    }
                  }
                },
                "range": [
                  243,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 11
                  },
                  "start": {
                    "column": 36,
                    "line": 11
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "desc",
                  "optional": false,
                  "range": [
                    250,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 11
                    },
                    "start": {
                      "column": 43,
                      "line": 11
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"position\"",
                  "value": "position",
                  "range": [
                    256,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 11
                    },
                    "start": {
                      "column": 49,
                      "line": 11
                    }
                  }
                },
                "range": [
                  250,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 11
                  },
                  "start": {
                    "column": 43,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              234,
              268
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 11
              },
              "start": {
                "column": 27,
                "line": 11
              }
            }
          },
          "range": [
            211,
            268
          ],
          "loc": {
            "end": {
              "column": 61,
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
        207,
        269
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        270,
        347
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exportedWithComplicatedValue",
              "optional": false,
              "range": [
                281,
                309
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      314,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 12
                      },
                      "start": {
                        "column": 44,
                        "line": 12
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "30",
                    "value": 30,
                    "range": [
                      317,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 12
                      },
                      "start": {
                        "column": 47,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    314,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 12
                    },
                    "start": {
                      "column": 44,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      321,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 12
                      },
                      "start": {
                        "column": 51,
                        "line": 12
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "70",
                    "value": 70,
                    "range": [
                      324,
                      326
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 12
                      },
                      "start": {
                        "column": 54,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    321,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 12
                    },
                    "start": {
                      "column": 51,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "desc",
                    "optional": false,
                    "range": [
                      328,
                      332
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 12
                      },
                      "start": {
                        "column": 58,
                        "line": 12
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"position\"",
                    "value": "position",
                    "range": [
                      334,
                      344
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 12
                      },
                      "start": {
                        "column": 64,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    328,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 12
                    },
                    "start": {
                      "column": 58,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                312,
                346
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 12
                },
                "start": {
                  "column": 42,
                  "line": 12
                }
              }
            },
            "range": [
              281,
              346
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 12
              },
              "start": {
                "column": 11,
                "line": 12
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          277,
          347
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 12
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 77,
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
            "name": "declaredVar",
            "optional": false,
            "range": [
              361,
              372
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 14
              },
              "start": {
                "column": 12,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            361,
            372
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 14
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        349,
        373
      ],
      "loc": {
        "end": {
          "column": 24,
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
            "name": "declareVar2",
            "optional": false,
            "range": [
              386,
              397
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            386,
            397
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        374,
        397
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "declaredVar",
            "optional": false,
            "range": [
              411,
              422
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          },
          "init": null,
          "range": [
            411,
            422
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 17
            },
            "start": {
              "column": 12,
              "line": 17
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        399,
        423
      ],
      "loc": {
        "end": {
          "column": 24,
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
            "name": "deckareVarWithType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 18
                },
                "start": {
                  "column": 30,
                  "line": 18
                }
              },
              "range": [
                454,
                462
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  456,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 18
                  },
                  "start": {
                    "column": 32,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              436,
              462
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 18
              },
              "start": {
                "column": 12,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            436,
            462
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 18
            },
            "start": {
              "column": 12,
              "line": 18
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        424,
        463
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        464,
        511
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exportedDeclaredVar",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 19
                  },
                  "start": {
                    "column": 38,
                    "line": 19
                  }
                },
                "range": [
                  502,
                  510
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    504,
                    510
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 19
                    },
                    "start": {
                      "column": 40,
                      "line": 19
                    }
                  }
                }
              },
              "range": [
                483,
                510
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 19
                },
                "start": {
                  "column": 19,
                  "line": 19
                }
              }
            },
            "init": null,
            "range": [
              483,
              510
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 19
              },
              "start": {
                "column": 19,
                "line": 19
              }
            }
          }
        ],
        "declare": true,
        "kind": "var",
        "range": [
          471,
          511
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 19
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 47,
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
            "name": "arrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              },
              "range": [
                525,
                535
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    527,
                    533
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 21
                    },
                    "start": {
                      "column": 14,
                      "line": 21
                    }
                  }
                },
                "range": [
                  527,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 21
                  },
                  "start": {
                    "column": 14,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              517,
              535
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  539,
                  542
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 21
                  },
                  "start": {
                    "column": 26,
                    "line": 21
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'b'",
                "value": "b",
                "range": [
                  544,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 21
                  },
                  "start": {
                    "column": 31,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              538,
              548
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 21
              },
              "start": {
                "column": 25,
                "line": 21
              }
            }
          },
          "range": [
            517,
            548
          ],
          "loc": {
            "end": {
              "column": 35,
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
      "kind": "var",
      "range": [
        513,
        549
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        551,
        609
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exportedArrayVar",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 23
                  },
                  "start": {
                    "column": 27,
                    "line": 23
                  }
                },
                "range": [
                  578,
                  607
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            582,
                            583
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 23
                            },
                            "start": {
                              "column": 31,
                              "line": 23
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 23
                            },
                            "start": {
                              "column": 32,
                              "line": 23
                            }
                          },
                          "range": [
                            583,
                            591
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              585,
                              591
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 23
                              },
                              "start": {
                                "column": 34,
                                "line": 23
                              }
                            }
                          }
                        },
                        "range": [
                          582,
                          592
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 23
                          },
                          "start": {
                            "column": 31,
                            "line": 23
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            593,
                            594
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 23
                            },
                            "start": {
                              "column": 42,
                              "line": 23
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 23
                            },
                            "start": {
                              "column": 43,
                              "line": 23
                            }
                          },
                          "range": [
                            594,
                            602
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              596,
                              602
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 23
                              },
                              "start": {
                                "column": 45,
                                "line": 23
                              }
                            }
                          }
                        },
                        "range": [
                          593,
                          603
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 23
                          },
                          "start": {
                            "column": 42,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      580,
                      605
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 23
                      },
                      "start": {
                        "column": 29,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    580,
                    607
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 23
                    },
                    "start": {
                      "column": 29,
                      "line": 23
                    }
                  }
                }
              },
              "range": [
                562,
                607
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "init": null,
            "range": [
              562,
              607
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 23
              },
              "start": {
                "column": 11,
                "line": 23
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          558,
          609
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 23
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 58,
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
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    634,
                    635
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 24
                    },
                    "start": {
                      "column": 24,
                      "line": 24
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "30",
                  "value": 30,
                  "range": [
                    637,
                    639
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 24
                    },
                    "start": {
                      "column": 27,
                      "line": 24
                    }
                  }
                },
                "range": [
                  634,
                  639
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 24
                  },
                  "start": {
                    "column": 24,
                    "line": 24
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    641,
                    642
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 24
                    },
                    "start": {
                      "column": 31,
                      "line": 24
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'hello world'",
                  "value": "hello world",
                  "range": [
                    645,
                    658
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 24
                    },
                    "start": {
                      "column": 35,
                      "line": 24
                    }
                  }
                },
                "range": [
                  641,
                  658
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 24
                  },
                  "start": {
                    "column": 31,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              632,
              660
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 24
              },
              "start": {
                "column": 22,
                "line": 24
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
            "name": "exportedArrayVar",
            "optional": false,
            "range": [
              610,
              626
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "range": [
              627,
              631
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 24
              },
              "start": {
                "column": 17,
                "line": 24
              }
            }
          },
          "range": [
            610,
            631
          ],
          "loc": {
            "end": {
              "column": 21,
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
          610,
          661
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        610,
        662
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 24
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      713,
                      714
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"Hello\"",
                    "value": "Hello",
                    "range": [
                      716,
                      723
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 28
                      },
                      "start": {
                        "column": 11,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    713,
                    723
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      733,
                      734
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"word\"",
                    "value": "word",
                    "range": [
                      736,
                      742
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 29
                      },
                      "start": {
                        "column": 11,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    733,
                    742
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "range": [
                      752,
                      753
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      755,
                      756
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 30
                      },
                      "start": {
                        "column": 11,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    752,
                    756
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                703,
                762
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "range": [
              696,
              763
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          690,
          765
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 26,
            "line": 26
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "simpleFunction",
        "optional": false,
        "range": [
          673,
          687
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
          }
        }
      },
      "params": [],
      "range": [
        664,
        765
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        767,
        834
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "simpleFunction",
                  "optional": false,
                  "range": [
                    815,
                    829
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 35
                    },
                    "start": {
                      "column": 11,
                      "line": 35
                    }
                  }
                },
                "optional": false,
                "range": [
                  815,
                  831
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 35
                  },
                  "start": {
                    "column": 11,
                    "line": 35
                  }
                }
              },
              "range": [
                808,
                832
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            }
          ],
          "range": [
            802,
            834
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 36
            },
            "start": {
              "column": 35,
              "line": 34
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedFunction",
          "optional": false,
          "range": [
            783,
            799
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 34
            },
            "start": {
              "column": 16,
              "line": 34
            }
          }
        },
        "params": [],
        "range": [
          774,
          834
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 7,
            "line": 34
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              852,
              905
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"Hello\"",
                      "value": "Hello",
                      "range": [
                        891,
                        898
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 40
                        },
                        "start": {
                          "column": 15,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      884,
                      899
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  874,
                  905
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 26,
                    "line": 39
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  868,
                  871
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 39
                  },
                  "start": {
                    "column": 20,
                    "line": 39
                  }
                }
              },
              "params": [],
              "range": [
                859,
                905
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 11,
                  "line": 39
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          }
        ],
        "range": [
          846,
          907
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 10,
            "line": 38
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          843,
          845
        ],
        "decorators": [],
        "name": "m1",
        "optional": false,
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
      "kind": "module",
      "range": [
        836,
        907
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        908,
        963
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                940,
                961
              ],
              "attributes": [],
              "declaration": {
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
                            "column": 24,
                            "line": 45
                          },
                          "start": {
                            "column": 16,
                            "line": 45
                          }
                        },
                        "range": [
                          952,
                          960
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            954,
                            960
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 45
                            },
                            "start": {
                              "column": 18,
                              "line": 45
                            }
                          }
                        }
                      },
                      "range": [
                        951,
                        960
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 45
                        },
                        "start": {
                          "column": 15,
                          "line": 45
                        }
                      }
                    },
                    "init": null,
                    "range": [
                      951,
                      960
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 45
                      },
                      "start": {
                        "column": 15,
                        "line": 45
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  947,
                  961
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 45
                  },
                  "start": {
                    "column": 11,
                    "line": 45
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 25,
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
            933,
            963
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 46
            },
            "start": {
              "column": 25,
              "line": 43
            }
          }
        },
        "declare": true,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            930,
            932
          ],
          "decorators": [],
          "name": "m2",
          "optional": false,
          "loc": {
            "end": {
              "column": 24,
              "line": 43
            },
            "start": {
              "column": 22,
              "line": 43
            }
          }
        },
        "kind": "module",
        "range": [
          915,
          963
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 7,
            "line": 43
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        966,
        1046
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                990,
                1044
              ],
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m1",
                            "optional": false,
                            "range": [
                              1029,
                              1031
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
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              1032,
                              1035
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 52
                              },
                              "start": {
                                "column": 18,
                                "line": 52
                              }
                            }
                          },
                          "range": [
                            1029,
                            1035
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 52
                            },
                            "start": {
                              "column": 15,
                              "line": 52
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1029,
                          1037
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 52
                          },
                          "start": {
                            "column": 15,
                            "line": 52
                          }
                        }
                      },
                      "range": [
                        1022,
                        1038
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 52
                        },
                        "start": {
                          "column": 8,
                          "line": 52
                        }
                      }
                    }
                  ],
                  "range": [
                    1012,
                    1044
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 53
                    },
                    "start": {
                      "column": 26,
                      "line": 51
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    1006,
                    1009
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 51
                    },
                    "start": {
                      "column": 20,
                      "line": 51
                    }
                  }
                },
                "params": [],
                "range": [
                  997,
                  1044
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 53
                  },
                  "start": {
                    "column": 11,
                    "line": 51
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            }
          ],
          "range": [
            983,
            1046
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 54
            },
            "start": {
              "column": 17,
              "line": 49
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            980,
            982
          ],
          "decorators": [],
          "name": "m3",
          "optional": false,
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
        },
        "kind": "module",
        "range": [
          973,
          1046
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 7,
            "line": 49
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1048,
        1077
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar1",
              "optional": false,
              "range": [
                1059,
                1064
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 56
                },
                "start": {
                  "column": 11,
                  "line": 56
                }
              }
            },
            "init": null,
            "range": [
              1059,
              1064
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 56
              },
              "start": {
                "column": 11,
                "line": 56
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar2",
              "optional": false,
              "range": [
                1066,
                1071
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 56
                },
                "start": {
                  "column": 18,
                  "line": 56
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                1074,
                1076
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 56
                },
                "start": {
                  "column": 26,
                  "line": 56
                }
              }
            },
            "range": [
              1066,
              1076
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 56
              },
              "start": {
                "column": 18,
                "line": 56
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          1055,
          1077
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 56
          },
          "start": {
            "column": 7,
            "line": 56
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "eVar22",
            "optional": false,
            "range": [
              1082,
              1088
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          "init": null,
          "range": [
            1082,
            1088
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 57
            },
            "start": {
              "column": 4,
              "line": 57
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1078,
        1089
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1090,
        1126
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar3",
              "optional": false,
              "range": [
                1101,
                1106
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 58
                },
                "start": {
                  "column": 11,
                  "line": 58
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                1109,
                1111
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 58
                },
                "start": {
                  "column": 19,
                  "line": 58
                }
              }
            },
            "range": [
              1101,
              1111
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 58
              },
              "start": {
                "column": 11,
                "line": 58
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar4",
              "optional": false,
              "range": [
                1113,
                1118
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 58
                },
                "start": {
                  "column": 23,
                  "line": 58
                }
              }
            },
            "init": null,
            "range": [
              1113,
              1118
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 58
              },
              "start": {
                "column": 23,
                "line": 58
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar5",
              "optional": false,
              "range": [
                1120,
                1125
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 58
                },
                "start": {
                  "column": 30,
                  "line": 58
                }
              }
            },
            "init": null,
            "range": [
              1120,
              1125
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 58
              },
              "start": {
                "column": 30,
                "line": 58
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          1097,
          1126
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 58
          },
          "start": {
            "column": 7,
            "line": 58
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 36,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 36,
      "line": 58
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
